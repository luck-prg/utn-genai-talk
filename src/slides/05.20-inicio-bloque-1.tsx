import type { SlideMeta } from "@/deck/types";
import { InicioDeBloque } from "@/components/SeparadorDeBloque";

export const meta: SlideMeta = {
  title: "Bloque 01 · ¿Qué es un agente de código?",
  seccion: "BLOQUE 01",
  variante: "corte",
  transition: "curtain",
};

export default function InicioBloque1() {
  return <InicioDeBloque numero={1} />;
}
