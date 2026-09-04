import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Cuatro límites del agente solo",
  seccion: "BLOQUE 1 · LÍMITES",
  transition: "fade",
};

const LIMITES = [
  { tag: "contexto", title: "Ventana limitada" },
  { tag: "alcance", title: "Capacidades acotadas" },
  { tag: "empresa", title: "Conocimiento ausente" },
  { tag: "producto", title: "Producto ≠ código" },
];

export default function CuatroLimites() {
  return (
    <SlideFrame meta="BLOQUE 1 · LÍMITES">
      <h2 className="display t-md reveal">Cuatro límites del agente solo</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {LIMITES.map((l) => (
          <div className="card" key={l.tag}>
            <div className="c-tag">{l.tag}</div>
            <div className="c-title">{l.title}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
