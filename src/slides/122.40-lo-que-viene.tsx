import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que viene: preguntas abiertas",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  notes: "Tiempo: 2:00. Retomar memoria, loops, evals y equipos de agentes sin repetir la pirámide. Ya existen experiencias con agentes que coordinan trabajo y usan contexto persistente. La proyección es condicional: si delegamos tareas más largas, necesitaremos mejores límites, registros y formas de intervenir. No hay una fecha ni una evolución idéntica para todos los proyectos. Separar lo técnicamente posible de lo que conviene adoptar. Hay preguntas abiertas sobre costo, fallos acumulados y supervisión. Fuentes: https://www.anthropic.com/engineering/multi-agent-research-system y https://www.anthropic.com/research/trustworthy-agents. Los escenarios de esta slide son una reflexión sobre esas capacidades, no una predicción garantizada.",
};

export default function LoQueViene() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <p className="eyebrow reveal">Lo que viene: escenarios abiertos</p>
      <h2 className="display t-md mt-s reveal">Más autonomía,<br />más decisiones de <span className="accent">diseño</span></h2>
      <div className="two-col mt-l reveal">
        <div>
          <h3 className="col-head">Si delegamos tareas más largas…</h3>
          <p className="sub">¿Cuándo debe parar el agente y pedir ayuda?</p>
        </div>
        <div>
          <h3 className="col-head">Si trabajan varios agentes…</h3>
          <p className="sub">¿Cómo detectamos desacuerdos y errores compartidos?</p>
        </div>
      </div>
    </SlideFrame>
  );
}
