import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 3 · 3.2 Enfoques metodológicos",
  seccion: "BLOQUE 3 · 3.2",
  variante: "corte",
  transition: "curtain",
  notes:
    "Apertura del bloque 3.2, 35 minutos. Venís justo después de modelos (3.1). Treinta segundos: quién sos, qué bloque abrís y qué se llevan al final. Recap hablado: el bloque 1 fue qué es GenAI y cómo funciona, el 2 ingeniería de contexto y la skill, recién se habló de modelos. Este es cómo trabajar con agentes con método. No nombres todavía Spec-Driven Development: primero qué es un método y para qué sirve, después llega SDD.",
};

export default function TransicionSdd() {
  return (
    <SlideFrame
      meta="BLOQUE 3 · 3.2"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="entornoAgente" style={{ right: "5vw", bottom: "10vh", width: "min(24vw, 400px)" }} />
          <Croquis nombre="agentLoop" style={{ left: "5vw", bottom: "9vh", width: "min(17vw, 260px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 3 · 3.2</p>
      <h2 className="display corte-title reveal mt-m">Enfoques metodológicos</h2>
      <p className="sub corte-sub reveal mt-m">Cómo usar agentes de IA de forma efectiva: del prompt suelto al trabajo con método.</p>
    </SlideFrame>
  );
}
