import Link from "next/link";

import {
  Plane,
  Briefcase,
  Calendar,
  Accessibility,
  Car,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import type { ReactNode } from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/services";

const ICONS: Record<string, ReactNode> = {
  plane: <Plane className="h-7 w-7" />,
  briefcase: <Briefcase className="h-7 w-7" />,
  calendar: <Calendar className="h-7 w-7" />,
  accessibility: <Accessibility className="h-7 w-7" />,
  car: <Car className="h-7 w-7" />,
};

export default function ServicesGrid() {
  const featuredService = SERVICES[0];
  const otherServices = SERVICES.slice(1);

  return (
    <section className="bg-[#F5F9FF] py-20 md:py-24 lg:py-28">
      <div className="container-x">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              What we offer
            </p>

            {/* Heading */}
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[#071A3A] md:text-5xl">
              Taxi services built around you
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-[#475569] md:text-lg">
              From airport transfers to everyday journeys, Western Cars provides
              reliable private hire across Brighton, Hove and beyond.
            </p>
          </div>

          {/* Book button */}
          <Link
            href="/book"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,0.20)] transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-[0_12px_30px_rgba(37,99,235,0.28)]"
          >
            Book a journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Main services layout */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* =====================================================
              FEATURED — AIRPORT TRANSFERS
          ====================================================== */}

          <Link
            href={`/${featuredService.slug}/`}
            className="group relative min-h-[470px] overflow-hidden rounded-3xl text-white shadow-[0_20px_50px_rgba(7,26,58,0.15)] lg:col-span-5"
          >
            {/* Background image */}
            <Image
              src="/images/gatwickdrop.jfif"
              alt="Airport transfer from Brighton to Gatwick"
              sizes="(max-width: 1024px) 100vw, 50vw"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Deep navy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A] via-[#071A3A]/75 to-[#071A3A]/10" />

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-[#2563EB]/10" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-8 lg:p-9">
              {/* Icon */}
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                {ICONS[featuredService.icon] ?? <Car className="h-7 w-7" />}
              </span>

              {/* Bottom content */}
              <div className="mt-auto">
                {/* Label */}
                <span className="text-sm font-medium text-[#BFDBFE]">
                  Most popular
                </span>

                {/* Title */}
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {featuredService.shortTitle}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-md text-[15px] leading-7 text-[#EFF6FF]">
                  {featuredService.description}
                </p>

                {/* Features */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredService.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#17366F] transition-all duration-300 group-hover:bg-[#EFF6FF]">
                  {featuredService.cta}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* =====================================================
              OTHER SERVICES
          ====================================================== */}

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {otherServices.map((service, index) => {
              const isLast = index === otherServices.length - 1;

              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}/`}
                  className={`group rounded-3xl border border-[#DCE6F5] bg-white p-6 shadow-[0_5px_20px_rgba(7,26,58,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#93C5FD] hover:shadow-[0_15px_40px_rgba(37,99,235,0.10)] ${
                    isLast ? "sm:col-span-2" : ""
                  }`}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                  }}
                >
                  <div className="flex h-full flex-col">
                    {/* Icon */}
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                      {ICONS[service.icon] ?? <Car className="h-6 w-6" />}
                    </span>

                    {/* Title */}
                    <h3 className="mt-5 font-display text-xl font-semibold text-[#071A3A] transition-colors duration-300 group-hover:text-[#2563EB]">
                      {service.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#475569]">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-[#2563EB]">
                      {service.cta}

                      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
