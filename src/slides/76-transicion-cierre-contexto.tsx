import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";
import { DivisorOrador } from "@/components/DivisorOrador";

export const meta: SlideMeta = {
  title: "Cerrando la idea",
  seccion: "BLOQUE 2.1",
  variante: "orador",
  transition: "fade",
};

export default function TransicionCierreContexto() {
  return (
    <SlideFrame
      meta="BLOQUE 2.1"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="entornoAgente" style={{ left: "6vw", bottom: "13vh", width: "min(20vw, 310px)" }} />
          <Croquis nombre="varianza" style={{ right: "6vw", bottom: "15vh", width: "min(18vw, 260px)" }} />
        </>
      }
    >
      <DivisorOrador frase="Cerrando la idea" />
    </SlideFrame>
  );
}
