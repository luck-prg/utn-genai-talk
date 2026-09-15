import type { ComponentType } from "react";

/** Transiciones de entrada/salida disponibles para una diapositiva. */
export type SlideTransition = "fade" | "slide" | "zoom" | "flip" | "curtain" | "none";

/** Tratamiento visual de la diapositiva. `corte` invierte la paleta. */
export type SlideVariante = "corte";

/**
 * Metadatos que cada archivo de diapositiva exporta.
 * Todo es opcional salvo `title`: los defaults viven en `registry.ts`.
 */
export interface SlideMeta {
  /** Título corto, se ve en la vista de resumen (tecla O) y en el pie. */
  title: string;
  /** Notas del orador. */
  notes?: string;
  /** Transición con la que entra esta diapositiva. Default: 'fade'. */
  transition?: SlideTransition;
  /** Sección/bloque de la charla. Agrupa la vista de resumen. */
  seccion?: string;
  /** Tratamiento visual. Las divisorias de bloque usan 'corte'. */
  variante?: SlideVariante;
}

/** Diapositiva ya resuelta por el registro automático. */
export interface Slide extends Required<Pick<SlideMeta, "title" | "transition">> {
  /** Slug derivado del nombre del archivo: `02-problema.tsx` -> `problema`. */
  id: string;
  /** Posición en el mazo, 0-indexada. */
  index: number;
  numberLabel: string;
  notes?: string;
  seccion?: string;
  variante?: SlideVariante;
  Component: ComponentType;
}
