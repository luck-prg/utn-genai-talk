import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "Hooks",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Hook conceptual, sin herramienta: validación determinística entre etapas. No depende de que el modelo se acuerde: es una regla que se ejecuta siempre. No construyas tasks sin leer la constitution; no planifiques una spec no aprobada; no implementes lo que no se planeó. Acá aportamos valor nosotros: el agente puede recordarnos, pero las respuestas las damos los que trabajamos con él. El agente ejecuta; el criterio es nuestro.",
  transition: "fade",
};

const HTML = `<span class="cm"># Antes de cada etapa, el agente comprueba</span>
<span class="kw">tasks</span>      → ¿leíste la constitution?   <span class="st">si no, no avanza</span>
<span class="kw">plan</span>       → ¿la spec está aprobada?    <span class="st">si no, no avanza</span>
<span class="kw">implement</span>  → ¿existe un plan para esto? <span class="st">si no, no avanza</span>`;

export default function Hooks() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <p className="eyebrow reveal">¿CÓMO EVITO QUE AVANCE SIN LEER LO ANTERIOR?</p>
      <h2 className="display t-md reveal">Hooks: validación determinística</h2>
      <ArtifactPanel path="hooks.md" html={HTML} />
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        El agente recuerda. La respuesta la das <span className="accent">vos</span>.
      </h3>
    </SlideFrame>
  );
}
