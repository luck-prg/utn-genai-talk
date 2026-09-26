import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es la ventana de contexto?",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  notes:
    "La pregunta sola. Acaban de ver en el diagrama la ventana de contexto que arma el constructor y se envía al modelo; ahora se define qué es y cuál es su límite. Una pausa antes de pasar.",
  transition: "fade",
};

export default function QueEsLaVentana() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO" center>
      <h2 className="display t-frase reveal">
        ¿Qué es la <span className="accent">ventana de contexto</span>?
      </h2>
    </SlideFrame>
  );
}
