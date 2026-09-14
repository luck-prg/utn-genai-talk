import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tres casos reales",
  seccion: "BLOQUE 5 · DINÁMICA",
  notes: "Pregunta al público: ¿cómo lo dividirían?",
  transition: "slide",
};

const CASOS = [
  {
    tag: "caso 1",
    title: "Feature nueva",
    body: "Endpoint con validaciones, lógica y tests. → dev + tests en paralelo, review al final.",
  },
  {
    tag: "caso 2",
    title: "API externa",
    body: "API legacy de alta latencia. → subagente que carga contexto sin bloquear el flujo principal.",
  },
  {
    tag: "caso 3",
    title: "Migración x8",
    body: "8 microservicios, breaking changes. → 8 agentes en paralelo: escala horizontal.",
  },
];

export default function TresCasos() {
  return (
    <SlideFrame meta="BLOQUE 5 · DINÁMICA">
      <p className="eyebrow reveal">›// ¿cómo lo dividirías?</p>
      <h2 className="display t-md reveal mt-s">Tres casos reales</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {CASOS.map((c) => (
          <div className="card" key={c.tag}>
            <div className="c-tag">{c.tag}</div>
            <div className="c-title">{c.title}</div>
            <div className="c-body">{c.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
