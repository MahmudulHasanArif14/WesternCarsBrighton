import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary" // Uber black
  | "blue" // hero blue CTA
  | "secondary" // white with border
  | "ghost" // transparent on dark
  | "outline" // outline on light
  | "inverse"; // white on dark

type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium " +
  "rounded-[999px] transition-colors duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-black focus-visible:ring-offset-white " +
  "disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap select-none";

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[14px]",
  md: "h-12 px-6 text-[16px]",
  lg: "h-14 px-8 text-[18px]",
};

const variants: Record<Variant, string> = {
  primary: "bg-black text-white hover:bg-[#4B4B4B] active:bg-black",
  blue:
    "bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] " +
    "shadow-[0_8px_20px_rgba(37,99,235,0.25)] " +
    "focus-visible:ring-[#2563EB]",
  secondary:
    "bg-white text-black border border-[#767676] hover:bg-[#F6F6F6] active:bg-[#F3F3F3]",
  outline:
    "bg-white text-[#2563EB] border border-[#E2E8F0] hover:bg-[#F8FAFC] " +
    "focus-visible:ring-[#2563EB]",
  ghost:
    "bg-transparent text-white hover:bg-white/10 active:bg-white/20 " +
    "focus-visible:ring-white focus-visible:ring-offset-black",
  inverse: "bg-white text-black hover:bg-[#F3F3F3] active:bg-[#F6F6F6]",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

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

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

/* Named alias so `import { LinkButton }` also works */
export const LinkButton = Button;
