import type { Variants, Transition } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const springSoft: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.8,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 360,
  damping: 30,
  mass: 0.6,
};

export const durations = {
  micro: 0.15,
  component: 0.28,
  section: 0.6,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.section, ease: EASE },
  },
};

export const staggerChildren = (stagger = 0.07, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});
