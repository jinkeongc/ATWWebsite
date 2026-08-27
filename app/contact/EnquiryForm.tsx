"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./contact.module.css";

const INTERESTS = [
  "Develop a new product",
  "Customize a formulation",
  "OEM / Private Label",
  "Wheatgrass Coffee",
  "Moringa Chocolate",
  "Product samples",
  "Export / distribution",
  "Something else",
];

export function EnquiryForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) =>
    setInterests((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));

  if (submitted) {
    return (
      <div id="enquiry" className={styles.formCard}>
        <div className={styles.success}>
          <h2 className={styles.successHeading}>Thank you — we&apos;ve got it.</h2>
          <p className={styles.successCopy}>
            Your enquiry has been noted. We&apos;ll come back to you shortly to start the conversation about your
            product. (Form delivery is not yet connected in this preview — for now, please also reach us directly by
            email or WhatsApp.)
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      id="enquiry"
      className={styles.formCard}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={styles.formHead}>
        <h2 className={styles.formHeading}>Product enquiry</h2>
        <p className={styles.formSub}>An idea is enough to start the conversation.</p>
      </div>

      <div className={styles.formBody}>
        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input id="name" name="name" required className={styles.input} />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="company">
              Company <span className={styles.optional}>(optional)</span>
            </label>
            <input id="company" name="company" className={styles.input} />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="you@company.com"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <input id="country" name="country" className={styles.input} />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="phone">
              Phone / WhatsApp <span className={styles.optional}>(optional)</span>
            </label>
            <input id="phone" name="phone" className={styles.input} placeholder="+60 ..." />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <span className={styles.label}>What are you interested in?</span>
            <div className={styles.chips}>
              {INTERESTS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={interests.includes(item) ? styles.chipActive : styles.chip}
                  onClick={() => toggle(item)}
                  aria-pressed={interests.includes(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label className={styles.label} htmlFor="idea">
              Your product idea
            </label>
            <textarea
              id="idea"
              name="idea"
              className={styles.textarea}
              placeholder="Ingredients, flavor, target market — or just the idea so far."
            />
          </div>
        </div>

        <div className={styles.submitRow}>
          <Button type="submit" variant="primary" size="xl">
            Start the Conversation
          </Button>
          <span className={styles.privacyNote}>Used only to respond to your enquiry.</span>
        </div>
      </div>
    </form>
  );
}
