import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 1 · 1.3 IA sin ingeniería",
  seccion: "BLOQUE 1 · 1.3",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque13() {
  return (
    <SlideFrame
      meta="BLOQUE 1 · 1.3"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="senalRuido" style={{ right: "7vw", top: "17vh", width: "min(19vw, 280px)" }} />
          <Croquis nombre="varianza" style={{ right: "5vw", bottom: "10vh", width: "min(21vw, 310px)" }} />
          <Croquis nombre="costoContexto" style={{ left: "5vw", bottom: "7vh", width: "min(20vw, 300px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 1 · 1.3</p>
      <h2 className="display corte-title reveal mt-m">IA sin ingeniería</h2>
    </SlideFrame>
  );
}
