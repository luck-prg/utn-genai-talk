import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Bloque 3 · ¿Cómo desarrollo de forma efectiva con agentes?",
  seccion: "BLOQUE 3",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque3() {
  return (
    <SlideFrame meta="BLOQUE 3" center>
      <p className="corte-kicker reveal">Bloque 3</p>
      <h2 className="display corte-title reveal mt-m">¿Cómo desarrollo de forma efectiva con agentes?</h2>
      <p className="sub corte-sub reveal mt-m">
        Las specs son el artefacto principal. El código es una consecuencia.
      </p>
    </SlideFrame>
  );
}
