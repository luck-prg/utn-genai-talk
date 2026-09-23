import type { SlideMeta } from "@/deck/types";
import { PreguntasDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = { title: "Cierre · Bloque 3", seccion: "CIERRE · BLOQUE 3", transition: "fade" };

export default function CierreBloque3() {
  return <PreguntasDeBloque numero={3} />;
}
