import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Manos arriba",
  seccion: "BLOQUE 2 · LO QUE YA CONOCEMOS",
  notes:
    "Las cuatro EN ORDEN, una por vez, esperando entre cada una. En la 03 pediles que dejen la mano arriba. Si en la 04 suben más manos que en la 03, tu tesis quedó probada por la sala. En streaming, pediles que respondan por el chat.",
  transition: "slide",
};

const PREGUNTAS = [
  { tag: "01", title: "¿Quién los conoce?" },
  { tag: "02", title: "¿Quién usó alguno?" },
  { tag: "03", title: "¿Quién los usaba antes de la IA?" },
  { tag: "04", title: "¿Y quién los usa ahora?" },
];

export default function ManosArriba() {
  return (
    <SlideFrame meta="BLOQUE 2 · LO QUE YA CONOCEMOS">
      <p className="prompt reveal">&gt; manos --arriba</p>
      <h2 className="display t-md reveal mt-s">Cuatro preguntas</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {PREGUNTAS.map((p) => (
          <div className="card" key={p.tag}>
            <div className="c-tag">{p.tag}</div>
            <div className="c-title">{p.title}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
