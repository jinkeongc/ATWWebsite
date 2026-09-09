import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { STARTERS } from "@/lib/content";
import styles from "./CustomDev.module.css";

export function CustomDev() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div data-reveal="left">
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Custom Product Development
          </div>
          <h2 className={styles.heading}>
            Have an idea?
            <br />
            Let&apos;s develop it.
          </h2>
          <p className={styles.copy}>
            Most of our projects begin with something small — an ingredient someone believes in. You don&apos;t
            need a finished specification to start.
          </p>
          <div className={styles.chips}>
            {STARTERS.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
          <Button href="/contact#enquiry" variant="primary" size="lg">
            Discuss Your Product Idea
          </Button>
        </div>
        <div className={styles.photo}>
          <ImageSlot
            label="formulation session: weighing powders, tasting samples"
            shape="rounded"
            radius={24}
            devSrc="/placeholders/custom-dev-session.jpg"
            innerParallax={0.9}
            kenBurns
          />
        </div>
      </div>
    </section>
  );
}
