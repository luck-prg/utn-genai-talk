import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Portada · Límites",
  seccion: "LÍMITES",
  notes:
    "Corte de sección. Hasta acá vimos qué puede hacer un agente bien equipado. Ahora, lo que no resuelve solo — y que no se arregla esperando un modelo mejor, porque son límites de contexto y de criterio, no de capacidad.",
  transition: "curtain",
};

export default function PortadaLimites() {
  return (
    <PortadaSeccion
      meta="SECCIÓN"
      numero="03"
      kicker="Límites"
      titulo={
        <>
          La IA <span className="accent">sin ingeniería</span>
          <br />
          alrededor
        </>
      }
      promesa={
        <>
          Qué no resuelve el agente solo, por más bueno que sea el modelo. Son límites de{" "}
          <b>contexto y de criterio</b>, no de capacidad.
        </>
      }
      temas={["ventana limitada", "conocimiento del equipo", "producto ≠ código", "deuda técnica"]}
    />
  );
}
