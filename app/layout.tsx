import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { SITE } from "@/lib/constants";
import { jsonLdString, siteSchema } from "@/lib/schema";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "@/components/layout/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Western Cars Brighton | Taxi & Private Hire in Brighton and Hove",
    template: "%s",
  },
  description:
    "Taxi and private hire services in Brighton and Hove, with local journeys and airport transfers to Gatwick, Heathrow and other UK airports. Call 01273 220220.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: "Western Cars Brighton | Taxi & Private Hire",
    description:
      "Taxi and private hire services in Brighton and Hove, including local journeys and airport transfers to Gatwick and Heathrow.",
    images: [
      {
        url: "/images/hero.webp",
        alt: "Western Cars Brighton taxi and private hire service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Cars Brighton | Taxi & Private Hire",
    description:
      "Taxi and private hire services in Brighton and Hove, including local journeys and airport transfers.",
    images: ["/images/hero.webp"],
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
            __html: jsonLdString(siteSchema),
          }}
        />
      </head>
      <body className="font-sans bg-background text-white-800">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-sand-400 focus:text-white-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>

        <AnnouncementBar />
        <Header />
        <main id="main" className=" lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <CookieConsent />
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
