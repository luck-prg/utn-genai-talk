import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.1.1 Context Engineering",
  seccion: "2.1.1 · CONTEXT ENGINEERING",
  transition: "curtain",
};

export default function PortadaContextEngineering() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="2.1.1"
      kicker="Context Engineering"
      titulo={
        <>
          Diseñar el <span className="accent">contexto</span> del agente
        </>
      }
      promesa="Decidir qué información entra, cuándo entra y en qué forma."
      temas={["ventana", "prioridades", "conversación", "contexto útil"]}
    />
  );
}
