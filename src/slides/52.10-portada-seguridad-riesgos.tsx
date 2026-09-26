import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 1.3.2 Seguridad y riesgos",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  notes:
    "[~20 s] Recién vimos lo que el agente no resuelve solo. Ahora, lo que puede salir mal cuando lo usamos: qué pasa con lo que le mandamos, cómo nos cuidamos, y lo que está en juego más allá de nuestra máquina.",
  transition: "curtain",
};

export default function PortadaSeguridadYRiesgos() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="1.3.2"
      kicker="Seguridad y riesgos"
      titulo={
        <>
          Delegar también exige <span className="accent">poner límites</span>
        </>
      }
      promesa=""
    />
  );
}
