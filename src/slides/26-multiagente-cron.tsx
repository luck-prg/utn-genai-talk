import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Más allá de un agente",
  seccion: "BLOQUE 5 · ORQUESTACIÓN",
  transition: "fade",
};

export default function MultiagenteCron() {
  return (
    <SlideFrame meta="BLOQUE 5 · ORQUESTACIÓN">
      <h2 className="display t-md reveal">Más allá de un agente</h2>
      <div className="two-col mt-l reveal">
        <div>
          <div className="col-head good">Multi-agente</div>
          <p className="body">
            Delegar tareas a varios agentes y coordinarlos en paralelo. Roles diferenciados,
            patrones de orquestación y mantener el hilo sin perderse.
          </p>
        </div>
        <div>
          <div className="col-head good">Autónomos · Cron</div>
          <p className="body">
            No solo reactivos: cron jobs y schedulers disparan agentes en intervalos. Reviews
            nocturnas, reportes, QA, monitoreo. El agente se vuelve un proceso del sistema.
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}
