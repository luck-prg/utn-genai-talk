import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 3 · Elegir el modelo, elegir el método",
  seccion: "BLOQUE 3",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque3() {
  return (
    <SlideFrame
      meta="BLOQUE 3"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="temperatura" style={{ right: "5vw", bottom: "11vh", width: "min(25vw, 400px)" }} />
          <Croquis nombre="espacioVectorial" style={{ right: "8vw", top: "16vh", width: "min(18vw, 270px)" }} />
          <Croquis nombre="specDriven" style={{ left: "5vw", bottom: "7vh", width: "min(24vw, 390px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 3</p>
      <h2 className="display corte-title reveal mt-m">Elegir el modelo, elegir el método</h2>
      <p className="sub corte-sub reveal mt-m">
        Las specs son el artefacto principal. El código es una consecuencia.
      </p>
    </SlideFrame>
  );
}
