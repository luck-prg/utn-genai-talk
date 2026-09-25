import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Codigo, CodigoPar } from "@/components/Codigo";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "La factura",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "El objeto usage que devuelve cada llamada — esto no es una métrica que armes vos, viene en la respuesta. PASO 0: la primera llamada escribe el cache: 188 mil tokens a precio de escritura (~1,25x). PASO 1: la segunda llamada, con el mismo prefijo, los lee: los mismos 188 mil tokens a ~10% del precio. Decí el número en voz alta: la misma información, diez veces más barata, sólo por no haber cambiado el principio del prompt. Aclará que los precios exactos cambian seguido; lo que importa es el ratio.",
  transition: "fade",
};

export default function LaFactura() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Cada respuesta te dice cuánto costó</h2>
      <CodigoPar>
        <Codigo archivo="primera llamada · usage" className="reveal">
          <span className="cm">{"// el prefijo se escribe al cache\n"}</span>
          {'"usage": {\n'}
          {'  "input_tokens": '}
          <span className="pr">{"412"}</span>
          {",\n"}
          {'  "cache_creation_input_tokens": '}
          <span className="fn">{"188.086"}</span>
          {",\n"}
          {'  "cache_read_input_tokens": '}
          <span className="pr">{"0"}</span>
          {",\n"}
          {'  "output_tokens": '}
          <span className="pr">{"304"}</span>
          {"\n}"}
        </Codigo>
        <Paso n={1}>
          <Codigo archivo="segunda llamada · usage">
            <span className="cm">{"// mismo prefijo: sale del cache\n"}</span>
            {'"usage": {\n'}
            {'  "input_tokens": '}
            <span className="pr">{"631"}</span>
            {",\n"}
            {'  "cache_creation_input_tokens": '}
            <span className="pr">{"0"}</span>
            {",\n"}
            {'  "cache_read_input_tokens": '}
            <span className="st">{"188.086"}</span>
            {",\n"}
            {'  "output_tokens": '}
            <span className="pr">{"287"}</span>
            {"\n}"}
          </Codigo>
        </Paso>
      </CodigoPar>
      <Paso n={1} className="arq-remate">
        Los mismos 188.086 tokens: la segunda vez salen <b>~10 veces más baratos</b>.
      </Paso>
    </SlideFrame>
  );
}
