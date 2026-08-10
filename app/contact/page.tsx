import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_URL } from "@/lib/content";
import { EnquiryForm } from "./EnquiryForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Asian Top Wellness",
  description:
    "Tell ATW about the wellness product you want to create. An idea is enough to start the discussion — reach us by enquiry form, email, phone or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className={`container ${styles.hero}`}>
        <div className="eyebrow fade-up">
          <span className="eyebrow-rule" />
          Contact
        </div>
        <h1 className={`${styles.heroHeading} fade-up`}>
          Let&apos;s build your next <em>wellness product.</em>
        </h1>
        <p className={`${styles.heroCopy} fade-up-delay`}>
          Tell us what you&apos;re thinking about creating and we&apos;ll start the conversation from there. No
          finished formula required.
        </p>
      </header>

      {/* Form + direct contact */}
      <div className={`container ${styles.main}`}>
        <EnquiryForm />

        <aside className={styles.aside}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              Direct
            </div>
            <h2 className={styles.asideHeading}>Prefer to reach us directly?</h2>
            <div className={styles.asideList} style={{ marginTop: 24 }}>
              <div className={styles.asideItem}>
                <span className={styles.asideKey}>Email</span>
                <span className={styles.asideVal}>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </span>
              </div>
              <div className={styles.asideItem}>
                <span className={styles.asideKey}>Phone</span>
                <span className={styles.asideVal}>
                  <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}>{CONTACT_PHONE}</a>
                </span>
              </div>
              <div className={styles.asideItem}>
                <span className={styles.asideKey}>Address</span>
                <span className={styles.asideVal}>{CONTACT_ADDRESS}</span>
              </div>
              <div className={styles.asideItem}>
                <span className={styles.asideKey}>Business hours</span>
                <span className={styles.asideVal}>Mon–Fri, 9:00am–6:00pm (MYT) — to be confirmed</span>
              </div>
            </div>
          </div>

          <div className={styles.waCard}>
            <h3 className={styles.waHeading}>Fastest on WhatsApp</h3>
            <p className={styles.waCopy}>
              A short message is enough — tell us the ingredient, flavor or idea, and we&apos;ll take it from there.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.waButton}>
              Message us on WhatsApp
            </a>
          </div>

          <div className={styles.asidePhoto}>
            <ImageSlot label="ATW office / sample shelf — warm, natural light" radius={18} />
          </div>
        </aside>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
