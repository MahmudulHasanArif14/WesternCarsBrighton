import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/sections/ServiceHero";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
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
    alternates: { canonical: `${SITE.url}/${service.slug}/` },
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

  if (!service) notFound();

  const breadcrumb =
    service.slug === "gatwick-airport-taxi-brighton"
      ? [{ name: "Airport Transfers", href: "/airport-transfers-brighton/" }]
      : undefined;

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
                name: service.shortTitle,
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
            {service.shortTitle} — what to expect
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Western Cars Brighton has been running{" "}
            {service.shortTitle.toLowerCase()} from Brighton &amp; Hove since{" "}
            {SITE.founded}. Every journey is with a DBS-checked, locally-based
            driver who knows the city. Fixed prices on all pre-booked journeys,
            24/7 availability, and a phone line that&apos;s answered by a real
            person.
          </p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            {service.description}
          </p>

          <h2 className="font-display mt-12 text-2xl md:text-3xl font-semibold text-ink-900">
            What&apos;s included
          </h2>
          <ul className="mt-4 space-y-3 text-ink-700">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-500 mt-2 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display mt-12 text-2xl md:text-3xl font-semibold text-ink-900">
            Book your {service.shortTitle.toLowerCase()} today
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Call us on{" "}
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

      <FAQ faqs={service.faqs} title={`${service.shortTitle} FAQs`} />
      <CTABanner />
    </>
  );
}
