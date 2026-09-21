import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Del chatbot al agente de código",
  seccion: "1.1.2 · ADE",
  notes:
    "Un agente de código es una capa por encima del LLM que lo conecta con un entorno de desarrollo real. La diferencia no es que conteste mejor: es que participa dentro de un ciclo de trabajo, puede modificar el proyecto y puede verificar lo que hizo.",
  transition: "fade",
};

export default function AgentesDeCodigo() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE">
      <h2 className="display t-md reveal">
        Del chatbot al <span className="accent">agente de código</span>
      </h2>

      <div className="two-col reveal mt-m">
        <div>
          <div className="col-head bad">Chatbot</div>
          <p className="body">
            Responde <b>sobre</b> el código. Sabe lo que le pegaste.
          </p>
        </div>
        <div>
          <div className="col-head good">Agente de código</div>
          <p className="body">
            Opera <b>dentro</b> del proyecto: lee, edita, corre tests y valida.
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

    </SlideFrame>
  );
}
