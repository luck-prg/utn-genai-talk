import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Dos caminos",
  seccion: "BLOQUE 0 · INTRODUCCIÓN",
  transition: "fade",
};

export default function DosCaminos() {
  return (
    <SlideFrame meta="BLOQUE 0 · INTRODUCCIÓN">
      <h2 className="display t-md reveal">
        Dos caminos para
        <br />
        el ingeniero de hoy
      </h2>
      <div className="two-col mt-l reveal">
        <div>
          <div className="col-head bad">El camino fácil</div>
          <ul className="blist">
            <li>Muchas iteraciones</li>
            <li>La calidad no es la esperada</li>
            <li>El modelo "se olvida" de lo hablado</li>
            <li>Las correcciones son largas</li>
          </ul>
        </div>
        <div>
          <div className="col-head good">El camino que escala</div>
          <ul className="blist">
            <li>Especificaciones como contrato</li>
            <li>Evaluaciones que miden calidad</li>
            <li>Un harness preparado y reutilizable</li>
            <li>Desarrollo autónomo y predecible</li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
