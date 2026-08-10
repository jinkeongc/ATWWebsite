import type { Metadata } from "next";
import { ParallaxController } from "@/components/ParallaxController";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services | Asian Top Wellness",
  description:
    "ATW supports wellness product development from concept to commercial product — consultation, formulation, sampling, sourcing, OEM / private-label manufacturing, packaging and delivery.",
};

const STRIP = ["Idea", "Formulation", "Sample", "Refine", "Manufacture", "Package", "Deliver"];

const STAGES = [
  {
    num: "01",
    kicker: "Where projects begin",
    name: "Product Concept & Consultation",
    copy: "A project can start from almost anything — an idea, an ingredient, a flavor, a health positioning, an existing formulation, or just a market you want to serve. We sit down with you to understand what you want to create, for whom, and what success looks like.",
    tags: ["An idea", "An ingredient", "A flavor", "A positioning", "An existing formulation", "A target market"],
    img: "consultation — two people over samples and notes",
    reversed: false,
  },
  {
    num: "02",
    kicker: "The recipe takes shape",
    name: "Formulation & Product Development",
    copy: "ATW develops a new formulation or customizes an existing one around your direction — balancing ingredients, flavor, sweetness, functionality, texture and format against how the product will be positioned and sold.",
    tags: ["Ingredients", "Flavor", "Sweetness", "Functionality", "Texture", "Format"],
    img: "formulation bench — weighing powders, beakers",
    reversed: true,
  },
  {
    num: "03",
    kicker: "You taste it",
    name: "Sampling & Refinement",
    copy: "We produce real samples for you to taste, test and share. Your feedback drives iteration — flavor tuned, texture adjusted, nutrition rebalanced — until the product is right and ready to be approved for production.",
    tags: ["Sample creation", "Evaluation", "Feedback", "Iteration", "Refinement"],
    img: "tasting flight — sample cups, spoons, score sheet",
    reversed: false,
  },
  {
    num: "04",
    kicker: "The right inputs",
    name: "Ingredient & Material Sourcing",
    copy: "Where applicable, ATW helps coordinate appropriate ingredients and materials for your product — matched to its quality direction and cost targets. Sourcing specifics are project-dependent and agreed with you.",
    tags: ["Raw ingredients", "Functional inputs", "Packaging materials"],
    img: "raw ingredients — leaves, powders, cocoa, grains",
    reversed: true,
  },
  {
    num: "05",
    kicker: "Your brand, our production",
    name: "OEM / Private Label Manufacturing",
    copy: "Approved formulations move toward production on an OEM / private-label basis: the finished product carries your brand, and ATW stays invisible behind it. Production specifics — volumes, capabilities, timelines — are scoped per project.",
    tags: ["OEM", "Private label", "Your brand on pack"],
    img: "production — filling line, unbranded packs (placeholder)",
    reversed: false,
  },
  {
    num: "06",
    kicker: "Ready for the shelf",
    name: "Packaging",
    copy: "We support the finished-product packaging process across formats appropriate to your product — sachets, pouches, jars, cartons and others as confirmed per project — so what arrives is retail-ready.",
    tags: ["Sachets", "Pouches", "Jars", "Cartons"],
    img: "packaging formats — neutral sachets, pouches, jars lineup",
    reversed: true,
  },
  {
    num: "07",
    kicker: "Toward your market",
    name: "Export & Delivery Support",
    copy: "Finally, ATW supports moving finished goods toward you and your customers, including international markets. Destinations and logistics arrangements are agreed per project — tell us where the product needs to go.",
    tags: ["Export support", "International markets", "Delivery coordination"],
    img: "export — sealed cartons, pallet, shipping labels (unbranded)",
    reversed: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <ParallaxController />
      <Nav />

      {/* Hero */}
      <header className={`container ${styles.hero}`}>
        <div className="fade-up">
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            Services
          </div>
          <h1 className={styles.heroHeading}>
            From concept to <em>commercial product.</em>
          </h1>
        </div>
        <div className={`${styles.heroAside} fade-up-delay`}>
          <p className={styles.heroCopy}>
            ATW supports wellness product development across formulation, sampling, manufacturing, packaging and
            delivery — one partner, the whole way through.
          </p>
          <Button href="/contact#enquiry" variant="primary" size="lg">
            Start Your Product
          </Button>
        </div>
      </header>

      {/* Compact process strip */}
      <div className={styles.stripBand}>
        <div className={`container ${styles.stripInner}`}>
          <div className={styles.strip}>
            {STRIP.map((s, i) => (
              <span key={s} style={{ display: "contents" }}>
                <span className={styles.stripStep}>
                  <span className={styles.stripNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.stripName}>{s}</span>
                </span>
                {i < STRIP.length - 1 && <span className={styles.stripArrow} />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The journey, stage by stage */}
      <section className={`container ${styles.stages}`}>
        {STAGES.map((s, i) => (
          <div
            key={s.num}
            className={[
              styles.stage,
              s.reversed ? styles.stageReversed : "",
              i === STAGES.length - 1 ? styles.stageLast : "",
            ].join(" ")}
          >
            <div className={styles.stageRail}>
              <span className={styles.stageNum}>{s.num}</span>
            </div>
            <div className={styles.stageBody}>
              <span className={styles.stageKicker}>{s.kicker}</span>
              <h2 className={styles.stageHeading}>{s.name}</h2>
              <p className={styles.stageCopy}>{s.copy}</p>
              <div className={styles.stageTags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.stageTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.stagePhoto} data-parallax="-0.04">
              <ImageSlot label={s.img} radius={18} />
            </div>
          </div>
        ))}
      </section>

      {/* Big process recap — dark band */}
      <section className={styles.bigBand}>
        <div className={`container ${styles.bigInner}`}>
          <div className="eyebrow" style={{ color: "var(--gold)" }}>
            <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
            The Whole Journey
          </div>
          <h2 className={styles.bigHeading}>
            Seven stages. <em>One partner.</em>
          </h2>
          <div className={styles.bigRows}>
            {STAGES.map((s, i) => (
              <div key={s.num} className={styles.bigRow}>
                <span className={styles.bigNum}>{s.num}</span>
                <span className={styles.bigName}>{STRIP[i]}</span>
                <p className={styles.bigDesc}>{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`container ${styles.cta}`}>
        <h2 className={styles.ctaHeading}>Have something you want to make?</h2>
        <p className={styles.ctaCopy}>
          Tell us what you have in mind. You don&apos;t need to arrive with a finished formula.
        </p>
        <Button href="/contact#enquiry" variant="primary" size="xl">
          Discuss Your Product Idea
        </Button>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
