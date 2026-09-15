/**
 * The three commercial product-category pages under /products.
 *
 * All page copy lives here so it can be edited without touching the page
 * template. The same editorial rules as lib/capabilities.ts apply:
 *
 *  - Never name a manufacturing partner, its parent company or city, and
 *    never use a branded or trademarked ingredient name.
 *  - No health, medical or disease claims. Describe the positioning a
 *    customer can formulate toward, never an effect the product will have.
 *  - No numbers we have not confirmed — minimum order quantities, lead
 *    times, shelf life and certifications are scoped per project and are
 *    deliberately not stated here.
 *  - Malaysia is transparent company information (About, Contact, footer),
 *    not a headline — keep it out of titles and descriptions.
 */

export interface CategoryItem {
  name: string;
  desc: string;
}

export interface CategoryChoice {
  name: string;
  note: string;
  options: string[];
}

export interface CategoryFaq {
  q: string;
  a: string;
}

export interface CategoryPhoto {
  /** Production photo path under /public. */
  src: string;
  /** Screen-reader and search-engine description. */
  alt: string;
  /** Fallback caption if the photo cannot be loaded. */
  label: string;
}

export interface ProductCategory {
  slug: string;
  /** Short label used in the footer, breadcrumbs and related-category links. */
  navLabel: string;
  /** Link cue printed on the matching homepage format card. */
  cardLinkLabel: string;
  /** One line used on the category cards on /products. */
  cardDesc: string;
  eyebrow: string;
  /** Browser tab and search-result title. */
  title: string;
  /** Search-result description, around 155 characters. */
  description: string;
  h1Lead: string;
  h1Em: string;
  intro: string;
  hero: CategoryPhoto;
  buildsHeading: string;
  buildsIntro: string;
  builds: CategoryItem[];
  choicesHeading: string;
  choicesIntro: string;
  choices: CategoryChoice[];
  functionsHeading: string;
  functionsCopy: string;
  /** Capability function ids most often formulated in this category. */
  functionIds: string[];
  packagingHeading: string;
  packagingCopy: string;
  packagingOptions: CategoryItem[];
  packagingPhoto: CategoryPhoto;
  processHeading: string;
  processCopy: string;
  processPhoto: CategoryPhoto;
  faqs: CategoryFaq[];
  ctaHeading: string;
  ctaCopy: string;
}

