import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness Engineering",
  seccion: "BLOQUE 2.1 · HARNESS",
  transition: "fade",
};

export default function HarnessEngineering() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS" center>
      <h2 className="display reveal mt-s" style={{ fontSize: "var(--fs-section)" }}>
        Harness
        <br />
        <span className="accent">Engineering</span>
      </h2>
      <p className="sub reveal mt-m maxw">
        Construir el andamiaje del proyecto: reglas, comandos, tools y automatizaciones que el
        agente usa siempre, sin que se las tengas que repetir.
      </p>
    </SlideFrame>
  );
}
