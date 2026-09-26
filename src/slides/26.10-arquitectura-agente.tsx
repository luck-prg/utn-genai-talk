import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArquitecturaAgente } from "@/components/ArquitecturaAgente";

export const meta: SlideMeta = {
  title: "Arquitectura de un agente",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "PASO 0: el diagrama simple — input, modelo, output. El modelo no conserva estado entre llamadas. PASO 1: el modelo se desplaza a su lugar real, del lado del proveedor, y aparece el harness con todos sus bloques difuminados: se ve la estructura completa, pero todavía no se explica. Las dos diapositivas siguientes explican qué es el harness; después se retoma el diagrama.",
  transition: "fade",
};

export default function ArquitecturaAgenteSlide() {
  return (
    <SlideFrame header={false} footer={false} meta="1.2.1 · CICLO AGÉNTICO" bodyClass="a-sangre">
      <h2 className="display reveal" style={{ fontSize: "var(--fs-sub)" }}>
        Arquitectura de un agente: quién hace qué
      </h2>
      <ArquitecturaAgente />
    </SlideFrame>
  );
}
