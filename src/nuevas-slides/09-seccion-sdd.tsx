import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Spec-Driven Development",
  seccion: "SECCIÓN",
  notes: "Medio minuto. Respirá: acá arrancan los treinta minutos centrales del bloque.",
  transition: "zoom",
};

export default function SeccionSdd() {
  return (
    <SlideFrame meta="SECCIÓN" center>
      <div
        className="display reveal accent"
        style={{ fontSize: "var(--fs-numbig)", lineHeight: 0.8 }}
      >
        SDD
      </div>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Spec-Driven
        <br />
        Development
      </h2>
    </SlideFrame>
  );
}
