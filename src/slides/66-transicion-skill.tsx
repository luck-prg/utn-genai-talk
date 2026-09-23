import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.1.3 Skills",
  seccion: "2.1.3 · SKILLS",
  transition: "curtain",
};

export default function PortadaSkills() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="2.1.3"
      kicker="Skills"
      titulo={
        <>
          Un ejemplo real: una <span className="accent">skill</span>
        </>
      }
      promesa="Una skill convierte las decisiones repetidas del equipo en una guía que el agente puede usar."
      temas={["consistencia", "disparador", "estructura", "criterio"]}
    />
  );
}
