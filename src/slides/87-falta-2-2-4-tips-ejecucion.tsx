import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 2.2.4 Tips para la ejecución",
  seccion: "BLOQUE 2.2 · PIRÁMIDE",
  transition: "fade",
};

export default function Falta224() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.2 · PIRÁMIDE" center>
      <Placeholder item="2.2.4" title="Tips para llevar a cabo la parte de ejecución" />
    </SlideFrame>
  );
}
