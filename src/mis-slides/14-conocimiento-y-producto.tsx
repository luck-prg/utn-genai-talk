import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Límites 2 y 3 · Conocimiento y producto",
  seccion: "LÍMITES",
  notes:
    "Dos límites con la misma raíz: hay conocimiento que sólo tiene el equipo. Si no se lo damos explícitamente, el agente lo completa por su cuenta y no siempre bien. Y producir código no es producir producto: la segunda exige una capa de criterio que el agente no aporta.",
  transition: "fade",
};

export default function ConocimientoYProducto() {
  return (
    <SlideFrame meta="LÍMITES">
      <div className="two-col reveal">
        <div className="split-col">
          <div className="sc-tag">›// límite 2</div>
          <div className="sc-head mt-s">Conocimiento organizacional ausente</div>
          <ul className="blist mt-s">
            <li>
              <span>Reglas de negocio y restricciones reales.</span>
            </li>
            <li>
              <span>Decisiones previas del equipo.</span>
            </li>
            <li>
              <span>Integraciones internas y APIs heredadas.</span>
            </li>
          </ul>
          <p className="body mt-s">
            Si no se las damos, <b>las completa por su cuenta</b>.
          </p>
        </div>

        <div className="split-col">
          <div className="sc-tag">›// límite 3</div>
          <div className="sc-head mt-s">Producto ≠ código</div>
          <ul className="blist mt-s">
            <li>
              <span>UX y adecuación funcional.</span>
            </li>
            <li>
              <span>Escalabilidad, mantenibilidad, observabilidad.</span>
            </li>
            <li>
              <span>Trade-offs técnicos con consecuencias.</span>
            </li>
          </ul>
          <p className="body mt-s">
            El agente <b>no piensa como product engineer</b>.
          </p>
        </div>
      </div>

      <div className="bar reveal mt-m">
        <span>
          Hay conocimiento que <b>sólo tiene el equipo</b>.
        </span>
        <span className="accent">No hay forma de que el agente lo infiera solo.</span>
      </div>
    </SlideFrame>
  );
}
