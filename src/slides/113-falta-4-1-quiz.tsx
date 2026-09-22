import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 4.1 Quiz",
  seccion: "BLOQUE 4 · QUIZ",
  transition: "fade",
};

export default function Falta41() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 4 · QUIZ" center>
      <Placeholder item="4.1" title="Quiz" />
    </SlideFrame>
  );
}
