import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Bloque 2 · ¿Cómo diseño un agente efectivo?",
  seccion: "BLOQUE 2",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque2() {
  return (
    <SlideFrame meta="BLOQUE 2" center>
      <p className="corte-kicker reveal">Bloque 2</p>
      <h2 className="display corte-title reveal mt-m">¿Cómo diseño un agente efectivo?</h2>
      <p className="sub corte-sub reveal mt-m">
        Context Engineering: diseñar el contexto del agente es diseñar el agente.
      </p>
    </SlideFrame>
  );
}
