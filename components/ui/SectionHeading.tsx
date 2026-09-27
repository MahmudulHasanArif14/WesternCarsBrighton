interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-white-600 text-pretty">{subtitle}</p>
      )}
    </div>
  );
}
