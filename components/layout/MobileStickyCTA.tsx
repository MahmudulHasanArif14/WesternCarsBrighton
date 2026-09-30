"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-sand-100 px-4 py-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
        <div className="flex gap-2">
          <a
            href={SITE.phoneLink}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm font-semibold text-white-900"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="w-4 h-4 text-ocean-600" />
            Call
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] inline-flex items-center justify-center gap-2 rounded-xl bg-sand-400 px-4 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(212,163,115,0.4)]"
          >
            Book Online
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
