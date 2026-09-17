import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Elegir modelo es diseño del harness",
  seccion: "MODELOS",
  notes:
    "No todos los problemas justifican el modelo más caro: muchas tareas son búsqueda, edición mecánica o validación. Reservar los premium para decisiones difíciles es disciplina económica. Y se puede partir por fases: un modelo con más razonamiento para el plan, uno más ágil para ejecutarlo una vez que el camino está definido.",
  transition: "fade",
};

const SUBIR = ["ambigüedad", "riesgo", "impacto arquitectónico", "razonamiento extenso"];

export default function CriterioDeModelos() {
  return (
    <SlideFrame meta="MODELOS">
      <p className="eyebrow reveal">›// regla práctica</p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        El modelo <span className="accent">más barato</span>
        <br />
        que resuelva la tarea con confianza
      </h2>

      <div className="reveal mt-m maxw">
        <p className="sub">Y subir de nivel cuando aumentan:</p>
        <div className="chips mt-s">
          {SUBIR.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="reveal mt-m">
        <p className="eyebrow">›// o dividir por fases</p>
        <div className="loop mt-s">
          <span className="step acc">Modelo potente</span>
          <span className="arr">→</span>
          <span className="step">diseña el plan</span>
          <span className="arr">→</span>
          <span className="step acc">Modelo económico</span>
          <span className="arr">→</span>
          <span className="step">lo implementa</span>
        </div>
      </div>

      <p className="body reveal mt-s maxw ink2">
        Qué modelo puntual se use cambia todo el tiempo: importa el{" "}
        <b>criterio de decisión</b>, no el catálogo vigente.
      </p>
    </SlideFrame>
  );
}
