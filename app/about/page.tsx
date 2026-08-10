import type { Metadata } from "next";
import { ParallaxController } from "@/components/ParallaxController";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | Asian Top Wellness",
  description:
    "Asian Top Wellness is a Malaysia-based wellness product development and OEM / private-label partner, helping brands turn wellness ideas into finished products.",
};

const ROLES = [
  {
    num: "01",
    name: "Product Development",
    desc: "We take rough ideas — an ingredient, a flavor, a positioning — and shape them into workable product concepts with a commercial path.",
  },
  {
    num: "02",
    name: "Formulation",
    desc: "Formulations are developed or adapted around your ingredients, flavor direction, function and market — not pulled from a fixed menu.",
  },
  {
    num: "03",
    name: "Sampling & Refinement",
    desc: "You taste and test real samples, and we refine flavor, texture and nutrition together until the product feels right.",
  },
  {
    num: "04",
    name: "Manufacturing",
    desc: "Approved formulations move toward production under your brand — ATW stays invisible on the pack.",
  },
  {
    num: "05",
    name: "Packaging & Delivery",
    desc: "We support the finished product's journey — packing formats, finishing and movement toward your customers and markets.",
  },
];

const VALUES = [
  { name: "Flexible", desc: "We meet you wherever your idea currently is — fragment or full specification." },
  { name: "Practical", desc: "Every decision is weighed against what will actually work in production and at retail." },
  { name: "Collaborative", desc: "You taste, react and decide at every stage. The product stays yours." },
  { name: "Quality-oriented", desc: "Careful sourcing, careful formulation, careful finishing." },
];

const WORLD = [
  {
    name: "Malaysia-based",
    desc: "Developed and produced from Petaling Jaya, Selangor — placeholder detail, to be confirmed.",
  },
  {
    name: "International projects",
    desc: "We work with customers developing products for markets beyond Malaysia.",
  },
  {
    name: "Export & logistics",
    desc: "Support for moving finished goods toward international destinations.",
  },
  {
    name: "Cross-market development",
    desc: "Formulations adapted to different tastes, regulations and price points.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ParallaxController />
      <Nav />

      {/* Hero */}
      <header className={`container ${styles.hero}`}>
        <div className="fade-up">
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            About Asian Top Wellness
          </div>
          <h1 className={styles.heroHeading}>
            Wellness ideas, developed into <em>real products.</em>
          </h1>
          <p className={styles.heroCopy}>
            Asian Top Wellness works with brands, distributors, entrepreneurs and businesses to develop wellness
            products from concept through production — formulation, sampling, manufacturing, packaging and delivery,
            with one partner.
          </p>
        </div>
        <div className={`${styles.heroPhoto} fade-up-delay`} data-parallax="-0.05">
          <ImageSlot label="ATW team at work — natural light, formulation bench" radius={24} />
        </div>
      </header>

      {/* Who we are */}
      <section className={styles.whoBand}>
        <div className={`container ${styles.whoInner}`}>
          <div className={styles.whoSticky}>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Who We Are
            </div>
            <h2 className={styles.whoHeading}>A product partner, not a retailer</h2>
          </div>
          <div>
            <p className={styles.whoLede}>
              Asian Top Wellness partners with businesses to develop wellness products tailored to their ideas,
              customers and markets.
            </p>
            <p className={styles.whoBody}>
              From early formulation through manufacturing, packaging and delivery, ATW helps turn product concepts
              into commercially viable finished goods. Our work is OEM and private-label by nature: the product
              carries your brand, and we do the developing and making behind it.
            </p>
            <p className={styles.whoBody}>
              We are based in Malaysia and work with both local and international customers — supporting projects
              that need to travel across borders, tastes and markets.
            </p>
            <div className={styles.whoFacts}>
              <span className={styles.fact}>Malaysia-based</span>
              <span className={styles.fact}>OEM / Private Label</span>
              <span className={styles.fact}>Wellness products</span>
              <span className={styles.fact}>International customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className={`container ${styles.roleSection}`}>
        <div className={styles.roleHead}>
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            What We Do
          </div>
          <h2 className={styles.roleHeading}>One partner across the whole product journey</h2>
          <p className={styles.roleIntro}>
            Our role is to carry a wellness product from its first description to a finished, packed, shippable
            good — so you never have to stitch the journey together yourself.
          </p>
        </div>
        <div>
          {ROLES.map((r) => (
            <div key={r.num} className={styles.roleRow}>
              <span className={styles.roleNum}>{r.num}</span>
              <span className={styles.roleName}>{r.name}</span>
              <p className={styles.roleDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className={styles.howBand}>
        <div className={`container ${styles.howInner}`}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              How We Work
            </div>
            <h2 className={styles.howHeading}>
              Built around <em>your</em> product, not our catalogue.
            </h2>
            <ul className={styles.howList}>
              {VALUES.map((v) => (
                <li key={v.name} className={styles.howItem}>
                  <span className={styles.howItemName}>{v.name}</span>
                  <span className={styles.howItemDesc}>{v.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.howPhoto} data-parallax="-0.06">
            <ImageSlot label="tasting session — sample cups, notes, two people collaborating" radius={24} />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={`container ${styles.mission}`}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          <span className="eyebrow-rule" />
          Our Mission
          <span className="eyebrow-rule" />
        </div>
        <p className={styles.missionText}>
          To help businesses create practical, high-quality wellness products that are ready for <em>real markets.</em>
        </p>
      </section>

      {/* Malaysia to the world */}
      <section className={styles.worldBand}>
        <div className={`container ${styles.worldInner}`}>
          <div className={styles.worldHead}>
            <div>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>
                <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
                Reach
              </div>
              <h2 className={styles.worldHeading}>
                From Malaysia, <em>to your market.</em>
              </h2>
            </div>
            <p className={styles.worldIntro}>
              ATW develops and produces in Malaysia and supports customers building products for markets further
              afield. Specific destinations and logistics details are project-dependent — talk to us about yours.
            </p>
          </div>
          <div className={styles.worldGrid}>
            {WORLD.map((w) => (
              <div key={w.name} className={styles.worldItem}>
                <span className={styles.worldItemName}>{w.name}</span>
                <span className={styles.worldItemDesc}>{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`container ${styles.cta}`}>
        <h2 className={styles.ctaHeading}>Have a wellness product in mind?</h2>
        <p className={styles.ctaCopy}>
          It doesn&apos;t need to be finished — or even fully formed. Tell us where the idea currently stands and
          we&apos;ll take it from there together.
        </p>
        <div className={styles.ctaRow}>
          <Button href="/contact#enquiry" variant="primary" size="xl">
            Create Your Product
          </Button>
          <Button href="/contact" variant="secondary" size="xl">
            Talk to ATW
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
