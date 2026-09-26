import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Car,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Western Cars Brighton Taxi Service",
  description:
    "Contact Western Cars Brighton by phone or email, or book a taxi online 24/7. Office: Mocatta House, Trafalgar Place, Brighton BN1 4DU. Call 01273 220220.",
  alternates: { canonical: `${SITE.url}/contact-us/` },
  openGraph: {
    title: "Contact Us | Western Cars Brighton",
    description:
      "Contact Western Cars Brighton by phone or email, or book a taxi online 24/7.",
    url: `${SITE.url}/contact-us/`,
    type: "website",
  },
};

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneLink,
    description: "Answered 24/7 by a real person",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    description: "We reply within a few hours",
    external: false,
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Mocatta House, Trafalgar Place, Brighton, BN1 4DU",
    href: "https://www.google.com/maps/search/?api=1&query=Mocatta+House+Trafalgar+Place+Brighton+BN1+4DU",
    description: "Visits by appointment",
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24 hours a day, 7 days a week",
    href: null,
    description: "Including bank holidays",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-50">
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
        <div
          className="absolute inset-0 bg-grain opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sand-300/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-ocean-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container-x py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand-200 rounded-full px-4 py-1.5 text-sm font-medium text-ink-700 mb-6 shadow-sm">
              <MessageCircle className="w-4 h-4 text-sand-600" />
              Get in touch · Available 24/7
            </span>

            <h1 className="animate-fade-up animate-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-ink-900 text-balance">
              How can we help?
            </h1>
            <p className="animate-fade-up animate-delay-200 mt-6 text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl text-pretty">
              Book online 24/7 or contact the Western Cars team in Brighton.
              Whether it&apos;s an airport transfer, a corporate account, or a
              quick local journey — we&apos;re here.
            </p>

            <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 group"
              >
                <Car className="w-5 h-5" />
                Book Online
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
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[.85fr_1.15fr]">
            {/* CONTACT DETAILS */}
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ocean-700">
                <span className="w-8 h-px bg-ocean-600" />
                Reach us
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 text-balance">
                Get in touch
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed text-pretty">
                For the fastest service, call us directly — the phone line is
                answered 24/7. For non-urgent enquiries, email or use the form
                on this page.
              </p>

              <div className="mt-8 grid gap-3">
                {CONTACT_ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex gap-4 items-start">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sand-100 text-sand-700 group-hover:bg-sand-400 group-hover:text-ink-900 transition-colors">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                          {item.label}
                        </div>
                        <div className="mt-1 font-semibold text-ink-900 break-words">
                          {item.value}
                        </div>
                        <div className="mt-0.5 text-xs text-ink-500">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  );

                  const baseClass =
                    "group block rounded-2xl border border-ink-100 bg-surface p-5 transition-all duration-300 hover:border-sand-300 hover:shadow-card animate-fade-up";

                  if (!item.href) {
                    return (
                      <div
                        key={item.label}
                        className={baseClass}
                        style={{ animationDelay: `${i * 80}ms` }}
                      >
                        {content}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className={baseClass}
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* FORM */}
            <div className="card p-7 md:p-9 animate-fade-up animate-delay-200">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink-900">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                Fill in your details and we&apos;ll get back to you as soon as
                possible.
              </p>

              <form
                action={`mailto:${SITE.email}`}
                method="post"
                encType="text/plain"
                className="mt-6 grid gap-4"
              >
                <Field label="Name" name="Name" required autoComplete="name" />
                <Field
                  label="Email"
                  name="Email"
                  type="email"
                  required
                  autoComplete="email"
                />
                <Field
                  label="Phone"
                  name="Phone"
                  type="tel"
                  autoComplete="tel"
                />
                <Field
                  label="Message"
                  name="Message"
                  textarea
                  rows={5}
                  required
                />

                <button type="submit" className="btn-primary w-full mt-2">
                  Send enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="mt-4 text-xs text-ink-500 leading-relaxed">
                For the fastest booking, use the{" "}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ocean-700 underline decoration-sand-400 decoration-2 underline-offset-2 hover:decoration-ocean-600"
                >
                  online booking system
                </a>{" "}
                rather than this enquiry form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="py-16 md:py-24 bg-sand-50/60">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ocean-700">
                <span className="w-8 h-px bg-ocean-600" />
                Find us
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 text-balance">
                Based in Brighton, serving Sussex
              </h2>
              <p className="mt-4 text-ink-600 leading-relaxed text-pretty">
                Our registered office is in central Brighton, a short walk from
                Brighton station. We serve the whole of Brighton &amp; Hove,
                plus East and West Sussex, and all major UK airports.
              </p>

              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Registered office
                  </dt>
                  <dd className="mt-1 text-ink-900 font-medium">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.postcode}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Company registration
                  </dt>
                  <dd className="mt-1 text-ink-900 font-medium">
                    {SITE.legalName} · No. {SITE.companyNumber}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Service area
                  </dt>
                  <dd className="mt-1 text-ink-900 font-medium">
                    Brighton · Hove · Kemptown · Preston Park · Brighton Marina
                    · East &amp; West Sussex
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mocatta+House+Trafalgar+Place+Brighton+BN1+4DU"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-glow ring-1 ring-sand-200/50 aspect-[4/3]">
              <iframe
                title="Western Cars Brighton office location"
                src="https://www.google.com/maps?q=Mocatta+House+Trafalgar+Place+Brighton+BN1+4DU&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

/* ---------- Field component ---------- */

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  textarea?: boolean;
  rows?: number;
  required?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  textarea,
  rows,
  required,
}: FieldProps) {
  const baseClass =
    "rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 outline-none transition-all focus:border-sand-400 focus:ring-2 focus:ring-sand-400/30";

  return (
    <label className="grid gap-2 text-sm font-semibold text-ink-800">
      {label}
      {textarea ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder="Tell us about your journey…"
          className={baseClass + " resize-y"}
        />
      ) : (
        <input
          type={type}
          name={name}
          autoComplete={autoComplete}
          required={required}
          placeholder={label === "Phone" ? "Optional" : undefined}
          className={baseClass}
        />
      )}
    </label>
  );
}
