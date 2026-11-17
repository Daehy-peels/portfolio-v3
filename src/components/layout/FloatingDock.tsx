"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Github } from "@/components/ui/icons";
import { navigationItems, profile } from "@/data/portfolio";
import { springSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FloatingDock({
  initialActive = navigationItems[0].id,
}: {
  initialActive?: string | null;
}) {
  const [active, setActive] = useState<string | null>(initialActive);
  const reduced = useReducedMotion();

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <nav
        aria-label="Section navigation"
        className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-white/10 bg-[#0a0a0e]/85 p-1.5 shadow-float backdrop-blur-xl"
      >
        {navigationItems.map((item) => {
          const isActive = item.id === active;

          return (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setActive(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative rounded-full px-2.5 py-2 text-[10px] font-medium tracking-[-0.01em] transition-colors duration-200 sm:px-3 sm:text-[11px]",
                isActive
                  ? "text-foreground"
                  : "text-secondary hover:text-foreground",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="dock-active"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                  transition={reduced ? { duration: 0 } : springSnappy}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </a>
          );
        })}

        <span aria-hidden="true" className="mx-1 h-5 w-px bg-white/10" />

        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
          className="rounded-full p-2 text-secondary transition-colors duration-200 hover:bg-white/[0.06] hover:text-foreground"
        >
          <Github className="size-4" aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
}
