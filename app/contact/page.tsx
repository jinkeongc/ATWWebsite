import type { Metadata } from "next";
import { ScrollEffects } from "@/components/ScrollEffects";
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

const NEXT_STEPS = [
  {
    num: "01",
    name: "Share the idea",
    desc: "An ingredient, a flavor, a market — a few lines is plenty.",
  },
  {
    num: "02",
    name: "We talk it through",
    desc: "Honest first thoughts on what we can build, and how.",
  },
  {
    num: "03",
    name: "You taste it",
    desc: "The right idea becomes a sample you can hold.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ScrollEffects />
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

      {/* Enquiry band */}
      <section className={styles.band}>
        <div className={`container ${styles.bandInner}`}>
          <div data-reveal="left">
            <div className="eyebrow" style={{ color: "var(--gold)" }}>
              <span className="eyebrow-rule" style={{ background: "var(--gold)" }} />
              Start Here
            </div>
            <h2 className={styles.bandHeading}>
              Tell us what <em>you&apos;re imagining.</em>
            </h2>
            <p className={styles.bandLede}>
              Every ATW product started as a conversation like this one. Here&apos;s how it goes:
            </p>
            <div className={styles.steps} data-reveal-stagger>
              {NEXT_STEPS.map((s) => (
                <div key={s.num} className={styles.step} data-reveal>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div>
                    <span className={styles.stepName}>{s.name}</span>
                    <p className={styles.stepDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="right">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Direct contact closer */}
      <div className={`container ${styles.direct}`}>
        <div className={styles.directPhoto} data-reveal>
          <ImageSlot
            label="ATW office / sample shelf — warm, natural light"
            radius={24}
            devSrc="/placeholders/contact-office-shelf.jpg"
            innerParallax={0.9}
            kenBurns
          />
        </div>

        <div data-reveal="right">
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            Direct
          </div>
          <h2 className={styles.directHeading}>Prefer to reach us directly?</h2>
          <div className={styles.detailList}>
            <div className={styles.detailItem}>
              <span className={styles.detailKey}>Email</span>
              <span className={styles.detailVal}>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailKey}>Phone</span>
              <span className={styles.detailVal}>
                <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`}>{CONTACT_PHONE}</a>
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailKey}>Address</span>
              <span className={styles.detailVal}>{CONTACT_ADDRESS}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailKey}>Business hours</span>
              <span className={styles.detailVal}>Mon–Fri, 9:00am–6:00pm (MYT) — to be confirmed</span>
            </div>
          </div>
          <div className={styles.waRow}>
            <p className={styles.waCopy}>Fastest is WhatsApp — a short message is enough.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.waButton}>
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
