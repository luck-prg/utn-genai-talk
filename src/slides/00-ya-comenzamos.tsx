import type { SlideMeta } from "@/deck/types";
import { QrMaterial } from "@/components/QrMaterial";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Ya comenzamos",
  notes:
    "Flash inicial: marca el arranque de la charla, un instante antes de la portada. El QR lleva al documento de la charla; dejalo en pantalla mientras la sala se acomoda.",
  transition: "fade",
};

export default function YaComenzamos() {
  return (
    <SlideFrame meta="" center header={false} footer={false}>
      <QrMaterial>
        <h1 className="display reveal" style={{ fontSize: "var(--fs-cover)" }}>
          Ya comenzamos
        </h1>
      </QrMaterial>
    </SlideFrame>
  );
}
