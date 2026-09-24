import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { DivisorOrador } from "@/components/DivisorOrador";

export const meta: SlideMeta = {
  title: "Lo que está en juego",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  variante: "orador",
  notes:
    "[~10 s] Hasta acá, lo que podemos controlar nosotros. Ahora, lo que está en juego más allá de nuestra máquina.",
  transition: "fade",
};

export default function LoQueEstaEnJuego() {
  return (
    <SlideFrame meta="1.3.2 · SEGURIDAD Y RIESGOS" center footer={false}>
      <DivisorOrador frase="Lo que está en juego" />
    </SlideFrame>
  );
}
