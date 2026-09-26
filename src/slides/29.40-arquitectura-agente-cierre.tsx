import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArquitecturaAgente } from "@/components/ArquitecturaAgente";

export const meta: SlideMeta = {
  title: "Arquitectura de un agente (3)",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 3,
  notes:
    "Retoma el diagrama donde quedó, con la ventana de contexto ya explicada. PASO 1: el cache de prompt: el prefijo idéntico a la llamada anterior sale del cache y solo se procesa lo nuevo. PASO 2: tools y entorno, que ejecuta el harness; el resultado vuelve al historial y el ciclo se repite.",
  transition: "none",
};

export default function ArquitecturaAgenteCierre() {
  return (
    <SlideFrame header={false} footer={false} meta="1.2.1 · CICLO AGÉNTICO" bodyClass="a-sangre">
      <h2 className="display reveal" style={{ fontSize: "var(--fs-sub)" }}>
        Arquitectura de un agente: quién hace qué
      </h2>
      <ArquitecturaAgente inicio={8} />
    </SlideFrame>
  );
}
