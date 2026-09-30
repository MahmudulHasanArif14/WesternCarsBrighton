import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ServiceHero from "@/components/sections/ServiceHero";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

import { SERVICES, getServiceBySlug } from "@/lib/services";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const DEFAULT_IMAGE = {
  src: IMAGES.brightonPier,
  alt: "Brighton seafront and Palace Pier",
};

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "airport-transfers-brighton": {
    src: IMAGES.airport,
    alt: "Brighton seafront at sunrise, departure point for airport transfers",
  },
  "gatwick-airport-taxi-brighton": {
    src: IMAGES.gatwick,
    alt: "Taxi from Brighton to Gatwick Airport",
  },
  "corporate-taxi-accounts-brighton": {
    src: IMAGES.corporate,
    alt: "Brighton & Hove city view for corporate taxi accounts",
  },
  "event-taxi-hire-brighton": {
    src: IMAGES.event,
    alt: "Amex Stadium and Brighton events transport",
  },
  "wheelchair-accessible-taxi-brighton": {
    src: IMAGES.accessible,
    alt: "Accessible taxi service across Brighton & Hove",
  },
  "local-taxi-brighton-hove": {
    src: IMAGES.local,
    alt: "The Lanes in Brighton, a popular local taxi destination",
  },
};

const getImage = (slug: string) => SERVICE_IMAGES[slug] ?? DEFAULT_IMAGE;

/* ---------------------------------------------------------
   CONTEXTUAL LINKS shown under the intro text
--------------------------------------------------------- */
const CONTEXT_LINKS: Record<
  string,
  { text: string; href: string; label: string }
> = {
  "airport-transfers-brighton": {
    text: "Flying from Gatwick?",
    href: "/gatwick-airport-taxi-brighton/",
    label: "See our Gatwick taxi page →",
  },
  "gatwick-airport-taxi-brighton": {
    text: "Need Heathrow, Stansted or Luton?",
    href: "/airport-transfers-brighton/",
    label: "View all airport transfers →",
  },
  "corporate-taxi-accounts-brighton": {
    text: "Travelling for business?",
    href: "/airport-transfers-brighton/",
    label: "Airport transfers for staff →",
  },
  "event-taxi-hire-brighton": {
    text: "Planning a big day out?",
    href: "/book/",
    label: "Get a fixed price →",
  },
  "wheelchair-accessible-taxi-brighton": {
    text: "Need a ride today?",
    href: "/book/",
    label: "Book an accessible taxi →",
  },
  "local-taxi-brighton-hove": {
    text: "Heading further afield?",
    href: "/airport-transfers-brighton/",
    label: "See airport transfers →",
  },
};

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

  const image = getImage(service.slug);

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
      images: [
        {
          url: image.src.startsWith("https://")
            ? image.src
            : `${SITE.url}${image.src}`,
          alt: image.alt,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const image = getImage(service.slug);
  const contextLink = CONTEXT_LINKS[service.slug];
  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(
    0,
    3,
  );

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
      {/* SCHEMAS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(service)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(service.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: SITE.url },
              {
                name: service.shortTitle,
                url: `${SITE.url}/${service.slug}/`,
              },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <ServiceHero service={service} breadcrumb={breadcrumb} />

      {/* SERVICE CONTENT */}
      <section className="bg-[#F5F9FF] py-20 md:py-24 lg:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-6xl">
            {/* INTRODUCTION: text + photo */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                  Western Cars Brighton
                </p>

                <h2 className="font-display text-3xl font-semibold tracking-tight text-[#071A3A] md:text-4xl lg:text-5xl">
                  {service.shortTitle} — what to expect
                </h2>

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

                  {contextLink && (
                    <p className="text-base">
                      {contextLink.text}{" "}
                      <Link
                        href={contextLink.href}
                        className="font-semibold text-[#2563EB] underline decoration-[#93C5FD] decoration-2 underline-offset-4 transition-colors hover:text-[#1D4ED8]"
                      >
                        {contextLink.label}
                      </Link>
                    </p>
                  )}
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(7,26,58,0.15)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/40 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-[#071A3A] backdrop-blur">
                  📍 Brighton &amp; Hove
                </span>
              </div>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="mt-16 rounded-3xl border border-[#DCE6F5] bg-white p-7 shadow-[0_10px_35px_rgba(7,26,58,0.05)] md:mt-20 md:p-9">
              <div className="flex items-start gap-4">
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

              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-[#E2EAF7] bg-[#F8FBFF] p-4 text-[#475569] transition-all duration-300 hover:border-[#93C5FD] hover:bg-[#EFF6FF]"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm font-medium leading-6 md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOOKING CTA with photo background */}
            <div className="relative mt-16 overflow-hidden rounded-3xl text-white shadow-[0_20px_50px_rgba(7,26,58,0.14)] md:mt-20">
              <Image
                src={image.src}
                alt=""
                aria-hidden
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#071A3A]/85" />

              <div className="relative p-7 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
                  Ready to travel?
                </p>

                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
                  Book your {service.shortTitle.toLowerCase()} today
                </h2>

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

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

                  <a
                    href={SITE.phoneLink}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#071A3A]"
                  >
                    Call {SITE.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* RELATED SERVICES (internal links) */}
            <div className="mt-16 md:mt-20">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                More from Western Cars
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#071A3A] md:text-3xl">
                Other Brighton &amp; Hove services
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedServices.map((related) => {
                  const relatedImage = getImage(related.slug);
                  return (
                    <Link
                      key={related.slug}
                      href={`/${related.slug}/`}
                      className="group overflow-hidden rounded-3xl border border-[#DCE6F5] bg-white shadow-[0_10px_35px_rgba(7,26,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#93C5FD]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={relatedImage.src}
                          alt={relatedImage.alt}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-semibold text-[#071A3A]">
                          {related.shortTitle}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#475569]">
                          {related.description}
                        </p>
                        <span className="mt-4 inline-block text-sm font-semibold text-[#2563EB] transition-transform duration-300 group-hover:translate-x-1">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={service.faqs} title={`${service.shortTitle} FAQs`} />

      {/* FINAL CTA BANNER */}
      <CTABanner />
    </>
  );
}
