import type { SlideMeta } from "@/deck/types";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Nivel 6 · Evals",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "La validación deja de ser 'yo lo miro y digo que está bien': hay un sistema de evals que mide, de forma repetible, si lo que hace el agente sigue siendo correcto a medida que cambia el modelo, el prompt o el harness.",
  transition: "fade",
};

export default function Nivel6Evals() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" bodyClass="a-sangre">
      <p className="eyebrow reveal" style={{ textAlign: "center" }}>
        ›// nivel 6
      </p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)", textAlign: "center" }}>
        <span className="accent">Evals</span>
      </h2>
      <p className="sub reveal mt-s" style={{ textAlign: "center" }}>
        Validación sistemática.
      </p>

      <div className="reveal mt-s pir-holder">
        <Piramide paso={0} niveles={[4, 5, 6, 7]} activos={[4, 5, 6]} />
      </div>
    </SlideFrame>
  );
}
