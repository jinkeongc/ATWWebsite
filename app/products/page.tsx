import { createMetadata } from "@/lib/seo";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./products.module.css";

export const metadata = createMetadata({
  title: "Products | ATW",
  description:
    "Start with an existing ATW formulation like Wheatgrass Coffee or Moringa Chocolate — or develop a wellness product entirely around your own idea, ingredients and market.",
  path: "/products",
});

const STARTING_POINTS = [
  "A product idea",
  "A desired ingredient",
  "A flavor direction",
  "A wellness positioning",
  "A nutritional goal",
  "An existing concept to adjust",
  "A target market",
  "Packaging requirements",
];

const DIALS = [
  "Ingredients",
  "Flavor",
  "Sweetness",
  "Functional ingredients",
  "Nutritional direction",
  "Serving format",
  "Product format",
  "Packaging",
  "Positioning",
];

const EXAMPLES = [
  {
    name: "Wheatgrass Coffee",
    tag: "Existing formulation",
    copy: "A wellness beverage concept combining coffee with wheatgrass — familiar coffee ritual, functional green angle.",
    specs: [
      ["Concept", "Functional coffee with a greens-forward wellness position"],
      ["Key ingredients", "Coffee, wheatgrass — adjustable to your direction"],
      ["Format", "Instant beverage powder; single-serve friendly"],
      ["Customization", "Flavor, sweetness, added functionals, serving format, packaging"],
      ["Samples", "Available on request"],
    ],
    img: "wheatgrass coffee concept — iced latte, green powder, unbranded sachet",
    src: "/placeholders/products-example-wheatgrass.jpg",
    reversed: false,
  },
  {
    name: "Moringa Chocolate",
    tag: "Existing formulation",
    copy: "A chocolate-based wellness drink featuring moringa — indulgent on the tongue, functional underneath.",
    specs: [
      ["Concept", "Wellness chocolate drink carrying moringa"],
      ["Key ingredients", "Cocoa, moringa — adjustable to your direction"],
      ["Format", "Chocolate drink powder; sachet or jar friendly"],
      ["Customization", "Flavor, sweetness, added functionals, serving format, packaging"],
      ["Samples", "Available on request"],
    ],
    img: "moringa chocolate concept — dark cocoa drink, moringa leaf & powder",
    src: "/placeholders/products-example-moringa.jpg",
    reversed: true,
  },
];

