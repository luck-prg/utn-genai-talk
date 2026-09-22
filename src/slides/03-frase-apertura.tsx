import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Frase de apertura",
  seccion: "BLOQUE 0 · INTRODUCCIÓN",
  transition: "fade",
};

export default function FraseApertura() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 0 · INTRODUCCIÓN">
      <h2 className="display t-frase reveal" style={{ marginTop: "clamp(16px,1.8vw,36px)" }}>
        El valor de desarrollar
        <br />
        software de calidad
        <br />
        se ha <span className="accent">duplicado.</span>
      </h2>
    </SlideFrame>
  );
}
