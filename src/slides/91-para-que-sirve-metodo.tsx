import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Para qué sirve un método",
  seccion: "EL MÉTODO",
  notes: "Cierre del bloque 1. Cuatro ventajas concretas, sin teoría de ingeniería de software.",
  transition: "fade",
};

const VENTAJAS: { icon: PictoName; title: string; body: string }[] = [
  { icon: "path", title: "Predecible", body: "Sabés qué paso sigue." },
  { icon: "ledger", title: "Trazable", body: "Queda escrito por qué." },
  { icon: "handoff", title: "Transferible", body: "Otro lo sigue sin vos." },
  { icon: "early", title: "Barato", body: "El error aparece temprano." },
];

export default function ParaQueSirve() {
  return (
    <SlideFrame header={false} footer={false} meta="EL MÉTODO">
      <h2 className="display t-md reveal">¿Para qué sirve un método?</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {VENTAJAS.map((v) => (
          <div className="card" key={v.icon}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={v.icon} />
            </div>
            <div className="c-title">{v.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{v.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
