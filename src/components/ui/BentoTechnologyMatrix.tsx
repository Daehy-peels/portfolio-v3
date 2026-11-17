"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { technologyGroups } from "@/data/skills";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function BentoTechnologyMatrix() {
  const [activeId, setActiveId] = useState(technologyGroups[0].id);
  const reduced = useReducedMotion();
  const active =
    technologyGroups.find((group) => group.id === activeId) ??
    technologyGroups[0];

  return (
    <div className="mt-6">
      <div
        role="tablist"
        aria-label="Technology categories"
        className="flex flex-wrap gap-1.5"
      >
        {technologyGroups.map((group) => {
          const isActive = group.id === activeId;

          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(group.id)}
              className={cn(
                "relative rounded-full border px-2.5 py-1 font-mono text-[9px] tracking-[0.12em] uppercase transition-colors duration-200",
                isActive
                  ? "border-white/12 text-foreground"
                  : "border-transparent text-muted hover:text-secondary",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="bento-tech-active"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-white/[0.07]"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative z-10">{group.label}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-secondary">
        {active.blurb}
      </p>

      <div className="mt-4 min-h-[168px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={active.id}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="grid grid-cols-1 gap-1.5 sm:grid-cols-2"
          >
            {active.items.map((item) => (
              <li
                key={item.name}
                title={item.note}
                className="flex items-center gap-2 rounded-[9px] border border-line bg-white/[0.02] px-2.5 py-2 text-[12px] leading-tight text-secondary transition-colors duration-200 hover:border-line-strong hover:bg-white/[0.04] hover:text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-full bg-white/25"
                />
                <span className="truncate">{item.name}</span>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <p className="mt-4 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-muted uppercase">
        Only tools used or studied — no proficiency percentages.
      </p>
    </div>
  );
}
