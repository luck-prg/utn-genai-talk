import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "La secuencia efectiva",
  seccion: "BLOQUE 2 · CONTEXT ENG.",
  transition: "fade",
};

export default function SecuenciaEfectiva() {
  return (
    <SlideFrame meta="BLOQUE 2 · CONTEXT ENG.">
      <p className="prompt reveal">&gt; flujo --tarea</p>
      <h2 className="display t-md reveal mt-s">La secuencia efectiva</h2>
      <div className="loop mt-l reveal">
        <span className="step">1 · Análisis</span>
        <span className="arr">→</span>
        <span className="step">2 · Spec</span>
        <span className="arr">→</span>
        <span className="step">3 · Plan</span>
        <span className="arr">→</span>
        <span className="step acc">4 · Validación humana</span>
        <span className="arr">→</span>
        <span className="step">5 · Implementación</span>
        <span className="arr">→</span>
        <span className="step">6 · Ajuste</span>
      </div>
      <p className="body mt-m reveal maxw">
        Separar las operaciones predecibles del razonamiento generativo mantiene el flujo barato,
        preciso y repetible.
      </p>
    </SlideFrame>
  );
}
