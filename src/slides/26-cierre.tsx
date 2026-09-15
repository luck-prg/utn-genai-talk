import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Preguntas?",
  seccion: "BLOQUE 4 · CIERRE",
  transition: "zoom",
};

export default function Cierre() {
  return (
    <SlideFrame
      meta="BLOQUE 4 · CIERRE"
      footer={false}
      after={
        <div className="bar reveal" style={{ marginTop: "clamp(20px,2vw,40px)" }}>
          <span>
            <b>Luciano Rodriguez</b>
          </span>
          <span className="accent">GenAI</span>
        </div>
      }
    >
      <p className="prompt reveal">&gt; ./gracias --preguntas</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)", marginTop: "clamp(16px,1.8vw,36px)" }}>
        ¿<span className="accent">Preguntas</span>?
      </h2>
      <p className="sub reveal mt-m maxw">
        Gracias por venir. Hablemos de agentes de código, context engineering y specs.
      </p>
    </SlideFrame>
  );
}
