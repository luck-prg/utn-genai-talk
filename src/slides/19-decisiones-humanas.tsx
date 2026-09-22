import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El código compila y el sistema empeora",
  seccion: "1.1.2 · ADE",
  steps: 3,
  notes:
    "Un mal contexto produce mal código con la misma eficiencia con la que un buen contexto produce código correcto. El agente puede resolver el problema en aislamiento e introducir un patrón ajeno, duplicar una abstracción o romper una decisión arquitectónica acordada — y todo eso compila. Las tres decisiones que no se delegan son entender el problema (qué se quiere construir y por qué), decidir el diseño (arquitectura, límites, contratos y patrones, y descartar los que no corresponden) y aceptar o rechazar lo que produce el agente. Podés delegar la ejecución; no podés delegar el criterio.",
  transition: "fade",
};

const HUMANO = ["entender el problema", "decidir el diseño", "aceptar o rechazar"];

export default function DecisionesHumanas() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE">
      <h2 className="display t-md reveal">
        El código puede compilar,
        <br />
        los tests pasar, y el sistema <span className="accent">empeorar</span>
      </h2>

      <Paso n={1} className="mt-l">
        <div className="chips">
          {HUMANO.map((h) => (
            <span className="chip" key={h}>
              {h}
            </span>
          ))}
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <p className="quote">La responsabilidad nunca se delega.</p>
      </Paso>
    </SlideFrame>
  );
}
