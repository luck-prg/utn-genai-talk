import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Desarrollar la ejecución agéntica",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "La frase que resume toda la sección: de acá en más, ya no alcanza con usar agentes — hay que desarrollar la forma en que ejecutan. Puente hacia los cuatro niveles que siguen.",
  transition: "fade",
};

export default function DesarrollarEjecucion() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" center>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)", textAlign: "center" }}>
        Desarrollar la <span className="accent">ejecución agéntica</span>
      </h2>
    </SlideFrame>
  );
}
