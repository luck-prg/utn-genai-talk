import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tip 2 · Evals",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "El tip más importante del bloque, decirlo así: cuando nadie mira la salida, el eval es el que mira. En un flujo automatizado cada corrida debería pasar por un chequeo antes de llegar a alguien o disparar otra acción. Puede ser determinista (el formato es válido, los números cierran) o un LLM-as-judge con una rúbrica. Cuando cambiás el prompt, el modelo o una skill, corrés el mismo set de casos para confirmar que no empeoró. Se ata directo con harness engineering: es la parte de verificación y feedback, pero automatizada.",
  transition: "fade",
};

export default function TipEvals() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN">
      <p className="eyebrow reveal">›// tip 2</p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        <span className="accent">Evals</span>: cómo se juzga lo que hizo
      </h2>

      <div className="bar reveal mt-m">
        <span>
          Cuando nadie mira la salida, <b>el eval es el que mira</b>.
        </span>
      </div>

      <ul className="blist mt-l reveal">
        <li>
          <span>
            <b>Determinista</b>: el formato es válido, los números cierran.
          </span>
        </li>
        <li>
          <span>
            <b>LLM-as-judge</b>: una rúbrica hace de revisor cuando no hay una regla fija.
          </span>
        </li>
        <li>
          <span>
            Cambiaste el <b>prompt, el modelo o una skill</b>: corrés el mismo set de casos antes
            de confiar en que no empeoró.
          </span>
        </li>
      </ul>
    </SlideFrame>
  );
}
