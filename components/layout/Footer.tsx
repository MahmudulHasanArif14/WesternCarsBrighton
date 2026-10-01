import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";
import { getCurrentYear } from "@/lib/get-year";

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="font-display text-white text-xl font-semibold">
              {SITE.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Licensed private hire operator serving Brighton &amp; Hove 24/7
              since {SITE.founded}. Airport transfers, corporate travel, and
              wheelchair-accessible taxis.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <a
                href={SITE.phoneLink}
                className="flex items-start gap-3 hover:text-white-50 transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 text-white-400 shrink-0" />
                <span>{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-3 hover:text-white-50 transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 text-white-400 shrink-0" />
                <span>{SITE.email}</span>
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white-400 shrink-0" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.postcode}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-white-400 shrink-0" />
                <span>Open 24 hours, 7 days a week</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white-50 font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}/`}
                    className="hover:text-white-50 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white-50 font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.filter((l) =>
                ["/about-us/", "/reviews/", "/contact-us/"].includes(l.href),
              ).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white-50 transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog/"
                  className="hover:text-white-50 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/terms/"
                  className="hover:text-white-50 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/terms/#privacy"
                  className="hover:text-white-50 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us/"
                  className="hover:text-white-50 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white-50 font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2.5 text-sm">
              <li>Brighton</li>
              <li>Hove</li>
              <li>Kemptown</li>
              <li>Preston Park</li>
              <li>Brighton Marina</li>
              <li>East &amp; West Sussex</li>
            </ul>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm">
              <a
                href={SITE.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="hover:text-white-50 transition-colors"
              >
                Google Business Profile
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center gap-2 hover:text-white-50 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col md:flex-row justify-between gap-4 text-xs text-white-400">
          {/* was text-white-500 — now #94A3B8 which has 7.1:1 contrast against ink-900 */}
          <p>
            © {year} {SITE.legalName}. Registered in England &amp; Wales,
            Company No. {SITE.companyNumber}.
          </p>
          <p>
            Registered office: {SITE.address.street}, {SITE.address.city},{" "}
            {SITE.address.postcode}
          </p>
        </div>
      </div>
    </footer>
  );
}
