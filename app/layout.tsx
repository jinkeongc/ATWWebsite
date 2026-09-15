import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { createMetadata, DEFAULT_DESCRIPTION, organizationJsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";

// Google Search Console "HTML tag" verification. Optional: a DNS-verified
// domain property needs no tag at all.
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

// Google Analytics 4 loads only when a measurement ID is configured.
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({
    title: "OEM & Private-Label Wellness Product Manufacturing | ATW",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  applicationName: "Asian Top Wellness",
  category: "manufacturing",
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        {children}
        <Analytics />
      </body>
      {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
    </html>
  );
}
