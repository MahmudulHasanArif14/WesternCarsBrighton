"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="bg-ink-900 text-sand-100 text-xs sm:text-sm">
        <div className="container-x py-2 flex items-center justify-center gap-2">
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
          <span className="font-medium">
            24/7 service · Gatwick fixed fares · Book in under a minute
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-sand-100 shadow-[0_1px_0_rgba(212,163,115,0.08)]"
            : "bg-background/60 backdrop-blur-md border-b border-transparent"
        }`}
      >
        <div className="container-x">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link
              href="/"
              className="group flex items-center gap-2.5 shrink-0"
              aria-label="Western Cars Brighton home"
            >
              <Image
                src="/images/logo.png"
                alt="Western Cars Brighton logo"
                width={40}
                height={40}
                priority
                className="w-10 h-10 rounded-xl object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-ink-900 tracking-tight">
                  Western Cars
                </span>
                <span className="text-[10px] text-sand-700 font-semibold tracking-[0.18em] uppercase mt-0.5">
                  Brighton · Est. 2007
                </span>
              </span>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Primary"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-sand-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={SITE.phoneLink}
                className="flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-ocean-700 transition-colors"
                aria-label={`Call Western Cars Brighton on ${SITE.phone}`}
              >
                <span className="w-8 h-8 rounded-full bg-ocean-50 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-ocean-600" />
                </span>
                <span className="hidden xl:inline">{SITE.phone}</span>
              </a>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5 group"
              >
                Book Online
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -mr-2 text-ink-700 hover:text-ink-900"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out border-t border-sand-100 bg-background ${
            open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-base font-medium text-ink-700 rounded-lg hover:text-ink-900 hover:bg-sand-50 transition-colors ${
                  open ? "animate-fade-up" : ""
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-sand-100 space-y-2">
              <a
                href={SITE.phoneLink}
                className="flex items-center gap-3 px-3 py-2.5 text-base font-semibold text-ink-900"
              >
                <Phone className="w-5 h-5 text-ocean-600" />
                {SITE.phone}
              </a>
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full text-center btn-primary"
              >
                Book Online Now
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
