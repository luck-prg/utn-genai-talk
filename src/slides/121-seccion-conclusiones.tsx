import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Conclusiones · Después de la charla",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
};

export default function SeccionConclusiones() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="BLOQUE 4"
      numero="4.2"
      kicker="Conclusiones"
      titulo={<>El modelo importa.<br />Nuestro <span className="accent">criterio</span>, también.</>}
      promesa="Qué nos llevamos y cómo seguimos aprendiendo en un campo que cambia."
      temas={["ingeniería", "aprendizaje", "futuro", "comunidad"]}
    />
  );
}
