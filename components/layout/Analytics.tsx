"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const GA_ID = "G-96D08F6D39";
const COOKIE_KEY = "westerncars_cookie_consent";
const CONSENT_EVENT = "cookie-consent:accepted";

export default function Analytics() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const check = () => {
      setConsentGiven(localStorage.getItem(COOKIE_KEY) === "accepted");
    };

    check();

    // Listen for consent changes
    window.addEventListener(CONSENT_EVENT, check);
    window.addEventListener("storage", check);

    return () => {
      window.removeEventListener(CONSENT_EVENT, check);
      window.removeEventListener("storage", check);
    };
  }, []);

  return (
    <>
      {/* Vercel Analytics — cookieless, privacy-safe, always on in production */}
      {process.env.NODE_ENV === "production" && <VercelAnalytics />}

      {/* Google Analytics — consent-gated (GDPR required) */}
      {mounted && consentGiven && <GoogleAnalytics gaId={GA_ID} />}
    </>
  );
}
