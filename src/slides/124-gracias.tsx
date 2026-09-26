import type { SlideMeta } from "@/deck/types";
import { QrMaterial } from "@/components/QrMaterial";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¡Muchas gracias! · ¿Preguntas?",
  seccion: "BLOQUE 4 · CIERRE",
  transition: "zoom",
};

export default function Cierre() {
  return (
    <SlideFrame meta="BLOQUE 4 · CIERRE" center footer={false}>
      <QrMaterial>
        <h2 className="display reveal" style={{ fontSize: "var(--fs-section)", whiteSpace: "nowrap" }}>
          ¡<span className="accent">Muchas gracias</span>!
        </h2>
        <p className="display reveal mt-m" style={{ fontSize: "var(--fs-title)" }}>
          ¿Preguntas?
        </p>
      </QrMaterial>
    </SlideFrame>
  );
}
