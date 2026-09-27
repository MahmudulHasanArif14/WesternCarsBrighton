import Link from "next/link";
import {
  Plane,
  Briefcase,
  Calendar,
  Accessibility,
  Car,
  Users,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import SectionHeading from "@/components/ui/SectionHeading";

const ICONS: Record<string, React.ReactNode> = {
  plane: <Plane className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  calendar: <Calendar className="w-8 h-8" />,
  accessibility: <Accessibility className="w-8 h-8" />,
  car: <Car className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-x">
        <SectionHeading
          title="Our Services"
          subtitle="From quick local hops to long-distance airport runs — we've got Brighton &amp; Hove covered."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/${service.slug}/`}
              className="card-hover group p-6 lg:p-8 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="w-14 h-14 bg-sand-100 rounded-xl flex items-center justify-center text-sand-700 group-hover:bg-sand-400 group-hover:text-white-900 transition-colors duration-300">
                {ICONS[service.icon] ?? <Car className="w-8 h-8" />}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-white-900 group-hover:text-sand-700 transition-colors">
                {service.shortTitle}
              </h3>
              <p className="mt-3 text-white-600 leading-relaxed">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sand-700">
                {service.cta}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
