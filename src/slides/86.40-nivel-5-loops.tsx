import type { SlideMeta } from "@/deck/types";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Nivel 5 · Loops",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "El agente ya no espera a que alguien le pida trabajo: corre tareas programadas, de forma recurrente y sin supervisión directa en el momento en que se ejecutan.",
  transition: "fade",
};

export default function Nivel5Loops() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" bodyClass="a-sangre">
      <p className="eyebrow reveal" style={{ textAlign: "center" }}>
        ›// nivel 5
      </p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)", textAlign: "center" }}>
        <span className="accent">Loops</span>
      </h2>
      <p className="sub reveal mt-s" style={{ textAlign: "center" }}>
        Tareas programadas.
      </p>

      <div className="reveal mt-s pir-holder">
        <Piramide paso={0} niveles={[4, 5, 6, 7]} activos={[4, 5]} />
      </div>
    </SlideFrame>
  );
}
