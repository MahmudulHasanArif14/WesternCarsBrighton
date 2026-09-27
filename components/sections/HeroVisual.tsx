"use client";

import Image from "next/image";
import {
  MapPin,
  Navigation,
  Plane,
  ArrowUpRight,
  Star,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-full min-h-[540px] w-full max-w-[680px]">
      {/* =====================================================
          MAIN BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute right-0 top-8 h-[470px] w-[88%] overflow-hidden rounded-[36px] bg-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
        <Image
          src="/images/brighton-airport.jpg"
          alt="Western Cars private hire vehicle"
          fill
          priority
          className="object-cover"
        />

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#07152d]/65 via-transparent to-transparent" />

        {/* Location label */}

        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
          <MapPin className="h-4 w-4 text-blue-600" />

          <span className="text-sm font-semibold text-slate-800">
            Brighton & Hove
          </span>
        </div>
      </div>

      {/* =====================================================
          PHONE MOCKUP
      ====================================================== */}

      <div className="absolute left-0 top-20 z-20 h-[460px] w-[220px] overflow-hidden rounded-[34px] border-[7px] border-slate-900 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.3)] sm:h-[490px] sm:w-[235px]">
        {/* Phone top */}

        <div className="absolute left-1/2 top-0 z-30 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

        {/* App header */}

        <div className="relative flex h-16 items-center justify-between border-b border-slate-100 bg-white px-4 pt-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <Navigation className="h-4 w-4 text-white" />
            </div>

            <span className="text-sm font-bold text-slate-800">
              Western Cars
            </span>
          </div>

          <div className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>

        {/* Map */}

        <div className="relative h-[240px] overflow-hidden bg-[#e8f0e5]">
          <Image src="/images/map.jpg" alt="" fill className="object-cover" />

          {/* Route */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 220 240"
            fill="none"
          >
            <path
              d="M40 190 C70 160 80 145 105 125 C125 108 140 94 168 62"
              stroke="#2563EB"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <circle
              cx="40"
              cy="190"
              r="8"
              fill="white"
              stroke="#2563EB"
              strokeWidth="4"
            />

            <circle
              cx="168"
              cy="62"
              r="8"
              fill="#2563EB"
              stroke="white"
              strokeWidth="4"
            />
          </svg>

          {/* Floating destination */}

          <div className="absolute left-3 top-3 right-3 rounded-xl border border-white/70 bg-white/95 p-3 shadow-lg backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />

              <span className="text-[11px] font-medium text-slate-400">
                PICKUP
              </span>
            </div>

            <p className="mt-1 text-xs font-semibold text-slate-800">
              Gatwick Airport
            </p>

            <div className="my-2 h-px bg-slate-100" />

            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-[11px] font-medium text-slate-400">
                DESTINATION
              </span>
            </div>

            <p className="mt-1 text-xs font-semibold text-slate-800">
              Brighton & Hove
            </p>
          </div>
        </div>

        {/* Quote section */}

        <div className="bg-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Estimated Fare
              </p>

              <p className="text-xl font-bold text-slate-900">Get a Quote</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          <button className="mt-3 w-full rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20">
            Book Your Journey
          </button>
        </div>

        {/* Bottom nav */}

        <div className="absolute bottom-0 left-0 right-0 flex h-12 items-center justify-around border-t border-slate-100 bg-white text-[9px] text-slate-400">
          <div className="font-semibold text-blue-600">Home</div>
          <div>Bookings</div>
          <div>Account</div>
        </div>
      </div>

      {/* =====================================================
          FLOATING IMAGE CARD 1
      ====================================================== */}

      <div className="absolute right-4 top-0 z-30 h-[145px] w-[190px] rotate-2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_15px_40px_rgba(15,23,42,0.2)] sm:right-8">
        <Image
          src="/images/brighton-pier.jpg"
          alt="Brighton Pier"
          fill
          className="object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
          <p className="text-xs font-bold text-white">Brighton & Hove</p>
        </div>
      </div>

      {/* =====================================================
          FLOATING IMAGE CARD 2
      ====================================================== */}

      <div className="absolute right-0 top-[165px] z-30 h-[125px] w-[165px] -rotate-3 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_15px_40px_rgba(15,23,42,0.18)]">
        <Image
          src="/images/gatwick-airport.jpg"
          alt="Gatwick Airport"
          fill
          className="object-cover"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8">
          <div className="flex items-center gap-1.5">
            <Plane className="h-3.5 w-3.5 text-white" />

            <span className="text-[11px] font-bold text-white">
              Airport Transfers
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          RATING CARD
      ====================================================== */}

      <div className="absolute left-[165px] top-[390px] z-40 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.16)] backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
            <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
          </div>

          <div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-slate-900">5.0</span>

              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-blue-600 text-blue-600"
                  />
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              Passenger rated service
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          24/7 CARD
      ====================================================== */}

      <div className="absolute bottom-5 left-4 z-40 flex items-center gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.15)] backdrop-blur">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
          <Clock className="h-5 w-5 text-emerald-600" />
        </div>

        <div>
          <p className="text-sm font-bold text-slate-800">Available 24/7</p>

          <div className="flex items-center gap-1 text-[11px] text-emerald-600">
            <CheckCircle2 className="h-3 w-3" />
            Ready to travel
          </div>
        </div>
      </div>

      {/* =====================================================
          COVERAGE CARD
      ====================================================== */}

      <div className="absolute -bottom-4 right-0 z-40 w-[390px] max-w-[92%] rounded-2xl border border-white bg-white/95 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <MapPin className="h-5 w-5 text-white" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900">
              We Cover Brighton & West Sussex
            </p>

            <p className="mt-1 text-[11px] leading-5 text-slate-500">
              Brighton · Hove · Crawley · Horsham · East Grinstead · Haywards
              Heath · Worthing · Lewes · Gatwick · Heathrow
            </p>
          </div>

          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
        </div>
      </div>
    </div>
  );
}
