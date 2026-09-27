import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <ul className="space-y-[var(--space-6)]">
      {faqs.map((f, i) => (
        <li key={i}>
          <details
            className="group rounded-[var(--radius-lg)] bg-[var(--color-bg)] shadow-[var(--shadow-sm)] open:shadow-[var(--shadow-md)] transition-shadow duration-[var(--duration-base)]"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-[var(--space-7)] p-[var(--space-9)] text-[var(--text-base)] font-semibold [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-[var(--duration-base)] group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[var(--duration-base)] ease-out group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="px-[var(--space-9)] pb-[var(--space-9)] text-[var(--text-base)] leading-[var(--leading-base)] text-[var(--color-text-muted)]">
                  {f.a}
                </p>
              </div>
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
