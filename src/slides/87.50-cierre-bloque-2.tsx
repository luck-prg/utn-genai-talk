import type { SlideMeta } from "@/deck/types";
import { PreguntasDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = { title: "Cierre · Bloque 2", seccion: "CIERRE · BLOQUE 2", transition: "fade" };

export default function CierreBloque2() {
  return <PreguntasDeBloque numero={2} />;
}
