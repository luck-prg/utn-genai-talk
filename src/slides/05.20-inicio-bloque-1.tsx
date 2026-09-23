import type { SlideMeta } from "@/deck/types";
import { InicioDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = { title: "Bloque 1", seccion: "BLOQUE 1", variante: "corte", transition: "curtain" };

export default function InicioBloque1() {
  return <InicioDeBloque numero={1} />;
}
