import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * Every allowed origin below corresponds to something the site actually loads:
 * Google Fonts (imported in app/globals.css), GA4 (via @next/third-parties),
 * Vercel Analytics, and Cloudflare Turnstile on the contact form. Adding a new
 * third-party script means adding its origin here, or it will be blocked.
 *
 * `'unsafe-inline'` is present in script-src because Next.js App Router injects
 * inline bootstrap/hydration scripts, and the site renders static JSON-LD
 * inline. Removing it would require nonces, which in turn require middleware on
 * every request and would stop pages being served statically — a real
 * performance cost on a marketing site. That weakens the XSS half of this
 * policy, but the site renders no visitor-supplied content, so the value here is
 * in the other directives: `frame-ancestors` stops the site being framed for
 * clickjacking, and `base-uri` / `form-action` / `object-src` close off
 * redirect and injection tricks regardless of inline script.
 */
/**
 * `next dev` compiles with eval-based hot reloading, so the dev server needs
 * 'unsafe-eval' to run at all. Production never gets it.
 */
const devOnlyScriptSrc = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${devOnlyScriptSrc} https://www.googletagmanager.com https://www.google-analytics.com https://challenges.cloudflare.com https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://challenges.cloudflare.com",
  // Turnstile renders its challenge inside an iframe on our own page.
  "frame-src https://challenges.cloudflare.com",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Legacy equivalent of frame-ancestors, for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=()",
  },
  // Vercel already sets a max-age; this adds subdomain coverage. If a subdomain
  // is ever served over plain HTTP, drop `includeSubDomains` here.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // Hides the `x-powered-by: Next.js` version banner from responses.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // The enquiry endpoint must never be cached or shared cross-origin.
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, max-age=0" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/why-us",
        destination: "/about",
        permanent: true,
      },
      // Old-site URLs still surfaced in Google sitelinks / index
      {
        source: "/why-choose-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/our-products",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
