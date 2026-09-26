import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "accent" | "ghost" | "outline";
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
    primary: "bg-brand-700 text-white hover:bg-brand-800 shadow-sm",
    accent: "bg-accent-400 text-brand-950 hover:bg-accent-300 shadow-lg",
    ghost:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-gray-200 text-gray-900 hover:bg-gray-50",
  };
  const sizes = { md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
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
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "accent" | "ghost" | "outline";
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
    primary: "bg-brand-700 text-white hover:bg-brand-800 shadow-sm",
    accent: "bg-accent-400 text-brand-950 hover:bg-accent-300 shadow-lg",
    ghost:
      "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-gray-200 text-gray-900 hover:bg-gray-50",
  };
  const sizes = { md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
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
