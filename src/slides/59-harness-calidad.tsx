import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Calidad y contexto",
  seccion: "BLOQUE 2.1 · HARNESS",
  transition: "fade",
};

export default function HarnessCalidad() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS">
      <div className="harness-map">
        <HarnessDonut revelados={["flujos", "calidad"]} />
        <div className="reveal">
          <p className="eyebrow">›// propósito 2</p>
          <h2
            className="display harness-title mt-s"
            style={{ color: grupoHarness("calidad").color }}
          >
            Calidad y contexto
          </h2>
          <p className="sub mt-s">Que el agente entienda el proyecto y no invente.</p>
          <ul className="blist mt-m">
            <li>
              <span>
                <b>Rules</b>: convenciones y restricciones que se respetan siempre.
              </span>
            </li>
            <li>
              <span>
                <b>MCP</b>: contexto externo y vivo — tickets, documentación, datos.
              </span>
            </li>
            <li>
              <span>
                <b>Skills</b>: conocimiento reutilizable que entra solo cuando hace falta.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
