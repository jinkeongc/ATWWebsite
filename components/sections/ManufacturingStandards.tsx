import { MANUFACTURING_STANDARDS } from "@/lib/content";
import styles from "./ManufacturingStandards.module.css";

/**
 * Certification statement, shared by the category pages and /services.
 *
 * Deliberately plain prose: no certifier logos, no badge row, and both
 * paragraphs at the same weight so the attribution never reads as fine print.
 * Read the note above MANUFACTURING_STANDARDS in lib/content.ts before
 * changing the copy or the presentation — both are constrained by Malaysian
 * trade-descriptions law, not by taste.
 */
export function ManufacturingStandards() {
  const s = MANUFACTURING_STANDARDS;
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`} data-reveal-stagger>
        <div className={styles.head} data-reveal>
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            {s.eyebrow}
          </div>
          <h2 className={styles.heading}>{s.heading}</h2>
        </div>
        <div className={styles.body} data-reveal>
          {s.body.map((para) => (
            <p key={para.slice(0, 32)} className={styles.para}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
