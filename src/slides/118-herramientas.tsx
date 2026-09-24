import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Herramientas",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Última slide de contenido. Existen, son open source y pueden probarlas; lo que necesitan es el concepto. Una frase por herramienta como mucho, no las expliques. Y el framing honesto: SDD es el ejemplo de hoy, puede morir mañana porque gasta tokens o porque los modelos necesiten menos formalidad. Lo que no muere es la unión de un método con el contexto. En el documento que compartimos hay más información, y en el próximo encuentro se trabaja con ejemplos y demos reales.",
  transition: "fade",
};

const TOOLKITS = ["spec-kit", "openSpec", "BMAD", "GSD"];

export default function Herramientas() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <h2 className="display t-md reveal mt-s">Ya hay herramientas</h2>
      <div className="chips mt-m reveal">
        {TOOLKITS.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
      <h3 className="display reveal mt-m" style={{ fontSize: "var(--fs-stmt)" }}>
        SDD es el ejemplo de hoy. El <span className="accent">método</span> y el{" "}
        <span className="accent">contexto</span> se quedan.
      </h3>
    </SlideFrame>
  );
}
