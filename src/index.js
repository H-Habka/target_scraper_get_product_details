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
      url: "https://www.target.com/p/girls-39-2pk-adaptive-st-patrick-39-s-day-capri-leggings-cat-38-jack-8482-lilac-purple-lime-green/-/A-92901437",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-capri-leggings-cat-38-jack-8482-light-pink/-/A-94600604",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-novelty-leggings/-/A-86508279",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-adaptive-2pk-plaid-capri-leggings-cat-38-jack-8482-red-green/-/A-91944395",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-39-2pk-adaptive-leggings-cat-38-jack-8482-brown-light-pink/-/A-94579583",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/leveret-girls-neutral-solid-color-legging/-/A-89313774",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609865",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-capri-leggings/-/A-87254673",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/29650-10459-5-6-just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609831",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/leveret-girls-boho-solid-color-legging/-/A-89311996",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/29614-10466-7-8-just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609818",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-ruched-bow-leggings/-/A-93068544",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/just-love-girls-jeggings-leggings-pack-of-2/-/A-1002609807",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/leveret-girls-classic-solid-color-legging/-/A-89313119",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruched-bow-leggings/-/A-93068541",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/posh-peanut-solid-ribbed-black-cha-cha-leggings/-/A-1001790760",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-capri-legging-black-and-small-flower/-/A-1004053078",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/wrapables-faux-jean-skinny-leggings-for-girls-set-of-2/-/A-1003431136",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-pinwheel-parade/-/A-1003030085",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-flamingo-forest/-/A-1003029824",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-active-leggings/-/A-87678122",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-knit-legging/-/A-92385016",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/lucky-me-jada-girls-leggings-3-pack-multi-size-multiple-colors/-/A-94082489",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-baby-ruffle-butt-soft-cotton-leggings/-/A-90735767",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-lined-leggings/-/A-88480700",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-novelty-leggings/-/A-91637854",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-leggings-ice-lollipops/-/A-1003846085",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-leggings-multicolored/-/A-1003846096",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-capri-leggings-with-mesh-navy-blue/-/A-1003844368",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/wrapables-microfiber-legging-tights-for-girls-set-of-3/-/A-1003430826",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/printed-athletic-leggings-pink-blue-and-butterflies/-/A-1002803251",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-legging-black-and-multicolored-gummies/-/A-1003868264",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-flat-back-rib-leggings-coral-pink/-/A-1003844058",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-capri-legging-small-flowers-on-cream-background/-/A-1003868275",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/hanes-girls-legging-3-pack/-/A-1003254535",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-happy-camping/-/A-1003030086",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/rebel-girls-x-mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings-rebel-girls-leopard-x-large/-/A-1004167331",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings-jewel-stripe-x-large/-/A-1004167955",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167927",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167962",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-3pk-fair-trade-organic-cotton-leggings-navy-x-large/-/A-1004238734",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings-jewel-stripe-large/-/A-1004167964",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167922",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194036",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167924",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194041",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194021",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167921",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194034",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194033",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/ola-otter-girl-leggings-blue/-/A-1004191172",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194035",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-toddler-girls-ruffle-leggings-with-signature-rear-ruffles/-/A-1004497980",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-lace-design-tight-pants-leggings/-/A-1004801036",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-embroidered-pattern-solid-color-soft-cotton-leggings/-/A-1004661319",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-soft-cotton-elastic-warm-quality-leggings/-/A-1004641866",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruffle-leggings/-/A-1004497985",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194029",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings-black-x-small/-/A-1004194026",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-2pk-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004194024",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167929",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mightly-girls-fair-trade-organic-cotton-reinforced-knee-leggings/-/A-1004167926",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-legging-candy-pink/-/A-1003868340",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-jersey-capri-legging-olive-green/-/A-1003846315",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-jersey-capri-legging-dark-old-pink/-/A-1003846317",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-organic-cotton-capri-legging-palm-trees-pink-flamingo-and-turquoise/-/A-1003846108",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-flat-back-rib-capri-legging-pale-teal/-/A-1003844114",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/mykids-usa-style-girls-fungus-leggings-spring-and-autumn-new-children-s-solid-color-leggings-girl-s-kindergarten-trousers/-/A-1003201105",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/colorblock-athletic-leggings-black-and-multicolored-butterflies/-/A-1002803239",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/dragonwing-ignite-high-waisted-leggings/-/A-1002469890",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/dragonwing-high-rise-compression-leggings/-/A-1002526617",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girl-plaid-velour-leggings-mia/-/A-1001774841",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girl-s-olive-leggings-vignette/-/A-1001251478",
      tags: "Girl, Leggings",
    },
    {
      url: "https://www.target.com/p/girls-dancewear-cami-flutter-sleeve-leotard-with-skirt-cat-jack-pink/-/A-82391774",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-dance-tank-mesh-leotard-cat-jack-black/-/A-82390250",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-cami-dance-leotard-cat-jack-black/-/A-82391750",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-dancewear-tank-leotard-with-skirt-cat-jack-black/-/A-82384473",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-cami-dance-leotard-cat-jack-pink/-/A-82391252",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-seamless-bike-leotard-all-in-motion/-/A-94501354",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-dance-brushstrokes-leotard-cat-jack/-/A-93574121",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-rainbow-blaze-leotard/-/A-1001731061",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-glitter-and-glitz-lavender-leotard/-/A-92077834",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-malibu-leotard/-/A-92078179",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-rainbow-blaze-unitard/-/A-1001740505",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-in-the-clouds-leotard/-/A-92078335",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/leveret-girls-elbow-sleeve-skirt-leotard/-/A-89453935",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-strawberry-fields-leotard/-/A-1001718197",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-boba-par-tea-leotard/-/A-1001718152",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-imagination-leotard/-/A-92078120",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-over-the-rainbow-unitard/-/A-1001740401",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/leveret-girls-short-sleeve-leotard/-/A-89453738",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-sky-s-the-limit-leotard/-/A-92076885",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-pinky-promise-leotard/-/A-1001718615",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/leveret-girls-long-sleeve-leotard/-/A-89453529",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-catlandia-unitard/-/A-1001388020",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-outside-the-box-leotard/-/A-1001402851",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-alexis-21100c-mesh-inserts-camisole-low-back/-/A-1003321240",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-lotl-fun-leotard/-/A-92089013",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-friend-chip-goals-leotard/-/A-92078406",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-american-elite-leotard/-/A-92085236",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-leotard-by-danz-n-motion-2465c-kennedy-ribbed-high-neck-classic/-/A-1002825437",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-fur-ever-french-leotard/-/A-92086808",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-interstellar-leotard/-/A-92077817",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-denim-daze-leotard/-/A-92077864",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-glimmer-of-gold-leotard/-/A-92084411",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-decadence-leotard/-/A-1001738872",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-catlandia-leotard/-/A-92035687",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-hollywood-leotard/-/A-92033282",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-brigitte-21105c-corset-midriff/-/A-1003688170",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-sasha-2700c-harness-back/-/A-1003547921",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-prismatic-leotard/-/A-92086769",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-fry-yay-leotard/-/A-92086755",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-tidal-wave-leotard/-/A-92078088",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-dreamworld-leotard/-/A-92078222",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-paw-risian-passport-leotard/-/A-92087108",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-sarabande-leotard-wear-moi/-/A-1001401196",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-pixie-dust-leotard/-/A-1001739220",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/destira-ever-after-leotard/-/A-92077122",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/dance-leotard-danz-n-motion-adelle-23112c-high-neck-empire-waist-open-back/-/A-1003238661",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-clementine-23108c-tank-lace-inserts-and-v-back/-/A-1003128063",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-kinsley-22117a-zip-up-mesh-back-ribbed-accents/-/A-1004140683",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-pirouette-leotard-wear-moi/-/A-1001401371",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/dragonwing-classic-dance-leotard/-/A-1001686889",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-cabriole-tank-leotard-wear-moi/-/A-1001401376",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-leotard-dress-danz-n-motion-293-madeline-sparkle-skirt-short-sleeve/-/A-1003526473",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-yasmin-23113c-cap-sleeve-lace-and-cross-back/-/A-1003127998",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-nicolette-23107c-lace-cap-sleeve-and-v-back/-/A-1003763236",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-21110c-angelina-camisole-floral-mesh-inserts/-/A-1003698603",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-so-danca-tilly-sl17-lace-cap-sleeve/-/A-1003125324",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-garcia-mesh-bodice-leotard-bloch-12/-/A-1003530655",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-kendra-mesh-back-leotard-bloch-6x-7/-/A-1003530692",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-24129c-scout-mesh-inserts-many-colors/-/A-1004644011",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-danz-n-motion-25117c-fallon-leotard-wide-neck-with-open-strapped-back/-/A-1004473418",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-24132c-piper-keyhole-back-mesh-accents-ballet-jazz/-/A-1004444062",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-brooklyn-22123c-scuba-zip-with-mesh-back/-/A-1003624284",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-primrose-cross-back-leotard-bloch/-/A-1003530788",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-laryisa-halterneck-leotard-bloch/-/A-1003530767",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-kendra-mesh-back-leotard-bloch/-/A-1003530672",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-mirella-paisley-camisole-leotard-bloch/-/A-1003530652",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-riley-22115c-rib-accents-and-keyhole-back/-/A-1003215038",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-by-so-danca-livy-sl09-lycra-tank/-/A-1003125377",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-s-leotard-danz-n-motion-209c-tank-cotton/-/A-1003057753",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-ladies-maya-lace-print-tank-leotard-bodysuit-bloch/-/A-1002669060",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-ladies-zip-tank-camo-leotard-bodysuit-bloch/-/A-1002669098",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-ladies-high-neck-halter-leotard-bodysuit-bloch/-/A-1002669068",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-ladies-halter-leotard-bodysuit-bloch/-/A-1002669032",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-ladies-adalia-camo-boat-neck-cap-sleeve-leotard-bloch/-/A-1002669045",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401337",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401349",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-concerto-camisole-leotard-wear-moi/-/A-1001401334",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-pirouette-leotard-wear-moi/-/A-1001401311",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girl-garcia-mesh-bodice-leotard-bloch/-/A-1001401303",
      tags: "Girl, Leotards",
    },
    {
      url: "https://www.target.com/p/girls-dance-brushstrokes-biketard-cat-jack/-/A-93574120",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girls-39-gymnastics-jewel-biketard-cat-38-jack-8482-black/-/A-89665710",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/kids-39-adaptive-2pk-tank-bodysuit-with-abdominal-access-cat-38-jack-8482-white-gray/-/A-91192320",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/star-wars-princess-leia-r2-d2-baby-girls-2-pack-zip-up-sleep-n-play-coveralls-newborn-to-infant/-/A-87049147",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-long-sleeve-bodysuit-with-abdominal-access-cat-jack/-/A-85722382",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-short-sleeve-bodysuit-with-abdominal-access-cat-jack/-/A-85722383",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/destira-bear-y-chill-unitard/-/A-1001740393",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/barbie-baby-girls-3-pack-bodysuits-newborn-to-infant/-/A-93856542",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girl-ladies-boat-neck-mesh-back-leotard-bodysuit-bloch/-/A-1002669059",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girl-ladies-mock-neck-halter-leotard-bodysuit-bloch/-/A-1002669067",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girl-liberty-ribbed-bodysuit-petit-confection/-/A-1001376613",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girl-floral-embroidered-footies-petit-confection/-/A-1001354879",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girl-kids-love-love-love-long-sleeve-bodysuit-sweet-wink/-/A-1001116294",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girl-kids-my-first-valentine-s-day-long-sleeve-bodysuit-sweet-wink/-/A-1001116282",
      tags: "Girl, Leotards and Bodysuits",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-let-s-celebrate-short-sleeve-graphic-t-shirt-pink/-/A-94442312",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-tokyo-speed-oversized-short-sleeve-graphic-t-shirt-ivory/-/A-94286443",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-stitch-glitter-bow-short-sleeve-graphic-t-shirt-light-mint-green/-/A-94712527",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-feelin-mallow-squishmallows-oversized-short-sleeve-graphic-t-shirt-purple/-/A-94286442",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-bluey-happiest-day-short-sleeve-graphic-t-shirt-blue/-/A-94442315",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-stitch-and-angel-oversized-short-sleeve-graphic-t-shirt-blue/-/A-94286441",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-glitter-bow-short-sleeve-graphic-t-shirt-light-red/-/A-94712524",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-wicked-emerald-city-oversized-short-sleeve-graphic-t-shirt-black/-/A-94286444",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-bluey-floral-glitter-short-sleeve-graphic-t-shirt-ivory/-/A-94712523",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-spirit-tank-top-white-teal-green/-/A-94431151",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-pokemon-short-sleeve-graphic-t-shirt-pink/-/A-94661687",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-minnie-mouse-ribbed-ruffle-hem-tank-top-light-pink/-/A-94431137",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-princess-short-sleeve-graphic-t-shirt-pink/-/A-94661686",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-pokemon-cafe-short-sleeve-graphic-t-shirt-white/-/A-94442314",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-horse-short-sleeve-graphic-t-shirt-ivory/-/A-94618829",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-sabrina-carpenter-oversized-short-sleeve-graphic-t-shirt-white/-/A-94721784",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-guns-n-roses-graphic-tank-top-white/-/A-94269020",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-stitch-short-sleeve-ohana-oversized-t-shirt-the-disney-collection-by-cat-jack-white/-/A-94439704",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-lainey-wilson-oversized-short-sleeve-graphic-t-shirt-green/-/A-94712528",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-moana-ocean-connects-us-oversized-short-sleeve-graphic-t-shirt-peach-orange/-/A-94286467",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-smileyworld-trust-the-process-oversized-short-sleeve-graphic-t-shirt-red/-/A-94709244",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-the-aristocats-marie-glitter-bow-short-sleeve-graphic-t-shirt-light-pink/-/A-94712525",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-wicked-true-friendship-glitter-short-sleeve-graphic-t-shirt-light-purple/-/A-94712526",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-athletic-tennis-club-oversized-short-sleeve-graphic-t-shirt-ivory/-/A-94712532",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-descendants-rise-of-red-short-sleeve-graphic-t-shirt-black/-/A-94739973",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-floral-ribcage-oversized-short-sleeve-graphic-t-shirt-black/-/A-94712531",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-yale-university-oversized-short-sleeve-graphic-t-shirt-blue/-/A-94709245",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-nintendo-super-mario-short-sleeve-graphic-t-shirt-white/-/A-86655530",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-stitch-ringer-t-shirt-the-disney-collection-by-cat-jack-white/-/A-94439706",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-ford-bronco-short-sleeve-graphic-t-shirt-green/-/A-94661688",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-goodyear-racing-oversized-short-sleeve-graphic-t-shirt-black/-/A-94712529",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-wednesday-addams-oversized-short-sleeve-graphic-t-shirt-maroon/-/A-94712530",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-disney-lilo-stitch-ohana-short-sleeve-graphic-t-shirt-light-orange/-/A-89174091",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-one-piece-oversized-short-sleeve-graphic-t-shirt/-/A-94712468",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-fender-graphic-baby-t-shirt-cream/-/A-93516654",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-rhinestone-short-sleeve-graphic-t-shirt-red-l/-/A-91119448",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-rhinestone-short-sleeve-graphic-t-shirt-red-s/-/A-91119446",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-lilo-stitch-ohana-short-sleeve-aop-graphic-t-shirt-blue/-/A-94431134",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-rhinestone-short-sleeve-graphic-t-shirt-red-m/-/A-91119447",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-rhinestone-short-sleeve-graphic-t-shirt-red-xs/-/A-91119445",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-tropical-floral-lettuce-edge-graphic-tank-top-light-pink/-/A-94712520",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-rhinestone-short-sleeve-graphic-t-shirt-red-xl/-/A-91119449",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-princess-bows-short-sleeve-graphic-t-shirt-ivory/-/A-93666910",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-fruity-mickey-38-minnie-short-sleeve-graphic-t-shirt-ivory/-/A-93666909",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-tinkerbell-short-sleeve-graphic-t-shirt-priwnk-blue/-/A-93666911",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2-short-sleeve-graphic-t-shirt-teal-green/-/A-92580312",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-smurfs-boxy-short-sleeve-graphic-t-shirt-blue/-/A-94739981",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-nancy-drew-one-step-ahead-short-sleeve-graphic-t-shirt-light-blue/-/A-94723751",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-zootopia-short-sleeve-graphic-t-shirt-purple/-/A-94505188",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-hogwarts-school-of-witchcraft-and-wizardry-boxy-short-sleeve-graphic-t-shirt-cream/-/A-94739971",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-winnie-the-pooh-ringer-short-sleeve-graphic-t-shirt-off-white/-/A-94505189",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-bluey-americana-boxy-short-sleeve-graphic-t-shirt-dark-blue/-/A-94442303",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-life-is-a-fairytale-graphic-t-shirt-light-blue/-/A-89174088",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-inside-out-short-sleeve-graphic-t-shirt-black-blue/-/A-91616673",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-barbie-rodeo-boxy-short-sleeve-graphic-t-shirt-sage-green/-/A-94739977",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-the-nightmare-before-christmas-short-sleeve-graphic-t-shirt-gray-lavender/-/A-91616688",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/smileyworld-girls-oversized-license-graphic-t-shirt-yellow/-/A-94257276",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/blondie-girls-oversized-license-graphic-t-shirt-red/-/A-94257275",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-high-neck-graphic-tank-top-pink/-/A-94257272",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/girls-bambi-boxy-short-sleeve-graphic-t-shirt-cream/-/A-94740129",
      tags: "Girl, License Graphic Shirts",
    },
    {
      url: "https://www.target.com/p/memoi-girls-3-pair-pack-hi-cut-liner-socks/-/A-1003336501",
      tags: "Girl, Liner Socks",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-slip-on-everyday-penny-loafer/-/A-1003189898",
      tags: "Girl, Loafers",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-pink-multicolored-gummies/-/A-1003486281",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-fruits-on-yellow-background/-/A-1003461918",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-terry-cloth-short-turquoise-and-beige/-/A-1003715312",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/disney-youth-minnie-mouse-lounge-shorts/-/A-93996657",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-short-multicolored-tie-dye/-/A-1003484785",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-seersucker-short-navy-blue-and-white/-/A-1003461897",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-seersucker-short-blue-and-white-striped/-/A-1003460923",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-ribbed-short-small-flowers-on-white-background/-/A-1003487183",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-short-with-frills-black-and-butterflies/-/A-1003486371",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-short-black-and-multicolored-gummies/-/A-1003484796",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-old-pink-and-flowers/-/A-1003461959",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-off-white-and-koala/-/A-1003461935",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-lilac-tropical-and-pink-flamingos/-/A-1003461894",
      tags: "Girl, Lounge Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-low-socks-cat-38-jack-8482-white/-/A-93276917",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-low-cut-socks-cat-38-jack-8482-pink-white-blue/-/A-90898566",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/girls-10pk-lightweight-no-show-socks-cat-jack-153/-/A-53096782",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/boys-8pk-low-cut-socks-dealworthy-8482-white-gray-black/-/A-90629748",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-squishmallows-6pk-no-show-socks-ivory/-/A-90041641",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-8pk-ankle-socks-dealworthy-8482-dark-pink/-/A-94472266",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/girls-frozen-6pk-no-show-socks-blue-gray/-/A-85638500",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-3-pair-pack-no-show-sneaker-liner-socks/-/A-1003336494",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/memoi-girls-microfiber-liner-socks-6-pack-pastel-brights/-/A-1003403096",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-minnie-mouse-fun-day-fluffy-socks-2-pairs/-/A-1003286439",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/memoi-watermelon-no-show-cotton-blend-socks-3-pack-assorted/-/A-1003430042",
      tags: "Girl, Low Cut Socks",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-easy-on-classic-mary-jane/-/A-1003189734",
      tags: "Girl, Mary Jane Flats",
    },
    {
      url: "https://www.target.com/p/girls-39-dip-dye-design-midkini-set-cat-38-jack-8482/-/A-92240853",
      tags: "Girl, Midkini Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-moto-jacket-art-class-8482-black/-/A-90968590",
      tags: "Girl, Moto Jackets",
    },
    {
      url: "https://www.target.com/p/yoki-little-big-girls-moto-style-pu-faux-leather-jackets/-/A-1002894725",
      tags: "Girl, Moto Jackets",
    },
    {
      url: "https://www.target.com/p/yoki-big-girls-floral-embroidered-design-pu-faux-leather-jackets/-/A-1003526710",
      tags: "Girl, Moto Jackets",
    },
    {
      url: "https://www.target.com/p/yoki-little-girls-floral-embroidered-design-pu-faux-leather-jackets/-/A-1003666255",
      tags: "Girl, Moto Jackets",
    },
    {
      url: "https://www.target.com/p/girls-little-mermaid-ariel-nightgown-blue/-/A-94222614",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-tangled-rapunzel-nightgown-purple/-/A-94222620",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-frozen-elsa-nightgown-blue/-/A-94222613",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-moana-dress-up-nightgown-orange/-/A-91701009",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-snow-white-dress-up-nightgown-blue-yellow/-/A-89385718",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-belle-dress-up-nightgown-yellow/-/A-88849665",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-cinderella-dress-up-nightgown-blue/-/A-88868717",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-39-beetlejuice-astrid-dress-up-nightgown-blue/-/A-90781820",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-little-big-girls-short-sleeve-sleep-dress-nightgown/-/A-1003168285",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/barbie-girls-nightgown-pajamas/-/A-87572172",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-nightgown-pajamas-toddler-to-big-kid/-/A-88579410",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-nightgown/-/A-88763104",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/seven-times-six-wicked-glinda-girl-s-short-sleeve-sparkle-nightgown-pajama-dress-pink/-/A-1001002005",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/big-girls-harry-potter-pajama-nightgown-sleep-shirt/-/A-84628555",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/barbie-girls-doll-magic-fairy-characters-stars-nightgown-sleep-pajama-shirt-pink/-/A-89147922",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hogwarts-castle-gold-foil-nightgown-pajama-sleep-top-hogwarts-castle/-/A-84207266",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-girl-s-dorm-sleep-shirt-nightgown-pajama/-/A-92083471",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/intimo-big-girls-harry-potter-i-solemnly-swear-shoulder-cut-out-nightgown-black/-/A-84120811",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-nightgown/-/A-93815090",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-classic-character-tie-dye-nightgown-sleep-pajama-shirt-multicolored/-/A-89152786",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/nickelodeon-jojo-siwa-girls-jojo-dreaming-of-unicorns-nightgown-pajama/-/A-91215753",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/my-little-pony-a-new-generation-girls-sunny-starscout-pajama-nightgown-pink/-/A-91920903",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-foil-print-hogwarts-houses-s-s-raglan-nightgown/-/A-84054085",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-9-3-4-hogwarts-express-raglan-nightgown-red/-/A-85071750",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-rule-french-terry-gown/-/A-91973973",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-nightgown-pajamas-little-kid-to-big-kid/-/A-93164347",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/mattel-girls-barbie-making-waves-dreaming-sleep-pajama-dress-nightgown-pink/-/A-86737324",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/a-christmas-story-ralphie-girls-t-shirt-little-kid-to-big-kid/-/A-88170794",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-flannel-nightgown/-/A-87715614",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-hermione-chibi-charms-logo-house-crest-raglan-pajama-gown-black/-/A-85922124",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-girls-nightgown-sleep-pajama-shirt-multicolored/-/A-89131755",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/mattel-barbie-girls-raglan-kids-nightgown-pajama-with-best-friend-unicorn-multicolor/-/A-86052560",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-girls-nightgown-pajamas-toddler-to-big-kid/-/A-88317743",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/my-little-pony-a-new-generation-girls-sunny-starscout-pajama-nightgown-pink/-/A-92046435",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-despicable-me-minions-take-your-friends-with-you-nightgown-pajama-multicolored/-/A-89152738",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/barbie-girls-tie-dye-kids-tank-nightgown-pajama-with-tulle-skirt-overlay-multicolor/-/A-84295238",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-peanuts-snoopy-woodstock-flowers-friends-nightgown-pajama-shirt-pink/-/A-89152810",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/wonder-woman-big-girls-raglan-gold-foil-nightgown-blue/-/A-1002158798",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-wizarding-world-hogwarts-crest-sleep-pajama-nightgown-grey/-/A-89147943",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hogwarts-houses-crest-raglan-pajama-nightgown-all-houses/-/A-84702114",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-i-woke-up-like-this-flower-sleep-pajama-dress-nightgown-purple/-/A-89531268",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-spirit-untamed-movie-believe-in-your-dreams-nightgown-sleep-pajama-pink/-/A-89152825",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-pajama-girls-hedwig-owl-micro-raschel-fleece-hi-lo-nightgown-costume/-/A-85071892",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-dreamworks-trolls-you-got-this-poppy-nightgown-sleep-pajama-shirt-pink/-/A-89152739",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-hermione-hogwarts-logo-crest-nightgown-sleepshirt-holiday-pajama-red/-/A-84982808",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hogwarts-rainbow-hologram-raglan-nightgown-pajama-black/-/A-84209188",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-all-houses-crest-logo-tank-stripe-accent-pajama-nightgown/-/A-88028234",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/scooby-doo-scooby-doo-girls-nightgown-pajamas-little-kid-to-big-kid/-/A-87449362",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-hermione-hogwarts-logo-ravenclaw-house-crest-raglan-sleepshirt-pajama-nightgown-blue/-/A-86054886",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-long-sleeve-hogwarts-raglan-night-gown-grey/-/A-86214591",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-pajama-hogwarts-gold-crest-short-sleeve-raglan-nightgown/-/A-85922065",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-movie-girls-poppy-hooded-costume-nightgown-sleep-shirt-multicolored/-/A-88042322",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-girl-s-batman-logo-tank-nightgown-costume-pajama-dress-black/-/A-85071439",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-wonder-woman-girls-3-tier-nightgown-sleep-dress/-/A-85071970",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/sesame-street-girls-sweet-dreams-elmo-rainbow-sleep-pajama-dress-nightgown-blue/-/A-91158416",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girl-s-i-d-rather-stay-at-hogwarts-this-christmas-sleep-pajama-nightgown/-/A-1000475329",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-girl-s-wonder-woman-logo-and-stars-tank-nightgown-costume-pajama-red-blue/-/A-84228182",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-pajama-girls-hermione-gryffindor-uniform-with-tie-fleece-nightgown/-/A-84120853",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hermoine-hogwarts-gryffindor-uniform-pajama-nightgown-multicolored/-/A-1000079239",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-little-girls-wonder-woman-costume-pajama-nightgown-multi/-/A-85071918",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-gryffindor-house-costume-nightgown-pajama-dress-grey/-/A-84628659",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/intimo-big-girls-harry-potter-marauders-map-raglan-nightgown-black/-/A-85922181",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-tie-dye-nightgown-pajamas/-/A-84602840",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/peanuts-girl-s-snoopy-joe-cool-usa-love-tank-nightgown-dress-pajama-grey-blue/-/A-84603184",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-l-s-hogwarts-raglan-nightown-pajama-grey-and-burgundy/-/A-85922173",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/polly-pocket-toys-girls-tiny-is-mighty-kids-pajama-nightgown-sleep-shirt-multi/-/A-84593628",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/elf-buddy-the-elf-christmas-girls-nightgown-pajamas-little-kid-to-big-kid/-/A-88056882",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-little-wonder-woman-cold-shoulder-glitter-nightgown-pajama/-/A-85922164",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/dc-comics-wonder-woman-girls-roller-derby-tank-gown-with-cape/-/A-1003012985",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/polly-pocket-toys-girls-tiny-is-mighty-pajama-nightgown-sleep-raglan-pink/-/A-85071501",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/intimo-harry-potter-big-girls-hermoine-gryffindor-uniform-night-gown-by-intimo-gray-20-multicoloured/-/A-1000143597",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-bluey-fantasy-nightgown-pink/-/A-94416502",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/girls-nightmare-before-christmas-fantasy-nightgown-purple/-/A-94416501",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-big-griffyindor-raglan-nightgown-blue/-/A-1003221906",
      tags: "Girl, Nightgowns",
    },
    {
      url: "https://www.target.com/p/hanes-girls-20pk-no-show-socks-white/-/A-93666808",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/hanes-girls-39-20pk-super-soft-no-show-socks/-/A-94472293",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-6pk-no-show-socks/-/A-90021720",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-39-marled-39-super-soft-no-show-socks-cat-38-jack-8482-purple-pink-gray/-/A-90873437",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/hanes-premium-girls-6pk-no-show-socks-colors-may-vary/-/A-81623890",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-barbie-6pk-socks/-/A-87694813",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-39-cat-dog-39-super-soft-no-show-socks-cat-38-jack-8482/-/A-90873436",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-10pk-lightweight-no-show-striped-socks-cat-38-jack-8482/-/A-89806654",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/kids-nintendo-super-mario-6pk-socks-blue-gray/-/A-81520856",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-disney-princess-6pk-socks/-/A-87694785",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-6pk-no-show-socks-blue/-/A-90170780",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-gabbey-39-s-dollhouse-no-show-socks-light-pink/-/A-94660049",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-6pk-no-show-socks-all-in-motion-white/-/A-92878062",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-6pk-no-show-socks-all-in-motion-8482/-/A-90898564",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-lilo-stitch-no-show-socks-pink/-/A-84199674",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-wicked-6pk-no-show-socks/-/A-93717552",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-no-show-socks-moana/-/A-94050325",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/hanes-premium-girls-6pk-no-show-solid-socks-colors-may-vary/-/A-81623815",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-39-7pk-low-cut-unicorn-socks-cat-38-jack-8482-cream/-/A-90850050",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-pokemon-friends-6pk-no-show-socks-blue/-/A-88552828",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-no-show-socks-pink/-/A-94793537",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/bioworld-kirby-character-game-design-6-pack-youth-no-shoe-ankle-socks-size-7-9-multicoloured/-/A-91963026",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/girls-wicked-no-show-socks-ivory/-/A-94781797",
      tags: "Girl, No Show Socks",
    },
    {
      url: "https://www.target.com/p/hello-kitty-toddler-little-girl-s-one-piece-character-print-fashion-jumpsuits/-/A-92489957",
      tags: "Girl, One Piece Clothing Sets",
    },
    {
      url: "https://www.target.com/p/disney-toddler-little-girls-2-pack-minnie-mouse-casual-fashion-dresses/-/A-1003764881",
      tags: "Girl, One Piece Clothing Sets",
    },
    {
      url: "https://www.target.com/p/girls-leopard-union-suit-cat-jack-cream/-/A-90975841",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/squishmallows-little-big-girl-s-all-over-print-plush-fleece-robe/-/A-92199865",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/mattel-girls-barbie-fantasy-mermaid-fairy-rainbow-ruffled-bathrobe-robe-white/-/A-84851148",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/leveret-kids-fleece-solid-color-hooded-robe/-/A-89531300",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-fleece-hooded-robe/-/A-89530707",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-hooded-fleece-robes-classic-prints/-/A-93813550",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/joyfy-christmas-kids-rainbow-robes-for-girls-hooded-girls-bath-robe-girls-christmas-pajamas/-/A-1001258236",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-leopard-plush-fleece-shawl-collar-robe-with-matching-fleece-slippers/-/A-87677692",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/bc-bare-cotton-girls-hooded-robe-microfiber-plush-fleece-bathrobe/-/A-1001646466",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-hooded-fleece-solid-robe/-/A-87258201",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/leveret-kids-fleece-hooded-robe/-/A-93849522",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-fleece-robes-for-girls-girls-pj-sleepwear/-/A-90614622",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/joyfy-unicorn-kids-robe-girls-bath-robe-with-headband-slippers-eye-mask-girls-christmas-pajamas/-/A-1001258282",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/bc-bare-cotton-girls-shawl-robe-microfiber-plush-fleece-bathrobe/-/A-1001000080",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-plush-robe-for-girls-75611-redblk-7-8-sioc/-/A-1001853643",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/miraculous-lady-bug-girl-s-girl-power-one-piece-hooded-sleeper-pajama/-/A-92083478",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/joyfy-christmas-kids-light-purple-robes-for-girls-hooded-girls-bath-robe-girls-christmas-pajamas/-/A-1001258487",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/joyfy-christmas-kids-purple-robes-for-girls-hooded-girls-bath-robe-girls-christmas-pajamas/-/A-1001258250",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-tie-dye-flower-power-union-suit-footless-sleep-pajama-multicolored/-/A-85922271",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/leveret-kids-shawl-collar-fleece-solid-color-robe/-/A-89531476",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/scooby-doo-costume-kids-union-suit-sleeper-pajamas/-/A-84207250",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/disney-frozen-ii-little-big-girls-one-piece-hooded-blanket-sleeper-pajama/-/A-93659729",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-girls-zip-up-pajama-coverall-little-kid-to-big-kid/-/A-86974128",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/harry-potter-costume-kids-plush-robe/-/A-84262763",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/barbie-girls-mermaid-brooklyn-and-malibu-footless-sleeper-pajama-for-kids-blue/-/A-90060122",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-velvet-robe-hogwarts-houses/-/A-84984676",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/5-more-minutes-girl-s-plush-unicorn-robe/-/A-94109154",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-batgirl-supergirl-wonder-woman-girls-zip-up-costume-pajama-coverall-and-cape-toddler-to-little-kid/-/A-87544166",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/my-little-pony-a-new-generation-girls-be-unique-sunny-starscout-footless-multicolored/-/A-92046457",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/dc-comics-wonder-woman-pj-one-piece-costume-pajama-union-suit-for-toddlers-girls-and-juniors/-/A-94234223",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-striped-ruffle-plush-fleece-robe/-/A-84984765",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/5-more-minutes-girl-s-panda-print-hooded-plush-robe/-/A-93996636",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-girls-character-footless-pajama-multicolored/-/A-87801303",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/girls-nightgowns-sleepwear-short-sleeve-pajama-dress-soft-princess-cute-sleepshirt/-/A-1002761751",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-velour-printed-robes-75605-new-prp-5-6/-/A-1003255336",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-velour-solid-robes-for-girls-75604-wht-7-8/-/A-1003558618",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-harley-quinn-costume-one-piece-union-suit-pajama-outfit/-/A-84243095",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/comfydown-kids-luxury-pink-hooded-bathrobe-for-girls-soft-plush-made-in-usa-small-4-5-years/-/A-1004677143",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-plush-velour-buffalo-plaid-robes-for-girls-75606-10195-red-7-8-pink-charcoal-buffalo-plaid-girls-10-12/-/A-1003255334",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-plush-velour-buffalo-plaid-robes-for-girls-75606-10195-red-7-8-pink-charcoal-buffalo-plaid-girls-6x/-/A-1003255370",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/just-love-hooded-plush-fleece-robe-for-girls-75603-10426-7-8-turquoise-black-buffalo-plaid-girls-7-8/-/A-1003255339",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/girls-lilo-stitch-union-suit-pink/-/A-94416492",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/matching-christmas-pajamas-front-zipper-one-piece-pajamas-fleece-lined-holiday-pajamas-pocket-sleepwear-matching-christmas-jammies/-/A-1002809654",
      tags: "Girl, One Piece Pajamas",
    },
    {
      url: "https://www.target.com/p/girls-retro-row-rash-guard-one-piece-swimsuit-cat-jack/-/A-86844321",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/girls-39-tropical-blooms-floral-printed-one-piece-swimsuit-cat-38-jack-8482-pink/-/A-94396699",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/girls-39-enchanting-tropical-floral-printed-one-piece-rash-guard-cat-38-jack-8482/-/A-92304671",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/girls-39-foliage-paradise-abstract-one-piece-rash-guard-art-class-8482/-/A-92304678",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/girls-floral-printed-one-piece-rash-guard-cat-jack/-/A-92240859",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/girls-39-paradise-coast-one-piece-swimsuit-cat-38-jack-8482/-/A-94396721",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-short-sleeve-upf50-one-piece-rash-guard/-/A-92128731",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-toddler-girls-long-sleeve-upf50-one-piece-rash-guard/-/A-88271234",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-sun-protection-long-sleeve-rash-guard-one-piece/-/A-1001910630",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-short-sleeve-upf50-one-piece-rash-guard/-/A-92128736",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-half-zip-one-piece-upf-50-swimsuit/-/A-88553930",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-pink-long-sleeve-rashguard/-/A-1001718334",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-girls-upf50-sun-protected-long-sleeve-flower-skirted-one-piece/-/A-1001910652",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-blue-long-sleeve-rashguard/-/A-1001718339",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-long-sleeve-one-piece-rashguard-pink-orange-and-turquoise/-/A-1004102565",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-long-sleeve-one-piece-rashguard-black-and-multicolored-butterflies/-/A-1004085325",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-long-sleeve-rashguard-butterflies-on-multicolored-background/-/A-1004085326",
      tags: "Girl, One-piece Rash Guards",
    },
    {
      url: "https://www.target.com/p/girls-39-mermaid-paradise-scalloped-one-peice-swimsuit-set-cat-38-jack-8482-purple/-/A-92304686",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-seaside-hibiscus-floral-printed-one-piece-swimsuit-set-cat-jack/-/A-93111979",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-one-piece-swimsuit-set-cat-38-jack-8482/-/A-93323432",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-water-tie-dye-design-one-piece-swimsuit-set-cat-jack/-/A-92304684",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-leopard-spot-printed-one-piece-swimsuit-set-cat-jack-pink/-/A-92304682",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-garden-tea-floral-printed-one-piece-swimsuit-set-art-class-8482/-/A-93323430",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-leaf-printed-one-piece-swimsuit-set-art-class-8482/-/A-92240866",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-2pc-swimsuit-set-cream/-/A-93623502",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-playa-striped-one-piece-swimsuit-set-cat-jack/-/A-89173971",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-citrus-minnie-2pc-swimsuit-set-aqua-green/-/A-93623501",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-tankini-swim-set/-/A-1002841017",
      tags: "Girl, One-piece Swimsuit Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-one-piece-swimsuit-art-class-8482-black/-/A-92241053",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-sunrise-blooms-floral-printed-one-piece-swimsuit-art-class-8482/-/A-94396705",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-one-piece-swimsuit-art-class-8482-black/-/A-93114852",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-shining-bright-solid-one-piece-swimsuit-art-class-8482/-/A-92304675",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-malibu-stripe-one-piece-swimsuit-cat-38-jack-8482/-/A-94268743",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-paradise-palm-abstract-one-piece-swimsuit-cat-38-jack-8482/-/A-92304672",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-small-gingham-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-94396703",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-gingham-printed-one-piece-swimsuit-cat-jack/-/A-94409175",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-return-to-paradise-floral-printed-one-piece-swimsuit-art-class-8482/-/A-93114816",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-sweet-summer-striped-one-piece-swimsuit-art-class/-/A-92160493",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-colorful-pop-binding-one-piece-swimsuit-cat-jack/-/A-94214923",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-sizzling-summer-one-piece-swimsuit-art-class/-/A-94214943",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-striped-one-piece-swimsuit-cat-38-jack-8482/-/A-92241057",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-sea-life-one-piece-swimsuit-art-class-8482-pink/-/A-92241054",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-underwater-abstraction-star-fish-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-92304674",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-hand-drawn-cheetah-printed-one-piece-swimsuit-art-class-8482/-/A-92304679",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-sandy-island-rainbow-striped-one-piece-swimsuit-cat-38-jack-8482/-/A-94396700",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-leaf-printed-one-piece-swimsuit-art-class-8482/-/A-92240864",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-striped-one-piece-swimsuit-cat-38-jack-8482-pink/-/A-92304673",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-printed-one-piece-swimsuit-art-class-8482/-/A-93323431",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-abstract-one-piece-swimsuit-cat-38-jack-8482/-/A-92240835",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-usa-flag-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-94396702",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-tie-dye-design-one-piece-swimsuit-art-class-8482/-/A-92241075",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-finding-flowers-one-piece-swimsuit-cat-38-jack-8482-cream/-/A-94286449",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-one-piece-swimsuit-art-class-8482-pink/-/A-93323615",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-american-tie-dye-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-94396704",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-endless-daisies-floral-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-93323429",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-leopard-printed-one-piece-swimsuit-art-class-8482-brown/-/A-93323548",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-floral-treasures-one-piece-swimsuit-cat-38-jack-8482/-/A-93114815",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-gingham-checkered-one-piece-swimsuit-cat-38-jack-8482-blue/-/A-93114848",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-fruit-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-92240862",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-lemon-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-93323546",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-sunny-palm-tree-one-piece-swimsuit-cat-jack/-/A-94214935",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-tropical-smoothie-fruit-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-92304677",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-miami-sunset-one-piece-swimsuit-art-class-8482-black/-/A-94396706",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-colorblock-one-piece-swimsuit-cat-38-jack-8482/-/A-93323409",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-one-piece-swimsuit-cat-38-jack-8482-coral-pink/-/A-93114851",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-abstract-tropical-garden-printed-one-piece-swimsuit-art-class-8482-red/-/A-93323379",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-ombre-one-piece-swimsuit-white-coral-orange-purple/-/A-93306657",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-one-piece-swimsuit-cat-38-jack-8482/-/A-92161201",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-bluey-one-piece-swimsuit-pink/-/A-92975261",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-vacay-vibes-floral-printed-one-piece-swimsuit-art-class-8482/-/A-94396724",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-beach-days-one-piece-swimsuit-art-class/-/A-94223644",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-stitch-floral-printed-one-piece-swimsuit-light-blue/-/A-93306648",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-rainbow-cheetah-printed-one-piece-swimsuit-cat-38-jack-8482/-/A-94268750",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-dreamy-hibiscus-floral-printed-one-piece-swimsuit-cat-38-jack-8482-yellow/-/A-94396727",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-39-island-wild-39-one-piece-swimsuit-cat-38-jack-8482/-/A-94268752",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-palm-party-one-piece-swimsuit-art-class-8482-pink/-/A-94396722",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-rainbow-ombre-design-one-piece-swimsuit-cat-38-jack-8482/-/A-89173970",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-sunny-palm-tree-one-piece-swimsuit-cat-jack-green/-/A-94396723",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-mermaid-printed-one-piece-swimsuit-cat-38-jack-8482-lavender/-/A-89205789",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-shimmer-tie-dye-one-piece-swimsuit-cat-38-jack-8482/-/A-94396728",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-tropical-pineapple-one-piece-swimsuit-cat-38-jack-8482/-/A-94396725",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-one-piece-swimsuit/-/A-88501305",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-happy-zebra-one-piece-swimsuit-cat-38-jack-8482-lavender/-/A-94396726",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-playful-palms-one-piece-swimsuit-art-class/-/A-94223725",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/hello-kitty-upf-50-one-piece-bathing-suit-sizes-6-14-16/-/A-1001367360",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-beach-garden-one-piece-swimsuit-art-class-8482-cream/-/A-94567276",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-lilo-stitch-girls-one-piece-bathing-suit-toddler-to-big-kid/-/A-88053765",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-summer-shimmer-solid-one-piece-swimsuit-cat-38-jack-8482/-/A-92304676",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-tropical-adventure-one-piece-swimsuit-cat-38-jack-8482/-/A-94268751",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-bluey-girls-one-piece-bathing-suit-little-kid/-/A-88031855",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-wave-break-one-piece-swimsuit-art-class-8482-cream/-/A-94567282",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-upf-50-one-piece-bathing-suit-toddler-to-big-kid/-/A-86954525",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-frozen-elsa-anna-girls-one-piece-bathing-suit-little-kid-to-big-kid/-/A-86906531",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-junior-upf-50-one-piece-bathing-suit-sizes-6-9-months-7-8/-/A-1001524159",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-v-back-one-piece-swimsuit/-/A-90429770",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-big-girls-one-piece-cute-halter-top-beach-swimsuits/-/A-1003414843",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/barbie-girls-one-piece-bathing-suit-little-kid-to-big-kid/-/A-88032082",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-big-girls-one-piece-cute-sequin-detail-beach-swimsuits/-/A-1003407708",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-hufflepuff-ravenclaw-girls-one-piece-bathing-suit-little-kid-to-big-kid/-/A-88040235",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-solid-one-piece-swimsuit-cat-38-jack-8482-pink/-/A-92241052",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/hello-kitty-rainbow-girls-upf-50-one-piece-bathing-suit-little-kid-to-big/-/A-91126897",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-fruit-printed-one-piece-swimsuit-cat-jack-blue/-/A-92240863",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plus-size-ruffle-one-piece-swimsuit/-/A-88500466",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/marvel-avengers-toddler-girls-racerback-upf-50-one-piece-bathing-suit-logo-blue-white-captain-america-spiderman-5t/-/A-1001372783",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-dawn-coconut-q-t-surfer-babe-girls-one-piece-bathing-suit-little-kid-to-big-kid/-/A-86906692",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-seersucker-waterfall-one-piece/-/A-89042573",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-one-shoulder-ruffle-one-piece/-/A-88277237",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/patpat-disney-princess-moana-girl-swimsuit-one-piece-rash-guard-upf-50-summer-bathing-suit-long-sleeve-swimwear/-/A-1003927184",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-front-twist-one-piece-swimsuit/-/A-1002511820",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-reversible-one-piece-swimsuit/-/A-91082879",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-girls-butterfly-one-piece-swimsuit/-/A-91254960",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-princess-cinderella-belle-tiana-jasmine-girls-one-piece-bathing-suit-toddler-to-little-kid/-/A-88275177",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/paw-patrol-skye-chase-marshall-girls-one-piece-bathing-suit-little-kid/-/A-86906886",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/marvel-spider-verse-ghost-spider-little-girls-one-piece-bathing-suit-pink-5/-/A-87442222",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-waterfall-one-piece-swimsuit/-/A-90384098",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-seersucker-tie-shoulder-one-piece/-/A-88271131",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/patpat-disney-frozen-elsa-toddler-girls-one-piece-swimsuits-ruffles-upf-50-swimwear-beach-sport-bathing-suit/-/A-1003927283",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-upf50-big-bow-skirted-one-piece/-/A-1002439028",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/ymi-big-girls-one-piece-ditsy-floral-print-swimsuit/-/A-1004619268",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-surf-bodysuit/-/A-1002654894",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girls-39-frozen-fictitious-character-one-piece-swimsuit-light-purple/-/A-89205792",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-one-piece-cute-tank-beach-swimsuits/-/A-1003474491",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-one-piece-cute-ruffled-beach-swimsuits/-/A-1003407717",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/kid-s-fresh-lemonade-fruit-print-one-piece-swimsuit-cupshe/-/A-1004016016",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girly-gingham-rose-shoulder-one-piece-swimsuit-mia-belle-girls/-/A-1002838898",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/patpat-disney-mickey-mouse-friends-girls-one-piece-swimsuits-ruffles-swimwear-beach-sport-bathing-suit-3-10y/-/A-1003927120",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-scoopback-ruffle-one-piece/-/A-1002439079",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-big-girls-one-piece-cute-one-shoulder-beach-swimsuits/-/A-1003418047",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-big-bow-skirted-one-piece/-/A-1002439058",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-plus-sequin-graphic-upf-50-tugless-one-piece/-/A-87338537",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-v-back-upf50-one-piece/-/A-90898976",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/toddler-baby-girl-swimsuit-ruffled-stripe-sleeveless-swimwear-one-piece-girl-bathing-suits-infant-cute-beach-wear/-/A-1003847783",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-tulle-skirted-one-piece/-/A-1001818088",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/patpat-disney-mickey-mouse-friends-minnie-girls-swimsuits-upf-50-one-piece-bathing-suits-sport-summer-beach-swimwear-for-kids-size-3-13y/-/A-1003927163",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/teenage-mutant-ninja-turtles-girls-upf-50-one-piece-bathing-suit-toddler/-/A-1001374881",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-sun-protected-cross-back-one-piece/-/A-1002841463",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/kid-boys-girls-rash-guard-sets-one-piece-swimsuit-with-zipper-patchwork-long-sleeve-beach-bathing-suit/-/A-1002515745",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-upf-50-one-piece-swimsuit/-/A-91372761",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/kid-s-budding-joy-floral-one-piece-swimsuit-cupshe/-/A-1004122759",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-one-piece-cute-beach-swimsuits/-/A-1003407716",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-one-piece-cute-one-shoulder-ruffle-trim-swimsuits/-/A-1003474495",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-colorblocked-one-piece-swimsuit/-/A-1001782124",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-toddler-girls-tie-shoulder-upf50-one-piece/-/A-89103693",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-solid-wide-strap-one-piece-swimsuit/-/A-1002306986",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/kiko-max-infant-toddler-and-little-girl-s-one-piece-swimsuit-bathing-suits/-/A-92431618",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-ruffle-v-back-one-piece/-/A-91267525",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/butterfly-dreams-flutter-sleeve-one-piece-swimsuit-mia-belle-girls/-/A-1003867143",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-tie-back-one-piece-swimsuit/-/A-1002308388",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-peplum-smocked-bodice-one-piece/-/A-90898985",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-floral-check-print-swimsuit/-/A-1001718362",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/star-wars-the-child-girls-one-piece-bathing-suit-toddler-to-big-kid/-/A-86906675",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-blue-ombre-swimsuit/-/A-1001718404",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-toy-story-toddler-girls-upf-50-one-piece-bathing-suit-tie-dye-pastel-turquoise-3t/-/A-1001387051",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-the-little-mermaid-girls-upf-50-one-piece-long-sleeve-rash-guard-bathing-suit-for-toddler-and-big-kids-4/-/A-1003764008",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/go-coco-little-girls-one-piece-cute-strappy-detail-beach-swimsuits/-/A-1003431898",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-toddler-little-girls-one-piece-halter-fruit-print-swimsuits/-/A-1003474512",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-solid-piped-thin-strap-one-piece-swimsuit/-/A-1002307236",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-baby-girls-v-back-one-piece/-/A-90898977",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-wide-strap-cross-back-one-piece-swimsuit/-/A-1002307366",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-crochet-rib-one-pc-halter-swimsuit/-/A-1001718374",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-micro-back-one-piece-swimsuit-24-40/-/A-1002306821",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-upf50-tulle-skirted-one-piece/-/A-1001818097",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-solid-thin-strap-one-piece-swimsuit/-/A-1002308947",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-v-back-one-piece/-/A-90899018",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-cap-sleeve-portrait-one-piece-swimsuit/-/A-91687554",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-sharkies-thin-strap-one-piece-swimsuit-22-40/-/A-1001528538",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-big-girls-sailboat-prints-halter-one-piece-swimsuits/-/A-1003474570",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-light-wave-thin-strap-one-piece-swimsuit/-/A-1002308281",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-solid-thin-strap-one-piece-swimsuit/-/A-1002307765",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-upf50-pinafore-one-piece/-/A-91519406",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/patpat-l-o-l-surprise-toddler-kids-girl-s-one-piece-swimsuit-cute-ruffle-summer-beach-bathing-suits-3-8-years/-/A-1002845236",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/disney-toy-story-little-girls-upf-50-one-piece-bathing-suit-tie-dye-pastel-turquoise-7-8/-/A-1001387050",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-piped-thin-strap-one-piece-swimsuit/-/A-1002306200",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-cutout-one-piece-swimsuit/-/A-1002511792",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-guard-solid-wide-strap-one-piece-swimsuit/-/A-1002305764",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-pinafore-one-piece/-/A-91519376",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-upf50-halter-one-piece/-/A-1001910641",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-floral-print-textured-one-pc-swimsuit/-/A-1001718344",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-waterfall-one-piece-swimsuit/-/A-90384094",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-upf50-halter-one-piece/-/A-1001910646",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-sonic-bloom-thin-strap-one-piece-swimsuit/-/A-1001529589",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-single-ruffle-one-piece/-/A-89194098",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/dragonwing-tulum-one-piece/-/A-1003561095",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-sonar-waves-thin-strap-one-piece-swimsuit/-/A-1001528905",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-women-s-water-polo-suit-black-26/-/A-1002308819",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-guard-solid-thin-strap-one-piece-swimsuit-black-black-26/-/A-1002305758",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/iswim-spirit-wide-strap-one-piece-swimsuit-22-40/-/A-1001332963",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-guard-solid-micro-back-one-piece-swimsuit-navy-26/-/A-1002309117",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-watermelon-thin-strap-one-piece-swimsuit/-/A-1001528465",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-micro-back-one-piece-swimsuit-24-40/-/A-1002307563",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-starfish-print-textured-one-pc-swimsuit/-/A-1001782065",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-bomb-pop-checker-print-one-pc-halter-swimsuit/-/A-1001718373",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-fenced-in-thin-strap-one-piece-swimsuit/-/A-1001528796",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/my-patriot-princess-striped-one-piece-swimsuit-mia-belle-girls/-/A-1004233841",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-medley-cross-back-one-piece-swimsuit-26-40/-/A-1001331830",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-i/-/A-1001528693",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-fractalicious-thin-strap-one-piece-swimsuit/-/A-1002288004",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-mermaid-fancy-foil-thin-strap-one-piece-swimsuit-youth/-/A-1001528409",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-tie-back-one-piece-swimsuit-24-40/-/A-1002307641",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-chlorine-resistant-racerback-one-piece-swimsuit/-/A-1002511846",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/dragonwing-malibu-one-piece/-/A-1003561086",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/one-piece-smocked-swimsuit-twilight-blossoms-charlie-lou-baby/-/A-1002579409",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/andy-evan-toddler-palm-leaf-embossed-one-pc-puff-sleeve-swimsuit/-/A-1001618316",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-polka-dot-ruffle-one-piece-swimsuit-navy-4/-/A-1003474534",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-infant-little-girls-one-piece-halter-floral-heart-print-swimsuits/-/A-1003474580",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-wrap-seersucker-one-piece-swimsuit/-/A-88500763",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-emma-weyant-saint-tropez-pearl-karlie-one-piece-swimsuit-26-40/-/A-1001529483",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girl-round-neck-one-piece-swimsuit-gottex-4t/-/A-1001400732",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girl-juliette-one-piece-pq-swim/-/A-1004815939",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-one-piece-swimsuit-multicolored/-/A-1004084062",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-one-piece-floral-print-camikini-swimsuit/-/A-1003651653",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/dragonwing-st-lucia-one-piece/-/A-1003561083",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-guard-piped-thin-strap-one-piece-swimsuit-black-red-26/-/A-1002305976",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-arrowhead-thin-strap-one-piece-swimsuit-22-40/-/A-1002288174",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-women-s-camo-water-polo-suit-black-multi-26/-/A-1002287829",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girl-one-piece-bather-dear-georgie/-/A-1001774742",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-camouflage-micro-back-one-piece-swimsuit-24-40/-/A-1001530236",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-hydrolast-artsy-thin-strap-one-piece-swimsuit/-/A-1001530109",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-alex-gretchen-walsh-fast-lane-robyn-micro-back-one-piece-swimsuit/-/A-1001529947",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-wild-thing-wide-strap-one-piece-swimsuit/-/A-1001529607",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-alex-gretchen-walsh-boardwalk-breeze-lizzie-cross-back-one-piece-swimsuit-26-40/-/A-1001529731",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-groovy-zodiac-sagittarius-thin-strap-one-piece-swimsuit/-/A-1001529655",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-groovy-zodiac-aquarius-thin-strap-one-piece-swimsuit/-/A-1001529575",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-emma-weyant-monaco-treasures-karlie-one-piece-swimsuit/-/A-1001529477",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-alex-gretchen-walsh-tidal-taffy-tracy-double-strap-one-piece-swimsuit-26-40/-/A-1001529472",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-groovy-zodiac-virgo-thin-strap-one-piece-swimsuit/-/A-1001529387",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-alex-gretchen-walsh-firecracker-lizzie-cross-back-one-piece-swimsuit/-/A-1001529316",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-x-she-is-this-limited-edition-melanin-wide-strap-cross-back-one-piece-swimsuit-26-40/-/A-1001529156",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-groovy-zodiac-cancer-thin-strap-one-piece-swimsuit-22-44/-/A-1001529151",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-donut-dreams-thin-strap-one-piece-swimsuit/-/A-1001528974",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-sea-jellies-thin-strap-one-piece-swimsuit/-/A-1001528778",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-checkmate-wide-strap-one-piece-swimsuit/-/A-1001528720",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-molecule-usa-wide-strap-cross-back-one-piece-swimsuit/-/A-1001528527",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-unicorn-dreams-foil-thin-strap-one-piece-swimsuit-youth/-/A-1001528367",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girl-kids-textured-round-neck-one-piece-swimsuit-gottex/-/A-1001143499",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girl-zip-up-rash-guard-one-piece-swimsuit-gottex/-/A-1001143428",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-new-waves-thin-strap-one-piece-swimsuit/-/A-1001333744",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-paris-love-letters-micro-back-one-piece-swimsuit/-/A-1001333431",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-paris-sunset-wide-strap-one-piece-swimsuit/-/A-1001332893",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-paris-city-lights-thin-strap-one-piece-swimsuit/-/A-1001332049",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-paris-trend-setter-wide-strap-cross-back-one-piece-swimsuit/-/A-1001332038",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-paris-metro-pop-thin-strap-one-piece-swimsuit/-/A-1001331972",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/sporti-paris-twilight-thin-strap-one-piece-swimsuit/-/A-1001331869",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/girl-s-harlo-bubble-one-piece-vignette/-/A-1001251517",
      tags: "Girl, One-piece Swimsuits",
    },
    {
      url: "https://www.target.com/p/alexa-rose-girl-s-opaque-tights/-/A-90015041",
      tags: "Girl, Over the Knee Socks",
    },
    {
      url: "https://www.target.com/p/girls-overalls-cat-jack/-/A-85428619",
      tags: "Girl, Overalls",
    },
    {
      url: "https://www.target.com/p/girls-39-wide-leg-baggy-denim-overalls-cat-38-jack-8482-dark-wash/-/A-94492242",
      tags: "Girl, Overalls",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-overalls-west-lake-medium-wash/-/A-82890149",
      tags: "Girl, Overalls",
    },
    {
      url: "https://www.target.com/p/girl-wool-overalls-petit-confection/-/A-1001376664",
      tags: "Girl, Overalls",
    },
    {
      url: "https://www.target.com/p/girl-kids-chambray-pocket-overalls-copenhagen-delights/-/A-1000915553",
      tags: "Girl, Overalls",
    },
    {
      url: "https://www.target.com/p/rothschild-big-girls-faux-wool-bandmaster-military-dress-coats/-/A-1000395571",
      tags: "Girl, Overcoats",
    },
    {
      url: "https://www.target.com/p/rothschild-little-girls-faux-wool-bow-detail-dress-coats/-/A-1000402772",
      tags: "Girl, Overcoats",
    },
    {
      url: "https://www.target.com/p/rothschild-big-girls-faux-wool-sparkle-bow-dress-coats/-/A-1000402770",
      tags: "Girl, Overcoats",
    },
    {
      url: "https://www.target.com/p/rothschild-little-girls-faux-wool-bandmaster-military-dress-coat-with-hat/-/A-1000395575",
      tags: "Girl, Overcoats",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-solid-color-or-plaid-pattern-cartoon-bear-decoration-quilted-warm-coat/-/A-1004588478",
      tags: "Girl, Overcoats",
    },
    {
      url: "https://www.target.com/p/just-love-plush-pajama-pants-for-girls-buffalo-plaid-fleece-pjs/-/A-90518691",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-flannel-pajama-pants/-/A-87699303",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/grumpy-gorgeous-girl-s-fairisle-pajama-pants/-/A-93997176",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/just-love-girls-pajama-pants-cute-pj-bottoms-for-girls/-/A-90584324",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/just-love-girls-pajama-pants-cute-pj-bottoms-for-girls/-/A-90584293",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/just-love-girls-pajama-pants-cute-pj-bottoms-for-girls/-/A-90584174",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/harry-potter-big-girls-hogwarts-house-crest-jogger-pajama-set-all-houses/-/A-84628610",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/barbie-girls-so-extra-tie-dye-lounge-sleep-jogger-kids-sweat-pants/-/A-92711269",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/5-more-minutes-girl-s-watercolor-high-pile-fleece-lounge-pant/-/A-94109167",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/harry-potter-big-girls-hogwarts-houses-crest-lounge-pants-pajamas/-/A-1004473503",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/grumpy-gorgeous-girl-s-tie-dye-pajama-pants/-/A-94109163",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/seven-times-six-pokemon-girls-pikachu-tie-dye-kids-cuffed-pull-on-jogger-pants-sweat-pants-pink/-/A-1001035126",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/grumpy-gorgeous-girl-s-plaid-pajama-pants/-/A-93996653",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/grumpy-gorgeous-girl-s-plaid-pajama-pants/-/A-93997220",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-wonder-woman-vintage-allover-pattern-pajama-pants-vintage-wonder-woman/-/A-84701985",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/just-love-girls-pajama-pants-cute-pj-bottoms-for-girls-45610-blkfus-7-8-sioc/-/A-1001321924",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/mean-girls-on-wednesdays-we-wear-pink-girls-tossed-print-pajama-pants-pink/-/A-1003215452",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-pjs-all-over-print-square-icons-lounge-pajama-pants-multicolored/-/A-1003240422",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/girl-lounge-pants-preppy-goose/-/A-1002669064",
      tags: "Girl, Pajama Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-lilo-38-stitch-angel-coat-pajama-set-blue/-/A-92903722",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-button-up-coat-and-pajama-set-art-class/-/A-92766694",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-hello-kitty-button-up-pajama-set-pink/-/A-94222589",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-2pc-tank-top-pajama-set-cat-jack/-/A-93442954",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-squishmallows-button-up-pajama-set-pink/-/A-94222607",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-wicked-pajama-set-light-pink/-/A-94222621",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-3pc-printed-short-sleeve-pajama-set-cat-jack/-/A-92766664",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-pajama-set-white/-/A-93758595",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-barbie-coat-pajama-set-pink/-/A-92743975",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-disney-princess-button-up-pajama-set-purple/-/A-94222610",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-tight-fit-tank-pajama-set-blue/-/A-94222609",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-stitch-tight-fit-tank-pajama-set-green/-/A-94222616",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-smileyworld-graphic-t-shirt-boxer-pajama-set-blue/-/A-94222604",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-snoopy-graphic-t-shirt-boxer-pajama-set-white/-/A-94222605",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-pointelle-pajama-set-art-class/-/A-92766746",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-2pc-short-sleeve-tight-fit-rib-knit-pajama-set-cat-jack/-/A-94035545",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-barbie-graphic-t-shirt-boxer-pajama-set-pink/-/A-94222585",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-care-bears-graphic-t-shirt-boxer-pajama-set-white/-/A-94222588",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-pikachu-tight-fit-tank-pajama-set-pink/-/A-94222615",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-pok-233-mon-3pc-pajama-set-pink/-/A-92903723",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-moana-2pc-short-sleeve-pajama-set-orange-white/-/A-92903706",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-disney-princess-3pc-pajama-set-blue/-/A-92903708",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-snoopy-3pc-pajama-set-blue/-/A-92743971",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-ms-rachel-2pc-short-sleeve-snug-fit-cotton-pajama-set-blue/-/A-92759929",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-cotton-tie-dye-short-pajamas/-/A-89198948",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-39-princess-peach-3pc-pajama-set-purple/-/A-92903727",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-rena-rouge-ladybug-girls-pullover-pajama-shirt-and-shorts-little-kid-to-big-kid/-/A-87441983",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-cotton-short-pajamas-classic-prints/-/A-93871386",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-cotton-short-striped-pajamas/-/A-89301992",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-cotton-short-pajamas-animal-prints/-/A-93871276",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/squishmallows-little-big-girl-s-cozy-long-sleeve-4-piece-pajama-set/-/A-92199856",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/wonder-woman-big-girls-logo-mesh-tank-shorts-pj-set-red/-/A-88135767",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-cotton-pajamas-classic-prints/-/A-93812762",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-cotton-easter-pajamas/-/A-89927150",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-cotton-tie-dye-pajamas/-/A-89398508",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dog-man-youth-short-sleeve-shirt-blue-wash-sleep-pajama-pants-set/-/A-1000083225",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-little-girls-unicorn-love-shirt-and-shorts-2-pc-pajama-set-unicorn-love/-/A-84207261",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-short-sleeve-jersey-pajama-shorts-set-with-matching-hair-scrunchie/-/A-85960219",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-lounge-pajama-shirt-and-pajama-shorts-sleep-set/-/A-1003111024",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-gryffindor-house-crest-tank-top-and-short-pajama-2pc-set/-/A-84243137",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-cotton-short-pajamas/-/A-93823649",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-short-sleeve-pajama-shorts-set-ribbed-milky-jersey-or-pointelle-knit/-/A-1001910178",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-christmas-pajamas-red-and-white-striped/-/A-93303113",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-little-gryffindor-house-crest-cotton-tank-top-pajama-short-set/-/A-1000083788",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/colorful-dots-shorts-sleeve-pajamas/-/A-93131017",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-cotton-solid-short-pajamas/-/A-89194766",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-mermaid-print/-/A-93334888",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-big-girls-marauders-map-racerback-pajama-short-set/-/A-91927985",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-cotton-striped-girls-pajamas/-/A-89619077",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-girl-s-2-piece-nightgown-with-slippers-pajama-set/-/A-92073768",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-sleeveless-tank-top-jersey-pajama-shorts-set-with-matching-hair-scrunchie/-/A-85960235",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/cherries-shortsleeve-pajamas/-/A-93131356",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-lilo-and-stitch-pajamas-set-4-piece-long-sleeve-stitch-pajamas-lilo-and-stitch-ohana-2-pack-pajamas-set-light-blue-6/-/A-1004519841",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-short-sleeve-button-down-collared-coat-pajama-set-with-matching-scrunchie/-/A-85960244",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-short-sleeve-button-down-coat-pajama-pant-set-with-matching-scrunchie/-/A-1001648927",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-cotton-pajamas-animal-prints/-/A-93813033",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-snoopy-dream-in-color-tie-dye-character-pajama-set-shorts-multicolored/-/A-88871532",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-pajamas-cotton-top-and-fleece-pants/-/A-93826349",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-pack-bamboo-snug-fit-pajama-sets/-/A-1002158849",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-lady-bug-girl-s-every-girl-is-a-super-hero-3-piece-pajama-set/-/A-92073776",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/burt-s-bees-baby-kids-2pc-snug-fit-pajama-set/-/A-91600264",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-super-soft-jersey-snug-fit-pajama-set/-/A-84686968",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/jurassic-world-girls-movie-film-clever-girl-sleep-pajama-set-shorts-blue/-/A-88871500",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-cotton-pajamas-animal-prints/-/A-93860813",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-pajamas-colorful-stripes/-/A-92943965",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-long-sleeve-fleece-pajama-set-2-piece-sizes-4-16/-/A-1000139236",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-long-sleeve-cotton-solid-classic-color-pajamas/-/A-89478998",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-girls-sleep-pajama-set-shorts-red/-/A-89131728",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-wonder-woman-pajamas-tank-top-and-shorts-pajama-set-ww-logo/-/A-84228221",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/cherries-fruits-2-pack-kids-shortsleeve-pajama-sets/-/A-93147132",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-lounge-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-94071447",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dog-man-girls-pajama-set/-/A-1001178135",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rainbow-dreams-youth-girls-pink-white-striped-short-sleeve-shirt-sleep-pants-set/-/A-88947007",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-girl-and-doll-matching-cotton-christmas-pajamas/-/A-89892127",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-ron-weasley-hedwig-owl-hermione-girls-pajama-shirt-and-pants-little-kid-to-big-kid/-/A-87676250",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-little-big-girls-2-piece-pajama-sleepwear-sets/-/A-92545864",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dog-man-youth-pajama-set/-/A-1001178328",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-butterfly-print/-/A-93319680",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-flamingo-print/-/A-93322005",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-boho-solid-color-thermal-pajamas/-/A-89892658",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girl-s-snug-fit-100-cotton-pajama-sets-4-piece-sizes/-/A-1000181925",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/butterflies-kids-pajamas/-/A-93128153",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/nasa-girls-retro-stripes-rocket-sleep-pajama-set-shorts-crewneck-multicolored/-/A-86737078",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-short-sleeve-super-soft-jersey-pajama-pants-set/-/A-85960149",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-tee-and-shorts-pajama-set/-/A-88912331",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-little-big-girls-2-piece-soft-pajama-set/-/A-92555275",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-snoopy-happiness-is-sleeping-in-pajama-set-tank-top-shorts-grey/-/A-88871558",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-love-girls-printed-pajama-sets-snug-fitting-pj-tops-bottoms-for-girls/-/A-1000020804",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-satin-pajama-shirt-and-and-pajama-pants-sleep-set/-/A-1004220661",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-puppy-print/-/A-93335206",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/my-little-pony-a-new-generation-girls-sunny-starscout-friends-pajama-set-grey/-/A-89531471",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-loose-fit-3-piece-pajama-set/-/A-1001714470",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-little-big-girls-2-piece-matching-robe-and-slipper-set/-/A-92265394",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-hufflepuff-ravenclaw-slytherin-gryffindor-girls-pajama-shirt-and-pants-little-kid-to-big-kid/-/A-87857616",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/cozy-club-youth-girls-blue-white-wash-long-sleeve-shirt-sleep-pants-set/-/A-88947070",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/happy-fruit-shortsleeve-pajamas/-/A-93280678",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/my-little-pony-retro-rainbows-sunshine-character-group-youth-girl-s-2-pack-blue-wash-pajama-set/-/A-1001009909",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/love-cat-sparkles-youth-short-sleeve-shirt-pink-striped-sleep-pajama-pants-set/-/A-94233340",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-girls-be-yourself-girl-power-2-piece-pajama-set/-/A-88999445",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-christmas-pajamas-red-and-green-striped/-/A-93302825",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-classic-solid-color-thermal-pajamas/-/A-89892771",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/cherries-sunflowers-2-pack-kids-shortsleeve-pajama-sets/-/A-93147160",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-ballerina-print/-/A-93319644",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hogwarts-house-crest-sleep-pajama-set-tank-top-shorts-grey/-/A-88871588",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-unicorn-purple-print/-/A-93322065",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-easter-pajamas-bunny-print/-/A-92898404",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-pajamas-horse-print/-/A-92897849",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-together-we-shine-characters-sketch-sleep-pajama-set-shorts-multicolored/-/A-88871510",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-spirit-untamed-movie-horse-lucky-sleep-pajama-set-shorts-crewneck-pink/-/A-86736911",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-unicorn-rainbow-print/-/A-93335767",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-halloween-pajamas-skulls-print/-/A-93260746",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-pajamas-snoopy-and-woodstock-shirt-and-shorts-pajama-set-snoopy-and-woodstock/-/A-84228413",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-ruh-roh-i-woke-up-like-this-jogger-sleep-pajama-set-multicolored/-/A-89531443",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-softsnooze-viscose-from-bamboo-toddler-girls-ruffle-long-sleeve-pajama-set/-/A-93908263",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-girl-s-vacay-2-piece-short-sleeve-shirt-and-shorts-pajama-set/-/A-92083480",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-wonder-woman-strong-and-fierce-shirt-and-shorts-pajama-set-strong-and-fierce/-/A-84628723",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mattel-girls-barbie-fantasy-mermaid-princess-sleep-pajama-set-shorts-pink/-/A-87252791",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/believe-in-magic-youth-girls-pink-white-striped-short-sleeve-shirt-pant-set/-/A-88947013",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/the-grinch-youth-girl-long-sleeve-holiday-pajama-set/-/A-1004578890",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/gabby-s-dollhouse-girls-a-meow-zing-friends-2-piece-pajama-sleep-set/-/A-1003105375",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/catherine-malandrino-little-big-girls-4-piece-cat-print-pajama-sets/-/A-1004619272",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-superman-supergirl-americana-yoga-pajama-set/-/A-1000549126",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-love-girls-solid-pajama-sets-snug-fitting-ribbed-pj-tops-bottoms-for-girls/-/A-92401042",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mattel-girls-barbie-dream-team-unicorn-best-friend-sleep-pajama-set-pink/-/A-85922326",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-softsnooze-big-girls-ruffle-short-sleeve-pajama-set/-/A-1004248264",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-valentines-pajamas-heart-print/-/A-93334716",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/believe-in-magic-youth-girls-pink-white-striped-long-sleeve-shirt-pant-set/-/A-88947025",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-super-soft-jersey-long-sleeve-snug-fit-pajama-set/-/A-91944265",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-llamma-interactive-pajama-set/-/A-93955671",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-pajama-shirt-pants-and-slippers-3-piece-little-kid-to-big-kid/-/A-89056823",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-matching-family-pajama-shirt-and-pants-sleep-set-little-kid-to-adult/-/A-1000341457",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/butterflies-shortsleeve-pajamas/-/A-93128141",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/friends-tv-show-logo-girls-rather-be-watching-sleep-jogger-pajama-set-multicolored/-/A-86221195",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-little-big-girls-2-piece-long-sleeve-pajama-set/-/A-1003676897",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-long-sleeve-cotton-solid-boho-color-pajamas/-/A-89478497",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/kids-3-pack-pajamas-shortsleeve-set-yellow-flowers-cherries-sunflowers/-/A-93438525",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-pajamas-rainbow-print/-/A-92948826",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/posh-peanut-lana-leopard-long-sleeve-basic-pajama/-/A-1001771819",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hogwarts-rainbow-hologram-shirt-and-shorts-pajama-set-black/-/A-84120815",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-little-big-girls-short-sleeve-2-piece-pajama-sets/-/A-92555248",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/my-little-pony-a-new-generation-girls-sunny-starscout-sleep-pajama-set-white/-/A-89531459",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-snoopy-born-to-hug-unisex-child-2-piece-sleep-pajama-set-multicolored/-/A-88858067",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-big-girls-hogwarts-house-crest-racerback-tank-and-shorts-pajama-lounge-set/-/A-84243115",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-whale-print/-/A-93334511",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dreamworks-trolls-girls-poppy-happy-sleep-pajama-set-shorts-crewneck-multicolored/-/A-86737067",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-princess-doll-unicorn-unisex-child-2-piece-sleep-pajama-set-multicolored/-/A-88858029",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/kids-adaptive-2pc-port-access-pajama-set-cat-jack-green/-/A-92199298",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-sweeties-classic-pajama-set-posh-peanut/-/A-1003607938",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-justice-league-wonder-woman-girls-pullover-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-87574873",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lankybox-girls-pajama-set/-/A-1001178227",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-velour-pajama-pant-sleep-set/-/A-87674333",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/friends-tv-show-girls-tv-series-logo-3-piece-pajama-shortie-lounge-set/-/A-88151736",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/chick-pea-baby-all-cotton-4pc-pajama-set-for-baby-girls-cute-and-comfy-sleepwear/-/A-1001012000",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/green-eggs-ham-sam-i-am-girl-s-2-pack-pajama-set/-/A-1004158063",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-love-girls-printed-pajama-sets-snug-fitting-cotton-pj-tops-bottoms-for-girls/-/A-92410810",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-characters-the-gang-mystery-machine-pajama-set-shorts-multicolored/-/A-88871513",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-woke-up-this-cute-pajamas-shirt-and-pants-jogger-pajama-set/-/A-84228156",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-kids-superman-girls-boys-2-piece-tight-fit-youth-pajama-set-multicolored/-/A-87330160",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-pajamas-dinosaur-print/-/A-92943573",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-hogwarts-castle-shirt-and-shorts-pajama-set-all-4-houses/-/A-84628451",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-pajamas-dog-paw-print/-/A-92711073",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-coat-of-arms-sleep-tight-fit-family-pajama-set/-/A-87330552",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-super-hero-girls-girl-power-cityscape-matching-family-pajama-set/-/A-86955858",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-honeydukes-wizarding-world-sleep-pajama-set-shorts-pink/-/A-87252800",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-softsnooze-viscose-from-bamboo-big-girls-ruffle-long-sleeve-pajama-set/-/A-93908226",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-novelty-fleece-2-piece-long-sleeved-pajama-sleep-set/-/A-84687063",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/beetlejuice-2-girls-astrid-deetz-betelgeuse-striped-pajama-set-for-kids/-/A-1000401072",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-elephant-print/-/A-93322003",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rene-rofe-girls-gnome-velour-notch-button-down-long-sleeve-pajama-set/-/A-1001197317",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/despicable-me-girls-movie-minions-1-in-a-minion-sleep-pajama-set-shorts-multicolored/-/A-88871530",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-ladybug-vesperia-rena-rouge-girls-pullover-pajama-shirt-and-pants-sleep-set-little-kid-to-big-kid/-/A-86918066",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/hudson-baby-girl-baby-and-toddler-cotton-pajama-set-girl-dino/-/A-89195937",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-briar-classic-pajama-set-posh-peanut/-/A-1002878545",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-prairie-floral-classic-pajama-set-posh-peanut/-/A-1003081849",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/despicable-me-girls-movie-minions-better-together-pajama-set-shorts-pink/-/A-88871520",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/disney-descendants-little-big-girl-s-long-sleeve-2-piece-pajama-set/-/A-92170664",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-modal-blend-big-girls-ruffle-long-sleeve-pajama-set/-/A-93908195",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-i-woke-up-this-cute-snoopy-tie-dye-sleep-pajama-set-shorts-multicolored/-/A-88871560",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-founder-wizarding-world-tight-fit-family-pajama-set/-/A-87330303",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-unicorn-stripes/-/A-93335104",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-viscose-from-bamboo-ruffle-long-sleeve-pajama-set/-/A-1004644957",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448131",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pattern-snug-fit-pajama-set/-/A-87290111",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-holiday-santa-and-reindeer-pajama-set/-/A-1000004774",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/friends-the-tv-series-girls-life-is-better-with-friends-tie-dye-pajama-set-tie-dye/-/A-86736722",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-girls-power-luck-pajama-set-multicolored/-/A-87804405",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-vesperia-girls-pajama-shirt-and-shorts-sleep-set-little-kid-to-big-kid/-/A-87676467",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-disney-lilo-stitch-fleece-pajama-set/-/A-93525209",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-wizarding-world-hogwarts-crest-sleep-pajama-set-shorts-multicolored/-/A-89147916",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-top-and-jogger-bottom-pajama-set/-/A-87289977",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-tie-dye-mystery-machine-shirt-and-shorts-pajama-set-lime-green-tie-dye/-/A-84228361",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-disney-minnie-mouse-pajama-set/-/A-93525215",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-kids-two-piece-button-down-christmas-pajamas/-/A-89931460",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-cotton-matching-family-pajamas-koala-print/-/A-92749855",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-pajamas-flower-pot-print/-/A-93322008",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/5-more-minutes-girl-s-smiley-tank-top-and-shorts-sleep-set/-/A-1002271215",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/looney-tunes-kids-character-boys-girls-2-piece-tight-fit-youth-pajama-set-multicolored/-/A-87330015",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleepy-bear-youth-girls-blue-black-striped-long-sleeve-shirt-sleep-pants-set/-/A-88947027",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-wonder-woman-girls-classic-costume-colors-fleece-pajama-set/-/A-85071705",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-lilo-and-stitch-pajamas-set-4-piece-long-sleeve-stitch-pajamas-lilo-and-stitch-ohana-2-pack-pajamas-set-light-blue-4/-/A-1004519849",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-little-big-girl-s-4-piece-cotton-pajama-set/-/A-92240225",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-mystery-machine-shirt-and-pants-2-pc-pajama-set/-/A-84602842",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/despicable-me-girls-flower-bello-minions-sleep-pajama-sleep-set-shorts-pink/-/A-91158536",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-seamless-longline-bra-matching-boy-short-panty-set-2-pack/-/A-92078129",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-kids-the-flash-girls-boys-2-piece-tight-fit-youth-pajama-set-multicolored/-/A-87329971",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-girl-s-cozy-little-fashionistas-2-piece-long-sleeve-pajama-set/-/A-92083511",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-2pc-short-sleeve-pajama-set-cat-jack/-/A-94445413",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-batman-unisex-youth-child-girls-boys-sleep-tight-fit-pajama-set-multicolored/-/A-87543124",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-sorted-wizarding-world-tight-fit-family-pajama-set/-/A-87330245",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/cry-babies-magic-tears-bumblebee-unisex-child-tight-fit-sleep-pajama-set-black/-/A-1000169743",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-pajamas-where-are-you-chibi-figures-pjs/-/A-84228359",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-kids-super-hero-girls-2-piece-tight-fit-youth-pajama-set-multicolored/-/A-87330122",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-penguin-interactive-pajama-set/-/A-93961685",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-hedgehog-interchangeable-butterfly-pajama-set/-/A-93962687",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/yellow-flowers-dots-2-pack-kids-shortsleeve-pajama-sets/-/A-93438353",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-chill-dog-blue-wash-long-sleeve-shirt-and-pant-set/-/A-88947059",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-child-stylish-best-friends-tight-fit-sleep-pajama-set-black/-/A-88858356",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-sloth-interchangeable-star-pajama-set/-/A-93955672",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/peanuts-girls-snoopy-so-fab-tie-dye-pajamas-shirt-and-shorts-pajama-set-tie-dye/-/A-84228200",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-lilith-classic-pajama-set-posh-peanut/-/A-1003607941",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-watercolor-butterfly-classic-pajama-set-posh-peanut/-/A-1003081878",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/2-piece-short-sleeve-jammie-set/-/A-1004302264",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/the-smurfs-girls-smurfette-pose-shorts-sleep-pajama-set/-/A-1003215458",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-big-girls-batgirl-boom-whak-whoom-tank-pajama-short-set-loungewear-fuchsia/-/A-88042331",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/cozy-club-youth-girls-blue-white-wash-short-sleeve-shirt-sleep-pants-set/-/A-88947008",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rainbow-dreams-youth-girls-pink-white-striped-long-sleeve-shirt-sleep-pants-set/-/A-88947129",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/jojo-siwa-girls-only-shirt-and-pants-2-piece-pajama-set/-/A-88020061",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-chill-dog-youth-girls-blue-white-wash-short-sleeve-shirt-sleep-pants-set/-/A-88947049",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-oversized-new-york-t-shirt-and-boxer-pajama-set-white/-/A-94330053",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-superman-classic-logo-racerback-tank-shorts-pajama-set-superman-logo/-/A-84628753",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-graphic-tank-top-and-shorts-pajama-set-art-class/-/A-94445420",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-batman-gold-foil-logo-racerback-tank-shorts-pajama-set-batman-logo/-/A-84243406",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-s-s-hogwarts-jogger-pj-pajamas-set/-/A-85922217",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/leveret-matching-family-valentines-pajamas-heart-print/-/A-93334904",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-nickelodeon-paw-patrol-skye-long-sleeve-w-pants-pajama-set/-/A-92541296",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-interchangeable-accessory-3d-holiday-graphic-nightgown-and-sock-set/-/A-93955684",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-kids-chibi-character-girls-boys-2-piece-tight-fit-pajama-set-multicolored/-/A-87329918",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/long-sleeve-pajamas-in-blush-butterfly/-/A-1003295144",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/fruit-of-the-loom-girls-snug-fit-4-piece-pajama-set/-/A-1002684596",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/miraculous-tales-of-ladybug-cat-noir-girls-tight-fit-sleep-pajama-set-red/-/A-88858210",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/milkberry-rayon-from-bamboo-infant-to-toddler-pajama-set-for-girls-boys-sizes-12-months-5t/-/A-1000018035",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/addams-family-wednesday-girls-pajamas-tonight-was-torture-sleep-set/-/A-1003215456",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lev-baby-girls-buttery-soft-makeup-2-piece-long-sleeve-pajama-set/-/A-1002930125",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-softsnooze-toddler-girls-ruffle-short-sleeve-pajama-set/-/A-1004248323",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-stand-together-ron-hermione-sleep-pajama-set-shorts-black/-/A-86736999",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-hermione-hogwarts-crest-athletic-jogger-pajama-2pc-set/-/A-85922295",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/tiny-knot-co-toddler-children-s-girls-buttery-soft-durable-tagless-tencel-modal-pajama-set/-/A-1001714395",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-philomena-classic-pajama-set-posh-peanut/-/A-1002357936",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rene-rofe-girls-snowflake-3pc-henley-long-sleeve-pajama-pants-set/-/A-1001657881",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-vintage-pink-rose-classic-pajama-set-posh-peanut/-/A-1001576777",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/polly-pocket-little-girls-best-friends-shirt-and-shorts-2-pc-pajama-set-best-friends/-/A-84593570",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/polly-pocket-girls-animated-series-heart-shirt-pants-jogger-pajama-set-purple/-/A-86052596",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/milkberry-rayon-from-bamboo-short-sleeve-pajama-set-for-girls-boys-sizes-12-months-5t/-/A-1000513761",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/furby-you-are-wonderful-youth-long-sleeve-shirt-cloud-wash-sleep-pajama-pants-set/-/A-1001575097",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sleep-on-it-girls-2-piece-hacci-pajama-set-with-matching-scrunchie/-/A-89914677",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-graphic-t-shirt-and-pants-pajama-set-cat-jack/-/A-94445415",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/posh-peanut-erin-classic-pajama-set/-/A-1001576837",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/5-more-minutes-girl-s-teddy-bear-high-pile-fleece-jacket-and-pants-pj-set/-/A-93996728",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/toddler-rosalinda-classic-pajama-set-posh-peanut/-/A-1003081866",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/polly-pocket-girls-best-friends-are-stronger-together-sleep-pajama-set-multicolored/-/A-87711830",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/scooby-doo-girls-unisex-child-relp-daphne-velma-character-pajama-set-multicolored/-/A-87543152",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/wednesday-addams-girls-striped-sleep-pajama-set-shorts-and-shirt-black/-/A-91158458",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/friends-girls-pajama-pants-and-shirt-sleep-set-little-kid-to-big-kid/-/A-87853920",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-briana-classic-pajama-set-posh-peanut/-/A-1003607931",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-ellery-classic-pajama-set-posh-peanut/-/A-1002357931",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-paw-patrol-short-sleeve-and-shorts-pajama-set/-/A-1002358104",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/grumpy-gorgeous-girl-s-spiderweb-pajama-set/-/A-1002295792",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/pj-masks-toddler-girls-gekko-catboy-owlette-sleep-pajama-sleep-set-shorts-pink/-/A-91158480",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/yellow-flowers-cherries-2-pack-kids-shortsleeve-pajama-sets/-/A-93438376",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-no-such-thing-as-too-extra-fleece-2-piece-pajama-set/-/A-88996364",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/pj-masks-girls-gekko-catboy-owlette-to-the-task-heroes-pajama-set-red-pink/-/A-1003330284",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/nickelodeon-jojo-siwa-girls-jojo-and-bowbow-shine-2-piece-pajama-pant-set/-/A-88159047",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/despicable-me-toddler-girls-minions-chibi-bello-raglan-sleep-pajama-set-multicolored/-/A-86736436",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-antoinette-classic-pajama-set-posh-peanut/-/A-1002878536",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-girls-rainbow-foil-hogwarts-crest-pajama-jogger-set-multicolor/-/A-84628819",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/barbie-girls-princess-vibes-characters-sleep-pajama-set-tank-top-shorts-pink/-/A-88871600",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-super-hero-girls-character-sleep-pajama-set-short-blue/-/A-86737230",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/sesame-street-girls-bff-elmo-abby-cadabby-sleep-pajama-sleep-set-shorts-pink/-/A-91158464",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-chill-dog-blue-wash-and-rainbow-dreams-short-sleeve-youth-girls-2-pack-pajama-set/-/A-88594822",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/looney-tunes-girls-this-is-how-i-chill-tossed-tweety-bird-2-piece-pajama-set-yellow/-/A-1003105377",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-wonder-woman-gold-foil-logo-shirt-and-shorts-pajama-set-ww-logo/-/A-84228406",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dc-comics-girls-wonder-woman-logo-tank-top-and-shorts-pajama-set-wonder-woman-logo/-/A-84102531",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/harry-potter-gryffindor-house-crest-cotton-tank-short-pajama-2pc-set-gryffindor-14-red/-/A-84243145",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-sorrento-floral-classic-pajama-set-posh-peanut/-/A-1003081872",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-annie-classic-pajama-set-posh-peanut/-/A-1002357958",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/toddler-bridget-classic-pajama-set-posh-peanut/-/A-1003081764",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dots-sunflowers-2-pack-kids-shortsleeve-pajama-sets/-/A-93651725",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448086",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448076",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/dots-fruits-2-pack-kids-shortsleeve-pajama-sets/-/A-94091765",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004460156",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448082",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448141",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448132",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004461563",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shorite-pajamas-set/-/A-1004460152",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004450840",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/minimoi-2-piece-girls-cameo-florals-100-cotton-pajama-set-soft-pink-12/-/A-1003977407",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mightly-kids-fair-trade-100-organic-cotton-tight-fit-shortie-pajamas-set/-/A-1004448146",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-t-shirt-and-flannel-pants-pajama-set-art-class/-/A-94445421",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-los-angeles-tank-top-and-pants-pajama-set-white/-/A-94311227",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-halloween-ghost-tank-top-and-pants-pajama-set-purple/-/A-94311229",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-4pc-bluey-long-sleeve-pajama-set-blue/-/A-94416504",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-4pc-barbie-pajama-set-pink/-/A-94330057",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-4pc-lilo-stitch-long-sleeve-halloween-pajama-set-black/-/A-94416505",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-4pc-hello-kitty-halloween-pajama-set-orange/-/A-94330051",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-harvard-tank-top-and-pants-pajama-set-red/-/A-94311228",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-4pc-lilo-stitch-long-sleeve-pajama-set-white/-/A-94416503",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-oversized-halloween-snoopy-t-shirt-and-boxer-pajama-set-white/-/A-94330052",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-pocket-fleece-pajama-set/-/A-90112144",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/textiel-trade-girl-s-miraculous-ladybug-long-pajama-set/-/A-90216372",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/just-love-girls-cotton-pajama-sets-for-comfortable-sleepwear/-/A-1004798572",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/the-cat-in-the-hat-character-title-girl-s-2-pack-pajama-set/-/A-1004784311",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/mary-engelbreit-butterfly-garden-pajama-set-girl-pink/-/A-1004709001",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-girls-modal-blend-ruffle-long-sleeve-pajama-set/-/A-1004645023",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-modal-blend-ruffle-long-sleeve-pajama-set-signature-rear-ruffles/-/A-1004644993",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-viscose-from-bamboo-ruffle-long-sleeve-pajama-set-signature-rear-ruffles/-/A-1004644953",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/ruffle-pajama-set-victorian-whimsy-charlie-lou-baby/-/A-1004445534",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girl-s-summer-2-piece-outfit-short-sleeve-twist-crop-top-and-print-shorts-sets-cute-clothing-set-3-12y/-/A-1003984043",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/minimoi-2-piece-kids-sweet-dreams-cotton-rich-fleece-3d-embossed-pajama-set/-/A-1003977731",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/minimoi-girls-sweet-dreams-cotton-rich-night-gown-with-embossed-3d-graphics/-/A-1003977474",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/minimoi-girls-cameo-florals-100-cotton-pullover-nightgown/-/A-1003977432",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/minimoi-2-piece-girls-kind-hearts-rayon-blend-pull-on-pajama-set/-/A-1003977421",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/minimoi-2-piece-kids-ribbed-cotton-blend-solid-color-button-down-pajama-set-deep-water-7/-/A-1003977409",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/pajama-set-mama-s-girl-charlie-lou-baby/-/A-1003296530",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/toddler-melinda-classic-pajama-set-posh-peanut/-/A-1003081841",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/toddler-etta-classic-pajama-set-posh-peanut/-/A-1003081835",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lev-baby-girls-buttery-soft-rainbow-gemstone-2-piece-long-sleeve-pajama-set/-/A-1003054370",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lev-baby-girls-viscose-from-bamboo-princess-2-piece-long-sleeve-pajama-set/-/A-1003026036",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/lev-baby-girls-buttery-soft-donuts-2-piece-long-sleeve-pajama-set/-/A-1002929662",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-tank-top-and-shorts-pajama-set-rainbow-on-light-coral/-/A-1002806794",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-two-piece-short-pajama-set-small-pink-flowers-on-pale-pink-background/-/A-1002806778",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-two-piece-short-pajama-set-small-pink-and-blue-flowers-on-light-sage/-/A-1002806752",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/printed-organic-cotton-long-sleeve-top-and-pant-pajama-set-pale-pink-flowers-on-neutral-lilac/-/A-1002803656",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/organic-cotton-short-sleeve-top-and-pant-pajama-set-pink-and-blue-butterflies-on-old-pink/-/A-1002803597",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/girls-hooded-top-with-flared-leggings-set/-/A-1002594741",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/pajama-set-groovy-floral-charlie-lou-baby/-/A-1002106347",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/furby-new-you-are-wonderful-girl-s-blue-wash-short-sleeve-tee-sleep-pants-set/-/A-1001357006",
      tags: "Girl, Pajama Sets",
    },
    {
      url: "https://www.target.com/p/kids-bullseye-matching-family-pajama-t-shirt-wondershop-red/-/A-92088989",
      tags: "Girl, Pajama T-Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-soft-jersey-sleep-top/-/A-94030334",
      tags: "Girl, Pajama T-Shirts",
    },
    {
      url: "https://www.target.com/p/girls-wide-leg-pants-elastic-waistband-pleated-pants-for-kids-girls-palazzo-pants-with-pockets-girls-casual-trousers/-/A-92364699",
      tags: "Girl, Palazzo Pants",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girls-4-pack-active-fleece-jogger-sweatpants/-/A-1000170415",
      tags: "Girl, Pant Sets",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-3-pack-velour-jogger-sweatpants-sets/-/A-1000020854",
      tags: "Girl, Pant Sets",
    },
    {
      url: "https://www.target.com/p/disney-toddler-little-girl-s-1-piece-or-2-piece-tutu-skirt-with-legging-sets/-/A-92501926",
      tags: "Girl, Pant and Skirt Sets",
    },
    {
      url: "https://www.target.com/p/girls-pantyhose-2pk-cat-jack-153/-/A-51263376",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/girls-2pk-pantyhose-cat-jack-153/-/A-53316216",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-essential-sheer-nylon-pantyhose/-/A-92513316",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-sweet-blossoms-girls-sheer-floral-lace-pantyhose/-/A-92459647",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-mini-me-mini-net-girls-fishnet-tights-nude-10-12/-/A-1004540121",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-3-pair-pack-basic-sheer-30-denier-tights-nude-a-14-16/-/A-1004546517",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-honeycomb-knit-sheer-nylon-tights-glacier-gray-8-10/-/A-1004590275",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-sheer-vine-opaque-tights/-/A-93671015",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-art-deco-sheer-net-nylon-tights-black-l/-/A-1004634333",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-glittering-butterfly-sheer-nylon-tights/-/A-1004634257",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-polka-dot-heart-sheer-girls-tights/-/A-1004633981",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-floral-embroidery-roselle-sheer-tights/-/A-1004633371",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-sparkling-glitter-heart-tights/-/A-1004613828",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-women-s-printed-lace-back-nylon-tights/-/A-1004613024",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-sheer-geo-art-deco-inspired-tights-black-2-4/-/A-1004592883",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-chevron-wave-sheer-nylon-tights/-/A-1004569023",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-flower-bunches-sheer-tights/-/A-1004568982",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-railroad-pointelle-nylon-tights/-/A-1004541160",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/memoi-girls-micronet-soft-breathable-tights-blush-4-6/-/A-1004540685",
      tags: "Girl, Pantyhose",
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-girls-heavyweight-faux-fur-trim-fleece-lined-jackets/-/A-1002187164",
      tags: "Girl, Parkas",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-fleece-lined-coat/-/A-93568798",
      tags: "Girl, Parkas",
    },
    {
      url: "https://www.target.com/p/sportoli-girls-fleece-lined-heavy-winter-anorak-jacket-coat-faux-fur-trim-zip-off-hood/-/A-90368170",
      tags: "Girl, Parkas",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-winter-coat-with-faux-fur-hood-parka-jacket/-/A-90227397",
      tags: "Girl, Parkas",
    },
    {
      url: "https://www.target.com/p/canada-weather-gear-girls-winter-coat-quilted-heavyweight-puffer-parka-coat-warm-winter-jacket-for-girls-7-16/-/A-1002048243",
      tags: "Girl, Parkas",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-baby-girls-fleece-lined-parka-jacket-kids-coat/-/A-92699321",
      tags: "Girl, Parkas",
    },
    {
      url: "https://www.target.com/p/ncaa-oklahoma-sooners-girls-ruffle-t-shirt/-/A-94640346",
      tags: "Girl, Peasant Tops",
    },
    {
      url: "https://www.target.com/p/ncaa-michigan-st-spartans-girls-ruffle-t-shirt/-/A-94643171",
      tags: "Girl, Peasant Tops",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-crinkle-jersey-tunic-with-embroidery-dark-old-pink/-/A-1004040329",
      tags: "Girl, Peasant Tops",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-tunic-with-frill-and-print-light-orange-and-ice-cream-cone/-/A-1004049849",
      tags: "Girl, Peasant Tops",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-organic-cotton-tunic-with-frill-and-print-yellow-and-flamingo/-/A-1004049822",
      tags: "Girl, Peasant Tops",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-tunic-top-multicolored/-/A-1003326927",
      tags: "Girl, Peasant Tops",
    },
    {
      url: "https://www.target.com/p/girls-skirts-with-ruffle-sleeve-tops-tie-detail-skirts-ruffled-trim-girls-tops-with-pleated-flutter-skirts/-/A-93313016",
      tags: "Girl, Pencil Skirts",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-long-sleeve-peplum-tee/-/A-90772474",
      tags: "Girl, Peplum Shirts",
    },
    {
      url: "https://www.target.com/p/capezio-deep-neck-clear-back-bra-girls/-/A-84637030",
      tags: "Girl, Plunge Bras",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-jersey-uniform-polo-shirt-cat-38-jack-8482-white/-/A-90221751",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-87922544",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-pique-uniform-polo-shirt-cat-jack/-/A-85251186",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/toddler-girls-short-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-87043613",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-uniform-performance-polo-shirt-cat-38-jack-8482/-/A-94436197",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/toddler-girls-39-long-sleeve-interlock-uniform-polo-shirt-cat-38-jack-8482/-/A-88297987",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-interlock-uniform-polo-shirt-cat-jack/-/A-88923983",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-long-sleeve-uniform-polo-shirt-cat-jack/-/A-94482987",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-adaptive-short-sleeve-uniform-polo-shirt-cat-jack/-/A-94486508",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-peter-pan-collar-polo-shirt/-/A-86739142",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-feminine-fit-interlock-polo-shirt/-/A-86738601",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-short-sleeve-ruffled-peter-pan-collar-knit-shirt/-/A-87826139",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-ruffled-peter-pan-collar-knit-shirt/-/A-87825215",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/levi-s-girls-short-sleeve-polo-shirt/-/A-94708618",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-feminine-fit-interlock-polo-shirt/-/A-86739279",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-mesh-polo-shirt/-/A-86739181",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-big-kids-short-sleeve-banded-bottom-polo-shirt/-/A-87885328",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-mesh-polo-shirt/-/A-86738997",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-long-sleeve-peter-pan-collar-polo-shirt/-/A-86739170",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girl-s-3-button-short-sleeve-stretch-pique-polo-shirts-school-uniform-4-20/-/A-92366479",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-short-sleeve-fitted-interlock-polo-with-picot-collar-feminine-fit/-/A-92365845",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-rapid-dry-polo-shirt/-/A-86739690",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-interlock-polo-shirt/-/A-86739688",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-short-sleeve-fitted-stretch-pique-polo-feminine-fit/-/A-92365664",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-short-sleeve-feminine-fit-rapid-dry-polo-shirt/-/A-1003951355",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-long-sleeve-fitted-stretch-pique-polo-feminine-fit/-/A-92365579",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-interlock-polo-shirt/-/A-86738598",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-4-pack-short-sleeve-soft-jersey-polo-uniform-shirts/-/A-92942211",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/3-pack-girl-s-3-button-short-sleeve-stretch-pique-polo-shirts-school-uniform-4-20/-/A-92366488",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-short-sleeve-performance-polo-with-peter-pan-collar/-/A-92449261",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/5-pack-girl-s-3-button-short-sleeve-stretch-pique-polo-shirts-school-uniform/-/A-93256632",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-long-sleeve-fitted-interlock-polo-with-picot-collar-feminine-fit/-/A-92449363",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-feminine-fit-rapid-dry-polo-shirt/-/A-1003944875",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/studio-3-little-big-girl-s-4-pack-long-sleeve-soft-jersey-polo-uniform-shirts/-/A-93003130",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-long-sleeve-rapid-dry-polo-shirt/-/A-93009863",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-jersey-knit-polo-kids/-/A-1001299013",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-husky-short-sleeve-interlock-polo-shirt/-/A-1004219808",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-jersey-peter-pan-collar-short-sleeve-puff-tee/-/A-92899742",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-polo-soft-jersey-peter-pan-collar-girls-puff-short-sleeve-tee/-/A-92899738",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-peter-pan-blouse-puff-sleeve-button-down-shirt-school-uniform-blouse-3-12-years/-/A-1003249034",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/hanes-girl-ecosmart-jersey-polo-stylish-and-unique-style-2-pack/-/A-1003112094",
      tags: "Girl, Polo Shirts",
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-girls-heavyweight-fleece-lined-puffer-jacket-with-headband/-/A-94072062",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/london-fog-girls-heavyweight-warm-winter-coat-with-faux-fur-trim/-/A-90251397",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-long-coat-puffer-jacket/-/A-92822158",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-girls-heavyweight-color-block-winter-coats/-/A-94041124",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/jessica-simpson-big-girl-s-iridescent-quilted-midweight-winter-puffer-coats/-/A-93568940",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/london-fog-big-girls-heavyweight-fleece-lined-puffer-jacket-with-beanie-hat/-/A-94045784",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-ultra-light-real-down-packable-jacket/-/A-92874883",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-heavy-winter-puffer-jacket-bubble-coat/-/A-90227533",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-reversible-light-puffer-jacket-coat/-/A-90227403",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-baby-girls-mini-fur-lined-puffer-coat-kids-jacket/-/A-92699303",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/sportoli-girls-fleece-lined-quilted-midlength-fur-trimmed-hood-winter-puffer-coats/-/A-88938758",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-zip-up-puffer-jacket-little-kid-to-big-kid/-/A-87616544",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-lilo-stitch-girls-zip-up-puffer-jacket-little-kid-to-big-kid/-/A-93031168",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/london-fog-little-big-girls-heavyweight-faux-fur-lined-hooded-winter-jackets/-/A-94092319",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/l-o-l-surprise-miss-snow-figure-8-prezzie-girls-zip-up-puffer-jacket-little-kid-to-big-kid/-/A-87545035",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/london-fog-girls-heavyweight-warm-winter-coat-with-beanie-hat/-/A-90251847",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/disney-minnie-mouse-girls-winter-coat-puffer-jacket-toddler/-/A-87609915",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/oshkosh-b-gosh-little-big-girls-perfect-heavyweight-color-block-winter-coat/-/A-94041117",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-faux-shearling-lined-heavy-coat-puffer-jacket/-/A-90227464",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/disney-frozen-princess-anna-elsa-girls-zip-up-puffer-jacket-little-kid/-/A-87604440",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/canada-weather-gear-girls-puffer-jacket-lightweight-packable-bubble-coat-water-resistant-outerwear-jackets-for-girls-7-16/-/A-1001919223",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-little-girls-light-puffer-jacket-winter-coat/-/A-90190394",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/members-only-girl-cire-puffer-with-mash-print-lining-jacket/-/A-85607899",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-zip-up-winter-coat-puffer-jacket-toddler-to-little-kid/-/A-89629378",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/bluey-bingo-girls-zip-up-winter-coat-puffer-jacket-toddler-to-little-kid/-/A-89629382",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/dreamworks-gabby-s-dollhouse-pandy-paws-girls-zip-up-puffer-jacket-toddler/-/A-87616550",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-toddler-girls-starlight-winter-coat-mini-fur-lined-kids-jacket/-/A-1004791523",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/rokka-rolla-girls-knee-length-coat-long-puffer-jacket/-/A-1004783821",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/girl-kid-s-floral-puffer-jacket-mayoral/-/A-1003863155",
      tags: "Girl, Puffer Jackets",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-pink-grey-two-fer-vest/-/A-90283470",
      tags: "Girl, Puffer Vests",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-hooded-puffer-vest-kids/-/A-87197587",
      tags: "Girl, Puffer Vests",
    },
    {
      url: "https://www.target.com/p/girls-39-french-terry-wide-leg-pants-cat-38-jack-8482/-/A-94624496",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-french-terry-lounge-pants-art-class/-/A-94600762",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-nylon-track-pants-art-class/-/A-94600764",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-paperbag-waist-gauze-pants-cat-38-jack-8482/-/A-94165605",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-gauze-cabana-pants-cream/-/A-94431055",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-flare-sweater-pants-art-class/-/A-92955213",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-mid-rise-pull-on-embroidered-cargo-flare-jeans-cat-38-jack-8482-light-wash/-/A-91080917",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-tropical-floral-printed-gauze-pants-pink/-/A-94653595",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/authentic-apparel-big-girls-classic-stretch-skinny-leg-school-uniform-pants/-/A-1003286741",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-active-performance-chino-pants/-/A-92889680",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/converse-girls-track-pants/-/A-94687317",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-girls-pull-on-straight-fit-stretch-twill-pant/-/A-92385021",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-girls-soft-cotton-upf-50-jersey-pocket-pants/-/A-90736032",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pull-on-knit-gauze-wide-leg-pants/-/A-91679081",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-pull-on-utility-cargo-pants/-/A-93027682",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/wide-leg-capri-linen-pant-white-and-sage-striped/-/A-1002803722",
      tags: "Girl, Pull-on Pants",
    },
    {
      url: "https://www.target.com/p/girls-pull-on-knit-shorts-cat-jack/-/A-93434673",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-knitted-pull-on-shorts-cat-jack/-/A-89601401",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-high-rise-pull-on-denim-utility-shorts-cat-38-jack-8482/-/A-92956780",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-pull-on-woven-shorts-cat-jack/-/A-94474068",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-fleece-pull-on-shorts-art-class/-/A-94151920",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-foldover-bike-shorts-art-class/-/A-94268742",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-french-terry-dolphin-shorts-art-class/-/A-94600761",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-fleece-shorts-art-class/-/A-94435221",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-knit-terry-shorts-cat-38-jack-8482/-/A-94408555",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-nylon-track-shorts-art-class/-/A-94340879",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-woven-embroidered-shorts-cat-38-jack-8482-white/-/A-93964117",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-ruffle-shorts-art-class/-/A-94350722",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-rosette-sweater-knit-shorts-art-class/-/A-94203942",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-minnie-mouse-gauze-cabana-shorts-pink/-/A-94431048",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-moana-gauze-cabana-shorts-orange/-/A-94431056",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-ribbed-sweater-knit-shorts-art-class/-/A-94203991",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-double-waistband-pull-on-boxer-shorts-art-class/-/A-94133340",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-bluey-cabana-shorts-blue/-/A-94431036",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-woven-shorts-cat-jack/-/A-94636433",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-graphic-terry-shorts-blue/-/A-94431064",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-pull-on-woven-shorts-cat-jack/-/A-93205330",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-disney-stitch-terry-shorts-pink/-/A-94431068",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-fleece-shorts-cat-jack/-/A-94492249",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-french-terry-ruched-side-shorts/-/A-93421495",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-def-leppard-fleece-shorts-light-purple/-/A-93069445",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-2pk-adaptive-knit-shorts-cat-jack-black-pink/-/A-79760523",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-stretch-french-terry-shorts-pink/-/A-93421500",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/converse-girls-french-terry-ruched-side-shorts-violet/-/A-94405038",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-olivia-rodrigo-fleece-shorts-art-class-gray/-/A-93069446",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/converse-174-girls-39-french-terry-shorts/-/A-93421498",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-hello-kitty-tropical-floral-printed-gauze-shorts-pink/-/A-94653596",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-39-french-terry-shorts-cat-38-jack-8482/-/A-94624495",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-cartwheel-shorts/-/A-87254817",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-camp-shorts/-/A-1002512004",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/converse-girls-pull-on-shorts/-/A-94687312",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-woven-shorts/-/A-87254552",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-tough-cotton-bike-shorts/-/A-87254598",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-pull-on-shorts/-/A-88500959",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/hanes-girls-jersey-shorts-3-pack/-/A-1003254551",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-pull-on-solid-shorts/-/A-88499985",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-active-flutter-shorts/-/A-1002038220",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-pull-on-chambray-elastic-waist-shorts/-/A-86508219",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-twill-shorts/-/A-1002511934",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-french-terry-shorts/-/A-88500029",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/french-toast-school-uniform-boys-pull-on-twill-short/-/A-92384298",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/rufflebutts-toddler-girls-active-butterfly-shorts/-/A-1001544390",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-stretch-chino-pull-on-short-kids/-/A-1001269938",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girl-s-convention-wear-lily-shorts-2-tone-danznmotion-25401c/-/A-1003191522",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-swim-shorts-butterflies-on-multicolored-and-black-background/-/A-1004084089",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-pull-on-cinched-waist-linen-short-kids/-/A-91302843",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-mesh-athletic-gym-shorts/-/A-86739856",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/city-threads-usa-made-cotton-girls-soft-upf-50-jersey-pocket-shorts/-/A-91533870",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-french-terry-pull-on-short-kids/-/A-1001269905",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-husky-pull-on-elastic-waist-shorts/-/A-1003620050",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/dragonwing-high-waisted-compression-shorts/-/A-1002526752",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-lands-end-kids-fleece-sweat-shorts/-/A-88829653",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-pull-on-cinched-waist-linen-short-toddler/-/A-91302854",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girl-s-shorts-skirt-danz-n-motion-21412a-sheer-for-ballet-or-modern/-/A-1003121809",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-woven-utility-shorts/-/A-1002177438",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-swim-shorts-multicolored-7-8-years/-/A-1004084081",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-gingham-short-lilac-and-pink/-/A-1003715284",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/deux-par-deux-girl-printed-french-terry-short-pink-and-coral-houses/-/A-1003450039",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/eg-pro-enduro-flex-girl-s-compression-short-graded-inseam/-/A-1001398303",
      tags: "Girl, Pull-on Shorts",
    },
    {
      url: "https://www.target.com/p/girls-high-neck-sweater-tank-top-art-class/-/A-92955214",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-halter-sweater-tank-pullover-sweater-art-class/-/A-94203938",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-striped-halter-sweater-tank-art-class/-/A-94203860",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-39-tank-sweater-cat-38-jack-8482/-/A-94131172",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-39-short-sleeve-pullover-sweater-cat-38-jack-8482/-/A-94472241",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-39-cable-stitch-varsity-sweater-vest-cat-38-jack-8482/-/A-94472261",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-off-the-shoulder-short-sleeve-pullover-sweater-art-class/-/A-92955217",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-short-sleeve-knit-sweater-art-class/-/A-91466609",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/matching-christmas-sweaters-for-family-boys-girls-crew-neck-reindeer-snowflakes-knitted-funny-pullover-sweaters-navy-kids-xl/-/A-1000515722",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/bluey-matching-family-sweater-toddler/-/A-90311792",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-cardigan-sweater-crew-neck-uniform-knit-sweater-button-down-ruffle/-/A-1002516350",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-s-ugly-christmas-sweater-reindeer-jacquard-sweater-knit-pattern-turtle-neck-sweater-green-reindeer-2xl/-/A-1000515777",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-bottom-down-sweater/-/A-94072144",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-bottom-down-sweater/-/A-94041155",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/xoxo-embroidered-chunky-knit-sweater-mia-belle-girls/-/A-1003893332",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-pullover-sweater-cable-knit-soft-comfy-sweater-for-girls-crew-neck-sweater-puff-sleeve-ribbed-knit-cuff/-/A-93599937",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/love-at-first-sight-embroidered-chunky-knit-sweater-mia-belle-girls/-/A-1003919630",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-pullover-sweater-cable-knit-crew-neck-long-sleeve-sweater-knit-tops-mint-green-2xl/-/A-1000857895",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-long-sleeve-cable-knit-sweater-crewneck-pullover-sweaters-kids-chunky-cute-fall-jumper-tops/-/A-1002499824",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/aeropostale-girls-marled-hi-lo-pullover-sweater/-/A-1004775108",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/bluey-matching-family-sweater-little-kid-to-adult/-/A-90311713",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/lands-end-school-uniform-kids-cotton-modal-v-neck-sweater/-/A-86738947",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-flower-faux-shearling-sweater/-/A-90283352",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-kids-retro-striped-cardigan-the-blueberry-hill/-/A-1001116512",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mi-amore-gigi-pink-bottom-down-sweater/-/A-94041144",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-cable-knit-v-neck-sweater/-/A-93590673",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/andy-evan-kids-girls-cable-knit-sweater-vest/-/A-93590664",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-short-sleeve-ruffle-edge-sweater-knit-top-kids/-/A-1001299001",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-christmas-pullover-sweater-holiday-knitwear-crew-neck-long-sleeve-sweater-with-festive-pattern/-/A-1001378490",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-long-sleeve-mock-neck-sweater-with-gold-buttons-kids/-/A-92214557",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-sequins-sweater-mayoral/-/A-1001295555",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-puff-sleeve-ruffle-edge-sweater-kids/-/A-92936798",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-pullover-sweater-crewneck-long-sleeve-solid-soft-knit-sweater/-/A-1002579802",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-bow-sweater-tank-kids/-/A-86524542",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-crewneck-knit-pullover-sweaters-long-lantern-sleeve-oversized-knit-cute-jumper-tops/-/A-1002499666",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-organic-french-collared-keyhole-long-sleeve-sweater-kids/-/A-92936814",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-long-balloon-sleeve-pointelle-pullover-sweater-kids-xx-small/-/A-89359466",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girls-pullover-knit-sweaters-puff-short-sleeve-kids-crewneck-cute-summer-blouse-sweater-tops/-/A-1002473670",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/hope-henry-girls-short-sleeve-peter-pan-collar-sweater-polo-kids-xx-small/-/A-87295927",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-kid-s-tiffany-sweater-vignette-12/-/A-1003530653",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/girl-fringed-sweater-mayoral/-/A-94253999",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/lands-end-kids-meet-and-greet-bow-knit-sweater/-/A-1004848525",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/aeropostale-girls-marled-knit-sweater/-/A-1004773011",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-cartoon-print-pattern-loose-pullover-round-neck-hoodies/-/A-1004684592",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-rabbit-print-pattern-crewneck-long-sleeve-comfy-shirt/-/A-1004682844",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-solid-color-hollow-carved-design-cherry-patched-cardigan/-/A-1004644389",
      tags: "Girl, Pullover Sweaters",
    },
    {
      url: "https://www.target.com/p/mykids-usa-baby-girl-floral-embroidered-pattern-single-breasted-design-knit-cardigan/-/A-1004606856",
      tags: "Girl, Pullover Sweaters",
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
