import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Niveles 2 y 3",
  seccion: "2.2.1 · MADUREZ",
  steps: 3,
  notes:
    "Nivel 2 es cuando el trabajo deja de depender del prompt del momento. Aparecen AGENTS.md o CLAUDE.md, MCPs, skills, templates, scripts y checklists. La línea que lo define: el conocimiento empieza a dejar de estar sólo en la cabeza del developer y pasa a vivir en artefactos que el agente puede reutilizar. Y esto es exactamente la sección de herramientas que acabamos de ver. Nivel 3 es el harness propio del proyecto: el repo tiene un entorno diseñado para que el agente trabaje bien — contexto vivo, documentación técnica, reglas de negocio, comandos de validación, subagents, hooks. La persona sigue validando, pero el agente opera con un mapa mucho más fiel. Y acá le pasás la pelota a Lucho.",
  transition: "fade",
};

export default function Nivel2y3() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.1 · MADUREZ">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        El conocimiento pasa a vivir en <span className="accent">artefactos</span>
      </h2>

      <div className="versus mt-l">
        <Paso n={1} className="vs-col reserva">
          <div className="vs-tag">nivel 2</div>
          <div className="vs-num chico">reutilizable</div>
          <div className="vs-body">Rules, MCPs, skills, scripts y checklists.</div>
        </Paso>

        <Paso n={2} className="vs-col acc reserva">
          <div className="vs-tag">nivel 3</div>
          <div className="vs-num chico">harness propio</div>
          <div className="vs-body">Un entorno diseñado para que el agente trabaje bien.</div>
        </Paso>
      </div>
    </SlideFrame>
  );
}
