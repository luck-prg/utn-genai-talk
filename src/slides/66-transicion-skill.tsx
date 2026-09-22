import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";
import { DivisorOrador } from "@/components/DivisorOrador";

export const meta: SlideMeta = {
  title: "Un ejemplo real: una skill",
  seccion: "BLOQUE 2.1",
  variante: "orador",
  transition: "fade",
};

export default function TransicionSkill() {
  return (
    <SlideFrame
      meta="BLOQUE 2.1"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="specCodigo" style={{ left: "6vw", bottom: "14vh", width: "min(17vw, 250px)" }} />
          <Croquis nombre="entornoAgente" style={{ right: "6vw", bottom: "13vh", width: "min(20vw, 310px)" }} />
        </>
      }
    >
      <DivisorOrador frase="Un ejemplo real: una skill" />
    </SlideFrame>
  );
}
