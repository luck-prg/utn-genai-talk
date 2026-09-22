import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Context Engineering",
  seccion: "BLOQUE 2.1 · CONTEXT ENG.",
  transition: "fade",
};

export default function ContextEngineering() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONTEXT ENG." center>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Context
        <br />
        <span className="accent">Engineering</span>
      </h2>
      <p className="sub reveal mt-m maxw">
        Decidir qué información entra en la ventana del agente, cuándo entra y en qué forma.
      </p>
    </SlideFrame>
  );
}
