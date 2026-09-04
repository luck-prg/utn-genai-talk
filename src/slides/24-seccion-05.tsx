import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "05 · Orquestación de agentes",
  seccion: "SECCIÓN",
  transition: "zoom",
};

export default function Seccion05() {
  return (
    <SlideFrame meta="SECCIÓN" center>
      <div className="display reveal accent" style={{ fontSize: "var(--fs-numbig)", lineHeight: 0.8 }}>
        05
      </div>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Orquestación
        <br />
        de agentes
      </h2>
    </SlideFrame>
  );
}
