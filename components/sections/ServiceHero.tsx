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
    <section className="relative overflow-hidden bg-sand-50">
      <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
      <div
        className="absolute inset-0 bg-grain opacity-60"
        aria-hidden="true"
      />

      <div className="relative container-x py-12 md:py-20">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-ink-500 animate-fade-up"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ocean-700">
                  Home
                </Link>
              </li>
              {breadcrumb.map((b) => (
                <li key={b.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={b.href} className="hover:text-ocean-700">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="font-display animate-fade-up animate-delay-100 text-3xl md:text-5xl font-semibold leading-tight max-w-3xl text-ink-900 text-balance">
          {service.h1}
        </h1>
        <p className="animate-fade-up animate-delay-200 mt-5 text-lg text-ink-600 max-w-2xl leading-relaxed text-pretty">
          {service.description}
        </p>

        <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            {service.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={SITE.phoneLink}
            className="btn-ghost"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="w-5 h-5" />
            Call {SITE.phone}
          </a>
        </div>

        {service.features.length > 0 && (
          <ul className="animate-fade-up animate-delay-500 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-ink-700"
              >
                <CheckCircle className="w-5 h-5 text-forest-700 shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
