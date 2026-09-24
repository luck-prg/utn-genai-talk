import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Límite 2 · Conocimiento organizacional ausente",
  seccion: "1.3.1 · IA SIN INGENIERÍA",
  steps: 3,
  notes:
    "El segundo límite es el conocimiento organizacional ausente. El agente desconoce las reglas de negocio que gobiernan el dominio, las restricciones técnicas y regulatorias bajo las que opera el sistema, y las decisiones previas del equipo junto con los motivos que las justificaron. Nada de eso está registrado en el código de forma legible, y nada de eso es inferible. El punto crítico no es el desconocimiento en sí, sino la conducta frente a él: el agente no se detiene ni consulta, completa el vacío con la alternativa más plausible. Que es exactamente el problema del que venimos hablando desde el principio.",
  transition: "fade",
};

const AUSENTE = [
  { que: "Reglas de negocio", det: "las que gobiernan el dominio" },
  { que: "Restricciones", det: "técnicas y regulatorias" },
  { que: "Decisiones previas", det: "y los motivos que las justificaron" },
];

export default function ConocimientoOrganizacional() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.1 · IA SIN INGENIERÍA">
      <p className="eyebrow reveal">›// límite 2</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        Conocimiento organizacional <span className="accent">ausente</span>
      </h2>

      <div className="llm mt-l">
        {AUSENTE.map((a) => (
          <Paso n={1} className="llm-fila reserva" key={a.que}>
            <span className="llm-palabra chico">{a.que}</span>
            <span className="llm-que">{a.det}</span>
          </Paso>
        ))}
      </div>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            No consulta: ante la falta de definición <b className="accent">puede inventar</b> definiciones de negocio.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
