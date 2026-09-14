import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Cuándo SÍ usar SDD",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Los tres casos comparten lo mismo: alguien va a tener que entender esto después, y ese alguien puede ser tu yo de dentro de tres meses.",
  transition: "fade",
};

const CASOS = [
  {
    tag: "01",
    title: "Una feature nueva",
    body: "Hay ambigüedad de producto que conviene resolver antes de que se vuelva código.",
  },
  {
    tag: "02",
    title: "Mantener lo que ya existe",
    body: "La spec recupera la intención que el código solo, sin comentarios, ya no cuenta.",
  },
  {
    tag: "03",
    title: "Un proyecto desde cero",
    body: "La constitution fija las reglas antes de que cada feature invente las suyas.",
  },
];

export default function CuandoSi() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <h2 className="display t-md reveal">Cuándo SÍ</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {CASOS.map((c) => (
          <div className="card" key={c.tag}>
            <div className="c-tag">{c.tag}</div>
            <div className="c-title">{c.title}</div>
            <div className="c-body">{c.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        Los tres comparten lo mismo:{" "}
        <span className="k">alguien va a tener que entender esto después</span> — y ese alguien
        puede ser tu yo de dentro de tres meses.
      </p>
    </SlideFrame>
  );
}
