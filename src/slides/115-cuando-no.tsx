import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Cuándo NO usar SDD",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Decilo antes que el cuándo sí. Un método que sirve para todo no sirve para nada, y admitir dónde no aplica te da credibilidad para el resto.",
  transition: "fade",
};

const CASOS: { icon: PictoName; title: string; body: string }[] = [
  { icon: "patch", title: "Un fix de dos líneas", body: "El contrato ya existe." },
  { icon: "spike", title: "Un spike o una prueba", body: "El objetivo todavía no está definido." },
  { icon: "once", title: "Un script de una sola vez", body: "Nadie lo mantiene después." },
];

export default function CuandoNo() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <h2 className="display t-md reveal">Cuándo NO</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {CASOS.map((c) => (
          <div className="card" key={c.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={c.icon} />
            </div>
            <div className="c-title">{c.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{c.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">Ningún método aplica a todos los casos.</span>
      </p>
    </SlideFrame>
  );
}
