import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Herramientas",
  seccion: "SDD",
  notes:
    "Última slide. El remate importa: existen, pero no hacen falta para empezar. Un archivo de texto y disciplina alcanzan.",
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
      <h3 className="display reveal mt-l" style={{ fontSize: "var(--fs-stmt)" }}>
        Existen.
        <br />
        No las <span className="accent">necesitás</span> para empezar.
      </h3>
    </SlideFrame>
  );
}
