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
      "url": "https://www.target.com/p/girls-39-10pk-ankle-striped-socks-cat-38-jack-8482/-/A-89823449",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ctm-girls-lace-ruffle-anklet-sock-with-pearl-accent/-/A-90014215",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-8pk-ankle-length-socks-dealworthy-8482/-/A-90629744",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-lightweight-ankle-stripe-38-dot-socks-cat-38-jack-8482-gray/-/A-90850039",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-6pk-ankle-socks-all-in-motion-8482-white-black/-/A-90898572",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-ankle-socks-cat-38-jack-8482-white/-/A-93276929",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-6pk-ankle-length-socks-all-in-motion-8482-white/-/A-93276928",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-lightweight-ribbed-ankle-socks-cat-38-jack-8482/-/A-94472239",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pointelle-cotton-blend-super-soft-anklet-sock/-/A-1003305410",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-3-pair-pack-hi-cut-liner-socks/-/A-1003336501",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Liner Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-ditsy-floral-scalloped-cuff-anklet-sock/-/A-1003430863",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-colored-ruffle-anklet-socks/-/A-1003455534",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-lace-anklet-socks/-/A-1003451485",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-ruffle-eyelet-cotton-blend-anklet-socks/-/A-1003303751",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-triple-roll-cotton-blend-ankle-socks/-/A-1003302099",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-s-kitty-cats-fuzzy-mid-cut-socks-2-pack-gray-one-size/-/A-1003460805",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-crochet-ruffle-trim-mercerized-cotton-blend-ankle-sock/-/A-1003451533",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pretty-in-pearls-cotton-blend-anklet-socks/-/A-1003303863",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-classic-lace-girls-ruffle-anklet-socks/-/A-1003303363",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pom-pom-palooza-girls-ankle-socks/-/A-1003454063",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-tie-dye-mid-cut-cotton-blend-socks-3-pack/-/A-1003452555",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-dual-layer-ruffle-anklet-socks/-/A-1003460267",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-layered-lace-cotton-blend-anklet-socks/-/A-1003303104",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-oversized-tutu-ballerina-anklet-socks/-/A-1003454504",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Leg Warmers",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-open-work-anklet-socks/-/A-1003455580",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-bow-back-anklet-socks/-/A-1003455488",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tulle-bow-anklet-socks/-/A-1003451362",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-dual-layer-eyelet-lace-anklet-sock/-/A-1003305392",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-floral-halo-cotton-anklet-socks/-/A-1003454328",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-bow-trimmed-mercerized-cotton-rich-ankle-sock/-/A-1003451504",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ziggy-double-ring-cotton-blend-anklet-sock/-/A-1003455383",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-neon-multi-pom-pom-cotton-blend-girls-anklet-sock/-/A-1003455256",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-basics-kids-cotton-blend-ankle-socks/-/A-1003304714",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-leopard-girls-fuzzy-non-skid-socks-2-pair-black-one-size/-/A-1003460788",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-multicolor-sequin-cotton-blend-girls-anklet-sock/-/A-1003455270",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-microfiber-tulle-bow-anklet-socks/-/A-1003454266",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-velvet-pleated-girls-cotton-blend-anklet-socks/-/A-1003454133",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pique-stitch-anklet-socks/-/A-1003451245",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-hello-darlin-flower-petal-cotton-blend-girls-anklet-socks/-/A-1003454048",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-cotton-kids-anklet-sock/-/A-1003305514",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-cotton-blend-ankle-socks-3-pack-assorted/-/A-1003409549",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-botanic-sheer-girls-floral-embroidered-anklet-socks/-/A-1003454363",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-cotton-blend-swiss-dot-anklet-socks/-/A-1003430700",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-petite-floral-lace-cotton-blend-anklet-socks/-/A-1003454288",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-herringbone-thin-ribbed-anklet/-/A-1003529758",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-sheer-cotton-blend-flocked-dot-anklet-with-scalloped-cuff/-/A-1003455334",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-silky-side-bow-anklet-socks/-/A-1003455195",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-metallic-leaf-girls-cotton-blend-anklet-socks/-/A-1003454145",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-dual-flower-girls-cotton-blend-anklet-sock/-/A-1003455261",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-lacy-loopsy-girls-cotton-blend-anklet-sock/-/A-1003453832",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-confetti-cotton-blend-anklet-sock/-/A-1003453910",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fuzzy-shimmer-cotton-blend-anklet-socks/-/A-1003455218",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pelerine-cotton-blend-anklet-socks/-/A-1003455236",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-polar-bear-girls-fuzzy-mid-cut-socks/-/A-1003403118",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-knit-openwork-bow-anklet-socks/-/A-1003451097",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-far-out-cotton-blend-lace-ruffle-socks/-/A-1003453592",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-step-and-shimmer-ruffle-anklet-socks/-/A-1003453109",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-faux-fur-cuff-cotton-blend-anklet-socks-charcoal-heather-8/-/A-1003454276",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-glitter-butterfly-cotton-knee-high-socks/-/A-1003364472",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-metallic-scalloped-cotton-blend-anklet-socks/-/A-1003454245",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-bow-anklet-socks/-/A-1003460384",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pointelle-soft-stretch-cotton-anklet-socks/-/A-1003460499",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-floral-button-anklet-socks/-/A-1003460309",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pointelle-dot-anklet-socks/-/A-1003451139",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-flocked-dot-cotton-blend-tulle-anklet/-/A-1003455309",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-blissful-bloom-anklet-socks/-/A-1003460184",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-m-multi-line-anklet-socks/-/A-1003460105",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-snowflake-plush-lined-cozy-socks/-/A-1003334805",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hearts-galore-cozy-sock/-/A-1003334834",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-bubble-stitch-welt-anklet-socks/-/A-1003451397",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-6pk-pure-comfort-organic-cotton-ankle-socks-white/-/A-93666809",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-8pk-ankle-socks-dealworthy-8482-pink/-/A-94472238",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/champion-girls-39-6pk-ankle-socks-white/-/A-94660053",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Quarter Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/nasa-boys-socks-future-astronaut-no-show-mix-and-match-ankle-socks/-/A-89095982",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/peanuts-kids-charlie-brown-snoopy-and-woodstock-youth-low-cut-ankle-socks-6-pack-multicoloured/-/A-90027547",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dr-seuss-socks-kids-book-character-designs-mix-n-match-ankle-socks-6-pack-multicoloured/-/A-90130754",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/peanuts-halloween-kids-6-pair-ankle-socks/-/A-93273044",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dr-seuss-book-titles-and-characters-kids-week-of-socks-box-set-7-pairs-multicoloured/-/A-87877591",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/nasa-buzz-aldrin-youth-space-5-pair-mix-and-match-ankle-socks-multicoloured/-/A-87877659",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/primary-kids-ankle-sock-7-pack/-/A-1002892854",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-ball-super-broly-movie-kids-week-of-socks-7-pairs-mix-and-match-box-set-multicoloured/-/A-87877437",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/mightly-kids-organic-cotton-ankle-sports-socks-5-pack/-/A-1004010408",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dr-seuss-socks-kids-cat-in-the-hat-thing-1-thing-2-low-cut-ankle-socks-5-pack-multicoloured/-/A-90057858",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/youth-grinch-ankle-socks-6-pack/-/A-90037973",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ctm-girls-ruffle-trim-lace-anklet-socks-3-pair-pack/-/A-90014227",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lucky-me-charlie-kids-ankle-socks-multiple-sizes-and-colors-5-pack/-/A-1001879019",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Athletic Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-kid-s-nickeloden-s-paw-patrol-skye-rules-sneaker-socks-pack-of-3/-/A-1002280743",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lucky-me-peyton-kids-ankle-socks-multiple-sizes-color-onyx-5-pack/-/A-1002085355",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/basix-kids-ankle-sock-low-profile-cotton-comfort-fit-black-or-white/-/A-89960622",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sock-house-co-halloween-girls-candy-corn-3-pair-anklet-socks/-/A-1004069856",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-viscose-bamboo-ankle-socks-unisex-thin-in-bulk-soft-boys-girls-stretch-school-wholesale-socks-48-pairs/-/A-1004378771",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-sweet-girl-non-skid-mary-jane-socks-set-of-10/-/A-1002652667",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-lol-dolls-omg-fierce-character-faces-ankle-socks-6-pack/-/A-1004493488",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/mykids-usa-comfy-cotton-cartoon-socks-non-slip/-/A-1003336063",
      "tags": "Ankle Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Ankle Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-12pk-super-no-show-athletic-socks-colors-may-vary/-/A-54536508",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-20pk-no-show-socks-colors-may-vary/-/A-80583873",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-10pk-turn-cuff-crew-socks-cat-and-jack/-/A-51257984",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-12pk-ankle-socks-colors-may-vary/-/A-53414823",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/procat-soccer-socks-2pk/-/A-82427238",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-6pk-crew-socks-all-in-motion-black/-/A-79587655",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-6pk-no-show-athletic-socks-all-in-motion-black-white/-/A-79587653",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-6pk-super-no-show-socks-all-in-motion-colors-may-vary/-/A-81550821",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-3-pair-pack-no-show-sneaker-liner-socks/-/A-1003336494",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Low Cut Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-s-athletic-ribbed-cotton-blend-knee-high-sock/-/A-1003336655",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-metallic-sport-stripe-knee-high-socks/-/A-1003402704",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/procat-by-puma-kids-over-the-knee-athletic-socks-blue-black/-/A-94653576",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/frosted-donuts-youth-3-pair-novelty-crew-socks/-/A-91018120",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lucky-me-casey-kids-crew-socks-multiple-colors-and-sizes-5-pack/-/A-1001795071",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-batman-and-dc-heroes-2-pair-pack-of-athletic-socks/-/A-1004493522",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/battle-sports-youth-lightweight-long-football-socks/-/A-89807669",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-shippuden-kids-hidden-leaf-athletic-crew-sock/-/A-1003904683",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/4th-of-july-american-flag-stars-stripes-youth-crew-socks/-/A-92258386",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-lurex-recess-knee-high-socks/-/A-1003336467",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/procat-basketball-socks/-/A-91270545",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-shippuden-kids-cloud-symbol-athletic-crew-sock/-/A-1003904682",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/st-patrick-s-day-born-lucky-youth-3-pack-crew-socks/-/A-91018118",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Crew Socks",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/youth-easter-themed-crew-socks-3-pack-vibrant-and-fun-holiday-socks-for-spring-celebrations/-/A-90859628",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-teenage-mutant-ninja-turtles-2-pack-athletic-socks/-/A-1004493195",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-spider-man-athletic-crew-socks-5-pair-pack/-/A-1004493808",
      "tags": "Athletic Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Athletic Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-rows-on-rows-girls-striped-tights/-/A-1004589567",
      "tags": "Boot Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Boot Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-premium-girls-39-pure-5pk-crew-socks-white/-/A-89957812",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-4pk-absolute-active-crew-socks-white/-/A-93666806",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-6pk-crew-socks-all-in-motion/-/A-89823447",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sega-sonic-the-hedgehog-boys-socks-tails-and-sonic-2-pairs-athletic-crew-socks-multicoloured/-/A-90130735",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-6pk-crew-socks-all-in-motion-8482-black/-/A-90898571",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-crew-socks-cat-38-jack-8482-white/-/A-93276950",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-6pk-ruffle-crew-socks-cat-38-jack-8482-white/-/A-94482971",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-4pk-ribbed-crew-socks-cat-38-jack-8482-white-pink/-/A-93276949",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-4pk-animal-and-heart-super-soft-crew-socks-cat-jack/-/A-94472264",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-4pk-cable-knit-bow-crew-socks-cat-38-jack-8482-black-pink-gray/-/A-94482968",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-6pk-striped-crew-socks-all-in-motion-8482-white/-/A-94472265",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-pumpkin-halloween-crew-socks-cat-38-jack-8482/-/A-94482972",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-two-tone-varsity-stripe-crew-socks/-/A-1003455613",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-ribbed-moisture-wicking-crew-socks/-/A-1003630906",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crew-sport-socks/-/A-1003311436",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-2pk-frankenstein-halloween-crew-socks-cat-38-jack-8482/-/A-94472294",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-basic-soft-rayon-from-bamboo-anklet-socks/-/A-1003517565",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-basic-cotton-blend-kids-crew-socks/-/A-1003309379",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-checkered-heart-crew-socks/-/A-1003455781",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-s-lol-athletic-crew-socks/-/A-1003456137",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-bow-knee-high-socks/-/A-1003452087",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-rainbow-patch-kids-cotton-blend-crew-sock/-/A-1003455278",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-basic-modal-crew-socks/-/A-1003305060",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-write-on-camp-kids-cotton-blend-knee-high-socks-3-pack/-/A-1003336549",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-unicorn-girls-fuzzy-non-skid-socks-2-pair-fuchsia-one-size/-/A-1003460748",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fruity-fun-watermelon-girls-cotton-blend-knee-high-socks/-/A-1003364045",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-woven-ribbed-bamboo-blend-boy-s-crew-socks/-/A-1003630081",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-toddler-s-and-kids-basic-soft-rayon-from-bamboo-crew-socks/-/A-1003529329",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-basic-soft-rayon-from-bamboo-knee-high-socks/-/A-1003336704",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-polka-point-girls-cotton-blend-knee-socks/-/A-1003363959",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-basic-cotton-blend-crew-socks/-/A-1003304905",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-hello-summer-knee-high-socks/-/A-1003366222",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-metallic-sport-stripe-cotton-blend-crew-sock/-/A-1003455288",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tie-dye-popsicle-knee-high-socks/-/A-1003366744",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-fuzzy-heart-crew-socks/-/A-1003455438",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tennis-star-crew-socks/-/A-1003455467",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-multi-graffiti-hearts-knee-sock/-/A-1003329491",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-inspo-athletic-crew-socks/-/A-1003456159",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-rockin-robots-girls-knee-socks/-/A-1003364114",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-fuzzy-heart-non-skid-socks/-/A-1003403156",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-distressed-wash-denim-cherries-girls-knee-high-sock/-/A-1003336283",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-peek-a-boo-sheer-floral-girls-cotton-blend-crew-socks/-/A-1003453705",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-distressed-wash-denim-look-girls-knee-high-socks/-/A-1003336289",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-basic-cotton-blend-knee-high-socks/-/A-1003301408",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-s-sport-rib-heart-crew-socks-winter-white-2/-/A-1003455767",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-retro-tie-dye-girls-cotton-blend-knee-high-socks/-/A-1003400392",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-color-block-stripe-crew-socks/-/A-1003456090",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-air-brush-winking-smiley-cotton-blend-knee-high-sock/-/A-1003402951",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-musical-notes-bamboo-crew-socks/-/A-1003336691",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-tennis-smiley-face-knee-sock-white-4/-/A-1003460683",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-distressed-wash-denim-stars-girls-knee-high-sock-black-4/-/A-1003460519",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-vintage-stripe-cotton-blend-knee-high-socks/-/A-1003403015",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-graffiti-star-knee-high-socks/-/A-1003402616",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-acid-wash-cotton-blend-knee-high-socks/-/A-1003336297",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pearl-burst-cotton-blend-crew-socks/-/A-1003335214",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-graffiti-play-knee-sock/-/A-1003460671",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-rubber-smiley-face-cotton-rich-knee-sock/-/A-1003334377",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tie-dye-graffiti-shapes-knee-high-socks/-/A-1003460815",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-neon-stitched-heart-cotton-blend-knee-high-sock/-/A-1003402908",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-stretch-cotton-splatter-paint-knee-sock-white-12/-/A-1003460634",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-4pk-leopard-super-soft-crew-socks-cat-38-jack-8482-pink/-/A-94472267",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-cotton-blend-speckled-crew-sock/-/A-1003309526",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-black-tie-affair-cotton-blend-crew-socks/-/A-1003453551",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-she-shimmers-girls-cotton-blend-knee-socks/-/A-1003336880",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fluffy-trio-pom-pom-cotton-blend-crew-socks/-/A-1003453638",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-tidy-little-bow-girls-cotton-blend-knee-socks/-/A-1003336888",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-glitzy-sunglasses-knee-high-socks/-/A-1003366165",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-embroidered-bicycle-knee-high-socks/-/A-1003368172",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-shimmer-knee-high-socks/-/A-1003399854",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-open-work-shimmer-cotton-blend-knee-high-socks/-/A-1003400154",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-speckled-knee-high/-/A-1003311304",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-busy-bee-glitter-cotton-knee-high-socks/-/A-1003365650",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-cotton-blend-mid-cut-socks-3-pack/-/A-1003311755",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Quarter Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-single-heart-logo-crew-socks/-/A-1003455599",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-heart-and-stripes-knee-sock/-/A-1003334358",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/iridescent-balloon-dog-knee-high/-/A-1003329068",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-graffiti-camp-knee-sock/-/A-1003334446",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-feathery-combed-cotton-faux-pearl-girls-crew-socks/-/A-1003335201",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-string-of-pearls-girls-cotton-blend-crew-socks/-/A-1003335189",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-velvet-bow-cotton-blend-knee-high-sock/-/A-1003336438",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-fuzzy-smiley-face-knee-high-socks/-/A-1003329273",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-gingham-heart-girls-cotton-blend-knee-high-sock/-/A-1003336488",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-v-stripe-lurex-cotton-blend-knee-high-socks/-/A-1003336410",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pointelle-cotton-blend-knee-high-sock/-/A-1003451559",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-jeweled-smiley-face-cotton-blend-knee-high-socks/-/A-1003336327",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-stretch-cotton-multi-stripe-m-graphic-knee-sock/-/A-1003329553",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-starry-night-jeweled-girls-combed-cotton-crew-socks/-/A-1003335223",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-striped-bee-cotton-blend-knee-high-sock/-/A-1003336341",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-jewel-mosaic-girls-combed-cotton-knee-high-socks/-/A-1003336768",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-i-woke-up-like-this-knee-high-socks-assorted/-/A-1003430559",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-write-on-camp-kids-cotton-blend-crew-sock-3-pack/-/A-1003631442",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-striped-crew-socks-art-class-8482-navy-blue-gray/-/A-94567262",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-striped-crew-socks-art-class-8482-maroon-red/-/A-94567261",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-pokemon-3pk-mid-crew-socks/-/A-93717551",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-hello-kitty-3pk-mid-crew-socks-blue/-/A-93717550",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-striped-crew-socks-art-class-8482/-/A-94567260",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/champion-girls-6pk-crew-socks-white/-/A-94651545",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/champion-girls-39-3pk-crew-socks/-/A-94660056",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fun-girl-assortment-12-pack-socks-for-girls-little-kids-ages-6-10-years/-/A-90128096",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/the-lakeside-collection-kids-8-pk-super-soft-cozy-socks-girls-icon-fuzzy-sock-slippers-8-pieces/-/A-93623294",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sports-assortment-12-pack-socks-for-boys-or-girls-little-kids-ages-6-10-years/-/A-90128097",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-hulk-hogan-360-funny-novelty-socks-large/-/A-89960644",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/colorful-crayons-socks-from-the-sock-panda-ages-3-7/-/A-92431213",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-guess-what-corgi-butt-socks-funny-small-breed-pret-puppy-dog-novelty-footwear/-/A-93854299",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/black-gray-white-12-pack-socks-for-girls-or-boys-little-kids-ages-6-10-years/-/A-90128095",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/unicorns-rainbows-12-pack-socks-for-girls-toddlers-ages-2-5/-/A-90441338",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/royal-blue-slouch-socks-the-sock-panda-adult-medium-or-small-sizes/-/A-1004445623",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/navy-blue-slouch-socks-the-sock-panda-adult-medium-or-small-sizes/-/A-1004294481",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/poppy-playtime-kids-kissy-missy-character-design-crew-socks-for-boys-and-girls-pink/-/A-90211892",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lightning-bolts-socks-tween-sizes-small-from-the-sock-panda/-/A-92226627",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-car-crew-socks/-/A-1003843717",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-classically-trained-socks-funny-retro-video-games-gamer-graphic-novelty-footwear/-/A-93854036",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gummy-bear-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92226563",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-spongebob-big-face-funny-novelty-socks-large/-/A-1000549715",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-free-hugs-socks-funny-bear-woods-camping-outdoors-novelty-footwear/-/A-93856436",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-heinz-ketchup-funny-novelty-socks-large/-/A-1000549668",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cheese-wedge-socks-tween-sizes-small-from-the-sock-panda/-/A-91981992",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-airheads-flavors-funny-novelty-socks-large/-/A-1000549717",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-children-s-thick-winter-warm-wool-socks-set-of-6-snowflakes-l/-/A-94145242",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/marching-donuts-socks-from-the-sock-panda-tween-sizes-small/-/A-1004848444",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dr-seuss-socks-kids-cat-in-the-hat-and-fish-crew-socks-2-pair-multicoloured/-/A-87877385",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ctm-girl-s-solid-colored-soft-uniform-knee-high-socks-1-pair/-/A-90098914",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ufo-s-are-real-aliens-are-taking-our-leaders-socks-tween-sizes-small-from-the-sock-panda/-/A-92348081",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/happy-smiley-emoji-face-emoji-socks-from-the-sock-panda/-/A-92436746",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-riding-a-shark-socks-from-the-sock-panda-men-s-or-tween-sizes/-/A-1004709875",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-naps-and-snacks-socks-funny-tacos-pizza-sleep-lazy-graphic-novelty-footwear/-/A-93851455",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-party-animal-socks-funny-festive-bear-celebration-novelty-graphic-footwear/-/A-93856250",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-dill-with-it-socks-funny-pickles-deal-with-it-funny-vegetables-graphic-novelty-footwear/-/A-93851454",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/red-slouch-socks-the-sock-panda-adult-medium-or-small-sizes/-/A-1004451505",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-st-patrick-s-day-kids-sloth-2-pair-crew/-/A-1004067378",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-ice-cream-socks-funny-frozen-treat-dessert-vanilla-chocolate-cone-graphic-novelty-footwear/-/A-93851456",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/smores-socks-tween-sizes-small-from-the-sock-panda/-/A-92237484",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/penguin-socks-from-the-sock-panda-ages-3-7/-/A-94000510",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-hedgehogs-are-bad-at-sharing-socks-funny-fall-autumn-novelty-footwear/-/A-93856454",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-children-s-thick-winter-warm-wool-socks-set-of-6-cats-l/-/A-1000022188",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-girls-valentines-berry-cute-2-pair-crew-socks/-/A-1004068532",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/space-alien-astronaut-selfie-socks-from-the-sock-panda-tween-sizes-small/-/A-1001886832",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/candy-party-socks-ages-3-7-from-the-sock-panda/-/A-92434209",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pilot-and-airplane-socks-ages-3-7-from-the-sock-panda/-/A-92431514",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-boys-dinosaur-halloween-2-pair-crew-socks/-/A-1004044619",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fantastic-panda-pattern-tween-socks-tween-sizes-small-from-the-sock-panda/-/A-91981871",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fun-puzzle-cube-socks-tween-sizes-small-from-the-sock-panda/-/A-92226437",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-hide-and-seek-champion-socks-funny-loch-ness-monster-novelty-graphic-footwear/-/A-93853944",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-bigfoot-hide-and-seek-champion-socks-funny-camping-sasquatch-knit-novelty-footwear/-/A-93853734",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/colorful-surprise-dog-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-91982038",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/monster-truck-racing-socks-from-ages-3-7-from-the-sock-panda/-/A-92433750",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ctm-kid-s-wool-blend-crew-socks-2-pack/-/A-90098698",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/corn-of-the-cob-socks-from-the-sock-panda/-/A-93001765",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-power-rangers-assembled-funny-novelty-socks-large/-/A-1000549734",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/koala-sock-set-ages-3-7-from-the-sock-panda/-/A-92433194",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/north-pole-striped-kids-socks-ages-0-7-red-white-from-the-sock-panda/-/A-92434806",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gingerbread-man-milk-bath-socks-ages-3-7-from-the-sock-panda/-/A-92434220",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/floating-otters-socks-from-the-sock-panda-ages-3-7/-/A-92746214",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-blue-patterned-socks-for-kids-ages-3-7-from-the-sock-panda/-/A-92434613",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/airplane-socks-ages-3-7-from-the-sock-panda/-/A-92434601",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/owl-socks-ages-3-7-from-the-sock-panda/-/A-92434807",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/butterfly-socks-medium-agess-3-7-from-the-sock-panda/-/A-92434298",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gingerbread-man-sock-set-for-kids-ages-1-7-from-the-sock-panda/-/A-92433748",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/flying-gingerbread-man-socks-ages-3-7-green-from-the-sock-panda/-/A-92434215",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-shippuden-youth-week-of-socks-uzumaki-clan-and-symbols-7-pairs-of-socks-multicoloured/-/A-88020132",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-children-s-thick-winter-warm-wool-socks-set-of-6-snowflakes-m/-/A-94145241",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fun-cereal-and-milk-sock-ages-3-7-from-the-sock-panda/-/A-92434216",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-girl-s-nickelodeon-paw-patrol-skye-power-crew-novelty-socks-3-pack/-/A-92518673",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/youth-sister-bear-sock-funny-cute-siblings-brother-family-graphic-footwear-crazy-dog-socks/-/A-93853733",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/astronaut-panda-in-space-socks-ages-3-7-from-the-sock-panda/-/A-92434603",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/winter-blossom-kids-socks-ages-3-7-denim-from-the-sock-panda/-/A-92434607",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-christmas-2-pair-pack-crew-socks/-/A-1003857392",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/music-dragon-on-fire-socks-from-the-sock-panda-ages-3-7/-/A-1000395555",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-cheez-it-crackers-funny-novelty-socks-large/-/A-1000549700",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-skeleton-funny-novelty-socks-large/-/A-1000549699",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-kool-aid-man-funny-novelty-socks-large/-/A-1000549681",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-ghostbusters-logos-funny-novelty-socks-large/-/A-1000549687",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-i-paused-my-game-for-this-socks-funny-nerdy-video-game-novelty-footwear/-/A-93854032",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-worlds-okayest-sister-sock-funny-cute-sibiling-love-footwear/-/A-93852621",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/juggling-dinosaur-socks-back-to-school-tween-sizes-small-from-the-sock-panda/-/A-92226604",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ice-cream-cone-earth-socks-from-the-sock-panda-men-s-or-tween-sizes/-/A-1004709846",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/donuts-pattern-socks-ages-3-7-from-the-sock-panda/-/A-92434793",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/guitar-pattern-socks-ages-3-7-from-the-sock-panda/-/A-92434794",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/western-boot-socks-from-the-sock-panda-ages-3-7/-/A-1004520427",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/panda-hugging-rainbow-socks-ages-3-7-white-from-the-sock-panda/-/A-92433754",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-brother-bear-socks-funny-sibling-wilderness-cub-bro-sarcastic-funny-footwear/-/A-93853687",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/school-days-socks-back-to-school-from-the-sock-panda-tween-sizes-small/-/A-1004075009",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/elephant-bubbles-socks-ages-3-7-from-the-sock-panda/-/A-92434797",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-musical-crew-socks/-/A-1003843718",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/reindeer-wearing-a-scarf-socks-for-kids-from-the-sock-panda/-/A-92434599",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/art-deco-patterned-socks-size-6-8-tween-sizes-small-blue-unisex-from-the-sock-panda/-/A-91981927",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/poppy-playtime-youth-huggy-character-design-crew-socks-for-boys-and-girls-blue/-/A-90211888",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-food-dill-with-it-ice-cream-naps-snacks-pbj-socks-bundle-4-pack/-/A-93851457",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-children-s-non-skid-gripper-socks-set-of-3-green-orange-blue/-/A-94114925",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, No Show Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-tiger-funny-novelty-socks-large/-/A-1000549672",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-blues-clues-paws-funny-novelty-socks-large/-/A-1000549732",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-pete-dot-crew-socks/-/A-1003809911",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/duck-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-91981885",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/numbers-are-fun-socks-ages-3-7-from-the-sock-panda/-/A-92433749",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/red-snowflake-kids-socks-ages-0-7-from-the-sock-panda/-/A-1000879032",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/roller-skate-earth-socks-from-the-sock-panda-tween-sizes-small/-/A-1002896970",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/robot-socks-from-the-sock-panda-tween-sizes-small/-/A-1002738170",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/robot-artist-socks-from-the-sock-panda-3-sizes-large-medium-small/-/A-1005112975",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pensive-owl-resting-in-a-tree-socks-tween-sizes-small-from-the-sock-panda/-/A-92237370",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lion-paws-with-prints-sock-from-the-sock-panda/-/A-92433192",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/karate-kid-socks-from-the-sock-panda-ages-3-7/-/A-93112044",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-ball-super-kids-goku-symbol-athletic-crew-sock/-/A-1003743330",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-ball-super-kids-4-star-ball-athletic-crew-sock/-/A-1003742719",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-get-on-my-level-socks-funny-tall-giraffe-novelty-graphic-footwear/-/A-93855724",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/happy-planets-socks-ages-0-2-from-the-sock-panda/-/A-92434204",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-boys-easter-chicks-dig-me-2-pair-crew-socks/-/A-1004067469",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/happy-nerd-face-emoji-socks-from-the-sock-panda/-/A-92436747",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/giraffe-in-a-train-socks-ages-3-7-from-the-sock-panda/-/A-92433752",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/giraffe-patterns-socks-ages-3-7-from-the-sock-panda/-/A-92433188",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/monster-face-pattern-socks-ages-3-7-from-the-sock-panda/-/A-92433753",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/jello-jelly-fish-socks-from-the-sock-panda-ages-3-7/-/A-1004075000",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-kid-s-disney-s-lilo-stitch-fun-novelty-socks-3-pair/-/A-1002629279",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-okayest-brother-and-brother-bear-socks-funny-bundle-2-pack/-/A-93853690",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hugs-and-kisses-xoxo-socks-from-the-sock-panda-ages-3-7/-/A-1002896982",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/french-fries-socks-from-the-sock-panda-ages-3-7/-/A-1000395564",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/monkey-skateboarding-socks-ages3-7-from-the-sock-panda/-/A-92434802",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/flash-of-lightning-socks-from-the-sock-panda-ages-3-7/-/A-1000395546",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-if-you-don-t-like-tacos-i-m-nacho-type-socks-funny-mexican-food-footwear/-/A-93854922",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/a-happy-lion-sock-ages-3-7-from-the-sock-panda/-/A-92434605",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/tree-snake-swirl-socks-from-the-sock-panda-ages-3-7/-/A-1001625745",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/a-whale-of-a-sock-from-the-sock-panda/-/A-92510982",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/playful-toucan-socks-ages-3-7-from-the-sock-panda/-/A-92433190",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/frog-on-lily-pads-socks-ages-3-7-from-the-sock-panda/-/A-92434217",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/panda-wearing-dragon-costume-socks-for-kids-ages-3-7-from-the-sock-panda/-/A-92434594",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/otter-on-a-rock-socks-from-the-sock-panda-ages-3-7/-/A-92751648",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/basix-kids-ankle-sock-low-profile-cotton-comfort-cushion-fit-5-pack-4-10-years/-/A-89960620",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/juicy-watermelon-socks-from-the-sock-panda-3-sizes-large-medium-and-small/-/A-92672211",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/shark-in-the-ocean-socks-ages-3-7-from-the-sock-panda/-/A-92433198",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dinosaur-kid-s-12-pack-socks-for-boys-and-girls-toddlers-ages-2-5/-/A-90441276",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-girl-s-disney-frozen-anna-elsa-and-olaf-soft-socks-3-pack/-/A-93554230",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/holiday-gift-teddy-bear-socks-for-kids-ages-0-7-from-the-sock-panda/-/A-93032656",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gray-black-kid-s-12-pack-socks-for-boys-and-girls-toddlers-ages-2-5/-/A-90441282",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-children-s-non-skid-gripper-socks-set-of-3-lavender-hot-pink-pink/-/A-94114978",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, No Show Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/musical-chameleon-socks-from-the-sock-panda-tween-sizes-small/-/A-92358590",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pink-gray-kid-s-12-pack-socks-for-girls-toddlers-ages-2-5/-/A-90441337",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/waving-cheetah-socks-from-the-sock-panda-ages-3-7/-/A-92431194",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-kid-s-pokemon-power-up-crew-novelty-socks-3-pack/-/A-92518681",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/drago-the-fierce-red-dragon-socks-ages-0-7-from-the-sock-panda/-/A-92434799",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cheesy-pizza-pattern-socks-from-the-sock-panda/-/A-92514231",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cheetah-socks-from-the-sock-panda-ages-3-7/-/A-92372036",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fox-in-the-woods-socks-ages-3-7-from-the-sock-panda/-/A-92434219",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/love-lion-sock-ages-3-7-from-the-sock-panda/-/A-92433195",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/happy-santa-claus-socks-for-kids-ages-0-7-from-the-sock-panda/-/A-93032672",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/robbie-the-calculating-robot-socks-kids-socks-ages-0-7-from-the-sock-panda/-/A-92434595",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-kids-food-snacks-cookies-candy-crew-socks-novelty-funny-cute/-/A-89960613",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sand-castle-socks-ages-3-7-from-the-sock-panda/-/A-92433199",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cotan-the-alien-socks-infant-agess-0-7-from-the-sock-panda/-/A-92434795",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ghost-party-socks-for-kids-the-from-the-sock-panda-age-3-7/-/A-93310373",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/night-sky-kids-socks-ages-3-7-from-the-sock-panda/-/A-92434803",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/monster-bus-socks-ages-3-7-from-the-sock-panda/-/A-92433751",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/chameleon-socks-from-the-sock-panda-ages-3-7/-/A-92431210",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/corn-worm-socks-from-the-sock-panda-ages-3-7/-/A-1002512687",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-girl-s-frozen-themed-novelty-crew-socks-pack-of-3/-/A-1002280753",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/animal-patterns-12-pack-socks-for-girls-toddlers-ages-2-5/-/A-90441352",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/breakfast-food-socks-set-of-two-ages-3-7-from-the-sock-panda/-/A-92434604",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/yummy-eggs-socks-from-the-sock-panda-small-tween-or-women-s-sizes/-/A-92753470",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hippos-playing-in-a-pond-socks-ages-3-7-from-the-sock-panda/-/A-92433186",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/yummy-pancake-breakfast-bee-honey-sock-ages-3-7-from-the-sock-panda/-/A-92431262",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/claws-the-lobster-socks-medium-agess-3-7-from-the-sock-panda/-/A-92431513",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/tooth-fairy-socks-from-the-sock-panda-ages-3-7/-/A-1001886817",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/purple-bat-pattern-socks-from-the-sock-panda-tween-sizes-small/-/A-94000518",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cat-in-the-hat-youth-3-pack-collectible-socks/-/A-91122984",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-girl-s-minnie-mouse-fun-day-fluffy-socks-2-pairs/-/A-1003286439",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Low Cut Socks",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-banner-crew-socks/-/A-1003843931",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cats-in-3d-socks-from-the-sock-panda-tween-sizes-small/-/A-94000516",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-pete-in-his-shoes-crew-socks/-/A-1003809942",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/apple-super-hero-socks-ages-3-7-from-the-sock-panda/-/A-92434609",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-girls-candy-corn-halloween-2-pair-crew-socks/-/A-1004044896",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/monster-truck-patterns-socks-from-small-ages-3-5-from-the-sock-panda/-/A-92348112",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dracula-eating-corn-socks-from-the-sock-panda-great-for-halloween-men-s-or-tween-sizes/-/A-1004709881",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-cheetah-funny-novelty-socks-large/-/A-1000549671",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/swimming-hippos-socks-medium-ages-5-7-from-the-sock-panda/-/A-92431256",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sea-adventure-socks-kids-socks-small-ages-3-5-red-from-the-sock-panda/-/A-92348278",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-pop-tarts-frosting-funny-novelty-socks-large/-/A-1000549669",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/koala-with-eucalyptus-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92226609",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/holiday-lights-kids-socks-small-ages-3-5-blue-from-the-sock-panda/-/A-92347985",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-shippuden-kids-ramen-take-out-gift-box-3-pair-youth-crew-socks-multicoloured/-/A-87877413",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-cup-noodles-funny-novelty-socks-large/-/A-1000549701",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pumpkin-head-swinging-with-an-owl-by-the-moon-socks-tween-sizes-small-from-the-sock-panda/-/A-92237395",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dolphins-and-soccer-socks-from-the-sock-panda-tween-sizes-small/-/A-1004784284",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-avatar-the-last-airbender-funny-novelty-socks-large/-/A-1000549690",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-monopoly-split-funny-novelty-socks-large/-/A-1000549696",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pelican-socks-set-of-two-ages-3-7-from-the-sock-panda/-/A-92433196",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/koala-reading-a-book-socks-ages-3-7-from-the-sock-panda/-/A-92431253",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-the-turtles-funny-novelty-socks-large/-/A-1000549686",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dolphins-and-soccer-socks-small-ages-3-5-from-the-sock-panda/-/A-92347745",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dr-seuss-socks-kids-cat-in-the-hat-thing-1-thing-2-pack-crew-socks-boys-girls-multicoloured/-/A-90626416",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-science-like-magic-but-real-socks-funny-nerdy-chemistry-sarcastic-graphic-footwear/-/A-93852296",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-playing-the-guitar-socks-ages-3-7-from-the-sock-panda/-/A-92434804",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-children-s-thick-winter-warm-wool-socks-set-of-6-christmas-reindeer-m/-/A-94145243",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/people-pattern-socks-medium-ages-5-7-light-blue-yellow-from-the-sock-panda/-/A-92348578",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/elephant-sitting-in-flowers-socks-ages-3-7-from-the-sock-panda/-/A-92434798",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/alien-face-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92348478",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hiking-bear-socks-ages-3-7-from-the-sock-panda/-/A-92433746",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-splat-face-socks-tween-sizes-small-from-the-sock-panda/-/A-91982059",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/embroidery-style-animal-pattern-socks-ages-3-7-from-the-sock-panda/-/A-92434208",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-awesome-sauce-socks-funny-spicy-hot-sauce-lover-graphic-novelty-footwear/-/A-93851310",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-can-t-touch-this-socks-funny-sharp-cactus-hedgehog-graphic-sarcastic-footwear/-/A-93856181",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-sock-1-sock-2-funny-novelty-socks-large/-/A-1000549720",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/jonathan-the-dog-in-the-rain-with-an-umbrella-socks-ages-3-7-from-the-sock-panda/-/A-92431246",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/picnic-food-socks-small-ages-3-5-from-the-sock-panda/-/A-92348580",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/banana-patterned-socks-ages-3-7-from-the-sock-panda/-/A-92434296",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/rabbit-magician-socks-ages-3-7-from-the-sock-panda/-/A-92433189",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-fantasy-football-legend-socks-funny-nerdy-sports-team-graphic-footwear/-/A-93855117",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hot-dog-from-the-sock-panda-tween-sizes-small/-/A-93111688",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-meowdy-purrtner-socks-funny-howdy-partner-cowboy-cat-novelty-footwear/-/A-93854153",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pandas-watering-the-sock-joshua-tree-from-the-sock-panda-women-s-or-tween-sizes/-/A-1004709849",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/happy-sailor-sock-ages-3-7-from-the-sock-panda/-/A-92433187",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/celebration-panda-socks-ages-3-7-from-the-sock-panda/-/A-92434206",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/colorful-spiderweb-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-91982037",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-kids-2-pair-crew-socks/-/A-1003868161",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/super-happy-fruit-pattern-socks-ages-3-7-from-the-sock-panda/-/A-92431255",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/the-hero-the-lifeguard-socks-ages-3-7-from-the-sock-panda/-/A-92431257",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-merry-christmas-2-pair-pack-crew-socks/-/A-1003857391",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dolphins-in-the-ocean-socks-ages-3-7-from-the-sock-panda/-/A-92434207",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sushi-socks-from-the-sock-panda-tween-sizes-small/-/A-92250077",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-chinchillin-socks-funny-cool-chinchilla-pet-rodent-graphic-novelty-footwear/-/A-93853945",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/science-of-chocolate-socks-from-the-sock-panda-tween-sizes-small/-/A-92358584",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/flying-car-socks-from-the-sock-panda-tween-sizes-small/-/A-1004784299",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cute-koala-socks-small-ages-3-5-from-the-sock-panda/-/A-92347660",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/blue-space-socks-with-planets-and-rocket-ship-socks-tween-sizes-small-from-the-sock-panda/-/A-91981958",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pizza-baking-in-the-sun-socks-tween-sizes-small-from-the-sock-panda/-/A-92237387",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/astronaut-on-the-moon-socks-from-the-sock-panda-tween-sizes-small/-/A-1004848454",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-kraft-mac-split-funny-novelty-socks-large/-/A-1000549703",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/music-note-matrix-socks-tween-sizes-small-from-the-sock-panda/-/A-92237326",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-girls-easter-bunny-hearts-2-pair-crew-socks/-/A-1004067471",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-save-the-narwhals-socks-cute-ocean-whale-unicorn-of-the-sea-graphic-footwear/-/A-93855530",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/slow-animals-on-a-motorcycle-socks-from-the-sock-panda-tween-sizes-small/-/A-92707120",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/the-seasons-tree-socks-ages-3-7-from-the-sock-panda/-/A-92431259",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sea-adventure-socks-kids-socks-small-ages-3-5-pink-from-the-sock-panda/-/A-92348276",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-top-ramen-stack-funny-novelty-socks-large/-/A-1000549702",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fun-koala-on-a-dolphin-socks-ages-3-7-from-the-sock-panda/-/A-92434214",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sea-adventure-socks-kids-socks-medium-ages-5-7-red-from-the-sock-panda/-/A-92348274",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ramen-socks-tween-sizes-small-from-the-sock-panda/-/A-92237418",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hot-dog-picnic-socks-tween-sizes-small-from-the-sock-panda/-/A-92226600",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-nacho-nacho-man-socks-funny-macho-nachos-and-cheese-graphic-footwear/-/A-93855868",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/long-necked-animals-wearing-glasses-socks-from-the-sock-panda-tween-sizes-small/-/A-1004784285",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wizard-socks-from-the-sock-panda-men-s-or-tween-sizes/-/A-1004720299",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/good-egg-vs-bad-egg-socks-tween-sizes-small-from-the-sock-panda/-/A-92226556",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ants-at-a-picnic-eating-donuts-ages-3-7-from-the-sock-panda/-/A-92433745",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/tib-tab-the-bat-socks-ages-3-7-from-the-sock-panda/-/A-92431260",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ducks-on-stairs-socks-from-the-sock-panda-tween-sizes-small/-/A-1003733825",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/backpack-with-panda-socks-back-to-school-from-the-sock-panda-tween-sizes-small/-/A-91981942",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-nerf-split-funny-novelty-socks-large/-/A-1000549679",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/penguin-surfing-with-a-cool-polar-bear-socks-tween-sizes-small-from-the-sock-panda/-/A-92237369",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/running-turkey-socks-from-the-sock-panda-tween-sizes-small/-/A-1000395550",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/friendly-ant-socks-ages-3-5-from-the-sock-panda/-/A-92348538",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lazy-basketball-socks-from-the-sock-panda-tween-sizes-small/-/A-1004075012",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pelican-mail-carrier-socks-ages-3-7-from-the-sock-panda/-/A-92433191",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-llamas-socks-from-the-sock-panda-tween-sizes-small/-/A-1003733821",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fun-abstract-geometric-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92226645",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/polar-bear-patterned-socks-tween-sizes-small-from-the-sock-panda/-/A-92237385",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hooty-hoot-the-happy-owl-socks-medium-ages-5-7-from-the-sock-panda/-/A-92348553",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/vanity-lion-cat-socks-tween-sizes-small-from-the-sock-panda/-/A-92348138",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/beach-snowmen-socks-tween-sizes-small-from-the-sock-panda/-/A-91981943",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/happy-monster-faces-socks-tween-sizes-small-from-the-sock-panda/-/A-92226551",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bunny-rabbit-pattern-socks-ages-3-7-from-the-sock-panda/-/A-92434602",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/ant-picnic-donut-feast-2-pack-from-the-sock-panda-ages-3-7/-/A-92431229",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-world-s-okayest-brother-socks-funny-cool-family-bro-graphic-novelty-footwear/-/A-93853684",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/magnificent-giraffe-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92226617",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/masquerade-mask-sock-in-black-medium-ages-5-7-from-the-sock-panda/-/A-92348073",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/caterpillar-socks-medium-agess-3-7-from-the-sock-panda/-/A-92434297",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/monkey-playing-socks-tween-sizes-small-from-the-sock-panda/-/A-92237319",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/reindeer-campgrounds-in-the-mountains-holiday-socks-tween-sizes-small-from-the-sock-panda/-/A-92237433",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/amusing-sock-puppet-socks-tween-sizes-small-from-the-sock-panda/-/A-91981920",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/alien-desert-crash-landing-socks-from-the-sock-panda-tween-sizes-small/-/A-91981908",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/smiley-sun-face-patterned-tween-sizes-small-from-the-sock-panda/-/A-92237483",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sneaker-socks-for-kids-small-ages-3-5-from-the-sock-panda/-/A-92348330",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/frog-socks-small-ages-3-5-from-the-sock-panda/-/A-92347894",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/home-sweet-home-socks-ages-3-7-from-the-sock-panda/-/A-92433185",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/alien-stealing-a-hamburger-at-a-bbq-socks-tween-sizes-small-from-the-sock-panda/-/A-91981921",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/crazy-dog-t-shirts-youth-peanut-butter-and-jelly-socks-funny-lunch-jam-sandwich-graphic-novelty-vintage-footwear/-/A-93851452",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sushi-socks-ages-3-7-from-the-sock-panda/-/A-92434598",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/intricate-spiderweb-pattern-socks-with-spider-size-6-8-tween-sizes-small-from-the-sock-panda/-/A-92226594",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-eggo-split-funny-novelty-socks-large/-/A-1000549693",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/reindeer-socks-short-socks-tween-sizes-small-from-the-sock-panda/-/A-92237431",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/medical-doctors-kids-socks-small-ages-3-5-from-the-sock-panda/-/A-92348082",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/reflective-lion-wearing-lightning-bolt-sunglasses-socks-from-the-sock-panda-tween-sizes-small/-/A-92237428",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/panda-playing-cards-socks-from-the-sock-panda-tween-sizes-small/-/A-1001886849",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-pattern-tween-sizes-small-from-the-sock-panda/-/A-91981791",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/banana-scooter-socks-tween-sizes-small-from-the-sock-panda/-/A-92755827",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/green-and-yellow-zebra-safari-socks-tween-sizes-small-from-the-sock-panda/-/A-92226550",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bad-cat-mummy-socks-ages-3-7-from-the-sock-panda/-/A-92434612",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/behind-the-fabric-street-art-socks-from-the-sock-panda-tween-sizes-small/-/A-91981946",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/barbeque-socks-from-the-sock-panda-tween-sizes-small/-/A-93111683",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-twister-split-funny-novelty-socks-large/-/A-1000549697",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/alien-spaceships-love-donuts-socks-tween-sizes-small-from-the-sock-panda/-/A-91981932",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sophisticated-blue-pattern-socks-ages-3-5-from-the-sock-panda/-/A-92348333",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-skateboarding-dog-socks-tween-sizes-small-from-the-sock-panda/-/A-91982065",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/circus-scene-roller-coaster-socks-tween-sizes-small-from-the-sock-panda/-/A-91982008",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/rectangle-block-pattern-socks-for-tweens-from-the-sock-panda-tween-sizes-small/-/A-92237425",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/chocolate-party-time-socks-tween-sizes-small-from-the-sock-panda/-/A-91981993",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gorgan-the-alien-sock-ages-3-5-from-the-sock-panda/-/A-92347958",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/masquerade-mask-socks-with-orange-trim-ages-3-7-from-the-sock-panda/-/A-92434221",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pelican-flying-over-the-bridge-sock-ages-3-7-from-the-sock-panda/-/A-92433757",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-operation-split-funny-novelty-socks-large/-/A-1000549678",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fish-feast-under-the-sea-tween-sizes-small-from-the-sock-panda/-/A-91981909",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bad-and-guilty-dog-socks-tween-sizes-small-from-the-sock-panda/-/A-91981947",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/yummy-delicious-donut-socks-from-the-sock-panda-tween-sizes-small/-/A-1004784274",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/venus-flytrap-socks-from-the-sock-panda-tween-sizes-small/-/A-93545084",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/elephant-celebration-socks-ages-3-5-small-ages-3-5-from-the-sock-panda/-/A-92347751",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/patriotic-sunglasses-socks-from-the-sock-panda-men-s-women-s-or-tweens-sizes/-/A-1004720298",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/peeking-eyes-socks-from-the-socks-panda-medium-purple-from-the-sock-panda-women-s-or-tweens-sizes-great-for-halloween/-/A-1004985445",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dancing-panda-socks-tween-sizes-small-from-the-sock-panda/-/A-91982071",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/busy-bee-socks-tween-sizes-small-from-the-sock-panda/-/A-91981961",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/feather-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-91981917",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/slow-steady-turtle-socks-small-ages-3-5-from-the-sock-panda/-/A-92348329",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/owls-chorus-music-notes-socks-small-ages-3-5-from-the-sock-panda/-/A-92348160",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/winter-panda-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92348261",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/guitar-playing-musical-robot-socks-tween-sizes-small-from-the-sock-panda/-/A-92226554",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-valentine-s-day-2-pair-crew-pack/-/A-1003857478",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-boys-valentines-i-dig-you-2-pair-crew-socks/-/A-1004067480",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-transformers-split-funny-novelty-socks-large/-/A-1000549714",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/olympic-ring-pattern-socks-from-the-sock-panda-tween-sizes-small/-/A-92358592",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wild-and-crazy-egg-socks-tween-sizes-small-from-the-sock-panda/-/A-92348213",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/nightmare-monster-in-the-closet-socks-adult-large-adult-medium-or-tween-sizes-from-the-sock-panda-great-for-halloween/-/A-1005164574",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/comical-thanksgiving-turkey-socks-from-the-sock-panda-women-s-or-tween-sizes/-/A-1004709891",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/languages-of-the-world-socks-how-to-say-hello-small-ages-3-5-grey-from-the-sock-panda/-/A-92348023",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lovely-purple-umbrella-socks-from-small-ages-3-5-from-the-sock-panda/-/A-92348047",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bob-the-shark-socks-medium-ages-5-7-from-the-sock-panda/-/A-92347507",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/socksmith-9-0-inch-the-nice-list-socks-4-7-years-stripes-crew-socks/-/A-1001200502",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/a-stitch-in-time-socks-from-the-sock-panda-tween-sizes-small/-/A-91981914",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/joyful-purple-pig-socks-ages-3-5-small-ages-3-5-purple-from-the-sock-panda/-/A-92347998",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/flying-guitar-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-91981913",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/blue-raccoon-socks-ages-3-5-from-the-sock-panda/-/A-92347508",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/colorful-anchor-pattern-socks-from-the-sock-panda-adult-large-or-tween-size-small/-/A-1004444225",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-pepper-and-marshmallow-party-socks-tween-sizes-small-from-the-sock-panda/-/A-91981801",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/socksmith-9-0-inch-reindeer-games-antlers-christmas-tree-snowflakes-crew-socks/-/A-1001200457",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/everything-legwear-st-patrick-s-day-kids-rock-star-2-pair-crew/-/A-1004067409",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-st-patrick-s-day-2-pair-pack-crew-socks/-/A-1003857449",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/vacationing-robot-on-the-beach-socks-from-the-sock-panda-men-s-sizes-adult-large/-/A-92348132",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gnome-surfer-socks-from-the-sock-panda-tween-sizes-small/-/A-1001230262",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hashtag-pattern-socks-tween-sizes-small-from-the-sock-panda/-/A-92226574",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/odd-sox-dungeons-dragons-split-funny-novelty-socks-large/-/A-1000549688",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/it-is-good-to-dream-monkey-climbing-ladder-to-the-moon-socks-tween-sizes-small-from-the-sock-panda/-/A-92226606",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/magical-owls-socks-set-of-two-small-ages-3-5-from-the-sock-panda/-/A-92348070",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/treehouse-in-the-city-socks-tween-sizes-small-from-the-sock-panda/-/A-92348074",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/interlocking-turkey-patterned-socks-tween-sizes-small-from-the-sock-panda/-/A-92226584",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/funny-faces-socks-tween-sizes-small-from-the-sock-panda/-/A-92226458",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/colorful-puzzle-socks-tween-sizes-small-from-the-sock-panda/-/A-91982023",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/breaking-gingerbread-man-socks-from-the-sock-panda-tween-sizes-small/-/A-1001230268",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/musical-smiley-emoji-sock-tween-sizes-small-from-the-sock-panda/-/A-92237329",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/chocolate-vs-toothbrush-socks-from-the-sock-panda-tween-sizes-small/-/A-92358585",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/panda-and-the-beanstalk-socks-tween-sizes-small-from-the-sock-panda/-/A-92237348",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/two-tone-polka-dots-socks-from-the-sock-panda-tween-sizes-small/-/A-1001625749",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/time-bunny-rabbit-socks-from-the-sock-panda-men-s-women-s-and-tweens-sizes/-/A-1004709883",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/under-the-sea-anchor-and-octopus-socks-size-10-13-adult-large-or-small-sizes-from-the-sock-panda/-/A-1004437069",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/meditating-mushroom-socks-from-the-sock-panda-tween-sizes-small/-/A-1001702778",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/yummy-hamburger-socks-from-the-sock-panda-tween-sizes-small/-/A-1000395552",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/many-ways-bicycle-socks-tween-sizes-small-from-the-sock-panda/-/A-92226633",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/curious-sea-lion-socks-small-ages-3-5-from-the-sock-panda/-/A-92347661",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pilot-panda-socks-ages-3-5-from-the-sock-panda/-/A-92348221",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fun-panda-clotheline-socks-small-ages-3-5-from-the-sock-panda/-/A-92347901",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/the-power-of-lightning-and-energy-sock-small-ages-3-5-from-the-sock-panda/-/A-92348390",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/jonathan-the-dog-socks-small-ages-3-5-from-the-sock-panda/-/A-92348560",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-sonic-the-hedgehog-3-pair-pack-of-crew-socks/-/A-1004493315",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/gray-slouch-socks-the-sock-panda-adult-medium-or-small-sizes/-/A-1004445185",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/jelly-fish-socks-from-the-sock-panda-ages-3-7/-/A-1004075007",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-kid-s-disney-miraculous-ladybug-and-cat-noir-crew-socks-4-pack/-/A-93563952",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/basic-color-assortment-kid-s-12-pack-socks-for-boys-and-girls-toddlers-ages-2t-5/-/A-90441275",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/skeleton-fireman-and-haunted-house-socks-from-the-sock-panda-adult-large-or-tween-size-small-great-for-halloween/-/A-1004316842",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wizard-penguin-socks-from-the-sock-panda-ages-3-7/-/A-94000511",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sweet-hot-dog-in-bun-foodie-socks-large-medium-or-small-from-the-sock-panda/-/A-1004316199",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/panda-sitting-in-bamboo-socks-the-sock-panda-large-medium-or-small/-/A-1004316840",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bison-socks-from-the-sock-panda-ages-3-7/-/A-93545069",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/shamrock-socks-from-the-sock-panda-ages-3-7/-/A-1002512659",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/viscose-bamboo-kids-thin-crew-socks-uniform-boys-girls-bulk-value-unisex-basic-casual-soft-wholesale-48-pairs/-/A-1004378780",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/curious-orange-cat-socks-from-the-sock-panda-ages-3-7/-/A-1004294460",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/sun-vs-wind-socks-from-the-sock-panda-ages-3-7/-/A-1003456116",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/running-grasshopper-socks-from-the-sock-panda-ages-3-7/-/A-1004989173",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/panda-hugging-earth-socks-from-the-sock-panda-ages-3-7/-/A-1002896977",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bison-reflection-socks-from-the-sock-panda-ages-3-7/-/A-93545068",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/garden-insect-party-socks-from-the-sock-panda-ages-3-7/-/A-1004989089",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/fire-works-over-the-city-socks-from-the-sock-panda-ages-3-7-great-for-the-4th-of-july/-/A-1004294455",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bees-loving-flower-socks-from-the-sock-panda-ages-3-7/-/A-1004784270",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-company-standard-knee-high-socks/-/A-1003631822",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights, Knee High Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-pencil-paper-funny-novelty-socks-large/-/A-89960581",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-cats-funny-novelty-socks-large/-/A-89960601",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-planets-funny-novelty-socks-medium/-/A-89960604",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-dippin-dots-funny-novelty-socks-large/-/A-89960598",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-for-kid-s-kellogg-s-breakfast-cereal-fun-novelty-crew-7-10-years/-/A-89960600",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-sock-1-sock-2-funny-novelty-socks-4-7-years/-/A-89960582",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-cup-noodles-funny-novelty-socks-large/-/A-1000549724",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-mac-n-cheese-funny-novelty-socks-medium/-/A-89960648",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-cupcakes-funny-novelty-socks-large/-/A-89960626",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-pj-masks-bolt-funny-novelty-socks-large/-/A-1000549728",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-lollipops-funny-novelty-socks-medium/-/A-89960610",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-monkeys-funny-novelty-socks-medium/-/A-89960596",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/cool-socks-pj-masks-bolt-funny-novelty-socks-medium/-/A-1000549746",
      "tags": "Crew Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Crew Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-6pk-scallop-ankle-socks-cat-38-jack-8482/-/A-90873438",
      "tags": "Dress Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Dress Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-3pk-dress-socks-cat-jack-gray-black-navy-blue/-/A-79468018",
      "tags": "Dress Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Dress Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-3pk-dress-socks-cat-jack-navy/-/A-79468027",
      "tags": "Dress Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Dress Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-3pk-bobby-socks-cat-jack-153-white-navy-black/-/A-51258242",
      "tags": "Dress Socks, Girls’ Clothing, Kids’ Clothing, Socks & Tights",
      "filters": {
        "type": "Dress Socks"
      }
    },
    {
      "url": "https://www.target.com/p/rufflebutts-girls-3-pack-footless-ruffle-tights/-/A-1001066491",
      "tags": "Girls’ Clothing, Hosiery Leggings, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Hosiery Leggings"
      }
    },
    {
      "url": "https://www.target.com/p/rufflebutts-girls-rib-knit-footless-ruffled-tights/-/A-93144494",
      "tags": "Girls’ Clothing, Hosiery Leggings, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Hosiery Leggings"
      }
    },
    {
      "url": "https://www.target.com/p/rufflebutts-girls-footless-ruffle-tights/-/A-93969686",
      "tags": "Girls’ Clothing, Hosiery Leggings, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Hosiery Leggings"
      }
    },
    {
      "url": "https://www.target.com/p/rufflebutts-girls-3-pack-footless-ruffle-tights/-/A-1004823532",
      "tags": "Girls’ Clothing, Hosiery Leggings, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Hosiery Leggings"
      }
    },
    {
      "url": "https://www.target.com/p/girls-knee-high-socks-2pk-cat-jack-153-white/-/A-51338568",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/rawlings-baseball-softball-belt-and-socks-combo-set/-/A-90320144",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-2pk-knee-high-socks-navy-cat-jack-153/-/A-51338565",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-knee-high-socks-2pk-cat-jack-153-black/-/A-51338573",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fancy-floral-girls-sheer-tights-black-2-4/-/A-1004592973",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-sweet-mini-dots-sheer-tights-silver-12-14/-/A-1004593112",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-zoe-zigzag-sheer-tights-black/-/A-1004592392",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights, Leg Warmers",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-liquid-metal-girl-s-shimmer-tights-black-multi-2-4/-/A-1004590033",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-essentials-cotton-tights/-/A-1004593957",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights, Leg Warmers",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-sheer-heather-basic-tights/-/A-1004593495",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-knee-high-socks-cat-38-jack-8482-navy-blue-white/-/A-90850040",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-39-smiley-39-fashion-knee-high-cat-38-jack-8482-heather-blue/-/A-90850038",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-39-bees-39-knee-high-socks-cat-38-jack-8482/-/A-93276927",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-leopard-knee-socks-cat-38-jack-8482-mauve/-/A-94472236",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-cotton-blend-knee-high-girls-uniform-socks/-/A-1003336591",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-wide-ribbed-cotton-blend-uniform-knee-socks/-/A-1003304232",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-cable-knit-girls-cotton-blend-knee-high-socks/-/A-1003304035",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-2pk-pumpkin-sparkle-and-striped-halloween-knee-high-socks-cat-38-jack-8482/-/A-94472292",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-over-the-knee-flat-knit-cotton-blend-uniform-socks/-/A-93664499",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights, Over the Knee Socks",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-chunky-ribbed-knit-knee-high-socks/-/A-1003304124",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-star-shine-knee-high-socks/-/A-1003400342",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-2pk-sparkle-eye-and-striped-halloween-knee-high-socks-cat-38-jack-8482/-/A-94472297",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-chain-stitch-knee-high-socks/-/A-1003451694",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-all-over-bow-knee-high-socks/-/A-1003334796",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-s-3-pair-pack-soft-stripe-knee-high-socks/-/A-1003336586",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-girls-cotton-blend-knee-high-sock/-/A-1003311261",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-sweetheart-studded-knee-high-socks/-/A-1003336832",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-glitter-unicorn-knee-high-socks/-/A-1003365852",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-multi-stone-knee-high-socks/-/A-1003401588",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-twotone-varsity-stripe-knee-high-socks/-/A-1003334385",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-retro-stripe-cotton-blend-thin-ribbed-knee-high-socks/-/A-1003336431",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-sweet-bow-cotton-blend-knee-high-socks/-/A-1003365775",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-varsity-knee-high-socks/-/A-1003366098",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-cuffed-opaque-knee-high-socks/-/A-1003300106",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-fuzzy-heart-knee-high-socks/-/A-1003329330",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-beach-more-worry-less-knee-sock/-/A-1003334642",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fly-sky-high-butterfly-girls-cotton-blend-knee-socks/-/A-1003336899",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-athletic-smiley-cotton-blend-knee-high-socks/-/A-1003336362",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-dazzling-hearts-girls-cotton-blend-knee-high-socks/-/A-1003400299",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-crochet-bow-cotton-blend-knee-high-sock/-/A-1003304382",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-fuzzy-bow-knee-high-socks/-/A-1003329139",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-ribbed-cotton-blend-knee-high-sock/-/A-1003336616",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-be-happy-bear-knee-high-socks/-/A-1003336354",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tennis-star-knee-high-socks/-/A-1003329164",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-color-block-stripe-stretch-cotton-knee-sock/-/A-1003334324",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-crochet-ruffle-design-knee-high-socks/-/A-1003329346",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-varsity-stripe-checkered-heart-cotton-rich-knee-sock/-/A-1003334370",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-multi-stripe-smiley-cotton-blend-knee-high-sock/-/A-1003336375",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pastel-butterfly-girls-knee-high-sock/-/A-1003402574",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-essential-modal-knee-high-kids-socks/-/A-1003301634",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pointelle-soft-stretch-cotton-knee-socks/-/A-1003334773",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-whatever-girls-knee-high-cotton-blend-sock/-/A-1003402114",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-triple-stripe-knee-high-socks-white-black-4/-/A-1003460613",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pointelle-dot-knee-high-socks/-/A-1003452466",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-basic-sheer-knee-highs/-/A-1003409458",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-camp-love-knee-high-socks-blue-14/-/A-1003460598",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-jazzy-jeweled-girls-cotton-blend-knee-socks/-/A-1003336873",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fun-fuzzy-girls-polka-dot-cotton-blend-knee-socks/-/A-1003336849",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-a-speck-of-spots-polka-dot-knee-high-socks/-/A-1003336842",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-side-pearls-cotton-blend-knee-high-socks/-/A-1003460869",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-floral-pearl-girls-cotton-blend-knee-high-socks/-/A-1003336923",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-gold-and-gilded-butterfly-knee-high-cotton-blend-girls-socks/-/A-1003336917",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-gemstone-knee-high-socks/-/A-1003400059",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-camp-rules-girls-knee-high-sock/-/A-1003402083",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fuzzy-and-fun-girls-pom-pom-cotton-blend-knee-socks/-/A-1003336905",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-rhinestone-heart-girls-knee-high-cotton-blend-socks/-/A-1003399968",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-foil-and-foliage-cotton-blend-girls-knee-socks/-/A-1003336867",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-omg-girls-cotton-blend-knee-high-sock/-/A-1003402237",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-sky-s-the-limit-girls-pom-pom-knee-socks/-/A-1003363907",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-hello-knee-high-socks-black-14/-/A-1003460825",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-athletic-stripe-cotton-blend-knee-high-socks/-/A-1003402898",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-opaque-stretch-cotton-blissful-bloom-knee-high-sock/-/A-1003334254",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-cotton-blend-swiss-dot-knee-high-socks/-/A-1003451744",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-bebrave-knee-high-socks/-/A-1003451552",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/100-cool-knee-high/-/A-1003329055",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-soft-stretch-cotton-ribbed-more-summer-knee-socks/-/A-1003334449",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-crystal-bear-knee-high-socks/-/A-1003336455",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-embroidered-crest-cotton-knee-high-socks/-/A-1003329119",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/embossed-summer-knee-high/-/A-1003329075",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-marled-ribbed-stripe-girls-cotton-blend-knee-high-socks/-/A-1003336421",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-fuzzy-stripe-cotton-blend-knee-high-socks/-/A-1003336398",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-diamond-zag-knee-high-sock-with-scalloped-cuff/-/A-1003451664",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-herringbone-thin-ribbed-knee-high/-/A-1003336382",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-stretch-cotton-multi-heart-design-knee-sock/-/A-1003334433",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-sport-stripe-cotton-blend-knee-high-socks/-/A-1003336303",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tennis-m-knee-high-socks/-/A-1003329151",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-open-work-heart-knee-high-socks/-/A-1003329373",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-cotton-blend-ruler-knee-high-socks/-/A-1003336477",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-stretch-cotton-bow-trim-knee-sock/-/A-1003334667",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-double-diamond-cotton-blend-knee-high-socks/-/A-1003451626",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-high-climbers-embroidered-floral-knee-high-socks/-/A-1003335258",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pearls-and-stripes-jeweled-girls-knee-high-socks/-/A-1003335274",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/lands-end-kids-solid-cable-knee-socks-3-pack/-/A-89402531",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-pete-rugby-knee-high-socks/-/A-1003810036",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-company-lace-top-knee-high-socks/-/A-1003631835",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-knee-high-diamond-pattern-girl-socks-set-of-4/-/A-94136162",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/rufflebutts-girls-3-pack-knee-high-socks-dark-cherry-white-fir-green-4t-6/-/A-93173589",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-crochet-knee-high-socks-2-pack/-/A-1001830739",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-lace-ruffles-and-bow-knee-high-girl-socks-set-of-3/-/A-1000900457",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/copper-zone-fun-holiday-cheer-knee-high-compression-socks-great-stockin-stuffers-3-pair-pack/-/A-88084947",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-lace-ruffles-and-bow-knee-high-girl-socks-set-of-2/-/A-1000549869",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-pete-dot-knee-high-socks/-/A-1003810035",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/wrapables-lace-ruffles-and-bow-knee-high-girl-socks-set-of-5/-/A-93998526",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/jefferies-socks-kid-s-striped-knee-high-tube-socks-1-pair-medium-shoe-sizes-12-6-yellow/-/A-1003090087",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/little-love-bug-company-eyelet-knee-high-socks/-/A-1003630652",
      "tags": "Girls’ Clothing, Kids’ Clothing, Knee High Socks, Socks & Tights, Crew Socks, Socks & Underwear, Toddler Boys’ Clothing, Toddler Clothing",
      "filters": {
        "type": "Knee High Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-dance-leg-warmers-cat-jack-one-size/-/A-93297697",
      "tags": "Girls’ Clothing, Kids’ Clothing, Leg Warmers, Socks & Tights",
      "filters": {
        "type": "Leg Warmers"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-6pk-liner-socks-all-in-motion-8482-white/-/A-93276915",
      "tags": "Girls’ Clothing, Kids’ Clothing, Liner Socks, Socks & Tights",
      "filters": {
        "type": "Liner Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-10pk-lightweight-no-show-socks-cat-jack-153/-/A-53096782",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-squishmallows-6pk-no-show-socks-ivory/-/A-90041641",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights, No Show Socks",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-frozen-6pk-no-show-socks-blue-gray/-/A-85638500",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-low-cut-socks-cat-38-jack-8482-pink-white-blue/-/A-90898566",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/boys-8pk-low-cut-socks-dealworthy-8482-white-gray-black/-/A-90629748",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-low-socks-cat-38-jack-8482-white/-/A-93276917",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kid-s-low-cut-socks-3pr-pack/-/A-1003311600",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-microfiber-liner-socks-6-pack-pastel-brights/-/A-1003403096",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-unisex-quarter-crew-kids-sport-socks-3-pack/-/A-1003311383",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-8pk-ankle-socks-dealworthy-8482-dark-pink/-/A-94472266",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/godzilla-kids-5-pair-pack-lowcut-socks/-/A-1003867155",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights, No Show Socks",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-watermelon-no-show-cotton-blend-socks-3-pack-assorted/-/A-1003430042",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/textiel-trade-kid-s-disney-mickey-mouse-fun-day-fluffy-socks-2-pack/-/A-1003286435",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-rock-on-5-pair-pack-of-lowcut-socks/-/A-1003809910",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/godzilla-kids-5-pair-lowcut-socks/-/A-1003883678",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights, No Show Socks",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-shippuden-kids-5-pair-pack-lowcut-socks/-/A-1003907100",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights, No Show Socks",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/dragon-ball-super-kids-5-pair-pack-lowcut-socks/-/A-1003741542",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-cool-cat-5-pair-pack-lowcut/-/A-1003810151",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-all-season-5-pair-pack-lowcut-socks/-/A-1003844148",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-i-heart-pete-3-pair-pack-of-lowcut-socks/-/A-1003809912",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-easter-3-pair-lowcut-socks/-/A-1003857437",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/naruto-kids-5-pair-lowcut-socks/-/A-1003868110",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-christmas-3-pair-pack-lowcut-socks/-/A-1003844090",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/pete-the-cat-kids-st-patrick-s-day-3-pair-pack-lowcut-socks/-/A-1003857436",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/one-piece-kids-icons-5-pair-lowcut-socks/-/A-1003805340",
      "tags": "Girls’ Clothing, Kids’ Clothing, Low Cut Socks, Socks & Tights",
      "filters": {
        "type": "Low Cut Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-hello-kitty-6pk-no-show-socks/-/A-90021720",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-lilo-stitch-no-show-socks-pink/-/A-84199674",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-barbie-6pk-socks/-/A-87694813",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-pokemon-friends-6pk-no-show-socks-blue/-/A-88552828",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-nintendo-super-mario-6pk-socks-blue-gray/-/A-81520856",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-disney-princess-6pk-socks/-/A-87694785",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-premium-girls-6pk-no-show-socks-colors-may-vary/-/A-81623890",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-premium-girls-6pk-no-show-solid-socks-colors-may-vary/-/A-81623815",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-10pk-lightweight-no-show-striped-socks-cat-38-jack-8482/-/A-89806654",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-bluey-6pk-no-show-socks-blue/-/A-90170780",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-6pk-39-marled-39-super-soft-no-show-socks-cat-38-jack-8482-purple-pink-gray/-/A-90873437",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-6pk-39-cat-dog-39-super-soft-no-show-socks-cat-38-jack-8482/-/A-90873436",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-6pk-no-show-socks-all-in-motion-white/-/A-92878062",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-6pk-no-show-socks-all-in-motion-8482/-/A-90898564",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-7pk-low-cut-unicorn-socks-cat-38-jack-8482-cream/-/A-90850050",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/kids-39-6pk-no-show-socks-all-in-motion-8482-white/-/A-93276947",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-39-20pk-super-soft-no-show-socks/-/A-94472293",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/hanes-girls-20pk-no-show-socks-white/-/A-93666808",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-gabbey-39-s-dollhouse-no-show-socks-light-pink/-/A-94660049",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-no-show-socks-moana/-/A-94050325",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-wicked-6pk-no-show-socks/-/A-93717552",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-disney-stitch-no-show-socks-pink/-/A-94793537",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-wicked-no-show-socks-ivory/-/A-94781797",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/jurassic-park-socks-kids-t-rex-dinosaur-world-ankle-no-show-socks-4-pack-multicoloured/-/A-87877633",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/bioworld-kirby-character-game-design-6-pack-youth-no-shoe-ankle-socks-size-7-9-multicoloured/-/A-91963026",
      "tags": "Girls’ Clothing, Kids’ Clothing, No Show Socks, Socks & Tights",
      "filters": {
        "type": "No Show Socks"
      }
    },
    {
      "url": "https://www.target.com/p/alexa-rose-girl-s-opaque-tights/-/A-90015041",
      "tags": "Girls’ Clothing, Kids’ Clothing, Over the Knee Socks, Socks & Tights",
      "filters": {
        "type": "Over the Knee Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-pantyhose-2pk-cat-jack-153/-/A-51263376",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/girls-2pk-pantyhose-cat-jack-153/-/A-53316216",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-floral-embroidery-roselle-sheer-tights/-/A-1004633371",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-flower-bunches-sheer-tights/-/A-1004568982",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-honeycomb-knit-sheer-nylon-tights-glacier-gray-8-10/-/A-1004590275",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-mini-me-mini-net-girls-fishnet-tights/-/A-1004540109",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-3-pair-pack-basic-sheer-30-denier-tights-nude-a-14-16/-/A-1004546517",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-micronet-soft-breathable-tights-winter-white-4-6/-/A-1004540697",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-art-deco-sheer-net-nylon-tights-black-l/-/A-1004634333",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-sheer-vine-opaque-tights/-/A-93671015",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-glittering-butterfly-sheer-nylon-tights/-/A-1004634257",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-chevron-wave-sheer-nylon-tights/-/A-1004569023",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-polka-dot-heart-sheer-girls-tights/-/A-1004633981",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-sheer-geo-art-deco-inspired-tights-black-2-4/-/A-1004592883",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-sparkling-glitter-heart-tights/-/A-1004613828",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-women-s-printed-lace-back-nylon-tights/-/A-1004613024",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-railroad-pointelle-nylon-tights/-/A-1004541160",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essential-sheer-nylon-pantyhose/-/A-92513316",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights, Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-sweet-blossoms-girls-sheer-floral-lace-pantyhose/-/A-92459647",
      "tags": "Girls’ Clothing, Kids’ Clothing, Pantyhose, Socks & Tights",
      "filters": {
        "type": "Pantyhose"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-kids-3-pair-pack-mid-cut-cotton-blend-socks/-/A-1003311853",
      "tags": "Girls’ Clothing, Kids’ Clothing, Quarter Socks, Socks & Tights",
      "filters": {
        "type": "Quarter Socks"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-fashion-cotton-39-black-dot-39-sweater-tights-cat-38-jack-8482-off-white/-/A-90873439",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Sweater Tights",
      "filters": {
        "type": "Sweater Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-39-hearts-39-cotton-tights-cat-38-jack-8482-ivory/-/A-93277665",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Sweater Tights",
      "filters": {
        "type": "Sweater Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-cotton-blend-sweater-tights/-/A-92512913",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Sweater Tights, Tights",
      "filters": {
        "type": "Sweater Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-cotton-blend-opaque-sweater-tights/-/A-93503061",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Sweater Tights, Tights",
      "filters": {
        "type": "Sweater Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-metallic-shimmer-opaque-tights/-/A-93670700",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-shining-star-shimmer-tights/-/A-92513611",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-swiss-dot-tights-cat-jack-fresh-white/-/A-79382488",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-cotton-tights-cat-38-jack-8482-white/-/A-90752917",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-2pk-glitter-butterfly-nylon-tights-cat-jack-black-white/-/A-89805342",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/capezio-ultra-soft-self-knit-waistband-stirrup-tight-girls-toddler/-/A-86530834",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-dance-footless-tights-cat-jack-black/-/A-93297714",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-39-silver-smiley-39-nylon-fashion-tights-cat-38-jack-8482/-/A-90850031",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-dance-footless-tights-cat-jack/-/A-94646377",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-nylon-dance-tights-cat-38-jack-8482-black/-/A-93277695",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-2pk-cotton-tights-cat-38-jack-8482-ivory/-/A-94472273",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/girls-39-footless-ribbed-tights-cat-38-jack-8482-heather-gray/-/A-93277691",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-opaque-nylon-footless-tights/-/A-92449113",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-cotton-blend-cable-tights/-/A-92513556",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-dot-semi-opaque-nylon-tights/-/A-93706135",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-soft-pima-cotton-opaque-tights/-/A-93762925",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-wave-semi-opaque-nylon-tights/-/A-93583441",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essentials-semi-opaque-40-denier-tights/-/A-93665492",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-flowers-and-diamonds-girls-opaque-tights/-/A-93665456",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-soft-pima-cotton-opaque-tights/-/A-93665797",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-essentials-nylon-tights/-/A-93672017",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-diamond-semi-opaque-nylon-tights/-/A-93582157",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-swirled-floral-girls-opaque-tights/-/A-93670795",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-bows-in-the-back-opaque-girls-tights/-/A-93670880",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-supreme-cotton-blend-non-pilling-opaque-tights/-/A-93731566",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-flocked-star-opaque-nylon-tights/-/A-93706164",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-velvet-touch-opaque-tights/-/A-93665378",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-double-diamond-opaque-nylon-tights/-/A-93573795",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-prism-textured-microfiber-opaque-tights/-/A-93578456",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-polka-spot-girls-opaque-tights/-/A-93669968",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-textured-toes-girls-ribbed-tights/-/A-93665289",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-sweet-heart-flocked-opaque-tights/-/A-93576773",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-dots-for-tots-flocked-opaque-tights/-/A-93670741",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-blackout-thermal-heat-tights/-/A-93665957",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-sunny-days-opaque-stretch-cotton-tights/-/A-1004617466",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-splatter-paint-opaque-stretch-cotton-tights/-/A-1004617371",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-3-pair-pack-semi-opaque-tights/-/A-93665515",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-strawberry-feet-forever-printed-girls-opaque-tights/-/A-93576244",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-rhinestone-backseam-semi-opaque-tights/-/A-93665993",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pima-cotton-footless-tights/-/A-93665941",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-checkerboard-plaid-opaque-tights/-/A-93573817",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-heavenly-heather-girls-opaque-tights/-/A-93573724",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-into-the-woods-girls-opaque-tights/-/A-93576263",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-on-the-dot-embellished-girls-opaque-tights/-/A-93670836",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-velvet-back-seam-opaque-girls-tights/-/A-93573813",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essentials-herringbone-opaque-tights/-/A-93573776",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-flocked-floral-opaque-tights/-/A-93671085",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-blackout-thermal-heat-footless-girls-tights/-/A-93665969",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-solid-cotton-girls-sweater-tights/-/A-1004663592",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-basic-complete-opaque-tights/-/A-93665426",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-totally-opaque-microfiber-tights/-/A-93672354",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-diamonds-on-down-jeweled-girls-opaque-tights/-/A-93670948",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-marvelous-modal-girls-opaque-tights/-/A-93665977",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-infant-winter-opaque-nylon-tights/-/A-1004530779",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-unique-link-opaque-tights/-/A-93669719",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-shiny-floral-vine-tights-light-gray-8-10/-/A-1004576783",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-outline-heart-cotton-tights-black-14/-/A-1004598507",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-basic-perfect-semi-opaque-sheer-tights-honey-8-10/-/A-1004546663",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-3-pair-pack-basic-sheer-30-denier-tights-nude-10-12/-/A-1004546514",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-chain-cotton-blend-tights-winter-white-6/-/A-1004599913",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-flocked-bow-backseam-opaque-tights-black-12-14/-/A-93576827",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-color-blocked-cotton-tights/-/A-1004602361",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-diamond-dot-semi-opaque-microfiber-tights-white-6-8/-/A-1004616796",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pinned-ribbed-cotton-blend-girls-tights-white-14/-/A-1004652158",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-solid-girl-s-opaque-microfiber-tights-2-pack-white-white-7-10/-/A-1004639954",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-sheer-argyle-nylon-tights-black-8-10/-/A-1004549036",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-flocked-dots-nylon-tights-navy-6-8/-/A-1004576873",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essentials-vertical-stripe-tights/-/A-1004539784",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-shine-bright-diamond-tights-white-12-14/-/A-1004576820",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-herringbone-bow-back-tights/-/A-1004610227",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-shimmering-sheer-nylon-tights/-/A-1004610363",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-opaque-fine-ribbed-nylon-tights/-/A-1004533080",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-elegant-ribbed-nylon-tights-black-2-4/-/A-1004539154",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essential-ribbed-cotton-tights-black-6/-/A-1004651573",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-diamond-semi-opaque-tights/-/A-1004616944",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-leaping-leopard-opaque-nylon-tights/-/A-1004568939",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essential-ribbed-heather-tights-black-8-10/-/A-1004576730",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-railroad-flip-stitch-semi-opaque-nylon-tights-winter-white-2-4/-/A-1004601159",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-heathered-heart-opaque-nylon-tights-black-12-14/-/A-1004576753",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-essential-ribbed-heather-nylon-tights/-/A-1004513293",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-feet-your-heart-out-printed-girls-tights/-/A-1004610970",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pretty-pineapple-opaque-tights/-/A-93575454",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-retro-halftone-polka-dot-tights/-/A-1004610645",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-shimmering-star-gazer-opaque-girls-tights/-/A-1004610541",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-thin-ribbed-cotton-tights/-/A-1004568729",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-pelerine-stitch-girl-s-cotton-blend-tights/-/A-1004568899",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-lots-of-dots-fine-cotton-tights/-/A-1004611098",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-color-splatter-opaque-nylon-tights/-/A-1004576716",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-flocked-back-seam-opaque-tights-black-14-16/-/A-93576325",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-ribbed-supreme-cotton-blend-non-pilling-tights/-/A-1004568868",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-arrow-opaque-cotton-tights/-/A-1004601139",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-lurex-side-seam-opaque-sparkle-tights/-/A-1004612642",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-thin-ribbed-speckled-cotton-tights/-/A-1004568820",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-3-pair-pack-essential-rhumba-opaque-tights/-/A-1004640154",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-2-pair-pack-nylon-heart-tights/-/A-1004637693",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-floral-lace-girl-s-tights-2-pack/-/A-1004634365",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-pique-chain-pima-cotton-tights/-/A-1004600610",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-women-s-flocked-sassy-bow-nylon-tights/-/A-1004612321",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-crystal-backseam-opaque-girls-tights-black-2-4/-/A-93576399",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-all-over-star-flocked-opaque-tights/-/A-93577438",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-mini-bow-flocked-opaque-tights-white-14-16/-/A-1004598407",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-runway-ready-rhinestone-girls-tights-black-8-10/-/A-1004576702",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-studded-beauty-sparkly-tights/-/A-1004568925",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-glam-studded-crystal-opaque-girls-tights/-/A-93670755",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-infant-shimmer-pointelle-cotton-tights/-/A-1004611769",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-tennis-m-cotton-tights/-/A-1004616988",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girl-s-bow-opaque-cotton-tights/-/A-1004614185",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-cozy-chenille-abc-cotton-tights/-/A-1004614081",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-ribbed-shimmer-cotton-blend-girls-tights/-/A-1004603027",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-multi-heart-graffiti-cotton-tights/-/A-1004617050",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-bright-stripe-cotton-tights/-/A-1004617306",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/memoi-girls-iridescent-shimmer-opaque-cotton-tights-charcoal-10/-/A-1004602759",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/strawberry-shortcake-berry-child-s-tights/-/A-92998481",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/levante-funny-legs-girl-s-cotton-tights/-/A-1004640921",
      "tags": "Girls’ Clothing, Kids’ Clothing, Socks & Tights, Tights",
      "filters": {
        "type": "Tights"
      }
    },
    {
      "url": "https://www.target.com/p/paw-patrol-zuma-rubble-rocky-4-pack-t-shirts-little-kid-to-big-kid/-/A-87042291",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/seven-times-six-teenage-mutant-ninja-turtles-shirt-boy-s-raphael-short-sleeve-costume-top-green/-/A-1005103068",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/paw-patrol-chase-marshall-rubble-rocky-4-pack-graphic-t-shirts-toddler-to-big-kid/-/A-1001926051",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/teenage-mutant-ninja-turtles-leonardo-michelangelo-raphael-donatello-2-pack-t-shirts-little-kid-to-big-kid/-/A-87217892",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/nickelodeon-garfield-t-shirt-sets-1-14-year-odie-otto-pooky-outfit-party-tee-toddlers-birthday-to-collectable-kids-clothes-gift/-/A-1002409513",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-danny-phantom-classic-ghost-logo-t-shirt/-/A-82359714",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-catdog-love-the-earth-t-shirt/-/A-88716233",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/blaze-and-the-monster-machines-little-boys-2-pack-graphic-t-shirts-red-blue-7/-/A-85270906",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nickelodeon, Tops",
      "filters": {
        "brand": "Nickelodeon"
      }
    },
    {
      "url": "https://www.target.com/p/boys-39-nintendo-bowser-short-sleeve-graphic-t-shirt-red/-/A-92993134",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-adventure-of-link-t-shirt/-/A-87422364",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boys-nintendo-super-mario-shirt-mario-luigi-zelda-kirby-and-donkey-kong-vintage-tee/-/A-1000105600",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boys-nintendo-super-mario-shirt-mario-luigi-zelda-kirby-and-donkey-kong-vintage-tee/-/A-1000105562",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boys-nintendo-mario-costume-hoodie-mario-and-luigi-classic-video-game-cosplay-dress-up-costume-hoodie/-/A-1000105669",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-bowser-t-shirt/-/A-82358483",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-big-brother-performance-tee/-/A-82370481",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-sidekick-yoshi-t-shirt/-/A-82372364",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-retro-rainbow-ring-performance-tee/-/A-85433138",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-character-guide-performance-tee/-/A-89598151",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-lil-bro-luigi-t-shirt/-/A-82354960",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-piranha-oh-snap-t-shirt/-/A-79712006",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-star-fox-logo-t-shirt/-/A-86376682",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-characters-t-shirt/-/A-82369613",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-animal-crossing-favorite-lineup-t-shirt/-/A-82351624",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-merchant-buy-something-t-shirt/-/A-86061827",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-and-yoshi-retro-super-t-shirt/-/A-82355942",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-triforce-fade-t-shirt/-/A-82354616",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-characters-wall-t-shirt/-/A-82361734",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-classic-stripes-t-shirt/-/A-82366257",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-tears-of-the-kingdom-game-logo-t-shirt/-/A-89419895",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-arcade-performance-tee/-/A-85132409",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-running-yoshi-performance-tee/-/A-89597938",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-explore-hyrule-performance-tee/-/A-93074545",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-ocarina-of-time-performance-tee/-/A-89598125",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-character-line-up-performance-tee/-/A-93074452",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-kirby-flying-portrait-performance-tee/-/A-89419990",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-breath-of-the-wild-portrait-performance-tee/-/A-93074565",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-ugly-christmas-mario-jump-star-t-shirt/-/A-80219671",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-my-skills-are-legendary-link-performance-tee/-/A-93074661",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-1985-box-art-performance-tee/-/A-87422458",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-bros-pixel-cast-with-names-performance-tee/-/A-85827644",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-luigi-little-brother-performance-tee/-/A-89598014",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-jump-t-shirt/-/A-82370638",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-marker-mario-performance-tee/-/A-89598032",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-flying-raccoon-mario-t-shirt/-/A-82366733",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-performance-tee/-/A-89598156",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-group-t-shirt/-/A-82373693",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-s-awakening-switch-logo-performance-tee/-/A-89597928",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-pikmin-3-deluxe-a-guide-to-pikmin-performance-tee/-/A-93074422",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-kirby-black-and-white-portrait-performance-tee/-/A-89420131",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-classically-trained-performance-tee/-/A-87422488",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-cast-t-shirt/-/A-1001939510",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-boo-ghost-mosaic-t-shirt/-/A-79711968",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-heroes-performance-tee/-/A-89597930",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-hidden-pattern-t-shirt/-/A-82353270",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-triforce-t-shirt/-/A-82352305",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-controller-t-shirt/-/A-86375917",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-jump-t-shirt/-/A-79783091",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-a-link-to-the-past-performance-tee/-/A-1001412796",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-koopa-king-bowser-performance-tee/-/A-87422448",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-breath-of-the-wild-arch-t-shirt/-/A-82354373",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-group-t-shirt/-/A-1001939465",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-spirit-tracks-link-performance-tee/-/A-89598042",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-favorites-performance-tee/-/A-89598024",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-a-link-to-the-past-t-shirt/-/A-93074501",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-circle-icon-t-shirt/-/A-1001034477",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-lucky-luigi-retro-performance-tee/-/A-85886817",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-bros-team-performance-tee/-/A-87422366",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-get-on-my-level-performance-tee/-/A-93074391",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-splatoon-inkling-squid-performance-tee/-/A-89598134",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-classic-poster-performance-tee/-/A-93074417",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-link-watercolor-pattern-t-shirt/-/A-81914538",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-legend-of-zelda-triforce-fade-performance-tee/-/A-89598019",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-retro-yoshi-t-shirt/-/A-93074342",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-party-t-shirt/-/A-82358593",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-mario-kart-rainbow-road-racing-performance-tee/-/A-87422429",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-tanooki-racoon-mario-performance-tee/-/A-85827824",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-st-patrick-s-day-lucky-yoshi-retro-performance-tee/-/A-85886449",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-nes-classic-controller-performance-tee/-/A-84634752",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-watercolor-yoshi-performance-tee/-/A-93074586",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-super-mario-group-t-shirt/-/A-1001034466",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-luigi-little-brother-t-shirt/-/A-79783031",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-tears-of-the-kingdom-master-sword-icon-t-shirt/-/A-89419857",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-zelda-breath-of-the-wild-eye-t-shirt/-/A-82371663",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-halloween-boo-pumpkin-t-shirt/-/A-84089601",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-the-legend-of-zelda-tears-of-the-kingdom-gold-hyrule-crest-t-shirt/-/A-89419909",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-donkey-kong-banana-barrels-t-shirt/-/A-93074387",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
      }
    },
    {
      "url": "https://www.target.com/p/boy-s-nintendo-splatoon-character-collage-t-shirt/-/A-85089398",
      "tags": "Boys’ Clothing, Graphic Tees, Kids’ Clothing, Netflix, Nintendo, Tops",
      "filters": {
        "brand": "Nintendo"
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
