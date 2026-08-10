import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/content";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section id="contact" className={`container ${styles.section}`}>
      <h2 className={styles.heading}>Your next wellness product can start with a conversation.</h2>
      <p className={styles.copy}>
        Tell us what you&apos;re imagining — an ingredient, a flavor, a market. We&apos;ll tell you honestly whether
        we can build it, and how.
      </p>
      <div className={styles.ctaRow}>
        <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="lg">
          Discuss Your Product Idea
        </Button>
        <Button href={WHATSAPP_URL} variant="secondary" size="lg">
          WhatsApp Us
        </Button>
      </div>
    </section>
  );
}
