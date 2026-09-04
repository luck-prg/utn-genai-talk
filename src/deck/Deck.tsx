import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ControlesPuntero } from "./ControlesPuntero";
import { useDeck } from "./DeckProvider";
import { Dots } from "./Dots";
import { Overview } from "./Overview";
import { ProgressBar } from "./ProgressBar";
import { SlideProvider } from "./StageContext";
import { baseTransition, slideVariants } from "./transitions";
import { GridBackground } from "@/components/GridBackground";
import { useDeckControls } from "@/hooks/useDeckControls";

/**
 * Motor de la presentación: monta la diapositiva activa a pantalla completa
 * y anima su entrada y salida según la transición que declare cada archivo
 * de slide. El contenido interno usa la clase CSS `.reveal`, que se activa
 * agregando `.visible` al contenedor apenas termina de montarse.
 */
export function Deck() {
  useDeckControls();
  const { current, direction, blackout, setBlackout } = useDeck();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [current?.id]);

  if (!current) {
    return (
      <div className="deck-viewport" style={{ display: "grid", placeItems: "center" }}>
        No hay diapositivas en <code style={{ margin: "0 0.5em" }}>src/slides/</code>
      </div>
    );
  }

  const { Component } = current;

  return (
    <main className="deck-viewport [perspective:2400px]">
      <GridBackground />
      <ProgressBar />
      <Dots />

      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.section
          key={current.id}
          className={`slide ${visible ? "visible" : ""}`}
          custom={direction}
          variants={slideVariants[current.transition]}
          initial="enter"
          animate="center"
          exit="exit"
          transition={baseTransition}
          aria-label={`Diapositiva ${current.numberLabel}: ${current.title}`}
        >
          <SlideProvider slide={current}>
            <Component />
          </SlideProvider>
        </motion.section>
      </AnimatePresence>

      <ControlesPuntero />

      <Overview />

      {/* Pantalla en negro (tecla B): la audiencia te mira a vos, no al proyector. */}
      <AnimatePresence>
        {blackout && (
          <motion.button
            type="button"
            aria-label="Salir de la pantalla en negro"
            onClick={() => setBlackout(false)}
            className="fixed inset-0 z-[80] cursor-default bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
