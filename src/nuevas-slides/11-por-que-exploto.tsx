import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Por qué explotó ahora",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Design by Contract: Bertrand Meyer, 1986 — precondiciones, postcondiciones e invariantes como el contrato que el código debe cumplir. Dato verificable; no digas 'papers desde 1950'. Acá se cierra el arco del bloque 3: la idea siempre chocó contra el costo, y ese muro se cayó.",
  transition: "fade",
};

export default function PorQueExploto() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <h2 className="display t-md reveal">Cuarenta años esperando</h2>
      <div className="loop mt-l reveal">
        <span className="step">1986 · Design by Contract</span>
        <span className="arr">→</span>
        <span className="step">Métodos formales</span>
        <span className="arr">→</span>
        <span className="step acc">Hoy · SDD</span>
      </div>
      <p className="body mt-m reveal maxw">
        La idea no es nueva y siempre chocó contra el mismo muro:{" "}
        <span className="k">escribir y mantener la especificación costaba más de lo que rendía</span>
        . Ese muro se cayó.
      </p>
    </SlideFrame>
  );
}
