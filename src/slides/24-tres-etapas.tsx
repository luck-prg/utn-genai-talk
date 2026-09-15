import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Las 3 etapas",
  seccion: "BLOQUE 3 · SDD",
  transition: "fade",
};

export default function TresEtapas() {
  return (
    <SlideFrame meta="BLOQUE 3 · SDD">
      <h2 className="display t-md reveal">Las 3 etapas</h2>
      <div className="loop mt-l reveal">
        <span className="step acc">Constitution</span>
        <span className="arr">→</span>
        <span className="step">Specify + Plan</span>
        <span className="arr">→</span>
        <span className="step">Tasks + Implement</span>
      </div>
      <p className="sub reveal mt-m">Ecosistema de herramientas</p>
      <div className="chips reveal mt-s">
        <span className="chip">spec-kit</span>
        <span className="chip">GSD</span>
        <span className="chip">BMAD</span>
        <span className="chip">openSpec</span>
      </div>
    </SlideFrame>
  );
}
