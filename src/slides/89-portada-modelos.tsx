import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Bloque 3 · 3.1 Modelos",
  seccion: "BLOQUE 3 · 3.1",
  variante: "corte",
  notes:
    "Corte de sección. Elegir el modelo es una decisión de diseño del harness, no un detalle de configuración. Lo que importa es el criterio, porque el catálogo de modelos cambia todo el tiempo.",
  transition: "curtain",
};

export default function Bloque31() {
  return (
    <SlideFrame meta="BLOQUE 3 · 3.1" center header={false} footer={false}>
      <p className="corte-kicker reveal">Bloque 3 · 3.1</p>
      <h2 className="display corte-title reveal mt-m">Modelos</h2>
    </SlideFrame>
  );
}
