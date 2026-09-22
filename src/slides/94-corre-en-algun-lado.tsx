import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El modelo corre en algún lado",
  seccion: "3.1 · MODELOS",
  steps: 3,
  notes:
    "Este es el punto que más les cuesta. El modelo siempre corre sobre hardware concreto: no hay magia en la nube. Son dos opciones — una GPU tuya, o la GPU de un tercero del otro lado de una llamada HTTP. Si es local, tenés control total y costo marginal cero, pero lo pagás en hardware y casi siempre en calidad. Si es remoto, hay cuatro consecuencias: pagás por token, y entrada y salida no cuestan igual — eso ya lo entendemos, prefill paralelo contra decode secuencial; se suma latencia de red a la de inferencia; y tus datos salen de tu máquina, que es un problema de cumplimiento y no de gusto.",
  transition: "fade",
};

export default function CorreEnAlgunLado() {
  return (
    <SlideFrame header={false} footer={false} meta="3.1 · MODELOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        No hay nube: hay <span className="accent">la GPU de otro</span>
      </h2>

      <Paso n={1} className="mt-l">
        <div className="versus">
          <div className="vs-col">
            <div className="vs-tag">local</div>
            <div className="vs-num grande">tu VRAM</div>
            <div className="vs-body">control total, lo pagás en hardware</div>
          </div>
          <div className="vs-col acc">
            <div className="vs-tag">remoto</div>
            <div className="vs-num grande">la de otro</div>
            <div className="vs-body">pagás por token, y tus datos salen</div>
          </div>
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            Que los datos salgan es <b className="accent">cumplimiento</b>, no gusto.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
