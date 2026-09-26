import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "¿Preguntas?",
  seccion: "BLOQUE 4 · CIERRE",
  transition: "zoom",
};

export default function Cierre() {
  return (
    <SlideFrame
      meta="BLOQUE 4 · CIERRE"
      footer={false}
      after={
        <>
          <Croquis nombre="espacioVectorial" style={{ right: "6vw", top: "20vh", width: "min(19vw, 290px)" }} />
          <Croquis nombre="agentLoop" style={{ right: "8vw", bottom: "11vh", width: "min(16vw, 240px)" }} />
          <Croquis nombre="specDriven" style={{ left: "5vw", bottom: "8vh", width: "min(26vw, 430px)" }} />
          <Croquis nombre="gradiente" style={{ left: "6vw", top: "19vh", width: "min(24vw, 400px)" }} />
        </>
      }
    >
      <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)", marginTop: "clamp(16px,1.8vw,36px)" }}>
        ¿<span className="accent">Preguntas</span>?
      </h2>
    </SlideFrame>
  );
}
