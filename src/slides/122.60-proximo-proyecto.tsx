import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Les propongo un experimento",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
};

export default function ProximoProyecto() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <p className="eyebrow reveal">Para nuestro próximo TP o proyecto</p>
      <h2 className="display t-md mt-s reveal">Les propongo<br />un <span className="accent">experimento</span></h2>
      <ul className="blist mt-l reveal">
        <li>Definamos el resultado esperado antes de pedir código.</li>
        <li>Demos contexto y comprobemos el cambio.</li>
        <li>Registremos qué mejoró y dónde tuvimos que intervenir.</li>
      </ul>
      <p className="sub mt-m reveal">Compartamos también lo que falló: ahí hay algo para aprender.</p>
    </SlideFrame>
  );
}
