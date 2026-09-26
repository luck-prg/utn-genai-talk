import { useState } from "react";
import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { EntradaDeTexto, TiraDeTokens, useConteo } from "@/components/TokenizerVivo";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Tokens: la unidad de trabajo",
  seccion: "1.1.1 · LLM Y TOKENS",
  steps: 3,
  notes:
    "Demo en vivo — la tokenización es real, con el vocabulario o200k de los modelos actuales. Se puede tipear una frase que tire el público. Primero se ven los fragmentos coloreados: fijate que no coinciden con las palabras. Con el segundo clic aparecen los IDs. Con el tercero se van las letras y quedan sólo los números: eso es literalmente lo que recibe el modelo, y ahí se pierde la ortografía. De eso sale lo que viene en la próxima diapositiva.",
  transition: "fade",
};

const FRASE = "El contexto es el nuevo código: cada token que entra se paga.";

export default function Tokens() {
  const paso = useStep();
  const [texto, setTexto] = useState(FRASE);
  const conteo = useConteo(texto);

  const modo = paso >= 2 ? "solo-ids" : paso >= 1 ? "ids" : "texto";

  return (
    <SlideFrame header={false} footer={false} meta="1.1.1 · LLM Y TOKENS">
      <h2 className="display t-md reveal">
        El modelo procesa <span className="accent">tokens</span>, no palabras
      </h2>

      <div className="tokz reveal mt-l">
        <EntradaDeTexto valor={texto} onChange={setTexto} />
        <TiraDeTokens texto={texto} modo={modo} className="grande" />

        <div className="stats">
          <div className="stat">
            <div className="s-num">{texto.length}</div>
            <div className="s-lbl">caracteres</div>
          </div>
          <div className="stat-sep">→</div>
          <div className="stat">
            <div className="s-num acc">{conteo ?? "—"}</div>
            <div className="s-lbl">tokens</div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
