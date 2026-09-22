import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 2.1 · Context Engineering",
  seccion: "BLOQUE 2.1",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque21() {
  return (
    <SlideFrame
      meta="BLOQUE 2.1"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="entornoAgente" style={{ right: "4vw", bottom: "9vh", width: "min(26vw, 430px)" }} />
          <Croquis nombre="senalRuido" style={{ right: "8vw", top: "16vh", width: "min(17vw, 250px)" }} />
          <Croquis nombre="ventanaContexto" style={{ left: "5vw", bottom: "7vh", width: "min(24vw, 380px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 2.1</p>
      <h2 className="display corte-title reveal mt-m">Context Engineering</h2>
      <p className="sub corte-sub reveal mt-m">
        Diseñar el contexto del agente es diseñar el agente.
      </p>
    </SlideFrame>
  );
}
