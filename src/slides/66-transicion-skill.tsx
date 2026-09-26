import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.1.3 Habilidades (Skills)",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Portada de sección. Planteá el problema: hay un criterio que el equipo aplica y el agente no conoce. Una frase y pasás a la siguiente.",
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
          <span className="accent">Habilidades</span> (Skills)
        </>
      }
      promesa="Lo que le repetís al agente en cada sesión, escrito una sola vez."
      temas={["consistencia", "estructura", "disparador", "iteración"]}
    />
  );
}
