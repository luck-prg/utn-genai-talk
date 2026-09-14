import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El flujo",
  seccion: "BLOQUE 4 · SDD",
  notes:
    "No pases rápido por la validación humana: un malentendido de producto en la spec que no se corrige, llega hasta el código. Anunciá que las próximas dos slides recorren este flujo con un solo ejemplo.",
  transition: "fade",
};

export default function ElFlujo() {
  return (
    <SlideFrame meta="BLOQUE 4 · SDD">
      <p className="prompt reveal">&gt; flujo --sdd</p>
      <h2 className="display t-md reveal mt-s">Del QUÉ al CÓMO</h2>
      <div className="loop mt-l reveal">
        <span className="step acc">Constitution</span>
        <span className="arr">→</span>
        <span className="step">Spec</span>
        <span className="arr">✋</span>
        <span className="step">Plan</span>
        <span className="arr">✋</span>
        <span className="step">Tasks</span>
        <span className="arr">✋</span>
        <span className="step">Implement</span>
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">✋ validación humana entre cada paso.</span> No es un trámite: evita
        que un error de producto en la spec se propague sin corregirse hasta el código.
      </p>
    </SlideFrame>
  );
}
