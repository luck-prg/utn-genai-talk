import type { Transition, Variants } from "motion/react";
import type { SlideTransition } from "./types";

/** Curva compartida por todo el mazo (equivale a --ease-out-expo en CSS). */
export const easeExpo = [0.16, 1, 0.3, 1] as const;

export const baseTransition: Transition = {
  duration: 0.7,
  ease: easeExpo,
};

/**
 * Transiciones entre diapositivas. Reciben `custom = dirección`
 * (1 = avanzar, -1 = retroceder).
 */
export const slideVariants: Record<SlideTransition, Variants> = {
  fade: {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    enter: (dir: number) => ({ opacity: 0, x: dir * 120 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -120 }),
  },
  zoom: {
    enter: { opacity: 0, scale: 1.04 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  },
  flip: {
    enter: (dir: number) => ({ opacity: 0, rotateY: dir * 16 }),
    center: { opacity: 1, rotateY: 0 },
    exit: (dir: number) => ({ opacity: 0, rotateY: dir * -16 }),
  },
  curtain: {
    enter: { clipPath: "inset(100% 0% 0% 0%)" },
    center: { clipPath: "inset(0% 0% 0% 0%)" },
    exit: { clipPath: "inset(0% 0% 100% 0%)" },
  },
  none: {
    enter: { opacity: 1 },
    center: { opacity: 1 },
    exit: { opacity: 1 },
  },
};

/** Variantes para animar el contenido DENTRO de una diapositiva. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: baseTransition },
};
