import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es SDD?",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "La definición y la inversión en una sola slide. Detenete en dos cosas: 'lenguaje natural como lenguaje de programación', que es lo que más descoloca, y la tarjeta del medio, que es el cambio de jerarquía — antes mandaba el código. Cerrá con la última línea y dejala respirar.",
  transition: "fade",
};

const PILARES = [
  {
    tag: "qué",
    title: "Specs primero",
    body: (
      <>
        Lenguaje natural como lenguaje de programación. El <b>QUÉ</b> antes del <b>CÓMO</b>.
      </>
    ),
  },
  {
    tag: "contrato",
    title: "Fuente de verdad",
    body: (
      <>
        Antes mandaba el código y la spec lo documentaba. <b>Ahora es al revés.</b>
      </>
    ),
  },
  {
    tag: "cómo",
    title: "La IA ejecuta",
    body: (
      <>
        La spec se vuelve instrucciones precisas: <b>generar, probar y validar</b>.
      </>
    ),
  },
];

export default function QueEsSdd() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
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
      <h3 className="display reveal mt-l" style={{ fontSize: "var(--fs-stmt)" }}>
        La spec no describe el sistema.
        <br />
        Lo <span className="accent">genera</span>.
      </h3>
    </SlideFrame>
  );
}
