import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 1.1.3 Herramientas",
  seccion: "1.1.3 · HERRAMIENTAS",
  notes:
    "Corte de sección. Un agente resuelve tareas de desarrollo no porque el modelo sepa todo, sino porque el stack que lo rodea le permite observar el entorno real y verificar lo que hizo. Acá vemos qué le conectamos y con qué permisos.",
  transition: "curtain",
};

export default function PortadaHerramientas() {
  return (
    <PortadaSeccion header={false} footer={false}
      meta="SECCIÓN"
      numero="1.1.3"
      kicker="Herramientas"
      titulo={
        <>
          Lo que amplía
          <br />
          las <span className="accent">capacidades del agente</span>
        </>
      }
      promesa="El modelo razona; las herramientas observan, ejecutan y verifican."
      temas={["tools", "evidencia", "permisos acotados", "harness"]}
    />
  );
}
