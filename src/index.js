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
      url: "https://www.target.com/p/boys-short-sleeve-relaxed-fit-t-shirt-cat-jack/-/A-93032344",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-basketball-hoop-graphic-t-shirt-cat-jack-blue/-/A-94493160",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-space-bulldog-graphic-t-shirt-cat-38-jack-8482-beige/-/A-94650209",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-varsity-baseball-graphic-t-shirt-cat-jack-blue/-/A-94632207",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-relaxed-fit-t-shirt-cat-38-jack-8482/-/A-94582922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-printed-jersey-cat-jack/-/A-94614202",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-halloween-glow-in-the-dark-monster-fangs-graphic-t-shirt-cat-jack-black/-/A-94619144",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-cassette-tape-graphic-t-shirt-cat-jack-black/-/A-94619141",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-big-sky-graphic-t-shirt-cat-jack-olive-green/-/A-94619139",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-39-brain-freeze-39-graphic-t-shirt-cat-38-jack-8482-purple/-/A-94417021",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-miami-drift-team-graphic-t-shirt-cat-38-jack-dark-8482-dark-green/-/A-94650208",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-burger-planet-graphic-t-shirt-cat-jack-black/-/A-94619140",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-west-coast-california-graphic-t-shirt-cat-jack-khaki/-/A-94619146",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-dinosaur-graphic-t-shirt-cat-jack-brown/-/A-94619138",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-halloween-dogs-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94650207",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-pasta-graphic-t-shirt-cat-jack-gray/-/A-94619142",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94638343",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-bird-graphic-t-shirt-cat-jack-bright-turquoise-blue/-/A-94493190",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-graphic-t-shirt-cat-jack-pink/-/A-94663043",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-skateboard-dino-graphic-t-shirt-cat-38-jack-8482-red/-/A-93276692",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-93574669",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-explore-nature-graphic-t-shirt-cat-38-jack-8482-brown/-/A-94650206",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-gameplay-graphic-t-shirt-cat-jack-blue/-/A-94663045",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-m/-/A-94567048",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-relaxed-fit-t-shirt-cat-38-jack-8482/-/A-94582922",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-l/-/A-94567049",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94638343",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-xl/-/A-94567050",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-printed-t-shirt-cat-jack-light-brown/-/A-94833984",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94638342",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/kids-adaptive-halloween-graphic-t-shirt-cat-jack-purple/-/A-94638340",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-t-shirt-art-class/-/A-94473760",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-cutoff-tank-top-art-class/-/A-94189986",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-graphic-t-shirt-all-in-motion/-/A-94471835",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-venice-beach-graphic-tank-top-art-class-gray/-/A-94257271",
      tags: "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Target Brands, Tops",
      filters: {
        brand: "Target\n¬ brands",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-tic-tac-toe-grid-of-puppies-short-sleeve-graphic-t-shirt/-/A-1000822232",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-brothers-make-the-best-friends-short-sleeve-graphic-t-shirt/-/A-1000847350",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-dog-family-in-squares-t-shirt/-/A-85637043",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-collage-of-dalmatian-family-short-sleeve-graphic-t-shirt/-/A-1000822233",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-pongo-and-perdita-t-shirt/-/A-85823466",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-yes-i-need-all-these-dogs-t-shirt/-/A-89508212",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-the-whole-family-t-shirt/-/A-85823756",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-patch-in-the-pocket-t-shirt/-/A-85823924",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-puppy-dalmatian-love-t-shirt/-/A-85574350",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-retro-poster-t-shirt/-/A-85824063",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-the-whole-family-of-dogs-t-shirt/-/A-85637087",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-life-is-better-with-dogs-t-shirt/-/A-85637074",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-classic-red-logo-t-shirt/-/A-85823961",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-friends-fur-life-short-sleeve-graphic-t-shirt/-/A-1000847525",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-daddy-s-lil-bestie-short-sleeve-graphic-t-shirt/-/A-1000847288",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-spring-flowers-short-sleeve-graphic-t-shirt/-/A-1000822319",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-mommy-s-lil-bestie-short-sleeve-graphic-t-shirt/-/A-1000847195",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-home-is-where-the-puppies-are-t-shirt/-/A-85637036",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-one-hundred-and-one-dalmatians-london-couple-t-shirt/-/A-85823403",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-spring-flowers/-/A-1000821971",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-collage-of-dalmatian-family/-/A-1000821958",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-tic-tac-toe-grid-of-puppies/-/A-1000821980",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-friends-fur-life/-/A-1000847447",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/boys-101-dalmatians-brothers-make-the-best-friends/-/A-1000847335",
      tags: "101 Dalmatians, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "101 Dalmatians",
      },
    },
    {
      url: "https://www.target.com/p/youth-4-pack-holiday-movie-tees-a-christmas-story-polar-express-elf-frosty-the-snowman/-/A-90019130",
      tags: "A Christmas Story, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-a-christmas-story-random-scattered-icons-youth-red-graphic-tee/-/A-87884965",
      tags: "A Christmas Story, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/a-christmas-tee-ralphie-diamond-portrait-art-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-91217512",
      tags: "A Christmas Story, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/a-christmas-story-oh-fudge-boy-s-heather-grey-t-shirt/-/A-84705973",
      tags: "A Christmas Story, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/a-christmas-story-ralphie-biting-soap-poster-art-crew-neck-short-sleeve-white-boy-s-t-shirt/-/A-90060809",
      tags: "A Christmas Story, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Christmas Story",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-holiday-stocking-boy-s-black-t-shirt/-/A-85354095",
      tags: "A Nightmare on Elm Street, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Nightmare on Elm Street",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-santa-freddy-boy-s-black-t-shirt/-/A-85352670",
      tags: "A Nightmare on Elm Street, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Nightmare on Elm Street",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-and-friends-boy-s-black-t-shirt/-/A-85354562",
      tags: "A Nightmare on Elm Street, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Nightmare on Elm Street",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-face-split-boy-s-black-t-shirt/-/A-85353242",
      tags: "A Nightmare on Elm Street, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Nightmare on Elm Street",
      },
    },
    {
      url: "https://www.target.com/p/fnaf-sister-location-characters-boy-s-black-t-shirt/-/A-85355637",
      tags: "A Nightmare on Elm Street, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Nightmare on Elm Street",
      },
    },
    {
      url: "https://www.target.com/p/five-nights-at-freddy-s-freddy-fazbear-split-boy-s-black-t-shirt/-/A-85352458",
      tags: "A Nightmare on Elm Street, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "A Nightmare on Elm Street",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-angus-young-playing-guitar-youth-black-graphic-youth-crew-neck-long-sleeve-tee/-/A-88861464",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-monochrome-angus-young-big-red-lightning-youth-athletic-heather-gray-crew-neck-tee/-/A-88813978",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-rock-or-bust-boy-s-short-sleeve-t-shirt-lounge-shorts-combo-set/-/A-91836535",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-rock-band-americana-logo-boy-s-navy-t-shirt/-/A-85451038",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-rock-band-logo-youth-boys-black-short-sleeve-graphic-tee-shirt/-/A-84941797",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/youth-rock-let-there-be-rock-classic-vintage-acdc-shirt-boys-graphic-tee/-/A-88297376",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-high-voltage-youth-boy-s-navy-t-shirt/-/A-84713953",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-red-angus-young-silhouette-youth-red-short-sleeve-crew-neck-tee/-/A-89177100",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-about-to-rock-tour-t-shirt/-/A-1004637380",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-back-in-black-logo-t-shirt/-/A-1004637405",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-angus-young-silhouette-in-red-lightning-bolt-youth-white-short-sleeve-crew-neck-tee/-/A-89177108",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-angus-young-limited-color-youth-black-short-sleeve-crew-neck-tee/-/A-89177205",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-let-there-be-rock-youth-black-t-shirt/-/A-86218511",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-3-up-splatter-drips-t-shirt/-/A-1004637641",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-thunderbolt-icon-crew-neck-short-sleeve-royal-blue-boy-s-t-shirt/-/A-90119762",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-roses-logo-t-shirt/-/A-1004637758",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-boys-white-crew-neck-short-sleeve-t-shirt/-/A-1004429857",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/let-there-be-rock-acdc-youth-boy-s-red-t-shirt/-/A-86467341",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/let-there-be-rock-acdc-youth-boy-s-white-t-shirt/-/A-86467320",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-back-in-black-t-shirt/-/A-1004637109",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-repeat-logo-band-t-shirt/-/A-1004637558",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-fire-bolt-t-shirt/-/A-1004634826",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-1978-world-tour-pop-art-logo-crew-neck-short-sleeve-boys-black-t-shirt/-/A-88144829",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tie-dye-logo-t-shirt/-/A-1004634527",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tie-dye-logo-t-shirt/-/A-1004634527",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tie-dye-bolt-t-shirt-red-medium/-/A-1004634437",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-world-tour-1979-navy-blue-boy-s-short-sleeve-t-shirt/-/A-85450899",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-black-ice-crew-neck-short-sleeve-boy-s-black-t-shirt/-/A-89764346",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-hand-drawn-logo-t-shirt/-/A-1004637225",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-leopard-bolt-kids-t-shirt-for-youth-black-medium/-/A-1002226260",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-ac-dc-powerage-t-shirt/-/A-1004637121",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-fire-logo-t-shirt/-/A-1004637027",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/let-there-be-rock-acdc-youth-boy-s-charcoal-t-shirt/-/A-86467360",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-let-there-be-rock-navy-boy-s-short-sleeve-t-shirt/-/A-88886478",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-let-there-be-rock-youth-athletic-heather-t-shirt/-/A-86219133",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/acdc-world-tour-flags-youth-black-t-shirt/-/A-87450613",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-struck-kids-t-shirt-for-youth-black-medium/-/A-1002226223",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-sketch-bolt-t-shirt/-/A-1004637686",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/ac-dc-skewed-checkerboard-bolt-kids-t-shirt-for-youth-white-medium/-/A-1002226305",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-highway-world-tour-79-t-shirt-black-x-small/-/A-1004637798",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-jailbreak-white-t-shirt/-/A-1004637358",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-live-t-shirt/-/A-1004637690",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-blow-up-your-video-t-shirt/-/A-1004637250",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-live-t-shirt/-/A-1004637681",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-salute-t-shirt/-/A-1004637531",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-highway-mono-black-t-shirt/-/A-1004636609",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tour-emblem-t-shirt/-/A-1004637575",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-ballbreaker-t-shirt/-/A-1004637482",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-outline-logo-black-t-shirt/-/A-1004637504",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-pwr-up-logo-t-shirt-black-small/-/A-1004634550",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-salute-t-shirt/-/A-1004637531",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-logo-tour-t-shirt/-/A-1004637007",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-blow-up-your-video-t-shirt/-/A-1004637250",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-back-in-black-t-shirt/-/A-1004637337",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-logo-raglan-t-shirt/-/A-1004636811",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-50-logo-t-shirt/-/A-1004636604",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-back-in-black-t-shirt/-/A-1004637563",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-jailbreak-white-t-shirt/-/A-1004637358",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-one-way-put-t-shirt/-/A-1004634767",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-salute-t-shirt/-/A-1004637445",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-1979-world-tour-t-shirt/-/A-1004637170",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-stamp-poster-t-shirt/-/A-1004636679",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-highway-to-hell-emblem-t-shirt/-/A-1004637267",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-let-there-be-rock-tour-t-shirt/-/A-1004637659",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-high-voltage-1976-t-shirt/-/A-1004637626",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-live-50-t-shirt/-/A-1004637185",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tour-1979-poster-t-shirt/-/A-1004637135",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-neon-bolt-t-shirt/-/A-1004634774",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-plaid-logo-t-shirt-black-x-large/-/A-1004634487",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-logo-raglan-t-shirt/-/A-1004636805",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tour-emblem-t-shirt/-/A-1004637589",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tour-emblem-t-shirt/-/A-1004637575",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-pwr-up-logo-t-shirt-black-x-small/-/A-1004634554",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-high-voltage-1976-t-shirt/-/A-1004637626",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-jailbreak-white-t-shirt/-/A-1004637358",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-plaid-logo-t-shirt-black-x-large/-/A-1004634487",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-let-there-be-rock-tour-t-shirt/-/A-1004637659",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-logo-distress-t-shirt/-/A-1004637115",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-back-in-black-t-shirt/-/A-1004637563",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-highway-mono-t-shirt/-/A-1004637014",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-highway-mono-black-t-shirt/-/A-1004636609",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-logo-stack-t-shirt/-/A-1004636983",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-tour-emblem-t-shirt/-/A-1004637575",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-one-way-put-t-shirt/-/A-1004634767",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-checkerboard-gradient-logo-t-shirt/-/A-1004634508",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-back-in-black-t-shirt/-/A-1004637337",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-50-logo-t-shirt/-/A-1004636604",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-my-friends-t-shirt/-/A-1004634785",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boys-acdc-paisley-logo-t-shirt/-/A-1004634514",
      tags: "AC/DC, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "AC/DC",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aaahh-real-monsters-characters-eggster-t-shirt/-/A-1002734965",
      tags: "Aaahh!!! Real Monsters, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aaahh!!! Real Monsters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aaahh-real-monsters-group-hearts-t-shirt/-/A-85565251",
      tags: "Aaahh!!! Real Monsters, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aaahh!!! Real Monsters",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-adventure-time-feelin-lucky-bmo-t-shirt/-/A-90779571",
      tags: "Adventure Time, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Adventure Time",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-adventure-time-shamrock-jake-t-shirt/-/A-90779249",
      tags: "Adventure Time, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Adventure Time",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-adventure-time-finn-and-jake-box-t-shirt/-/A-85155418",
      tags: "Adventure Time, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Adventure Time",
      },
    },
    {
      url: "https://www.target.com/p/aeropostale-boys-34-nyc-graphic-t-shirt/-/A-1004776720",
      tags: "Aeropostale, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aeropostale",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-80s-genie-performance-tee/-/A-87529218",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-friend-trio-performance-tee/-/A-91641999",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-sand-tiger-cave-performance-tee/-/A-87529344",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-rajah-are-you-kitten-me-t-shirt/-/A-91642127",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-magic-carpet-ride-wave-t-shirt/-/A-87529427",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-jafar-good-to-be-bad-t-shirt/-/A-87529293",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-rajah-easy-tiger-t-shirt/-/A-91642140",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-genie-grin-small-t-shirt/-/A-91642431",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-genie-applause-sign-t-shirt/-/A-87529467",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-crew-dance-t-shirt/-/A-91642461",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-expressions-of-genie-t-shirt/-/A-91642697",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-genie-badge-performance-tee/-/A-89598995",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-make-your-own-magic-t-shirt/-/A-91641870",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-90-s-spring-break-genie-t-shirt/-/A-87529290",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-genie-grin-t-shirt/-/A-91642571",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-lago-and-flamingo-t-shirt/-/A-91641982",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-jasmine-don-t-be-basic-t-shirt/-/A-91642446",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-a-whole-new-world-t-shirt/-/A-91642126",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-whole-new-world-heart-couple-t-shirt/-/A-91642672",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-visit-agrabah-it-s-a-whole-new-world-t-shirt/-/A-91642061",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-cosmic-dreamer-t-shirt/-/A-91641907",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-on-a-magic-carpet-ride-t-shirt/-/A-91642583",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-agrabah-cave-of-wonders-t-shirt/-/A-91642174",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-cave-of-wonder-agrabah-t-shirt/-/A-91642280",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aladdin-jasmine-don-t-be-basic-t-shirt/-/A-91642446",
      tags: "Aladdin, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aladdin",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-did-someone-say-party-performance-tee/-/A-85824146",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-curiouser-and-curiouser-performance-tee/-/A-85633133",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-in-colorful-scary-forest-performance-tee/-/A-85633316",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cartoon-alice-portrait-performance-tee/-/A-85633401",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-caterpillar-who-are-you-performance-tee/-/A-85823849",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-we-re-all-mad-here-performance-tee/-/A-85824230",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-not-all-there-cheshire-cat-performance-tee/-/A-85633127",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-any-road-will-take-you-there-the-white-rabbit-t-shirt/-/A-85633406",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-map-of-cheshire-cat-paw-prints-t-shirt/-/A-85633152",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-and-mad-hatter-party-t-shirt/-/A-85637109",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-did-someone-say-party-t-shirt/-/A-85824208",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-pocket-sketch-t-shirt/-/A-85823832",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-artistic-alice-long-hair-tea-party-performance-tee/-/A-85633373",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-the-white-rabbit-sorry-i-m-late-t-shirt/-/A-85637097",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-we-re-all-mad-here-t-shirt/-/A-85824251",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-we-re-all-mad-here-square-t-shirt/-/A-85823944",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-i-can-t-be-bothered-says-absolem-t-shirt/-/A-85633395",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-we-re-all-mad-here-colorful-t-shirt/-/A-85824217",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-i-am-not-myself-silhouette-performance-tee/-/A-85824029",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-the-white-rabbit-color-outlines-t-shirt/-/A-85637103",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-mad-hatter-time-for-tea-outline-t-shirt/-/A-85824115",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-in-bottle-mirror-poster-t-shirt/-/A-85637028",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-cheshire-cat-pocket-sketch-performance-tee/-/A-85823964",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-artistic-alice-long-hair-tea-party-t-shirt/-/A-85633368",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-distressed-group-shot-t-shirt/-/A-85824314",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-and-the-talking-flowers-t-shirt/-/A-85633197",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-in-colorful-scary-forest-t-shirt/-/A-85633347",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-retro-movie-poster-t-shirt/-/A-85823925",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-mad-hatter-time-for-tea-t-shirt/-/A-85823913",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-lost-stuck-in-a-bottle-t-shirt/-/A-85637035",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-a-very-merry-unbirthday-t-shirt/-/A-85824122",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-i-am-not-myself-silhouette-t-shirt/-/A-85824056",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-i-can-t-be-bothered-says-absolem-performance-tee/-/A-85633412",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-we-re-all-mad-here-trippy-performance-tee/-/A-87811426",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-alice-in-wonderland-alice-oh-dear-cried-so-much-t-shirt/-/A-85633226",
      tags: "Alice in Wonderland, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Alice in Wonderland",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-graphic-t-shirt-all-in-motion/-/A-94471835",
      tags: "All In Motion, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "All In Motion",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-long-sleeve-two-fer-graphic-tee-shirt/-/A-93166968",
      tags: "Andy & Evan, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Andy & Evan",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-halloween-dino-graphic-twofer-tee/-/A-1005060931",
      tags: "Andy & Evan, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Andy & Evan",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-heather-grey-jersey-hooded-tee/-/A-93280885",
      tags: "Andy & Evan, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Andy & Evan",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-long-sleeve-raglan-color-blocked-alphabet-tee/-/A-1005060932",
      tags: "Andy & Evan, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Andy & Evan",
      },
    },
    {
      url: "https://www.target.com/p/wakko-and-yakko-youth-tshirt-boys-graphic-tee/-/A-84707120",
      tags: "Animaniacs, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Animaniacs",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-ant-man-and-the-wasp-quantumania-movie-logo-white-t-shirt/-/A-89016757",
      tags: "Ant-Man, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Ant-Man",
      },
    },
    {
      url: "https://www.target.com/p/aquaman-logo-trap-graphics-boy-s-navy-t-shirt/-/A-85450817",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-shark-ride-t-shirt/-/A-92917056",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/aquaman-savior-of-the-seas-boy-s-navy-t-shirt/-/A-85450811",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/aquaman-fight-for-justice-boy-s-heather-grey-t-shirt/-/A-84706842",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-aquaman-throne-boy-s-navy-tee/-/A-85451118",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-and-the-lost-kingdom-retro-action-pose-t-shirt/-/A-90058464",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-aquaman-emblem-boy-s-navy-t-shirt/-/A-85783079",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-and-the-lost-kingdom-retro-window-poster-t-shirt/-/A-90058273",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-and-the-lost-kingdom-black-manta-portrait-t-shirt/-/A-90058577",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-movie-aquaman-logo-and-trident-boy-s-navy-t-shirt/-/A-85783125",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-trident-shape-t-shirt/-/A-92917224",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-ocean-rain-t-shirt/-/A-92917206",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-trident-t-shirt/-/A-92913448",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-swimming-shape-t-shirt/-/A-92916856",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-bubbles-t-shirt/-/A-92913486",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-water-shape-t-shirt/-/A-92917151",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-and-the-lost-kingdom-shiny-emblem-t-shirt/-/A-90058315",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-and-the-lost-kingdom-black-manta-distressed-surf-t-shirt/-/A-90058579",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-ocean-shadow-t-shirt/-/A-92917408",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-and-the-lost-kingdom-shiny-trident-t-shirt/-/A-90058328",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-trident-king-swimming-t-shirt/-/A-92917513",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-aquaman-king-of-atlantis-t-shirt/-/A-92913611",
      tags: "Aquaman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Aquaman",
      },
    },
    {
      url: "https://www.target.com/p/boys-cutoff-tank-top-art-class/-/A-94189986",
      tags: "Art Class, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Art Class",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-t-shirt-art-class/-/A-94473760",
      tags: "Art Class, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Art Class",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-jake-sully-face-logo-t-shirt/-/A-89015922",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-tulkun-ride-logo-t-shirt/-/A-89016041",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-neytiri-half-face-logo-t-shirt/-/A-89015789",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-neytiri-pandora-night-scene-t-shirt/-/A-87692141",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-great-leonopteryx-badge-t-shirt/-/A-87692125",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-pandora-diagrams-t-shirt/-/A-87692251",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-ilus-portrait-t-shirt/-/A-89015821",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-panopyras-scene-t-shirt/-/A-87692225",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-world-of-pandora-t-shirt/-/A-87692576",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-pandora-flying-logo-t-shirt/-/A-89015885",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-discover-pandora-t-shirt/-/A-87692235",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-pandora-panopyra-and-woodsprites-diagram-t-shirt/-/A-87692105",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-great-leonopteryx-pandora-planet-t-shirt/-/A-87692136",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-neytiri-face-logo-t-shirt/-/A-89015966",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-great-leonopteryx-silhouette-scenic-logo-t-shirt/-/A-89016093",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-way-of-water-ilu-logo-t-shirt/-/A-89015925",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-neytiri-a-world-like-no-other-t-shirt/-/A-87692499",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avatar",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-sokka-aang-katara-3-pack-t-shirts-little-kid-to-big-kid/-/A-85275713",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-appa-flying-long-sleeve-graphic-t-shirt/-/A-1000428482",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-arrows-long-sleeve-graphic-t-shirt/-/A-1000429360",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-toph-long-sleeve-graphic-t-shirt/-/A-1000425661",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-trio-long-sleeve-graphic-t-shirt/-/A-1000425286",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-happy-flying-long-sleeve-graphic-t-shirt/-/A-1000429221",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-crest-long-sleeve-graphic-t-shirt/-/A-1000430032",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-nations-symbols-long-sleeve-graphic-t-shirt/-/A-1000426831",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-elements-harmony-long-sleeve-graphic-t-shirt/-/A-1000427418",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-aang-katara-long-sleeve-graphic-t-shirt/-/A-1000426291",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-appa-hungry-long-sleeve-graphic-t-shirt/-/A-1000428479",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-group-long-sleeve-graphic-t-shirt/-/A-1000429258",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-airbending-long-sleeve-graphic-t-shirt/-/A-1000429757",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-ink-splatter-long-sleeve-graphic-t-shirt/-/A-1000428805",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-momo-kanji-long-sleeve-graphic-t-shirt/-/A-1000428646",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-wind-long-sleeve-graphic-t-shirt/-/A-1000428547",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-momo-cute-long-sleeve-graphic-t-shirt/-/A-1000426505",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-elements-square-long-sleeve-graphic-t-shirt/-/A-1000429840",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-nope-long-sleeve-graphic-t-shirt/-/A-1000425828",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-elements-inverse-long-sleeve-graphic-t-shirt/-/A-1000427102",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-elements-long-sleeve-graphic-t-shirt/-/A-1000427333",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-zuko-fire-nation-long-sleeve-graphic-t-shirt/-/A-1000424720",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-2005-long-sleeve-graphic-t-shirt/-/A-1000429883",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-boomerang-guy-long-sleeve-graphic-t-shirt/-/A-1000427727",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-boomerang-guy-long-sleeve-graphic-t-shirt/-/A-1000427727",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-nations-long-sleeve-graphic-t-shirt/-/A-1000427049",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-moon-and-ocean-spirit-koi-long-sleeve-graphic-t-shirt/-/A-1000426468",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-sitting-avatar-state-long-sleeve-graphic-t-shirt/-/A-1000424772",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-same-roots-long-sleeve-graphic-t-shirt/-/A-1000429856",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-momo-happy-long-sleeve-graphic-t-shirt/-/A-1000429077",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-katara-and-aang-grid-long-sleeve-graphic-t-shirt/-/A-1000429865",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-avatar-state-aang-long-sleeve-graphic-t-shirt/-/A-1000428071",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-cute-appa-yip-yip-long-sleeve-graphic-t-shirt/-/A-1000427429",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-battle-face-long-sleeve-graphic-t-shirt/-/A-1000428038",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-swirl-long-sleeve-graphic-t-shirt/-/A-1000428474",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-jasmine-dragon-tea-long-sleeve-graphic-t-shirt/-/A-1000426873",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-toph-melon-lord-long-sleeve-graphic-t-shirt/-/A-1000425606",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-trio-squad-long-sleeve-graphic-t-shirt/-/A-1000425448",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-last-airbender-aang-and-penguins-t-shirt/-/A-87693707",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-air-water-earth-fire-grid-short-sleeve-graphic-t-shirt/-/A-93834518",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-avatar-state-aang-short-sleeve-graphic-t-shirt/-/A-1000427964",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-toph-aang-katara-zuko-four-elements-short-sleeve-graphic-t-shirt/-/A-93834434",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-appa-hungry-short-sleeve-graphic-t-shirt/-/A-1001733228",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-toph-melon-lord-short-sleeve-graphic-t-shirt/-/A-93834488",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-toph-short-sleeve-graphic-t-shirt/-/A-1000425706",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-trio-short-sleeve-graphic-t-shirt/-/A-1000425611",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-and-momo-short-sleeve-graphic-t-shirt/-/A-93834609",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-sokka-katara-trio-short-sleeve-graphic-t-shirt/-/A-93834419",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-better-place-short-sleeve-graphic-t-shirt/-/A-1000430019",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-zuko-katara-aang-toph-nation-elements-short-sleeve-graphic-t-shirt/-/A-93834430",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-appa-katara-sokka-aang-momo-flying-short-sleeve-graphic-t-shirt/-/A-93834583",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-punch-short-sleeve-graphic-t-shirt/-/A-93834604",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-wind-short-sleeve-graphic-t-shirt/-/A-1000428535",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-momo-kanji-short-sleeve-graphic-t-shirt/-/A-1000428666",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-staff-short-sleeve-graphic-t-shirt/-/A-1000425691",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-momo-cute-short-sleeve-graphic-t-shirt/-/A-1000426757",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-arrows-short-sleeve-graphic-t-shirt/-/A-1000429981",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-elements-harmony-short-sleeve-graphic-t-shirt/-/A-1000427439",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-nope-not-today-short-sleeve-graphic-t-shirt/-/A-93834411",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-jasmine-dragon-tea-short-sleeve-graphic-t-shirt/-/A-1000426864",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-swirl-short-sleeve-graphic-t-shirt/-/A-1000428616",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-airbending-short-sleeve-graphic-t-shirt/-/A-1000429647",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-prince-zuko-fire-nation-short-sleeve-graphic-t-shirt/-/A-93834420",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-elements-short-sleeve-graphic-t-shirt/-/A-1001733044",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-and-katara-elements-grid-short-sleeve-graphic-t-shirt/-/A-93834616",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-cute-appa-yip-yip-short-sleeve-graphic-t-shirt/-/A-1001733279",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-crest-short-sleeve-graphic-t-shirt/-/A-1000430034",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-2005-short-sleeve-graphic-t-shirt/-/A-93834614",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-trio-squad-short-sleeve-graphic-t-shirt/-/A-1000425316",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-ink-splatter-short-sleeve-graphic-t-shirt/-/A-1000428916",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-same-roots-short-sleeve-graphic-t-shirt/-/A-1000429900",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-zuko-calming-tea-short-sleeve-graphic-t-shirt/-/A-1000424950",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-trio-squad-short-sleeve-graphic-t-shirt/-/A-1000425316",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-nations-symbols-short-sleeve-graphic-t-shirt/-/A-1000426893",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-just-a-guy-with-a-boomerang-short-sleeve-graphic-t-shirt/-/A-93834574",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-happy-flying-short-sleeve-graphic-t-shirt/-/A-1000429161",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-fire-nation-short-sleeve-graphic-t-shirt/-/A-1000427631",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-water-tribe-short-sleeve-graphic-t-shirt/-/A-93834408",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-elements-short-sleeve-graphic-t-shirt/-/A-93834431",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-zuko-calming-tea-short-sleeve-graphic-t-shirt/-/A-1000424950",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-moon-and-ocean-spirit-koi-short-sleeve-graphic-t-shirt/-/A-1000426457",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-avatar-the-last-airbender-classic-logo-circle-silhouette-t-shirt/-/A-87693868",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-elements/-/A-1000587723",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-momo-cute/-/A-1000587633",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-sitting-avatar-state/-/A-1000587531",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-same-roots/-/A-1000587852",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-nope/-/A-1000587595",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-nations/-/A-1000587672",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-happy-flying/-/A-1000587804",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-swirl/-/A-1000587814",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-ink-splatter/-/A-1000587751",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-cute-appa-yip-yip/-/A-1000587744",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-boomerang-guy/-/A-1000587713",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-zuko-fire-nation/-/A-1000587552",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-jasmine-dragon-tea/-/A-1000587662",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-aang-katara/-/A-1000587605",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-happy-flying/-/A-1000587804",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-moon-and-ocean-spirit-koi/-/A-1000587628",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-aang-sitting-avatar-state/-/A-1000587531",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-aang-katara/-/A-1000587605",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-sokka-nope/-/A-1000587595",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-trio-squad/-/A-1000587562",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-zuko-calming-tea/-/A-1000587557",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-appa-hungry/-/A-1000587772",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-four-nations/-/A-1000587672",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/boys-avatar-the-last-airbender-boomerang-guy/-/A-1000587713",
      tags: "Avatar, Boys’ Clothing, Graphic Tees, Kids’ Clothing, The Last Airbender, Tops",
      filters: {
        brand: "Avatar: The Last Airbender",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-marvel-boys-superhero-inspired-block-letter-logo-design-t-shirt-black/-/A-1003836731",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-boys-hulk-iron-man-captain-america-jersey-t-shirt-tee/-/A-91166439",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-marvel-big-boys-avengers-character-grid-8-bit-pixel-art-t-shirt-red/-/A-1000995716",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/marvel-avengers-captain-america-black-panther-iron-man-short-sleeve-graphic-t-shirt/-/A-1001856858",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/marvel-eternals-avengers-shang-chi-and-the-legend-of-the-ten-rings-2-pack-t-shirts-little-kid-to-big-kid/-/A-1001926054",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/marvel-boys-avengers-in-action-character-group-kids-long-sleeve-t-shirt/-/A-92507087",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-avengers-endgame-cap-smudged-shield-t-shirt/-/A-85815965",
      tags: "Avengers, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Avengers",
      },
    },
    {
      url: "https://www.target.com/p/bauer-youth-short-sleeve-t-shirt-m-c-vintage-large/-/A-89831027",
      tags: "BAUER Hockey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BAUER Hockey",
      },
    },
    {
      url: "https://www.target.com/p/bauer-youth-short-sleeve-t-shirt-m-c-vintage-small/-/A-89831038",
      tags: "BAUER Hockey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BAUER Hockey",
      },
    },
    {
      url: "https://www.target.com/p/bauer-youth-short-sleeve-t-shirt-m-c-vintage-x-large/-/A-89831041",
      tags: "BAUER Hockey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BAUER Hockey",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-delorean-cartoon-performance-tee/-/A-85153757",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-delorean-cartoon-t-shirt/-/A-79783080",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-part-3-character-pose-t-shirt/-/A-82354155",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-retro-delorean-poster-t-shirt/-/A-86177141",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-part-2-electric-delorean-t-shirt/-/A-82353034",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-retro-marty-mcfly-poster-t-shirt/-/A-82356849",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-back-to-the-future-delorean-schematic-print-t-shirt/-/A-86176242",
      tags: "Back to the Future, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Back to the Future",
      },
    },
    {
      url: "https://www.target.com/p/boys-backstreet-boys-blue-glowing-circle-t-shirt/-/A-1002997063",
      tags: "Backstreet Boys, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Backstreet Boys",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-backstreet-boys-group-signatures-distressed-t-shirt/-/A-92917346",
      tags: "Backstreet Boys, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Backstreet Boys",
      },
    },
    {
      url: "https://www.target.com/p/boys-backstreet-boys-blue-millennium-t-shirt/-/A-1002997169",
      tags: "Backstreet Boys, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Backstreet Boys",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-movie-cover-title-poster-performance-tee/-/A-86126501",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-twitterpated-love-advice-performance-tee/-/A-86126484",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-choose-kindness-t-shirt/-/A-90374954",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-happy-easter-thumper-performance-tee/-/A-86126596",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-happy-easter-thumper-t-shirt/-/A-86126830",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-movie-logo-with-flower-and-thumper-performance-tee/-/A-86126509",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-friend-to-all-animals-t-shirt/-/A-86127212",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-prince-of-the-forest-t-shirt/-/A-86127245",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-classic-floral-movie-title-poster-t-shirt/-/A-86127239",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-movie-cover-title-poster-t-shirt/-/A-86127196",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-portrait-of-flower-t-shirt/-/A-86127207",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-name-stack-pose-t-shirt/-/A-86127237",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-face-portrait-t-shirt/-/A-86126544",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-friends-square-t-shirt/-/A-90375741",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-artistic-friends-of-the-forest-t-shirt/-/A-86126706",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-failine-thumper-flower-character-boxes-t-shirt/-/A-86126574",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-thumper-line-art-t-shirt/-/A-86126865",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-bambi-happy-easter-thumper-t-shirt/-/A-1002737702",
      tags: "Bambi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bambi",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-barbie-kenough-short-sleeve-graphic-t-shirt-black/-/A-89823607",
      tags: "Barbie, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Barbie",
      },
    },
    {
      url: "https://www.target.com/p/batman-cracked-bat-logo-youth-athletic-heather-graphic-tee/-/A-85730770",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-vintage-graphic-youth-boy-s-black-long-sleeve-shirt/-/A-85581124",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/dc-comics-boys-batman-vapor-bat-signal-graphic-print-t-shirt-kids/-/A-91927503",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-hero-logo-4pk-crew-neck-short-sleeve-youth-boy-s-t-shirts/-/A-88220630",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-batman-3-pc-hoodie-jogger-t-shirt-combo/-/A-90021882",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-comics-poster-boy-s-heather-grey-long-sleeve-shirt/-/A-85731642",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/boys-batman-american-flag-oval-t-shirt/-/A-1004374189",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-chibi-batman-colorful-shadow-boy-s-heather-grey-long-sleeve-shirt/-/A-85731630",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-the-dark-knight-line-art-boy-s-athletic-heather-long-sleeve-shirt/-/A-86316449",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-dripping-mask-logo-boy-s-athletic-heather-long-sleeve-shirt/-/A-86316453",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/boys-batman-american-batman-t-shirt/-/A-1004374376",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/kids-batman-cityscape-detective-comics-t-shirt/-/A-1002858738",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-kicking-shark-s-face-youth-navy-blue-graphic-tee/-/A-85729697",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-sweetride-youth-athletic-heather-graphic-tee/-/A-85730199",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-navy-blue-batman-symbol-gotham-city-skyline-graphic-tee-shirt/-/A-84941147",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-distressed-bat-logo-youth-athletic-heather-graphic-tee/-/A-85730535",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-dc-comic-book-batman-repeat-text-athletic-grey-graphic-tee-shirt/-/A-84941757",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-stitch-character-and-title-boys-athletic-heather-graphic-tee/-/A-85729043",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-i-get-to-stay-up-late-youth-royal-blue-graphic-tee/-/A-85729982",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-character-silhouette-youth-charcoal-gray-graphic-tee/-/A-84941186",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-colorful-images-and-logos-youth-navy-blue-graphic-tee/-/A-85729221",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-cosplay-costume-youth-athletic-gray-graphic-tee/-/A-85730811",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-classic-emblem-youth-athletic-gray-graphic-tee/-/A-85729192",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-never-mess-with-a-superhero-youth-navy-blue-graphic-tee/-/A-85730173",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/dc-comic-book-batman-corner-placement-youth-boys-heather-grey-graphic-tee-shirt/-/A-84942022",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-geometric-superhero-youth-charcoal-graphic-tee/-/A-85730168",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-no-te-metas-con-un-superheroe-youth-athletic-gray-graphic-tee/-/A-85729685",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-dripping-logo-trap-graphics-boy-s-athletic-heather-t-shirt/-/A-85730363",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-scrambled-classic-logo-youth-athletic-gray-graphic-tee/-/A-85729516",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/dc-league-of-super-pets-batman-and-ace-silhouettes-boy-s-athletic-heather-tee/-/A-87217709",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-game-over-diagonal-graphic-youth-boy-s-royal-blue-t-shirt/-/A-87450428",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-melting-bat-signal-youth-black-short-sleeve-crew-neck-tee/-/A-90060797",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-pixel-art-youth-boys-athletic-heather-gray-t-shirt/-/A-85729650",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-youth-boy-cosplay-t-shirt-with-detachable-cape/-/A-1004206478",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/justice-league-batman-and-comrades-boy-s-navy-t-shirt/-/A-85450705",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-core-character-inside-triangle-youth-boy-s-charcoal-t-shirt/-/A-85351964",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-robin-costume-boy-s-red-cosplay/-/A-84707050",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-nocturnal-hero-boy-s-royal-blue-t-shirt/-/A-86102445",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-hidden-costume-tear-boy-s-charcoal-t-shirt/-/A-85729922",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-joker-bat-splatter-boy-s-navy-blue-t-shirt/-/A-84707148",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-cosplay-boy-s-athletic-heather-t-shirt/-/A-85729152",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-dynamic-team-up-youth-boy-s-athletic-heather-gray-t-shirt/-/A-87450538",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-americana-logo-boy-s-royal-blue-t-shirt/-/A-86062498",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-cosplay-boy-s-charcoal-t-shirt/-/A-85730833",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-half-art-boy-s-heather-grey-t-shirt/-/A-85354560",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-joker-and-batman-face-collage-art-boy-s-charcoal-heather-t-shirt/-/A-86062448",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-pixel-logo-boy-s-charcoal-t-shirt/-/A-85353801",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-dark-knight-boy-s-charcoal-t-shirt/-/A-85730703",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-curved-text-youth-boy-s-navy-t-shirt/-/A-85351998",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-arkham-origins-damaged-suit-boy-s-navy-t-shirt/-/A-85729078",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-chibi-batman-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-88043047",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-man-in-mask-boy-s-charcoal-heather-t-shirt/-/A-86062571",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-the-dark-knight-boy-s-navy-t-shirt/-/A-85783101",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-core-stacked-characters-youth-boy-s-royal-blue-t-shirt/-/A-85352056",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/youth-boys-batman-80th-anniversary-short-sleeve-t-shirt/-/A-84706818",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-joker-with-playing-cards-boy-s-white-t-shirt/-/A-84707073",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-robin-and-nightwing-geometrical-design-youth-boy-s-athletic-heather-gray-t-shirt/-/A-87450532",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-joker-costume-boy-s-black-cosplay/-/A-88297456",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-arkham-origins-text-logo-boy-s-heather-grey-t-shirt/-/A-85730964",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-bat-signal-pattern-youth-black-short-sleeve-crew-neck-tee/-/A-90067273",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-bat-signal-logo-checkered-background-boy-s-navy-blue-t-shirt/-/A-85353070",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-core-the-dark-knight-on-black-short-sleeve-youth-t-shirt/-/A-1005197029",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-capedcrusader-youth-boys-athletic-heather-gray-t-shirt/-/A-85730051",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-core-doodle-logo-w-text-on-black-short-sleeve-youth-t-shirt/-/A-1005131112",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/batman-core-text-on-superhero-character-on-black-t-shirt-short-sleeve-youth-t-shirt/-/A-1005197092",
      tags: "Batman, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Batman",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-it-s-robot-fighting-time-t-shirt/-/A-85993357",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-white-logo-t-shirt/-/A-85993180",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-most-ruthless-competitors-t-shirt/-/A-85992960",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-bot-fan-t-shirt/-/A-85993024",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-i-like-big-bots-that-will-not-die-t-shirt/-/A-85992990",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-red-and-blue-logo-t-shirt/-/A-85993298",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-silver-and-blue-logo-stack-t-shirt/-/A-85993315",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-whiplash-sawblaze-and-rotator-t-shirt/-/A-85993388",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-jackpot-sawblaze-and-lock-jaw-t-shirt/-/A-85993148",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-blue-neon-robots-t-shirt/-/A-85993343",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-battlebots-retro-robot-collage-t-shirt/-/A-85993474",
      tags: "BattleBots, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "BattleBots",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-hashtag-furball-t-shirt/-/A-91642303",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-beast-t-shirt/-/A-91642684",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-character-silhouette-t-shirt/-/A-91642507",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-chip-large-portrait-t-shirt/-/A-91641806",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-halloween-beast-costume-t-shirt/-/A-1001940969",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-cartoon-belle-t-shirt/-/A-91641780",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-distressed-gaston-flex-t-shirt/-/A-91642585",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-sketch-profile-t-shirt/-/A-91642706",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beauty-and-the-beast-stare-t-shirt/-/A-91642642",
      tags: "Beauty and the Beast, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beauty and the Beast",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-chibi-strange-and-unusual-youth-athletic-gray-graphic-tee/-/A-87252687",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-animated-series-lydia-and-beetlejuice-youth-boy-s-athletic-gray-t-shirt/-/A-85351903",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-classic-movie-youth-boys-character-text-navy-blue-t-shirt/-/A-84706802",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-the-ghost-with-the-most-boy-s-athletic-heather-t-shirt/-/A-87215580",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-animated-series-lady-lydia-youth-boy-s-royal-blue-t-shirt/-/A-85352163",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beetlejuice-ghost-with-the-most-silhouette-t-shirt/-/A-92783354",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/beetlejuice-animated-series-lydia-beetlejuice-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-88868076",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-beetlejuice-it-s-showtime-repeat-t-shirt/-/A-92783549",
      tags: "Beetlejuice, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beetlejuice",
      },
    },
    {
      url: "https://www.target.com/p/boys-betty-boop-all-american-t-shirt/-/A-1004374175",
      tags: "Betty Boop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Betty Boop",
      },
    },
    {
      url: "https://www.target.com/p/boys-betty-boop-all-american-biker-t-shirt/-/A-1004374124",
      tags: "Betty Boop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Betty Boop",
      },
    },
    {
      url: "https://www.target.com/p/boys-betty-boop-all-american-t-shirt/-/A-1004374219",
      tags: "Betty Boop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Betty Boop",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-beyblade-burst-boys-spinner-tops-graphic-character-grid-t-shirt-blue/-/A-91166643",
      tags: "Beyblade, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beyblade",
      },
    },
    {
      url: "https://www.target.com/p/beyblade-burst-boys-spinner-tops-t-shirt/-/A-91166531",
      tags: "Beyblade, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beyblade",
      },
    },
    {
      url: "https://www.target.com/p/beyblade-burst-boys-4-spinner-tops-design-fafnir-let-it-rip-t-shirt-beyblade-let-it-rip/-/A-84295150",
      tags: "Beyblade, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Beyblade",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-hello-i-am-baymax-t-shirt/-/A-82357752",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-baymax-excuse-me-t-shirt/-/A-82358609",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-valentine-s-baymax-likes-hugs-t-shirt/-/A-86926740",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-hero-hexagon-t-shirt/-/A-85089265",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-group-hug-t-shirt/-/A-85088616",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-holiday-hugs-from-son-t-shirt/-/A-84867038",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-big-hero-6-holiday-hugs-from-daughter-t-shirt/-/A-84868337",
      tags: "Big Hero 6, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Big Hero 6",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-pac-man-t-shirt-boy-s-video-game-grid-short-sleeve-tee-retro-graphic-print-blue/-/A-1004331405",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-naruto-shippuden-boys-anime-sasuke-kakashi-raised-print-kids-t-shirt-tee-blue/-/A-1004477031",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/superman-logo-with-american-eagle-seal-crew-neck-long-sleeve-black-youth-tee/-/A-89387624",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/usagi-yojimbo-with-gen-and-sanshobo-key-art-youth-black-long-sleeve-tee/-/A-90370362",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-playstation-boys-shirt-video-game-control-raised-graphic-kids-t-shirt-black/-/A-91272975",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/football-season-game-day-4-pack-of-youth-boy-s-short-sleeve-tees/-/A-1002538605",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/minecraft-game-boy-s-graphic-print-kids-t-shirt/-/A-92496711",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/superman-metropolis-all-american-athletics-crew-neck-long-sleeve-black-youth-tee/-/A-89387619",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/usagi-yojimbo-mounted-horse-key-art-youth-black-crew-neck-sweatshirt/-/A-91215775",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/helicopters-youth-boys-royal-blue-graphic-tee/-/A-88310244",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/skull-with-camo-trap-graphics-youth-navy-blue-graphic-tee/-/A-86448773",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/big-wheels-trucks-youth-boys-dark-navy-graphic-tee/-/A-88310645",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/ultra-robotix-youth-boys-black-graphic-tee/-/A-88310501",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/pac-man-boy-s-game-action-graphic-print-t-shirt/-/A-91166488",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gamer-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89238460",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-crying-skull-trick-or-treat-youth-charcoal-short-sleeve-crew-neck-tee/-/A-87973941",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/monster-truck-and-flames-background-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89238473",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/eat-sleep-game-repeat-youth-crew-neck-short-sleeve-tee/-/A-93692591",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/sweets-bunny-with-candy-basket-boy-s-crew-neck-short-sleeve-tee/-/A-1004620983",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-forever-vintage-skeleton-youth-crew-neck-short-sleeve-tee/-/A-1002589734",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/monster-trucks-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89258778",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-wave-text-youth-crew-neck-short-sleeve-tee/-/A-1002589993",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/planes-dream-big-youth-oatmeal-heather-short-sleeve-crew-neck-tee/-/A-89258670",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/skateboard-decks-youth-red-short-sleeve-crew-neck-tee/-/A-89238485",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/fit-as-a-fiddle-violin-youth-crew-neck-short-sleeve-tee/-/A-93692908",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-ghoulish-face-youth-white-short-sleeve-crew-neck-tee/-/A-87974298",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/soccer-play-love-live-youth-charcoal-short-sleeve-crew-neck-tee/-/A-89258434",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gamer-born-4-it-youth-charcoal-gray-short-sleeve-crew-neck-tee/-/A-89479026",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/cutest-turkey-in-town-youth-crew-neck-short-sleeve-tee/-/A-1000885017",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/grill-eat-repeat-football-youth-crew-neck-short-sleeve-tee/-/A-93230334",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/coolest-turkey-in-town-youth-crew-neck-short-sleeve-tee/-/A-1000884544",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/where-s-the-pie-youth-crew-neck-short-sleeve-tee/-/A-1000884655",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/be-sweet-candy-cane-youth-crew-neck-short-sleeve-tee/-/A-1000884380",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/monster-trucks-power-out-youth-heather-gray-short-sleeve-crew-neck-tee/-/A-89258722",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/monster-truck-feelin-wheely-awesome-youth-white-short-sleeve-crew-neck-tee/-/A-89238498",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/baseball-bingo-youth-oatmeal-heather-short-sleeve-crew-neck-tee/-/A-89258729",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/candy-cane-cutie-youth-crew-neck-short-sleeve-tee/-/A-1000884356",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-always-forever-youth-crew-neck-short-sleeve-tee/-/A-1002589823",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/santa-s-favorite-snow-way-snow-flakes-youth-red-short-sleeve-crew-neck-tee/-/A-89007801",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/black-chibi-cat-youth-crew-neck-short-sleeve-tee/-/A-1000885231",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/big-brother-bears-boy-s-crew-neck-short-sleeve-tee/-/A-1004620855",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/skateboard-shred-it-youth-white-short-sleeve-crew-neck-tee/-/A-89291085",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/eat-sleep-game-repeat-youth-crew-neck-short-sleeve-tee/-/A-93692665",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-always-forever-youth-crew-neck-short-sleeve-tee/-/A-1002590044",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/monster-trucks-smashing-it-youth-charcoal-short-sleeve-crew-neck-tee/-/A-89238456",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/skate-skull-and-skateboards-youth-athletic-gray-short-sleeve-crew-neck-tee/-/A-89290599",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/chibi-white-cat-youth-crew-neck-short-sleeve-tee/-/A-1000885179",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-short-sleeve-tee/-/A-93114982",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/perfect-spirals-flaming-football-youth-short-sleeve-tee/-/A-93115106",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/go-sports-but-where-s-the-food-kids-crew-neck-short-sleeve-tee/-/A-93519730",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/big-brother-knight-boy-s-crew-neck-short-sleeve-tee/-/A-1002507209",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-cartoon-ghosts-equally-ghosty-youth-white-short-sleeve-crew-neck-tee/-/A-87973912",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-bats-the-way-i-like-it-unisex-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-87973974",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/let-me-give-you-a-pizza-my-mind-youth-heather-gray-short-sleeve-crew-neck-tee/-/A-89238513",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/seven-times-six-minecraft-video-game-t-shirt-boys-creeper-blaze-bee-llama-character-tee-blue/-/A-1003386297",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-forever-sunset-wave-youth-crew-neck-short-sleeve-tee/-/A-1002589851",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-side-profile-witch-you-put-a-spell-on-me-unisex-youth-white-short-sleeve-crew-neck-tee/-/A-87973980",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/labbing-touch-grass-gamer-nerd-youth-crew-neck-short-sleeve-tee/-/A-1002521704",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/sweet-strawberries-youth-crew-neck-short-sleeve-tee/-/A-1000884237",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/dinosaur-roaring-with-palm-trees-youth-denim-heather-short-sleeve-crew-neck-tee/-/A-89258803",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/pawsitive-bear-youth-crew-neck-short-sleeve-tee/-/A-1000885123",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/dino-t-rex-and-palm-trees-youth-charcoal-short-sleeve-crew-neck-tee/-/A-89258401",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/planes-break-barriers-youth-charcoal-short-sleeve-crew-neck-tee/-/A-89258415",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-apothecary-bottles-youth-charcoal-short-sleeve-crew-neck-tee/-/A-87973955",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-black-and-white-wave-youth-crew-neck-short-sleeve-tee/-/A-1002589701",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gamer-level-up-youth-athletic-heather-short-sleeve-crew-neck-tee/-/A-89258657",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/oversized-cat-face-youth-crew-neck-short-sleeve-tee/-/A-1000885233",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/skater-peace-sign-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89238519",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/born-to-game-forced-to-work-youth-crew-neck-short-sleeve-tee/-/A-1002521660",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-shrugging-skeleton-heck-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-87974312",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gulf-of-mexico-palm-tree-youth-crew-neck-short-sleeve-tee/-/A-1002589778",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/no-time-for-homework-too-many-missions-youth-heather-gray-short-sleeve-crew-neck-tee/-/A-89238510",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/basketball-swish-nothing-but-net-youth-royal-blue-short-sleeve-crew-neck-tee/-/A-89258665",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-three-ghosts-waddup-boo-unisex-youth-charcoal-gray-short-sleeve-crew-neck-tee/-/A-87973936",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/fish-out-of-water-youth-crew-neck-short-sleeve-tee/-/A-93692949",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/just-here-for-the-snacks-youth-black-short-sleeve-crew-neck-tee/-/A-89238481",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-peace-sign-grim-reaper-creepin-it-real-unisex-youth-black-short-sleeve-crew-neck-tee/-/A-87973968",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-coffin-on-crescent-moon-youth-black-short-sleeve-crew-neck-tee/-/A-87973921",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/will-do-chores-for-cheese-youth-navy-blue-short-sleeve-crew-neck-tee/-/A-89258421",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/planes-captain-youth-red-short-sleeve-crew-neck-tee/-/A-89258719",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/trucks-red-lightning-youth-charcoal-gray-short-sleeve-crew-neck-tee/-/A-89479031",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/family-is-a-gift-youth-natural-crew-neck-short-sleeve-tee-small/-/A-1000999129",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/big-brother-monster-truck-boy-s-crew-neck-short-sleeve-tee/-/A-1004620790",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/beary-sweet-youth-crew-neck-short-sleeve-tee/-/A-1000885075",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/padel-paladin-youth-crew-neck-short-sleeve-tee/-/A-93686184",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/parking-lot-pioneer-old-west-wagon-football-cowboy-youth-short-sleeve-tee/-/A-93115144",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/thinking-cat-youth-crew-neck-short-sleeve-tee/-/A-1000885266",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/hold-your-horses-humor-youth-crew-neck-short-sleeve-tee/-/A-93692623",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bear-hug-youth-crew-neck-short-sleeve-tee/-/A-1000885196",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/labbing-touch-grass-gamer-nerd-youth-crew-neck-short-sleeve-tee/-/A-1002521788",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/all-buff-no-fluff-gym-rat-youth-crew-neck-short-sleeve-tee/-/A-93691920",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/beary-cute-teddy-bear-boy-s-crew-neck-short-sleeve-tee/-/A-1004621339",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/padel-tennis-racket-rhapsody-youth-crew-neck-short-sleeve-tee/-/A-93686271",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/give-thanks-turkey-pumpkin-youth-crew-neck-short-sleeve-tee/-/A-1000884482",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/parking-lot-pioneer-old-west-wagon-football-cowboy-youth-short-sleeve-tee/-/A-93115023",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-crew-neck-short-sleeve-tee/-/A-1002589938",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/teddy-dreams-boy-s-crew-neck-short-sleeve-tee/-/A-1004621323",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-crew-neck-short-sleeve-tee/-/A-1002589938",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/big-brother-monster-truck-boy-s-crew-neck-short-sleeve-tee/-/A-1004620790",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/padel-tennis-racket-rhapsody-youth-crew-neck-short-sleeve-tee/-/A-93686271",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/born-to-game-forced-to-work-youth-crew-neck-short-sleeve-tee/-/A-1002521687",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/butterfly-youth-crew-neck-short-sleeve-tee/-/A-1000884404",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bear-hug-youth-crew-neck-short-sleeve-tee/-/A-1000885196",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/just-fall-things-pumpkin-spice-latte-youth-crew-neck-short-sleeve-tee/-/A-1000884993",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/monster-truck-you-make-my-heart-go-vrrrroommhhh-youth-red-short-sleeve-tee/-/A-1003808171",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/american-football-tailgating-society-youth-crew-neck-short-sleeve-tee/-/A-93230371",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/go-sports-but-where-s-the-food-youth-crew-neck-short-sleeve-tee/-/A-93230408",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/so-unbearable-youth-crew-neck-short-sleeve-tee/-/A-1000885151",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/all-buff-no-fluff-gym-rat-youth-crew-neck-short-sleeve-tee/-/A-93691920",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/beary-cute-teddy-bear-boy-s-crew-neck-short-sleeve-tee/-/A-1004621339",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/disc-ace-frisbee-disc-youth-crew-neck-short-sleeve-tee/-/A-93686146",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/in-tailgating-we-trust-american-flag-and-spatula-youth-short-sleeve-tee/-/A-93115065",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/keep-calm-and-respawn-controller-youth-crew-neck-short-sleeve-tee/-/A-93692961",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/rip-gulf-of-mexico-1607-2025-youth-crew-neck-short-sleeve-tee/-/A-1002589939",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/labbing-touch-grass-gamer-nerd-youth-crew-neck-short-sleeve-tee/-/A-1002521788",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/give-thanks-turkey-pumpkin-youth-crew-neck-short-sleeve-tee/-/A-1000884482",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/thinking-cat-youth-crew-neck-short-sleeve-tee/-/A-1000885266",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/parking-lot-pioneer-old-west-wagon-football-cowboy-youth-short-sleeve-tee/-/A-93115023",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-dapper-ghost-with-gangster-ghost-here-lies-my-will-to-live-youth-black-short-sleeve-crew-neck-tee/-/A-88142105",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/dino-wild-one-youth-white-short-sleeve-crew-neck-tee/-/A-89258652",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/gamer-game-over-max-dps-youth-white-short-sleeve-crew-neck-tee/-/A-89258775",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/dino-you-re-dino-mite-youth-heather-gray-short-sleeve-crew-neck-tee/-/A-89258705",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/dino-apex-predator-youth-black-short-sleeve-crew-neck-tee/-/A-89258438",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/dino-wild-one-youth-white-short-sleeve-crew-neck-tee/-/A-89258652",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/beast-mode-youth-black-short-sleeve-crew-neck-tee/-/A-89238475",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/santa-s-favorite-mostly-nice-sometimes-naughty-string-lights-youth-black-short-sleeve-crew-neck-tee/-/A-89007819",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-lucky-crew-neck-short-sleeve-white-youth-t-shirt/-/A-88493123",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/valentine-s-day-candy-hearts-crew-neck-short-sleeve-athletic-heather-youth-t-shirt/-/A-88492756",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bunny-bros-the-hunt-is-on-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-89007650",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/santa-s-favorite-christmas-kid-crew-neck-short-sleeve-charcoal-heather-unisex-youth-t-shirt/-/A-88918883",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-good-luck-charm-crew-neck-short-sleeve-gray-heather-youth-t-shirt/-/A-88492852",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/valentine-s-day-too-cool-heart-crew-neck-short-sleeve-white-youth-t-shirt/-/A-88493109",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/santa-s-favorite-hashtag-nice-crew-neck-short-sleeve-athletic-heather-unisex-youth-t-shirt/-/A-88918780",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bunny-bros-sketch-bunny-ears-crew-neck-short-sleeve-charcoal-boy-s-t-shirt/-/A-88918783",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-cute-cartoon-symbols-crew-neck-short-sleeve-natural-unisex-youth-t-shirt/-/A-88713285",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-that-s-a-wrap-crew-neck-short-sleeve-natural-unisex-youth-t-shirt/-/A-88713303",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/1st-day-of-1st-grade-on-navy-short-sleeve-youth-t-shirt/-/A-1005196936",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/school-items-first-day-of-school-5th-grade-on-white-short-sleeve-youth-t-shirt/-/A-1005196907",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-lucky-rainbow-crew-neck-short-sleeve-white-youth-t-shirt/-/A-88493101",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/born-to-lurk-forced-to-stop-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003808202",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/turtle-i-steal-hearts-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004158554",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/santa-s-favorite-best-elf-crew-neck-short-sleeve-athletic-heather-unisex-youth-t-shirt/-/A-88918858",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bunny-bros-boss-bunny-crew-neck-short-sleeve-boys-white-t-shirt/-/A-89007705",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bunny-with-easter-egg-stay-calm-and-hop-on-youth-boy-s-white-crew-neck-short-sleeve-t-shirt/-/A-1003192916",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/i-speak-fluent-sharkasm-boy-s-royal-blue-t-shirt/-/A-86196079",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/t-rex-with-pumpkin-bucket-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004779547",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/turtle-i-steal-hearts-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004158554",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/1st-day-of-3rd-grade-on-white-short-sleeve-youth-t-shirt/-/A-1005196951",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/1st-day-of-1st-grade-on-navy-short-sleeve-youth-t-shirt/-/A-1005196936",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/born-to-lurk-forced-to-stop-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003808202",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-halloween-cute-cartoon-symbols-crew-neck-short-sleeve-natural-unisex-youth-t-shirt/-/A-88713285",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-clover-leaf-crew-neck-short-sleeve-navy-youth-t-shirt/-/A-88492979",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/count-t-rex-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1003808192",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/valentine-s-day-too-cute-crew-neck-short-sleeve-navy-youth-t-shirt/-/A-88492982",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/st-patrick-s-day-lucky-rainbow-crew-neck-short-sleeve-white-youth-t-shirt/-/A-88493101",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/ears-up-eggs-out-youth-boy-s-athletic-heather-crew-neck-short-sleeve-t-shirt/-/A-1003192824",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/rawr-means-i-love-you-in-dinosaur-youth-black-crew-neck-short-sleeve-t-shirt/-/A-1004342803",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/kids-tee-first-day-as-a-4th-grader-on-athletic-heather-tee/-/A-1005196996",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/bunny-with-easter-egg-stay-calm-and-hop-on-youth-boy-s-white-crew-neck-short-sleeve-t-shirt/-/A-1003192916",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/v-day-love-cookies-crew-neck-short-sleeve-royal-blue-youth-t-shirt/-/A-88713204",
      tags: "Bioworld, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bioworld",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-godly-power-t-shirt/-/A-87444071",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-antihero-glowing-body-t-shirt/-/A-87444286",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/black-adam-superhero-thunderbolt-logo-crew-neck-short-sleeve-navy-men-s-t-shirt/-/A-88032972",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-group-shot-t-shirt/-/A-87444012",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-superheroes-from-jsa-t-shirt/-/A-87443769",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-faces-of-justice-t-shirt/-/A-87444201",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-atom-body-t-shirt/-/A-87444335",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-hawk-helmet-t-shirt/-/A-87443968",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-lightening-logo-t-shirt/-/A-87116096",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-grey-and-gold-portrait-stare-t-shirt/-/A-87444017",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-justice-shapes-and-bolts-t-shirt/-/A-87443929",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-jsa-badge-t-shirt/-/A-87444139",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-justice-cover-t-shirt/-/A-87444127",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-triple-hero-box-t-shirt/-/A-87443794",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-triangle-strategy-t-shirt/-/A-87443904",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-electricity-antihero-t-shirt/-/A-87444196",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-adam-man-vs-myth-t-shirt/-/A-87443830",
      tags: "Black Adam, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Adam",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-action-pose-logo-t-shirt/-/A-92235506",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-marvel-black-panther-2018-ember-mask-t-shirt/-/A-79711349",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-namor-imperius-rex-portrait-t-shirt/-/A-87793509",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-metallic-movie-logo-t-shirt/-/A-87793884",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-white-panther-icon-t-shirt/-/A-87793685",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-metallic-wakanda-avengers-logo-t-shirt/-/A-87794122",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-character-portrait-triangles-t-shirt/-/A-87793797",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-attuma-logo-t-shirt/-/A-87793705",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-okoye-shuri-and-nakia-portraits-t-shirt/-/A-87793876",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-shuri-action-pose-t-shirt/-/A-87794233",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-lord-m-baku-standing-tall-t-shirt/-/A-87793546",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-attuma-portrait-t-shirt/-/A-87794058",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-panther-logo-t-shirt/-/A-87794175",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-namora-portrait-t-shirt/-/A-87794405",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-neon-symbols-t-shirt/-/A-87793790",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-black-panther-wakanda-forever-m-baku-ornate-logo-t-shirt/-/A-87793492",
      tags: "Black Panther, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Black Panther",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-blippi-christmas-togetherness-t-shirt/-/A-89659905",
      tags: "Blippi, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blippi",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-blockbuster-make-it-a-blockbuster-night-youth-black-short-sleeve-crew-neck-tee/-/A-89177111",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-be-kind-rewind-junior-s-gray-short-sleeve-tee-shirt/-/A-90119664",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-ticket-stack-junior-s-navy-blue-short-sleeve-tee-shirt/-/A-90119888",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-blockbuster-be-kind-rewind-youth-black-short-sleeve-crew-neck-tee/-/A-89177211",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-six-logos-junior-s-navy-blue-short-sleeve-tee-shirt/-/A-90119879",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-blockbuster-multicolor-logo-youth-white-short-sleeve-crew-neck-tee/-/A-89177085",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/bioworld-blockbuster-black-and-white-logo-youth-black-short-sleeve-crew-neck-tee/-/A-89177122",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/blockbuster-four-panels-logo-junior-s-black-short-sleeve-tee-shirt/-/A-90119793",
      tags: "Blockbuster, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blockbuster",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-blow-pop-charms-lollipop-t-shirt/-/A-88557111",
      tags: "Blow Pop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blow Pop",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-blow-pop-bubble-gum-emblem-t-shirt/-/A-88556249",
      tags: "Blow Pop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blow Pop",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-blow-pop-that-s-a-blow-pop-art-t-shirt/-/A-88557431",
      tags: "Blow Pop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blow Pop",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-blow-pop-bubble-gum-logo-t-shirt/-/A-88556264",
      tags: "Blow Pop, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blow Pop",
      },
    },
    {
      url: "https://www.target.com/p/blue-beetle-shining-armor-junior-s-black-short-sleeve-crew-neck-tee/-/A-90119590",
      tags: "Blue Beetle, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blue Beetle",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-blue-beetle-retro-character-t-shirt/-/A-92328052",
      tags: "Blue Beetle, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Blue Beetle",
      },
    },
    {
      url: "https://www.target.com/p/bluey-mom-dad-bingo-matching-family-t-shirt-adult/-/A-88170675",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-3-pack-graphic-t-shirts-toddler-to-big-kid/-/A-85699363",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-wrap-short-sleeve-graphic-t-shirt-slate-gray/-/A-92185948",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-bluey-mineral-wash-tank-top-blue/-/A-94408549",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/bluey-mom-dad-bingo-girls-t-shirt-little-kid-to-adult/-/A-88810593",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-bluey-woven-button-up-shirt-white/-/A-93623622",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-chilli-mom-bandit-dad-long-sleeve-matching-family-t-shirt-toddler-to-adult/-/A-88820038",
      tags: "Bluey, Boys’ Clothing, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bluey",
      },
    },
    {
      url: "https://www.target.com/p/boys-bruce-lee-retro-collage-t-shirt/-/A-1003697284",
      tags: "Boys’ Clothing, Bruce Lee, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Bruce Lee",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-chin-up-halloween-jack-o-lantern-face-t-shirt/-/A-84265041",
      tags: "Boys’ Clothing, CHIN UP Apparel, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "CHIN UP Apparel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-chin-up-halloween-creepin-real-skeleton-t-shirt/-/A-84088160",
      tags: "Boys’ Clothing, CHIN UP Apparel, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "CHIN UP Apparel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-chin-up-christmas-fleece-navidad-t-shirt/-/A-90168382",
      tags: "Boys’ Clothing, CHIN UP Apparel, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "CHIN UP Apparel",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-king-kandy-t-shirt/-/A-92917563",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-frostine-and-king-kandy-birthday-t-shirt/-/A-92912868",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-sweet-castle-t-shirt/-/A-92916316",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-this-is-my-mr-mint-costume-t-shirt/-/A-92917164",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-official-striped-logo-t-shirt/-/A-92914731",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-this-is-my-princess-lolly-costume-t-shirt/-/A-92917446",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-candy-land-mr-mint-birthday-boy-t-shirt/-/A-92916635",
      tags: "Boys’ Clothing, Candy Land, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Candy Land",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-retro-america-cares-bear-t-shirt/-/A-92225293",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-distressed-feelin-lucky-t-shirt/-/A-1002301848",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-emblem-t-shirt/-/A-88747044",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-merry-christmas-cheer-bear-t-shirt/-/A-92226137",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-born-lucky-t-shirt/-/A-88745708",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-born-lucky-rainbow-t-shirt/-/A-90778416",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-shamrocker-poster-t-shirt/-/A-88747050",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-camping-bears-t-shirt/-/A-88716427",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-freedom-crew-t-shirt/-/A-92225346",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-sweet-celebrations-bear-it-s-my-birthday-t-shirt/-/A-92225049",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-and-funshine-bear-lucky-t-shirt/-/A-90778438",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-earth-day-everyday-forest-friend-bear-t-shirt/-/A-1002736825",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-hoppy-easter-funshine-t-shirt/-/A-1002736849",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-distressed-christmas-crew-t-shirt/-/A-90166671",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-christmas-grumpy-bear-beary-merry-t-shirt/-/A-89660289",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-christmas-wreath-bears-t-shirt/-/A-89660287",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-halloween-trick-or-sweet-t-shirt/-/A-89930006",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-expert-egg-finder-t-shirt/-/A-88717429",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-pumpkin-spice-season-t-shirt/-/A-91914922",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-born-lucky-t-shirt/-/A-90778202",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-valentine-s-day-love-a-lot-bear-and-share-bear-love-t-shirt/-/A-90648283",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-valentine-s-day-love-a-lot-bear-and-share-bear-would-you-be-mine-t-shirt/-/A-90648301",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-halloween-trick-or-sweet-bear-creep-it-real-t-shirt/-/A-92226218",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-green-rainbow-arch-t-shirt/-/A-90778403",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-halloween-trick-or-treat-cheer-bear-mummy-t-shirt/-/A-89929975",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-nature-is-our-future-harmony-bear-t-shirt/-/A-91246242",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-good-luck-bear-green-rainbow-arch-t-shirt/-/A-90778403",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-some-bunny-cares-t-shirt/-/A-88717451",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-bedtime-bear-quiet-night-t-shirt/-/A-92225878",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-pumpkin-spice-season-t-shirt/-/A-91914922",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-st-patrick-s-day-born-lucky-t-shirt/-/A-90778202",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-friends-giving-t-shirt/-/A-89577133",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-valentine-s-day-love-a-lot-bear-and-share-bear-would-you-be-mine-t-shirt/-/A-90648301",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-grumpy-bear-stay-frosty-t-shirt/-/A-92225126",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-grumpy-bear-team-america-82-t-shirt/-/A-92225255",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-earth-day-everyday-forest-friend-bear-t-shirt/-/A-91246492",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-halloween-trick-or-sweet-bear-creep-it-real-t-shirt/-/A-92226218",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-floral-night-t-shirt/-/A-1002736786",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-care-bears-bedtime-take-it-easy-t-shirt/-/A-1002738029",
      tags: "Boys’ Clothing, Care Bears, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Care Bears",
      },
    },
    {
      url: "https://www.target.com/p/disney-boy-s-3-pack-lightning-mcqueen-cars-graphic-tees-red-size-2t/-/A-93231173",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-lightning-mcqueen-portrait-t-shirt/-/A-79711600",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-lightning-mcqueen-drag-racing-performance-tee/-/A-87572681",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-lightning-mcqueen-american-flag-race-t-shirt/-/A-86835481",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-lightning-mcqueen-wake-up-awesome-t-shirt/-/A-82353407",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-doc-hudson-portrait-t-shirt/-/A-82354482",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-lightning-mcqueen-car-number-95-t-shirt/-/A-79592824",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-van-gogh-mcqueen-t-shirt/-/A-87572772",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-lightning-mcqueen-drag-racing-t-shirt/-/A-87572812",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-christmas-mater-wishes-t-shirt/-/A-81931655",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-mater-tractor-tippin-t-shirt/-/A-87572728",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cars-tow-mater-portrait-t-shirt/-/A-82354719",
      tags: "Boys’ Clothing, Cars, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cars",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-courage-the-cowardly-dog-st-patrick-s-day-clover-t-shirt/-/A-90778854",
      tags: "Boys’ Clothing, Cartoon Network, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cartoon Network",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dexter-s-laboratory-valentine-s-day-conversation-hearts-t-shirt/-/A-90719126",
      tags: "Boys’ Clothing, Cartoon Network, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cartoon Network",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-dexter-s-laboratory-st-patrick-s-day-pinch-if-you-dare-t-shirt/-/A-90779075",
      tags: "Boys’ Clothing, Cartoon Network, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cartoon Network",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-case-ih-youth-long-sleeve-t-shirt-long-sleeve-graphic-t-shirt/-/A-1003970484",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-logo-tone-short-sleeve-graphic-t-shirt/-/A-1000162055",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-american-flag-farmall-tractor-silhouette-short-sleeve-graphic-t-shirt/-/A-1000161963",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-american-flag-short-sleeve-graphic-t-shirt/-/A-1000162171",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-power-short-sleeve-graphic-t-shirt/-/A-1000161395",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-diagram-short-sleeve-graphic-t-shirt/-/A-1000162281",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-red-zone-magnum-short-sleeve-graphic-t-shirt/-/A-1000162211",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-big-magnum-short-sleeve-graphic-t-shirt/-/A-1000162158",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-case-if-it-ain-t-red-short-sleeve-graphic-t-shirt/-/A-1000162575",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-farmall-forever-short-sleeve-graphic-t-shirt/-/A-1000161772",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-patriotic-farmall-short-sleeve-graphic-t-shirt/-/A-1000161801",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-ih-horizontal-short-sleeve-graphic-t-shirt/-/A-1000162560",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-powerdrive-short-sleeve-graphic-t-shirt/-/A-1000161506",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-i-m-a-classic-short-sleeve-graphic-t-shirt/-/A-1000162555",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-save-a-horse-ride-a-tractor-short-sleeve-graphic-t-shirt/-/A-1000161501",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-square-logo-short-sleeve-graphic-t-shirt/-/A-1000162198",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-logo-stencil-short-sleeve-graphic-t-shirt/-/A-1000162854",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-farming-plowing-playing-short-sleeve-graphic-t-shirt/-/A-1000162645",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-vintage-farmall-quality-tractors-short-sleeve-graphic-t-shirt/-/A-1000162079",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-tractor-prints-short-sleeve-graphic-t-shirt/-/A-1000161881",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-red-zone-steiger-quad-short-sleeve-graphic-t-shirt/-/A-1000162340",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-this-is-my-farming-shirt-short-sleeve-graphic-t-shirt/-/A-1000161415",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-barn-hair-don-t-care-short-sleeve-graphic-t-shirt/-/A-1000744141",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-mn-short-sleeve-graphic-t-shirt/-/A-1000162358",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-if-i-m-not-farming-im-hunting-short-sleeve-graphic-t-shirt/-/A-1000162064",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-red-white-blue-tie-dye-logo-short-sleeve-graphic-t-shirt/-/A-1000161790",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-case-ih-kid-short-sleeve-graphic-t-shirt/-/A-1000162097",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-will-trade-sister-for-tractor-short-sleeve-graphic-t-shirt/-/A-1000743933",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-stars-and-stripes-short-sleeve-graphic-t-shirt/-/A-1000162951",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-american-made-1993-short-sleeve-graphic-t-shirt/-/A-1000161511",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-farmall-tractor-american-made-short-sleeve-graphic-t-shirt/-/A-1000162941",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-ih-1468-v8-short-sleeve-graphic-t-shirt/-/A-1000162180",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-farmall-brand-short-sleeve-graphic-t-shirt/-/A-1000161476",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-grow-your-own-seedlings-short-sleeve-graphic-t-shirt/-/A-1000161934",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-born-to-farm-flag-short-sleeve-graphic-t-shirt/-/A-1000162132",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-circle-ih-logo-distressed-short-sleeve-graphic-t-shirt/-/A-1000162679",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-daddy-s-little-tractor-princess-short-sleeve-graphic-t-shirt/-/A-1000743902",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-king-of-the-row-red-power-short-sleeve-graphic-t-shirt/-/A-1000161829",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-baseball-harvester-short-sleeve-graphic-t-shirt/-/A-1000162602",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-my-other-car-seat-short-sleeve-graphic-t-shirt/-/A-1000743911",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-outline-short-sleeve-graphic-t-shirt/-/A-1000162961",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-in-short-sleeve-graphic-t-shirt/-/A-1000162387",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-future-farmer-short-sleeve-graphic-t-shirt/-/A-1000161464",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-work-smart-play-smart-short-sleeve-graphic-t-shirt/-/A-1000161872",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-streamline-short-sleeve-graphic-t-shirt/-/A-1000161746",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-ia-short-sleeve-graphic-t-shirt/-/A-1000162454",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-al-short-sleeve-graphic-t-shirt/-/A-1000162270",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-farmall-ag-department-short-sleeve-graphic-t-shirt/-/A-1000162117",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-grow-your-own-luck-short-sleeve-graphic-t-shirt/-/A-1000162946",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-all-fired-up-short-sleeve-graphic-t-shirt/-/A-1000162024",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-rise-and-farm-short-sleeve-graphic-t-shirt/-/A-1000161433",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-in-short-sleeve-graphic-t-shirt/-/A-1000162387",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-streamline-short-sleeve-graphic-t-shirt/-/A-1000161746",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-shred-some-acres-short-sleeve-graphic-t-shirt/-/A-1000161294",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-baseball-harvester-short-sleeve-graphic-t-shirt/-/A-1000162602",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-oh-short-sleeve-graphic-t-shirt/-/A-1000162956",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-keep-it-strong-keep-it-rural-short-sleeve-graphic-t-shirt/-/A-1000161856",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-grow-your-own-seedlings-short-sleeve-graphic-t-shirt/-/A-1000161934",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-born-to-farm-flag-short-sleeve-graphic-t-shirt/-/A-1000162132",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-circle-ih-logo-distressed-short-sleeve-graphic-t-shirt/-/A-1000162679",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-comic-strip-short-sleeve-graphic-t-shirt/-/A-1000162352",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-meet-me-in-the-field-short-sleeve-graphic-t-shirt/-/A-1000161451",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-short-sleeve-graphic-t-shirt/-/A-1000161378",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-daddy-s-little-tractor-princess-short-sleeve-graphic-t-shirt/-/A-1000743902",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-straight-outta-the-barn-short-sleeve-graphic-t-shirt/-/A-1000162501",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-ih-circle-logo-short-sleeve-graphic-t-shirt/-/A-1000162508",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-country-patriotic-ar-short-sleeve-graphic-t-shirt/-/A-1000162467",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-magnum-outline-short-sleeve-graphic-t-shirt/-/A-1000162961",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/boys-case-ih-future-farmer-short-sleeve-graphic-t-shirt/-/A-1000161464",
      tags: "Boys’ Clothing, Case IH, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Case IH",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-kids-graphic-bull-t-shirt/-/A-1003066160",
      tags: "Boys’ Clothing, Castore, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Castore",
      },
    },
    {
      url: "https://www.target.com/p/castore-red-bull-racing-f1-kids-large-front-logo-t-shirt/-/A-1003024142",
      tags: "Boys’ Clothing, Castore, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Castore",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-relaxed-fit-t-shirt-cat-jack/-/A-93032344",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-basketball-hoop-graphic-t-shirt-cat-jack-blue/-/A-94493160",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-space-bulldog-graphic-t-shirt-cat-38-jack-8482-beige/-/A-94650209",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-varsity-baseball-graphic-t-shirt-cat-jack-blue/-/A-94632207",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-relaxed-fit-t-shirt-cat-38-jack-8482/-/A-94582922",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-printed-jersey-cat-jack/-/A-94614202",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-halloween-glow-in-the-dark-monster-fangs-graphic-t-shirt-cat-jack-black/-/A-94619144",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-cassette-tape-graphic-t-shirt-cat-jack-black/-/A-94619141",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-big-sky-graphic-t-shirt-cat-jack-olive-green/-/A-94619139",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-39-brain-freeze-39-graphic-t-shirt-cat-38-jack-8482-purple/-/A-94417021",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-miami-drift-team-graphic-t-shirt-cat-38-jack-dark-8482-dark-green/-/A-94650208",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-burger-planet-graphic-t-shirt-cat-jack-black/-/A-94619140",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-west-coast-california-graphic-t-shirt-cat-jack-khaki/-/A-94619146",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-dinosaur-graphic-t-shirt-cat-jack-brown/-/A-94619138",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-halloween-dogs-graphic-t-shirt-cat-38-jack-8482-cream/-/A-94650207",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-pasta-graphic-t-shirt-cat-jack-gray/-/A-94619142",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94638343",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-bird-graphic-t-shirt-cat-jack-bright-turquoise-blue/-/A-94493190",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-graphic-t-shirt-cat-jack-pink/-/A-94663043",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-skateboard-dino-graphic-t-shirt-cat-38-jack-8482-red/-/A-93276692",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-93574669",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-explore-nature-graphic-t-shirt-cat-38-jack-8482-brown/-/A-94650206",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-gameplay-graphic-t-shirt-cat-jack-blue/-/A-94663045",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-m/-/A-94567048",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-39-short-sleeve-skateboard-dino-graphic-t-shirt-cat-38-jack-8482-red/-/A-93276692",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-l/-/A-94567049",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-printed-jersey-cat-jack/-/A-94614202",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482-cream-xl/-/A-94567050",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/boys-short-sleeve-printed-t-shirt-cat-jack-light-brown/-/A-94833984",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-2pk-adaptive-short-sleeve-graphic-t-shirt-cat-38-jack-8482/-/A-94638342",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/kids-adaptive-halloween-graphic-t-shirt-cat-jack-purple/-/A-94638340",
      tags: "Boys’ Clothing, Cat & Jack, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cat & Jack",
      },
    },
    {
      url: "https://www.target.com/p/champion-kids-signature-graphic-t-shirt/-/A-94609779",
      tags: "Boys’ Clothing, Champion, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Champion",
      },
    },
    {
      url: "https://www.target.com/p/champion-boys-graphic-t-shirt/-/A-94609775",
      tags: "Boys’ Clothing, Champion, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Champion",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-general-motors-chevy-camaro-ss-retro-cruising-circle-t-shirt/-/A-86096682",
      tags: "Boys’ Clothing, Chevrolet, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chevrolet",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-general-motors-floral-corvette-t-shirt/-/A-1002736007",
      tags: "Boys’ Clothing, Chevrolet, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chevrolet",
      },
    },
    {
      url: "https://www.target.com/p/boys-general-motors-american-firebird-t-shirt/-/A-1004387764",
      tags: "Boys’ Clothing, Chevrolet, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chevrolet",
      },
    },
    {
      url: "https://www.target.com/p/boys-general-motors-ready-to-ride-t-shirt/-/A-1004387053",
      tags: "Boys’ Clothing, Chevrolet, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chevrolet",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-general-motors-seasons-greetings-logo-t-shirt/-/A-90164779",
      tags: "Boys’ Clothing, Chevrolet, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chevrolet",
      },
    },
    {
      url: "https://www.target.com/p/boys-general-motors-chevy-country-logo-t-shirt/-/A-1004401877",
      tags: "Boys’ Clothing, Chevrolet, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chevrolet",
      },
    },
    {
      url: "https://www.target.com/p/chuck-e-cheese-youth-royal-blue-t-shirt/-/A-87482023",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/boys-chuck-e-cheese-birthday-boy-t-shirt/-/A-1003696287",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/chuck-e-cheese-chuck-in-red-circle-crew-neck-short-sleeve-royal-blue-boy-s-t-shirt/-/A-90468640",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/chuck-e-cheese-happy-chuck-crew-neck-short-sleeve-athletic-heather-boy-s-t-shirt/-/A-90663993",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/boys-chuck-e-cheese-it-s-my-6th-birthday-t-shirt/-/A-1003696361",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/chuck-e-cheese-jumping-chuck-e-crew-neck-short-sleeve-navy-blue-boy-s-t-shirt/-/A-91071026",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/boys-chuck-e-cheese-it-s-my-5th-birthday-t-shirt/-/A-1003696046",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/boys-chuck-e-cheese-it-s-my-7th-birthday-t-shirt/-/A-1003696392",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/boys-chuck-e-cheese-it-s-my-8th-birthday-t-shirt/-/A-1003696389",
      tags: "Boys’ Clothing, Chuck E. Cheese's, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chuck E. Cheese's",
      },
    },
    {
      url: "https://www.target.com/p/chucky-men-s-child-s-play-t-shirt-front-and-back-print-and-rubber-patch-good-guy-official-merchandise-horror-tee-black-rubber/-/A-1004497651",
      tags: "Boys’ Clothing, Chucky, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Chucky",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cinderella-just-shine-t-shirt/-/A-91641949",
      tags: "Boys’ Clothing, Cinderella, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cinderella",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cinderella-i-heart-being-a-princess-t-shirt/-/A-91642643",
      tags: "Boys’ Clothing, Cinderella, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cinderella",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-cinderella-floral-princess-and-friends-t-shirt/-/A-91641718",
      tags: "Boys’ Clothing, Cinderella, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cinderella",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-black-cobra-youth-basic-black-graphic-tee/-/A-84941882",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-strike-first-strike-hard-crew-neck-long-sleeve-black-youth-tee/-/A-89522882",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-never-dies-crew-neck-long-sleeve-black-youth-tee/-/A-89522842",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-black-snake-icon-boy-s-athletic-heather-t-shirt/-/A-87945233",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/strike-first-cobra-kai-tv-show-series-youth-boys-black-graphic-tee/-/A-84941970",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-eagle-fang-karate-youth-boy-s-red-graphic-tee/-/A-84941971",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-eagle-fang-karate-youth-white-short-sleeve-tee/-/A-92548342",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-3-miyagi-do-dojo-sunset-art-navy-youth-boys-short-sleeve-shirt/-/A-85019550",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-team-no-mercy-dojo-youth-boy-s-white-t-shirt/-/A-87944648",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-if-you-re-not-strong-on-the-inside-boy-s-red-t-shirt/-/A-87945315",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-all-valley-2018-diaz-vs-keene-youth-boy-s-red-t-shirt/-/A-87945366",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/cobra-kai-double-yellow-cobra-youth-boy-s-black-t-shirt/-/A-87944578",
      tags: "Boys’ Clothing, Cobra Kai, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Cobra Kai",
      },
    },
    {
      url: "https://www.target.com/p/boys-coca-cola-unity-square-lyrics-logo-t-shirt/-/A-1004407646",
      tags: "Boys’ Clothing, Coca-Cola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Coca-Cola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-coco-floral-skull-t-shirt/-/A-92378944",
      tags: "Boys’ Clothing, Coco, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Coco",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-coco-miguel-skeleton-t-shirt/-/A-82354522",
      tags: "Boys’ Clothing, Coco, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Coco",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-coco-ernesto-remember-me-t-shirt/-/A-87572804",
      tags: "Boys’ Clothing, Coco, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Coco",
      },
    },
    {
      url: "https://www.target.com/p/converse-boys-short-sleeve-all-star-logo-graphic-t-shirt-gray/-/A-94300126",
      tags: "Boys’ Clothing, Converse, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Converse",
      },
    },
    {
      url: "https://www.target.com/p/converse-boys-high-top-logo-graphic-t-shirt-beige/-/A-94300136",
      tags: "Boys’ Clothing, Converse, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Converse",
      },
    },
    {
      url: "https://www.target.com/p/converse-boys-short-sleeve-converse-athletics-printed-t-shirt-cream/-/A-94300123",
      tags: "Boys’ Clothing, Converse, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Converse",
      },
    },
    {
      url: "https://www.target.com/p/boys-country-casuals-chicken-pet-that-poops-breakfast-short-sleeve-graphic-t-shirt/-/A-1004188593",
      tags: "Boys’ Clothing, Country Casuals, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Country Casuals",
      },
    },
    {
      url: "https://www.target.com/p/boys-country-casuals-country-roads-take-me-home-short-sleeve-graphic-t-shirt/-/A-1004188735",
      tags: "Boys’ Clothing, Country Casuals, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Country Casuals",
      },
    },
    {
      url: "https://www.target.com/p/boys-country-casuals-life-is-better-with-cows-short-sleeve-graphic-t-shirt/-/A-1004188662",
      tags: "Boys’ Clothing, Country Casuals, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Country Casuals",
      },
    },
    {
      url: "https://www.target.com/p/boys-country-casuals-live-life-gate-open-short-sleeve-graphic-t-shirt/-/A-1004188590",
      tags: "Boys’ Clothing, Country Casuals, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Country Casuals",
      },
    },
    {
      url: "https://www.target.com/p/boys-country-casuals-get-piggy-with-it-short-sleeve-graphic-t-shirt/-/A-1004188530",
      tags: "Boys’ Clothing, Country Casuals, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Country Casuals",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-hello-2nd-grade-t-shirt/-/A-93074806",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-your-true-colors-are-beautiful-t-shirt/-/A-93075102",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-animal-print-crayon-label-t-shirt/-/A-93075232",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-happy-100-days-of-school-t-shirt/-/A-93074910",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-rainbows-are-rad-t-shirt/-/A-93075149",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-100-colorful-days-of-school-t-shirt/-/A-93074723",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-classic-black-logo-t-shirt/-/A-93074801",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-be-bold-like-a-rainbow-t-shirt/-/A-92650246",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-easter-egg-stra-colorful-t-shirt/-/A-91248197",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-floral-logo-t-shirt/-/A-91246635",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-first-day-of-school-t-shirt/-/A-93074839",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-hello-1st-grade-t-shirt/-/A-93074817",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-neon-carrot-for-the-easter-bunny-t-shirt/-/A-91248478",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-spring-into-action-t-shirt/-/A-91248551",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-hello-pre-k-t-shirt/-/A-93074851",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-hello-3rd-grade-t-shirt/-/A-93074761",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-radical-color-t-shirt/-/A-93075442",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-bootiful-colors-t-shirt/-/A-93075981",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-pumpkin-spice-everything-nice-t-shirt/-/A-93075693",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-easter-duckling-hatch-t-shirt/-/A-91248210",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-arcade-machine-t-shirt/-/A-93075423",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-rainbow-colors-logo-t-shirt/-/A-93075412",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-trick-or-treat-t-shirt/-/A-93075894",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/boy-s-crayola-easter-hop-along-baby-bunny-pink-t-shirt/-/A-91248582",
      tags: "Boys’ Clothing, Crayola, Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crayola",
      },
    },
    {
      url: "https://www.target.com/p/youth-happy-4th-of-jawly-tshirt-funny-4th-of-july-shark-independence-day-graphic-tee-crazy-dog-youth-t-shirt/-/A-93855948",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-lets-eat-kids-punctuation-saves-lives-tshirt-funny-dinosaur-grammar-police-graphic-tee-crazy-dog-youth-t-shirt/-/A-93855242",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-youre-killing-me-smalls-t-shirt-funny-vintage-baseball-graphic-tee-kids-crazy-dog-youth-t-shirt/-/A-94055390",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-mama-s-boy-tshirt-funny-halloween-horror-movie-hockey-mask-graphic-tee-crazy-dog-youth-t-shirt/-/A-93898532",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-team-kids-table-tshirt-funny-thanksgiving-christmas-dinner-holiday-graphic-tee-crazy-dog-youth-t-shirt/-/A-93903236",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-christmas-baking-team-tshirt-funny-xmas-party-family-novelty-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93984912",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-tiny-food-critic-sarcastic-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003094920",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-christmas-morning-squad-tshirt-funny-xmas-party-family-novelty-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93984944",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-powered-by-chicken-nuggets-sarcastic-food-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003092140",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-future-engineer-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289935",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-picky-eaters-club-sarcastic-food-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095790",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-i-get-my-charm-from-my-dad-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004290676",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-future-fire-fighter-sarcastic-fire-truck-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289995",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-hold-my-juice-box-funny-cute-apple-juicebox-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-93982042",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-father-and-son-fishing-partners-for-life-sarcastic-fathers-day-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289832",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-son-of-a-nutcracker-tshirt-funny-christmas-holiday-spirit-graphic-tee-crazy-dog-youth-t-shirt/-/A-93900774",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-if-we-get-in-trouble-its-my-grandpas-fault-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003093621",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-sarcastic-it-was-dads-idea-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003092619",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-father-and-son-football-partners-for-life-sarcastic-fathers-day-graphic-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1004289794",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-dad-joke-survivor-tshirt-funny-fathers-day-son-daughter-hilarious-graphic-novelty-tee-crazy-dog-youth-t-shirt/-/A-93897875",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-dont-make-me-call-my-mimi-sarcastic-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003092787",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-hip-hoppin-sarcastic-danicing-bunny-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003094564",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-meet-me-in-the-ball-pit-sarcastic-metal-music-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003096412",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-powered-by-peanut-butter-and-jelly-sarcastic-pb-j-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095860",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
      },
    },
    {
      url: "https://www.target.com/p/youth-funny-t-shirts-fun-sized-sarcastic-candy-bar-graphic-novelty-tee-for-kids-crazy-dog-youth-t-shirt/-/A-1003095289",
      tags: "Boys’ Clothing, Crazy Dog T-Shirts, Inc., Graphic Tees, Kids’ Clothing, Tops",
      filters: {
        brand: "Crazy Dog T-Shirts, Inc.",
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
