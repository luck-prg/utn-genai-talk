import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué es un ADE",
  seccion: "1.1.2 · ADE",
  steps: 3,
  notes:
    "Antes de comparar, conviene decir qué es. ADE es Agentic Development Environment: un entorno de desarrollo pensado para que trabajen agentes, no para que tipee una persona. La sigla es nueva y todavía se está acomodando, así que no hay que tomársela demasiado en serio como categoría cerrada. Lo importante es el cambio: el IDE fue construido para la época de un humano tipeando; el ADE, para la de humanos orquestando agentes. En la próxima diapositiva vemos dónde cae eso en la escalera de abstracciones, y después cómo cambia tu día a día.",
  transition: "fade",
};

export default function QueEsUnAde() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE" center>
      <p className="eyebrow reveal">›// agentic development environment</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Un entorno pensado para que
        <br />
        trabajen <span className="accent">agentes</span>
      </h2>

      <Paso n={1} className="mt-l">
        <p className="quote">
          El IDE se diseñó para que una persona <span className="accent">escriba código</span>.
          <br />
          El ADE se diseñó para que una persona <span className="accent">coordine agentes</span>.
        </p>
      </Paso>
    </SlideFrame>
  );
}
