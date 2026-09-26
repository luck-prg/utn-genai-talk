import { Fragment } from "react";
import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "El método científico",
  seccion: "3.2.1 · EL MÉTODO",
  notes:
    "El ejemplo que nadie puede decir que no conoce. El punto no es la ciencia: es que los pasos y su orden están decididos ANTES de empezar, y por eso el resultado se puede repetir y refutar.",
  transition: "fade",
};

const PASOS: { label: string; picto: PictoName }[] = [
  { label: "Observación", picto: "observe" },
  { label: "Pregunta", picto: "why" },
  { label: "Hipótesis", picto: "idea" },
  { label: "Experimento", picto: "spike" },
  { label: "Análisis", picto: "analyze" },
  { label: "Conclusión", picto: "test" },
];

export default function MetodoCientifico() {
  return (
    <SlideFrame header={false} footer={false} meta="EL MÉTODO">
      <h2 className="display t-md reveal">El método científico</h2>
      <div className="loop mt-l reveal" style={{ alignItems: "flex-end" }}>
        {PASOS.map((paso, i) => (
          <Fragment key={paso.label}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(8px, 0.8vw, 16px)",
                color: "var(--color-fg)",
              }}
            >
              <Picto name={paso.picto} />
              <span className={i === 0 ? "step acc" : "step"}>{paso.label}</span>
            </div>
            {i < PASOS.length - 1 && (
              <span className="arr" style={{ paddingBottom: "clamp(10px, 0.9vw, 20px)" }}>
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>
      <h2 className="display mt-l reveal" style={{ fontSize: "var(--fs-stmt)" }}>
        El orden está decidido <span className="accent">antes</span> de empezar.
      </h2>
    </SlideFrame>
  );
}
