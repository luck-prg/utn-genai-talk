import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.1.2 Harness Engineering",
  seccion: "2.1.2 · HARNESS ENGINEERING",
  transition: "curtain",
};

export default function PortadaHarnessEngineering() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="2.1.2"
      kicker="Harness Engineering"
      titulo={
        <>
          Herramientas <span className="accent">agénticas</span>
        </>
      }
      promesa="Reglas, comandos, herramientas y automatizaciones que hacen al agente confiable."
      temas={["propósitos", "flujos", "calidad", "control"]}
    />
  );
}