export const CATEGORIES: ProductCategory[] = [
  {
    slug: "drink-powders",
    navLabel: "Drink powders",
    cardLinkLabel: "Explore drink powders",
    cardDesc:
      "Greens, fruit-powder, protein, multigrain, sport and fibre blends — the most flexible way to carry an ingredient.",
    eyebrow: "Product category",
    title: "OEM Drink Powder Manufacturing & Private-Label Blends | ATW",
    description:
      "Develop a drink powder under your own brand — greens, superfood, fruit-powder, protein and sport blends. Custom formulation, sampling and OEM production.",
    h1Lead: "Drink powders, built around",
    h1Em: "your hero ingredient.",
    intro:
      "A drink powder is the most forgiving place to start a wellness brand. Almost any ingredient someone believes in can be carried in one, and flavour, sweetness and serving size can all be tuned without going back to the beginning. Bring us the ingredient — or just the idea of it — and we develop the blend around it.",
    hero: {
      src: "/placeholders/format-drink-powders.jpg",
      alt: "Green superfood drink powder with a scoop and single-serve sachets",
      label: "green powder scoop, sachets",
    },
    buildsHeading: "What a drink powder can be",
    buildsIntro:
      "These are the directions customers most often take. They overlap happily — a greens blend with added protein is a normal request, not an awkward one.",
    builds: [
      {
        name: "Greens & superfood blends",
        desc: "Wheatgrass, moringa, spirulina and vegetable-and-fruit powders, balanced until the result is something people will genuinely drink every morning.",
      },
      {
        name: "Fruit-powder drink mixes",
        desc: "The most flexible base we have. Most functional directions can ride on a fruit-powder mix, which is why so many first products start here.",
      },
      {
        name: "Protein & meal-replacement shakes",
        desc: "Whey, soy, pea, rice or almond protein with fibre and vitamin premixes — chocolate, strawberry and vanilla are the usual starting flavours.",
      },
      {
        name: "Multigrain powders",
        desc: "Satiety-led grain blends for breakfast and meal-moment products, with protein and fibre dialled to your nutritional direction.",
      },
      {
        name: "Sport & energy premixes",
        desc: "Energy drink powders, electrolyte drinks and recovery blends for before, during and after training.",
      },
      {
        name: "Fibre & digestive blends",
        desc: "Inulin, oat beta glucan, psyllium husk, resistant dextrin and enzyme or probiotic premixes for everyday digestive-comfort positionings.",
      },
    ],
    choicesHeading: "The parts that are yours to decide",
    choicesIntro:
      "Every one of these is a conversation, not a fixed menu. Arrive with strong opinions on two of them and no view at all on the rest — that is a perfectly normal brief.",
    choices: [
      {
        name: "The base",
        note: "What the powder is mostly made of, and how it dissolves.",
        options: ["Fruit powder", "Greens", "Multigrain", "Protein", "Cocoa", "Creamer base"],
      },
      {
        name: "The functional direction",
        note: "The wellness angle the product is positioned around.",
        options: ["One hero ingredient", "A blend", "A premix layered into a familiar base"],
      },
      {
        name: "Flavour & sweetness",
        note: "Usually where the most sampling rounds go, and worth the time.",
        options: ["Flavour direction", "Sweetness level", "Natural or unsweetened", "Mouthfeel & texture"],
      },
      {
        name: "Serving & format",
        note: "How much powder a person actually uses in one go.",
        options: ["Single-serve sachet", "Stick pack", "Scoop-and-pouch", "Serving size"],
      },
    ],
    functionsHeading: "Functional directions people formulate toward",
    functionsCopy:
      "These are positionings, not promises — the claims a finished product can carry depend on the market it sells into, and we work those through with you. Every ingredient behind them is listed openly in our capability library.",
    functionIds: ["gut", "immunity", "sport", "weight", "protein", "detox", "antioxidant"],
    packagingHeading: "Packed the way your shelf needs it",
    packagingCopy:
      "We support the finished-product packaging process across formats appropriate to your product, confirmed per project. What arrives should be ready for the shelf, carrying your brand and nothing of ours.",
    packagingOptions: [
      {
        name: "Single-serve sachets",
        desc: "The daily-ritual format — one sachet, one serving, easy to sample and easy to gift.",
      },
      {
        name: "Stick packs",
        desc: "Slim, pocketable and well suited to on-the-go and subscription products.",
      },
      {
        name: "Stand-up pouches",
        desc: "Multi-serve packs for scoop products, with your artwork across the face.",
      },
      {
        name: "& more, per project",
        desc: "Tell us the format you have in mind and we will confirm what is workable for your product.",
      },
    ],
    packagingPhoto: {
      src: "/placeholders/format-sachets.jpg",
      alt: "Unbranded single-serve stick packs fanned out",
      label: "unbranded stick packs, fanned",
    },
    processHeading: "How a powder project actually runs",
    processCopy:
      "Concept, formulation, samples in your hands, refinement on your feedback, then production and packaging under your brand — with export support toward the market you are selling into. Powders tend to sample quickly, which is part of why they make such a good first product.",
    processPhoto: {
      src: "/placeholders/products-strip-powders.jpg",
      alt: "Raw ingredient powders with scoops on a development bench",
      label: "raw ingredient powders, scoops",
    },
    faqs: [
      {
        q: "Can I bring my own ingredient?",
        a: "Yes, and it is how a lot of our projects begin. Tell us what the ingredient is and what you want it to do in the product, and we will work out how to carry it in a powder that still tastes good.",
      },
      {
        q: "Do you have existing formulations I can start from?",
        a: "We do. Wheatgrass Coffee and Moringa Chocolate are two we have already developed, and either can be taken as it stands or customised heavily. They are starting points, not limits.",
      },
      {
        q: "Will my brand be the only one on the pack?",
        a: "Yes. Everything we make is OEM or private label — the finished product carries your brand, and ATW stays invisible behind it.",
      },
      {
        q: "What about minimum order quantities and lead times?",
        a: "Those are scoped per project, because they depend on the formulation, the packaging format and the volumes you are planning. Send us the outline of what you want to make and we will come back with real numbers rather than a generic figure.",
      },
    ],
    ctaHeading: "Have a powder in mind?",
    ctaCopy:
      "Tell us the ingredient, the flavour, the market — or just the rough shape of the idea. We will take it from wherever you are.",
  },
  {
    slug: "functional-coffee",
    navLabel: "Functional coffee & beverages",
    cardLinkLabel: "Explore functional coffee",
    cardDesc:
      "Coffee, milk tea, plant milks and instant premixes — a wellness angle inside a drink people already reach for.",
    eyebrow: "Product category",
    title: "Functional Coffee & Instant Beverage OEM Manufacturing | ATW",
    description:
      "Private-label functional coffee, milk tea, plant milks and instant beverage premixes. Custom formulation, sampling and OEM production under your brand.",
    h1Lead: "Coffee people already drink,",
    h1Em: "with something more in it.",
    intro:
      "Coffee is a habit before it is a product, and that is its advantage — nobody has to be persuaded to drink it. Layering a wellness angle into a cup someone already reaches for every morning is one of the easiest ways into the category, and one of the most repeatable. Bring us the angle; we will make sure it still tastes like coffee.",
    hero: {
      src: "/placeholders/format-functional-coffee.jpg",
      alt: "Iced functional latte being poured into a glass",
      label: "pour of iced functional latte",
    },
    buildsHeading: "Beyond black coffee",
    buildsIntro:
      "Instant beverage formats share a lot of the same development work, so a brand that starts with one often adds a second without much friction.",
    builds: [
      {
        name: "Functional coffee",
        desc: "Latte, mocha, cappuccino, white coffee, durian coffee and alkaline coffee — familiar cups with a wellness angle formulated in.",
      },
      {
        name: "Milk tea premixes",
        desc: "Matcha, hazelnut and peach, rose and sweet potato, spirulina — flavour-led or function-led, depending on where you are positioning.",
      },
      {
        name: "Plant & alternative milks",
        desc: "Goat, soy, oat and colostrum milk powders, with functional additions layered in where the positioning calls for it.",
      },
      {
        name: "Meal-replacement beverages",
        desc: "Drink-shaped meal moments built on multigrain or protein bases, for brands selling convenience alongside nutrition.",
      },
      {
        name: "Energy & hydration drinks",
        desc: "Electrolyte and energy drink powders for the sport and daily-hydration shelves.",
      },
      {
        name: "Liquid concentrates",
        desc: "Ready-to-dilute liquid formats such as chlorophyll drinks, in mint and fruit directions.",
      },
    ],
    choicesHeading: "Where a coffee project gets decided",
    choicesIntro:
      "The hard part of a functional coffee is rarely the function. It is keeping the cup enjoyable once the function is in it — so these are the dials we spend the most time on with you.",
    choices: [
      {
        name: "The cup",
        note: "Which familiar drink you are starting from.",
        options: ["Black coffee", "Latte", "Mocha", "White coffee", "Cappuccino", "Milk tea"],
      },
      {
        name: "The functional layer",
        note: "What makes it more than a beverage.",
        options: ["A hero ingredient", "A mushroom or botanical blend", "Protein or collagen", "A vitamin premix"],
      },
      {
        name: "Taste & body",
        note: "Roast character, creaminess and sweetness, tuned across sampling rounds.",
        options: ["Roast direction", "Creamer level", "Sweetness", "Dairy or plant base", "Hot or iced performance"],
      },
      {
        name: "Serving format",
        note: "How the drink reaches the cup.",
        options: ["Single-serve sachet", "Stick pack", "Multi-serve pouch", "Liquid concentrate"],
      },
    ],
    functionsHeading: "Angles that work in a cup",
    functionsCopy:
      "These are positionings a beverage can be formulated toward, not effects we promise. What a finished product may claim depends on the market it sells into, and we work that through with you before production.",
    functionIds: ["brain", "sport", "weight", "beauty", "gut", "immunity", "detox"],
    packagingHeading: "Packed for the morning it belongs to",
    packagingCopy:
      "Packaging is supported across formats appropriate to your product and confirmed per project. For beverages the format is often part of the positioning itself — a stick pack and a scoop pouch sell to different people.",
    packagingOptions: [
      {
        name: "Single-serve sachets",
        desc: "One cup, one sachet. The format most functional coffee brands launch with.",
      },
      {
        name: "Stick packs",
        desc: "Slim packs for desks, gym bags and travel — easy to sample, easy to repeat.",
      },
      {
        name: "Stand-up pouches",
        desc: "Multi-serve packs for households that go through a lot of it.",
      },
      {
        name: "& more, per project",
        desc: "If you have a format in mind that is not listed here, ask — we will confirm what works.",
      },
    ],
    packagingPhoto: {
      src: "/placeholders/products-strip-sachets.jpg",
      alt: "Fanned unbranded sachets and stick packs",
      label: "fanned unbranded sachets / stick packs",
    },
    processHeading: "From first cup to finished pack",
    processCopy:
      "We start from your concept, develop or adapt a formulation, and put real samples in your hands to taste. Your feedback drives the next round — roast, sweetness, creaminess, function — until the cup is right. Then approved formulas move into OEM production, packaging and export support toward your market.",
    processPhoto: {
      src: "/placeholders/products-strip-beverage.jpg",
      alt: "A functional beverage being poured into a glass",
      label: "poured functional beverage",
    },
    faqs: [
      {
        q: "Can you match a coffee taste profile I already like?",
        a: "Tell us what you are drinking now and what you want different about it. Taste direction is exactly the kind of brief we can work from, and it usually saves a sampling round.",
      },
      {
        q: "Can a functional ingredient go into coffee without ruining it?",
        a: "Often, yes — it depends on the ingredient and how much of it the positioning needs. Where an ingredient is difficult in a cup we will say so early, and suggest a format that carries it better.",
      },
      {
        q: "Is Wheatgrass Coffee something I can build on?",
        a: "It is one of our existing formulations and a good illustration of the approach: a familiar coffee ritual with a greens-forward angle. Take it as it stands, adjust it heavily, or treat it purely as proof of what we can develop for you.",
      },
      {
        q: "What quantities do you produce?",
        a: "Volumes, timelines and packaging specifics are scoped per project. Share what you are planning and we will come back with numbers that apply to your product rather than an off-the-shelf answer.",
      },
    ],
    ctaHeading: "Thinking about a coffee brand?",
    ctaCopy:
      "Bring the angle, the flavour direction or the market you want to reach. The first conversation costs nothing and usually clarifies a lot.",
  },
  {
    slug: "wellness-chocolate",
    navLabel: "Wellness chocolate & bars",
    cardLinkLabel: "Explore wellness chocolate",
    cardDesc:
      "Cocoa drinks, meal-replacement shakes, protein bars and supplement formats, led by taste as much as function.",
    eyebrow: "Product category",
    title: "Wellness Chocolate, Cocoa & Protein Bar Manufacturing | ATW",
    description:
      "Private-label chocolate drinks, cocoa blends and protein or wellness bars. Custom formulation, sampling and OEM production, with your brand on every pack.",
    h1Lead: "Chocolate that carries",
    h1Em: "more than comfort.",
    intro:
      "Chocolate has a rare advantage in wellness: it is indulgent on the tongue while doing something useful underneath. Cocoa masks a lot, which means ingredients that struggle elsewhere can often be carried comfortably here — and people reach for the product because they want it, not only because it is good for them.",
    hero: {
      src: "/placeholders/format-wellness-chocolate.jpg",
      alt: "Cocoa powder and chocolate pieces on a work surface",
      label: "cocoa powder + chocolate pieces",
    },
    buildsHeading: "Cocoa, in more than one shape",
    buildsIntro:
      "Drinks and bars ask for different development work, but they share ingredients and positioning — which is why brands often launch one and add the other later.",
    builds: [
      {
        name: "Hot chocolate & cocoa drinks",
        desc: "Indulgent chocolate bases carrying functional ingredients, formulated to stay smooth rather than chalky.",
      },
      {
        name: "Cocoa oat blends",
        desc: "Chocolate and oat together for a breakfast-moment product, with fibre built into the base.",
      },
      {
        name: "Chocolate meal replacements",
        desc: "Satiety-led chocolate shakes with protein, fibre and vitamin premixes dialled to your nutritional direction.",
      },
      {
        name: "Protein bars",
        desc: "Bar formats carrying protein and functional ingredients, for brands that want something to hand over rather than mix.",
      },
      {
        name: "Chocolate wellness bars",
        desc: "Cocoa-led bars positioned around a functional angle instead of confectionery alone.",
      },
      {
        name: "Tablets & capsules",
        desc: "Where a positioning suits a supplement rather than a snack, we also develop compressed tablets and capsules.",
      },
    ],
    choicesHeading: "What you get to shape",
    choicesIntro:
      "Chocolate forgives a lot in formulation, which leaves more room for your preferences. These are the decisions we will walk through together.",
    choices: [
      {
        name: "The cocoa direction",
        note: "How dark, how sweet, how milky.",
        options: ["Dark", "Milk-style", "Cocoa oat", "Cocoa & protein"],
      },
      {
        name: "The functional layer",
        note: "The reason the product exists beyond taste.",
        options: ["A hero ingredient", "A botanical blend", "Protein or collagen", "A vitamin or mineral premix"],
      },
      {
        name: "Texture & sweetness",
        note: "For bars especially, texture is half the product.",
        options: ["Sweetness level", "Mouthfeel", "Bar chew & bite", "Drink smoothness"],
      },
      {
        name: "Format",
        note: "Whether it is drunk, eaten or taken.",
        options: ["Drink powder", "Bar", "Tablet", "Capsule"],
      },
    ],
    functionsHeading: "Positionings cocoa carries well",
    functionsCopy:
      "These describe directions a product can be formulated toward, not outcomes we claim for it. Permitted claims vary by market, and we will work through yours with you before anything goes to print.",
    functionIds: ["protein", "sport", "bone", "beauty", "weight", "sleep", "antioxidant"],
    packagingHeading: "Finished so it looks worth buying",
    packagingCopy:
      "Packaging formats are confirmed per project and supported through to retail-ready finishing. For chocolate and bars in particular, the pack is doing as much selling as the recipe.",
    packagingOptions: [
      {
        name: "Single-serve sachets",
        desc: "One drink per sachet — the easiest format to sample and to gift.",
      },
      {
        name: "Stand-up pouches",
        desc: "Multi-serve chocolate drink packs with your artwork across the front.",
      },
      {
        name: "Bar wrappers",
        desc: "Individually wrapped bars, finished to match how the product is positioned.",
      },
      {
        name: "Tablet & capsule packs",
        desc: "For supplement-format products, packed appropriately per project.",
      },
    ],
    packagingPhoto: {
      src: "/placeholders/format-jars-pouches.jpg",
      alt: "Unbranded stand-up pouches, sachets and stick packs in a packaging lineup",
      label: "neutral packaging lineup",
    },
    processHeading: "How a chocolate project comes together",
    processCopy:
      "Concept first, then formulation, then real samples you can taste and share. Bars usually take an extra round or two, because texture has to be right as well as flavour. Once you approve it, production runs under your brand, packed and finished, with export support toward your market.",
    processPhoto: {
      src: "/placeholders/formulation-moringa-chocolate.jpg",
      alt: "Moringa chocolate concept: dark cocoa drink with moringa leaf and powder",
      label: "moringa chocolate concept",
    },
    faqs: [
      {
        q: "Can chocolate really carry a strong-tasting ingredient?",
        a: "Often it can, which is why cocoa is such a useful base. How much it can carry depends on the ingredient and the dose your positioning needs — and we will tell you honestly during sampling if it is fighting the recipe.",
      },
      {
        q: "Do you develop bars as well as drinks?",
        a: "Yes. Protein bars and chocolate wellness bars are both formats we work in. Bars ask for more attention to texture, so expect development to take a little longer than a drink powder.",
      },
      {
        q: "Is Moringa Chocolate available to build on?",
        a: "It is one of our existing formulations — a chocolate drink carrying moringa. You can take it as it stands, customise it around your own direction, or simply use it as evidence of what we can develop.",
      },
      {
        q: "Can I sell this outside my home market?",
        a: "Many of our customers do. We support moving finished goods toward international destinations, and labelling requirements differ by market — bring us the markets you are targeting early and we will factor them into development.",
      },
    ],
    ctaHeading: "Got a chocolate product in mind?",
    ctaCopy:
      "Whether it is a drink, a bar or something between the two, tell us what you want it to be and we will start working out how to make it.",
  },
];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);

export function getCategory(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** The other two categories, for the related-links row at the foot of a page. */
export function relatedCategories(slug: string): ProductCategory[] {
  return CATEGORIES.filter((c) => c.slug !== slug);
}
