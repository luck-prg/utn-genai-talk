import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Ya comenzamos",
  notes: "Flash inicial: marca el arranque de la charla, un instante antes de la portada.",
  transition: "fade",
};

export default function YaComenzamos() {
  return (
    <SlideFrame meta="" center header={false} footer={false}>
      <h1 className="display reveal" style={{ fontSize: "var(--fs-cover)", textAlign: "center" }}>
        Ya comenzamos
      </h1>
    </SlideFrame>
  );
}
