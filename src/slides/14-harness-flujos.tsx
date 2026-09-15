import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Flujos",
  seccion: "BLOQUE 2 · HARNESS",
  transition: "fade",
};

export default function HarnessFlujos() {
  return (
    <SlideFrame meta="BLOQUE 2 · HARNESS">
      <div className="harness-map">
        <HarnessDonut revelados={["flujos"]} />
        <div className="reveal">
          <p className="eyebrow">›// propósito 1</p>
          <h2
            className="display harness-title mt-s"
            style={{ color: grupoHarness("flujos").color }}
          >
            Flujos
          </h2>
          <p className="sub mt-s">Cómo se ejecuta el trabajo que se repite.</p>
          <ul className="blist mt-m">
            <li>
              <span>
                <b>Commands</b>: los pasos para resolver un problema concreto, invocados a mano.
              </span>
            </li>
            <li>
              <span>
                <b>Skills</b>: el mismo flujo, pero el agente lo invoca solo cuando corresponde.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
