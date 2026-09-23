import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 3.2.2 Spec-Driven Development",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes: "Medio minuto. Respirá: acá arrancan los treinta minutos centrales del bloque.",
  transition: "curtain",
};

export default function PortadaSdd() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="3.2.2"
      kicker="Spec-Driven Development"
      titulo={
        <>
          La <span className="accent">spec</span> antes que el código
        </>
      }
      promesa="La especificación se convierte en el contrato que guía y valida el trabajo del agente."
      temas={["spec", "plan", "implementación", "validación"]}
    />
  );
}
