import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 1.2 · El ciclo agéntico",
  seccion: "BLOQUE 1.2",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque12() {
  return (
    <SlideFrame
      meta="BLOQUE 1.2"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="agentLoop" style={{ right: "8vw", top: "18vh", width: "min(22vw, 330px)" }} />
          <Croquis nombre="specCodigo" style={{ right: "5vw", bottom: "9vh", width: "min(19vw, 280px)" }} />
          <Croquis nombre="entornoAgente" style={{ left: "5vw", bottom: "7vh", width: "min(22vw, 340px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 1.2</p>
      <h2 className="display corte-title reveal mt-m">El ciclo agéntico</h2>
    </SlideFrame>
  );
}
