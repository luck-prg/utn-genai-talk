import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Flujos",
  seccion: "2.1.2 · HARNESS ENGINEERING",
  transition: "none",
};

export default function HarnessFlujos() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · HARNESS" bodyClass="a-sangre">
      <div className="harness-stage">
        <h2
          className="display harness-stage-title reveal"
          style={{ color: grupoHarness("flujos").color }}
        >
          Flujos
        </h2>
        <div className="harness-ring">
          <HarnessDonut revelados={["flujos"]} />
        </div>
      </div>
    </SlideFrame>
  );
}
