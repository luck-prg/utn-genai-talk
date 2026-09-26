import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que está cambiando",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  // Fuente: Anthropic, Trustworthy agents in practice, 9 de abril de 2026. https://www.anthropic.com/research/trustworthy-agents
};

export default function LoQueEstaCambiando() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <p className="eyebrow reveal">Lo que está pasando actualmente</p>
      <h2 className="display t-md mt-s reveal">La IA participa<br />en todo el proceso de <span className="accent">desarrollo.</span></h2>
      <p className="sub maxw mt-m reveal">Puede leer archivos, proponer y aplicar cambios, y usar herramientas para comprobarlos.</p>
      <p className="sub maxw mt-m reveal">Por eso tenemos que decidir qué tareas le damos y cómo sabremos si el trabajo quedó bien.</p>
    </SlideFrame>
  );
}
