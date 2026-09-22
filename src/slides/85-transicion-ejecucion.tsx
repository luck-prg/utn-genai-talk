import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";
import { DivisorOrador } from "@/components/DivisorOrador";

export const meta: SlideMeta = {
  title: "Y del lado de la ejecución…",
  seccion: "BLOQUE 2.2",
  variante: "orador",
  transition: "fade",
};

export default function TransicionEjecucion() {
  return (
    <SlideFrame
      meta="BLOQUE 2.2"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="atencionToken" style={{ left: "6vw", bottom: "12vh", width: "min(20vw, 310px)" }} />
          <Croquis nombre="temperatura" style={{ right: "6vw", bottom: "13vh", width: "min(21vw, 320px)" }} />
        </>
      }
    >
      <DivisorOrador frase="Y del lado de la ejecución…" />
    </SlideFrame>
  );
}
