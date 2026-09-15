import { MANUFACTURING_STANDARDS } from "@/lib/content";
import styles from "./ManufacturingStandards.module.css";

/**
 * Certification statement, shared by the category pages and /services.
 *
 * The wording in lib/content.ts is deliberate and load-bearing: the
 * certifications belong to ATW's manufacturing partners, the partners do not
 * all hold the same ones, and Halal certification does not transfer to a new
 * product on its own. Read the note above MANUFACTURING_STANDARDS before
 * changing any of it.
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
          <p className={styles.lead}>{s.lead}</p>
          <ul className={styles.certs}>
            {s.certifications.map((c) => (
              <li key={c.name} className={styles.cert}>
                <span className={styles.certName}>{c.name}</span>
                <span className={styles.certNote}>{c.note}</span>
              </li>
            ))}
          </ul>
          <p className={styles.note}>{s.note}</p>
        </div>
      </div>
    </section>
  );
}
