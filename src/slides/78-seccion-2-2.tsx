import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 2.2 · De 2023 a hoy, y cómo se ejecuta",
  seccion: "BLOQUE 2.2",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque22() {
  return (
    <SlideFrame
      meta="BLOQUE 2.2"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="ventanaContexto" style={{ right: "4vw", bottom: "9vh", width: "min(28vw, 460px)" }} />
          <Croquis nombre="costoContexto" style={{ right: "7vw", top: "16vh", width: "min(19vw, 290px)" }} />
          <Croquis nombre="gradiente" style={{ left: "5vw", bottom: "7vh", width: "min(26vw, 430px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 2.2</p>
      <h2 className="display corte-title reveal mt-m">De 2023 a hoy, y cómo se ejecuta</h2>
    </SlideFrame>
  );
}
