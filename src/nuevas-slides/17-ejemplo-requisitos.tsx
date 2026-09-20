import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El ejemplo · Requisitos",
  seccion: "SDD",
  notes:
    "Segunda mitad de la spec, misma estructura real: requisitos numerados FR-00N con MUST, y criterios de éxito medibles SC-00N. Lo que decís: ni una palabra técnica todavía. Marcá los tres identificadores — en la última etapa vuelven citados por los tests.",
  transition: "fade",
};

const HTML = `<span class="cm"># Feature Specification: Login interno</span>
<span class="fn">## Requirements</span>
- <span class="st">**FR-001**</span>: El sistema <span class="pr">MUST</span> rechazar dominios externos.
- <span class="st">**FR-002**</span>: El sistema <span class="pr">MUST</span> mostrar el estado de carga.
<span class="fn">## Success Criteria</span>
- <span class="st">**SC-001**</span>: El ingreso completo tarda menos de 10 segundos.`;

export default function EjemploRequisitos() {
  return (
    <SlideFrame meta="SDD">
      <p className="prompt reveal">&gt; login --etapa 2 de 5 · spec (requisitos)</p>
      <ArtifactPanel path="spec.md" html={HTML} />
    </SlideFrame>
  );
}
