import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { createMetadata, DEFAULT_DESCRIPTION, SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({
    title: "ATW | From idea to finished wellness product",
    description: DEFAULT_DESCRIPTION,
    path: "/",
  }),
  applicationName: "Asian Top Wellness",
  category: "manufacturing",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
