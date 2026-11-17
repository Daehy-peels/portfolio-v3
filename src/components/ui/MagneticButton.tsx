"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { cn, clamp } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#04140d] hover:bg-[#0fb87e] shadow-[0_10px_34px_-16px_rgba(16,185,129,0.7)]",
  secondary:
    "border border-white/12 bg-white/[0.03] text-foreground hover:border-white/20 hover:bg-white/[0.06]",
  ghost: "text-secondary hover:text-foreground hover:bg-white/[0.04]",
};

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-btn px-5 text-sm font-medium tracking-[-0.01em] transition-colors duration-200 select-none";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

function Magnetic({ children, strength = 6, className }: MagneticProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(0, { stiffness: 260, damping: 24, mass: 0.5 });
  const y = useSpring(0, { stiffness: 260, damping: 24, mass: 0.5 });

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    x.set(clamp((dx / (rect.width / 2)) * strength, -strength, strength));
    y.set(clamp((dy / (rect.height / 2)) * strength, -strength, strength));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
      className={cn("inline-flex will-change-transform", className)}
    >
      {children}
    </motion.span>
  );
}

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  magnetic?: boolean;
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  magnetic = true,
  type = "button",
  ...props
}: MagneticButtonProps) {
  const button = (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );

  return magnetic ? <Magnetic>{button}</Magnetic> : button;
}

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  magnetic?: boolean;
};

export function MagneticLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  ariaLabel,
  magnetic = true,
}: MagneticLinkProps) {
  const classes = cn(base, variants[variant], className);
  const isExternal = external ?? href.startsWith("http");

  const link = isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </a>
  ) : (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );

  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
