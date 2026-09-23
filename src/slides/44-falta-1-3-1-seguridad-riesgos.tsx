import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 1.3.1 Seguridad y riesgos",
  seccion: "1.3.1 · SEGURIDAD Y RIESGOS",
  transition: "curtain",
};

export default function PortadaSeguridadYRiesgos() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="1.3.1"
      kicker="Seguridad y riesgos"
      titulo={
        <>
          Delegar también exige <span className="accent">poner límites</span>
        </>
      }
      promesa="Los permisos, los datos y la validación siguen siendo decisiones humanas."
      temas={["permisos", "datos sensibles", "validación", "responsabilidad"]}
    />
  );
}
