"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type SegmentedOption<T extends string> = {
  value: T;
  label: string;
};

type SegmentedControlProps<T extends string> = {
  options: ReadonlyArray<SegmentedOption<T>>;
  value: T;
  onChange: (value: T) => void;
  layoutId: string;
  label: string;
  className?: string;
};

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  layoutId,
  label,
  className,
}: SegmentedControlProps<T>) {
  const reduced = useReducedMotion();
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % options.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + options.length) % options.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = options.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      onChange(options[nextIndex].value);
      buttons.current[nextIndex]?.focus();
    }
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-[13px] border border-white/8 bg-black/40 p-1",
        className,
      )}
    >
      {options.map((option, index) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            ref={(node) => {
              buttons.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${layoutId}-${option.value}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "relative rounded-[9px] px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-200 sm:px-3.5",
              isActive
                ? "text-foreground"
                : "text-muted hover:text-secondary",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId={layoutId}
                aria-hidden="true"
                className="absolute inset-0 rounded-[9px] border border-white/10 bg-white/[0.07]"
                transition={reduced ? { duration: 0 } : springSnappy}
              />
            ) : null}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
