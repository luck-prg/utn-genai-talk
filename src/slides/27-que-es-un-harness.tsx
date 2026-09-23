import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es un Harness?",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  notes:
    "La pregunta sola, para frenar el ritmo. Acabás de mostrarlo en el diagrama; ahora ponele nombre. Dejala respirar un segundo antes de pasar.",
  transition: "fade",
};

export default function QueEsUnHarness() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO" center>
      <h2 className="display t-frase reveal">
        ¿Qué es un <span className="accent">Harness</span>?
      </h2>
    </SlideFrame>
  );
}
