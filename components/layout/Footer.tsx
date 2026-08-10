import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.brandName}>Asian Top Wellness</span>
            <span className={styles.tagline}>From idea to finished wellness product.</span>
          </div>
          <div className={styles.col}>
            <span className={styles.colHead}>Explore</span>
            <a href="#top" className={styles.link}>
              Home
            </a>
            <a href="#about" className={styles.link}>
              About Us
            </a>
            <a href="#products" className={styles.link}>
              Products
            </a>
            <a href="#journey" className={styles.link}>
              Services
            </a>
          </div>
          <div className={styles.col}>
            <span className={styles.colHead}>Start</span>
            <a href="#contact" className={styles.link}>
              Create Your Product
            </a>
            <a href="#contact" className={styles.link}>
              Request a Sample
            </a>
            <a href={WHATSAPP_URL} className={styles.link}>
              WhatsApp
            </a>
          </div>
          <div className={`${styles.col} ${styles.address}`}>
            <span className={styles.colHead}>Contact</span>
            <span>
              30, Jalan SS 2/72, SS 2,
              <br />
              <br />
              47300 Petaling Jaya, Selangor, Malaysia
            </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className={styles.copyright}>Copyright © 2026 Asian Top Wellness Sdn Bhd</div>
      </div>
    </footer>
  );
}
