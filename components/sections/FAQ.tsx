"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-sand-50/60">
      <div className="container-x">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="card overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-sand-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sand-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
