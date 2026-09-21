import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Herramientas",
  seccion: "SDD",
  notes:
    "Última slide de contenido. Existen, pero no hacen falta para empezar: lo que necesitan es el concepto. Y el framing honesto: SDD es el ejemplo de hoy, puede morir mañana porque gasta tokens o porque los modelos necesiten menos formalidad. Lo que no muere es la unión de un método con el contexto. En el documento que compartimos hay más información, y en el próximo encuentro se trabaja con ejemplos y demos reales.",
  transition: "fade",
};

const TOOLKITS = ["spec-kit", "openSpec", "BMAD", "GSD"];

export default function Herramientas() {
  return (
    <SlideFrame meta="SDD">
      <p className="prompt reveal">&gt; ecosistema --open-source</p>
      <h2 className="display t-md reveal mt-s">Ya hay herramientas</h2>
      <div className="chips mt-m reveal">
        {TOOLKITS.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
      <h3 className="display reveal mt-m" style={{ fontSize: "var(--fs-stmt)" }}>
        No las <span className="accent">necesitás</span> para empezar.
      </h3>
      <p
        className="display mt-s reveal"
        style={{ fontSize: "var(--fs-sub)", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--color-muted)" }}
      >
        SDD es el ejemplo de hoy. El método y el contexto se quedan.
      </p>
    </SlideFrame>
  );
}
