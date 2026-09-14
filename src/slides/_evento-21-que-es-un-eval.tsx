import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué es un Eval?",
  seccion: "BLOQUE 4 · EVALS",
  transition: "fade",
};

export default function QueEsUnEval() {
  return (
    <SlideFrame meta="BLOQUE 4 · EVALS">
      <p className="prompt reveal">&gt; eval --what</p>
      <h2 className="display t-md reveal mt-s">¿Qué es un Eval?</h2>
      <p className="sub reveal mt-m maxw">
        Someter a un agente —y a todo su harness— a un conjunto de pruebas que califican criterios
        específicos: dada una <span style={{ color: "var(--color-acento)", fontWeight: 600 }}>entrada</span>,
        espero cierto <span style={{ color: "var(--color-acento)", fontWeight: 600 }}>comportamiento</span> o{" "}
        <span style={{ color: "var(--color-acento)", fontWeight: 600 }}>salida</span>.
      </p>
    </SlideFrame>
  );
}
