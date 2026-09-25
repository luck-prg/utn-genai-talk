import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué es un LLM",
  seccion: "1.1.1 · LLM Y TOKENS",
  steps: 3,
  notes:
    "Definirlo por lo que hace, no por lo que parece: una función que, dada una secuencia de tokens, predice el siguiente. Nada más. El chat, la memoria, las herramientas y los agentes son harness construido alrededor de esa función. Sembrar esta idea acá, porque se cosecha en la pirámide de madurez: cada nivel es literalmente cuánto harness le construimos al modelo.",
  transition: "fade",
};

const HARNESS = ["el chat", "la memoria", "las herramientas", "los agentes", "el ciclo agéntico"];

export default function ModelosDeLenguaje() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.1 · LLM Y TOKENS">

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Una función que, dada una secuencia de tokens,
        <br />
        predice <span className="accent">el siguiente</span>
      </h2>

      <Paso n={1} className="mt-m maxw">
        <p className="sub">
          Nada más. Todo lo demás es <b>harness</b> construido alrededor de esa función.
        </p>
        <div className="chips mt-s">
          {HARNESS.map((a) => (
            <span className="chip" key={a}>
              {a}
            </span>
          ))}
        </div>
      </Paso>

      <Paso n={2} className="mt-m">
        <div className="bar">
          <span>
            Toda la charla es una sola pregunta: <b className="accent">cuánto harness</b> le
            construimos.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
