import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 0 · Bienvenidos",
  seccion: "BLOQUE 0",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque0() {
  return (
    <SlideFrame
      meta="BLOQUE 0"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="agentLoop" style={{ right: "6vw", top: "17vh", width: "min(20vw, 300px)" }} />
          <Croquis nombre="tokenizacion" style={{ right: "4vw", bottom: "9vh", width: "min(30vw, 480px)" }} />
          <Croquis nombre="varianza" style={{ left: "5vw", bottom: "7vh", width: "min(18vw, 260px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 0</p>
      <h2 className="display corte-title reveal mt-m">Bienvenidos</h2>
    </SlideFrame>
  );
}
