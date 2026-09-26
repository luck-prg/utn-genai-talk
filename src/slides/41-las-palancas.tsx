import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El harness ejecuta, el modelo valida",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  notes:
    "Cierre de la parte técnica: todo lo que vieron es gasto, y el harness es quien lo administra. No hace falta que se acuerden los nombres; el punto es que estas decisiones existen y las toma el harness, no el modelo.",
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
    body: "Trabajan en su propia ventana: exploran, leen información adicional y devuelven un resumen. Ese contenido no ocupa la ventana principal.",
  },
  {
    tag: "qué se descarta",
    titulo: "Compactación",
    body: "Cuando la ventana se llena, primero se borran los resultados de tools viejos y recién después se resume la conversación.",
  },
];

export default function LasPalancas() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">El harness ejecuta, el modelo valida</h2>
      <p className="sub reveal mt-s maxw">
        El harness toma las decisiones determinísticas; el modelo solicita ejecutarlas y valida
        los resultados.
      </p>
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
