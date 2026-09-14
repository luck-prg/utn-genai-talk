import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tesis central",
  seccion: "BLOQUE 0 · APERTURA",
  transition: "curtain",
};

export default function Tesis() {
  return (
    <SlideFrame meta="BLOQUE 0 · APERTURA">
      <p className="prompt reveal">&gt; tesis --central</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)", marginTop: "clamp(16px,1.8vw,36px)" }}>
        El valor se duplicó porque
        <br />
        hay que saber <span className="accent">ingeniería</span>
        <br />y saber <span className="accent">dirigir agentes</span>.
      </h2>
    </SlideFrame>
  );
}
