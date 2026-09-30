import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  MapPin,
  Menu,
  Search,
  ChevronDown,
  ArrowRight,
  Plane,
  Home,
  ClipboardList,
  User,
  Navigation,
} from "lucide-react";

const script = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const coverageRows = [
  ["East Grinstead", "Crawley", "Horsham", "Haywards Heath"],
  ["Lewes", "Worthing", "Brighton", "Horley", "Gatwick", "Heathrow"],
];

/**
 * Right-hand hero composition.
 * The parent (Hero) decides its size: full-bleed to the viewport's right edge
 * on lg+, and a fixed-height block below the copy on mobile/tablet.
 */
export default function HeroVisual() {
  return (
    <div className="relative h-full w-full">
      {/* =====================================================
          BACKGROUND PHOTO (car + terminal + sky)
          Fades into the white page on the left (desktop) or the
          top (mobile) so it blends like the reference.
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brighton-airport.jpg"
          alt="Black Western Cars private hire saloon outside the airport terminal"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="
            object-cover object-[72%_60%] 
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_16%)]
            [mask-image:linear-gradient(to_bottom,transparent_0%,#000_16%)]
            lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.55)_18%,#000_40%)]
            lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.55)_18%,#000_40%)]
          "
        />

        {/* soft sky wash + top fade into the header */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-transparent to-transparent lg:from-white/40" />
      </div>

      {/* =====================================================
          PHONE MOCKUP
      ====================================================== */}
      <div
        className="
          absolute z-30
          left-[4%] top-[12%]
          aspect-[9/19]
          w-[clamp(148px,34%,250px)]
          sm:left-[8%] sm:w-[clamp(160px,26%,250px)]
          lg:left-[12%] lg:top-[11%] lg:w-[clamp(170px,22%,250px)]
          overflow-hidden
          rounded-[2.1rem]
          border-[7px] border-[#0b1220]
          bg-white
          shadow-[0_30px_60px_-10px_rgba(15,23,42,0.35),0_0_0_1.5px_rgba(148,163,184,0.7)]
          animate-float
        "
      >
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-40 h-[18px] w-[38%] -translate-x-1/2 rounded-b-2xl bg-[#0b1220]" />

        {/* app header */}

        <div className="relative z-10 flex h-[13%] items-end justify-between bg-white px-3 pb-2">
          <Menu className="h-3.5 w-3.5 text-slate-700" aria-hidden="true" />

          <div className="flex items-center gap-0.1">
            <div className="relative h-6 w-6 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Western Cars logo"
                fill
                priority
                sizes="24px"
                className="object-contain"
              />
            </div>
            <span className="text-[10px] font-semibold text-slate-800">
              Western Cars
            </span>
          </div>

          <Search className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
        </div>

        {/* map */}
        <div className="absolute inset-x-0 bottom-[22%] top-[13%] overflow-hidden">
          <Image
            src="/images/map.png"
            alt="Map showing the booking route from Gatwick to Brighton"
            fill
            priority
            sizes="450px"
            className="object-cover object-center"
          />

          {/* Route overlay
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M21 90 C22 72 31 61 42 54 C53 47 61 38 70 25 C73 21 74 17 74 13"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1.4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg> */}

          {/* Gatwick pin */}
          {/* <div
            className="absolute right-[20%] top-[7%] flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 shadow-md"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
          </div> */}

          {/* Brighton pin */}
          {/* <div
            className="absolute bottom-[7%] left-[18%] flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 shadow-md"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
          </div> */}
        </div>

        {/* booking sheet */}
        <div className="absolute inset-x-0 bottom-[10%] z-10 mx-2 rounded-xl bg-white p-2 shadow-[0_-6px_18px_rgba(15,23,42,0.12)]">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1.5">
            <MapPin className="h-2.5 w-2.5 text-blue-600" aria-hidden="true" />
            <span className="flex-1 text-[8px] font-medium text-slate-700">
              Gatwick Airport
            </span>
            <ChevronDown
              className="h-2.5 w-2.5 text-slate-400"
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center gap-1.5 py-1.5">
            <MapPin className="h-2.5 w-2.5 text-blue-600" aria-hidden="true" />
            <span className="flex-1 text-[8px] font-medium text-slate-700">
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

      {/* =====================================================
          BRIGHTON PIER PHOTO (tilted polaroid)
      ====================================================== */}
      <div
        className="
          absolute z-20
          left-[42%] top-[6%]
          h-[104px] w-[132px]
          -rotate-[4deg]
          overflow-hidden
          rounded-2xl
          border-[5px] border-white
          shadow-[0_18px_36px_-8px_rgba(15,23,42,0.3)]
          sm:left-[40%] sm:h-[130px] sm:w-[166px]
          lg:left-[34%] lg:top-[7%] lg:h-[clamp(130px,26%,200px)] lg:w-[clamp(160px,19.5%,230px)]
        "
      >
        <Image
          src="/images/brighton-pier.jpg"
          alt="Brighton Pier at sunset"
          fill
          priority
          sizes="230px"
          className="object-cover "
        />
      </div>

      {/* =====================================================
          GATWICK PHOTO (tilted, tucked behind the pier photo)
      ====================================================== */}
      <div
        className="
          absolute z-10
          hidden
          sm:block
          sm:left-[62%] sm:top-[17%]
          sm:h-[104px] sm:w-[128px]
          rotate-[5deg]
          overflow-hidden
          rounded-2xl
          border-[5px] border-white
          shadow-[0_18px_36px_-8px_rgba(15,23,42,0.28)]
          lg:left-[54%] lg:top-[19%] lg:h-[clamp(110px,20%,160px)] lg:w-[clamp(140px,15%,180px)]
        "
      >
        <Image
          src="/images/gatwick-airport.jpg"
          alt="Aircraft on the apron at Gatwick Airport"
          fill
          priority
          sizes="180px"
          className="object-cover"
        />
      </div>

      {/* =====================================================
          AIRPLANE + HANDWRITTEN CALLOUT
      ====================================================== */}
      <Plane
        aria-hidden="true"
        className="
          absolute right-[20%] top-[5%] z-30 hidden
          h-12 w-12 -rotate-[8deg]
          fill-slate-800 text-slate-800
          md:block lg:h-14 lg:w-14
        "
        strokeWidth={1.25}
      />

      <div
        className="absolute right-[2%] top-[15%] z-30 hidden -rotate-[8deg] md:block"
        aria-hidden="true"
      >
        <p
          className={`${script.className} text-right text-[26px] font-semibold leading-[1.05] text-blue-700 xl:text-[32px]`}
        >
          Airport Transfers
          <br />
          to Local Journeys
        </p>

        <svg
          width="190"
          height="30"
          viewBox="0 0 190 30"
          className="ml-auto mt-1 text-blue-700"
        >
          <path
            d="M6 24 C 50 6, 120 6, 182 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* =====================================================
          COVERAGE CARD
      ====================================================== */}
      <div
        className="
          absolute z-40
          inset-x-4 bottom-5
          rounded-2xl
          bg-white/95
          p-4
          shadow-[0_24px_50px_-12px_rgba(15,23,42,0.25)]
          backdrop-blur
          sm:inset-x-auto sm:right-[6%] sm:w-[400px]
          lg:bottom-[9%] lg:right-[8%] lg:w-[clamp(340px,54%,470px)]
         
        "
      >
        <div className="flex items-start gap-3">
          <div className="relative flex shrink-0 flex-col items-center pt-0.5">
            <MapPin
              className="h-9 w-9 fill-blue-600 text-white"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="mt-0.5 h-1.5 w-5 rounded-full bg-blue-100" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-[#0b2a6f] sm:text-[15px]">
                We Cover Whole of West Sussex
              </p>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-blue-600"
                aria-hidden="true"
              />
            </div>

            <div className="mt-2 space-y-1">
              {coverageRows.map((row, i) => (
                <p
                  key={i}
                  className="flex flex-wrap items-center gap-x-2 text-[11px] leading-5 text-slate-600 sm:text-xs"
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
    </div>
  );
}
