"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { stackGroups } from "@/data/skills";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TechStackMatrix() {
  const [activeId, setActiveId] = useState(stackGroups[0].id);
  const reduced = useReducedMotion();
  const active = stackGroups.find((group) => group.id === activeId) ?? stackGroups[0];

  return (
    <div className="mt-10 grid gap-3.5 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="surface-panel rounded-card p-2">
          {stackGroups.map((group) => {
            const isActive = group.id === active.id;

            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(group.id)}
                className={cn(
                  "relative flex w-full items-center justify-between gap-4 rounded-[10px] px-4 py-3.5 text-left transition-colors duration-200",
                  isActive ? "text-foreground" : "text-secondary hover:text-foreground",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="stack-active"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[10px] border border-white/8 bg-white/[0.05]"
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 340, damping: 30 }
                    }
                  />
                ) : null}
                <span className="relative z-10 flex items-baseline gap-3">
                  <span className="font-mono text-[9px] text-muted">
                    {group.index}
                  </span>
                  <span className="text-[14px] font-medium tracking-[-0.01em]">
                    {group.label}
                  </span>
                </span>
                <span className="relative z-10 font-mono text-[9px] text-muted">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-4 px-1 font-mono text-[9px] leading-relaxed tracking-[0.08em] text-muted uppercase">
          Experience comes from project work and coursework — never a
          proficiency score.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="surface-panel min-h-[400px] rounded-card p-6 sm:p-7">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduced ? 0 : 0.26, ease: EASE }}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="mono-label text-[9px] text-accent">
                    Group {active.index}
                  </span>
                  <h3 className="text-h3 mt-3">{active.label}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-secondary">
                    {active.summary}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-line px-2.5 py-1 font-mono text-[8px] tracking-[0.12em] text-muted uppercase">
                  {active.items.length} tools
                </span>
              </div>

              <ul className="mt-7 grid gap-1.5 sm:grid-cols-2">
                {active.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-start justify-between gap-3 rounded-[10px] border border-line bg-white/[0.015] px-3.5 py-3 transition-colors duration-200 hover:border-line-strong hover:bg-white/[0.035]"
                  >
                    <div className="min-w-0">
                      <p className="text-[13px] leading-snug text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[10.5px] leading-relaxed text-muted">
                        {item.note}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white/15 transition-colors duration-200 group-hover:bg-accent"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
