import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Gestión de conversaciones",
  seccion: "2.1.4 · CONCLUSIONES",
  transition: "fade",
};

export default function GestionConversaciones() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONTEXT ENG.">
      <h2 className="display t-md reveal">Gestión de conversaciones</h2>
      <p className="sub reveal mt-s maxw">
        El historial <span style={{ color: "var(--color-acento)", fontWeight: 600 }}>consume tokens de forma acumulativa</span>:
        cuanto más crece, más caro y menos preciso se vuelve el agente.
      </p>
      <ul className="blist mt-m reveal">
        <li>
          <span className="lead">Nuevo chat por tarea</span> — contexto limpio, sin arrastrar lo
          irrelevante.
        </li>
        <li>
          <span className="lead">Resumir el contexto</span> — pasar el estado actual, no todo el
          historial.
        </li>
        <li>
          <span className="lead">Scripts determinísticos</span> — separar lo predecible del
          razonamiento generativo.
        </li>
        <li>
          <span className="lead">Prompt reviewer</span> — refinar instrucciones antes de enviarlas
          al agente.
        </li>
        <li>
          <span className="lead">Agent loop</span> — re-ejecuta un prompt en intervalos para que el
          agente siga trabajando solo.
        </li>
        <li>
          <span className="lead">Goals</span> — el agente itera hasta cumplir una condición
          verificable (ej.: "todos los tests pasan").
        </li>
      </ul>
    </SlideFrame>
  );
}
