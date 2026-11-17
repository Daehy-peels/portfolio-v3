"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function DottedBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let offsetX = 0;
    let offsetY = 0;

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      offsetX = (event.clientX / window.innerWidth - 0.5) * 16;
      offsetY = (event.clientY / window.innerHeight - 0.5) * 12;

      if (frame) return;
      frame = requestAnimationFrame(() => {
        element.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
        frame = 0;
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="dot-grid absolute inset-0 opacity-55 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_18%,black_0%,transparent_78%)]"
    />
  );
}
