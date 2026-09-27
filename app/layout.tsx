import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { SITE } from "@/lib/constants";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Taxi Brighton | 24/7 Local Taxi & Airport Transfers | Western Cars",
    template: "%s | Western Cars Brighton",
  },
  description:
    "Reliable 24/7 taxi service in Brighton & Hove. Local journeys, fixed-price airport transfers, corporate accounts and event hire. Call 01273 220220.",
  keywords: [
    "taxi Brighton",
    "taxi Hove",
    "Gatwick airport taxi Brighton",
    "Brighton to Gatwick transfer",
    "corporate taxi Brighton",
    "wheelchair accessible taxi Brighton",
    "Brighton taxi service",
    "Brighton airport transfer",
    "Brighton taxi company",
    "Brighton taxi booking",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: "Western Cars Brighton | 24/7 Taxi & Airport Transfers",
    description:
      "Reliable 24/7 taxi service in Brighton & Hove. Fixed-price airport transfers, corporate accounts and event hire.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Western Cars Brighton private hire taxi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Cars Brighton | 24/7 Taxi & Airport Transfers",
    description: "Reliable 24/7 taxi service in Brighton & Hove.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#D4A373",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${fraunces.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Western Cars Brighton"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans bg-background text-ink-800">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-sand-400 focus:text-ink-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>

        <AnnouncementBar />
        <Header />
        <main id="main" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
