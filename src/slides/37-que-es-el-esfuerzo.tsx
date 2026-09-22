import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es el esfuerzo en los modelos?",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  notes:
    "La pregunta sola. Puente desde los costos: acaban de ver que el output sale cinco veces más caro, y el razonamiento se cobra como output. O sea: cuánto piensa el modelo es una decisión, y esa decisión tiene precio.",
  transition: "fade",
};

export default function QueEsElEsfuerzo() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO" center>
      <h2 className="display t-frase reveal">
        ¿Qué es el <span className="accent">esfuerzo</span> en los modelos?
      </h2>
    </SlideFrame>
  );
}
