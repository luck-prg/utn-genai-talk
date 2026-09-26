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
            <h2 className="display t-frase mt-m reveal">¿Podemos <span className="accent">explicar</span><br />la solución que aceptamos?</h2>
      <ul className="blist blist-grande mt-l reveal">
        <li>¿Por qué la elegimos?</li>
        <li>¿Qué otras opciones había?</li>
        <li>¿Cómo comprobamos que funciona?</li>
      </ul>
    <p className="sub mt-m reveal">Si mañana cambia un requisito, ¿sabríamos adaptar la solución?</p>
</SlideFrame>
  );
}
