import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "04 · Evals",
  seccion: "SECCIÓN",
  transition: "zoom",
};

export default function Seccion04() {
  return (
    <SlideFrame meta="SECCIÓN" center>
      <div className="display reveal accent" style={{ fontSize: "var(--fs-numbig)", lineHeight: 0.8 }}>
        04
      </div>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Evals
      </h2>
      <p className="sub reveal mt-s maxw">Si no lo medís, no sabés si tu agente mejora o empeora.</p>
    </SlideFrame>
  );
}
