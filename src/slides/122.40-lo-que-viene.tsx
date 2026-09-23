import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que viene: preguntas abiertas",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  // Fuente: Anthropic, How we built our multi-agent research system, 13 de junio de 2025. https://www.anthropic.com/engineering/multi-agent-research-system
  // Fuente: Anthropic, Trustworthy agents in practice, 9 de abril de 2026. https://www.anthropic.com/research/trustworthy-agents
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
