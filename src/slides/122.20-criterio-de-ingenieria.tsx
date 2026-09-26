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
      <p className="eyebrow reveal">Operar con criterio</p>
            <h2 className="display t-md reveal">Nuestro <span className="accent">criterio</span> se ve en las decisiones</h2>
      <ul className="blist blist-grande mt-l reveal">
        <li>¿Estamos resolviendo el problema correcto?</li>
        <li>¿Qué puede fallar y a quién afectaría?</li>
        <li>¿Cómo comprobamos que la solución funciona?</li>
      </ul>
    <p className="sub mt-m reveal">Pensar como ingenieros es hacer mejores preguntas.</p>
    </SlideFrame>
  );
}
