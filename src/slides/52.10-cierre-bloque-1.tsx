import type { SlideMeta } from "@/deck/types";
import { PreguntasDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = { title: "Cierre · Bloque 1", seccion: "CIERRE · BLOQUE 1", transition: "fade" };

export default function CierreBloque1() {
  return <PreguntasDeBloque numero={1} />;
}
