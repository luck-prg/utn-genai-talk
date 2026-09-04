import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es vibe-coding?",
  seccion: "BLOQUE 0 · APERTURA",
  transition: "fade",
};

export default function VibeCoding() {
  return (
    <SlideFrame meta="BLOQUE 0 · APERTURA">
      <p className="prompt reveal">&gt; define</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)", marginTop: "clamp(16px,1.8vw,36px)" }}>
        ¿Qué es
        <br />
        <span className="accent">vibe-codear</span>?
      </h2>
    </SlideFrame>
  );
}
