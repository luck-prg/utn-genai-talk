import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Aprender con IA",
  seccion: "4.2 · CONCLUSIONES",
  transition: "zoom",
};

export default function AprenderConIA() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES" center>
      <p className="eyebrow reveal">Una pausa para pensar</p>
      <h2 className="display t-frase mt-m reveal">¿Podés <span className="accent">explicar</span><br />la solución que acabás<br />de aceptar?</h2>
      <p className="sub mt-m maxw reveal">Qué decidiste, qué alternativa descartaste y cómo la pusiste a prueba.</p>
    </SlideFrame>
  );
}
