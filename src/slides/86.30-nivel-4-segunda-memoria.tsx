import type { SlideMeta } from "@/deck/types";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Nivel 4 · Segunda memoria",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "El agente deja de depender de lo que entra en la ventana de contexto de esa sesión: hay una memoria externa y centralizada (docs vivos, decisiones, aprendizajes) que consulta y actualiza.",
  transition: "fade",
};

export default function Nivel4SegundaMemoria() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" bodyClass="a-sangre">
      <p className="eyebrow reveal" style={{ textAlign: "center" }}>
        ›// nivel 4
      </p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)", textAlign: "center" }}>
        Segunda <span className="accent">memoria</span>
      </h2>
      <p className="sub reveal mt-s" style={{ textAlign: "center" }}>
        Conocimiento externo centralizado.
      </p>

      <div className="reveal mt-s pir-holder">
        <Piramide paso={0} niveles={[4, 5, 6, 7]} activos={[4]} />
      </div>
    </SlideFrame>
  );
}
