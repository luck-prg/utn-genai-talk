import { motion } from "motion/react";
import { useDeck } from "./DeckProvider";
import { easeExpo } from "./transitions";

/** Hilo de acento que avanza con la presentación. */
export function ProgressBar() {
  const { index, slides } = useDeck();
  const progress = slides.length > 1 ? index / (slides.length - 1) : 1;

  return (
    <motion.div
      className="progress"
      initial={false}
      animate={{ width: `${progress * 100}%` }}
      transition={{ duration: 0.7, ease: easeExpo }}
    />
  );
}
