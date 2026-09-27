import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  ShieldCheck,
  Users,
  Clock3,
  MapPin,
  Award,
  Heart,
  ArrowRight,
  Phone,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Western Cars Brighton Private Hire Since 2007",
  description:
    "Learn about Western Cars Private Hire, established in 2007 and serving Brighton, Hove, Sussex and UK airports. Licensed, DBS-checked drivers. Call 01273 220220.",
  alternates: { canonical: `${SITE.url}/about-us/` },
  openGraph: {
    title: "About Us | Western Cars Brighton Private Hire Since 2007",
    description:
      "Local knowledge, professional drivers, and a fleet built for everything from everyday journeys to airport and group travel.",
    url: `${SITE.url}/about-us/`,
    type: "website",
  },
};

const CAR_IMAGE = "/images/Chauffering-Hire.avif";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Professional service",
    text: "Every driver is DBS-checked, licensed by Brighton & Hove City Council, and trained to deliver a consistently professional experience.",
  },
  {
    icon: Clock3,
    title: "24 hours a day",
    text: "A round-the-clock booking service for local journeys, early-morning airport runs, and late-night returns — every day of the year.",
  },
  {
    icon: Users,
    title: "Flexible fleet",
    text: "From executive saloons to 8-seater carriers and wheelchair-accessible vehicles — the right vehicle for every journey.",
  },
];

const POINTS = [
  "24/7 booking service",
  "Local and long-distance journeys",
  "Corporate travel accounts",
  "Group and event transport",
  "Airport transfers to all UK hubs",
  "Wheelchair-accessible vehicles",
];

const MILESTONES = [
  { year: "2007", label: "Founded in Crawley, expanding across Sussex" },
  { year: "2015", label: "Corporate account programme launched" },
  { year: "2020", label: "WAV fleet expanded for accessible travel" },
  { year: "2024", label: "Brighton & Hove dedicated service" },
];

export default function AboutPage() {
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
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sand-300/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-ocean-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container-x py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand-200 rounded-full px-4 py-1.5 text-sm font-medium text-ink-700 mb-6 shadow-sm">
              <Award className="w-4 h-4 text-sand-600" />
              Established 2007 · Brighton &amp; Hove
            </span>

            <h1 className="animate-fade-up animate-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink-900 text-balance">
              A Brighton private hire service{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 via-sand-600 to-ocean-600">
                built on reliability.
              </span>
            </h1>

            <p className="animate-fade-up animate-delay-200 mt-6 text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl text-pretty">
              Local knowledge, professional drivers, and a fleet designed for
              everything from everyday journeys to airport and group travel.
            </p>

            <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Book Online
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={SITE.phoneLink} className="btn-ghost text-lg px-8 py-4">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ocean-700">
                <span className="w-8 h-px bg-ocean-600" />
                Who we are
              </span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink-900 text-balance">
                Private hire built around reliable journeys.
              </h2>
              <p className="mt-5 leading-relaxed text-ink-600 text-pretty">
                Western Cars was established in 2007 to provide private hire
                across East and West Sussex and surrounding areas. The service
                covers Brighton and Hove, major stations, and UK airports
                including Gatwick, Heathrow, London City, Stansted, and Luton.
              </p>
              <p className="mt-4 leading-relaxed text-ink-600 text-pretty">
                Our fleet includes executive vehicles, saloons, estates, six-,
                seven- and eight-seater carriers, and wheelchair-accessible
                vehicles — so there&apos;s always a right-sized option for the
                journey ahead.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {POINTS.map((text, i) => (
                  <li
                    key={text}
                    className="flex items-center gap-2.5 text-sm font-medium text-ink-800 animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="shrink-0 w-5 h-5 rounded-full bg-forest-50 border border-forest-200 flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-forest-800"
                        strokeWidth={3}
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div
                className="absolute -inset-4 bg-sand-400/20 blur-3xl rounded-full"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-sand-200/50 shadow-glow">
                <Image
                  src={CAR_IMAGE}
                  width={800}
                  height={800}
                  alt="Western Cars Brighton executive private hire vehicle"
                  className="h-full w-full object-cover aspect-square"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
                {/* Floating stat card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-display text-2xl font-semibold text-sand-700">
                        18+
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        Years serving
                      </div>
                    </div>
                    <div className="border-x border-ink-100">
                      <div className="font-display text-2xl font-semibold text-ocean-700">
                        24/7
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        Availability
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-2xl font-semibold text-forest-800">
                        6+
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5">
                        Vehicle types
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 md:py-24 bg-sand-50/60">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 text-balance">
              What sets us apart
            </h2>
            <p className="mt-4 text-lg text-ink-600 text-pretty">
              Three things we refuse to compromise on — no matter the journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card-hover p-7 lg:p-8 animate-fade-up"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <span className="grid w-12 h-12 place-items-center rounded-xl bg-ocean-50 text-ocean-700">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-600 text-sm">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ocean-700">
              <span className="w-8 h-px bg-ocean-600" />
              Our story
              <span className="w-8 h-px bg-ocean-600" />
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink-900 text-balance">
              Nearly two decades on the road
            </h2>
          </div>

          <ol className="relative border-l-2 border-sand-200 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-4 md:gap-6 md:border-t-2 md:pt-8 md:border-sand-200">
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                className="relative pl-8 pb-8 md:pl-0 md:pb-0 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="absolute left-[-9px] top-0 md:left-0 md:-top-[41px] w-4 h-4 rounded-full bg-sand-400 ring-4 ring-background shadow-[0_0_0_2px_rgba(212,163,115,0.3)]" />
                <div className="font-display text-2xl font-semibold text-sand-700">
                  {m.year}
                </div>
                <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                  {m.label}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-16 md:py-24 bg-ink-900 text-sand-50 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grain opacity-30"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sand-400/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative container-x max-w-4xl text-center">
          <Heart className="w-10 h-10 text-sand-400 mx-auto" />
          <h2 className="font-display mt-6 text-3xl md:text-4xl font-semibold text-balance">
            Local first. Every time.
          </h2>
          <p className="mt-5 text-lg text-sand-100/80 leading-relaxed text-pretty">
            We&apos;re not a faceless national app. We&apos;re a Brighton
            business, run by people who live here, drive here, and know the
            shortcuts between the Lanes and the Amex on a match day. That local
            knowledge is what our passengers keep coming back for.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Book Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact-us/"
              className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-4 backdrop-blur-sm"
            >
              <MapPin className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
