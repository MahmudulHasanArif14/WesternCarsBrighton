import { ChevronDown } from "lucide-react";
import { FAQ as FAQType } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

interface FAQProps {
  faqs: FAQType[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
}: FAQProps) {
  return (
    <section className="py-16 md:py-24 bg-sand-50/60">
      <div className="container-x">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            return (
              <details
                key={i}
                name="homepage-faq"
                open={i === 0}
                className="group card overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <summary
                  className="flex list-none cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left hover:bg-sand-50/60 transition-colors [&::-webkit-details-marker]:hidden"
                >
                  <span className="font-semibold text-white-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 text-sand-600 shrink-0 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-white-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
