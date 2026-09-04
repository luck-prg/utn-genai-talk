import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Frase de apertura",
  seccion: "BLOQUE 0 · APERTURA",
  transition: "fade",
};

export default function FraseApertura() {
  return (
    <SlideFrame meta="BLOQUE 0 · APERTURA">
      <p className="prompt reveal">&gt; echo "tesis"</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)", marginTop: "clamp(16px,1.8vw,36px)" }}>
        El valor de desarrollar
        <br />
        software de calidad
        <br />
        se ha <span className="accent">duplicado.</span>
      </h2>
    </SlideFrame>
  );
}
