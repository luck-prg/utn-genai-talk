import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué gama para qué tarea",
  seccion: "3.1 · MODELOS",
  notes:
    "Tres gamas, no un catálogo de nombres. Económicos para buscar, resumir y todo lo mecánico de alto volumen. Balanceados como default diario: implementar con spec clara, tests, docs, y también revisar — con una aclaración importante, que revise un modelo distinto del que escribió, para que no valide sus propios sesgos. Premium sólo para planificar y diseñar arquitectura: son pocos tokens y el costo del error es altísimo. Y lo que más se olvida: si la tarea es mecánica y repetitiva, no la mandes a un modelo — usá un script. Un linter es más rápido, más barato y más confiable que cualquier revisor basado en LLM.",
  transition: "fade",
};

const GAMAS = [
  {
    gama: "económicos",
    clase: "liviana",
    tareas: "Buscar · resumir · clasificar",
  },
  {
    gama: "balanceados",
    clase: "media",
    tareas: "Implementar · testear · revisar",
  },
  {
    gama: "premium",
    clase: "premium",
    tareas: "Planificar · arquitectura",
  },
];

export default function RecetaPorTarea() {
  return (
    <SlideFrame header={false} footer={false} meta="3.1 · MODELOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        Elegís <span className="accent">por tarea</span>, no por prestigio
      </h2>

      <div className="gamas reveal mt-l">
        {GAMAS.map((g) => (
          <div className="gama-fila" key={g.gama}>
            <span className={`gama ${g.clase}`}>{g.gama}</span>
            <span className="gama-tareas">{g.tareas}</span>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
