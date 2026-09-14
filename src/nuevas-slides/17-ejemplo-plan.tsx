import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El ejemplo · Plan",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Etapa 3 de 5. Estructura real: Technical Context con campos fijos, y Constitution Check como GATE. Lo que decís: recién acá aparece la tecnología, y el plan tiene que pasar por la constitution antes de avanzar. No es un comentario: es una puerta. Respaldo si preguntan: el template real dice literalmente 'Must pass before Phase 0 research'.",
  transition: "fade",
};

const HTML = `<span class="cm"># Implementation Plan: Login interno</span>
<span class="fn">## Technical Context</span>
<span class="base">**Language/Version**</span>: TypeScript 5.7
<span class="base">**Primary Dependencies**</span>: React 19, módulo de auth
<span class="base">**Testing**</span>: Vitest + Playwright
<span class="fn">## Constitution Check</span> <span class="cm">— GATE</span>
<span class="st">✓</span> Lleva tests · <span class="st">✓</span> No toca el contrato de auth`;

export default function EjemploPlan() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <p className="prompt reveal">&gt; login --etapa 3 de 5 · plan</p>
      <ArtifactPanel path="plan.md" html={HTML} />
    </SlideFrame>
  );
}
