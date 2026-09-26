import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-x">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real feedback from passengers across Brighton &amp; Hove."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <figure
              key={i}
              className="card-hover relative p-6 lg:p-7 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote
                className="absolute top-5 right-5 w-8 h-8 text-sand-100"
                aria-hidden="true"
              />
              <div
                className="flex gap-0.5"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-sand-500 text-sand-500"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-ink-700 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-ink-100">
                <span className="font-semibold text-ink-900">{t.name}</span>
                <span className="text-sm text-ink-500"> — {t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
