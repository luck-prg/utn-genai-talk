import type { SlideMeta } from "@/deck/types";
import { HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El harness, por propósito",
  seccion: "2.1.2 · HARNESS ENGINEERING",
  notes: "Arranca el armado del gráfico: primero los cuatro propósitos, sin herramientas.",
  transition: "fade",
};

export default function HarnessPropositos() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS" bodyClass="a-sangre">
      <div className="harness-stage">
        <h2 className="display harness-stage-title reveal">Cuatro propósitos</h2>
        <div className="harness-ring">
          <HarnessDonut />
        </div>
      </div>
    </SlideFrame>
  );
}