export default function ProductsPage() {
  return (
    <>
      <ScrollEffects />
      <Nav />

      {/* Hero */}
      <header className={`container ${styles.hero}`}>
        <div className="eyebrow fade-up" style={{ justifyContent: "center" }}>
          <span className="eyebrow-rule" />
          Products
          <span className="eyebrow-rule" />
        </div>
        <h1 className={`${styles.heroHeading} fade-up`}>
          Products built around <em>your idea.</em>
        </h1>
        <p className={`${styles.heroCopy} fade-up-delay`}>
          Start with one of our existing formulations, or work with ATW to develop something entirely new around your
          own ingredients, flavor, function and market. This isn&apos;t a store — it&apos;s a starting line.
        </p>
        <div className="fade-up-delay">
          <Button href="/contact#enquiry" variant="primary" size="lg">
            Discuss Your Product Idea
          </Button>
        </div>
      </header>

      {/* Staggered visual strip */}
      <div className={`container ${styles.heroStrip}`}>
        <div className={styles.stripA} data-parallax="-0.04">
          <ImageSlot label="raw ingredient powders, scoops" radius={18} devSrc="/placeholders/products-strip-powders.jpg" kenBurns />
        </div>
        <div className={styles.stripB} data-parallax="-0.07">
          <ImageSlot label="unbranded jars & pouches lineup" radius={18} devSrc="/placeholders/products-strip-jars.jpg" kenBurns />
        </div>
        <div className={styles.stripC} data-parallax="-0.03">
          <ImageSlot label="poured functional beverage" radius={18} devSrc="/placeholders/products-strip-beverage.jpg" kenBurns />
        </div>
        <div className={styles.stripD} data-parallax="-0.06">
          <ImageSlot label="fanned unbranded sachets / stick packs" radius={18} devSrc="/placeholders/products-strip-sachets.jpg" kenBurns />
        </div>
      </div>

      {/* Create Your Own Product — dominant */}
      <section className={styles.createBand}>
        <div className={`container ${styles.createInner}`}>
          <div className={styles.createHead} data-reveal>
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>
                <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
                The Main Offering
              </div>
              <h2 className={styles.createHeading}>
                Create <em>your own</em> product.
              </h2>
            </div>
            <p className={styles.createIntro}>
              Most ATW projects don&apos;t begin with a product from a list. They begin with something you bring —
              and we develop the product around it. Bring any one of the starting points below and we can begin.
            </p>
          </div>
          <div className={styles.createBody}>
            <div className={styles.createPhoto}>
              <ImageSlot
                label="development bench — weighing powders, sample cups, notebook"
                radius={24}
                style={{ background: "rgba(247,243,230,0.08)", borderColor: "rgba(247,243,230,0.2)" }}
                devSrc="/placeholders/products-dev-bench.jpg"
                innerParallax={0.9}
                kenBurns
              />
            </div>
            <div data-reveal="right">
              <span className={styles.createColHead}>You can start with</span>
              <ul className={styles.startList}>
                {STARTING_POINTS.map((s) => (
                  <li key={s} className={styles.startItem}>
                    {s}
                  </li>
                ))}
              </ul>
              <span className={styles.createColHead}>Then we shape, together</span>
              <div className={styles.dials}>
                {DIALS.map((d) => (
                  <span key={d} className={styles.dial}>
                    {d}
                  </span>
                ))}
              </div>
              <Button href="/contact#enquiry" variant="inverse" size="xl">
                Start Your Product
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Existing formulations */}
      <section className={`container ${styles.examplesSection}`}>
        <div className={styles.examplesHead} data-reveal>
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            Existing Formulations
          </div>
          <h2 className={styles.examplesHeading}>Two places to start from</h2>
          <p className={styles.examplesIntro}>
            These are formulations ATW has already developed. Take one as-is, customize it heavily, or treat it
            simply as proof of what we can build for you.
          </p>
        </div>

        {EXAMPLES.map((ex) => (
          <div key={ex.name} className={`${styles.example} ${ex.reversed ? styles.exampleReversed : ""}`}>
            <div className={styles.examplePhoto}>
              <ImageSlot label={ex.img} radius={24} devSrc={ex.src} innerParallax={0.9} kenBurns />
            </div>
            <div data-reveal={ex.reversed ? "left" : "right"}>
              <span className={styles.exampleTag}>{ex.tag}</span>
              <h3 className={styles.exampleHeading}>{ex.name}</h3>
              <p className={styles.exampleCopy}>{ex.copy}</p>
              <ul className={styles.exampleSpecs}>
                {ex.specs.map(([k, v]) => (
                  <li key={k} className={styles.exampleSpec}>
                    <span className={styles.specKey}>{k}</span>
                    <span className={styles.specVal}>{v}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.exampleCtas}>
                <Button href="/contact#enquiry" variant="primary" size="md">
                  Customize This Product
                </Button>
                <Button href="/contact#enquiry" variant="secondary" size="md">
                  Request a Sample
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Capabilities teaser */}
      <section className={styles.capBand}>
        <div className={`container ${styles.capInner}`}>
          <div data-reveal="left">
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Capabilities
            </div>
            <h2 className={styles.capHeading}>Wondering if we can make it?</h2>
          </div>
          <div className={styles.capAside} data-reveal="right">
            <p className={styles.capCopy}>
              Browse the health functions, ingredients and product formats we can develop through our partners, from
              functional coffee and plant milks to tablets and capsules. If your ingredient is there, we can talk about
              building around it.
            </p>
            <Button href="/capabilities" variant="secondary" size="lg">
              Browse Our Capabilities
            </Button>
          </div>
        </div>
      </section>

      {/* Starting points, not limits */}
      <section className={styles.limitsBand}>
        <div className={`container ${styles.limitsInner}`} data-reveal-stagger>
          <div className="eyebrow" style={{ justifyContent: "center" }} data-reveal>
            <span className="eyebrow-rule" />
            The Important Part
            <span className="eyebrow-rule" />
          </div>
          <h2 className={styles.limitsHeading} data-reveal>
            These are starting points, <em>not limits.</em>
          </h2>
          <p className={styles.limitsCopy} data-reveal>
            Wheatgrass Coffee and Moringa Chocolate are examples of what ATW can develop. If your product idea looks
            completely different, we still want to hear about it.
          </p>
          <Button href="/contact#enquiry" variant="primary" size="xl">
            Tell Us What You Want to Create
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
