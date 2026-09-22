import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Portada · 1.3.2 IA sin ingeniería",
  seccion: "1.3.2 · IA SIN INGENIERÍA",
  notes:
    "Corte de sección. Hasta acá vimos qué puede hacer un agente bien equipado. Ahora, lo que no resuelve solo — y que no se arregla esperando un modelo mejor, porque son límites de contexto y de criterio, no de capacidad.",
  transition: "curtain",
};

export default function PortadaLimites() {
  return (
    <PortadaSeccion header={false} footer={false}
      meta="SECCIÓN"
      numero="1.3.2"
      kicker="Límites"
      titulo={
        <>
          La IA <span className="accent">sin ingeniería</span>
          <br />
          alrededor
        </>
      }
      promesa="Qué no resuelve el agente solo, por más bueno que sea el modelo."
      temas={["ventana limitada", "conocimiento del equipo", "producto ≠ código", "deuda técnica"]}
    />
  );
}
