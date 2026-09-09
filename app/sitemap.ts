import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const ROUTES = ["", "/about", "/products", "/capabilities", "/services", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: new URL(path || "/", SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/contact" ? 0.8 : 0.7,
  }));
}
