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
      url: "https://www.target.com/p/girls-corduroy-tracksuit-sets-hoodie-tracksuits-girls-athletic-sets-2-piece-sport-outfits-hoodie-sweatshirts-with-bootcut-pants/-/A-1003854003",
      tags: "Athletic Wear Sets, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-classics-wrap-top-girls/-/A-83927906",
      tags: "Athletic Wrap Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-short-puff-sleeve-a-line-dress-cream/-/A-93067232",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/levi-39-s-174-girls-39-sleeveless-smocked-floral-dress-light-wash/-/A-93018546",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-organza-puff-sleeve-babydoll-dress/-/A-93788533",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/zenzi-girls-39-dress-blush-pink/-/A-94493159",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-smocked-flutter-sleeve-tank-dress/-/A-91762557",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/jackalo-long-sleeved-button-down-woven-dress-acorn/-/A-93603358",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-witch-costume-for-girls-kids-fairytale-witch-halloween-costume-dress-up-with-hat-halloween-witch-dress/-/A-93035059",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/kids-organic-sleeveless-beetle-print-jersey-dress-jackalo/-/A-1002304509",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/jackalo-sleeveless-button-down-woven-dress-dark-olive/-/A-93603368",
      tags: "Babydoll Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-16-two-pocket-backpack-cat-jack/-/A-94438868",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-11-34-mini-shearling-bear-backpack-cat-38-jack-8482-cream-brown/-/A-91577398",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-mini-faux-shearling-backpack-art-class-8482-black/-/A-91577718",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/champion-center-backpack/-/A-94337707",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-mini-adaptive-smiley-quilted-backpack-cat-38-jack-8482/-/A-92585476",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/champion-estate-backpack/-/A-94337706",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/girls-18-two-pocket-backpack-art-class/-/A-94438875",
      tags: "Backpacks, Girl",
    },
    {
      url: "https://www.target.com/p/kids-bronwyn-ballet-flats-art-class-brown/-/A-94268903",
      tags: "Ballet Flats, Girl",
    },
    {
      url: "https://www.target.com/p/kids-kaira-buckle-ballet-flats-art-class-red/-/A-94268902",
      tags: "Ballet Flats, Girl",
    },
    {
      url: "https://www.target.com/p/kids-stud-ballet-flats-art-class-black/-/A-94268908",
      tags: "Ballet Flats, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-strapless-bra-art-class-8482-beige-black/-/A-94328444",
      tags: "Bandeau Bras, Girl",
    },
    {
      url: "https://www.target.com/p/women-s-dance-bra-by-silky-dance-convertible-bra-clear-straps/-/A-1003237186",
      tags: "Bandeau Bras, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-spider-man-flat-brim-baseball-hat-red/-/A-54436497",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-super-mario-baseball-hat-red/-/A-89618531",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-groovy-flower-smiley-face-youth-foam-trucker-hat/-/A-1002726107",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-embroidered-canvas-cotton-twill-dad-hat/-/A-85297369",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/sonic-the-hedgehog-shake-glitter-patch-youth-purple-sparkle-traditional-adjustable-hat/-/A-1003098829",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/parker-kids-co-ball-cap/-/A-1003289574",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-keepin-it-cool-truck-youth-foam-trucker-hat/-/A-1002657536",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-being-a-princess-is-exhausting-youth-foam-trucker-hat/-/A-1002657496",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/the-juniper-shop-make-someone-smile-today-youth-foam-trucker-hat/-/A-1002726103",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/parker-kids-co-ball-cap-sports-patches-bundle/-/A-1003805048",
      tags: "Baseball Hats, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-peruvian-hat/-/A-91084610",
      tags: "Beanies, Girl",
    },
    {
      url: "https://www.target.com/p/c-c-kids-one-size-fits-most-fuzzy-lined-solid-cable-knit-winter-beanie/-/A-93876321",
      tags: "Beanies, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-ruched-waist-skirt-red/-/A-94365246",
      tags: "Bell Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-ruched-waist-skirt-cream/-/A-94365265",
      tags: "Bell Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffle-mini-skirt-art-class/-/A-94021777",
      tags: "Bell Skirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-ribbed-bike-shorts-cat-38-jack-8482/-/A-93278913",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/-/A-94811075",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-bike-shorts-art-class/-/A-93460932",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-bike-shorts-blue/-/A-94431062",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-squishmallows-bike-shorts-pastel/-/A-94431057",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-bike-shorts-black/-/A-94431041",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-bike-shorts-art-class/-/A-93460934",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-bike-shorts/-/A-87254598",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-convention-wear-lily-shorts-2-tone-danznmotion-25401c/-/A-1003191522",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-shorts-skirt-danz-n-motion-21412a-sheer-for-ballet-or-modern/-/A-1003121809",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-bike-shorts/-/A-1002038183",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-biker-short-with-flower-mesh-skirt-lilac-with-white-flowers/-/A-1002802529",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-ava-v-waist-compression-shorts/-/A-1001547080",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-rainbow-stripe-combo-medium/-/A-1004369066",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-biker-short-with-flower-mesh-skirt-light-old-pink-12-years/-/A-1002802602",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-x-small/-/A-1004369081",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-large/-/A-1004369070",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-xx-large/-/A-1004369064",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-x-large/-/A-1004369076",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bike-shorts-3-pack-navy-stripe-combo-small/-/A-1004369079",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-athletic-biker-short-black-pink-and-multicolored-butterflies/-/A-1003635993",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-biker-short-legging-black/-/A-1003486286",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/eg-pro-enduro-flex-girl-s-compression-short-graded-inseam/-/A-1001398303",
      tags: "Bike Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-dance-brushstrokes-biketard-cat-jack/-/A-93574120",
      tags: "Biketards, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-gymnastics-jewel-biketard-cat-38-jack-8482-black/-/A-89665710",
      tags: "Biketards, Girl",
    },
    {
      url: "https://www.target.com/p/destira-rainbow-blaze-unitard/-/A-1001740505",
      tags: "Biketards, Girl",
    },
    {
      url: "https://www.target.com/p/destira-over-the-rainbow-unitard/-/A-1001740401",
      tags: "Biketards, Girl",
    },
    {
      url: "https://www.target.com/p/destira-catlandia-unitard/-/A-1001388020",
      tags: "Biketards, Girl",
    },
    {
      url: "https://www.target.com/p/destira-bear-y-chill-unitard/-/A-1001740393",
      tags: "Biketards, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-stars-and-stripes-bikini-set-art-class-8482-navy-blue/-/A-94268744",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-seaside-shine-solid-bikini-set-art-class-black/-/A-92160489",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-cross-my-heart-bikini-set-cat-38-jack-8482/-/A-94372818",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-pumeria-bloom-bikini-set-art-class-8482/-/A-94264761",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-under-sea-amazon-bikini-set-cat-38-jack-8482-pink/-/A-94290655",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-visit-the-eastside-leaf-printed-bikini-set-art-class/-/A-92160495",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-sunkissed-striped-bikini-set-art-class-8482/-/A-93114876",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-leopard-spot-printed-bikini-set-cat-38-jack-8482-black/-/A-92304680",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-a-trip-to-paradise-floral-printed-bikini-set-art-class-8482/-/A-93114814",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-island-vacay-floral-bikini-set-cat-jack-black/-/A-94302359",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-strawberries-printed-bikini-set-cat-38-jack-8482-green/-/A-93323616",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-bikini-set-art-class-8482/-/A-92240856",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-summer-dusk-bikini-set-art-class-8482-black/-/A-94302362",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-summer-times-bikini-set-art-class-blue/-/A-94224220",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-seashell-printed-bikini-set-cat-38-jack-8482-purple/-/A-93114849",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-swim-bikini-swimwear-set-art-class-8482/-/A-93323411",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-smiling-daisy-floral-printed-bikini-set-art-class-8482/-/A-92304683",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-summer-skies-bikini-set-art-class-8482/-/A-94396719",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-abstract-tropical-jungle-flowers-bikini-set-art-class-8482/-/A-92304685",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-park-to-pool-solid-bikini-set-cat-38-jack-8482-teal-green/-/A-93323614",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-polka-dots-bikini-set-cat-38-jack-8482-blue/-/A-92240883",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-teen-summer-striped-bikini-set-art-class/-/A-92160492",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-bikini-set-art-class-8482-purple/-/A-92240886",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hand-drawn-chettah-printed-bikini-set-art-class-8482/-/A-92304681",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-striped-bikini-set-cat-38-jack-8482-blue/-/A-93114875",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-wave-printed-bikini-set-cat-38-jack-8482-aqua-green/-/A-92161233",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-bikini-set-cat-38-jack-8482/-/A-92240855",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-simple-daisy-floral-printed-bikini-set-cat-38-jack-8482-pink/-/A-93323410",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-striped-bikini-set-cat-38-jack-8482/-/A-92241055",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-seaside-shine-solid-bikini-set-art-class-purple/-/A-92160491",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-mosaic-design-bikini-set-cat-38-jack-8482/-/A-92240880",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-bikini-set-cat-jack/-/A-92280680",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-shady-days-bikini-skirt-set-cat-38-jack-8482/-/A-94302371",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-paradise-cove-bikini-set-art-class-8482-black/-/A-93111981",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-happy-camper-striped-bikini-set-cat-38-jack-8482-blue/-/A-94302360",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-gingham-summer-bikini-set-art-class-8482-black/-/A-94268754",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-carribean-cutie-bikini-set-art-class-8482-coral-pink/-/A-93114850",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-palm-springs-bikini-set-art-class-8482/-/A-94268746",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-geo-daisy-bikini-and-dress-cover-up-set-art-class-8482/-/A-94268748",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-zebra-bikini-set-art-class-8482-pink/-/A-94268749",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-i-heart-it-solid-bikini-set-cat-jack/-/A-94223617",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-happy-wildlife-bikini-set-art-class-8482-brown/-/A-94567279",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tropical-wilderness-swimwear-set-cat-38-jack-8482/-/A-94302358",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-cherry-party-bikini-set-art-class-8482/-/A-94302363",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-watercolor-hibiscus-bikini-set-cat-38-jack-8482-purple/-/A-94290654",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-39-sweet-pineapple-39-printed-bikini-set-cat-38-jack-8482/-/A-94268747",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-ride-the-wave-solid-bikini-set-art-class-8482/-/A-93971131",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-39-dreamy-tropical-39-floral-printed-bikini-set-cat-38-jack-8482/-/A-94268745",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-miami-boho-bikini-set-art-class-8482/-/A-94302355",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-striped-and-bow-printed-bikini-set-red-white/-/A-93306671",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tea-at-the-pool-floral-printed-bikini-set-art-class-8482-off-white/-/A-93323412",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tie-dye-bikini-set-art-class/-/A-94214968",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-beach-house-striped-bikini-set-cat-38-jack-8482/-/A-94268753",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-bird-friends-bikini-set-cat-jack-8482-yellow/-/A-94302354",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-anna-elsa-girls-tankini-top-and-bikini-bottom-swim-set-toddler-to-little-kid/-/A-86946052",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pier-gaze-bikini-set-cat-jack/-/A-94214971",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-zipper-rash-guard-bikini/-/A-91255015",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-wrap-front-bikini-swimsuit-set/-/A-91347855",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-baby-girls-racerback-tankini-top-and-bikini-bottom-swim-set-little-kid/-/A-86945212",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-disney-princess-ariel-girl-s-swimwear-sets-ruffle-sleeve-summer-pool-beach-sport-blue-swimsuit/-/A-1004245899",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-lace-up-back-tankini-top-and-bikini-bottom-swim-set-little-kid/-/A-89485140",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-2-piece-strappy-detail-camikini-swimsuit-sets/-/A-1003354901",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-frozen-kids-toddler-girl-3pcs-elsa-and-anna-sunproof-ruffles-bikini-swimsuit-with-cover-up-set-swimwear-sets/-/A-1003927071",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-rash-guard-bikini/-/A-91267490",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-zipper-rash-guard-2-piece/-/A-88271094",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-2-piece-one-shoulder-bikini-swimsuit-sets/-/A-1003405839",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-bikini/-/A-88358082",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-flounce-bikini/-/A-91255147",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-sun-protected-scallop-hem-long-sleeve-rash-guard-bikini/-/A-1001533348",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-boys-swim-trunks-nautical-stripe-summer-beach-swimwear-drawstring-waist-board-shorts/-/A-1004399482",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-long-sleeve-rash-guard-bikini/-/A-91269897",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-pink-crochet-print-strappy-back-swimsuit/-/A-1001718534",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-purple-strappy-back-swimsuit/-/A-1001718501",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-moana-girls-tankini-swimsuit-set-one-shoulder-bow-top-and-tropical-skirted-bottom-orange-yellow-two-piece-swimwear-set/-/A-1004593251",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-skirted-flutter-long-sleeve-rash-guard-bikini/-/A-1001818080",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-long-sleeve-rash-guard-bikini/-/A-91267484",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-top-bikini-set-swimsuit/-/A-1002654843",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-floral-print-bikini-w-headband/-/A-1001782215",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/wild-waves-leopard-two-piece-swimsuit-mia-belle-girls/-/A-1004643489",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-seersucker-short-sleeve-ruffle-rash-guard-bikini/-/A-1002893003",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-capri-one-shoulder-bikini/-/A-1003560981",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-flounce-bikini/-/A-91255135",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-rash-guard-and-bikini-bottom-little-kid-to-big-kid/-/A-86944797",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-barbados-bikini/-/A-1004035672",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-upf50-skirted-flutter-long-sleeve-rash-guard-bikini/-/A-1001818068",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-2pc-swim-set-disney-store/-/A-89790759",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-key-west-bikini/-/A-1003561037",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-girls-flounce-bikini/-/A-91255168",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-maui-bikini/-/A-1003561113",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-long-sleeve-rash-guard-bikini/-/A-91267495",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-two-piece-swimsuit-navy-and-yellow-and-pink-flowers-5-6-years/-/A-1004178175",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-two-piece-swimsuit-with-frills-white-pink-and-green-flowers-13-years/-/A-1004178180",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-santorini-bikini/-/A-1003561001",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-bali-bikini/-/A-1003560987",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/dragonwing-aruba-bikini/-/A-1003488021",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-family-matching-multicolor-dinosaur-print-swim-trunks-shorts-and-ruffle-two-piece-swimsuit/-/A-1002520476",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/kiko-max-infant-toddler-girls-2-piece-ruffled-top-bikini-swimsuit-sets/-/A-1002468541",
      tags: "Bikini Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-solid-bikini-swim-bottom-art-class-heather-black/-/A-92240889",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-bikini-swim-bottom-art-class-8482-black/-/A-92240888",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tie-dye-design-bikini-swim-bottom-art-class-8482/-/A-92241058",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-ombre-design-bikini-swim-bottom-art-class-8482/-/A-92240881",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-days-of-tropics-swimsuit-bottom-art-class-8482-black/-/A-94302370",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hi-aloha-swimsuit-bottom-art-class-8482-pink/-/A-94302368",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-ebony-tropical-floral-printed-bikini-swim-bottom-art-class-8482-black/-/A-92240854",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-bikini-swim-bottom-art-class-8482-coral-orange/-/A-92240890",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-swim-bikini-bottoms/-/A-86529472",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-swim-briefs/-/A-91372403",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slim-swim-bikini-bottoms/-/A-86530190",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-ruffle-upf-50-swim-briefs/-/A-92206310",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-extra-coverage-lined-upf-50-swim-briefs/-/A-92206300",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-upf-50-printed-girls-swim-briefs/-/A-91533440",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-recycled-nylon-upf-50-girls-swim-brief/-/A-92487884",
      tags: "Bikini Swim Bottoms, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-bikini-swim-top-art-class-8482/-/A-92240895",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-bikini-swim-top-art-class-8482-black/-/A-92240857",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-ombre-design-bikini-swim-top-art-class-8482/-/A-92240882",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-bikini-swim-top-art-class-8482-coral-orange/-/A-92240891",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tropical-floral-printed-bikini-swim-top-art-class-black/-/A-92160494",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-cruise-time-swimsuit-top-art-class-8482-black/-/A-94302369",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-tropical-island-swimsuit-top-art-class-8482-pink/-/A-94302367",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-sun-seeker-ditsy-solid-bikini-swim-top-art-class-black/-/A-89206622",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-criss-cross-bikini-top/-/A-1002511757",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-bikini-swim-top/-/A-91547437",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-39-sun-seeker-39-zebra-striped-bikini-swim-top-art-class-8482-black/-/A-89205798",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-upf-50-girls-flounce-bikini-top/-/A-92094189",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-recycled-nylon-upf-50-girls-bikini-top/-/A-92499692",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-printed-bikini-swim-top/-/A-91826601",
      tags: "Bikini Swim Tops, Girl",
    },
    {
      url: "https://www.target.com/p/girls-10pk-cotton-bikini-underwear-cat-jack/-/A-85347862",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-5pk-bikini-underwear-art-class-8482-pink/-/A-93277904",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-14pk-39-floral-39-cotton-bikini-cat-38-jack-8482/-/A-89872521",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-supersoft-bikini-underwear/-/A-89957810",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-tween-seamless-bikini-underwear-blue-pink/-/A-93666770",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-14pk-cotton-bikini-underwear/-/A-90860140",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-7pk-bikini-underwear/-/A-92199305",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-originals-girls-5pk-tween-bikini-underwear-colors-may-vary/-/A-93666773",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-breathable-bikini/-/A-94482970",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-ryleigh-girls-organic-cotton-bikini-underwear-multiple-colors-and-sizes-7-pack/-/A-1002279633",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-hazel-girls-micromodal-bikini-underwear-multiple-colors-and-sizes-6-pack/-/A-1002422251",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386423",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-assorted-cotton-bikini-underwear-10-pack/-/A-90915449",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-erica-girls-organic-cotton-bikini-underwear-multi-color-multiple-sizes-6-pack/-/A-94063975",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-ava-girls-bikini-underwear-multi-color-multiple-sizes-6-pack/-/A-93797108",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/posh-peanut-posh-peanut-vintage-pink-rose-3-pack-brief-set/-/A-1001574566",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-organic-cotton-brief/-/A-90990123",
      tags: "Bikini Underwear, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-astrid-school-blazer-charcoal-gray/-/A-91487278",
      tags: "Blazers, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-french-terry-contrast-trim-cardigan-kids/-/A-1000901494",
      tags: "Blazers, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-jane-velvet-coat-vignette/-/A-1001251673",
      tags: "Blazers, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-scoop-neck-super-soft-t-shirt-art-class/-/A-93487782",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-eyelet-top-cat-38-jack-8482/-/A-92974692",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-embroidered-button-down-shirt-cat-jack-white/-/A-94131171",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-lace-trim-t-shirt-art-class/-/A-93371035",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-flutter-sleeve-tiered-peasant-top/-/A-91658601",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-long-sleeve-peter-pan-collar-blouse/-/A-92449298",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pattern-smocked-tank-top/-/A-87826485",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-smocked-woven-top/-/A-1002458584",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffle-puff-sleeve-blouse-short-hollow-out-sleeve-t-shirt-round-neck-solid-casual-top/-/A-1002565407",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-short-sleeve-peter-pan-collar-blouse/-/A-92365700",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-long-sleeve-ruffle-layering-tee/-/A-94069398",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-smock-flutter-top/-/A-1002458737",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-high-low-ruffle-tunic/-/A-93173628",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-eyelet-top/-/A-1002458567",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-knit-top-with-tulip-sleeves-kids/-/A-90586013",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-sleeve-top-white/-/A-1003330448",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plus-short-sleeve-eyelet-ruffle-sleeve-top/-/A-88835184",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-jersey-tunic-with-embroidery-dark-old-pink/-/A-1004040329",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-high-low-ruffle-tunic/-/A-93173598",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girl-waffle-knit-long-sleeve-bow-back-top/-/A-89954543",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-bi-material-organic-cotton-top-with-puff-sleeve-pink-flowers-on-cream-background/-/A-1003328857",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tie-front-knot-tops-with-ruffle-sleeve-plaid-tops-tie-front-blouse-short-sleeve-button-down-shirts-for-toddler-girls/-/A-92446753",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-cute-tops-peter-pan-collar-with-cute-bow-puff-short-sleeve-kids-fashion-shirts-summer-top-keyhole-tops-girls-blouse-white-3-4t/-/A-92364677",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-puff-sleeve-blouse-round-neck-ruffle-sleeve-shirts-girls-shirts/-/A-93726314",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-floral-long-full-sleeve-dress-cozmo/-/A-1002669242",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-button-down-tops-peter-pan-collar-short-sleeve-blouse-with-ruffled-trim-puff-sleeve-tops-butterfly-collar-shirts-for-girls-pink-3-4t/-/A-92364717",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-knit-ruffle-tiered-tunic/-/A-1004497872",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-knit-ruffle-tiered-tunic/-/A-1004497862",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-smocked-top-cheryl-creations/-/A-1004815996",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-new-york-sequin-top-mia/-/A-1004815904",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-flutter-sleeve-top-mia-s/-/A-1004223448",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-seersucker-blouse-with-frills-pink-flowers-on-cream-background/-/A-1004049857",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-tunic-with-frill-and-print-yellow-and-flamingo/-/A-1004049822",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-garden-boho-blouse-cozmo/-/A-1003530737",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-top-with-applique-pink-with-sparkling-butterfly/-/A-1003330462",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-sleeveless-top-with-front-tie-black-and-sparkling-pink/-/A-1003330426",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-tunic-top-multicolored/-/A-1003326927",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-tunic-top-small-turquoise-flowers/-/A-1003325145",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-flutter-sleeve-top-mia/-/A-1003278120",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-puff-sleeve-top-pink-and-white-checks/-/A-1003246903",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-gauze-round-collar-blouse-cozmo/-/A-1003070687",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-floral-top-saltwater-luxe/-/A-1003070668",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-cecilia-ruffle-collar-blouse-early-sunday/-/A-1002771398",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-balloon-sleeve-top-good-girl/-/A-1001931307",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-side-tie-graphic-tee/-/A-1001829029",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-santa-mesh-top-sterling-kreek/-/A-1001537484",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-floral-long-sleeve-top-petit-confection/-/A-1001401254",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-toddler-s-star-printed-chiffon-blouse-petit-confection/-/A-1001376767",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-toddler-s-eyelet-tunic-petit-confection/-/A-1001376715",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-just-like-mama-lace-sleeve-top-southern-grace/-/A-1001355096",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-rosette-tunic-petit-confection/-/A-1001354885",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-tangled-v-neck-basics-shirt-southern-grace/-/A-1001354869",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-peyton-ribbed-velour-ruffle-top-vignette/-/A-1001251691",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-ruffled-cotton-blouse-mayoral/-/A-1001251591",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-plaid-flannel-top-southern-grace/-/A-1000916408",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-liberty-long-sleeve-tunic-petit-confection/-/A-1000915999",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-circle-printed-ruffle-tunic-copenhagen-delights/-/A-1000916164",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-paisley-print-tunic-petit-confection/-/A-1000916038",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-lemons-smocked-set-petit-confection/-/A-1000916060",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-floral-long-sleeve-blouse-petit-confection/-/A-1000916045",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-cap-sleeve-top-petit-confection/-/A-1000916020",
      tags: "Blouses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-rosette-ruffle-dress-art-class-8482-purple/-/A-94486495",
      tags: "Bodycon Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/patpat-girl-s-sleeveless-bodycon-dress-halter-neck-pencil-cami-midi-basi-dresses-4-12-year/-/A-1003324029",
      tags: "Bodycon Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/girls-tennis-dress-golf-outfit-sets-sleeveless-tank-top-skirt-with-shorts-pockets/-/A-1002551653",
      tags: "Bodycon Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-tween-teen-girls-bodycon-ruched-spaghetti-strap-metallic-mini-dress/-/A-1004530054",
      tags: "Bodycon Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-tween-teen-girls-bodycon-ruched-spaghetti-strap-metallic-mini-dress/-/A-1004529619",
      tags: "Bodycon Dresses, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-french-terry-varsity-bomber-jacket-little-kid-to-big/-/A-89709664",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-frozen-lilo-stitch-girls-varsity-bomber-jacket-toddler-to-big-kid/-/A-91798974",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-magic-ombre-sequin-bomber-jacket/-/A-93788529",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-varsity-bomber-jacket-little-kid-to-big-kid/-/A-93002344",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-mystic-mermaid-sequin-bomber-jacket/-/A-1002280575",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/pokemon-girls-french-terry-varsity-bomber-jacket-little-kid-to-big-kid/-/A-1000762918",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-ombre-sequin-bomber-jacket/-/A-93281300",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/marvel-spider-man-spider-gwen-girls-varsity-bomber-jacket-little-kid-to-big/-/A-91798948",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-amethyst-dream-sequin-bomber-jacket/-/A-1001636320",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-candy-shimmer-sequin-bomber-jacket/-/A-93788550",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-aurora-gradient-sequin-bomber-jacket/-/A-1001835921",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-fiesta-glow-ombre-sparkle-sequin-bomber-jacket/-/A-1001835956",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-spectrum-sparkle-sequin-bomber-jacket/-/A-1001647460",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/2bunnies-girls-seashell-glow-sequin-bomber-jacket/-/A-1001835918",
      tags: "Bomber Jackets, Girl",
    },
    {
      url: "https://www.target.com/p/ctm-kids-wide-band-bonnet/-/A-92149645",
      tags: "Bonnets, Girl",
    },
    {
      url: "https://www.target.com/p/u-p-d-inc-kid-s-lilo-stitch-20-piece-hair-accesory-set/-/A-1004386693",
      tags: "Bonnets, Girl",
    },
    {
      url: "https://www.target.com/p/u-p-d-inc-kid-s-lilo-stich-hair-brush-and-accessory-set/-/A-1004386691",
      tags: "Bonnets, Girl",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-4-pack-cotton-activewear-biker-shorts-set/-/A-1003791044",
      tags: "Bottom Sets, Girl",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-4-pack-active-fleece-jogger-sweatpants/-/A-1000170415",
      tags: "Bottom Sets, Girl",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-3-pack-velour-jogger-sweatpants-sets/-/A-1000020854",
      tags: "Bottom Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-princess-ariel-belle-rapunzel-moana-girls-4-pack-bike-shorts-toddler-to-big-kid/-/A-88398096",
      tags: "Bottom Sets, Girl",
    },
    {
      url: "https://www.target.com/p/disney-toddler-little-girl-s-1-piece-or-2-piece-tutu-skirt-with-legging-sets/-/A-92501926",
      tags: "Bottom Sets, Girl",
    },
    {
      url: "https://www.target.com/p/little-girls-golf-tennis-sports-round-neck-sleeveless-athletic-active-dress-with-safety-inner-pockets-shorts/-/A-1002526507",
      tags: "Bottom and Accessory Sets, Girl",
    },
    {
      url: "https://www.target.com/p/girls-squishmallows-4pk-boxer-briefs/-/A-89283961",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-38-friends-4pk-underwear/-/A-92199306",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-boxer-briefs/-/A-94580981",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-4pk-bluey-boxer-briefs/-/A-94580976",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-garfield-4pk-underwear/-/A-91270935",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-beetlejuice-4pk-underwear/-/A-92199307",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-layla-girls-dance-shorts-3-pack-size-7-8y-color-rainforest/-/A-1000401116",
      tags: "Boxer Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/kids-3pk-seamless-boxer-shorts-art-class-black-gray-white/-/A-87557448",
      tags: "Boxer Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/kids-3pk-seamless-boxer-shorts-art-class-blue-pink-blush-pink/-/A-87557447",
      tags: "Boxer Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-4pk-athletic-shorts-underwear/-/A-93717500",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-10pk-heart-striped-cotton-boy-shorts-cat-jack/-/A-89872519",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-barbie-4pk-underwear/-/A-90021730",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/champion-girls-39-5pk-authentic-originals-boyshort-underwear/-/A-94618847",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-4pk-boyshort-period-underwear-moderate-protection-colors-may-vary/-/A-93666769",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/just-love-seamless-panties-for-girls-underwear-pack-of-6/-/A-92168972",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-heather-boy-short-underwear-assorted-14-pack/-/A-90988914",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-sophie-girls-shorties-underwear-multiple-colors-and-sizes-3-pack/-/A-1001324035",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-annika-girls-boyshorts-underwear-pastel-size-9-10/-/A-93796064",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-girls-soft-cotton-boyshort-underwear-usa-made-comfortable-kids-toddlers-undies/-/A-1001031367",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/ctm-girl-s-colorful-boy-short-underwear-5-pack/-/A-1004620786",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-jada-girls-bike-shorts-multi-color-multiple-sizes-3-pack/-/A-93947632",
      tags: "Boy Shorts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-3pk-cotton-cami-bra-cat-jack-gray-white-black/-/A-51042296",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-3pk-cotton-cami-bra-cat-jack-pink-white-beige/-/A-51042298",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-seamless-bra-2pk-cat-jack-white-tan/-/A-51109802",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-microfiber-bonded-bra-art-class-beige/-/A-84011420",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-microfiber-bonded-bra-art-class-pink/-/A-84011367",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-soft-cup-bralette-cat-38-jack-8482/-/A-94328445",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-seamless-bra-cat-38-jack-8482-pink-white/-/A-90781604",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/maidenform-girls-2pk-seamfree-lace-back-padded-crop-bra-white/-/A-53059847",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-2pk-seamless-bra-cat-jack/-/A-79386151",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-fits-all-triangle-bra-art-class-8482-sand-beige-rose-red/-/A-94328447",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-seamless-bra-2pk-cat-jack-153-gray-black/-/A-51109810",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-fits-all-triangle-bra-art-class-8482-white-tan/-/A-94328448",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-4-comfortable-and-stylish-training-bras-for-girls/-/A-1002778594",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-soft-and-smooth-training-bra-3-pack/-/A-89032334",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/just-love-girls-bras-pack-of-6/-/A-1002779097",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004010302",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004372487",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-bralettes-3-pack/-/A-1004372486",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-wire-free-molded-back-closure-bra-art-class-8482/-/A-94328449",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-soft-100-cotton-training-bra-2-pack-usa-made/-/A-1004692562",
      tags: "Bralettes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-solid-2pk-seamless-bra-art-class-beige/-/A-84306156",
      tags: "Bramis, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-cotton-shelf-bra-cami-cat-38-jack-8482/-/A-90781599",
      tags: "Bramis, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-seamless-ruched-bra-art-class-8482/-/A-90781603",
      tags: "Bramis, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-39-floral-39-seamless-ruched-bra-art-class-8482-white/-/A-89872520",
      tags: "Bramis, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-seamless-knit-bramis-art-class-8482/-/A-93082794",
      tags: "Bramis, Girl",
    },
    {
      url: "https://www.target.com/p/girls-10pk-cotton-briefs-cat-jack/-/A-88019645",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-14pk-39-bows-39-cotton-briefs-underwear-cat-38-jack-8482-purple/-/A-93278089",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-disney-princess-7pk-underwear/-/A-79753030",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-38-stitch-7pk-100-cotton-underwear/-/A-94436252",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-6pk-pure-microfiber-briefs-colors-may-vary/-/A-87446335",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-6pk-seamless-briefs-colors-may-vary/-/A-84003223",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-squishmallows-7pk-briefs/-/A-91270936",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-barbie-7pk-underwear/-/A-84855594",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-12pk-butterfly-and-dot-cotton-briefs/-/A-94482975",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-7pk-underwear/-/A-87694978",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-14pk-classic-briefs-colors-may-vary/-/A-81316370",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-disney-frozen-7pk-underwear/-/A-79753044",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-7pk-briefs/-/A-90021737",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-gabby-39-s-dollhouse-briefs/-/A-94580983",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-the-little-mermaid-ariel-7pk-underwear/-/A-88505156",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/care-bears-7pk-100-cotton-underwear/-/A-94472229",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-6pk-comfort-stretch-briefs-colors-may-vary/-/A-84062960",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-my-little-pony-7pk-underwear/-/A-82426277",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-inside-out-7pk-underwear/-/A-91254473",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-paw-patrol-7pk-underwear/-/A-83699542",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-6pk-micro-mesh-briefs-colors-may-vary/-/A-90860163",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pokemon-7pk-underwear/-/A-82082784",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-trolls-poppy-7pk-boxer-briefs/-/A-89251636",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-mario-7pk-underwear/-/A-82082782",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-5pk-briefs/-/A-93666777",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-smurfs-7pk-underwear/-/A-93717499",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-10pk-cotton-stretch-brief-underwear-colors-may-vary/-/A-93666775",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-39-4pk-briefs/-/A-93666780",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-moves-girls-4pk-breathable-stretch-brief-underwear-colors-may-vary/-/A-93666774",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/champion-girls-39-5pk-authentic-originals-briefs/-/A-94618844",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386447",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-girls-eight-pack-bikini-brief/-/A-91386432",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-eversoft-brief-underwear-6-pack/-/A-90988970",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-star-briefs-cat-jack-pink/-/A-84796727",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-low-rise-briefs-underwear-10-pack/-/A-90508097",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-sophie-girls-brief-underwear-multiple-colors-and-sizes-6-pack/-/A-1002280438",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-2pk-heart-briefs-cat-jack-salmon-pink/-/A-84796725",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-gracie-girls-organic-cotton-briefs-multiple-colors-multiple-sizes-7-pack/-/A-93859476",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-winnie-the-pooh-assorted-briefs-3-pack/-/A-1001655137",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-jamie-girls-performance-briefs-underwear-multiple-sizes-and-colors-7-pack/-/A-1001736890",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-team-basics-brief-girls/-/A-83927917",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/capezio-foundations-brief-girls/-/A-84644752",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-hipster-style-underwear-10-pack/-/A-90508085",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-eversoft-hipster-underwear-10-pack/-/A-1002611986",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-brief/-/A-90831967",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-6-pack-underwears-ultra-smooth-and-soft-cotton/-/A-1003467717",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-bella-girls-briefs-underwear-multiple-colors-and-sizes-comfyseam-3-pack/-/A-1001783579",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-toddler-girl-s-disney-minnie-mouse-briefs-4-pack/-/A-93525231",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/textiel-trade-toddler-girl-s-winnie-the-pooh-assorted-briefs-3-pack/-/A-1001655134",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/girls-watercolor-butterfly-girls-3-piece-brief-set-posh-peanut/-/A-1002890410",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-toddler-girls-eversoft-brief-underwear-10-pack/-/A-1002611769",
      tags: "Briefs, Girl",
    },
    {
      url: "https://www.target.com/p/jessica-simpson-little-big-girls-heavyweight-overall-insulated-snowsuit/-/A-93763297",
      tags: "Bunting Snowsuits, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-button-down-shirt-cat-jack-lilac-purple/-/A-94131170",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-minnie-mouse-gauze-cabana-top-pink/-/A-94431148",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-moana-gauze-cabana-top-orange/-/A-94431147",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-bluey-cabana-top-teal-blue/-/A-94431143",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-ruffled-peter-pan-collar-knit-shirt/-/A-87825215",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-short-sleeve-fitted-oxford-shirt-feminine-fit/-/A-92365087",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-oxford-dress-shirt/-/A-87149350",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-minnie-mouse-girls-hawaiian-button-down-shirt-little-kid-to-big/-/A-92751988",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-oxford-dress-shirt/-/A-88500775",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-long-sleeve-fitted-oxford-shirt-feminine-fit/-/A-92365241",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-peter-pan-collar-broadcloth-shirt/-/A-88498641",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/disney-mickey-mouse-hawaiian-matching-family-hawaiian-button-down-shirt-little-kid-to-big/-/A-91789885",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-sleeveless-plaid-button-down-shirt-summer-crop-tops-tie-knot-ruffle-sleeve-shirt-blouse-3-12y/-/A-1002473948",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/hello-kitty-button-down-dress-shirt-sizes-2t-14-16/-/A-1001387194",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-piped-peter-pan-collar-broadcloth-shirt/-/A-88500806",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/barbie-girls-hawaiian-button-down-dress-shirt-little-kid-to-big/-/A-92751993",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lion-king-simba-nala-timon-pumbaa-mufasa-zazu-matching-family-hawaiian-button-down-shirt-toddler-to-big-kid/-/A-91080143",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/sesame-street-big-bird-cookie-monster-elmo-oscar-the-grouch-matching-family-hawaiian-button-down-shirt-infant-to-little-kid/-/A-91080185",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/john-deere-animals-t-shirt/-/A-1002274462",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-ruffle-button-down-shirts-short-sleeve-school-tops-plaid-blouse-4-13y/-/A-1002833173",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-no-gape-short-sleeve-stretch-shirt/-/A-88500760",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-no-gape-long-sleeve-stretch-shirt/-/A-88500895",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-flannel-button-down-shirt-little-kid-to-big-kid-sizes-4-14-16/-/A-1001159829",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-summer-crop-tops-long-sleeve-button-down-shirt-for-girl-3-12y/-/A-1002881863",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-flannel-shirt/-/A-93168217",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-poplin-camp-shirt/-/A-87826934",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-gathered-waist-tunic-top/-/A-87687750",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-pink-plaid-shacket/-/A-89854616",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-solid-color-single-breasted-design-square-collar-tops-in-summer/-/A-1003707295",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-peter-pan-blouse-puff-sleeve-button-down-shirt-school-uniform-blouse-3-12-years/-/A-1003249034",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-ruffle-plaid-shirts-front-button-down-shirts-for-girls-waist-knot-plaid-shirts/-/A-1000028950",
      tags: "Button Down Shirts, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-cami-top-cat-38-jack-8482/-/A-93300728",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/girls-graphic-cami-art-class/-/A-94600922",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/girls-babydoll-woven-cami-art-class/-/A-94600945",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/hanes-girls-5pk-camisole-white-gray-pink/-/A-50302682",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-5pk-cami-colors-may-vary/-/A-87446270",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/girls-pointelle-strappy-cami-art-class/-/A-94775222",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-peplum-gauze-tank-top-cat-38-jack-8482-blue/-/A-94472209",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/lucky-me-emma-girls-camisoles-multiple-colors-and-sizes-3-pack/-/A-1002425452",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/city-threads-girls-sparkly-lined-camisole/-/A-1004493859",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/girl-pinch-front-wide-strap-princess-leotard-motionwear/-/A-1003530815",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/girl-piera-camisole-crop-top-bloch/-/A-1002246014",
      tags: "Camisoles, Girl",
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-cape-cat-38-jack-8482-yellow/-/A-90968792",
      tags: "Capes, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-button-front-sweater-vest-cat-38-jack-8482/-/A-94472220",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-uniform-cardigan-cat-jack/-/A-84938046",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-crew-neck-cable-uniform-cardigan-sweater-cat-jack/-/A-84938066",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/toddler-girls-crew-neck-cable-knit-uniform-sweater-cat-jack/-/A-87039443",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-pointelle-cardigan-cat-38-jack-8482/-/A-94472253",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-long-sleeve-ribbed-cardigan-sweater-cat-38-jack-8482/-/A-94472219",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-button-front-cardigan-sweater-cat-38-jack-8482/-/A-90532627",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-open-knit-flyaway-cardigan-art-class/-/A-93146677",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-feather-weight-flyaway-cardigan-sweater-art-class/-/A-93146673",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-cardigan-sweater/-/A-86738581",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-crewneck-sweater-cardigan/-/A-92657729",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-ombre-stripe-cardigan/-/A-93590642",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-cardigan-sweater-crew-neck-uniform-knit-sweater-button-down-ruffle/-/A-1002516350",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-button-front-cable-cardigan/-/A-87686433",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-bottom-down-sweater/-/A-94072144",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-bottom-down-sweater/-/A-94041155",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-zip-front-cardigan-sweater/-/A-89281514",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-oversized-long-sleeve-cardigan-open-front-lantern-sleeve-knit-sweater-with-pockets/-/A-1002548934",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/cardigan-for-girls-open-front-sweater-long-sleeve-loose-fit-sweater-jacket/-/A-1000555999",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-long-cardigans-lightweight-sweater-knit-cardigan-open-frontlong-sleeve-shacket-for-fall-longline-cardigan-with-side-pockets-khaki-xl/-/A-1001094467",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-scallop-detail-cardigan-sweater-kids/-/A-1000872830",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-open-front-cardigan-midi-length-long-sleeve-knit-sweater-school-uniform-sweater-outwears-with-pockets-5-14-years/-/A-1002591924",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-cardigan-sweaters-open-front-cable-knit-chunky-cardigans-kids-oversized-cute-outerwear-coat/-/A-1002723693",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-sweater-cardigan-open-front-longline-sweater-cable-knit-sweater-long-sleeve-color-block-sweater-ground-m/-/A-1000669749",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-open-front-long-sleeve-cardigan-color-block-knit-oversized-kids-sweaters-cardigan-coat/-/A-1002553175",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-open-front-cardigan-long-sleeve-knit-sweaters-kids-lightweight-cute-casual-loose-outerwear-coats-with-pockets/-/A-1002725053",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-ruffle-sleeve-sweater-vest-kids/-/A-86458851",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kids-retro-striped-cardigan-the-blueberry-hill/-/A-1001116512",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-pink-bottom-down-sweater/-/A-94041144",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-cable-knit-sweater-cardigan-front-button-cardigan-with-side-pockets-above-knee-cardigan-for-girls-winter-knitwear-khaki-xl/-/A-1001378416",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-cropped-special-detail-sweater-cardigan-kids/-/A-1000872797",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-cable-knit-cardigan-with-pockets-open-front-sweater-outwear-long-sleeve-sweater-cardigan-kids-winter-outfits/-/A-1001378592",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-button-front-cardigan-sweater/-/A-89281535",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-lightweight-pointelle-cardigan/-/A-1003239947",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-scallop-edge-mesh-dot-cardigan-kids/-/A-90585971",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-crochet-cover-up-cardigan-summer-lightweight-long-sleeve-soft-cardigans/-/A-1002810787",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-reversible-full-zip-athletic-cardigan-pink-blue-and-butterflies/-/A-1002991981",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-chevron-cable-cardigan-sweater-kids/-/A-92936746",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-cropped-milano-stitch-dressy-cardigan-soft-white-scallop-edge-xx-small/-/A-93416208",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-hoodie-cardigan-pink-multicolored-gummies/-/A-1002991828",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-hoodie-cardigan-lilac-tropical-and-pink-flamingos/-/A-1002991963",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-pointelle-bow-cardigan-kids/-/A-90586059",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-hoodie-cardigan-pink-and-coral-houses/-/A-1002991861",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-pointelle-knit-cardigan-sweater-white/-/A-1002991990",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-sweater-vest/-/A-89281470",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-open-front-cardigan-long-sleeve-knit-sweaters-kids-solid-cute-casual-loose-outerwear-coats-with-pockets/-/A-1004830318",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-hollow-carved-design-cherry-patched-cardigan/-/A-1004644389",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-floral-embroidered-pattern-single-breasted-design-knit-cardigan/-/A-1004606856",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/children-s-cardigan-sweaters-long-sleeve-cable-knit-button-down-casual-chunky-outwear-coats-with-pocket/-/A-1004368640",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-open-front-cardigan-sweater-kids-causal-long-sleeve-crewneck-knit-outerwear-coat/-/A-1004193777",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-kid-s-tiffany-sweater-vignette-us7/-/A-1003530649",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-hoodie-cardigan-pink-flowers-on-white-background/-/A-1002991771",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-pointelle-knit-cardigan-sweater-black/-/A-1002991749",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-fringe-cardigan-rylee-cru/-/A-1002669048",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-floral-puff-sleeve-sweatshirt-happy-prince/-/A-1001401267",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girl-s-kenzie-cardigan-sweater-vignette/-/A-1001251550",
      tags: "Cardigans, Girl",
    },
    {
      url: "https://www.target.com/p/girls-39-pull-on-wide-leg-cargo-pants-cat-38-jack-8482/-/A-94492235",
      tags: "Cargo Pants, Girl",
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
