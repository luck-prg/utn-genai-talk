import type { SlideMeta } from "@/deck/types";
import { CicloEvidencia } from "@/components/CicloEvidencia";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tools: el agente y la evidencia",
  seccion: "HERRAMIENTAS",
  notes:
    "Hay tareas que requieren una acción, no razonamiento: validar un tipo, correr un test, hacer una cuenta. Ya tenemos componentes que las resuelven — compiladores, intérpretes, calculadoras — y las tools son el punto de extensión para delegárselas. El efecto es que el modelo no necesita imaginar el estado del sistema: puede observarlo. Y si puede observar, puede iterar.",
  transition: "fade",
};

export default function ToolsYEvidencia() {
  return (
    <SlideFrame meta="HERRAMIENTAS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Sin tools el agente <span className="ink2">opina</span>.
        <br />
        Con tools <span className="accent">opera sobre evidencia</span>.
      </h2>

      <div className="reveal mt-s fig-ciclo">
        <CicloEvidencia />
      </div>

      <div className="bar reveal mt-s">
        <span>
          Permisos acotados: <b className="accent">¿lee mejor, actúa mejor o valida mejor?</b>
        </span>
        <span>Si no, es decoración técnica.</span>
      </div>
    </SlideFrame>
  );
}
