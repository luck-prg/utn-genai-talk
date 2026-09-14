import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Context is the new code",
  seccion: "BLOQUE 6 · CIERRE",
  transition: "curtain",
};

export default function ContextIsTheNewCode() {
  return (
    <SlideFrame meta="BLOQUE 6 · CIERRE">
      <p className="prompt reveal">&gt; echo $FILOSOFIA</p>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)", marginTop: "clamp(16px,1.8vw,36px)" }}>
        Context is
        <br />
        the <span className="accent">new code</span>.
      </h2>
    </SlideFrame>
  );
}
