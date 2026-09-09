import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/why-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
