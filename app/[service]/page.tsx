import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ServiceHero from "@/components/sections/ServiceHero";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

import { SERVICES, getServiceBySlug } from "@/lib/services";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({
    service: s.slug,
  }));
}

type PageProps = {
  params: Promise<{ service: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.metaTitle,

    description: service.metaDescription,

    alternates: {
      canonical: `${SITE.url}/${service.slug}/`,
    },

    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/${service.slug}/`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumb =
    service.slug === "gatwick-airport-taxi-brighton"
      ? [
          {
            name: "Airport Transfers",
            href: "/airport-transfers-brighton/",
          },
        ]
      : undefined;

  return (
    <>
      {/* =========================================================
          SERVICE SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service)),
        }}
      />

      {/* =========================================================
          FAQ SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />

      {/* =========================================================
          BREADCRUMB SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              {
                name: "Home",
                url: SITE.url,
              },
              {
                name: service.shortTitle,
                url: `${SITE.url}/${service.slug}/`,
              },
            ]),
          ),
        }}
      />

      {/* =========================================================
          SERVICE HERO
      ========================================================= */}

      <ServiceHero service={service} breadcrumb={breadcrumb} />

      {/* =========================================================
          SERVICE CONTENT
      ========================================================= */}

      <section className="bg-[#F5F9FF] py-20 md:py-24 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl">
            {/* =====================================================
                INTRODUCTION
            ===================================================== */}

            <div>
              {/* Eyebrow */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                Western Cars Brighton
              </p>

              {/* Main heading */}
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#071A3A] md:text-4xl lg:text-5xl">
                {service.shortTitle} — what to expect
              </h2>

              {/* Introduction text */}
              <div className="mt-6 space-y-5 text-base leading-7 text-[#475569] md:text-lg md:leading-8">
                <p>
                  Western Cars Brighton has been running{" "}
                  {service.shortTitle.toLowerCase()} from Brighton &amp; Hove
                  since {SITE.founded}. Every journey is with a DBS-checked,
                  locally-based driver who knows the city. Fixed prices on all
                  pre-booked journeys, 24/7 availability, and a phone line
                  that&apos;s answered by a real person.
                </p>

                <p>{service.description}</p>
              </div>
            </div>

            {/* =====================================================
                WHAT'S INCLUDED
            ===================================================== */}

            <div className="mt-14 rounded-3xl border border-[#DCE6F5] bg-white p-7 shadow-[0_10px_35px_rgba(7,26,58,0.05)] md:mt-16 md:p-9">
              {/* Section heading */}
              <div className="flex items-start gap-4">
                {/* Blue accent */}
                <span className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                    Included with your journey
                  </p>

                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#071A3A] md:text-3xl">
                    What&apos;s included
                  </h2>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] p-4 text-[#475569] transition-all duration-300 hover:border-[#93C5FD] hover:bg-[#EFF6FF]"
                  >
                    {/* Check icon */}
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-bold text-white">
                      ✓
                    </span>

                    {/* Feature text */}
                    <span className="text-sm font-medium leading-6 md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                BOOKING CTA
            ===================================================== */}

            <div className="mt-14 rounded-3xl bg-[#071A3A] p-7 text-white shadow-[0_20px_50px_rgba(7,26,58,0.14)] md:mt-16 md:p-10">
              {/* Small heading */}
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                Ready to travel?
              </p>

              {/* CTA heading */}
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
                Book your {service.shortTitle.toLowerCase()} today
              </h2>

              {/* CTA description */}
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#DCE9FF] md:text-lg">
                Call us on{" "}
                <a
                  href={SITE.phoneLink}
                  className="font-semibold text-white underline decoration-[#60A5FA] decoration-2 underline-offset-4 transition-colors hover:text-[#93C5FD]"
                >
                  {SITE.phone}
                </a>{" "}
                or book online — you&apos;ll see the price before you confirm.
              </p>

              {/* ===================================================
                  CTA BUTTONS
              =================================================== */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* Primary booking button */}
                <Link
                  href="/book/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8] hover:shadow-[0_12px_30px_rgba(37,99,235,0.35)]"
                >
                  Book online
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M13 6l6 6-6 6"
                    />
                  </svg>
                </Link>

                {/* Secondary phone button */}
                <a
                  href={SITE.phoneLink}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#071A3A]"
                >
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <FAQ faqs={service.faqs} title={`${service.shortTitle} FAQs`} />

      {/* =========================================================
          FINAL CTA BANNER
      ========================================================= */}

      <CTABanner />
    </>
  );
}
