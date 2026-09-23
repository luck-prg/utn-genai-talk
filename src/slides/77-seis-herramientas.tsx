import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Herramientas del harness",
  seccion: "2.1.4 · CONCLUSIONES",
  transition: "fade",
};

const HERRAMIENTAS = [
  { tag: "01", title: "Rules", claves: ["Políticas", "Convenciones", "Restricciones"] },
  { tag: "02", title: "Commands", claves: ["Pasos a seguir", "Problema concreto"] },
  { tag: "03", title: "MCP", claves: ["Contexto externo", "Dinámico"] },
  { tag: "04", title: "Subagents", claves: ["Especializados", "En paralelo", "Contexto limpio"] },
  { tag: "05", title: "Skills", claves: ["Auto-invocadas", "Reutilizables"] },
  { tag: "06", title: "Hooks", claves: ["Determinísticos", "Momentos fijos"] },
];

export default function SeisHerramientas() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONTEXT ENG.">
      <h2 className="display t-md reveal">Herramientas del harness</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {HERRAMIENTAS.map((h) => (
          <div className="card" key={h.tag}>
            <div className="c-tag">{h.tag}</div>
            <div className="c-title">{h.title}</div>
            <div className="chips mt-s">
              {h.claves.map((clave) => (
                <span className="chip acento" key={clave}>
                  {clave}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
