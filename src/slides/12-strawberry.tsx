import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";
import { TiraDeTokens } from "@/components/TokenizerVivo";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "El problema de la frutilla",
  seccion: "1.1.1 · LLM Y TOKENS",
  steps: 4,
  notes:
    "Durante años la respuesta clásica a esta pregunta fue un confiado y equivocado 'dos'. Son tres. Y no es una falla de razonamiento: es una falla de tokenización. Mirá la tira: en esta pregunta 'strawberry' entra como UN solo token, el ítem 101830 del vocabulario. Preguntarle cuántas erres tiene es como preguntarte a vos cuántas erres tiene la página 101.830 del diccionario: sabés perfectamente qué palabra hay ahí, pero el número que te dieron no tiene letras adentro. Mismo mecanismo con los números: 1234567 no se parte en dígitos, se parte donde el vocabulario tenga chunks. Por eso al modelo se le da una calculadora en vez de pedirle que sume.",
  transition: "fade",
};

const PREGUNTA = "How many r in strawberry?";

export default function Strawberry() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.1.1 · LLM Y TOKENS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        El error se origina en la <span className="accent">tokenización</span>,
        <br />
        no en el razonamiento
      </h2>

      <div className="reveal mt-s">
        <div className="stats">
          <div className="stat">
            <div className="s-num">2</div>
            <div className="s-lbl">respuesta del modelo</div>
          </div>
          <div className="stat-sep">≠</div>
          <div className="stat">
            <div className="s-num acc">3</div>
            <div className="s-lbl">respuesta correcta</div>
          </div>
          <p className="sub" style={{ maxWidth: "26ch" }}>
            <code>{PREGUNTA}</code>
          </p>
        </div>
      </div>

      <Paso n={1} className="mt-m">
        <TiraDeTokens texto={PREGUNTA} modo={paso >= 2 ? "solo-ids" : "ids"} />
      </Paso>

      <Paso n={2} className="mt-m">
        <p className="quote">
          Es como preguntarte cuántas erres tiene la <span className="accent">página 101.830</span>{" "}
          del diccionario.
        </p>
      </Paso>

      <Paso n={3} className="mt-m">
        <div className="bar">
          <span>
            Por eso las operaciones exactas se delegan en <b className="accent">herramientas determinísticas</b>.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
