import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Portada · 3.1 Modelos",
  seccion: "3.1 · MODELOS",
  notes:
    "Corte de sección. Elegir el modelo es una decisión de diseño del harness, no un detalle de configuración. Lo que importa es el criterio, porque el catálogo de modelos cambia todo el tiempo.",
  transition: "curtain",
};

export default function PortadaModelos() {
  return (
    <PortadaSeccion header={false} footer={false}
      meta="SECCIÓN"
      numero="3.1"
      kicker="Modelos"
      titulo={
        <>
          Elegir el modelo
          <br />
          es <span className="accent">diseñar el harness</span>
        </>
      }
      promesa="El criterio dura; el catálogo vigente, no."
      temas={["criterio", "cuatro ejes", "gamas", "local vs. remoto"]}
    />
  );
}
