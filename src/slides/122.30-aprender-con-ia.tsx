import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Aprender con IA",
  seccion: "4.2 · CONCLUSIONES",
  transition: "zoom",
  notes: "Tiempo: 1:30. Dejar unos segundos para pensar en el último código que aceptaron de una IA. ¿Podrían explicar una decisión importante? ¿Saben qué cambiarían si cambia un requisito? Proponer una práctica: pedir una alternativa, anticipar qué podría romperse y contrastarlo con una prueba. Después explicar la elección con palabras propias. La IA puede acompañar ese ejercicio. El objetivo es que el uso de la herramienta también construya comprensión. No convertirlo en un examen público ni pedir que nadie se exponga. Basta con una reflexión individual para conectar con el valor de seguir estudiando.",
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
