import {
  Clock,
  Shield,
  PoundSterling,
  Award,
  MapPin,
  Smartphone,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Day or night, early flights or late nights out — we operate around the clock, every day of the year.",
  },
  {
    icon: PoundSterling,
    title: "Fixed Prices",
    description:
      "Airport transfers and pre-booked journeys are fixed-price. No meter surprises, no hidden charges.",
  },
  {
    icon: Shield,
    title: "Licensed & Vetted",
    description:
      "Fully licensed by Brighton & Hove City Council. All drivers are DBS-checked and professionally trained.",
  },
  {
    icon: Award,
    title: "Since 2007",
    description:
      "Family-run and locally trusted for over 15 years. Part of the Western Cars private hire network.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "Born-and-bred Brighton drivers who know the shortcuts, the events, and the best pickup spots.",
  },
  {
    icon: Smartphone,
    title: "Easy Booking",
    description:
      "Book online, by phone, email, or through our iOS and Android app. Confirmation in seconds.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-sand-50/60">
      <div className="container-x">
        <SectionHeading
          title="Why Choose Western Cars Brighton?"
          subtitle="A local private hire service built on reliability, transparency, and genuine Brighton knowledge."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="card p-6 lg:p-7 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center text-ocean-600">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-white-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-white-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
