import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArquitecturaAgente } from "@/components/ArquitecturaAgente";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "Qué hay adentro de un agente (2)",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 3,
  notes:
    "Retoma el diagrama donde lo dejamos: harness, memoria y modelo ya están. PASO 1: aparece el constructor de contexto — el input ya no va directo al modelo: en cada llamada se arma un paquete con todo el historial y se manda entero. Acá está la clave del costo. PASO 2: permisos y ejecución de tools, que cierran el loop: el modelo pide una tool, el harness chequea permisos, la ejecuta y mete el resultado en el historial. Eso es el agent loop.",
  transition: "none",
};

export default function CicloAgenticoCompleto() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO" bodyClass="a-sangre">
      <h2 className="display t-md reveal">Qué hay adentro de un agente</h2>
      {/* Arranca con lo que ya quedó dibujado en la diapositiva 26. */}
      <ArquitecturaAgente base={1} />
      <Paso n={2} className="arq-remate">
        Cada vuelta del loop vuelve a mandar <b>todo el historial</b>: el contexto se paga en cada llamada.
      </Paso>
    </SlideFrame>
  );
}
