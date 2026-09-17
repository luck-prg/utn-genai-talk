import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Portada · Modelos",
  seccion: "MODELOS",
  notes:
    "Corte de sección. Elegir el modelo es una decisión de diseño del harness, no un detalle de configuración. Lo que importa es el criterio, porque el catálogo de modelos cambia todo el tiempo.",
  transition: "curtain",
};

export default function PortadaModelos() {
  return (
    <PortadaSeccion
      meta="SECCIÓN"
      numero="05"
      kicker="Modelos"
      titulo={
        <>
          Elegir el modelo
          <br />
          es <span className="accent">diseñar el harness</span>
        </>
      }
      promesa={
        <>
          No todos los problemas justifican el modelo más caro. El criterio dura; el{" "}
          <b>catálogo vigente</b>, no.
        </>
      }
      temas={["criterio", "escalones", "lectura económica"]}
    />
  );
}
