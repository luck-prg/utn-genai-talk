import type { SlideMeta } from "@/deck/types";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Nivel 7 · Teams",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "El techo, por ahora: no un agente, sino equipos de agentes orquestados, cada uno con su rol, que se coordinan entre sí para resolver algo que ninguno resolvería solo. Cierre de los cuatro niveles.",
  transition: "fade",
};

export default function Nivel7Teams() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" bodyClass="a-sangre">
      <p className="eyebrow reveal" style={{ textAlign: "center" }}>
        ›// nivel 7
      </p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)", textAlign: "center" }}>
        <span className="accent">Teams</span>
      </h2>
      <p className="sub reveal mt-s" style={{ textAlign: "center" }}>
        Orquestación de agentes.
      </p>

      <div className="reveal mt-s pir-holder">
        <Piramide paso={0} niveles={[4, 5, 6, 7]} activos={[4, 5, 6, 7]} />
      </div>
    </SlideFrame>
  );
}
