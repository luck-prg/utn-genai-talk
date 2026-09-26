import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.2.3 Conceptos para desarrollar agentes autónomos",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Apertura de la última sección de la pirámide. Ya votamos y ubicamos al equipo en los niveles 0 a 3. Ahora el foco cambia: no es dónde estás vos, es hacia dónde va la industria. Los niveles 4 a 7 no son ciencia ficción, son la dirección en la que ya se está moviendo el trabajo con agentes.",
  transition: "curtain",
};

export default function PortadaHaciaDondeVamos() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="2.2.3"
      kicker="Próximos niveles"
      titulo={
        <>
          Conceptos para desarrollar <span className="accent">agentes autónomos</span>
        </>
      }
      promesa="Memoria propia, tareas programadas, validación sistemática y equipos de agentes: hacia dónde está yendo la industria."
      temas={["memoria", "loops", "evals", "equipos"]}
    />
  );
}
