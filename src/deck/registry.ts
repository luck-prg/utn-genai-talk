import type { ComponentType } from "react";
import type { Slide, SlideMeta } from "./types";

/**
 * REGISTRO AUTOMÁTICO DE DIAPOSITIVAS
 *
 * No hay ninguna lista central que mantener: este módulo levanta todos los
 * archivos `src/slides/NN-nombre.tsx` y los ordena por nombre de archivo.
 *
 *   - Agregar una diapositiva  -> crear un archivo nuevo. Listo.
 *   - Reordenar                -> renombrar el prefijo numérico.
 *   - Desactivar sin borrar    -> renombrar con "_" adelante.
 *   - Borrar                   -> borrar el archivo.
 */

interface SlideModule {
  default: ComponentType;
  meta?: SlideMeta;
}

const modules = import.meta.glob<SlideModule>("../slides/*.tsx", { eager: true });

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? path;
  return file
    .replace(/\.tsx$/, "")
    .replace(/^\d+[-_]?/, "")
    .toLowerCase();
}

function numberLabelFromPath(path: string, fallbackIndex: number): string {
  const file = path.split("/").pop() ?? path;
  return file.match(/^(\d+)/)?.[1] ?? String(fallbackIndex + 1).padStart(2, "0");
}

export const slides: Slide[] = Object.entries(modules)
  // Los archivos que empiezan con "_" quedan fuera del mazo:
  // sirven como plantilla o para desactivar una diapositiva sin borrarla.
  .filter(([path]) => !(path.split("/").pop() ?? "").startsWith("_"))
  .sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }))
  .map(([path, mod], index) => {
    const meta = mod.meta ?? { title: slugFromPath(path) };
    return {
      id: slugFromPath(path),
      index,
      numberLabel: numberLabelFromPath(path, index),
      title: meta.title,
      notes: meta.notes,
      transition: meta.transition ?? "fade",
      seccion: meta.seccion,
      variante: meta.variante,
      Component: mod.default,
    };
  });

export const slideCount = slides.length;
export const lastSlideNumber = slides.at(-1)?.numberLabel ?? String(slideCount).padStart(2, "0");

export function findSlideIndex(idOrNumber: string): number {
  const bySlug = slides.findIndex((s) => s.id === idOrNumber);
  if (bySlug !== -1) return bySlug;
  const asNumber = Number.parseInt(idOrNumber, 10);
  if (Number.isFinite(asNumber)) {
    const numberLabel = String(asNumber).padStart(2, "0");
    const byNumber = slides.findIndex((s) => s.numberLabel === numberLabel);
    if (byNumber !== -1) return byNumber;
  }
  return 0;
}

export function clampIndex(index: number): number {
  return Math.min(Math.max(index, 0), Math.max(slideCount - 1, 0));
}
