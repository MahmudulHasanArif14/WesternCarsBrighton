import { ShieldCheck, Clock, CreditCard, Award } from "lucide-react";

const SIGNALS = [
  { icon: ShieldCheck, label: "Licensed Operator" },
  { icon: Clock, label: "24/7 Service" },
  { icon: CreditCard, label: "Fixed Prices" },
  { icon: Award, label: "Since 2007" },
];

export default function TrustSignals() {
  return (
    <section className="bg-background border-b border-sand-100">
      <div className="container-x py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SIGNALS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-2 text-sm font-medium text-white-700"
            >
              <Icon className="w-5 h-5 text-ocean-600 shrink-0" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
