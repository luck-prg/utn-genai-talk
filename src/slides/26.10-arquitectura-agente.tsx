import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArquitecturaAgente } from "@/components/ArquitecturaAgente";

export const meta: SlideMeta = {
  title: "Qué hay adentro de un agente",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "PASO 0: la interacción pelada — mandás un input, el modelo predice, devuelve un output. Decí que el LLM es stateless: entre una llamada y otra no recuerda nada. PASO 1: aparece el harness, el programa que orquesta (Claude Code, Cursor, tu propio código), y con él la memoria de la sesión. La memoria no vive en el modelo, vive acá. Quedate en este estado: las dos diapositivas que siguen desarman qué es el harness, y después volvemos al diagrama.",
  transition: "fade",
};

export default function ArquitecturaAgenteSlide() {
  return (
    <SlideFrame header={false} footer={false} meta="1.2.1 · CICLO AGÉNTICO" bodyClass="a-sangre">
      <h2 className="display t-md reveal">Qué hay adentro de un agente</h2>
      <ArquitecturaAgente />
    </SlideFrame>
  );
}
