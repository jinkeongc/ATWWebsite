import type { Metadata } from "next";
import { CONTACT_EMAIL, CONTACT_PHONE, LOGO_URL } from "./content";

export const SITE_NAME = "Asian Top Wellness";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.asiantopwellness.com";
export const DEFAULT_DESCRIPTION =
  "Develop wellness products under your own brand with ATW. Custom formulation, OEM manufacturing and packaging for drink powders, coffee, chocolate and supplements.";

/**
 * The preview card shown when a link to the site is shared (WhatsApp,
 * LinkedIn, Slack). Kept at 16:9 because that is the shape those previews
 * crop to — the portrait hero photo would lose its top and bottom.
 */
const SOCIAL_IMAGE = {
  url: "/placeholders/social-product-bench.jpg",
  width: 1600,
  height: 900,
  alt: "Unbranded pouches, green drink powders and an iced green latte on a sunlit bench",
};

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: MetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_MY",
      type: "website",
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}

/**
 * Organization and WebSite structured data, rendered once in the root layout.
 *
 * This is how Google reads who the company is: legal name, logo, where we are
 * and how to reach us. Keep it factual — it should never carry marketing
 * claims, and it is the one place the Malaysian address belongs alongside
 * About and Contact.
 */
export function organizationJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Asian Top Wellness Sdn Bhd",
    alternateName: ["Asian Top Wellness", "ATW"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${LOGO_URL}`,
    },
    image: `${SITE_URL}${SOCIAL_IMAGE.url}`,
    description: DEFAULT_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "30, Jalan SS 2/72, SS 2",
      addressLocality: "Petaling Jaya",
      addressRegion: "Selangor",
      postalCode: "47300",
      addressCountry: "MY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}
