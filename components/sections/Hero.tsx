import {
  ShieldCheck,
  Calendar,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  Navigation,
  CarFront,
} from "lucide-react";

import Button from "@/components/ui/Button";
import HeroVisual from "../sections/HeroVisual";
import { SITE } from "@/lib/constants";

const stats = [
  {
    icon: Calendar,
    label: "Established",
    value: "2007",
  },
  {
    icon: Clock,
    label: "Available",
    value: "24/7",
  },
  {
    icon: Star,
    label: "Rated Service",
    value: "5.0",
  },
  {
    icon: MapPin,
    label: "Local Base",
    value: "BN1",
  },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_35%,rgba(191,219,254,0.55),transparent_34%),linear-gradient(135deg,#ffffff_0%,#f8fbff_48%,#eef6ff_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-blue-200/30 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-[110px]"
      />

      {/* ================= MAIN ================= */}

      <div className="container-x relative py-10 sm:py-14 lg:py-16 xl:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-10">
            {/* License Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-2 shadow-sm backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                <ShieldCheck
                  className="h-4 w-4 text-white"
                  aria-hidden="true"
                />
              </span>

              <span className="text-sm font-semibold text-emerald-700">
                Licensed Private Hire Operator
              </span>

              <span className="hidden text-sm text-emerald-600 sm:inline">
                — Brighton & Hove
              </span>
            </div>

            {/* Headline */}

            <h1 className="mt-6 max-w-3xl text-[44px] font-bold leading-[0.98] tracking-[-0.04em] text-[#0F172A] sm:text-[58px] lg:text-[62px] xl:text-[68px]">
              Your Trusted Taxi
              <br />
              in{" "}
              <span className="relative inline-block text-[#2563EB]">
                Brighton & Hove
                <span className="absolute -bottom-1 left-0 h-[5px] w-[72%] rounded-full bg-blue-200/80" />
              </span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-xl text-[17px] leading-7 text-[#475569] sm:text-[18px]">
              24/7 private hire, airport transfers, corporate travel, and
              wheelchair-accessible taxis. Fixed prices, professional drivers,
              and local knowledge since 2007.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={SITE.bookingUrl}
                size="lg"
                className="group h-14 justify-center rounded-xl bg-[#2563EB] px-7 text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_16px_35px_rgba(37,99,235,0.35)]"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />

                <span>Book Online Now</span>

                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href={`tel:${SITE.phone}`}
                variant="secondary"
                size="lg"
                className="h-14 justify-center rounded-xl border border-slate-200 bg-white px-7 text-[#2563EB] shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />

                <span>
                  Call{" "}
                  <strong className="font-semibold">{SITE.phoneDisplay}</strong>
                </span>
              </Button>
            </div>

            {/* Rating */}

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div
                className="flex gap-0.5"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-[19px] w-[19px] fill-blue-600 text-blue-600"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="h-4 w-px bg-slate-300" />

              <p className="text-sm text-slate-500">
                Rated <span className="font-bold text-slate-800">5★</span> by
                Brighton & Hove passengers
              </p>
            </div>

            {/* =====================================================
                STATS
            ====================================================== */}

            <div className="mt-10 grid grid-cols-2 border-y border-slate-200/80 py-5 sm:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-3 py-3 sm:py-0 ${
                      index !== 0
                        ? "sm:border-l sm:border-slate-200 sm:pl-5"
                        : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                        {stat.label}
                      </p>

                      <p className="mt-0.5 text-lg font-bold text-slate-800">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Small service indicators */}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CarFront className="h-3.5 w-3.5" />
                </span>
                Professional Drivers
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Navigation className="h-3.5 w-3.5" />
                </span>
                Airport Transfers
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                Safe & Reliable
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div className="relative min-h-[540px] lg:min-h-[650px]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <div className="relative h-20 overflow-hidden sm:h-24">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M0,75 C220,10 420,110 690,72 C930,38 1150,100 1440,48 L1440,120 L0,120 Z"
            fill="#2563EB"
          />

          <path
            d="M0,91 C250,35 460,122 720,87 C980,53 1190,112 1440,67 L1440,120 L0,120 Z"
            fill="#1D4ED8"
            opacity="0.65"
          />
        </svg>
      </div>
    </section>
  );
}
