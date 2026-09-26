import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Prompt y contexto útil",
  seccion: "1.1.2 · ADE",
  steps: 3,
  notes:
    "Cierre de la sección. El prompt es la instrucción: una pregunta, una orden, una descripción de tarea. El contexto útil es todo lo que hace que esa instrucción se pueda resolver bien — el objetivo de negocio, las restricciones técnicas, la arquitectura existente, los patrones del repo, las decisiones previas, los tests disponibles, los errores conocidos. La ventana es el límite técnico, pero llenarla de texto no garantiza nada: importa qué tan bien está seleccionado, ordenado y conectado con la tarea. Por eso el trabajo profesional con agentes no es escribir prompts más largos.",
  transition: "fade",
};

const CONTEXTO = [
  "objetivo de negocio",
  "restricciones técnicas",
  "arquitectura existente",
  "patrones del repo",
  "decisiones previas",
  "tests disponibles",
];

export default function PromptYContextoUtil() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.9vw,5.16vh),58px)" }}>
        La calidad depende del <span className="accent">diseño del contexto</span>,
        <br />
        no de la extensión del prompt
      </h2>

      <Paso n={1} className="mt-l">
        <div className="chips grandes">
          {CONTEXTO.map((c) => (
            <span className="chip acento" key={c}>
              {c}
            </span>
          ))}
        </div>
      </Paso>
    </SlideFrame>
  );
}
