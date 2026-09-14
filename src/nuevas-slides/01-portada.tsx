import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { UtnLogo } from "@/components/UtnLogo";

export const meta: SlideMeta = {
  title: "Track 03 · Portada",
  seccion: "Portada",
  notes:
    "Pantalla de apertura del track. 30 segundos: quién sos, qué track estás abriendo y qué se llevan al final.",
  transition: "fade",
};

export default function Portada() {
  return (
    <SlideFrame meta="[ TRACK 03 · 45:00 ]" center footer={false}>
      <div className="cover-row">
        <div className="cover-text">
          <p className="eyebrow reveal">TRACK 03 · ENFOQUES METODOLÓGICOS</p>
          <h1
            className="display reveal"
            style={{ fontSize: "clamp(32px,4.6vw,92px)", marginTop: "clamp(10px,1.2vw,24px)" }}
          >
            Cómo desarrollar
            <br />
            de forma efectiva
            <br />
            con <span className="accent">agentes</span>
          </h1>
          <p className="sub reveal mt-m">
            Del prompt suelto a la spec como contrato de trabajo.
          </p>
        </div>
        <UtnLogo className="cover-logo reveal" />
      </div>
    </SlideFrame>
  );
}
