import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El ejemplo · Tasks",
  seccion: "SDD",
  notes:
    "Etapa 4 de 5. Formato real: [ID] [P?] [Story] Description. El [P] marca lo que se puede paralelizar y el [US1] ata cada tarea a su historia de la spec. Las fases están ordenadas por dependencia y la primera historia se marca como MVP. Lo que decís: cada tarea entra en una sesión y se revisa sola.",
  transition: "fade",
};

const HTML = `<span class="cm"># Tasks: Login interno</span>
<span class="cm">## Format: [ID] [P?] [Story] Description</span>
<span class="fn">## Phase 3: User Story 1 (P1)</span> <span class="st">🎯 MVP</span>
- [ ] <span class="kw">T002</span> <span class="pr">[P]</span> <span class="st">[US1]</span> Validador de dominio + tests
- [ ] <span class="kw">T003</span> <span class="pr">[P]</span> <span class="st">[US1]</span> Estado de carga del formulario
- [ ] <span class="kw">T004</span> <span class="st">[US1]</span> Integrar con SessionService
- [ ] <span class="kw">T005</span> <span class="st">[US1]</span> Test E2E del caso principal`;

export default function EjemploTasks() {
  return (
    <SlideFrame meta="SDD">
      <p className="prompt reveal">&gt; login --etapa 4 de 5 · tasks</p>
      <ArtifactPanel path="tasks.md" html={HTML} />
    </SlideFrame>
  );
}
