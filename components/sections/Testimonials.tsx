import Image from "next/image";
import {
  Star,
  ShieldCheck,
  Clock3,
  Car,
  Headphones,
} from "lucide-react";

interface Review {
  name: string;
  location: string;
  review: string;
  image: string;
  rating: number;
  date?: string;
}

const reviews: Review[] = [
  {
    name: "Andrea Frontelo",
    location: "East Grinstead · Heathrow Transfer",
    review:
      "Used Western Cars for our Heathrow transfer. The driver was early, the Mercedes immaculate, and the ride stress-free. Wouldn't use anyone else.",
    image:
      "https://user-images.trustpilot.com/64dcc4043610b700117c3a85/73x73.png",
    rating: 5,
    date: "2 days ago",
  },
  {
    name: "James T.",
    location: "Corporate Account",
    review:
      "Flight delayed by two hours and they waited without charging extra. Brilliant service.",
    image:
      "https://user-images.trustpilot.com/5226144000006400014aa3bf/73x73.png",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Claire W.",
    location: "Lingfield · Gatwick Return",
    review:
      "Booking was effortless and the chauffeur was fantastic. Will definitely use again.",
    image:
      "https://user-images.trustpilot.com/5ccae1c84e08cbdd84935edf/73x73.png",
    rating: 5,
    date: "3 days ago",
  },
  {
    name: "Oliver H.",
    location: "East Grinstead",
    review:
      "Our driver drove us home safely and efficiently. Friendly, professional and good value for money.",
    image:
      "https://user-images.trustpilot.com/657e03462a9e12001141a5df/73x73.png",
    rating: 4,
    date: "5 days ago",
  },
  {
    name: "Mrs Stacey",
    location: "Crawley",
    review:
      "Super lady driver. Clean vehicle, very comfortable journey and excellent customer service. Highly recommended.",
    image:
      "https://user-images.trustpilot.com/4f323cde0000640001139a87/73x73.png",
    rating: 5,
    date: "1 day ago",
  },
  {
    name: "Megan Watkinson",
    location: "London · Heathrow",
    review:
      "Amazing communication and a fantastic driver. Booking was effortless and the fixed price was exactly as quoted.",
    image:
      "https://user-images.trustpilot.com/6a6036d37b418cfba6878678/73x73.png",
    rating: 5,
    date: "4 days ago",
  },
  {
    name: "Tish Hands",
    location: "Lingfield",
    review:
      "Amazing communication and a fantastic driver. Booking was effortless and the fixed price was exactly as quoted.",
    image:
      "https://user-images.trustpilot.com/657e03462a9e12001141a5df/73x73.png",
    rating: 5,
    date: "3 days ago",
  },
  {
    name: "Mr Treharne",
    location: "Brighton",
    review:
      "Excellent BMW 5 Series. Very clean, punctual and extremely professional chauffeur.",
    image:
      "https://user-images.trustpilot.com/4f323cde0000640001139a87/73x73.png",
    rating: 5,
    date: "1 week ago",
  },
];

