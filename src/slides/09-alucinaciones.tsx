import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Alucinaciones: probable ≠ verídico",
  seccion: "1.1.1 · LLM Y TOKENS",
  steps: 3,
  notes:
    "Va acá, temprano, porque explica casi todo lo que viene después. El modelo trabaja prediciendo palabra a palabra: en cada paso elige la continuación más probable. Optimiza que la respuesta sea plausible, no que sea verdadera. Cuando las dos cosas coinciden, acierta, y es la mayor parte del tiempo — por eso confiamos. Cuando se separan, alucina con exactamente la misma seguridad: no hay nada en el tono que distinga un caso del otro. No es un bug que se arregla: es comportamiento indeseable, mitigable pero inevitable. Toda la ingeniería que vamos a ver — tools, contexto, validación — existe para cerrar esa brecha.",
  transition: "fade",
};

export default function Alucinaciones() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.1 · LLM Y TOKENS">

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Predice lo <span className="accent">más probable</span>,
        <br />
        no lo <span className="accent">verídico</span>
      </h2>

      <Paso n={1} className="mt-l">
        <div className="versus">
          <div className="vs-col">
            <div className="vs-tag">cuando coinciden</div>
            <div className="vs-num grande">acierta</div>
          </div>
          <div className="vs-col acc">
            <div className="vs-tag">cuando se separan</div>
            <div className="vs-num grande">alucina</div>
          </div>
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            Y lo hace con la <b className="accent">misma seguridad</b>.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
