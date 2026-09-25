import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.1.3 Skills",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Portada de sección. No digas todavía qué es una skill: la palabra aparece recién en la 69. Acá solo planteás el problema: hay un criterio que vive en tu cabeza y el agente no lo tiene. Una frase y pasás a la 67.",
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
          Tu <span className="accent">criterio</span>, fuera de tu cabeza
        </>
      }
      promesa="Lo que le repetís al agente en cada sesión, escrito una sola vez."
      temas={["consistencia", "estructura", "disparador", "iteración"]}
    />
  );
}
