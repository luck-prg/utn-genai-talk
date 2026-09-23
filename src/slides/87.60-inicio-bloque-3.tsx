import type { SlideMeta } from "@/deck/types";
import { InicioDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = { title: "Bloque 3", seccion: "BLOQUE 3", variante: "corte", transition: "curtain" };

export default function InicioBloque3() {
  return <InicioDeBloque numero={3} />;
}
