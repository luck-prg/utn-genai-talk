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
      <p className="eyebrow reveal">Lo que está pasando</p>
      <h2 className="display t-md mt-s reveal">La IA participa<br />en la <span className="accent">ejecución</span></h2>
      <p className="sub maxw mt-m reveal">Lee el proyecto, modifica archivos y usa herramientas para comprobar lo que hizo.</p>
      <p className="sub maxw mt-m reveal">Nos toca decidir qué delegar y cuándo el resultado está listo.</p>
    </SlideFrame>
  );
}
