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
          BACKGROUND IMAGE
          Original image is 16:9
      ========================================================== */}

      <div className="relative aspect-[16/9] min-h-[650px] w-full lg:min-h-0">
        <Image
          src="/images/brighton-seafront.png"
          alt="Brighton seafront"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center"
        />

        {/* =========================================================
            DARK OVERLAY
        ========================================================== */}

        {/* Dark area for text on LEFT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031B43]/95 via-[#06295C]/70 to-transparent" />

        {/* Bottom dark gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#031B43]/90 via-[#031B43]/40 to-transparent" />

        {/* Slight overall blue tint */}
        <div className="absolute inset-0 bg-[#031B43]/10" />

        {/* Blue glow on left */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-3xl" />

        {/* =========================================================
            CONTENT
        ========================================================== */}

        <div className="container-x absolute inset-0 z-10 flex flex-col justify-center py-12 md:py-16 lg:py-20">
          {/* =======================================================
              HEADER
          ======================================================== */}

          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Why choose us
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-[52px]">
              Why Choose{" "}
              <span className="text-cyan-400">Western Cars</span>
              <br />
              Brighton?
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/75 md:text-lg">
              A local, trusted taxi service with a commitment to safety,
              comfort and customer satisfaction.
            </p>
          </div>

          {/* =======================================================
              FEATURES
          ======================================================== */}

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-12 md:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-x-7 lg:gap-y-0">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="group">
                  {/* Icon */}
                  <div
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-full
                      bg-blue-600/80
                      text-cyan-300
                      shadow-[0_8px_30px_rgba(0,105,255,0.25)]
                      backdrop-blur-sm
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-blue-500
                      group-hover:text-white
                      md:h-14 md:w-14
                    "
                  >
                    <Icon
                      className="h-6 w-6 md:h-7 md:w-7"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-semibold text-white md:mt-5 md:text-[17px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[180px] text-xs leading-5 text-white/65 md:text-sm">
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