import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "La conversación crece",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  steps: 4,
  notes:
    "Una vuelta por paso. Lo que tienen que ver es que el array messages nunca se achica: cada tool_use y cada tool_result quedan adentro, y todo eso se vuelve a mandar en la llamada siguiente. Señalá la columna de tokens: en cuatro vueltas de una tarea trivial ya multiplicaste por cuatro. Y esto es una tarea de juguete; una sesión real son decenas de vueltas. Remate: no estás pagando tu último mensaje, estás pagando toda la conversación, otra vez.",
  transition: "fade",
};

/** Una tarea de juguete: lo que se manda en cada vuelta del loop. */
const VUELTAS = [
  { n: 1, manda: "system + tools + tu pedido", entradas: 2, tokens: "1.400" },
  { n: 2, manda: "…+ el pedido de tool y su resultado", entradas: 4, tokens: "3.100" },
  { n: 3, manda: "…+ la segunda tool y su resultado", entradas: 6, tokens: "6.800" },
  { n: 4, manda: "…+ la tercera tool y su resultado", entradas: 8, tokens: "12.400" },
];

export default function LaConversacionCrece() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">La conversación crece</h2>
      <div className="vueltas mt-m">
        <div className="vuelta vuelta-head">
          <span>vuelta</span>
          <span>qué se manda</span>
          <span>entradas</span>
          <span>tokens</span>
        </div>
        {VUELTAS.map((v, i) => (
          <Paso n={i} key={v.n} className="vuelta">
            <span className="vuelta-n">{String(v.n).padStart(2, "0")}</span>
            <span>{v.manda}</span>
            <span>{v.entradas}</span>
            <span className="vuelta-tokens">{v.tokens}</span>
          </Paso>
        ))}
      </div>
      <Paso n={3} className="arq-remate">
        No pagás tu último mensaje: pagás <b>toda la conversación</b>, otra vez.
      </Paso>
    </SlideFrame>
  );
}
