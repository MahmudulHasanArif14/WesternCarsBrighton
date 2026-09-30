import {
  ShieldCheck,
  Calendar,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Star,
} from "lucide-react";

import Button from "@/components/ui/Button";
import HeroVisual from "../sections/HeroVisual";
import MobileHeroVisual from "../sections/MobileHeroVisual";
import { SITE } from "@/lib/constants";

const stats = [
  { icon: Calendar, label: "Established", value: "2007" },
  { icon: Clock, label: "Available 24/7", value: "24/7" },
  { icon: Star, label: "Rated Service", value: "stars" },
  { icon: MapPin, label: "Local Rates", value: "BN1" },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 sm:pb-24 lg:pb-0">
      {/* =====================================================
          BACKGROUND WASH
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_38%,rgba(191,219,254,0.7),transparent_38%),linear-gradient(135deg,#ffffff_0%,#f8fbff_50%,#eef6ff_100%)]"
      />

      {/* =====================================================
          LEFT — CONTENT
      ====================================================== */}
      <div className="container relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-center py-10 sm:py-12 lg:min-h-[640px] lg:py-14 lg:pb-32 xl:min-h-[700px]">
          <div className="max-w-full lg:max-w-[46%] xl:max-w-[640px]">
            {/* Licensed badge */}
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full bg-emerald-50 px-3.5 py-2 shadow-[0_2px_10px_rgba(16,185,129,0.12)]">
              <ShieldCheck
                className="h-5 w-5 shrink-0 fill-emerald-500 text-white"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-slate-700 sm:text-[15px]">
                Licensed Private Hire Operator
                <span className="hidden sm:inline"> — Brighton &amp; Hove</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-[34px] font-extrabold leading-[1.05] tracking-[-0.025em] text-[#0B1B3A] sm:text-[44px] sm:leading-[1.02] sm:tracking-[-0.03em] md:text-5xl lg:text-[52px] xl:text-[62px] 2xl:text-[70px]">
              Your Trusted Taxi
              <br />
              in <span className="text-[#1F6FEB]">Brighton &amp; Hove</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-full text-[15px] leading-[1.6] text-slate-700 sm:mt-6 sm:max-w-[560px] sm:text-base lg:text-lg xl:text-[20px]">
              24/7 private hire, airport transfers, corporate travel, and
              wheelchair-accessible taxis. Fixed prices, professional drivers,
              and local knowledge since 2007.
            </p>

            {/* CTAs — stack full-width on mobile */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button
                href={SITE.bookingUrl}
                size="lg"
                className="
                  group h-13 w-full justify-center gap-3 rounded-2xl bg-[#1F6FEB] px-6
                  text-[15px] font-semibold text-white
                  shadow-[0_14px_28px_-6px_rgba(31,111,235,0.45)]
                  transition-all hover:-translate-y-0.5 hover:bg-[#1A5FCC]
                  sm:h-14 sm:w-auto sm:px-7 sm:text-base
                "
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                <span>Book Online Now</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href={SITE.phoneLink}
                variant="secondary"
                size="lg"
                className="
                  h-13 w-full justify-center gap-3 rounded-2xl border-0 bg-white px-6
                  text-[15px] font-semibold text-[#1F6FEB]
                  shadow-[0_10px_30px_-8px_rgba(15,23,42,0.18)]
                  transition-all hover:-translate-y-0.5 hover:bg-blue-50
                  sm:h-14 sm:w-auto sm:px-7 sm:text-base
                "
              >
                <Phone className="h-5 w-5 fill-[#1F6FEB]" aria-hidden="true" />
                <span>Call {SITE.phone}</span>
              </Button>
            </div>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-6">
              <div
                className="flex gap-1"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#1F6FEB] text-[#1F6FEB] sm:h-5 sm:w-5"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-[12px] text-slate-500 sm:text-sm">
                Rated 5★ by Brighton &amp; Hove passengers
              </p>
            </div>

            {/* Stats */}
            <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-8 sm:grid-cols-4 sm:gap-y-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={
                      index !== 0
                        ? "sm:border-l sm:border-slate-200 sm:pl-5"
                        : "sm:pr-5"
                    }
                  >
                    <dt className="text-[13px] text-slate-600 sm:text-sm">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#1F6FEB] sm:h-11 sm:w-11">
                        <Icon
                          className={`h-5 w-5 ${
                            stat.value === "stars" ? "fill-[#1F6FEB]" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-2.5 block">{stat.label}</span>
                    </dt>

                    <dd className="mt-0.5 font-medium text-slate-800">
                      {stat.value === "stars" ? (
                        <span
                          className="flex gap-0.5"
                          role="img"
                          aria-label="Five stars"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-[#1F6FEB] text-[#1F6FEB]"
                              aria-hidden="true"
                            />
                          ))}
                        </span>
                      ) : (
                        <span className="text-[24px] leading-8 sm:text-[28px]">
                          {stat.value}
                        </span>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT VISUAL
          Mobile/tablet: stacked below content via MobileHeroVisual
          Desktop: full-bleed absolute to the right via HeroVisual
      ====================================================== */}

      {/* Mobile / tablet — simplified visual */}
      <div className="relative z-10  lg:hidden">
        <MobileHeroVisual />
      </div>

      {/* Desktop — full bleed collage */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block">
        <HeroVisual />
      </div>

      {/* =====================================================
          LAYERED WAVE (bottom of hero)
      ====================================================== */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-12 w-full sm:h-20 lg:h-[130px] xl:h-[150px]"
      >
        <defs>
          <linearGradient id="hero-wave-mid" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <linearGradient id="hero-wave-front" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="60%" stopColor="#1F6FEB" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <path
          d="M0 40 C 220 110 520 140 860 140 C 1120 140 1300 118 1440 92 V160 H0 Z"
          fill="#93C5FD"
          opacity="0.3"
        />
        <path
          d="M0 62 C 240 122 540 148 880 148 C 1140 148 1320 130 1440 108 V160 H0 Z"
          fill="url(#hero-wave-mid)"
          opacity="0.55"
        />
        <path
          d="M0 84 C 260 134 560 156 900 156 C 1160 156 1330 146 1440 132 V160 H0 Z"
          fill="url(#hero-wave-front)"
        />
      </svg>
    </section>
  );
}

export default Hero;
