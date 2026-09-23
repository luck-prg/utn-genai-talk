import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Las palancas del harness",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  notes:
    "Cierre de la parte técnica: todo lo que vieron es gasto, y el harness es quien lo administra. No hace falta que se acuerden los nombres; el punto es que estas decisiones existen y las toma el harness, no el modelo. El esfuerzo ya lo vieron aparte; acá van las otras tres.",
  transition: "fade",
};

const PALANCAS = [
  {
    tag: "qué se carga",
    titulo: "Carga diferida",
    body: "Las skills entran con su descripción y el cuerpo sólo cuando se usan. Las tools de MCP, igual.",
  },
  {
    tag: "dónde se lee",
    titulo: "Subagentes",
    body: "Trabajan en su propia ventana: exploran, leen de más y devuelven un resumen. Su ruido no entra en tu contexto.",
  },
  {
    tag: "qué se tira",
    titulo: "Compactación",
    body: "Cuando la ventana se llena, primero se borran los resultados de tools viejos y recién después se resume la conversación.",
  },
];

export default function LasPalancas() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Las palancas las mueve el harness</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {PALANCAS.map((p) => (
          <div className="card" key={p.titulo}>
            <div className="c-tag">{p.tag}</div>
            <div className="c-title">{p.titulo}</div>
            <div className="c-body">{p.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
