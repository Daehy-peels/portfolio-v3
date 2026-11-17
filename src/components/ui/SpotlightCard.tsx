"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

const borderMask =
  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";

const borderMaskStyle = {
  WebkitMask: borderMask,
  mask: borderMask,
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
} as CSSProperties;

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);

  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(16, 185, 129, 0.09), transparent 68%)`;
  const edge = useMotionTemplate`radial-gradient(260px circle at ${mx}px ${my}px, rgba(16, 185, 129, 0.5), transparent 72%)`;

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={cn(
        "surface-panel group relative isolate overflow-hidden rounded-card",
        className,
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: edge, ...borderMaskStyle }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