const bottomFeatures = [
  {
    title: "Professional Drivers",
    subtitle: "Licensed & Experienced",
    icon: ShieldCheck,
  },
  {
    title: "Always On Time",
    subtitle: "Punctual, Every Time",
    icon: Clock3,
  },
  {
    title: "Premium Fleet",
    subtitle: "Comfort & Style",
    icon: Car,
  },
  {
    title: "24/7 Support",
    subtitle: "We're Here to Help",
    icon: Headphones,
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-50/70"
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-200/35 blur-[170px]" />
        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* =========================================================
            HERO — Left copy + Right car image
        ========================================================= */}
        <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wider text-[#0B1B3A] shadow-sm">
                CLIENT REVIEWS
              </span>

              <h2 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#0B1B3A] lg:text-7xl">
                Trusted by
                <br />
                <span className="text-blue-600">Thousands</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
                Thousands of customers across Brighton &amp; Hove, Gatwick,
                Crawley, Horsham, Lewes, and the surrounding areas trust Western
                Cars for airport transfers, executive travel, and everyday
                journeys.
              </p>

              {/* Rating block */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-7 w-7 fill-blue-600 text-blue-600"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-display text-5xl font-semibold text-[#0B1B3A]">
                    5.0
                  </h3>
                  <p className="mt-1 text-slate-500">
                    Based on {reviews.length * 100}+ verified reviews
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Car visual with floating cards */}
            <div className="relative">
              {/* Glow behind car */}
              <div className="absolute right-10 top-6 h-[420px] w-[420px] rounded-full bg-blue-200/45 blur-[130px]" />

              {/* Car image */}
              <Image
                src="/images/ReviewImage-whitebg.jpg"
                alt="Western Cars Brighton executive Mercedes private hire vehicle"
                width={900}
                height={700}
                className="relative z-10 w-full object-contain drop-shadow-[0_45px_90px_rgba(15,23,42,0.25)]"
              />

              {/* Floating card — bottom right */}
              <div className="absolute bottom-8 right-10 hidden rounded-3xl bg-white px-8 py-5 shadow-[0_25px_70px_rgba(15,23,42,0.12)] lg:block">
                <div className="flex items-center gap-5">
                  <div className="rounded-full bg-blue-50 p-3">
                    <Car className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-[#0B1B3A]">
                      Premium Fleet
                    </h5>
                    <p className="text-sm text-slate-500">
                      Mercedes · Executive · MPV
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-24 mb-20 h-px max-w-7xl bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        {/* =========================================================
            REVIEW CARDS
        ========================================================= */}
        <div className="relative mx-auto max-w-7xl overflow-hidden px-6 lg:px-10">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
                <span className="text-sm font-semibold text-[#0B1B3A]">
                  Trustpilot
                </span>
              </div>
              <span className="text-sm text-slate-400">·</span>
              <span className="text-sm text-slate-500">
                {reviews.length} reviews
              </span>
            </div>
          </div>

          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {reviews.map((review, index) => (
              <div
                key={`${index}-${review.name}`}
                className="w-[min(320px,calc(100vw-3rem))] shrink-0 snap-start"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM FEATURES
        ========================================================= */}
        <div className="mx-auto mt-24 max-w-7xl px-6 pb-24 lg:px-10">
          <div className="rounded-[28px] border border-slate-100 bg-white p-10 shadow-[0_20px_60px_rgba(11,27,58,0.10)] lg:p-14">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {bottomFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group flex flex-col items-center rounded-3xl bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-blue-50"
                  >
                    <div className="rounded-2xl bg-blue-50 p-3 text-blue-800 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-[#0B1B3A]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#0B1B3A]">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {feature.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= REVIEW CARD ================= */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="
        flex
        h-[280px]
        w-full
        flex-col
        justify-between
        rounded-2xl
        bg-white
        p-6
        shadow-[0_20px_50px_rgba(11,27,58,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_30px_70px_rgba(37,99,235,0.16)]
      "
    >
      {/* Stars + date */}
      <div className="flex items-center justify-between">
        <div
          className="flex gap-0.5"
          role="img"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating
                  ? "fill-blue-600 text-blue-600"
                  : "fill-ink-200 text-slate-200"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        {review.date && (
          <span className="text-xs text-slate-400">{review.date}</span>
        )}
      </div>

      {/* Review text */}
      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-700">
        &ldquo;{review.review}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px w-full bg-slate-200" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
          <Image
            src={review.image}
            alt={review.name}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-semibold text-[#0B1B3A]">
            {review.name}
          </h4>
          <p className="truncate text-xs text-slate-500">{review.location}</p>
        </div>
        <div className="shrink-0">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
            <svg
              className="h-3 w-3 text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10 15l-5.5 3.5 1.5-6.5L1 7l6.5-1L10 0l2.5 6L19 7l-5 5 1.5 6.5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
