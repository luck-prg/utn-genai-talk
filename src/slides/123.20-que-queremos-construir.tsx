import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué queremos construir",
  seccion: "4.3 · PARA SEGUIR",
  transition: "zoom",
};

export default function QueQueremosConstruir() {
  return (
    <SlideFrame header={false} footer={false} meta="4.3 · PARA SEGUIR" center>
      <h2 className="display t-frase reveal">¿Qué vale la pena<br /><span className="accent">construir</span><br />con todo esto?</h2>
      <p className="sub mt-l reveal">Y a quién le va a servir.</p>
    </SlideFrame>
  );
}
