import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Prompt y contexto útil",
  seccion: "FUNDAMENTOS",
  notes:
    "Cierre de la sección. El prompt es la instrucción; el contexto útil es lo que aumenta la probabilidad de que el agente tome buenas decisiones. La ventana es el límite técnico, pero llenarla de texto no garantiza nada: importa qué tan bien está seleccionado, ordenado y conectado con la tarea.",
  transition: "fade",
};

const CONTEXTO = [
  "objetivo de negocio",
  "restricciones técnicas",
  "arquitectura existente",
  "patrones del repo",
  "decisiones previas",
  "ejemplos buenos y malos",
  "tests disponibles",
  "errores conocidos",
  "criterio de finalización",
];

export default function PromptYContextoUtil() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <div className="two-col reveal">
        <div>
          <div className="col-head bad">Prompt</div>
          <p className="body">
            La <b>instrucción</b>: una pregunta, una orden o una descripción de tarea.
          </p>
        </div>
        <div>
          <div className="col-head good">Contexto útil</div>
          <p className="body">
            Todo lo que hace que esa instrucción se pueda <b>resolver bien</b>.
          </p>
        </div>
      </div>

      <div className="chips reveal mt-m maxw">
        {CONTEXTO.map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
      </div>

      <h2 className="display reveal mt-l" style={{ fontSize: "clamp(22px,min(2.9vw,5.16vh),58px)" }}>
        El trabajo profesional con agentes no es escribir prompts más largos:
        <br />
        es <span className="accent">diseñar mejor contexto útil</span>.
      </h2>
    </SlideFrame>
  );
}
