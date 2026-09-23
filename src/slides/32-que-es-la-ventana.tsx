import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es la ventana de contexto?",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  notes:
    "La pregunta sola. Acaban de ver la conversación creciendo sin freno; ahora nombrá el techo contra el que crece. Dejala respirar antes de pasar.",
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
