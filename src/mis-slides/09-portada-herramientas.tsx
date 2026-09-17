import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Portada · Herramientas",
  seccion: "HERRAMIENTAS",
  notes:
    "Corte de sección. Un agente resuelve tareas de desarrollo no porque el modelo sepa todo, sino porque el stack que lo rodea le permite observar el entorno real y verificar lo que hizo. Acá vemos qué le conectamos y con qué permisos.",
  transition: "curtain",
};

export default function PortadaHerramientas() {
  return (
    <PortadaSeccion
      meta="SECCIÓN"
      numero="06"
      kicker="Herramientas"
      titulo={
        <>
          Lo que amplía
          <br />
          las <span className="accent">capacidades del agente</span>
        </>
      }
      promesa={
        <>
          El modelo razona; las herramientas <b>observan, ejecutan y verifican</b>. Sin ellas, el
          agente sólo puede imaginar el estado del sistema.
        </>
      }
      temas={["tools", "evidencia", "permisos acotados", "catálogo"]}
    />
  );
}
