import Image from "next/image";
import {
  ShieldCheck,
  Clock3,
  Star,
  Headphones,
  Heart,
  Leaf,
} from "lucide-react";

const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Fully licensed and vetted drivers.",
  },
  {
    icon: Clock3,
    title: "On-Time",
    description: "We value your time and punctuality.",
  },
  {
    icon: Star,
    title: "Comfortable Rides",
    description: "Clean, modern vehicles for your comfort.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here when you need us.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description: "Lower emissions, greener future.",
  },
];

export default function WhyChooseWesternCars() {
  return (
    <section className="relative w-full overflow-hidden bg-[#031B43]">
      {/* =========================================================
          MOBILE / TABLET (< lg) — Natural flow layout
      ========================================================== */}
      <div className="relative lg:hidden">
        {/* Background image */}
        <Image
          src="/images/brighton-seafront.png"
          alt="Brighton seafront with Western Cars vehicle"
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="object-cover object-center"
        />

        {/* Uniform top-to-bottom overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#031B43]/95 via-[#031B43]/85 to-[#031B43]/95" />

        {/* Blue accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 px-5 py-14 sm:px-8 sm:py-16">
          {/* Header */}
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300 sm:text-sm">
              Why choose us
            </p>

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Why Choose <span className="text-cyan-300">Western Cars</span>
              <br />
              Brighton?
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              A local, trusted taxi service with a commitment to safety, comfort
              and customer satisfaction.
            </p>
          </div>

          {/* Features — 2-column grid on mobile */}
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-8 sm:gap-y-10">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group">
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-full
                      bg-blue-600/80 text-cyan-300
                      shadow-[0_8px_30px_rgba(0,105,255,0.25)]
                      backdrop-blur-sm
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-blue-500
                      group-hover:text-white
                      sm:h-12 sm:w-12
                    "
                  >
                    <Icon
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-3.5 text-[15px] font-semibold text-white sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP (≥ lg) — Full-bleed 16:9 hero layout
      ========================================================== */}
      <div className="relative hidden aspect-[16/9] w-full lg:block">
        <Image
          src="/images/brighton-seafront.png"
          alt="Brighton seafront with Western Cars vehicle"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Left-to-right gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031B43]/95 via-[#06295C]/70 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#031B43]/90 via-[#031B43]/40 to-transparent" />

        {/* Subtle overall tint */}
        <div className="absolute inset-0 bg-[#031B43]/10" />

        {/* Blue glow on the left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-3xl"
        />

        {/* Content */}
        <div className="container-x absolute inset-0 z-10 flex flex-col justify-center py-20">
          {/* Header */}
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Why choose us
            </p>

            <div className="font-display text-5xl font-semibold leading-tight tracking-tight text-white lg:text-[52px]">
              Why Choose <span className="text-cyan-400">Western Cars</span>
              <br />
              Brighton?
            </div>

            <p className="mt-5 max-w-lg text-lg leading-7 text-white/75">
              A local, trusted taxi service with a commitment to safety, comfort
              and customer satisfaction.
            </p>
          </div>

          {/* Features — 6-column single row */}
          <div className="mt-14 grid grid-cols-6 gap-x-7">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center rounded-full
                      bg-blue-600/80 text-cyan-300
                      shadow-[0_8px_30px_rgba(0,105,255,0.25)]
                      backdrop-blur-sm
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-blue-500
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-5 text-[17px] font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="mt-2 max-w-45 text-sm leading-5 text-white/65">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
