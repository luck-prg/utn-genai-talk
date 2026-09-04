import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "02 · Context Engineering",
  seccion: "SECCIÓN",
  transition: "zoom",
};

export default function Seccion02() {
  return (
    <SlideFrame meta="SECCIÓN" center>
      <div className="display reveal accent" style={{ fontSize: "var(--fs-numbig)", lineHeight: 0.8 }}>
        02
      </div>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Context
        <br />
        Engineering
      </h2>
      <p className="sub reveal mt-s maxw">
        Diseñar el contexto del agente: programamos agentes efectivos.
      </p>
    </SlideFrame>
  );
}
