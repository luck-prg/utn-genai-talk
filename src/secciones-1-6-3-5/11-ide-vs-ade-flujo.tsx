import type { SlideMeta } from "@/deck/types";
import { IdeVsAde } from "@/components/IdeVsAde";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "De tipear a revisar",
  seccion: "1.1.2 · ADE",
  steps: 5,
  notes:
    "La frase que resume todo: en el IDE el input es código y la salida es código; en un ADE el input es contexto y la salida es código. Y la consecuencia directa, que es la bisagra de toda la charla: si el input del ADE es el contexto, la calidad del contexto pasa a ser una habilidad de ingeniería, no un detalle de forma. Pero ojo con la lectura fácil: esto no es que el ADE reemplace al IDE. Son complementarias. Debuggear paso a paso, un refactor guiado por el compilador, navegar a la definición de un símbolo, el autocompletado — todo eso el IDE lo sigue haciendo mejor que cualquier agente, y lo vas a seguir usando todos los días. Lo que cambia es dónde está tu atención cuando el trabajo es grande: el umbral aparece en tareas que tocan diez o más archivos, dos o más repos, o que requieren tres agentes en paralelo. Abajo de eso, el IDE solo está perfecto.",
  transition: "fade",
};

export default function IdeVsAdeFlujo() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE">
      <h2 className="display reveal" style={{ fontSize: "clamp(20px,min(2.5vw,4.44vh),52px)" }}>
        En el IDE el input es <span className="accent">código</span>.
        <br />
        En el ADE el input es <span className="accent">contexto</span>.
      </h2>

      <div className="reveal mt-s">
        <IdeVsAde paso={paso} />
      </div>

      <Paso n={4} className="mt-m">
        <div className="bar">
          <span>
            No compiten: son <b className="accent">complementarias</b>.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
