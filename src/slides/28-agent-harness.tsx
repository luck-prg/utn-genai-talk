import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Agent Harness",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  notes:
    "Lo que hace un harness, punto por punto. Cada uno se corresponde con algo del diagrama que acaban de ver: el constructor de contexto, el ejecutor de tools, el catálogo que ve el modelo, el historial y los permisos.",
  transition: "fade",
};

const RESPONSABILIDADES = [
  "Gestión de contexto",
  "Gestión de herramientas",
  "Registro de herramientas",
  "Registro histórico",
  "Barreras de seguridad",
];

export default function AgentHarness() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Agent Harness</h2>
      <ul className="blist blist-grande mt-l reveal">
        {RESPONSABILIDADES.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </SlideFrame>
  );
}
