import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Sin ingeniería, la IA acelera la deuda",
  seccion: "LÍMITES",
  notes:
    "Cierre de la sección. La deuda no se distribuye al azar: se concentra donde el equipo sabe menos, que es justo donde menos criterio hay para verificar lo que produce. La competencia que la IA puede volver escasa no es la de generar código, sino la de rechazarlo cuando está mal.",
  transition: "fade",
};

export default function LimitesConclusion() {
  return (
    <SlideFrame meta="LÍMITES">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Sin contexto, specs ni validación,
        <br />
        la IA sólo acelera la <span className="accent">deuda técnica</span>
      </h2>

      <p className="sub reveal mt-m maxw">
        Y esa deuda no se reparte al azar: se concentra donde el equipo sabe menos, que es también
        donde menos criterio hay para verificar lo que produce.
      </p>

      <div className="reveal mt-m">
        <p className="quote">
          La competencia que se vuelve escasa no es generar código: es <span className="accent">rechazarlo</span> cuando está mal.
        </p>
      </div>

      <p className="body reveal mt-m maxw">
        La tarea no es delegar más o menos: es construir el <b>criterio</b> y los{" "}
        <b>oráculos de verificación</b> antes de delegar.
      </p>
    </SlideFrame>
  );
}
