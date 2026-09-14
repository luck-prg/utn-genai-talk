import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "01 · Por qué la IA sola no alcanza",
  seccion: "SECCIÓN",
  transition: "zoom",
};

export default function Seccion01() {
  return (
    <SlideFrame meta="SECCIÓN" center>
      <div className="display reveal accent" style={{ fontSize: "var(--fs-numbig)", lineHeight: 0.8 }}>
        01
      </div>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Por qué la IA
        <br />
        sola no alcanza
      </h2>
    </SlideFrame>
  );
}
