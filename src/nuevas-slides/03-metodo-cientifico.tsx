import { Fragment } from "react";
import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El método científico",
  seccion: "BLOQUE 1 · EL MÉTODO",
  notes:
    "El ejemplo que nadie puede decir que no conoce. El punto no es la ciencia: es que los pasos y su orden están decididos ANTES de empezar, y por eso el resultado se puede repetir y refutar.",
  transition: "fade",
};

const PASOS = ["Observación", "Pregunta", "Hipótesis", "Experimento", "Análisis", "Conclusión"];

export default function MetodoCientifico() {
  return (
    <SlideFrame meta="BLOQUE 1 · EL MÉTODO">
      <h2 className="display t-md reveal">Uno que conocés desde el secundario</h2>
      <div className="loop mt-l reveal">
        {PASOS.map((paso, i) => (
          <Fragment key={paso}>
            <span className={i === 0 ? "step acc" : "step"}>{paso}</span>
            {i < PASOS.length - 1 && <span className="arr">→</span>}
          </Fragment>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        Se fue puliendo durante siglos y nadie lo discute.{" "}
        <span className="k">Y funciona por una sola razón:</span> los pasos y su orden están
        decididos antes de empezar. Por eso el resultado se puede repetir, revisar y refutar.
      </p>
    </SlideFrame>
  );
}
