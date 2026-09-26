import type { Metadata } from "next";
import ServiceHero from "@/components/sections/ServiceHero";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { getServiceBySlug } from "@/lib/services";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import { notFound } from "next/navigation";

const service = getServiceBySlug("gatwick-airport-taxi-brighton");

export const metadata: Metadata = service
  ? {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: { canonical: `${SITE.url}/${service.slug}/` },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `${SITE.url}/${service.slug}/`,
      },
    }
  : {};

export default function GatwickPage() {
  if (!service) notFound();

  const breadcrumb = [
    { name: "Airport Transfers", href: "/airport-transfers-brighton/" },
  ];

  return (
    <>
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
                name: "Airport Transfers",
                url: `${SITE.url}/airport-transfers-brighton/`,
              },
              {
                name: "Gatwick Airport Taxi",
                url: `${SITE.url}/${service.slug}/`,
              },
            ]),
          ),
        }}
      />

      <ServiceHero service={service} breadcrumb={breadcrumb} />

      <section className="py-16 md:py-24 bg-background">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink-900">
            Brighton to Gatwick Airport transfers, done properly
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            If you&apos;re flying out of Gatwick, the last thing you want is
            uncertainty about your transfer. Western Cars Brighton has been
            running fixed-price Gatwick transfers from Brighton &amp; Hove since
            2007 — that&apos;s thousands of early-morning pickups from Kemptown,
            Preston Park, Hove seafront, and Brighton Marina, and just as many
            late-night returns.
          </p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            The journey typically takes 40–50 minutes door-to-door via the A23
            and M23. We allow a buffer for peak-hour traffic, and because we
            track your flight in real time, a delayed return flight never costs
            you extra.
          </p>

          <h2 className="font-display mt-12 text-2xl md:text-3xl font-semibold text-ink-900">
            What&apos;s included in every Gatwick transfer
          </h2>
          <ul className="mt-4 space-y-3 text-ink-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2 shrink-0" />
              Fixed price confirmed at booking — no meter, no surge
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2 shrink-0" />
              Meet &amp; greet at Gatwick arrivals (optional)
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2 shrink-0" />
              Real-time flight tracking for return journeys
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2 shrink-0" />
              Free waiting time for delayed flights
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2 shrink-0" />
              24/7 availability, including bank holidays
            </li>
          </ul>

          <h2 className="font-display mt-12 text-2xl md:text-3xl font-semibold text-ink-900">
            How much is a taxi from Brighton to Gatwick?
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Prices depend on your pickup location and vehicle type (saloon,
            estate, or MPV). For an exact fixed quote, call us on{" "}
            <a
              href={SITE.phoneLink}
              className="text-ocean-700 font-semibold underline decoration-sand-400 decoration-2 underline-offset-2 hover:decoration-ocean-600"
            >
              {SITE.phone}
            </a>{" "}
            or book online — you&apos;ll see the price before you confirm.
          </p>
        </div>
      </section>

      <FAQ faqs={service.faqs} title="Gatwick Transfer FAQs" />
      <CTABanner />
    </>
  );
}
