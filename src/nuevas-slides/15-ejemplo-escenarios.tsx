import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El ejemplo · Escenarios",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Etapa 2 de 5, primera mitad de la spec. Estructura real: historias priorizadas P1/P2/P3, escenarios de aceptación Given/When/Then y casos borde. Lo que decís: ni una palabra técnica todavía, esto lo puede leer producto. La slide siguiente es la misma spec con los requisitos numerados.",
  transition: "fade",
};

const HTML = `<span class="cm"># Feature Specification: Login interno</span>
<span class="fn">## User Scenarios &amp; Testing</span>
<span class="kw">### User Story 1 - Ingreso corporativo (P1)</span>
<span class="base">**Acceptance Scenarios**</span>
1. <span class="pr">**Given**</span> email corporativo, <span class="pr">**When**</span> envía, <span class="pr">**Then**</span> accede.
<span class="fn">### Edge Cases</span>
¿Qué pasa si el dominio corporativo cambia?`;

export default function EjemploSpec() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <p className="prompt reveal">&gt; login --etapa 2 de 5 · spec (escenarios)</p>
      <ArtifactPanel path="spec.md" html={HTML} />
    </SlideFrame>
  );
}
