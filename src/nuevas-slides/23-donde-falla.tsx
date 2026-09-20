import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "./components/Picto";

export const meta: SlideMeta = {
  title: "Dónde falla",
  seccion: "SDD",
  notes:
    "Honestidad: SDD también se puede hacer mal. Nombrar los fallos te da credibilidad y desarma al escéptico de la sala.",
  transition: "fade",
};

const FALLOS: { icon: PictoName; title: string; body: string }[] = [
  { icon: "bloat", title: "Specs infladas", body: "Documentar todo." },
  { icon: "loop", title: "No iterar antes de implementar", body: "Corregir en código sale caro." },
  { icon: "files", title: "Un archivo nuevo por cambio", body: "Se pierde la trazabilidad." },
  { icon: "fire", title: "Quemar contexto", body: "Más docs, más tokens." },
];

export default function DondeFalla() {
  return (
    <SlideFrame meta="SDD">
      <h2 className="display t-md reveal">Dónde falla</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr" }}>
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
    </SlideFrame>
  );
}
