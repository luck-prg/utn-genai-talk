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
      titulo={<>El modelo importa.<br />El prompt, el contexto, el harness y <span className="accent">nuestro criterio</span>, también.</>}
      promesa="¿Qué nos llevamos y cómo seguimos aprendiendo en un campo que cambia constantemente?"
      temas={["ingeniería de software", "aprendizaje continúo", "futuro incierto", "comunidad"]}
    />
  );
}
