import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Placeholder } from "@/components/Placeholder";

export const meta: SlideMeta = {
  title: "[Falta] 2.1.3 Skill",
  seccion: "BLOQUE 2.1 · SKILL",
  transition: "fade",
};

export default function Falta213() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL" center>
      <Placeholder
        item="2.1.3"
        title="Skill"
        nota="Hoy solo se la menciona de paso en enfoque-metodologico-rama:src/nuevas-slides/16-una-skill.tsx — falta la slide propia de este sub-bloque."
      />
    </SlideFrame>
  );
}
