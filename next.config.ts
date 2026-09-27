import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  cacheComponents: true, // Next.js 16.3 Cache Components

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "westerncarsbrighton.co.uk" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 14400,
  },

  async redirects() {
    return [
      {
        source: "/our-services",
        destination: "/airport-transfers-brighton",
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
