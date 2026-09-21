import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { UtnLogo } from "@/components/UtnLogo";

export const meta: SlideMeta = {
  title: "Bloque 3.2 · Portada",
  seccion: "Portada",
  notes:
    "Pantalla de apertura del bloque 3.2, 35 minutos. Venís justo después de Valen con modelos (3.1). 30 segundos: quién sos, qué bloque estás abriendo y qué se llevan al final. Recap hablado: el bloque 1 fue qué es GenAI y cómo funciona (Valen, Lucho, Sofi), el 2 ingeniería de contexto (Lucho, y la skill la diste vos), recién Valen habló de modelos. Este es cómo desarrollar con agentes.",
  transition: "fade",
};

export default function Portada() {
  return (
    <SlideFrame meta="[ BLOQUE 3.2 · 35:00 ]" center footer={false}>
      <div className="cover-row">
        <div className="cover-text">
          <p className="eyebrow reveal">BLOQUE 3.2 · ENFOQUES METODOLÓGICOS</p>
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
