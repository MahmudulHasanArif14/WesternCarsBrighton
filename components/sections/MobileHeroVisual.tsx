import Image from "next/image";
import {
  MapPin,
  Menu,
  Search,
  ChevronDown,
  ArrowRight,
  Home,
  ClipboardList,
  User,
  ShieldCheck,
  Clock,
  CarFront,
  CheckCircle2,
} from "lucide-react";

const coverageRows = [
  ["East Grinstead", "Crawley", "Horsham", "Haywards Heath"],
  ["Lewes", "Worthing", "Brighton", "Horley", "Gatwick", "Heathrow"],
];

const chips = [
  { icon: ShieldCheck, label: "Licensed Operator" },
  { icon: Clock, label: "24/7 Service" },
  { icon: CarFront, label: "Fixed Prices" },
  { icon: CheckCircle2, label: "Since 2007" },
];

/**
 * Mobile / small-tablet version of the hero visual.
 * Same layers as the desktop HeroVisual, stacked vertically:
 * airport photo backdrop -> tilted photos -> phone -> coverage card -> chips.
 */
export default function MobileHeroVisual() {
  return (
    <div className="mx-auto mt-6 max-w-xl px-5 pb-10 sm:px-8 sm:pb-12">
      <div className="relative overflow-hidden rounded-3xl bg-sky-100 p-5 shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]">
        {/* Backdrop photo, fading out toward the bottom of the card */}
        <div className="absolute inset-x-0 top-0 h-[420px]" aria-hidden="true">
          <Image
            src="/images/brighton-airport.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 448px) 100vw, 448px"
            className="
              object-cover object-[72%_60%]
              [-webkit-mask-image:linear-gradient(to_bottom,#000_45%,transparent_100%)]
              [mask-image:linear-gradient(to_bottom,#000_45%,transparent_100%)]
            "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-sky-100" />
        </div>

        <div className="relative flex flex-col items-center gap-5">
          {/* Tilted photos */}
          <div className="flex w-full items-start justify-center gap-3">
            <div className="relative h-[96px] w-[46%] -rotate-[4deg] overflow-hidden rounded-2xl border-[4px] border-white shadow-[0_14px_28px_-8px_rgba(15,23,42,0.35)]">
              <Image
                src="/images/brighton-pier.jpg"
                alt="Brighton Pier at sunset"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative mt-3 h-[88px] w-[42%] rotate-[5deg] overflow-hidden rounded-2xl border-[4px] border-white shadow-[0_14px_28px_-8px_rgba(15,23,42,0.35)]">
              <Image
                src="/images/gatwick-airport.jpg"
                alt="Aircraft on the apron at Gatwick Airport"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative aspect-[9/19] w-[176px] overflow-hidden rounded-[2.1rem] border-[7px] border-[#0b1220] bg-white shadow-[0_30px_60px_-10px_rgba(15,23,42,0.4),0_0_0_1.5px_rgba(148,163,184,0.7)] sm:w-[190px]">
            {/* notch */}
            <div className="absolute left-1/2 top-0 z-40 h-[16px] w-[38%] -translate-x-1/2 rounded-b-2xl bg-[#0b1220]" />

            {/* app header */}
            <div className="relative z-10 flex h-[13%] items-end justify-between bg-white px-3 pb-2">
              <Menu className="h-3.5 w-3.5 text-slate-700" aria-hidden="true" />

              <div className="flex items-center gap-1">
                <div className="relative h-6 w-6 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Western Cars logo"
                    fill
                    sizes="(min-width: 1280px) 1280px, 100vw"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-semibold text-slate-800">
                  Western Cars
                </span>
              </div>

              <Search
                className="h-3.5 w-3.5 text-blue-500"
                aria-hidden="true"
              />
            </div>

            {/* map */}
            <div className="absolute inset-x-0 bottom-[22%] top-[13%] overflow-hidden">
              <Image
                src="/images/map.png"
                alt="Map showing the booking route from Gatwick to Brighton"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* booking sheet */}
            <div className="absolute inset-x-0 bottom-[10%] z-10 mx-2 rounded-xl bg-white p-2 shadow-[0_-6px_18px_rgba(15,23,42,0.12)]">
              <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
                <MapPin
                  className="h-2.5 w-2.5 text-blue-600"
                  aria-hidden="true"
                />
                <span className="flex-1 truncate text-[8px] font-medium text-slate-700">
                  Gatwick Airport
                </span>
                <ChevronDown
                  className="h-2.5 w-2.5 text-slate-400"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-center gap-1.5 py-1.5">
                <MapPin
                  className="h-2.5 w-2.5 text-blue-600"
                  aria-hidden="true"
                />
                <span className="flex-1 truncate text-[8px] font-medium text-slate-700">
                  Brighton &amp; Hove
                </span>
                <ChevronDown
                  className="h-2.5 w-2.5 text-slate-400"
                  aria-hidden="true"
                />
              </div>
              <button
                type="button"
                tabIndex={-1}
                className="w-full rounded-md bg-blue-600 py-1.5 text-[8px] font-semibold text-white"
              >
                Get Quote
              </button>
            </div>

            {/* tab bar */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex h-[10%] items-center justify-around border-t border-slate-100 bg-white">
              {[
                { Icon: Home, label: "Home", active: true },
                { Icon: ClipboardList, label: "Bookings", active: false },
                { Icon: User, label: "Account", active: false },
              ].map(({ Icon, label, active }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <Icon
                    className={`h-3 w-3 ${active ? "text-blue-600" : "text-slate-400"}`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-[6px] ${active ? "font-semibold text-blue-600" : "text-slate-400"}`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage card (same as desktop) */}
          <div className="w-full rounded-2xl bg-white/95 p-4 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.25)] backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="flex shrink-0 flex-col items-center pt-0.5">
                <MapPin
                  className="h-9 w-9 fill-blue-600 text-white"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="mt-0.5 h-1.5 w-5 rounded-full bg-blue-100" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-bold text-[#0b2a6f]">
                    We Cover Whole of West Sussex
                  </h2>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-2 space-y-1">
                  {coverageRows.map((row, i) => (
                    <p
                      key={i}
                      className="flex flex-wrap items-center gap-x-2 text-[11px] leading-5 text-slate-600"
                    >
                      {row.map((place, j) => (
                        <span key={place} className="flex items-center gap-2">
                          {j > 0 && (
                            <span
                              aria-hidden="true"
                              className="h-[3px] w-[3px] rounded-full bg-slate-400"
                            />
                          )}
                          {place}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature chips */}
          <div className="grid w-full grid-cols-2 gap-2">
            {chips.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg bg-white/85 px-2.5 py-2 text-[11px] font-medium text-slate-700 backdrop-blur-sm"
              >
                <Icon
                  className="h-3.5 w-3.5 shrink-0 text-[#1F6FEB]"
                  aria-hidden="true"
                />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
