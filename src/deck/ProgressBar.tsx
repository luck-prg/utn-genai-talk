import { motion } from "motion/react";
import { useDeck } from "./DeckProvider";
import { easeExpo } from "./transitions";

/** Hilo de acento que avanza con la presentación. */
export function ProgressBar() {
  const { index, slides, step, steps } = useDeck();
  // Los pasos internos mueven el hilo dentro del tramo de su diapositiva.
  const avance = index + (steps > 1 ? step / steps : 0);
  const progress = slides.length > 1 ? avance / (slides.length - 1) : 1;

  return (
    <motion.div
      className="progress"
      initial={false}
      animate={{ width: `${progress * 100}%` }}
      transition={{ duration: 0.7, ease: easeExpo }}
    />
  );
}
