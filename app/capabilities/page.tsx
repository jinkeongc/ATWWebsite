import { createMetadata } from "@/lib/seo";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Button } from "@/components/ui/Button";
import { CAPABILITY_FORMATS, CAPABILITY_STATS } from "@/lib/capabilities";
import { CapabilityExplorer } from "./CapabilityExplorer";
import styles from "./capabilities.module.css";

export const metadata = createMetadata({
  title: "Capabilities | ATW",
  description:
    "Browse the health functions, ingredients and product formats ATW can develop — a map of what's possible for your wellness product.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <ScrollEffects />
      <Nav />

      {/* Hero */}
      <header className={`container ${styles.hero}`}>
        <div className="eyebrow fade-up" style={{ justifyContent: "center" }}>
          <span className="eyebrow-rule" />
          Capabilities
          <span className="eyebrow-rule" />
        </div>
        <h1 className={`${styles.heroHeading} fade-up`}>
          What we can <em>build for you.</em>
        </h1>
        <p className={`${styles.heroCopy} fade-up-delay`}>
          ATW can develop wellness products across a wide range of health functions, ingredients and formats.
          Think of this page as a map of what&apos;s possible, not a menu to order from.
        </p>
        <div className={`${styles.heroStats} fade-up-delay`}>
          <span className={styles.stat}>
            <span className={styles.statNum}>{CAPABILITY_STATS.functions}</span> health functions
          </span>
          <span className={styles.stat}>
            <span className={styles.statNum}>{CAPABILITY_STATS.ingredients}+</span> ingredients
          </span>
          <span className={styles.stat}>
            <span className={styles.statNum}>{CAPABILITY_STATS.formats}</span> product formats
          </span>
        </div>
        <div className={`${styles.heroCtas} fade-up-delay`}>
          <Button href="#library" variant="primary" size="lg">
            Browse the Ingredient Library
          </Button>
          <Button href="/contact#enquiry" variant="secondary" size="lg">
            Discuss Your Product Idea
          </Button>
        </div>
      </header>

      {/* Formats */}
      <section className={styles.formatsBand}>
        <div className={`container ${styles.formatsInner}`}>
          <div className={styles.formatsHead} data-reveal>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                Formats
              </div>
              <h2 className={styles.formatsHeading}>The shapes a product can take</h2>
            </div>
            <p className={styles.formatsIntro}>
              From a sachet of drink powder to a capsule, these are the formats we can produce. Most functions below can
              be carried in more than one of them.
            </p>
          </div>
          <div className={styles.formatsGrid} data-reveal-stagger>
            {CAPABILITY_FORMATS.map((f) => (
              <div key={f.name} className={styles.format} data-reveal>
                <span className={styles.formatName}>{f.name}</span>
                <span className={styles.formatDesc}>{f.desc}</span>
                <ul className={styles.formatExamples}>
                  {f.examples.map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions + library (interactive) */}
      <CapabilityExplorer />

      {/* Closing band */}
      <section className={styles.closeBand}>
        <div className={`container ${styles.closeInner}`} data-reveal-stagger>
          <div className="eyebrow" style={{ justifyContent: "center", color: "var(--gold)" }} data-reveal>
            <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
            Where It Starts
            <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className={styles.closeHeading} data-reveal>
            You bring the idea.
            <br />
            <em>We&apos;ll bring everything else.</em>
          </h2>
          <p className={styles.closeCopy} data-reveal>
            Nothing on this page is a product yet. It becomes one when you tell us who it&apos;s for, how it should
            taste and where it will sell, and we choose, source and formulate around that. If the ingredient you have
            in mind isn&apos;t listed, ask us anyway. This list is a snapshot, not a boundary.
          </p>
          <div className={styles.closeCtas} data-reveal>
            <Button href="/contact#enquiry" variant="inverse" size="xl">
              Tell Us Your Idea
            </Button>
          </div>
          <p className={styles.closeNote} data-reveal>
            Ingredients are listed for formulation reference and carry no health claims. Any claims on your finished
            product are developed to the regulations of your target market.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
