import { JOURNEY } from "@/lib/content";
import styles from "./Journey.module.css";

export function Journey() {
  return (
    <section id="journey" className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.headRow} data-reveal>
          <h2 className={styles.heading}>From idea to market</h2>
          <p className={styles.intro}>
            Seven stages, one partner. We stay with your product from the first conversation to the loading dock.
          </p>
        </div>
        <div className={styles.grid} data-reveal-stagger>
          {JOURNEY.map((j) => (
            <div key={j.num} className={styles.step} style={{ marginTop: j.offset }} data-reveal>
              <span className={styles.num}>{j.num}</span>
              <span className={styles.name}>{j.name}</span>
              <span className={styles.desc}>{j.desc}</span>
            </div>
          ))}
        </div>
        <div className={styles.footRow} data-reveal>
          <a href="/contact#enquiry" className={styles.link}>
            Start at stage one — tell us your idea
          </a>
        </div>
      </div>
    </section>
  );
}
