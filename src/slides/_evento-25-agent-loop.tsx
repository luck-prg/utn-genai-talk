import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El Agent Loop",
  seccion: "BLOQUE 5 · ORQUESTACIÓN",
  transition: "fade",
};

export default function AgentLoop() {
  return (
    <SlideFrame meta="BLOQUE 5 · ORQUESTACIÓN">
      <h2 className="display t-md reveal">El Agent Loop</h2>
      <div className="loop mt-l reveal">
        <span className="step">Percibe</span>
        <span className="arr">→</span>
        <span className="step">Decide</span>
        <span className="arr">→</span>
        <span className="step acc">Ejecuta</span>
        <span className="arr">→</span>
        <span className="step">Observa</span>
        <span className="arr">↺</span>
      </div>
      <p className="body mt-m reveal maxw">
        Entender este ciclo es clave para diseñar sistemas que funcionen de forma{" "}
        <span className="k">autónoma y predecible</span>.
      </p>
    </SlideFrame>
  );
}
