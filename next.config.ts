import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "westerncarsbrighton.co.uk" },
    ],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
