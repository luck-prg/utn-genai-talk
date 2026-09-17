import type { SlideMeta } from "@/deck/types";
import { CapasAbstraccion } from "@/components/CapasAbstraccion";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Un nuevo tipo de herramienta: IDE y ADE",
  seccion: "FUNDAMENTOS",
  notes:
    "Cada capa de abstracción nos alejó de la máquina y nos acercó a la intención, y una vez que confiamos en un compilador o un framework queda fuera de discusión. El ADE no es una capa más de esa escalera: no nos abstrae del código ni de los requerimientos, exige un ciclo constante de generar, leer, validar y corregir. La diferencia clave está en el input: el IDE recibe código, el ADE recibe contexto.",
  transition: "fade",
};

export default function IdeVsAde() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        El <span className="accent">ADE</span> no es una capa más de la escalera
      </h2>
      <div className="reveal mt-s">
        <CapasAbstraccion />
        <p className="figcap">
          El IDE recibe código y devuelve código. El ADE recibe contexto y devuelve código con
          evidencia.
        </p>
      </div>
    </SlideFrame>
  );
}
