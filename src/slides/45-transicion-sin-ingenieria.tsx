import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";
import { DivisorOrador } from "@/components/DivisorOrador";

export const meta: SlideMeta = {
  title: "Y si nadie diseña el proceso…",
  seccion: "BLOQUE 1.3",
  variante: "orador",
  transition: "fade",
};

export default function TransicionSinIngenieria() {
  return (
    <SlideFrame
      meta="BLOQUE 1.3"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="costoContexto" style={{ left: "6vw", bottom: "14vh", width: "min(19vw, 280px)" }} />
          <Croquis nombre="senalRuido" style={{ right: "6vw", bottom: "14vh", width: "min(17vw, 250px)" }} />
        </>
      }
    >
      <DivisorOrador frase="Y si nadie diseña el proceso…" />
    </SlideFrame>
  );
}
