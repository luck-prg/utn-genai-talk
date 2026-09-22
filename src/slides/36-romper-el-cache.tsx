import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Codigo, CodigoPar } from "@/components/Codigo";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "Cómo se rompe el cache",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "El error más común y el más caro. PASO 0: un timestamp arriba del system prompt. Parece inofensivo, incluso prolijo. Pero el cache es un match de prefijo: cambió el primer byte, se invalidó TODO lo que viene después — 188 mil tokens a precio lleno, en cada llamada, para siempre. La evidencia es cache_read_input_tokens en cero. PASO 1: la regla. Lo que no cambia va adelante, lo que cambia va al final. Y el orden del prefijo es tools, system, messages. Dato para el que pregunte: si el prefijo es más corto que el mínimo del modelo (entre 512 y 4096 tokens), directamente no cachea, y tampoco te avisa.",
  transition: "fade",
};

export default function RomperElCache() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Cómo se rompe el cache</h2>
      <CodigoPar>
        <Codigo archivo="así no" className="reveal">
          {"system = [{\n"}
          {'  "type": '}
          <span className="st">{'"text"'}</span>
          {",\n"}
          {'  "text": '}
          <span className="fn">{"f\"Hoy es {datetime.now()}.\\n\""}</span>
          {"\n"}
          {"          + INSTRUCCIONES,\n"}
          {'  "cache_control": {'}
          <span className="st">{'"type": "ephemeral"'}</span>
          {"}\n"}
          {"}]\n\n"}
          <span className="cm">{"// cache_read_input_tokens: 0\n"}</span>
          <span className="cm">{"// siempre. en cada llamada."}</span>
        </Codigo>
        <Paso n={1}>
          <Codigo archivo="así sí">
            {"system = [{\n"}
            {'  "type": '}
            <span className="st">{'"text"'}</span>
            {",\n"}
            {'  "text": INSTRUCCIONES,   '}
            <span className="cm">{"// estable"}</span>
            {"\n"}
            {'  "cache_control": {'}
            <span className="st">{'"type": "ephemeral"'}</span>
            {"}\n"}
            {"}]\n"}
            <span className="cm">{"// la fecha va al final, con el pedido\n"}</span>
            {"messages = [..., {"}
            <span className="st">{'"role": "user"'}</span>
            {", ...}]"}
          </Codigo>
        </Paso>
      </CodigoPar>
      <Paso n={1} className="arq-remate">
        El cache es un <b>match de prefijo</b>: lo estable adelante, lo que cambia al final. El orden es{" "}
        <b>tools → system → messages</b>.
      </Paso>
    </SlideFrame>
  );
}
