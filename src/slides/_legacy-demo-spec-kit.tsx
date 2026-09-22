import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { SpecKitTerminal } from "@/components/SpecKitTerminal";

export const meta: SlideMeta = {
  title: "spec-kit en acción",
  seccion: "BLOQUE 3 · DEMO",
  transition: "fade",
};

export default function DemoSpecKit() {
  return (
    <SlideFrame meta="BLOQUE 3 · DEMO">
      <p className="prompt reveal">&gt; ./demo --spec-kit</p>
      <h2 className="display t-md reveal mt-s">spec-kit en acción</h2>
      <SpecKitTerminal />
    </SlideFrame>
  );
}
