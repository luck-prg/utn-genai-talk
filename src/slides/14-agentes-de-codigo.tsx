import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 1.1.2 Agentes de código",
  seccion: "1.1.2 · ADE",
  notes:
    "Un agente de código es una capa por encima del LLM que lo conecta con un entorno de desarrollo real. La diferencia no es que conteste mejor: es que participa dentro de un ciclo de trabajo, puede modificar el proyecto y puede verificar lo que hizo.",
  transition: "curtain",
};

export default function PortadaAde() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="1.1.2"
      kicker="Agentes de código"
      titulo={
        <>
          Del chatbot al <span className="accent">agente de código</span>
        </>
      }
      promesa="Un agente participa dentro del proyecto: observa, decide, ejecuta y valida."
      temas={["ADE", "IDE vs. ADE", "flujo de trabajo", "decisiones humanas"]}
    />
  );
}
