import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 4.2 Conclusiones",
  seccion: "BLOQUE 4 · CONCLUSIONES",
  transition: "fade",
};

export default function Falta42() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 4 · CONCLUSIONES" center>
      <Placeholder item="4.2" title="Conclusiones" />
    </SlideFrame>
  );
}
