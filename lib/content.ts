export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_LEGAL_NAME = "Asian Top Wellness Sdn Bhd";
/** Current SSM registration number, required on business communications. */
export const COMPANY_REG_NO = "201901010002";
/** Pre-2019 number, still quoted alongside the new one on Malaysian documents. */
export const COMPANY_REG_NO_OLD = "1319330-M";

export const CONTACT_PHONE = "+60 12-961 9900";
export const CONTACT_ADDRESS = "30, Jalan SS 2/72, SS 2, 47300 Petaling Jaya, Selangor, Malaysia";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=60129619900";
export const CONTACT_EMAIL = "info@asiantopwellness.com";
export const LOGO_URL = "/atw-logo.png";

/**
 * What the site may say about certification — the wording is load-bearing.
 *
 *  - These certifications belong to ATW's manufacturing partners, never to
 *    ATW. Never reword this into a claim that ATW itself is certified.
 *  - The partners do not hold the same set, so the copy says "between them"
 *    and never implies every facility holds every certification.
 *  - Malaysian Halal certification is granted per product and per premises.
 *    A certified facility does not make a new private-label product certified,
 *    so the copy must never promise a certification on a customer's finished
 *    product. Product-level certification is confirmed per project.
 *  - Partner identities stay confidential; see lib/capabilities.ts.
 */
export const MANUFACTURING_STANDARDS = {
  eyebrow: "Manufacturing standards",
  heading: "Certified manufacturing partners",
  lead:
    "ATW develops and manages your product. The production itself runs through our manufacturing partners, who between them hold:",
  certifications: [
    { name: "GMP", note: "Good Manufacturing Practice" },
    { name: "HACCP", note: "Food safety hazard control" },
    { name: "Halal", note: "Depending on the facility and product" },
    { name: "MeSTI", note: "Malaysian food safety scheme" },
  ],
  note:
    "These are our partners' certifications rather than ATW's own, and not every facility holds every one. Halal certification in particular is granted to specific products and premises, so it does not carry across to a new product automatically. Which certifications your finished product can hold is confirmed per project — ask when you enquire and we will tell you exactly what applies to yours.",
};

export const FORMATS = [
  {
    slot: "hp-fmt-powder",
    name: "Drink powders & superfood blends",
    desc: "Greens, protein and functional blends built around your hero ingredient.",
    img: "green powder scoop, sachets",
    alt: "Green superfood drink powder with a scoop and sachets",
    src: "/placeholders/format-drink-powders.jpg",
    href: "/products/drink-powders",
    linkLabel: "Explore drink powders",
  },
  {
    slot: "hp-fmt-coffee",
    name: "Functional coffee & beverages",
    desc: "Coffee, lattes and instant beverages with a wellness angle.",
    img: "pour of iced functional latte",
    alt: "Iced functional latte being poured",
    src: "/placeholders/format-functional-coffee.jpg",
    href: "/products/functional-coffee",
    linkLabel: "Explore functional coffee",
  },
  {
    slot: "hp-fmt-choc",
    name: "Wellness chocolate & cocoa",
    desc: "Chocolate drinks and protein bars carrying functional ingredients.",
    img: "cocoa powder + chocolate pieces",
    alt: "Cocoa powder and chocolate pieces",
    src: "/placeholders/format-wellness-chocolate.jpg",
    href: "/products/wellness-chocolate",
    linkLabel: "Explore wellness chocolate",
  },
  {
    slot: "hp-fmt-sachet",
    name: "Sachets & single-serve",
    desc: "Stick packs and sachets for daily-ritual products.",
    img: "unbranded stick packs, fanned",
    alt: "Unbranded single-serve stick packs fanned out",
    src: "/placeholders/format-sachets.jpg",
  },
  {
    slot: "hp-fmt-packaging",
    name: "Retail-ready packaging",
    desc: "Sachets, pouches and more — packed and finished to match your positioning.",
    img: "neutral packaging lineup",
    alt: "Unbranded stand-up pouches, sachets and stick packs in a packaging lineup",
    src: "/placeholders/format-jars-pouches.jpg",
  },
  {
    slot: "hp-fmt-custom",
    name: "Your formulation",
    desc: "A category we haven't listed? That's usually where projects start.",
    img: "raw ingredients composition",
    alt: "Assorted raw wellness ingredients",
    src: "/placeholders/format-raw-ingredients.jpg",
    href: "/capabilities",
    linkLabel: "Browse our capabilities",
  },
];

export const STARTERS = [
  "An ingredient",
  "A flavor",
  "A health positioning",
  "A target market",
  "A rough concept",
  "Packaging requirements",
];

export const JOURNEY = [
  { num: "01", name: "Product Idea", desc: "We map what you want to create and for whom.", offset: 0 },
  { num: "02", name: "Formulation", desc: "Our lab develops or adapts the recipe.", offset: 36 },
  { num: "03", name: "Sampling", desc: "You taste and test real product.", offset: 0 },
  { num: "04", name: "Refinement", desc: "Flavor, texture and nutrition tuned to feedback.", offset: 36 },
  { num: "05", name: "Manufacturing", desc: "Approved formulas move into production.", offset: 0 },
  { num: "06", name: "Packaging", desc: "Formats and finishing to your requirements.", offset: 36 },
  { num: "07", name: "Delivery", desc: "Export support toward your market.", offset: 0 },
];

export const REASONS = [
  { name: "Custom formulation", desc: "Products developed around your idea, not off a fixed menu." },
  { name: "OEM / private label", desc: "Your brand on the pack — we stay invisible." },
  {
    name: "Ingredient sourcing",
    desc: "Raw materials sourced to fit your quality and cost targets.",
    href: "/capabilities",
    linkLabel: "See what we work with",
  },
  { name: "Production & packaging", desc: "Manufacturing and finishing under one roof of responsibility." },
  { name: "Export & logistics support", desc: "Help moving finished goods toward international markets." },
  {
    name: "Flexible collaboration",
    desc: "From fragment of an idea to full specification — we meet you where you are.",
  },
];
