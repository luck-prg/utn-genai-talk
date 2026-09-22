import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 4 · Para cerrar",
  seccion: "BLOQUE 4",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque4() {
  return (
    <SlideFrame
      meta="BLOQUE 4"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="gradiente" style={{ right: "4vw", bottom: "10vh", width: "min(30vw, 500px)" }} />
          <Croquis nombre="agentLoop" style={{ right: "8vw", top: "17vh", width: "min(19vw, 280px)" }} />
          <Croquis nombre="atencionMatriz" style={{ left: "5vw", bottom: "7vh", width: "min(17vw, 250px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 4</p>
      <h2 className="display corte-title reveal mt-m">Para cerrar</h2>
    </SlideFrame>
  );
}
