import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

import { SITE } from "@/lib/constants";
import { Service } from "@/types";

interface ServiceHeroProps {
  service: Service;
  breadcrumb?: { name: string; href: string }[];
}

export default function ServiceHero({ service, breadcrumb }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F5F9FF]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft blue gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#DBEAFE]/50"
        aria-hidden="true"
      />

      {/* Decorative blue glow */}
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#2563EB]/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#60A5FA]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 bg-grain opacity-30"
        aria-hidden="true"
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative container-x py-14 md:py-20 lg:py-24">
        {/* =======================================================
            BREADCRUMB
        ======================================================= */}

        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-8 animate-fade-up text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-[#64748B]">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className="font-medium transition-colors duration-200 hover:text-[#2563EB]"
                >
                  Home
                </Link>
              </li>

              {breadcrumb.map((b) => (
                <li key={b.href} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-[#94A3B8]">
                    /
                  </span>

                  <Link
                    href={b.href}
                    className="font-medium transition-colors duration-200 hover:text-[#2563EB]"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}

              {/* Current page */}
              <li aria-current="page" className="flex items-center gap-2">
                <span aria-hidden="true" className="text-[#94A3B8]">
                  /
                </span>

                <span className="font-semibold text-[#2563EB]">
                  {service.shortTitle}
                </span>
              </li>
            </ol>
          </nav>
        )}

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="max-w-4xl">
          {/* Small label */}
          <div className="mb-5 animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-[#BFDBFE] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB] shadow-sm">
              Western Cars Brighton
            </span>
          </div>

          {/* =====================================================
              H1
          ===================================================== */}

          <h1 className="animate-fade-up animate-delay-100 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#071A3A] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {service.h1}
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p className="animate-fade-up animate-delay-200 mt-6 max-w-2xl text-base leading-7 text-[#475569] md:text-lg md:leading-8">
            {service.description}
          </p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}

          <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Primary booking button */}
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_12px_30px_rgba(37,99,235,0.32)]"
            >
              {service.cta}

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Phone button */}
            <a
              href={SITE.phoneLink}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#BFDBFE] bg-white px-7 py-4 text-sm font-semibold text-[#071A3A] shadow-[0_5px_20px_rgba(7,26,58,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
              aria-label={`Call ${SITE.phone}`}
            >
              <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
              Call {SITE.phone}
            </a>
          </div>

          {/* =====================================================
              FEATURES
          ===================================================== */}

          {service.features.length > 0 && (
            <ul className="animate-fade-up animate-delay-500 mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-[#DCE6F5] bg-white/80 px-4 py-3.5 text-sm font-medium text-[#475569] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#93C5FD] hover:bg-white hover:shadow-[0_8px_25px_rgba(37,99,235,0.08)]"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#2563EB]" />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* =====================================================
              TRUST MESSAGE
          ===================================================== */}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#64748B]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Fixed prices on pre-booked journeys
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Available 24/7
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Local Brighton drivers
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BLUE ACCENT
      ========================================================= */}

      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#071A3A] via-[#2563EB] to-[#60A5FA]"
        aria-hidden="true"
      />
    </section>
  );
}
