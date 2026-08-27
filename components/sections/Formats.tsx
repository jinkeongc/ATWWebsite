import { ImageSlot } from "@/components/ui/ImageSlot";
import { FORMATS } from "@/lib/content";
import styles from "./Formats.module.css";

export function Formats() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.headRow} data-reveal>
        <h2 className={styles.heading}>What we can create together</h2>
        <p className={styles.intro}>
          Bring us an idea in any shape — we develop formulations across every major wellness format.
        </p>
      </div>
      <div className={styles.grid} data-reveal-stagger>
        {FORMATS.map((f) => (
          <div key={f.slot} className={styles.card} data-reveal>
            <div className={styles.photo}>
              <ImageSlot label={f.img} shape="rounded" radius={18} devSrc={f.src} />
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>{f.name}</span>
              <span className={styles.cardDesc}>{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
