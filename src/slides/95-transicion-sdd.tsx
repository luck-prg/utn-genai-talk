import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 3 · 3.2 Spec-Driven Development",
  seccion: "BLOQUE 3 · 3.2",
  variante: "corte",
  transition: "curtain",
  notes:
    "Apertura del bloque 3.2, 35 minutos. Venís justo después de modelos (3.1). Treinta segundos: quién sos, qué bloque abrís y qué se llevan al final. Recap hablado: el bloque 1 fue qué es GenAI y cómo funciona, el 2 ingeniería de contexto y la skill, recién se habló de modelos. Este es cómo desarrollar con agentes.",
};

export default function TransicionSdd() {
  return (
    <SlideFrame
      meta="BLOQUE 3 · 3.2"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="specDriven" style={{ right: "5vw", bottom: "10vh", width: "min(26vw, 430px)" }} />
          <Croquis nombre="specCodigo" style={{ left: "5vw", bottom: "9vh", width: "min(19vw, 280px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 3 · 3.2</p>
      <h2 className="display corte-title reveal mt-m">El método: Spec-Driven Development</h2>
      <p className="sub corte-sub reveal mt-m">Del prompt suelto a la spec como contrato de trabajo.</p>
    </SlideFrame>
  );
}
