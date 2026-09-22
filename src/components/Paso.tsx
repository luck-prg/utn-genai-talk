import type { ReactNode } from "react";
import { useStep } from "@/deck/StageContext";

/**
 * Contenido que aparece recién en el paso `n` de la diapositiva.
 *
 * La diapositiva declara cuántos pasos tiene en su `meta` y cada bloque dice
 * en cuál entra. El paso 0 es lo que ya está en pantalla al llegar:
 *
 *   export const meta: SlideMeta = { title: "…", steps: 3 };
 *   …
 *   <Paso n={1}>lo que aparece al primer clic</Paso>
 *   <Paso n={2}>y esto al segundo</Paso>
 *
 * `salida` sirve para lo contrario: bloques que se van cuando el relato
 * avanza, como los fragmentos de texto que dejan lugar a los IDs numéricos.
 */
export function Paso({
  n,
  salida,
  children,
  className = "",
  as: Tag = "div",
}: {
  /** Paso en el que entra. */
  n: number;
  /** Paso en el que se va (queda atenuado y deja de ocupar la atención). */
  salida?: number;
  children: ReactNode;
  className?: string;
  /** Etiqueta a renderizar. Default: `div`. */
  as?: "div" | "span" | "p" | "li" | "tr" | "td" | "g";
}) {
  const step = useStep();
  const visible = step >= n && (salida === undefined || step < salida);

  return (
    <Tag className={`paso ${visible ? "on" : ""} ${className}`} aria-hidden={!visible}>
      {children}
    </Tag>
  );
}

/** Versión hook: `const at = useAt(); at(2) && …` para lógica, no para layout. */
export function useAt(): (n: number, hasta?: number) => boolean {
  const step = useStep();
  return (n, hasta) => step >= n && (hasta === undefined || step < hasta);
}
