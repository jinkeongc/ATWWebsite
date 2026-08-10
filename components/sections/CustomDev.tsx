import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { STARTERS } from "@/lib/content";
import styles from "./CustomDev.module.css";

export function CustomDev() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            Custom Product Development
          </div>
          <h2 className={styles.heading}>
            Have an idea?
            <br />
            Let&apos;s develop it.
          </h2>
          <p className={styles.copy}>
            Most of our projects begin with a fragment — an ingredient someone believes in, a flavor, a nutritional
            direction, a market that needs serving. You don&apos;t need a finished specification to start.
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
        <div className={styles.photo} data-parallax="-0.06">
          <ImageSlot label="formulation session: weighing powders, tasting samples" shape="rounded" radius={24} />
        </div>
      </div>
    </section>
  );
}
