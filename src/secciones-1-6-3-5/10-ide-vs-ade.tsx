import type { SlideMeta } from "@/deck/types";
import { CapasAbstraccion } from "@/components/CapasAbstraccion";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Un nuevo tipo de herramienta: IDE y ADE",
  seccion: "1.1.2 · ADE",
  notes:
    "Cada capa de abstracción nos alejó de la máquina y nos acercó a la intención, y una vez que confiamos en un compilador o un framework queda fuera de discusión. El ADE no es una capa más de esa escalera: no nos abstrae del código ni de los requerimientos, exige un ciclo constante de generar, leer, validar y corregir. La diferencia clave está en el input — el IDE recibe código y devuelve código; el ADE recibe contexto y devuelve código con evidencia, y por eso requiere supervisión.",
  transition: "fade",
};

export default function IdeVsAde() {
  return (
    // El cuerpo va a sangre: esta diapositiva es el diagrama, así que el
    // padding vertical se le cede a la figura en vez de gastarlo en aire.
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE" bodyClass="a-sangre">
      <h2 className="display reveal" style={{ fontSize: "clamp(20px,min(2.3vw,4.09vh),48px)" }}>
        El <span className="accent">ADE</span> no es una capa más de la escalera
      </h2>

      <div className="reveal mt-s fig-fit">
        <CapasAbstraccion />
      </div>
    </SlideFrame>
  );
}
