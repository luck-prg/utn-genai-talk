import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es SDD?",
  seccion: "BLOQUE 3 · SDD",
  transition: "fade",
};

const PILARES = [
  { tag: "qué", title: "Specs primero", body: "Lenguaje natural como lenguaje de programación. El QUÉ antes del CÓMO." },
  { tag: "contrato", title: "Fuente de verdad", body: "La spec guía a devs, QA, product y al agente durante todo el ciclo." },
  { tag: "cómo", title: "La IA ejecuta", body: "La spec se vuelve instrucciones precisas: generar, probar y validar." },
];

export default function QueEsSdd() {
  return (
    <SlideFrame meta="BLOQUE 3 · SDD">
      <h2 className="display t-md reveal">¿Qué es SDD?</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {PILARES.map((p) => (
          <div className="card" key={p.tag}>
            <div className="c-tag">{p.tag}</div>
            <div className="c-title">{p.title}</div>
            <div className="c-body">{p.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">Principio central:</span> las especificaciones son el artefacto
        principal — el código es una consecuencia.
      </p>
    </SlideFrame>
  );
}
