import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut, HarnessKeyword } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Control y seguridad",
  seccion: "2.1.2 · HARNESS ENGINEERING",
  transition: "fade",
};

export default function HarnessControl() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS" bodyClass="a-sangre">
      <div className="harness-stage">
        <h2
          className="display harness-stage-title reveal"
          style={{ color: grupoHarness("control").color }}
        >
          Control y seguridad
        </h2>
        <div className="harness-ring">
          <HarnessDonut revelados={["flujos", "calidad", "control"]} />
          <HarnessKeyword grupo="flujos" pos="tl">
            Commands · Skills
          </HarnessKeyword>
          <HarnessKeyword grupo="calidad" pos="tr">
            Rules · MCP · Skills
          </HarnessKeyword>
          <HarnessKeyword grupo="control" pos="bl">
            Hooks
          </HarnessKeyword>
        </div>
      </div>
    </SlideFrame>
  );
}
