import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "ocean" | "ghost" | "outline";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: ButtonProps) {
  const variants = {
    primary: "bg-sand-400 text-ink-900 hover:bg-sand-500 shadow-sm",
    ocean: "bg-ocean-600 text-white hover:bg-ocean-700 shadow-sm",
    ghost:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-ink-200 text-ink-900 hover:bg-sand-50",
  };

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}
