import type { SlideMeta } from "@/deck/types";
import { InicioDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = {
  title: "Bloque 02 · ¿Cómo diseño un agente efectivo?",
  seccion: "BLOQUE 02",
  variante: "corte",
  transition: "curtain",
};

export default function InicioBloque2() {
  return <InicioDeBloque numero={2} />;
}
