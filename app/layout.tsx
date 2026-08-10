import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asian Top Wellness | From idea to finished wellness product",
  description:
    "ATW is a Malaysia-based OEM / private-label wellness product developer and manufacturer, partnering with brands, distributors and entrepreneurs to formulate, manufacture, package and deliver wellness products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
