import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Demo: la misma pregunta, dos respuestas",
  seccion: "1.1.3 · HERRAMIENTAS",
  steps: 4,
  notes:
    "Esta demo vale más que cualquier gráfico, y conviene hacerla en vivo si da el tiempo. Le preguntás a un agente sin herramientas cuántos tests tiene el proyecto: te da un número plausible, con total seguridad, inventado — no hay nada en el tono que delate que se lo acaba de inventar. Le das rg, algo tan simple como un rg --count-matches sobre los archivos de test, y volvés a preguntar: te da el número real. Mismo modelo, misma pregunta, dos respuestas: una plausible y una verdadera. La diferencia no es el modelo, es que la segunda vez miró. Esto conecta directo con lo del principio: el sistema privilegia lo plausible sobre lo verídico, y las tools son la forma de cerrar esa brecha. El modelo no necesita imaginar el estado del sistema, puede observarlo. Y si puede observar, puede iterar.",
  transition: "fade",
};

export default function DemoSinTools() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.3 · HERRAMIENTAS">

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        Mismo modelo, <span className="accent">dos respuestas</span>
      </h2>

      <div className="versus mt-l">
        <Paso n={1} className="vs-col reserva">
          <div className="vs-tag">sin herramientas</div>
          <div className="vs-num grande">47</div>
          <div className="vs-body">se lo inventó</div>
        </Paso>

        <Paso n={2} className="vs-col acc reserva">
          <div className="vs-tag">con rg</div>
          <div className="vs-num grande">1.284</div>
          <div className="vs-body">miró</div>
        </Paso>
      </div>

      <Paso n={3} className="mt-l">
        <div className="bar">
          <span>
            Si puede <b className="accent">observar</b>, puede iterar.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
