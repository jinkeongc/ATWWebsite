import type { Metadata } from "next";
import { Lora, Schibsted_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { createMetadata, DEFAULT_DESCRIPTION, organizationJsonLd, SITE_URL } from "@/lib/seo";
import "./globals.css";

/**
 * The v1 type pair, self-hosted by next/font.
 *
 * These were previously pulled in with an `@import url(fonts.googleapis.com)`
 * at the top of globals.css. Turbopack strips that rule out of the compiled
 * stylesheet, so neither family ever reached the browser and the whole site
 * silently rendered in Times and the default sans — in production too.
 *
 * next/font downloads both families at build time and serves them from our own
 * domain, which fixes the bug and also removes a render-blocking round trip to
 * Google. The CSS variables below feed --font-serif / --font-sans in
 * globals.css; both families are variable fonts, so no weight list is needed.
 */
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-schibsted-grotesk",
});

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
    <html lang="en" className={`${lora.variable} ${schibstedGrotesk.variable}`}>
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
