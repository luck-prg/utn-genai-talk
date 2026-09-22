import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Cómo estructuran el contexto?",
  seccion: "BLOQUE 2.1 · CONTEXT ENG.",
  notes: "Pregunta al público.",
  transition: "slide",
};

export default function InteraccionHarness() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONTEXT ENG.">
      <p className="eyebrow reveal">›// al público</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)", marginTop: "clamp(14px,1.6vw,32px)" }}>
        ¿Cómo estructuran
        <br />
        el contexto hoy?
      </h2>
      <p className="sub reveal mt-m maxw">
        ¿Usan rules, commands o MCP? ¿O tienen otras formas de darle contexto al agente?
      </p>
    </SlideFrame>
  );
}
