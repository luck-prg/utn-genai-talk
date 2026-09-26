import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Dónde falla",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Honestidad: SDD también se puede hacer mal. Falla con specs ambiguas, con contexto de más, y sobre todo cuando se aprueba todo sin pensar: es el mismo error, más rápido. Falla donde se cree que el humano solo da permisos. El humano razona y dirige, el agente ejecuta con nuestra ayuda.",
  transition: "fade",
};

const FALLOS: { icon: PictoName; title: string; body: string }[] = [
  { icon: "bloat", title: "Specs ambiguas", body: "Nadie sabe qué aceptar." },
  { icon: "fire", title: "Contexto de más", body: "Más docs, más tokens." },
  { icon: "loop", title: "Aprobar sin leer", body: "El mismo error, más rápido." },
  { icon: "human", title: "El humano como aprobador", body: "Solo da permisos." },
];

export default function DondeFalla() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <h2 className="display t-md reveal">Dónde falla</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {FALLOS.map((f) => (
          <div className="card" key={f.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={f.icon} />
            </div>
            <div className="c-title">{f.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{f.body}</div>
          </div>
        ))}
      </div>
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        El humano razona y dirige. El agente <span className="accent">ejecuta</span>.
      </h3>
    </SlideFrame>
  );
}
