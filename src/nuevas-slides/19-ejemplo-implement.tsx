import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El ejemplo · Implement",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "Etapa 5 de 5, y EL REMATE. Los tests citan los identificadores de la spec: FR-001, FR-002, SC-001. Volvé tres slides atrás con el dedo y mostrá que son los mismos. Eso es trazabilidad: de un requisito escrito en lenguaje de producto hasta un test en verde, sin que nadie se haya inventado nada en el medio.",
  transition: "fade",
};

const HTML = `<span class="st">$</span> npm test -- login
<span class="cm">PASS</span>  validador-dominio.test.ts
  <span class="st">✓</span> <span class="fn">FR-001</span> rechaza dominios externos
<span class="cm">PASS</span>  formulario-login.test.ts
  <span class="st">✓</span> <span class="fn">FR-002</span> muestra el estado de carga
<span class="cm">PASS</span>  login.e2e.ts
  <span class="st">✓</span> <span class="fn">SC-001</span> ingreso completo en menos de 10 segundos`;

export default function EjemploImplement() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <p className="prompt reveal">&gt; login --etapa 5 de 5 · implement</p>
      <ArtifactPanel path="~/mi-proyecto" html={HTML} />
    </SlideFrame>
  );
}
