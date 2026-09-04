import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { UtnLogo } from "@/components/UtnLogo";

export const meta: SlideMeta = {
  title: "Portada",
  seccion: "Portada",
  notes: "Pantalla inicial mientras arranca la charla.",
  transition: "fade",
};

export default function Portada() {
  return (
    <SlideFrame meta="[ DURACIÓN 02:00 ]" center footer={false}>
      <div className="cover-row">
        <div className="cover-text">
          <p className="prompt reveal">&gt; ./charla-genai --utn-frba</p>
          <h1
            className="display reveal"
            style={{ fontSize: "clamp(36px,5.4vw,108px)", marginTop: "clamp(10px,1.2vw,24px)" }}
          >
            Diseñando
            <br />
            el futuro del
            <br />
            desarrollo con <span className="accent">GenAI</span>
          </h1>
        </div>
        <UtnLogo className="cover-logo reveal" />
      </div>
    </SlideFrame>
  );
}
