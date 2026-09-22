import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Criterio para elegir modelo",
  seccion: "3.1 · MODELOS",
  steps: 3,
  notes:
    "La regla es una sola: el modelo más barato que resuelva la tarea con confiabilidad suficiente. No todos los problemas justifican el modelo más caro — muchas tareas son búsqueda, edición mecánica o validación, y reservar los premium para las decisiones difíciles es disciplina económica. ¿Cuándo subir de nivel? Cuando aumentan la ambigüedad, el riesgo, el impacto arquitectónico o la necesidad de razonamiento extenso. Y hay un patrón que conviene mencionar acá: se puede partir por fases, un modelo con más razonamiento para diseñar el plan y uno más ágil y económico para implementarlo una vez que el camino está definido.",
  transition: "fade",
};

const SUBIR = ["ambigüedad", "riesgo", "impacto arquitectónico", "razonamiento extenso"];

export default function CriterioDeModelos() {
  return (
    <SlideFrame header={false} footer={false} meta="3.1 · MODELOS">
      <p className="eyebrow reveal">›// regla práctica</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        El modelo <span className="accent">más barato</span>
        <br />
        que resuelva la tarea
      </h2>

      <Paso n={1} className="mt-l">
        <p className="sub">Subí de nivel cuando aumenta:</p>
        <div className="chips mt-s">
          {SUBIR.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="loop">
          <span className="step acc">Potente</span>
          <span className="arr">→</span>
          <span className="step">diseña el plan</span>
          <span className="arr">→</span>
          <span className="step acc">Económico</span>
          <span className="arr">→</span>
          <span className="step">lo implementa</span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
