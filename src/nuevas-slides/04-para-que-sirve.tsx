import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Para qué sirve un método",
  seccion: "BLOQUE 1 · EL MÉTODO",
  notes: "Cierre del bloque 1. Cuatro ventajas concretas, sin teoría de ingeniería de software.",
  transition: "fade",
};

const VENTAJAS = [
  {
    tag: "01",
    title: "Predecible",
    body: (
      <>
        Sabés <b>qué paso sigue</b> y qué tiene que ser verdad para avanzar.
      </>
    ),
  },
  {
    tag: "02",
    title: "Trazable",
    body: (
      <>
        Queda escrito <b>por qué</b> se decidió lo que se decidió.
      </>
    ),
  },
  {
    tag: "03",
    title: "Transferible",
    body: (
      <>
        Otra persona <b>puede seguirlo</b> sin que se lo expliques.
      </>
    ),
  },
  {
    tag: "04",
    title: "Barato",
    body: (
      <>
        El error aparece <b>temprano</b>, cuando corregirlo todavía no duele.
      </>
    ),
  },
];

export default function ParaQueSirve() {
  return (
    <SlideFrame meta="BLOQUE 1 · EL MÉTODO">
      <h2 className="display t-md reveal">¿Para qué sirve un método?</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {VENTAJAS.map((v) => (
          <div className="card" key={v.tag}>
            <div className="c-tag">{v.tag}</div>
            <div className="c-title">{v.title}</div>
            <div className="c-body">{v.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
