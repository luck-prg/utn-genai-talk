import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Bloque 0 · Introducción",
  seccion: "BLOQUE 0",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque0() {
  return (
    <SlideFrame meta="BLOQUE 0" center>
      <p className="corte-kicker reveal">Bloque 0</p>
      <h2 className="display corte-title reveal mt-m">Introducción</h2>
    </SlideFrame>
  );
}
