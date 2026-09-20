import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "./components/Picto";

export const meta: SlideMeta = {
  title: "¿Qué es SDD?",
  seccion: "SDD",
  notes:
    "La definición y la inversión en una sola slide. Detenete en dos cosas: 'lenguaje natural como lenguaje de programación', que es lo que más descoloca, y la tarjeta del medio, que es el cambio de jerarquía — antes mandaba el código. Cerrá con la última línea y dejala respirar.",
  transition: "fade",
};

const PILARES: { icon: PictoName; title: string; body: string }[] = [
  { icon: "spec", title: "Specs primero", body: "El QUÉ antes del CÓMO." },
  { icon: "source", title: "Fuente de verdad", body: "Antes mandaba el código. Ahora, al revés." },
  { icon: "run", title: "La IA ejecuta", body: "Genera, prueba, valida." },
];

export default function QueEsSdd() {
  return (
    <SlideFrame meta="SDD">
      <h2 className="display t-md reveal">¿Qué es SDD?</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {PILARES.map((p) => (
          <div className="card" key={p.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={p.icon} />
            </div>
            <div className="c-title">{p.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{p.body}</div>
          </div>
        ))}
      </div>
      <h3 className="display reveal mt-m" style={{ fontSize: "var(--fs-stmt)" }}>
        La spec no describe el sistema.
        <br />
        Lo <span className="accent">genera</span>.
      </h3>
    </SlideFrame>
  );
}
