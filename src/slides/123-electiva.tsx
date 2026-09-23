import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Seguir en la materia electiva",
  seccion: "4.3 · PARA SEGUIR",
  transition: "fade",
  notes: "Tiempo: 1:30. Conectar la experiencia de la charla con la invitación a seguir formándose en la materia electiva. Las preguntas de hoy merecen tiempo para profundizar y discutir con otros. Invitar a conocer la propuesta y consultar el programa, los requisitos y la modalidad vigentes. Proponer que se acerquen al terminar la charla para orientarlos. Cerrar esta invitación con el puente a GEMIS: además de estudiar lo que conocemos, podemos participar en las preguntas que todavía están abiertas.",
};

export default function Electiva() {
  return (
    <SlideFrame header={false} footer={false} meta="4.3 · PARA SEGUIR">
      <p className="eyebrow reveal">Para seguir en la carrera</p>
      <h2 className="display t-md mt-s reveal">La charla puede ser<br />el <span className="accent">comienzo</span></h2>
      <p className="sub mt-m maxw reveal">Si te interesó lo que vimos, seguí profundizando en la materia electiva.</p>
      <p className="sub mt-m maxw reveal">Acercate al terminar para conocer la propuesta y cómo cursarla.</p>
    </SlideFrame>
  );
}
