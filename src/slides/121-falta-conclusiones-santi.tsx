import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] Conclusiones de Santi",
  seccion: "BLOQUE 4",
  transition: "fade",
};

export default function FaltaConclusionesSanti() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 4 · CONCLUSIONES" center>
      <Placeholder item="4" title="Falta agregar conclusiones de Santi" />
    </SlideFrame>
  );
}
