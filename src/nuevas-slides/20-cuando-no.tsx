import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Cuándo NO usar SDD",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Decilo antes que el cuándo sí. Un método que sirve para todo no sirve para nada, y admitir dónde no aplica te da credibilidad para el resto.",
  transition: "fade",
};

const CASOS = [
  {
    tag: "01",
    title: "Un fix de dos líneas",
    body: "El contrato ya existe. Escribirlo de nuevo cuesta más que el arreglo.",
  },
  {
    tag: "02",
    title: "Un spike o una prueba",
    body: "Todavía no sabés qué querés. La spec vendría a congelar una pregunta abierta.",
  },
  {
    tag: "03",
    title: "Un script de una sola vez",
    body: "No hay nadie que lo mantenga después. No hay contrato que preservar.",
  },
];

export default function CuandoNo() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <h2 className="display t-md reveal">Cuándo NO</h2>
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
        <span className="k">Un método que sirve para todo no sirve para nada.</span>
      </p>
    </SlideFrame>
  );
}
