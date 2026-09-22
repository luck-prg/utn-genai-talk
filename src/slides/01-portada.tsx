import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Croquis } from "@/components/Croquis";
import { UtnLogo } from "@/components/UtnLogo";

export const meta: SlideMeta = {
  title: "Portada",
  seccion: "Portada",
  notes: "Pantalla inicial mientras arranca la charla.",
  transition: "fade",
};

export default function Portada() {
  return (
    <SlideFrame
      meta=""
      center
      footer={false}
      after={
        <>
          {/* El propio título de la charla, partido en tokens. */}
          <Croquis nombre="tokenizacion" style={{ left: "5vw", bottom: "8vh", width: "min(34vw, 560px)" }} />
          <Croquis nombre="agentLoop" style={{ right: "7vw", bottom: "10vh", width: "min(16vw, 240px)" }} />
          <Croquis nombre="atencionMatriz" style={{ right: "5vw", top: "17vh", width: "min(16vw, 240px)" }} />
          <Croquis nombre="espacioVectorial" style={{ left: "6vw", top: "18vh", width: "min(16vw, 240px)" }} />
        </>
      }
    >
      <div className="cover-row">
        <div className="cover-text">
          <h1
            className="display reveal"
            style={{ fontSize: "clamp(36px,5.4vw,108px)", marginTop: "clamp(10px,1.2vw,24px)" }}
          >
            El proceso
            <br />
            del diseño
            <br />
            empleando <span className="grad-genai">IA Generativa</span>
          </h1>
        </div>
        <UtnLogo className="cover-logo reveal" />
      </div>
    </SlideFrame>
  );
}
