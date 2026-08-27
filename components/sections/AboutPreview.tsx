import { ImageSlot } from "@/components/ui/ImageSlot";
import styles from "./AboutPreview.module.css";

export function AboutPreview() {
  return (
    <section id="about" className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.photo} data-parallax="-0.05">
          <ImageSlot
            label="ATW team / facility, natural light"
            shape="rounded"
            radius={24}
            devSrc="/placeholders/about-team-facility.jpg"
          />
        </div>
        <div data-reveal="right">
          <div className="eyebrow" style={{ marginBottom: 18 }}>
            About ATW
          </div>
          <h2 className={styles.heading}>A wellness product partner in Petaling Jaya, working with the world</h2>
          <p className={styles.copy}>
            Asian Top Wellness is a Malaysia-based product development and manufacturing company helping businesses
            turn wellness concepts into commercially viable products — from sourcing and formulation through
            production and export.
          </p>
          <a href="/about" className={styles.link}>
            More about ATW →
          </a>
        </div>
      </div>
    </section>
  );
}
