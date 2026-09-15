import { MANUFACTURING_STANDARDS } from "@/lib/content";
import styles from "./ManufacturingStandards.module.css";

/**
 * Certification statement, shared by the category pages and /services.
 *
 * The lead sentence names the facilities as the certified party and must stay
 * directly above the list. The list carries plain text labels only — never the
 * certifiers' logos or device marks, and never a halal entry. Read the note
 * above MANUFACTURING_STANDARDS in lib/content.ts before changing the copy or
 * the presentation: both are constrained by Malaysian trade-descriptions law,
 * not by taste.
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
          <p className={styles.para}>{s.lead}</p>
          <ul className={styles.certs}>
            {s.certifications.map((c) => (
              <li key={c.name} className={styles.cert}>
                <span className={styles.certName}>{c.name}</span>
                <span className={styles.certNote}>{c.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
