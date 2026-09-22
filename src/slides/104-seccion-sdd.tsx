import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";

export const meta: SlideMeta = {
  title: "Spec-Driven Development",
  seccion: "SECCIÓN",
  notes: "Medio minuto. Respirá: acá arrancan los treinta minutos centrales del bloque.",
  transition: "zoom",
};

export default function SeccionSdd() {
  return (
    <SlideFrame
      meta="SECCIÓN"
      center
      footer={false}
      after={
        <>
          <Croquis nombre="specCodigo" style={{ right: "7vw", top: "18vh", width: "min(18vw, 270px)" }} />
          <Croquis nombre="specDriven" style={{ right: "4vw", bottom: "9vh", width: "min(28vw, 460px)" }} />
        </>
      }
    >
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
