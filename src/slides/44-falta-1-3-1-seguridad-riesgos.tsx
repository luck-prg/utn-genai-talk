import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 1.3.1 Seguridad y riesgos",
  seccion: "BLOQUE 1.3 · SEGURIDAD Y RIESGOS",
  transition: "fade",
};

export default function Falta131() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.3 · SEGURIDAD Y RIESGOS" center>
      <Placeholder item="1.3.1" title="Seguridad y riesgos" />
    </SlideFrame>
  );
}
