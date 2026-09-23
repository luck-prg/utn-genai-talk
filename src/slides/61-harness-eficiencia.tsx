import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut, HarnessKeyword } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Eficiencia y paralelismo",
  seccion: "2.1.2 · HARNESS ENGINEERING",
  notes: "Última parte del gráfico: queda completo. Cerrar con las dos lecturas del mapa.",
  transition: "fade",
};

export default function HarnessEficiencia() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS" bodyClass="a-sangre">
      <div className="harness-stage">
        <h2
          className="display harness-stage-title reveal"
          style={{ color: grupoHarness("eficiencia").color }}
        >
          Eficiencia y paralelismo
        </h2>
        <div className="harness-ring">
          <HarnessDonut revelados={["flujos", "calidad", "control", "eficiencia"]} />
          <HarnessKeyword grupo="flujos" pos="tl">
            Commands · Skills
          </HarnessKeyword>
          <HarnessKeyword grupo="calidad" pos="tr">
            Rules · MCP · Skills
          </HarnessKeyword>
          <HarnessKeyword grupo="control" pos="bl">
            Hooks
          </HarnessKeyword>
          <HarnessKeyword grupo="eficiencia" pos="br">
            Subagents
          </HarnessKeyword>
        </div>
      </div>
    </SlideFrame>
  );
}
