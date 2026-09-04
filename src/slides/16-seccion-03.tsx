import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "03 · Spec-Driven Development",
  seccion: "SECCIÓN",
  transition: "zoom",
};

export default function Seccion03() {
  return (
    <SlideFrame meta="SECCIÓN" center>
      <div className="display reveal accent" style={{ fontSize: "var(--fs-numbig)", lineHeight: 0.8 }}>
        03
      </div>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Spec-Driven
        <br />
        Development
      </h2>
      <p className="sub reveal mt-s maxw">Las specs son el artefacto principal. El código es una consecuencia.</p>
    </SlideFrame>
  );
}
