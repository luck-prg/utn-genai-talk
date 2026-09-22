import type { SlideMeta } from "@/deck/types";
import { HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El harness, por propósito",
  seccion: "BLOQUE 2.1 · HARNESS",
  notes: "Arranca el armado del gráfico: primero los cuatro propósitos, sin herramientas.",
  transition: "fade",
};

export default function HarnessPropositos() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS">
      <div className="harness-map">
        <HarnessDonut />
        <div className="reveal">
          <p className="eyebrow">›// el harness</p>
          <h2 className="display harness-title mt-s">Cuatro propósitos</h2>
          <p className="sub mt-s">
            Antes de elegir herramientas, definí <b>qué querés resolver</b>.
          </p>
          <ul className="blist mt-m">
            <li>
              <span>Anillo interno: para qué sirve. Anillo externo: con qué lo resolvés.</span>
            </li>
            <li>
              <span>Ninguna herramienta cubre los cuatro propósitos sola.</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
