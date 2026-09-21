import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "./components/Picto";

export const meta: SlideMeta = {
  title: "Cuándo SÍ usar SDD",
  seccion: "SDD",
  notes:
    "Los tres casos comparten lo mismo: alguien va a tener que entender esto después, y ese alguien puede ser tu yo de dentro de tres meses.",
  transition: "fade",
};

const CASOS: { icon: PictoName; title: string; body: string }[] = [
  { icon: "feature", title: "Una feature nueva", body: "Hay ambigüedad de producto." },
  { icon: "maintain", title: "Mantener lo que ya existe", body: "Recuperás la intención." },
  { icon: "scratch", title: "Un proyecto desde cero", body: "Reglas antes de las features." },
];

export default function CuandoSi() {
  return (
    <SlideFrame meta="SDD">
      <h2 className="display t-md reveal">Cuándo SÍ</h2>
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
        Alguien va a tener que entender esto después.{" "}
        <span className="k">Puede ser tu yo de dentro de tres meses.</span>
      </p>
    </SlideFrame>
  );
}
