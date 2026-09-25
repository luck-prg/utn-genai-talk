import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Confianza con uso y evidencia",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  // Fuente: Anthropic, Demystifying evals for AI agents, 9 de enero de 2026. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
};

export default function ConfianzaConEvidencia() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <h2 className="display t-md reveal">La confianza se construye<br />con el <span className="accent">uso</span> y se basa en la <span className="accent">evidencia</span></h2>
      <div className="two-col mt-l reveal">
        <div>
          <h3 className="col-head">Sumar experiencia de proyectos</h3>
          <p className="sub">Aprendizaje en casos, errores, mejoras, y tiempo de revisión.</p>
        </div>
        <div>
          <h3 className="col-head">Establecer límites de forma adecuada</h3>
          <p className="sub">Permisos acotados y una forma de detener o revertir acciones. Se debe ampliar la delegación cuando los resultados la justifiquen.</p>
        </div>
      </div>
    </SlideFrame>
  );
}
