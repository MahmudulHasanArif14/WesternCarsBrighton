import type { Metadata } from "next";
import { Star, Quote, ArrowRight, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Reviews | Western Cars Brighton Taxi Service",
  description:
    "Read genuine reviews from Brighton & Hove passengers. Rated 5★ for airport transfers, local journeys, and wheelchair-accessible taxis. Call 01273 220220.",
  alternates: { canonical: `${SITE.url}/reviews/` },
  openGraph: {
    title: "Reviews | Western Cars Brighton Taxi Service",
    description:
      "Read genuine reviews from Brighton & Hove passengers. Rated 5★ for airport transfers and local journeys.",
    url: `${SITE.url}/reviews/`,
  },
};

const RATING_SUMMARY = {
  average: 5.0,
  count: TESTIMONIALS.length,
};

export default function ReviewsPage() {
  return (
    <>
      {/* Rating summary card */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
        <div
          className="absolute inset-0 bg-grain opacity-60"
          aria-hidden="true"
        />

        <div className="relative container-x py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand-200 rounded-full px-4 py-1.5 text-sm font-medium text-ink-700 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
              Verified passenger feedback
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-ink-900 text-balance">
              Reviews from Brighton &amp; Hove passengers
            </h1>

            <p className="mt-5 text-lg text-ink-600 text-pretty">
              Real feedback from real journeys — Gatwick runs, local hops,
              corporate accounts, and accessible taxis across the city.
            </p>

            {/* Big rating display */}
            <div className="mt-10 inline-flex flex-col items-center bg-white rounded-3xl px-10 py-8 shadow-card border border-sand-100">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-semibold text-ink-900">
                  {RATING_SUMMARY.average.toFixed(1)}
                </span>
                <span className="text-2xl text-ink-400">/ 5</span>
              </div>
              <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-sand-500 text-sand-500"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-500">
                Based on {RATING_SUMMARY.count} recent journeys
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All reviews grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          <SectionHeading
            title="What passengers say"
            subtitle="Every review below is from a genuine Western Cars Brighton journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="card-hover relative p-6 lg:p-7 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Quote
                  className="absolute top-5 right-5 w-8 h-8 text-sand-100"
                  aria-hidden="true"
                />
                <div
                  className="flex gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-sand-500 text-sand-500"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-ink-700 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-ink-100">
                  <span className="font-semibold text-ink-900">{t.name}</span>
                  <span className="text-sm text-ink-500"> — {t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 md:py-20 bg-sand-50/60">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 text-balance">
            Ridden with us recently?
          </h2>
          <p className="mt-4 text-lg text-ink-600 text-pretty">
            We&apos;d love your feedback. Leave a review and help other Brighton
            &amp; Hove passengers choose with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Leave a Review
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={SITE.phoneLink}
              className="btn-ghost text-lg px-8 py-4"
              aria-label={`Call Western Cars Brighton on ${SITE.phone}`}
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
