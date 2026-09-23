import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tip 3 · Obsidian como second brain",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Context engineering fuera de la ventana. El agente no puede tener todo en contexto, pero sí puede leer y escribir en una carpeta de notas en markdown: decisiones, resultados de corridas anteriores, conocimiento del dominio. Obsidian encaja porque es markdown plano en el disco, legible tanto por vos como por el agente, y los links entre notas le dan estructura para navegar just-in-time en vez de cargar todo. Así la memoria sobrevive entre corridas y es auditable: abrís la nota y ves qué 'sabe' el agente. Conecta directo con el nivel 4 de la pirámide.",
  transition: "fade",
};

export default function TipSecondBrain() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN">
      <p className="eyebrow reveal">›// tip 3</p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        <span className="accent">Obsidian</span> como second brain
      </h2>
      <p className="sub reveal mt-s">Qué recuerda un agente que no puede tener todo en contexto.</p>

      <ul className="blist mt-l reveal">
        <li>
          <span>
            Una <b>carpeta de notas en markdown</b>: decisiones, corridas anteriores,
            conocimiento del dominio.
          </span>
        </li>
        <li>
          <span>
            <b>Auditable</b>: es texto plano en tu disco. Abrís la nota y ves qué "sabe" el
            agente.
          </span>
        </li>
        <li>
          <span>
            Los <b>links entre notas</b> le dan estructura para navegar just-in-time, sin cargar
            todo de una.
          </span>
        </li>
      </ul>
    </SlideFrame>
  );
}
