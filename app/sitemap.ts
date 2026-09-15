import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CATEGORY_SLUGS } from "@/lib/categories";

const CATEGORY_ROUTES = CATEGORY_SLUGS.map((slug) => `/products/${slug}`);

const ROUTES = [
  "",
  "/about",
  "/products",
  ...CATEGORY_ROUTES,
  "/capabilities",
  "/services",
  "/contact",
];

function priorityFor(path: string) {
  if (path === "") return 1;
  if (path === "/contact") return 0.8;
  // The category pages are the ones we most want found in search.
  if (CATEGORY_ROUTES.includes(path)) return 0.9;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: new URL(path || "/", SITE_URL).toString(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: priorityFor(path),
  }));
}
