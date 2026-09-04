import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué problemas encuentran?",
  seccion: "BLOQUE 1 · LÍMITES",
  notes: "Pregunta al público.",
  transition: "slide",
};

export default function InteraccionProblemas() {
  return (
    <SlideFrame meta="BLOQUE 1 · LÍMITES">
      <p className="eyebrow reveal">›// al público</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)", marginTop: "clamp(14px,1.6vw,32px)" }}>
        ¿Qué problemas
        <br />
        encuentran hoy al
        <br />
        desarrollar con <span className="accent">GenAI</span>?
      </h2>
    </SlideFrame>
  );
}
