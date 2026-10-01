import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  cacheComponents: true, // Next.js 16.3 Cache Components
  trailingSlash: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "westerncarsbrighton.co.uk" },
      { protocol: "https", hostname: "www.westerncarsbrighton.co.uk" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 14400,
  },

  async redirects() {
    return [
      {
        source: "/our-services/",
        destination: "/airport-transfers-brighton/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
