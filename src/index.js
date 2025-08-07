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
      url: "https://www.target.com/p/girls-39-short-sleeve-uniform-performance-jersey-tennis-dress-cat-38-jack-8482/-/A-94436251",
      tags: "A-line Dresses, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Dresses, Girls’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-abdominal-access-uniform-dress-cat-jack/-/A-94482985",
      tags: "A-line Dresses, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-plaid-jumper/-/A-86739903",
      tags: "A-line Dresses, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Jumpers, Dresses, Girls’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-uniform-polo-dress-all-in-motion/-/A-94742735",
      tags: "Athletic Dresses, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Dresses, Girls’ Clothing, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-performance-uniform-dress-cat-jack/-/A-92421267",
      tags: "Athletic Dresses, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-uniform-pants-all-in-motion/-/A-94739701",
      tags: "Athletic Pants, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Activewear, Girls’ Activewear, Bottoms, Girls’ Clothing",
      filters: {
        type: "Athletic Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-uniform-polo-t-shirt-all-in-motion-8482/-/A-94579754",
      tags: "Athletic Polo Shirts, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Activewear, Girls’ Activewear",
      filters: {
        type: "Athletic Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-woven-skort-all-in-motion/-/A-94501347",
      tags: "Athletic Skorts, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Activewear, Girls’ Activewear, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-active-light-uniform-skort-all-in-motion/-/A-94739700",
      tags: "Athletic Skorts, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Activewear, Girls’ Activewear, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Athletic Skorts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-long-sleeve-oxford-shirt/-/A-92365930",
      tags: "Button Down Shirts, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-long-sleeve-dress-shirt/-/A-92365906",
      tags: "Button Down Shirts, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Button Down Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-uniform-cardigan-cat-jack/-/A-84938046",
      tags: "Cardigans, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-crew-neck-cable-uniform-cardigan-sweater-cat-jack/-/A-84938066",
      tags: "Cardigans, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-mock-neck-zip-front-sweater/-/A-92657866",
      tags: "Cardigans, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-v-neck-sweater-cardigan/-/A-92657805",
      tags: "Cardigans, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-cardigan-sweater/-/A-86738581",
      tags: "Cardigans, Girls’ School Uniforms, Kids’ Clothing, School Uniforms",
      filters: {
        type: "Cardigans",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-quick-dry-straight-fit-uniform-pants-cat-38-jack-8482-navy-blue/-/A-90221753",
      tags: "Chino Pants, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Bottoms, Girls’ Clothing",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-straight-fit-uniform-pants-cat-jack/-/A-88012859",
      tags: "Chino Pants, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Bottoms, Girls’ Clothing",
      filters: {
        type: "Chino Pants",
      },
    },
    {
      url: "https://www.target.com/p/girls-uniform-chino-shorts-cat-jack/-/A-85402704",
      tags: "Chino Shorts, Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Bottoms, Girls’ Clothing, Shorts",
      filters: {
        type: "Chino Shorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-coed-active-performance-track-pants/-/A-1004095275",
      tags: "Girls’ School Uniforms, Jeans, Kids’ Clothing, School Uniforms, Bottoms, Girls’ Clothing",
      filters: {
        type: "Jeans",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-uniform-solid-jumper/-/A-86739966",
      tags: "Girls’ School Uniforms, Jumpers, Kids’ Clothing, School Uniforms, A-line Dresses, Dresses, Girls’ Clothing, Shirt Dresses",
      filters: {
        type: "Jumpers",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-ponte-pleat-jumper/-/A-87721350",
      tags: "Girls’ School Uniforms, Jumpers, Kids’ Clothing, School Uniforms, Dresses, Girls’ Clothing",
      filters: {
        type: "Jumpers",
      },
    },
    {
      url: "https://www.target.com/p/girls-uniform-ponte-jeggings-cat-jack/-/A-89690533",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Leggings, School Uniforms, Bottoms, Girls’ Clothing",
      filters: {
        type: "Leggings",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-87922544",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-pique-uniform-polo-shirt-cat-jack/-/A-85251186",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-uniform-performance-polo-shirt-cat-38-jack-8482/-/A-94436197",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-jersey-uniform-polo-shirt-cat-38-jack-8482-white/-/A-90221751",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-88923983",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-adaptive-short-sleeve-uniform-polo-shirt-cat-jack/-/A-94486508",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-short-sleeve-pique-polo/-/A-92365141",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-mesh-polo-shirt/-/A-86738997",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms, T-shirts",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-long-sleeve-pique-polo/-/A-92338823",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-short-sleeve-interlock-polo/-/A-92365977",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Polo Shirts, School Uniforms",
      filters: {
        type: "Polo Shirts",
      },
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-co-ed-v-neck-pullover-sweater/-/A-92657877",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Pullover Sweaters, School Uniforms",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-v-neck-sweater/-/A-86738947",
      tags: "Girls’ School Uniforms, Kids’ Clothing, Pullover Sweaters, School Uniforms, Sweater Vests",
      filters: {
        type: "Pullover Sweaters",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-pull-on-uniform-knit-skort-cat-38-jack-8482/-/A-88909052",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Scooters, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Scooters",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-mesh-pleated-polo-dress/-/A-89626463",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Shirt Dresses, Dresses, Girls’ Clothing",
      filters: {
        type: "Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pleated-twill-uniform-skort-cat-jack/-/A-89456307",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Skorts, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-woven-performance-uniform-skort-cat-38-jack-8482-khaki/-/A-88297950",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Skorts, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-woven-performance-pleated-uniform-skort-cat-38-jack-8482-khaki/-/A-88297940",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Skorts, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-woven-performance-pleated-uniform-skort-cat-38-jack-8482-blue/-/A-88297945",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Skorts, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-plaid-skort-top-of-knee/-/A-93324129",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Skorts, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-solid-pleated-skort-top-of-knee/-/A-93004042",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Skorts, Bottoms, Girls’ Clothing, Skirts",
      filters: {
        type: "Skorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-pleated-uniform-tennis-dress-cat-jack/-/A-85287013",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, T-Shirt Dresses, Dresses, Girls’ Clothing",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/toddler-girls-short-sleeve-pleated-uniform-tennis-dress-cat-jack-navy/-/A-87050089",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, T-Shirt Dresses",
      filters: {
        type: "T-Shirt Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-active-tee/-/A-89617022",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, T-shirts",
      filters: {
        type: "T-shirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-quick-dry-performance-fighter-pilot-shorts-cat-jack-navy-blue/-/A-89805411",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Trouser Shorts, Bottoms, Girls’ Clothing, Shorts",
      filters: {
        type: "Trouser Shorts",
      },
    },
    {
      url: "https://www.target.com/p/girls-quick-dry-performance-shorts-cat-jack-beige/-/A-89805412",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Trouser Shorts, Bottoms, Girls’ Clothing, Shorts",
      filters: {
        type: "Trouser Shorts",
      },
    },
    {
      url: "https://www.target.com/p/kids-windbreaker-uniform-jacket-cat-jack/-/A-87044301",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Windbreakers, Coats & Jackets, Girls’ Clothing",
      filters: {
        type: "Windbreakers",
      },
    },
    {
      url: "https://www.target.com/p/girls-french-terry-zip-up-hoodie-uniform-sweatshirt-cat-jack-blue/-/A-94493152",
      tags: "Girls’ School Uniforms, Kids’ Clothing, School Uniforms, Zip-Up Sweatshirts, Activewear, Girls’ Activewear, Girls’ Clothing, Hoodies & Sweatshirts, Tops",
      filters: {
        type: "Zip-Up Sweatshirts",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-dress-cat-38-jack-8482/-/A-94219165",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-spring-knit-maxi-dress-cat-jack/-/A-94219181",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-eyelet-midi-dress-cat-38-jack-8482-white/-/A-94219170",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-chiffon-dress-cat-38-jack-8482-light-purple/-/A-94299377",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-4th-of-july-gingham-dress-cat-38-jack-8482-blue/-/A-94299380",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-4th-of-july-terry-dress-cat-38-jack-8482-red/-/A-94299376",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-flutter-sleeve-embroidered-woven-dress-cat-jack/-/A-94147533",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-woven-midi-dress-cat-38-jack-8482-turquoise-green/-/A-94299381",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-mesh-cosplay-dress-little-kid-to-big-kid/-/A-88256269",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-raya-and-the-last-dragon-encanto-moana-mirabel-sisu-girls-dress-tulle-dress-little-kid-to-big-kid/-/A-87291054",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Tunic Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-princess-frozen-minnie-mouse-moana-mulan-the-little-mermaid-cinderella-skater-dress-scrunchie-toddler-to-big-kid/-/A-87274524",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-mesh-cosplay-tulle-dress-little-kid-to-big-kid/-/A-88155973",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-pleated-polo-dress/-/A-90902470",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-rainbow-dash-girls-dress-little-kid-to-big-kid/-/A-87294328",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-mickey-mouse-rainbow-tulle-dress-toddler-to-big-kid/-/A-88290562",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-soft-knit-jersey-girls-cap-sleeve-dress/-/A-91471840",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-queen-bee-girls-french-terry-cosplay-dress-little-kid-to-big-kid/-/A-88296594",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-seersucker-dress-with-peter-pan-collar-kids/-/A-90586101",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-little-girls-dress-multicolored-6-6x/-/A-84800755",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-dress-little-kid-to-big-kid/-/A-89557006",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-yoshi-cosplay-dress-green/-/A-89811164",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-rena-rouge-girls-tulle-dress-toddler-to-big-kid/-/A-87237131",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-ghost-spider-girls-french-terry-dress-little-kid-to-big-kid/-/A-91126682",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-athletic-active-tank-top-dress/-/A-88768296",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-woven-dress-cat-38-jack-8482/-/A-94492961",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-solid-woven-dress-cat-38-jack-8482/-/A-94492960",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-floral-tiered-chiffon-dress-cat-38-jack-8482/-/A-94486473",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-floral-tiered-clip-dot-chiffon-dress-cat-jack-lavender/-/A-94486525",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-knit-tulle-tiered-dress-cat-38-jack-8482/-/A-92901447",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-short-sleeve-dress-cat-38-jack-8482-brown-light-pink/-/A-94600605",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-athletics-graphic-sleeveless-aline-dress/-/A-1002118797",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817588",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817662",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-sleeping-athletics/-/A-1000784397",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-athletic-dept/-/A-1000784370",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-sleeveless-knit-eyelet-dress-cat-38-jack-8482/-/A-92982445",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-terry-dress-cat-jack-red/-/A-94739626",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-flutter-sleeveless-woven-gauze-dress-cat-38-jack-8482-pink-rose/-/A-94600608",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-short-sleeve-2pk-knit-and-ribbed-dress-cat-38-jack-8482-cream-light-purple/-/A-93574804",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-38-stitch-elevated-printed-dress-blue/-/A-93599686",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-mushrooms-elevated-printed-dress-green/-/A-93599681",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-cap-sleeve-lace-tulle-dress-white/-/A-93067234",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pokemon-sylveon-ruched-neckline-all-over-print-dress-ivory/-/A-93599682",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-sleeveless-lace-ombre-dress-ivory-blush-pink/-/A-93300711",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-ariel-puff-cap-sleeve-dress-mint-green-purple/-/A-91363811",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-sequin-tank-dress-white/-/A-93067228",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-sleeveless-tiered-ruffle-skirt-dress-melon-pink/-/A-93067231",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ruffled-apple-striped-dress-mia-belle-girls/-/A-1004233781",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-vestito-dress-blazing-yellow/-/A-93152555",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-knit-striped-mock-neck-dress/-/A-93291240",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-sanrio-girls-2-pack-long-sleeve-and-short-sleeve-dresses-for-toddlers-and-big-kids-size-10/-/A-1005040614",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-39-barbie-character-dress-white-black/-/A-90377980",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-vestito-dress-animal-arabesque/-/A-93152794",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/multi-print-flower-and-ruffle-dress/-/A-93490904",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-holiday-plaid-dress-and-sock-set/-/A-93502346",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/do-your-thing-doodle-hi-lo-dress-mia-belle-girls/-/A-1004232970",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-white-fitted-scallop-dress/-/A-1002525140",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/fancy-roses-smocked-handkerchief-dress-mia-belle-girls/-/A-1004365045",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-long-sleeve-ruffle-trim-dress/-/A-93409802",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-vestito-dress-jacquard-stripe/-/A-93151811",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-preppy-style-autumn-girls-horse-embroidery-collar-long-sleeves-dress/-/A-1002991038",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/do-your-thing-doodle-chambray-bodice-dress-mia-belle-girls/-/A-1004909849",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-plaid-dress-with-hat/-/A-93502360",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-long-sleeve-ruffle-trim-dress-pink-multicolor-stripes/-/A-93409803",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/stunning-star-ombr-lilac-party-dress-mia-belle-girls/-/A-1004604431",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/fluttering-butterfly-ruffle-sleeve-dress-mia-belle-girls/-/A-1003810112",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mixed-up-clothing-girls-long-sleeve-ruffle-trim-dress/-/A-93409798",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-mixed-media-short-sleeve-tiered-dress/-/A-1004823164",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/sparkly-blue-bow-sequin-ruffle-dress-mia-belle-girls/-/A-1003836797",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mykids-usa-summer-pure-cotton-strawberry-pattern-short-sleeved-dress-with-peter-pan-collar-for-stylish-girls/-/A-1002937906",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-girls-tulle-dress-little-kid-to-big-kid/-/A-89005080",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses, Tutu Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/strawberry-shortcake-tulle-dress-sizes-2t-10-12/-/A-1001554721",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-dress-toddler-to-big-kid/-/A-88201804",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-chiffon-pleated-dress/-/A-1002436049",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-girls-fur-costume-dress-little-kid-to-big-kid/-/A-1003406892",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-and-anna-girls-sleeveless-dress-tutu-and-4-ponytail-hair-ties-for-little-kids-blue/-/A-93231385",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Tutu Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-ruffle-collar-party-dress-with-eyelet-embroidery-kids/-/A-1001113750",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-dress-little-kid-to-big/-/A-92302265",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-poppy-girls-dress-toddler-to-little-kid/-/A-85239214",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-square-neck-pleated-dress/-/A-1003209281",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peppa-pig-girls-short-sleeve-dress-toddler-to-little-kid/-/A-87294219",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-classic-logo-pink-fit-flair-cap-sleeve-dress/-/A-1002075746",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hello-kitty-french-terry-dress-sizes-2t-14-16/-/A-1000863943",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-shimmering-spaghetti-strap-a-line-sequin-dress/-/A-1002280792",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-backyard-dress-in-confetti-hearts/-/A-1002522131",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-puff-sleeve-babydoll-dress/-/A-93788533",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Babydoll Dresses, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-cakey-cat-mercat-girls-fleece-dress-toddler-to-big-kid/-/A-90023002",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/sesame-street-birthday-mesh-dress/-/A-1002811046",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sateen-cap-sleeve-special-occasion-smocked-flower-girl-dress-kids/-/A-1001270694",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-how-to-train-your-dragon-we-have-dragons-fit-flair-cap-sleeve-dress/-/A-1003890943",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-ruched-party-dress-with-embroidered-hem-kids/-/A-91302768",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-chase-marshall-girls-french-terry-skater-dress-and-scrunchie-little-kid-to-big-kid/-/A-87280691",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-magic-ombre-sequin-bomber-jacket/-/A-93275236",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-2-pack-skater-dresses-little-kid-to-big-kid/-/A-88296619",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-twirly-dress-in-rainbow-confetti-dots/-/A-1002268518",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-blue-s-clues-short-sleeve-dress-scrunchy-light-gray/-/A-87265960",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-pattern-fit-flair-cap-sleeve-dress/-/A-1002395658",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-mesh-dress-little-kid-to-big/-/A-92672187",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-minion-banana-stickers-fit-flair-cap-sleeve-dress/-/A-1000875020",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-group-fit-flair-cap-sleeve-dress/-/A-1002357151",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-flutter-bow-woven-dress/-/A-91604111",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-seersucker-flutter-sleeve-open-back-dress-kids/-/A-1000871930",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-textured-dress/-/A-91502710",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/primary-kids-backyard-dress-in-rainbow-tulip-fields/-/A-1002651569",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-sewer-skateboard-fit-flair-cap-sleeve-dress/-/A-1000451753",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-living-the-good-life-fit-flair-cap-sleeve-dress/-/A-1000875004",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-pattern-fit-flair-cap-sleeve-dress/-/A-1002396578",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-princess-ariel-girls-tulle-dress-toddler-to-big-kid/-/A-89157105",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-quilted-puff-sleeve-dress-kids/-/A-92688302",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-party-dress-with-ruffle-collar-kids/-/A-1001113852",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/minions-tulle-dress-sizes-4-6x/-/A-1001372854",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-tulip-sleeve-swiss-dot-party-dress-kids/-/A-1001113827",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-meow-meow-doodling-cat-dress/-/A-1001254369",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-multi-colored-crushed-velvet-tiered-dress/-/A-93590620",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-gary-the-snail-fit-flair-cap-sleeve-dress/-/A-1000463212",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-linen-smocked-short-bubble-sleeve-dress-kids/-/A-1001113718",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-pika-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002395133",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-tulle-dress-sizes-2t-14-16/-/A-1001160018",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-scuba-cosplay-tulle-dress/-/A-1003633328",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-linen-sleeveless-peter-pan-collar-tea-dress-with-waist-sash-kids/-/A-1001270688",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-french-terry-dress-little-kid-to-big/-/A-89698732",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-cakey-cat-gabby-kitty-fairy-pandy-paws-mercat-girls-tulle-dress-toddler-to-big-kid/-/A-89158862",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Tunic Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-short-sleeve-puff-sleeve-party-dress-kids/-/A-1000871958",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Empire Waist Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-flounce-sleeve-tiered-linen-dress-kids/-/A-1002929852",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-expressions-fit-flair-cap-sleeve-dress/-/A-1000449016",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-navy-heather-printed-jersey-dress/-/A-94081178",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-velvet-dress/-/A-91191080",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-smiley-print-jersey-dress/-/A-1002500348",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-boho-floral-lace-scalloped-hem-dress/-/A-1001833686",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-girls-velour-skater-dress-little-kid-to-big-kid/-/A-1000180890",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-friendship-bracelet-print-dress/-/A-1002498586",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-heirloom-girls-organic-sleeveless-special-occasion-seersucker-party-dress-with-cross-back-kids/-/A-1001113739",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-bubble-gum-sequin-puff-sleeve-dress/-/A-93788527",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/whizmax-girls-nightgown-dress-princess-lace-sleeveless-pajamas-cute-nightwear-size-10-12-years-youth-teen-girls/-/A-91712234",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-anna-moana-princess-rapunzel-jasmine-belle-girls-french-terry-dress-little-kid-to-big-kid/-/A-87245446",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-ready-for-baseball-fit-flair-cap-sleeve-dress/-/A-1000871652",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-sleeveless-open-tie-back-dresses/-/A-1004020853",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-sleeveless-maxi-embroidered-tulle-dress/-/A-1001847598",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-eevee-fit-flair-cap-sleeve-dress/-/A-1002396673",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/glittery-pink-bow-sequin-ruffle-dress-mia-belle-girls-pink-7/-/A-1003836801",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-3d-sunflower-sleeveless-dress-mia-belle-girls/-/A-1002437609",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/star-wars-the-mandalorian-baby-yoda-french-terry-dress-scrunchy-set/-/A-87266123",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-donald-duck-goofy-minnie-mouse-pluto-daisy-duck-fleece-dress-infant-to-big-kid/-/A-90023301",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-a-lil-bit-bananas-fit-flair-cap-sleeve-dress/-/A-94201761",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eeveelution-stickers-graphic-sleeveless-aline-dress/-/A-1002405597",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-everest-rubble-marshall-chase-skye-girls-dress-little-kid-to-big-kid/-/A-87251712",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-i-loaf-you-bread-graphic-sleeveless-aline-dress/-/A-1001620033",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-satin-bow-knot-sleeveless-maxi-dress/-/A-1001647453",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-smocked-party-dress-with-peter-pan-collar-kids/-/A-1001113850",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-lt-pint-rib-knit-dress-w-tulle/-/A-1002684028",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-diamond-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396810",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-satin-bow-knot-sleeveless-maxi-dress/-/A-1001294280",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/family-matching-outfits-women-girls-sleeveless-splicing-floral-leaf-print-midi-dresses-and-colorblock-short-sleeve-shirts/-/A-1003457014",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-clawdeen-cleo-draculaura-frankie-rainbow-logo-fit-flair-cap-sleeve-dress/-/A-93675515",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-girls-soft-camisole-dress/-/A-91472145",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-just-a-girl-who-loves-dinosaurs/-/A-1000782363",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-flutter-sleeve-a-line-dress/-/A-1004010347",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-sleeveless-stretch-poplin-sash-dress-kids/-/A-92214445",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-sunshine-on-my-mind-fit-flair-cap-sleeve-dress/-/A-94201874",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-interlock-polo-dress/-/A-93037909",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-characters-fit-flair-cap-sleeve-dress/-/A-1002396051",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-red-plaid-stretch-cord-ruffle-dress/-/A-93590578",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-fleece-soft-a-line-dress/-/A-91192721",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/glittery-pink-bow-sequin-ruffle-dress-mia-belle-girls-pink-6/-/A-1003836799",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-fancy-nancy-short-sleeve-tutu-dress-scrunchy-set-pink/-/A-87384200",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-quilted-puff-sleeve-dress-kids/-/A-92929618",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-puff-sleeve-organza-bow-party-dress/-/A-1002422202",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-boho-floral-lace-scalloped-hem-dress/-/A-1001833742",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/secret-garden-rose-hi-lo-ruffle-dress-mia-belle-girls/-/A-1002508116",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-girls-french-terry-skater-dress-toddler-to-big-kid/-/A-88951172",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-logo-hearts-graphic-short-sleeve-fleece-dress/-/A-1002083988",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/wrapables-girls-casual-print-cotton-dress/-/A-1002865827",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-pawsome-friends-fit-flair-cap-sleeve-dress/-/A-1002658727",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/disney-lion-king-simba-nala-short-sleeve-dress/-/A-85239152",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-sprigatito-stats-graphic-sleeveless-aline-dress/-/A-1002404510",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-sorry-my-dinosaur-ate-your-unicorn-graphic-sleeveless-aline-dress/-/A-1002118786",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-tiny-hooligan-graphic-sleeveless-aline-dress/-/A-1001620150",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977589",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-cupid-crew-graphic-sleeveless-aline-dress/-/A-1001620132",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/glittery-pink-bow-sequin-ruffle-dress-mia-belle-girls-pink-2t/-/A-1003836792",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-valentine-s-day-be-my-meowentine-graphic-sleeveless-aline-dress/-/A-1001620159",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-honk-if-lucky-graphic-sleeveless-aline-dress/-/A-1001620010",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002118639",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/boho-blossom-tank-tiered-dress-mia-belle-girls-blush-2t-3t/-/A-1003839782",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-lil-ducky-graphic-sleeveless-aline-dress/-/A-1001620023",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-clover-power-graphic-sleeveless-aline-dress/-/A-1002108095",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-logo-graphic-sleeveless-aline-dress/-/A-1002118178",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-dolls-rule-graphic-sleeveless-aline-dress/-/A-1002118703",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-malibu-sunset-with-palm-trees-graphic-sleeveless-aline-dress/-/A-1002118604",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-sleeveless-aline-dress/-/A-1002117896",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-icon-graphic-sleeveless-aline-dress/-/A-1001619984",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-pool-water-reflection-graphic-sleeveless-aline-dress/-/A-1002063809",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-here-for-the-shenanigans-graphic-sleeveless-aline-dress/-/A-1001620059",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002069523",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-tie-dye-and-butterflies-flutter-around-barbie-graphic-sleeveless-aline-dress/-/A-1002058914",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-grunge-grrrl-graphic-sleeveless-aline-dress/-/A-1001997417",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-malibu-vibes-graphic-sleeveless-aline-dress/-/A-1002117935",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dolls-lead-together-graphic-sleeveless-aline-dress/-/A-1002117537",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-birthday-graphic-sleeveless-aline-dress/-/A-1002090537",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-proud-to-be-me-graphic-sleeveless-aline-dress/-/A-1002091348",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-winter-breeze-graphic-sleeveless-aline-dress/-/A-1002055996",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-violet-skyler-jade-graphic-sleeveless-aline-dress/-/A-1001996079",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-m-c-swag-vibe-graphic-sleeveless-aline-dress/-/A-1001997241",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/the-brady-bunch-the-brady-kids-graphic-short-sleeve-fleece-dress/-/A-1001989251",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-greetings-from-barbie-land-graphic-sleeveless-aline-dress/-/A-1002118738",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-i-love-polly-pocket-graphic-short-sleeve-fleece-dress/-/A-1002020245",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-pink-daisy-pattern-logo-graphic-sleeveless-aline-dress/-/A-1002108078",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-pink-logo-graphic-short-sleeve-fleece-dress/-/A-1002014555",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002068470",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-90s-doll-graphic-sleeveless-aline-dress/-/A-1002021771",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-polly-pocket-pink-logo-graphic-sleeveless-aline-dress/-/A-1002014528",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-chica-chica-tropical-graphic-sleeveless-aline-dress/-/A-1001997075",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sun-s-out-graphic-sleeveless-aline-dress/-/A-1002057031",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002094945",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-butterflies-flutter-graphic-sleeveless-aline-dress/-/A-1002118060",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-support-girls-graphic-sleeveless-aline-dress/-/A-1002064369",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-friends-grow-together-graphic-sleeveless-aline-dress/-/A-1002117511",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-vibes-graphic-sleeveless-aline-dress/-/A-1001619994",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-friendship-goals-graphic-sleeveless-aline-dress/-/A-1002118103",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-land-postal-service-california-graphic-sleeveless-aline-dress/-/A-1002118707",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-strong-girls-club-graphic-sleeveless-aline-dress/-/A-1002062018",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-character-grid-graphic-sleeveless-aline-dress/-/A-1002008549",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-totally-rad-diva-graphic-sleeveless-aline-dress/-/A-1001997081",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-butterfly-logo-graphic-sleeveless-aline-dress/-/A-1002075977",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-property-of-barbie-land-beach-volleyball-team-graphic-sleeveless-aline-dress/-/A-1002118737",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-hearts-barbie-graphic-sleeveless-aline-dress/-/A-1002066647",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-4lyfe-graphic-sleeveless-aline-dress/-/A-1002117347",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-argyle-graphic-sleeveless-aline-dress/-/A-1002047029",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002095390",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-back-to-school-graphic-sleeveless-aline-dress/-/A-1002095297",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-happy-birthday-to-me-graphic-sleeveless-aline-dress/-/A-1002118124",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-logo-shamrock-pattern-graphic-sleeveless-aline-dress/-/A-1002108093",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-glam-stars-independent-queen-go-go-girl-graphic-sleeveless-aline-dress/-/A-1001991891",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fanime-kawaii-graphic-sleeveless-aline-dress/-/A-1002002532",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-draculara-graphic-sleeveless-aline-dress/-/A-1002117529",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-slime-logo-graphic-short-sleeve-fleece-dress/-/A-1002118428",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtles-happy-holidays/-/A-1000843135",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-faces-grid/-/A-1000782170",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-born-to-shine-graphic-sleeveless-aline-dress/-/A-1001960294",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-poses-fit-flair-cap-sleeve-dress/-/A-1002395304",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-star-of-this-show/-/A-1000789520",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788472",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-mine-mine-mine-graphic-sleeveless-aline-dress/-/A-1000798927",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1001985167",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-lol-hi-bae-graphic-sleeveless-aline-dress/-/A-1002003740",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000856849",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-stickers/-/A-1000789878",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857231",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857448",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-silhouette-stars-stripes/-/A-1000817163",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-hey-boo-fit-flair-cap-sleeve-dress/-/A-1000877218",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-be-you-be-true-graphic-sleeveless-aline-dress/-/A-1002117059",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-did-i-scare-ya/-/A-1000810374",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-trainer-pokeball-logo-fit-flair-cap-sleeve-dress/-/A-1002395593",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-always-extra-graphic-sleeveless-aline-dress/-/A-1001996859",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-welcome-to-the-dreamhouse-fit-flair-cap-sleeve-dress/-/A-1002052431",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820385",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-shamrock-pattern-fit-flair-cap-sleeve-dress/-/A-1002108068",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-anime-kanji-fit-flair-cap-sleeve-dress/-/A-1002377511",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-they-call-me-ken-graphic-sleeveless-aline-dress/-/A-1002117755",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-scary-cute/-/A-1000857376",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-sleeveless-aline-dress/-/A-1002405217",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817469",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-polaroid-pictures-graphic-sleeveless-aline-dress/-/A-1001976955",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-plaid-logo-graphic-short-sleeve-fleece-dress/-/A-1002395458",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-multi-color-choose-kindness-graphic-sleeveless-aline-dress/-/A-1002062997",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-too-rad-to-be-sad-fit-flair-cap-sleeve-dress/-/A-1000875018",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-u-glow-girl-graphic-sleeveless-aline-dress/-/A-1002003476",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817739",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000827624",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788444",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sandy-boo-y-all/-/A-1000850807",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-ready-to-explore/-/A-1000765786",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-hug-it-out/-/A-1000789420",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bff-vibes-with-queen-bee-deva-neon-qt-graphic-sleeveless-aline-dress/-/A-1001991672",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-aloha-from-bikini-bottom/-/A-1000784967",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819746",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-lagoona-frankie-cleo-clawdeen-draculaura-pastel-logo-fit-flair-cap-sleeve-dress/-/A-93675471",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-squares-graphic-sleeveless-aline-dress/-/A-1002405245",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-cool-arnold/-/A-1000855908",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-world-graphic-sleeveless-aline-dress/-/A-1002116962",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831385",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-the-brady-bunch-the-brady-kids-fit-flair-cap-sleeve-dress/-/A-1001988397",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-queen-bee-neon-qt-deva-sugar-graphic-sleeveless-aline-dress/-/A-1001991868",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781261",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-skater-logo/-/A-1000786000",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-i-m-just-here-for-the-snacks-graphic-sleeveless-aline-dress/-/A-1003959972",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795443",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-paw-patrol-is-on-a-roll/-/A-1000765765",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/the-pink-picket-fence-lulu-hippo-twirl-dress-with-scrunchie-for-girls-100-cotton-long-sleeve-play-dress-hand-painted-hippo-print/-/A-1004801373",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-super-band/-/A-1000781028",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rocket-power-finish-line/-/A-1000826714",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-arrow-heart-logo-fit-flair-cap-sleeve-dress/-/A-1002083915",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-kindergarten-graphic-sleeveless-aline-dress/-/A-1003967583",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000845459",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-wall-fit-flair-cap-sleeve-dress/-/A-1002395274",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-plankton-naughty-list/-/A-1000851006",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/harry-potter-hogwarts-little-girls-fleece-flannel-oversized-dress-plaid-mellow-rose-5/-/A-1003546583",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-ha-air-guitar/-/A-1000854962",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-happy-kampers/-/A-1000787522",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-abc-book-characters-graphic-sleeveless-aline-dress/-/A-1003966135",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-outlined-shamrock-graphic-sleeveless-aline-dress/-/A-1001601867",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791476",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/stars-stripes-sweetheart-twirl-dress-mia-belle-girls/-/A-1004233793",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-graphic-sleeveless-aline-dress/-/A-1000828555",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-bulbasaur-anime-battle-youth-girls-fit-and-flare-dress-fit-flair-cap-sleeve-dress/-/A-1002377752",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-xmas-sweater-fit-flair-cap-sleeve-dress/-/A-1000474871",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-stay-pawsome-fit-flair-cap-sleeve-dress/-/A-1000447770",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-spring-bouquet-pattern-logo-graphic-sleeveless-aline-dress/-/A-1002107394",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000835840",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000847570",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-queens-graphic-sleeveless-aline-dress/-/A-1001990056",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-pawsome-pups-to-the-rescue/-/A-1000841938",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-pawsome-explorers/-/A-1000765759",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-valentine-s-i-love-you/-/A-1000854527",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-rad-little-lad-graphic-sleeveless-aline-dress/-/A-1001601578",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781230",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791608",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-ken-serving-lewks-since-1961-fit-flair-cap-sleeve-dress/-/A-1002048915",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-have-a-nice-day/-/A-1000763593",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-punk-icons-graphic-sleeveless-aline-dress/-/A-1002405256",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-party-graphic-sleeveless-aline-dress/-/A-1001990734",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-cheat-day-graphic-short-sleeve-fleece-dress/-/A-1001730017",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-turtle-power-new/-/A-1000786663",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-reptar-anorak-fit-flair-cap-sleeve-dress/-/A-1000449692",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781312",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-4th-grade-squad-fit-flair-cap-sleeve-dress/-/A-1000463220",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bon-bon-doll-graphic-sleeveless-aline-dress/-/A-1001997223",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-blue-belle-graffiti-graphic-sleeveless-aline-dress/-/A-1002116893",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-select-your-turtle-video-game/-/A-1000838820",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-dance-queens-graphic-sleeveless-aline-dress/-/A-1001990172",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-summer-vibes-graphic-sleeveless-aline-dress/-/A-1002117969",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-sister-of-birthday-boy-graphic-sleeveless-aline-dress/-/A-1002085829",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-frosty-friends/-/A-1000839806",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-chasing-dreams-graphic-sleeveless-aline-dress/-/A-1002050875",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-reptar-slime/-/A-1000781766",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-squad-second-grade/-/A-1000787218",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ready-for-baseball-graphic-short-sleeve-fleece-dress/-/A-1001736055",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-and-snowflakes-graphic-sleeveless-aline-dress/-/A-1002404009",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-big-eyes/-/A-1000781125",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820646",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-and-eevee-fit-flair-cap-sleeve-dress/-/A-1002395001",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-circle/-/A-1000781927",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-witch-graphic-sleeveless-aline-dress/-/A-1002118196",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-rescue-myself-graphic-sleeveless-aline-dress/-/A-1003238239",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-bah-humbug/-/A-1000840121",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-third-grade-graphic-sleeveless-aline-dress/-/A-1003967226",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788525",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-b-day-bbs-graphic-sleeveless-aline-dress/-/A-1001990386",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-egg-ever/-/A-1000850288",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-shimmering-sequin-spaghetti-strap-mini-dress/-/A-1004667836",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Shift Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongeboo/-/A-1000850671",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-poppy-stacked-name/-/A-1000798184",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-rainbow-vibes-poppy/-/A-1000798271",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-apple-jack-graphic-sleeveless-aline-dress/-/A-1001960854",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-graphic-sleeveless-aline-dress/-/A-1000828573",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000845475",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-run/-/A-1000781712",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-santa-spongebob-fit-flair-cap-sleeve-dress/-/A-1000475103",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-4th-grade-squad/-/A-1000785109",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831437",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000845520",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000769181",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-pawsome-pups-to-the-rescue-fit-flair-cap-sleeve-dress/-/A-1000876326",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-snowball-fight/-/A-1000784765",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-scene-graphic-sleeveless-aline-dress/-/A-1001958377",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-chuckie-we-re-doomed/-/A-1000781728",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-graphic-sleeveless-aline-dress/-/A-1003928835",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-best-witches/-/A-1000845093",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtle-power-americana-fit-flair-cap-sleeve-dress/-/A-1000847792",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-small-fry-caf-graphic-sleeveless-aline-dress/-/A-1002003974",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pokedex-diagram-graphic-short-sleeve-fleece-dress/-/A-1002385080",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-3rd-grade-squad-fit-flair-cap-sleeve-dress/-/A-1000463208",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongeboo-fit-flair-cap-sleeve-dress/-/A-1000877132",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-a-line-dress-mixed-fruit-multicoloured/-/A-1004191086",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-retro-arnold-and-gerald-graphic-short-sleeve-fleece-dress/-/A-1001729677",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/long-sleeve-twirl-dress-in-hufflepuff/-/A-1004883991",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-love-rules-graphic-sleeveless-aline-dress/-/A-1002116983",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791447",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791429",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-style-graphic-sleeveless-aline-dress/-/A-1002404964",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-breakout-fit-flair-cap-sleeve-dress/-/A-1000450157",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-s-clues-me-graphic-sleeveless-aline-dress/-/A-1000753903",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-2nd-grade-squad/-/A-1000785158",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-good-news/-/A-1000781764",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-peace-love-pizza-fit-flair-cap-sleeve-dress/-/A-1000848065",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795159",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-battle-ready-graphic-sleeveless-aline-dress/-/A-1002404131",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-be-the-change-fit-flair-cap-sleeve-dress/-/A-1000463099",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-power-chord-fit-flair-cap-sleeve-dress/-/A-1000871742",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-hate-mondays-badge/-/A-1000763418",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-stacked-faces/-/A-1000782091",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-red-white-and-deep-blue-sea/-/A-1000770820",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788427",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-we-re-so-ambitous-graphic-sleeveless-aline-dress/-/A-1003962990",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000849705",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-weaster/-/A-1000850125",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-boo/-/A-1000763817",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-creatures-of-the-deep-fit-flair-cap-sleeve-dress/-/A-1000877252",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-i-woke-up-this-lucky-graphic-sleeveless-aline-dress/-/A-1001600987",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-afro-hoops-graphic-sleeveless-aline-dress/-/A-1002117706",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-curious-george-classic-cartoons-fit-flair-cap-sleeve-dress/-/A-1003962626",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-all-the-colors-of-the-rainbow-are-beautiful/-/A-1000767082",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-petticoat-high-low-ruffled-shimmer-birthday-gown-princess-dress/-/A-1004801821",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-angelica-grinning-ear-to-ear/-/A-1000781736",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-koral-badge/-/A-1000787396",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-since-96/-/A-1000854080",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817755",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-pure-fire-graphic-sleeveless-aline-dress/-/A-1001995973",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-bulbasaur-anime-battle-youth-girls-a-line-dress-graphic-sleeveless-aline-dress/-/A-1002404896",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-peeking-pikachu-graphic-sleeveless-aline-dress/-/A-1002404766",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-sleeveless-aline-dress/-/A-1001978675",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-crown-fit-flair-cap-sleeve-dress/-/A-1003970576",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-tis-the-season-fit-flair-cap-sleeve-dress/-/A-1000876034",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-ho-ho-no/-/A-1000840061",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-color-stripes/-/A-1000781086",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-partners-team-graphic-sleeveless-aline-dress/-/A-1002405582",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-retro-swimsuit-graphic-sleeveless-aline-dress/-/A-1002059479",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-mon-trainer-graphic-sleeveless-aline-dress/-/A-1002405197",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-easter-graphic-sleeveless-aline-dress/-/A-1002074770",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-earth-every-day/-/A-1000848544",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-distressed-arnold/-/A-1000855484",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-red-rocker-blue-bomber-graphic-sleeveless-aline-dress/-/A-1002011367",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-let-s-get-started-graphic-sleeveless-aline-dress/-/A-1002405363",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-first-grade-out-of-this-world-graphic-sleeveless-aline-dress/-/A-1003966010",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-american-all-star-graphic-short-sleeve-fleece-dress/-/A-1001736162",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-get-into-the-ninja-spirit-fit-flair-cap-sleeve-dress/-/A-1000876485",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-only-here-for-the-eats-graphic-sleeveless-aline-dress/-/A-1000798845",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sketch-original-fit-flair-cap-sleeve-dress/-/A-1002060584",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-colors-of-the-rainbow-graphic-sleeveless-aline-dress/-/A-1000766529",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-robots-graphic-sleeveless-aline-dress/-/A-1002010830",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-lights-wreath-graphic-sleeveless-aline-dress/-/A-1002404084",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-hugs-kisses-pup-treats/-/A-1000833034",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-tricks-and-pup-treats/-/A-1000857541",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-hello-bello-minion/-/A-1000798912",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-mighty-movie-character-group-fit-flair-cap-sleeve-dress/-/A-1000807057",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000825978",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857024",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hey-boo/-/A-1000850776",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-lightning/-/A-1000807260",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-sky-high-blowing-bubbles-fit-flair-cap-sleeve-dress/-/A-1000449089",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-ripping-out/-/A-1000782045",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-hooray-for-summer/-/A-1000752910",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-kanji-fit-flair-cap-sleeve-dress/-/A-1002396798",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-team-paw-marshall/-/A-1000809265",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-faboolous-graphic-sleeveless-aline-dress/-/A-1002118162",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-it-s-lit-graphic-short-sleeve-fleece-dress/-/A-1001738914",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820519",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803072",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000857239",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/bluey-little-girls-gingham-dress-pink-6/-/A-1003546564",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-absorb-the-love-fit-flair-cap-sleeve-dress/-/A-1000463191",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-monster-friends-forever-graphic-sleeveless-aline-dress/-/A-1002117214",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-reptar-dance/-/A-1000781918",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-birthday-qt-graphic-sleeveless-aline-dress/-/A-1001990381",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857312",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828322",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-live-and-let-shred/-/A-1000808991",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-meowth-shadow-fit-flair-cap-sleeve-dress/-/A-1002395542",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-celebr8-graphic-sleeveless-aline-dress/-/A-1001990921",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-only-here-for-the-eats/-/A-1000796472",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-only-here-for-the-eats/-/A-1000798768",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtley-awesome-group-fit-flair-cap-sleeve-dress/-/A-1000876514",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-pumpkin-fit-flair-cap-sleeve-dress/-/A-1002377151",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-logo-retro-collage-graphic-sleeveless-aline-dress/-/A-1001984367",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-raphael-going-in-loud/-/A-1000826960",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-adventure-awaits-amigos/-/A-1000773145",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-nap-attack/-/A-1000762620",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-attacks-fit-flair-cap-sleeve-dress/-/A-1002395016",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/the-pink-picket-fence-penny-penguin-twirl-dress-for-girls-100-cotton-long-sleeve-play-dress-hand-painted-penguin-print/-/A-1004801961",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-seasons-greetings-graphic-sleeveless-aline-dress/-/A-1002404051",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-easter-weaster-fit-flair-cap-sleeve-dress/-/A-1000501798",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/karma-s-world-conquer-the-world-graphic-sleeveless-aline-dress/-/A-1003963373",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pika-face-fit-flair-cap-sleeve-dress/-/A-1002395275",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-wall-graphic-sleeveless-aline-dress/-/A-1002405557",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-group-in-circle-fit-flair-cap-sleeve-dress/-/A-1002348118",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-sandy-boo-y-all-fit-flair-cap-sleeve-dress/-/A-1000877117",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-battle-mode-fit-flair-cap-sleeve-dress/-/A-1002397013",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-collage-graphic-sleeveless-aline-dress/-/A-1002055096",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-winston-fit-flair-cap-sleeve-dress/-/A-1003928497",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781301",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-danny-phantom-ghost-hunters-fit-flair-cap-sleeve-dress/-/A-1000872392",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-fierce-doll-graphic-sleeveless-aline-dress/-/A-1002002189",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-don-t-do-perky/-/A-1000763412",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pumpkin-graphic-sleeveless-aline-dress/-/A-1002404838",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-but-first-lasagna/-/A-1000764025",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pok-mon-round-group-fit-flair-cap-sleeve-dress/-/A-1002395911",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-simply-bootiful-poppy/-/A-1000796945",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-squidward-bed/-/A-1000785190",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mattel-nickelodeon-monster-high-the-movie-fit-flair-cap-sleeve-dress/-/A-1002008115",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-group-lucky-graphic-sleeveless-aline-dress/-/A-1002108220",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-born-raised-usa-fit-flair-cap-sleeve-dress/-/A-1000847796",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-fuecoco-stats-graphic-sleeveless-aline-dress/-/A-1002404485",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-i-love-polly-pocket-graphic-sleeveless-aline-dress/-/A-1002020286",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-easter-is-egg/-/A-1000850154",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-pixel-gaming-group/-/A-1000838746",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-winter-dolls-graphic-sleeveless-aline-dress/-/A-1001977631",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-character-blocks-fit-flair-cap-sleeve-dress/-/A-1000451817",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-individual-classic-icons-create-silhouette-graphic-sleeveless-aline-dress/-/A-1002067415",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-four-elements-square/-/A-1000764510",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pick-of-the-patch-graphic-sleeveless-aline-dress/-/A-1002404821",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-pastel-character-group-graphic-sleeveless-aline-dress/-/A-1002010232",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-jiggypuff-sing-along-graphic-sleeveless-aline-dress/-/A-1002405354",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-fluttershy-graphic-sleeveless-aline-dress/-/A-1001961205",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-witchy-logo-graphic-sleeveless-aline-dress/-/A-1002118203",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-born-raised-usa/-/A-1000847838",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-leopard-heart-fit-flair-cap-sleeve-dress/-/A-1002064414",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-rainbow-high-character-group-graphic-sleeveless-aline-dress/-/A-1001995957",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-boo-crew/-/A-1000810437",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831513",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-absorb-the-love/-/A-1000785087",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-space-rock-girls-graphic-sleeveless-aline-dress/-/A-1002003954",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bravo-babes-graphic-sleeveless-aline-dress/-/A-1002003973",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-third-grade-out-of-this-world-graphic-sleeveless-aline-dress/-/A-1003963621",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828486",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-sbob-silhouette/-/A-1000785146",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-gaming-group-and-logo/-/A-1000838647",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-two/-/A-1000773756",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810069",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-usa-things/-/A-1000773693",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-muntant-ninja-turtle-shredder-pixels-fit-flair-cap-sleeve-dress/-/A-1000875918",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-kitty-cat-crew/-/A-1000772394",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-best-buds-graphic-short-sleeve-fleece-dress/-/A-1001729335",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-egg-hunting-champ/-/A-1000850234",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-shamrocks-filled-graphic-sleeveless-aline-dress/-/A-1001603227",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-group/-/A-1000781655",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-whatever/-/A-1000761899",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818993",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-pattern-colorful-graphic-sleeveless-aline-dress/-/A-1002060726",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-this-kid-s-gotta-fly/-/A-1000765719",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-bueller-bueller-bueller-graphic-sleeveless-aline-dress/-/A-1002031330",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-sigh/-/A-1000789374",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-snorlax-graphic-sleeveless-aline-dress/-/A-1002405445",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-lets-get-food/-/A-1000789656",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-cleo-denile-graphic-sleeveless-aline-dress/-/A-1002117487",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-minion-banana-stickers-graphic-sleeveless-aline-dress/-/A-1000798637",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000802939",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781332",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-gathered-waist-jersey-dress/-/A-90022360",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-m-here-youre-welcome/-/A-1000789516",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-stantler-art-graphic-sleeveless-aline-dress/-/A-1002405212",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-frosty-friends-fit-flair-cap-sleeve-dress/-/A-1000876056",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-retro-gamer-logo-graphic-sleeveless-aline-dress/-/A-1001984528",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-lets-be-kind-plants-graphic-sleeveless-aline-dress/-/A-1001997220",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-style-graphic-short-sleeve-fleece-dress/-/A-1002381085",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-wind/-/A-1000764687",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-retro-rugrats/-/A-1000784668",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-were-on-it/-/A-1000765607",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-legend-graphic-sleeveless-aline-dress/-/A-1002404435",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-nature-patrol/-/A-1000765774",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-tie-dye-logo-fit-flair-cap-sleeve-dress/-/A-1002112547",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-slowpoke-taking-it-slow-graphic-sleeveless-aline-dress/-/A-1002405230",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-faboolous-fit-flair-cap-sleeve-dress/-/A-1002092010",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-pineapple-party-graphic-sleeveless-aline-dress/-/A-1002010338",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-luck-of-the-square-pants-fit-flair-cap-sleeve-dress/-/A-1000849929",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-character-grid-fit-flair-cap-sleeve-dress/-/A-1002396974",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter/-/A-1000849826",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-mood/-/A-1000762771",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-magical-gamer-girl-graphic-sleeveless-aline-dress/-/A-1003238262",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-eek/-/A-1000857427",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-franken-sponge-fit-flair-cap-sleeve-dress/-/A-1000877200",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-lets-unbox-graphic-sleeveless-aline-dress/-/A-1001978245",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-charmander-snowflakes-fit-flair-cap-sleeve-dress/-/A-1002353899",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-squidward-bah-humbug-fit-flair-cap-sleeve-dress/-/A-1000876143",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-mewtwo-ready-for-battle-fit-flair-cap-sleeve-dress/-/A-1002377539",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-quaxly-stats-graphic-sleeveless-aline-dress/-/A-1002404551",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795377",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-gerold-bike/-/A-1000855342",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-game-on-mike/-/A-1000838651",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-stars/-/A-1000781997",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-sleigh-what-graphic-sleeveless-aline-dress/-/A-1001978222",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-santa-hat-graphic-sleeveless-aline-dress/-/A-1002404007",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/how-to-train-your-dragon-we-have-dragons-graphic-sleeveless-aline-dress/-/A-1003890589",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-tis-the-season/-/A-1000840010",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-fangtastic/-/A-1000763832",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000846502",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pikachu-grid-graphic-sleeveless-aline-dress/-/A-1002404981",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-coney-island-graphic-sleeveless-aline-dress/-/A-1001974274",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-for-toys/-/A-1000782019",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-teamwork-makes-the-dream-work-graphic-sleeveless-aline-dress/-/A-1001986717",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/tropical-florals-casual-hi-lo-dress-mia-belle-girls/-/A-1002293241",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, High-low Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000820526",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-movie-logo-fit-flair-cap-sleeve-dress/-/A-1000827017",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-silhouette-stars-stripes/-/A-1000817126",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girl-power-in-illusion-wave-graphic-sleeveless-aline-dress/-/A-1002072642",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815611",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-nickelodeon-paw-patrol-fit-flair-cap-sleeve-dress/-/A-1000828491",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791600",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817924",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-x-marks-the-spot/-/A-1000770986",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-hippie-lil-thing-graphic-short-sleeve-fleece-dress/-/A-1000796538",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-press-start-grid/-/A-1000838893",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-kanji-graphic-sleeveless-aline-dress/-/A-1002405548",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-graphic-short-sleeve-fleece-dress/-/A-1000828581",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781217",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-let-s-par-tea-graphic-sleeveless-aline-dress/-/A-1001991081",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunset-and-palm-trees-graphic-sleeveless-aline-dress/-/A-1002055767",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-kitty-cat-crew-fit-flair-cap-sleeve-dress/-/A-1000871758",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-three-quarter-sleeve-twirly-dresses/-/A-1004020895",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000769211",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-polly-pocket-totally-tiny-vibes-fit-flair-cap-sleeve-dress/-/A-1002012765",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-bikini-bottom-egg-hunting-champ-fit-flair-cap-sleeve-dress/-/A-1000850221",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-beyoutiful-graphic-sleeveless-aline-dress/-/A-1002082040",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-curious-george-classic-cartoons-fit-flair-cap-sleeve-dress/-/A-1003962634",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hot-wheels-going-big-for-my-birthday-graphic-sleeveless-aline-dress/-/A-1002086876",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795180",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003965462",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-lucky-to-not-be-in-trouble-graphic-sleeveless-aline-dress/-/A-1001600678",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-girl-group-graphic-sleeveless-aline-dress/-/A-1003928672",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002067128",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-logo-hearts-fit-flair-cap-sleeve-dress/-/A-1002083745",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000802971",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-living-the-good-life-graphic-sleeveless-aline-dress/-/A-1000798826",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sister-of-the-birthday-girl-graphic-short-sleeve-fleece-dress/-/A-1002087273",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-partay-with-kitty-queen-graphic-sleeveless-aline-dress/-/A-1001991300",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/monster-high-group-with-pets-graphic-sleeveless-aline-dress/-/A-1002008574",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-invader-zim-gir-loves-tacos-in-space-fit-flair-cap-sleeve-dress/-/A-1003962396",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-your-opinion-has-been-duly-noted/-/A-1000789394",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795151",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-rather-be-at-beach-fit-flair-cap-sleeve-dress/-/A-1000463153",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-patrick-sparkers-flag/-/A-1000817119",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mtv-logo-retro-collage-fit-flair-cap-sleeve-dress/-/A-1001983810",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-retro-sunset-fit-flair-cap-sleeve-dress/-/A-1000468992",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-sorry-for-what-i-said-fit-flair-cap-sleeve-dress/-/A-1000449713",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-ha-air-guitar-graphic-short-sleeve-fleece-dress/-/A-1001729975",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-gotta-blast/-/A-1000856207",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-the-great-chase/-/A-1000784708",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-2nd-grade-squad/-/A-1000784999",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-muntant-ninja-turtle-its-ninja-time-donnie-fit-flair-cap-sleeve-dress/-/A-1000875897",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-and-gerald-skateboard/-/A-1000855538",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791706",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-logo-graphic-short-sleeve-fleece-dress/-/A-1002396177",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857298",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795384",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790534",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-reptar-revival-tour-fit-flair-cap-sleeve-dress/-/A-1000449898",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-repeated/-/A-1000785988",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/avatar-the-last-airbender-aang-2005/-/A-1000764786",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-pre-k-graphic-sleeveless-aline-dress/-/A-1003968028",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781205",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-eevee-133-graphic-sleeveless-aline-dress/-/A-1002405056",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803098",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-enrique-palacios-fit-flair-cap-sleeve-dress/-/A-1000871792",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-dinosaur-eatting-rainbow-graphic-sleeveless-aline-dress/-/A-1001600113",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-turtle-power-new-fit-flair-cap-sleeve-dress/-/A-1000468888",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-fresh-arnold/-/A-1000855788",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-movie-logo/-/A-1000827027",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-animal-print-splatter-graphic-sleeveless-aline-dress/-/A-1001984157",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-luck-of-the-square-pants/-/A-1000849936",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-2nd-grade-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003966535",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-lightning-fit-flair-cap-sleeve-dress/-/A-1002396713",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000850453",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dashing-through-the-snow/-/A-1000839878",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/twirl-dress-in-blush-butterfly/-/A-1003295100",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-catch-my-vibe-graphic-sleeveless-aline-dress/-/A-1001996764",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-group-shot-graphic-short-sleeve-fleece-dress/-/A-1001730689",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-patrick-candy-canes-fit-flair-cap-sleeve-dress/-/A-1000474840",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000875807",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000788586",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000875757",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000802913",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819720",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-the-dreamhouse-60th-anniversary-fit-flair-cap-sleeve-dress/-/A-1002058557",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pick-of-the-patch-fit-flair-cap-sleeve-dress/-/A-1002376900",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-i-dream-of-ice-cream-graphic-sleeveless-aline-dress/-/A-1001986828",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-miraidon-collegiate-graphic-sleeveless-aline-dress/-/A-1002404455",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-summer-pool-floaties-graphic-sleeveless-aline-dress/-/A-1002060502",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-engage-graphic-sleeveless-aline-dress/-/A-1002405479",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-91-checkers/-/A-1000782006",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-slugger-pants-fit-flair-cap-sleeve-dress/-/A-1000871612",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mr-salty-graphic-sleeveless-aline-dress/-/A-1000766134",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000825886",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-american-all-star-fit-flair-cap-sleeve-dress/-/A-1000871681",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-happy-st-patricks-day/-/A-1000850024",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rock-em-sock-em-robots-rock-em-sock-em-logo-graphic-sleeveless-aline-dress/-/A-1002117462",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-barbie-birthdays-are-sweet-graphic-sleeveless-aline-dress/-/A-1002090601",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/worthy-threads-little-big-girls-ruffle-sleeve-tie-back-dresses/-/A-1004009327",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-group-shot/-/A-1000855209",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795145",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-dragonite-charizard-prepare-for-battle-graphic-sleeveless-aline-dress/-/A-1002404539",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-groovy-babe-graphic-sleeveless-aline-dress/-/A-1001990510",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-karma-s-world-speak-through-art-fit-flair-cap-sleeve-dress/-/A-1003928596",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-pineapple-art-fit-flair-cap-sleeve-dress/-/A-1000448823",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-4th-of-july-graphic-sleeveless-aline-dress/-/A-1002117309",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-100-days-of-learning/-/A-1000787159",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-bulbasaur-charmander-group-graphic-sleeveless-aline-dress/-/A-1002404142",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-adventure-awaits/-/A-1000765815",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-charmander-see-the-evolution-graphic-sleeveless-aline-dress/-/A-1002405454",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bffs-4eva-bon-bon-snuggle-babe-graphic-sleeveless-aline-dress/-/A-1002117333",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-graphic-sleeveless-aline-dress/-/A-1000828606",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-3rd-grade-squad/-/A-1000785182",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-boo-tiful-fit-flair-cap-sleeve-dress/-/A-1000877173",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-righteous-dude-graphic-sleeveless-aline-dress/-/A-1002030369",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-airbrush-arnold/-/A-1000854823",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-electric-dreams-graphic-sleeveless-aline-dress/-/A-1002003840",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-dear-santa/-/A-1000848724",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-rainbow-dash-graphic-sleeveless-aline-dress/-/A-1001960700",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-country-casuals-raised-on-country-sunshine-graphic-sleeveless-aline-dress/-/A-1004186874",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-pre-k-squad-thing-1-and-thing-2-graphic-sleeveless-aline-dress/-/A-1003965228",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815776",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-natural-wonder/-/A-1000784728",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-the-snuggle-is-real-pikachu-and-sylveon-graphic-sleeveless-aline-dress/-/A-1002404212",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-with-hat-graphic-sleeveless-aline-dress/-/A-1002404067",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-splash-beauty-w-butterflies-hearts-graphic-sleeveless-aline-dress/-/A-1001990906",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-spray-paint-96/-/A-1000854278",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-conversation-hearts-fit-flair-cap-sleeve-dress/-/A-1000832844",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817976",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-made-in-the-90-s-graphic-sleeveless-aline-dress/-/A-1002064205",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-kounselor-squidward/-/A-1000787605",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-winter-holidays-graphic-sleeveless-aline-dress/-/A-1002044011",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-sun-surf-fun/-/A-1000786499",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-cutest-kitty-ever/-/A-1000789951",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-stacked-barbie-vday-graphic-sleeveless-aline-dress/-/A-1002058489",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-pipp-graphic-graphic-sleeveless-aline-dress/-/A-1002117025",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-who-needs-luck-with-this-charm-fit-flair-cap-sleeve-dress/-/A-1000827569",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-no-tricks-just-treats-fit-flair-cap-sleeve-dress/-/A-1000877125",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-bundled-up-graphic-sleeveless-aline-dress/-/A-1002405515",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000769027",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pikachu-grid-graphic-short-sleeve-fleece-dress/-/A-1002380509",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-bff-pony-grid-graphic-sleeveless-aline-dress/-/A-1002117062",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-creatures-of-the-deep/-/A-1000850838",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-and-friends-graphic-sleeveless-aline-dress/-/A-1002405080",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-checkered-graphic-sleeveless-aline-dress/-/A-1002404975",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-st-patrick-s-day-irish-i-was-a-unicorn-graphic-sleeveless-aline-dress/-/A-1001602777",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-psyduck-headache-graphic-sleeveless-aline-dress/-/A-1002405372",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-outrageous-millennial-girls-graphic-sleeveless-aline-dress/-/A-1001991198",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-time-to-shine-graphic-sleeveless-aline-dress/-/A-1002004016",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mtv-slime-logo-fit-flair-cap-sleeve-dress/-/A-1001983805",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ferris-bueller-s-day-off-do-you-know-anything-graphic-sleeveless-aline-dress/-/A-1002030606",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-sunglasses/-/A-1000786006",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-faboolous-graphic-short-sleeve-fleece-dress/-/A-1002092048",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-cowabunga/-/A-1000781100",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-who-needs-luck-with-this-charm/-/A-1000827676",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857282",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000769235",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-slay-all-day-graphic-sleeveless-aline-dress/-/A-1001978256",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol/-/A-1000828430",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-genius/-/A-1000856315",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-sleeveless-aline-dress/-/A-1002047682",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-learn-alotl-in-1st-grade-graphic-sleeveless-aline-dress/-/A-1003959272",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-snowball-fight/-/A-1000784830",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-character-grid/-/A-1000763997",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-heart-earth/-/A-1000848463",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-girls-all-together-graphic-sleeveless-aline-dress/-/A-1002117844",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-character-art-fit-flair-cap-sleeve-dress/-/A-1000809189",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pok-mon-graphic-sleeveless-aline-dress/-/A-1002405157",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-prone-to-shenanigans-and-malarkey/-/A-1000827583",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-what-costume/-/A-1000810365",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-free-spirit-doll-graphic-sleeveless-aline-dress/-/A-1002002214",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-line-up-fit-flair-cap-sleeve-dress/-/A-1000449785",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000835911",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-skye-suns-out-funs-out-fit-flair-cap-sleeve-dress/-/A-1000467076",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-lol-surprise-glam-stars-independent-queen-go-go-girl-fit-flair-cap-sleeve-dress/-/A-1001990624",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795447",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-living-the-dream/-/A-1000789899",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-loves-earth/-/A-1000848453",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000875853",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-costume-party-graphic-short-sleeve-fleece-dress/-/A-1002090893",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-mikey/-/A-1000786725",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-group-in-circle-graphic-short-sleeve-fleece-dress/-/A-1002348183",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-leo-and-brothers-tmnt/-/A-1000809127",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781274",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-my-friends-greatest-treasure/-/A-1000781365",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-the-brady-bunch-classic-hollywood-squares-fit-flair-cap-sleeve-dress/-/A-1001988352",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-living-the-dream-graphic-sleeveless-aline-dress/-/A-1002066327",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-marshall-and-rubble-beach/-/A-1000786482",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-together-we-slay-graphic-sleeveless-aline-dress/-/A-1001974326",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/if-movie-imagination-blossom-graphic-sleeveless-aline-dress/-/A-1001970378",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000819736",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795424",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/nickelodeon-paw-patrol-graphic-sleeveless-aline-dress/-/A-1000828361",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mtv-take-me-to-the-moon-person-graphic-sleeveless-aline-dress/-/A-1001984227",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000769007",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-never-trust-smiling-cat/-/A-1000762531",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-attack-graphic-sleeveless-aline-dress/-/A-1002404924",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-squirtle-and-snowflakes-fit-flair-cap-sleeve-dress/-/A-1002353898",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-garfield-odie-game-on/-/A-1000786215",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-reptar-heads/-/A-1000781876",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000781291",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-turn-it-up-graphic-sleeveless-aline-dress/-/A-1001995989",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857199",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791638",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-city-scape-with-turtles/-/A-1000838872",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/polly-pocket-totally-tiny-vibes-graphic-sleeveless-aline-dress/-/A-1002012882",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-red-white-and-deep-blue-sea-fit-flair-cap-sleeve-dress/-/A-1000871634",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-panel-comic-manga-graphic-sleeveless-aline-dress/-/A-1002404911",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-ready-to-rock-second-grade-graphic-sleeveless-aline-dress/-/A-1003967449",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000853107",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-patterned-love-graphic-sleeveless-aline-dress/-/A-1002076012",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-blue-waves-hello-graphic-sleeveless-aline-dress/-/A-1000754109",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-manga-fit-flair-cap-sleeve-dress/-/A-1002396033",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-pattern-graphic-sleeveless-aline-dress/-/A-1002405302",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803130",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-day-graphic-sleeveless-aline-dress/-/A-1002043070",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-hangout-fit-flair-cap-sleeve-dress/-/A-1000449765",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-i-love-pop-poppy/-/A-1000798156",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-gerald-and-abner/-/A-1000855594",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-pinkie-pie-graphic-sleeveless-aline-dress/-/A-1001960779",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-don-t-know-don-t-care/-/A-1000763956",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-1996-graphic-short-sleeve-fleece-dress/-/A-1001729576",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-boo-crew-fit-flair-cap-sleeve-dress/-/A-1000810346",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-take-life-one-nap/-/A-1000762024",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803052",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lands-end-kids-bubble-short-sleeve-velour-dress/-/A-1005140021",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mommy-is-my-sunshine-graphic-sleeveless-aline-dress/-/A-1000766192",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-neon-pikachu-graphic-sleeveless-aline-dress/-/A-1002405269",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000802923",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-middle-school-dolls-graphic-sleeveless-aline-dress/-/A-1002048136",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-run/-/A-1000781933",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000857150",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-the-snuggle-is-real-pikachu-and-piplup-graphic-sleeveless-aline-dress/-/A-1002404179",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-not-always-right/-/A-1000762485",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead/-/A-1000754760",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000794811",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/mattel-mattel-original-logo-graphic-sleeveless-aline-dress/-/A-1002117250",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-applejack-logo-graphic-sleeveless-aline-dress/-/A-1001959853",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-raphael-breaking-through-shirt/-/A-1000786682",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pika-pika-graphic-short-sleeve-fleece-dress/-/A-1002395205",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-costume-party-graphic-sleeveless-aline-dress/-/A-1002090973",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-play-day/-/A-1000754034",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-retro-group-april/-/A-1000786705",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810251",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/the-pink-picket-fence-sparky-shark-twirl-dress-in-pink-or-blue-available-in-sizes-12m-to-8-years/-/A-1004813349",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000815519",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-no-just-no/-/A-1000784887",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-sparkle-tulle-puff-sleeve-dress/-/A-1001695081",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000856894",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-summer-skidoo/-/A-1000856914",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-ken-graphic-sleeveless-aline-dress/-/A-1002068827",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-chase-sky-hearts/-/A-1000833141",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-peeking-out/-/A-1000762419",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-trainer-fit-flair-cap-sleeve-dress/-/A-1002396963",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-the-grinch-america-s-favorite-mean-one/-/A-1000765938",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/blue-s-clues-you-mommy-s-perfect-pumpkin-graphic-sleeveless-aline-dress/-/A-1000760749",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795222",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pink-candy-stripe-button-up-linen-ruffle-dress-mia-belle-girls/-/A-1004617544",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-usa-turtles/-/A-1000848063",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-santiago-of-the-sea-bff-of-the-sea-fit-flair-cap-sleeve-dress/-/A-1000871825",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo-fit-flair-cap-sleeve-dress/-/A-1000827016",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-try-to-keep-up/-/A-1000786184",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-outrageous-glow-grrrl-graphic-sleeveless-aline-dress/-/A-1001991811",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-magikarp-graphic-sleeveless-aline-dress/-/A-1002404915",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-feelin-salty/-/A-1000781030",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-pizza-power/-/A-1000781998",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-teenage-mutant-ninja-turtles-michelangelo-aka-mikey-fit-flair-cap-sleeve-dress/-/A-1000827152",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-logo-heads-graphic-sleeveless-aline-dress/-/A-1002116977",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-be-the-change/-/A-1000784983",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rocket-power-skate-life/-/A-1000826661",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000802898",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-partners-team-fit-flair-cap-sleeve-dress/-/A-1002395253",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rock-em-sock-em-robots-rock-em-sock-em-logo-fit-flair-cap-sleeve-dress/-/A-1002010879",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-bikini-bottom-beware/-/A-1000845124",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790496",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-i-got-it/-/A-1000781355",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-squidward-photos-fit-flair-cap-sleeve-dress/-/A-1000463257",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-avatar-the-last-airbender-jasmine-dragon-tea-fit-flair-cap-sleeve-dress/-/A-1000870909",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-nap-sketch/-/A-1000789636",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-graphic-sleeveless-aline-dress/-/A-1002405470",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-love-earth/-/A-1000848434",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831669",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gengar-graphic-sleeveless-aline-dress/-/A-1002405571",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-butterfly-logo-graphic-short-sleeve-fleece-dress/-/A-1002075743",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-sleeveless-aline-dress/-/A-1002405206",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-rugrats-spray-art-fit-flair-cap-sleeve-dress/-/A-1000449708",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791548",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-jpn-poster/-/A-1000781793",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-empowerment-group-graphic-sleeveless-aline-dress/-/A-1002118302",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-hoppy-easter-icons/-/A-1000850039",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-monster-high-holographic-logo-fit-flair-cap-sleeve-dress/-/A-1001976742",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-lets-hang-out-branch/-/A-1000796902",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-attack-graphic-short-sleeve-fleece-dress/-/A-1002384906",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-toys/-/A-1000781753",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-kindergarten-out-of-this-world-graphic-sleeveless-aline-dress/-/A-1003965769",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/my-little-pony-love-every-pony-graphic-sleeveless-aline-dress/-/A-1002117081",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-3d-arnold-graphic-short-sleeve-fleece-dress/-/A-1001730003",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-i-know-a-thing-or-two-school-graphic-sleeveless-aline-dress/-/A-1003966264",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000818024",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-pizza-dudes/-/A-1000782076",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-sunny-days-ahead/-/A-1000754716",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-sketch/-/A-1000787261",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-valentine-s-squad-graphic-sleeveless-aline-dress/-/A-1002054032",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/despicable-me-minions-dress-to-impress-yourself-graphic-sleeveless-aline-dress/-/A-1000798777",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-happy-pikachu-graphic-short-sleeve-fleece-dress/-/A-1002381762",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-team-pikachu-graphic-sleeveless-aline-dress/-/A-1002405188",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-leaves-swirling-graphic-sleeveless-aline-dress/-/A-1002065544",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-not-today-fit-flair-cap-sleeve-dress/-/A-1000874982",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-reptar-tokyo/-/A-1000784776",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-creatures-of-the-deep/-/A-1000850848",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-muntant-ninja-turtle-shredder-pixels/-/A-1000838662",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000835925",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791736",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/curious-george-classic-cartoons-graphic-short-sleeve-fleece-dress/-/A-1003971424",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pink-lace-sleeveless-casual-dress-mia-belle-girls/-/A-1003867437",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sundresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/santiago-of-the-sea-bonnie-bones-queen/-/A-1000773132",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-i-live-for-weekends/-/A-1000763356",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-faces-grid/-/A-1000763909",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-franken-sponge/-/A-1000850882",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-pikachu-moon-witch-fit-flair-cap-sleeve-dress/-/A-1002355171",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000839658",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-karaoke-queen-graphic-sleeveless-aline-dress/-/A-1001991213",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-kamp-koral-kamp-koral-patches/-/A-1000787420",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-checkers/-/A-1000781046",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-grrrls-run-the-world-graphic-sleeveless-aline-dress/-/A-1002117554",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-livin-that-poppy-life/-/A-1000798232",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000790543",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-gary-the-snail/-/A-1000785132",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-spongebob-scaredy-pants-fit-flair-cap-sleeve-dress/-/A-1000877167",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-spongebob-squarepants-silhouette-stars-stripes-fit-flair-cap-sleeve-dress/-/A-1000817045",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791550",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-donatello-raphael-leonardo-michelangelo/-/A-1000827139",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-extra-w-a-side-of-swag-graphic-sleeveless-aline-dress/-/A-1001996998",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/jimmy-neutron-boy-genius/-/A-1000856393",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Sweater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-gotta-catch-em-all-starters-graphic-sleeveless-aline-dress/-/A-1002405095",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000845548",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-bffs-4-eva-graphic-sleeveless-aline-dress/-/A-1002003795",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mtv-retro-gamer-logo-fit-flair-cap-sleeve-dress/-/A-1001983937",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-drip-drop-painting-girls-graphic-sleeveless-aline-dress/-/A-1002002661",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rugrats-reptar-sheet/-/A-1000781703",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-sunny-days-ahead-fit-flair-cap-sleeve-dress/-/A-1000413073",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-neonlicious-graphic-sleeveless-aline-dress/-/A-1001989927",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-mtv-icon-collage-logo-fit-flair-cap-sleeve-dress/-/A-1001983862",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000795273",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-pretend-i-m-listening/-/A-1000762238",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000831693",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000817771",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000835968",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/rainbow-high-toy-doll-lineup-graphic-sleeveless-aline-dress/-/A-1001996102",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-3rd-grade-squad/-/A-1000785008",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pokedex-pikachu-graphic-sleeveless-aline-dress/-/A-1002405336",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-garfield-just-here-for-cake-fit-flair-cap-sleeve-dress/-/A-1000472454",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/trolls-let-me-hear-you-shout-poppy-and-branch/-/A-1000798140",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-pok-mon-team-pikachu-fit-flair-cap-sleeve-dress/-/A-1002396062",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-squirtle-evolution-graphic-sleeveless-aline-dress/-/A-1002405433",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/barbie-living-the-dream-graphic-short-sleeve-fleece-dress/-/A-1002066118",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/dr-seuss-american-thing-one/-/A-1000773791",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000810087",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/spongebob-squarepants-spongebob-slugger-pants/-/A-1000770800",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/instant-message-cozy-gaming-graphic-sleeveless-aline-dress/-/A-1003238289",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pok-flakes-graphic-sleeveless-aline-dress/-/A-1002404061",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000803003",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/garfield-university/-/A-1000784317",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000856994",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/ola-otter-a-line-dress-breezy-daisy/-/A-1003020523",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000835878",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/pok-mon-pikachu-manga-lightning-graphic-sleeveless-aline-dress/-/A-1002404893",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/hey-arnold-arnold-gerald-and-abner-graphic-short-sleeve-fleece-dress/-/A-1001731085",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/peanuts/-/A-1000791553",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/lol-surprise-boogie-babe-graphic-sleeveless-aline-dress/-/A-1002002836",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/little-tikes-go-green-graphic-sleeveless-aline-dress/-/A-1001986732",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing",
      filters: {
        type: "A-line Dresses",
      },
    },
    {
      url: "https://www.target.com/p/girls-barbie-out-of-box-fit-flair-cap-sleeve-dress/-/A-1002078847",
      tags: "A-line Dresses, Dresses, Girls’ Clothing, Kids’ Clothing, Skater Dresses, T-Shirt Dresses",
      filters: {
        type: "A-line Dresses",
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
