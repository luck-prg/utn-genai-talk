import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";
import { DivisorOrador } from "@/components/DivisorOrador";

export const meta: SlideMeta = {
  title: "Última posta",
  seccion: "BLOQUE 4",
  variante: "orador",
  transition: "fade",
};

export default function TransicionConclusiones() {
  return (
    <SlideFrame
      meta="BLOQUE 4"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="espacioVectorial" style={{ left: "6vw", bottom: "14vh", width: "min(18vw, 270px)" }} />
          <Croquis nombre="agentLoop" style={{ right: "6vw", bottom: "14vh", width: "min(17vw, 250px)" }} />
        </>
      }
    >
      <DivisorOrador frase="Última posta" />
    </SlideFrame>
  );
}
