import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/content";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section id="contact" className={`container ${styles.section}`} data-reveal-stagger>
      <h2 className={styles.heading} data-reveal>Your next wellness product can start with a conversation.</h2>
      <p className={styles.copy} data-reveal>
        Tell us what you&apos;re imagining — an ingredient, a flavor, a market. We&apos;ll tell you honestly whether
        we can build it, and how.
      </p>
      <div className={styles.ctaRow} data-reveal>
        <Button href="/contact#enquiry" variant="primary" size="xl">
          Discuss Your Product Idea
        </Button>
        <Button href={WHATSAPP_URL} variant="secondary" size="xl">
          WhatsApp Us
        </Button>
      </div>
    </section>
  );
}
