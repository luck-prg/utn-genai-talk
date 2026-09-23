import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El criterio de ingeniería",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
};

export default function CriterioDeIngenieria() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <h2 className="display t-md reveal">Nuestro <span className="accent">criterio</span><br />se ve en las decisiones</h2>
      <ul className="blist blist-grande mt-l reveal">
        <li>¿Estamos resolviendo el problema correcto?</li>
        <li>¿Qué puede fallar y a quién afecta?</li>
        <li>¿Con qué evidencia lo damos por terminado?</li>
      </ul>
    </SlideFrame>
  );
}
