import Link from "next/link";
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
        {FORMATS.map((f) => {
          const body = (
            <>
              <div className={styles.photo}>
                <ImageSlot label={f.img} shape="rounded" radius={18} devSrc={f.src} kenBurns />
              </div>
              <div className={styles.cardText}>
                <span className={styles.cardTitle}>{f.name}</span>
                <span className={styles.cardDesc}>{f.desc}</span>
                {f.href && (
                  <span className={styles.cardCue}>
                    {f.linkLabel}
                    <svg className={styles.cardCueArrow} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </div>
            </>
          );
          return f.href ? (
            <Link key={f.slot} href={f.href} className={`${styles.card} ${styles.cardLinked}`} data-reveal>
              {body}
            </Link>
          ) : (
            <div key={f.slot} className={styles.card} data-reveal>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
