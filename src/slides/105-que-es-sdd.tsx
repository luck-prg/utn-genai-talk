import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "¿Qué es SDD?",
  seccion: "SDD",
  notes:
    "La definición sin IA: specs primero, fuente de verdad, contrato verificable. La IA no es parte del método, es por qué explotó hoy: quien ejecuta la spec es la IA. Cerrá con 'nosotros ya no escribimos, pensamos' y dejalo respirar. Puente: 'y ojo, esto no es nuevo'.",
  transition: "fade",
};

const PILARES: { icon: PictoName; title: string; body: string }[] = [
  { icon: "spec", title: "Specs primero", body: "El qué antes del cómo." },
  { icon: "source", title: "Fuente de verdad", body: "Antes mandaba el código. Ahora, al revés." },
  { icon: "contract", title: "Contrato verificable", body: "Cambia la spec, cambia el código." },
];

export default function QueEsSdd() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
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
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        Hoy explotó por una razón: quien la ejecuta es <span className="accent">la IA</span>.
      </h3>
      <p
        className="display reveal"
        style={{ fontSize: "var(--fs-sub)", fontWeight: 600, color: "var(--color-muted)" }}
      >
        Nosotros ya no escribimos. Pensamos.
      </p>
    </SlideFrame>
  );
}
