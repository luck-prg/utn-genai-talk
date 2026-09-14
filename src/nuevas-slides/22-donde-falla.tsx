import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Dónde falla",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Honestidad: SDD también se puede hacer mal. Nombrar los fallos te da credibilidad y desarma al escéptico de la sala.",
  transition: "fade",
};

const FALLOS = [
  {
    tag: "01",
    title: "Specs infladas",
    body: "Documentar todo, en vez de documentar lo que evita romper supuestos importantes.",
  },
  {
    tag: "02",
    title: "No iterar antes de implementar",
    body: "Resolver la ambigüedad en la spec sale mucho más barato que corregirla en el código.",
  },
  {
    tag: "03",
    title: "Un archivo nuevo por cada cambio",
    body: "Actualizar lo que ya existe mantiene la trazabilidad y evita contexto redundante.",
  },
  {
    tag: "04",
    title: "Quemar contexto",
    body: "Más documentación es más tokens: dividir el problema y compactar cuando corresponde.",
  },
];

export default function DondeFalla() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <h2 className="display t-md reveal">Dónde falla</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {FALLOS.map((f) => (
          <div className="card" key={f.tag}>
            <div className="c-tag">{f.tag}</div>
            <div className="c-title">{f.title}</div>
            <div className="c-body">{f.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
