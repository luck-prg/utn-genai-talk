import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Codigo, CodigoPar } from "@/components/Codigo";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "El modelo solicita la ejecución",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "El JSON real de una vuelta. PASO 0: lo que devuelve el modelo. Señalá stop_reason 'tool_use': no es un error ni un caso raro, es el modelo diciendo 'necesito que alguien corra esto'. El bloque tool_use es texto: un nombre y unos argumentos. El modelo no tocó ningún archivo. PASO 1: lo que devuelve TU código. El tool_use_id es el hilo que ata pedido y resultado. Y ese resultado se suma al historial: la conversación creció.",
  transition: "fade",
};

export default function ElModeloPide() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">El modelo solicita la ejecución; no la realiza</h2>
      <CodigoPar>
        <Codigo archivo="respuesta del modelo" className="reveal">
          <span className="cm">{"// lo que devuelve la API\n"}</span>
          {"{\n"}
          {'  "stop_reason": '}
          <span className="st">{'"tool_use"'}</span>
          {",\n"}
          {'  "content": [{\n'}
          {'    "type": '}
          <span className="st">{'"tool_use"'}</span>
          {",\n"}
          {'    "id": '}
          <span className="st">{'"toolu_01A…"'}</span>
          {",\n"}
          {'    "name": '}
          <span className="st">{'"leer_archivo"'}</span>
          {",\n"}
          {'    "input": { "ruta": '}
          <span className="st">{'"src/app.ts"'}</span>
          {" }\n"}
          {"  }]\n"}
          {"}"}
        </Codigo>
        <Paso n={1}>
          <Codigo archivo="lo que devuelve tu código">
            <span className="cm">{"// el harness ejecuta y responde\n"}</span>
            {"{\n"}
            {'  "role": '}
            <span className="st">{'"user"'}</span>
            {",\n"}
            {'  "content": [{\n'}
            {'    "type": '}
            <span className="st">{'"tool_result"'}</span>
            {",\n"}
            {'    "tool_use_id": '}
            <span className="st">{'"toolu_01A…"'}</span>
            {",\n"}
            {'    "content": '}
            <span className="st">{'"export function…"'}</span>
            {"\n"}
            {"  }]\n"}
            {"}"}
          </Codigo>
        </Paso>
      </CodigoPar>
      <Paso n={1} className="arq-remate">
        El <b>tool_use_id</b> ata el pedido con su resultado. Los dos quedan en el historial.
      </Paso>
    </SlideFrame>
  );
}
