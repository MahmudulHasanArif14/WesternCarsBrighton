import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-sand-50 min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-background to-ocean-50/40" />
      <div
        className="absolute inset-0 bg-grain opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sand-300/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container-x w-full">
        <div className="max-w-lg mx-auto text-center">
          <p className="font-display text-7xl md:text-8xl font-semibold text-sand-500">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ink-900 text-balance">
            Page not found
          </h1>
          <p className="mt-4 text-ink-600 text-pretty">
            Sorry, we couldn&apos;t find that page. Let&apos;s get you back on
            route.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to home
            </Link>
            <a
              href={SITE.phoneLink}
              className="btn-ghost"
              aria-label={`Call Western Cars Brighton on ${SITE.phone}`}
            >
              <Phone className="w-4 h-4" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
