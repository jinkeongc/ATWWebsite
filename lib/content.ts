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
 * What the site may say about certification. This wording is load-bearing and
 * was written against Malaysian law — do not loosen it without advice.
 *
 *  - NO certifier logos, device marks, seals or badge/card rows. ATW holds no
 *    certification of its own, and the Malaysian Ministry of Health and SIRIM
 *    schemes tie mark usage to the certificate holder and its certified
 *    premises. SIRIM's rules do not even extend a mark to a certified
 *    company's own parent, so they plainly do not reach a customer.
 *  - Attribute in the same breath, in the same size type. A qualifier set in
 *    smaller or lighter type below a badge row reads as fine print, and
 *    s.7(2) of the Trade Descriptions Act 2011 deems a merely MISLEADING
 *    description false. The impression the layout creates is what is tested.
 *  - NO halal claim of any kind, in any wording, until ATW holds its own
 *    Sijil Pengesahan Halal Malaysia. JAKIM's MPPHM (Domestik) 2020 cl.
 *    18(8)(b) states an OEM partner's certificate does not pass to the brand
 *    owner's product. The Trade Descriptions (Definition of Halal) Order 2011
 *    catches anything "likely to mislead or confuse", carries up to RM5m for a
 *    body corporate, and s.65 deems directors personally guilty. Companies have
 *    been convicted in 2026 for halal wording alone, with no logo shown.
 *    MPPHM cl. 21(19) lets ATW apply in its own name as brand owner; until that
 *    certificate exists, halal stays off the site entirely.
 *  - Partner identities stay confidential; see lib/capabilities.ts. Do not
 *    publish certificate numbers either — they are publicly searchable and
 *    would identify the factory.
 */
export const MANUFACTURING_STANDARDS = {
  eyebrow: "Manufacturing standards",
  heading: "Where your product is made",
  /** Rendered as equal-weight paragraphs; never demote the second to fine print. */
  body: [
    "ATW develops and manages your product. The manufacturing itself runs at partner facilities certified to Good Manufacturing Practice and HACCP by the Malaysian Ministry of Health.",
    "Those certifications belong to the facilities rather than to ATW, which holds none of its own. The certification requirements for your finished product are scoped at the start of the project and confirmed in writing before anything goes into production — ask us early and we will tell you plainly what your product can and cannot carry.",
  ],
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
