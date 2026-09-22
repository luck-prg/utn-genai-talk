import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 2.1.4 Conclusiones",
  seccion: "BLOQUE 2.1 · CONCLUSIONES",
  transition: "fade",
};

export default function Falta214() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONCLUSIONES" center>
      <Placeholder item="2.1.4" title="Conclusiones" />
    </SlideFrame>
  );
}
