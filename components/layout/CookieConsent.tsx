"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X, Check, ShieldCheck } from "lucide-react";

const COOKIE_KEY = "westerncars_cookie_consent";

type ConsentValue = "accepted" | "rejected" | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY) as ConsentValue;
    if (!stored) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);

    // Wake up consent-gated analytics (GA4)
    window.dispatchEvent(new Event("cookie-consent:accepted"));

    // Optional: Google Consent Mode v2 update
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);

    // Notify any listeners (not strictly needed for reject, but symmetric)
    window.dispatchEvent(new Event("cookie-consent:rejected"));

    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[90] animate-fade-up"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -top-40 bg-gradient-to-t from-ink-900/20 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="relative overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-[0_-8px_40px_-8px_rgba(15,23,42,0.18)]">
          {/* Gradient accent bar */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sand-300 via-sand-500 to-ocean-600"
          />

          <div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-start md:gap-6">
            {/* Icon */}
            <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-start">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-100 text-sand-700">
                <Cookie className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <h2
                id="cookie-consent-title"
                className="font-display text-lg font-semibold text-ink-900"
              >
                We use cookies
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-1.5 text-sm leading-relaxed text-ink-600 text-pretty"
              >
                Western Cars Brighton uses cookies to keep the site working and
                to understand how visitors use it. By clicking{" "}
                <strong className="font-semibold text-ink-900">
                  Accept all
                </strong>
                , you agree to our{" "}
                <Link
                  href="/terms/"
                  className="font-medium text-ocean-700 underline decoration-sand-400 decoration-2 underline-offset-2 hover:decoration-ocean-600"
                >
                  Terms &amp; Conditions
                </Link>{" "}
                and cookie policy.
              </p>

              {/* Trust note */}
              <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-500">
                <ShieldCheck
                  className="h-3.5 w-3.5 text-forest-700"
                  aria-hidden="true"
                />
                We never sell your data. You can change your choice anytime.
              </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col md:items-stretch lg:flex-row lg:items-center">
              <button
                type="button"
                onClick={handleReject}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  border
                  border-ink-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-ink-700
                  transition-colors
                  hover:border-ink-300
                  hover:bg-ink-50
                  focus-visible:ring-2
                  focus-visible:ring-sand-400
                  focus-visible:ring-offset-2
                "
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Reject all
              </button>

              <button
                type="button"
                onClick={handleAccept}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1.5
                  rounded-xl
                  bg-sand-400
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-ink-900
                  shadow-[0_4px_14px_rgba(212,163,115,0.4)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-sand-500
                  hover:shadow-[0_6px_18px_rgba(212,163,115,0.5)]
                  focus-visible:ring-2
                  focus-visible:ring-sand-400
                  focus-visible:ring-offset-2
                "
              >
                <Check className="h-4 w-4" aria-hidden="true" />
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
