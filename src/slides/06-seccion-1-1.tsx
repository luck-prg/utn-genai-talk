import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Bloque 1 · 1.1 Modelos de lenguaje",
  seccion: "BLOQUE 1 · 1.1",
  variante: "corte",
  transition: "curtain",
};

export default function Bloque11() {
  return (
    <SlideFrame
      meta="BLOQUE 1 · 1.1"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="tokenizacion" style={{ right: "4vw", top: "16vh", width: "min(30vw, 500px)" }} />
          <Croquis nombre="atencionMatriz" style={{ right: "7vw", bottom: "8vh", width: "min(18vw, 270px)" }} />
          <Croquis nombre="espacioVectorial" style={{ left: "6vw", bottom: "7vh", width: "min(17vw, 250px)" }} />
        </>
      }
    >
      <p className="corte-kicker reveal">Bloque 1 · 1.1</p>
      <h2 className="display corte-title reveal mt-m">Modelos de lenguaje</h2>
    </SlideFrame>
  );
}
