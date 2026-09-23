import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "En GEMIS seguimos investigando",
  seccion: "4.3 · PARA SEGUIR",
  transition: "fade",
  // Fuente: Grupo GEMIS, Investigación y Contacto. https://www.grupogemis.com/research/ y https://www.grupogemis.com/contact/
};

export default function Gemis() {
  return (
    <SlideFrame
      header={false}
      footer={false}
      meta="4.3 · PARA SEGUIR"
      after={
        // Above the deck's pointer controls so the links remain clickable.
        <div className="body reveal" style={{ position: "relative", zIndex: 40, alignSelf: "flex-start" }}>
          <a className="accent underline underline-offset-4" href="https://www.grupogemis.com/research/" target="_blank" rel="noopener noreferrer">grupogemis.com/research</a>
          <span style={{ marginInline: "1em" }} aria-hidden="true">/</span>
          <a className="underline underline-offset-4" href="https://www.grupogemis.com/contact/" target="_blank" rel="noopener noreferrer">Conversemos</a>
        </div>
      }
    >
      <p className="eyebrow reveal">Investigación aplicada</p>
      <h2 className="display t-md mt-s reveal">En <span className="accent">GEMIS</span><br />seguimos investigando</h2>
      <p className="sub maxw mt-m reveal">Trabajamos en IA, ingeniería de software, gestión del conocimiento y educación.</p>
      <p className="sub maxw mt-m reveal">Los invito a acercarse con una idea, una duda o ganas de participar.</p>
    </SlideFrame>
  );
}
