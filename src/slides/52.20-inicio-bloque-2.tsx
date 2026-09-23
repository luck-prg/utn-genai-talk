import type { SlideMeta } from "@/deck/types";
import { InicioDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = { title: "Bloque 2", seccion: "BLOQUE 2", variante: "corte", transition: "curtain" };

export default function InicioBloque2() {
  return <InicioDeBloque numero={2} />;
}
