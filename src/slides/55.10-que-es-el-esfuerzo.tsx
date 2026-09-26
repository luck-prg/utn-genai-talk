import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es el esfuerzo en los modelos?",
  seccion: "2.1.1 · CONTEXT ENGINEERING",
  notes:
    "La pregunta sola. El razonamiento del modelo se cobra como tokens de salida, y el output sale cinco veces más caro que el input. O sea: cuánto piensa el modelo es una decisión, y esa decisión tiene precio.",
  transition: "fade",
};

export default function QueEsElEsfuerzo() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONTEXT ENG." center>
      <h2 className="display t-frase reveal">
        ¿Qué es el <span className="accent">esfuerzo</span> en los modelos?
      </h2>
    </SlideFrame>
  );
}
