import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 2.2.3 Pirámide (parte de ejecución)",
  seccion: "BLOQUE 2.2 · PIRÁMIDE",
  transition: "fade",
};

export default function Falta223() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.2 · PIRÁMIDE" center>
      <Placeholder item="2.2.3" title="Pirámide de ejemplo (parte de ejecución)" />
    </SlideFrame>
  );
}
