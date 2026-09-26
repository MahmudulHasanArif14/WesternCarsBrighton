import Image from "next/image";
import { Phone, ArrowRight, Star, MapPin } from "lucide-react";
import { SITE, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
      <div
        className="absolute inset-0 bg-grain opacity-60"
        aria-hidden="true"
      />

      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sand-300/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-ocean-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-x py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sand-200 rounded-full px-4 py-1.5 text-sm font-medium text-ink-700 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
              Licensed Private Hire Operator — Brighton &amp; Hove
            </span>

            <h1 className="animate-fade-up animate-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-ink-900 text-balance">
              Your Trusted Taxi in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand-500 via-sand-600 to-ocean-600">
                Brighton &amp; Hove
              </span>
            </h1>

            <p className="animate-fade-up animate-delay-200 mt-6 text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl text-pretty">
              24/7 private hire, airport transfers, corporate travel, and
              wheelchair-accessible taxis. Fixed prices, professional drivers,
              and local knowledge since {SITE.founded}.
            </p>

            <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Book Online Now
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

            <div className="animate-fade-up animate-delay-500 mt-8 flex items-center gap-3 text-sm text-ink-600">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-sand-500 text-sand-500"
                  />
                ))}
              </div>
              <span>Rated 5★ by Brighton &amp; Hove passengers</span>
            </div>

            <dl className="animate-fade-up animate-delay-700 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-sm text-ink-500">{stat.label}</dt>
                  <dd className="font-display text-2xl md:text-3xl font-semibold text-sand-700 mt-1">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative animate-float">
              <div
                className="absolute -inset-4 bg-sand-400/20 blur-3xl rounded-full"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl bg-gradient-to-br from-sand-100 via-white to-ocean-50 p-8 ring-1 ring-sand-200/50 shadow-glow">
                <Image
                  src="/images/phoneImage.png"
                  alt="Western Cars Brighton booking app shown on a smartphone"
                  width={800}
                  height={1000}
                  sizes="(min-width: 1024px) 40vw, 0vw"
                  className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sand-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-ink-900" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-ink-500">
                      Serving Brighton &amp; Hove
                    </p>
                    <a
                      href={SITE.phoneLink}
                      className="font-display text-base font-semibold text-ink-900 hover:text-sand-700 transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>
    </section>
  );
}
