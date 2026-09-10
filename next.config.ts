import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
