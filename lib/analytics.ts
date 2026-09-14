import { sendGAEvent } from "@next/third-parties/google";

/**
 * Enquiry events sent to Google Analytics 4.
 *
 * Event and parameter names follow GA4 conventions (snake_case, under 40
 * characters). "generate_lead" is GA4's recommended name for a completed
 * enquiry form, so it can be marked as a key event without renaming. The
 * custom parameters (`location`, `interest`) need registering once as
 * event-scoped custom dimensions in GA4 Admin before they show up in standard
 * reports. No event carries personal data.
 *
 * Nothing is sent unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set; the same
 * variable decides whether the GA script loads at all (see app/layout.tsx).
 */
const GA_ENABLED = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

export type EnquiryClickEvent = "whatsapp_click" | "email_click" | "phone_click";
export type EnquiryEvent = EnquiryClickEvent | "generate_lead";

/** Where on the site a contact link was clicked. */
export type EnquiryLocation = "float" | "home-cta" | "contact-page" | "footer";

export function trackEnquiry(event: "generate_lead", params: { interest: string }): void;
export function trackEnquiry(event: EnquiryClickEvent, params: { location: EnquiryLocation }): void;
export function trackEnquiry(event: EnquiryEvent, params: Record<string, string>): void {
  if (!GA_ENABLED) return;
  try {
    sendGAEvent("event", event, params);
  } catch {
    // Analytics must never break the enquiry path.
  }
}
