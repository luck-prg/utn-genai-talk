import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué evaluamos?",
  seccion: "BLOQUE 4 · EVALS",
  transition: "fade",
};

export default function DosEjes() {
  return (
    <SlideFrame meta="BLOQUE 4 · EVALS">
      <h2 className="display t-md reveal">¿Qué evaluamos?</h2>
      <div className="two-col mt-l reveal">
        <div>
          <div className="col-head good">Eje 1 · Calidad de la salida</div>
          <ul className="blist">
            <li>
              <span className="lead">Comportamiento</span> — ¿comprende la completitud del
              problema?
            </li>
            <li>
              <span className="lead">Exacta</span> — ¿compila / pasa pruebas unitarias?
            </li>
            <li>
              <span className="lead">Subjetiva</span> — ¿la respuesta abierta está en rango?
            </li>
          </ul>
        </div>
        <div>
          <div className="col-head good">Eje 2 · Calidad del proceso</div>
          <ul className="blist">
            <li>
              <span className="lead">Uso de herramientas</span> — ¿usa las que quiero?
            </li>
            <li>
              <span className="lead">Estados intermedios</span> — ¿pasa por los esperados?
            </li>
            <li>
              <span className="lead">Eficiencia</span> — ¿mejora costos y tiempos?
            </li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
