import type { Metadata } from "next";

export const SITE_NAME = "Asian Top Wellness";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.asiantopwellness.com";
export const DEFAULT_DESCRIPTION =
  "ATW is a Malaysia-based OEM and private-label wellness product partner, helping brands formulate, manufacture, package and deliver finished products.";

const SOCIAL_IMAGE = {
  url: "/placeholders/about-team-facility.jpg",
  width: 1536,
  height: 1024,
  alt: "Asian Top Wellness product development and manufacturing",
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
