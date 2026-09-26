import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.2.1 Madurez",
  seccion: "2.2.1 · MADUREZ",
  notes:
    "Última sección del bloque. Acá se cose toda la charla: la pirámide es el índice de lo que vimos, puesto en vertical.",
  transition: "curtain",
};

export default function PortadaMadurez() {
  return (
    <PortadaSeccion header={false} footer={false}
      meta="SECCIÓN"
      numero="2.2.1"
      kicker="Madurez"
      titulo={
        <>
          Cuánto <span className="accent">harness</span> le construiste
        </>
      }
      promesa="Ocho niveles de delegación, de pegar texto en un chat a orquestar agentes."
      temas={["Modelo + harness", "Los niveles", "La responsabilidad"]}
    />
  );
}
