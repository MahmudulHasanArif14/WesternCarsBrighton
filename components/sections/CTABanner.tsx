import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-ink-900 text-sand-50 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grain opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sand-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-ocean-600/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-x text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
          Ready to book your ride?
        </h2>
        <p className="mt-4 text-lg text-sand-100/80 max-w-2xl mx-auto text-pretty">
          Book online in under a minute, or call us 24/7 for a fixed quote on
          airport transfers, local journeys, and corporate accounts.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 group"
          >
            Book Online Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={SITE.phoneLink}
            className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
