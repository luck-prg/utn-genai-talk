import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Dos productos, no uno",
  seccion: "2.2.2 · PIRÁMIDE",
  steps: 3,
  notes:
    "Puente entre la portada de sección y la votación. La idea: hasta acá la charla habló de usar agentes para construir el producto. Pero el agente —modelo + harness— es en sí mismo algo que se diseña, se prueba y se mejora, con su propio ciclo de trabajo. Nivel de madurez ya no es solo 'qué tan bien uso la IA', es 'qué tan bien construyo al que construye conmigo'.",
  transition: "fade",
};

export default function DosProductos() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.2 · PIRÁMIDE">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        No solo se desarrolla <span className="accent">el producto</span>
      </h2>
      <p className="sub reveal mt-s">
        También se desarrolla <b>el agente</b> que lo construye.
      </p>

      <div className="versus mt-l">
        <Paso n={1} className="vs-col reserva">
          <div className="vs-tag">de lo que ya hablamos</div>
          <div className="vs-num chico">el producto</div>
          <div className="vs-body">El software que le resuelve el problema al usuario.</div>
        </Paso>

        <Paso n={2} className="vs-col acc reserva">
          <div className="vs-tag">lo que falta nombrar</div>
          <div className="vs-num chico">el agente</div>
          <div className="vs-body">Modelo + harness. También se diseña, se prueba y se mejora.</div>
        </Paso>
      </div>

      <Paso n={3} className="mt-m">
        <div className="bar">
          <span>
            El desarrollo del producto y el <b>del agente que lo construye</b> forman parte del
            mismo trabajo.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
