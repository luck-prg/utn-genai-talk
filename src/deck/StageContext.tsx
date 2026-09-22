import { createContext, useContext, type ReactNode } from "react";
import { useDeck } from "./DeckProvider";
import type { Slide } from "./types";

/**
 * Indica si el slide se está dibujando como miniatura en la vista de resumen.
 * Los fondos pesados (animaciones, video) lo consultan para dibujar una
 * versión estática y no gastar CPU de más.
 */
const ThumbnailContext = createContext(false);

export function ThumbnailProvider({ children }: { children: ReactNode }) {
  return <ThumbnailContext.Provider value={true}>{children}</ThumbnailContext.Provider>;
}

export function useIsThumbnail(): boolean {
  return useContext(ThumbnailContext);
}

/**
 * La diapositiva que se está renderizando en este árbol: la activa en el
 * mazo, o la que corresponde a esta miniatura en la vista de resumen. La
 * consultan piezas como `SlideFrame` para mostrar su propia numeración,
 * en vez de la de la diapositiva activa globalmente.
 */
const SlideContext = createContext<Slide | null>(null);

export function SlideProvider({ slide, children }: { slide: Slide; children: ReactNode }) {
  return <SlideContext.Provider value={slide}>{children}</SlideContext.Provider>;
}

export function useCurrentSlide(): Slide | null {
  return useContext(SlideContext);
}

/**
 * Paso interno de la diapositiva que se está dibujando, 0-indexado.
 *
 * En la vista de resumen no hay presentador que avance: las miniaturas
 * devuelven `Infinity` para dibujarse completas, con todos los pasos dados.
 */
export function useStep(): number {
  const isThumbnail = useIsThumbnail();
  const { step } = useDeck();
  return isThumbnail ? Number.POSITIVE_INFINITY : step;
}
