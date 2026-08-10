import { REASONS } from "@/lib/content";
import styles from "./Reasons.module.css";

export function Reasons() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.inner}>
        <h2 className={styles.heading} data-reveal>Why brands build with ATW</h2>
        <div className={styles.grid} data-reveal-stagger>
          {REASONS.map((r) => (
            <div key={r.name} className={styles.item} data-reveal>
              <span className={styles.itemTitle}>{r.name}</span>
              <span className={styles.itemDesc}>{r.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
