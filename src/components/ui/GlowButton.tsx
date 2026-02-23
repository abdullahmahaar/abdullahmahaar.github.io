"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type GlowButtonProps = {
  variant: "primary" | "ghost";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

export function GlowButton({ variant, children, href, onClick, className }: GlowButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-accent-cyan text-bg-primary shadow-cyan hover:animate-glow"
      : "border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10";

  const classes = cn(base, variantClasses, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
