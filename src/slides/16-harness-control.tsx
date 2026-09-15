import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Control y seguridad",
  seccion: "BLOQUE 2 · HARNESS",
  transition: "fade",
};

export default function HarnessControl() {
  return (
    <SlideFrame meta="BLOQUE 2 · HARNESS">
      <div className="harness-map">
        <HarnessDonut revelados={["flujos", "calidad", "control"]} />
        <div className="reveal">
          <p className="eyebrow">›// propósito 3</p>
          <h2
            className="display harness-title mt-s"
            style={{ color: grupoHarness("control").color }}
          >
            Control y seguridad
          </h2>
          <p className="sub mt-s">Lo que no puede depender de que el modelo se acuerde.</p>
          <ul className="blist mt-m">
            <li>
              <span>
                <b>Hooks</b>: scripts determinísticos en momentos fijos del flujo.
              </span>
            </li>
            <li>
              <span>Formatear, correr los tests o frenar un commit no se piden: se garantizan.</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
