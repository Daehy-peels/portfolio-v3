"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type HeadlineLine = {
  text: string;
  className?: string;
};

type AnimatedTextProps = {
  lines: HeadlineLine[];
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedText({
  lines,
  className,
  delay = 0.15,
  id,
}: AnimatedTextProps) {
  const reduced = useReducedMotion();

  return (
    <h1 id={id} className={className}>
      <span className="sr-only">{lines.map((line) => line.text).join(" ")}</span>
      <span aria-hidden="true" className="block">
        {lines.map((line, index) => (
          <span
            key={line.text}
            className="-mb-[0.08em] block overflow-hidden pb-[0.08em]"
          >
            <motion.span
              className={cn("block will-change-transform", line.className)}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: "108%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0.4 : 0.85,
                ease: EASE,
                delay: delay + index * 0.085,
              }}
            >
              {line.text}
            </motion.span>
          </span>
        ))}
      </span>
    </h1>
  );
}
