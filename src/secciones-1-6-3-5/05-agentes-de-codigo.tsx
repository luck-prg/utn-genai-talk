import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Del chatbot al agente de código",
  seccion: "FUNDAMENTOS",
  notes:
    "Un agente de código es una capa por encima del LLM que lo conecta con un entorno de desarrollo real. La diferencia no es que conteste mejor: es que participa dentro de un ciclo de trabajo, puede modificar el proyecto y puede verificar lo que hizo.",
  transition: "fade",
};

export default function AgentesDeCodigo() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <h2 className="display t-md reveal">
        Del chatbot al <span className="accent">agente de código</span>
      </h2>

      <div className="two-col reveal mt-m">
        <div>
          <div className="col-head bad">Chatbot</div>
          <p className="body">
            Responde una pregunta <b>sobre</b> el código. Lo que sabe del proyecto es lo que vos le
            pegaste en el chat.
          </p>
        </div>
        <div>
          <div className="col-head good">Agente de código</div>
          <p className="body">
            Opera <b>dentro</b> del proyecto: lee archivos, busca referencias, modifica código,
            corre tests, observa errores y prepara un diff o un PR.
          </p>
        </div>
      </div>

      <div className="reveal mt-m">
        <p className="eyebrow">›// el ciclo</p>
        <div className="loop mt-s">
          <span className="step">Objetivo</span>
          <span className="arr">→</span>
          <span className="step">Contexto</span>
          <span className="arr">→</span>
          <span className="step">Decisión</span>
          <span className="arr">→</span>
          <span className="step">Tools</span>
          <span className="arr">→</span>
          <span className="step acc">Validación</span>
        </div>
      </div>

      <p className="sub reveal mt-s maxw">
        Claude Code, Codex, Gemini CLI, Cursor: ya no es un chat, es un <b>entorno de trabajo</b>.
      </p>
    </SlideFrame>
  );
}
