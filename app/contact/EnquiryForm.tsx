"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import styles from "./contact.module.css";

const INTERESTS = [
  "Develop a new product",
  "Customize a formulation",
  "A specific ingredient or function",
  "OEM / Private Label",
  "Wheatgrass Coffee",
  "Moringa Chocolate",
  "Product samples",
  "Export / distribution",
  "Something else",
];

function InterestSelect({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.selectWrap} ref={wrapRef}>
      <button
        type="button"
        id="interest"
        className={styles.selectTrigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {value ? <span>{value}</span> : <span className={styles.selectPlaceholder}>Select what fits best</span>}
        <svg
          className={`${styles.selectChevron} ${open ? styles.selectChevronOpen : ""}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className={styles.selectMenu} role="listbox" aria-labelledby="interest">
          {INTERESTS.map((item) => {
            const selected = item === value;
            return (
              <button
                key={item}
                type="button"
                role="option"
                aria-selected={selected}
                className={selected ? styles.optionSelected : styles.option}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                {item}
                {selected && (
                  <svg className={styles.optionCheck} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
      <input type="hidden" name="interest" value={value ?? ""} />
    </div>
  );
}

export function EnquiryForm() {
  const [interest, setInterest] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [error, setError] = useState("");

  if (status === "submitted") {
    return (
      <div id="enquiry" className={styles.formCard}>
        <div className={styles.success}>
          <h2 className={styles.successHeading}>Thank you — we&apos;ve got it.</h2>
          <p className={styles.successCopy}>
            Your enquiry has been noted. We&apos;ll come back to you shortly to start the conversation about your
            product.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      id="enquiry"
      className={styles.formCard}
      aria-busy={status === "submitting"}
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setError("");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        try {
          const response = await fetch("/api/enquiry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const result = (await response.json()) as { error?: string };

          if (!response.ok) {
            throw new Error(result.error || "We couldn't send your enquiry. Please try again.");
          }

          setStatus("submitted");
          form.reset();
          setInterest(null);
        } catch (submitError) {
          setError(submitError instanceof Error ? submitError.message : "We couldn't send your enquiry. Please try again.");
          setStatus("error");
        }
      }}
    >
      <h2 className={styles.formHeading}>Product enquiry</h2>

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
          <div className={styles.field}>
            <label className={styles.label} htmlFor="phone">
              Phone / WhatsApp <span className={styles.optional}>(optional)</span>
            </label>
            <input id="phone" name="phone" className={styles.input} placeholder="+60 ..." />
          </div>
          <div className={styles.field}>
            <span className={styles.label}>What are you interested in?</span>
            <InterestSelect value={interest} onChange={setInterest} />
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
          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
        </div>

      <div className={styles.submitRow}>
        <Button type="submit" variant="primary" size="xl" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Start the Conversation"}
        </Button>
        <span className={styles.privacyNote}>Used only to respond to your enquiry.</span>
      </div>
      {status === "error" && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
