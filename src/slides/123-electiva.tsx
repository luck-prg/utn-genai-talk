import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Sigamos aprendiendo en la electiva",
  seccion: "4.3 · PARA SEGUIR",
  transition: "fade",
};

export default function Electiva() {
  return (
    <SlideFrame header={false} footer={false} meta="4.3 · PARA SEGUIR">
      <p className="eyebrow reveal">Para seguir en la carrera</p>
      <h2 className="display t-md mt-s reveal">Los invito a seguir<br />en la <span className="accent">electiva</span></h2>
      <p className="sub mt-m maxw reveal">Podemos darle continuidad a las preguntas que nos llevamos hoy.</p>
      <p className="sub mt-m maxw reveal">Al terminar, conversemos sobre la propuesta y cómo cursarla.</p>
    </SlideFrame>
  );
}
