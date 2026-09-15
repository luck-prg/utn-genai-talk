import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Bloque 1 · ¿Qué es un agente de código?",
  seccion: "BLOQUE 1",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque1() {
  return (
    <SlideFrame meta="BLOQUE 1" center>
      <p className="corte-kicker reveal">Bloque 1</p>
      <h2 className="display corte-title reveal mt-m">¿Qué es un agente de código?</h2>
    </SlideFrame>
  );
}
