import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 3.2.1 El método",
  seccion: "3.2.1 · EL MÉTODO",
  notes:
    "Abrí ubicando el bloque: el 1 fue qué es y cómo funciona, el 2 con qué se trabaja, este es el CÓMO. Después la definición. Un enfoque metodológico es aplicar un método — y un método es esto. No lo expliques de más: se entiende solo.",
  transition: "curtain",
};

export default function PortadaElMetodo() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="3.2.1"
      kicker="El método"
      titulo={
        <>
          Decidir el <span className="accent">orden</span> antes de empezar
        </>
      }
      promesa="Un método hace explícitas las decisiones y el orden en que se toman."
      temas={["decisiones", "secuencia", "criterio", "validación"]}
    />
  );
}
