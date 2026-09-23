import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Seguir investigando con GEMIS",
  seccion: "4.3 · PARA SEGUIR",
  transition: "fade",
  notes: "Tiempo: 1:30. Presentar GEMIS como un espacio para acercarse a la investigación aplicada. El sitio reúne trabajo en IA y sistemas inteligentes, gestión del conocimiento, educación e ingeniería de software. Conectar con una pregunta de hoy: ¿cómo evaluamos un agente o cómo cambia nuestra manera de aprender? La invitación es conocer los proyectos y conversar sobre formas de participar. No hace falta llegar con una solución terminada. Mostrar la web y el canal de contacto, sin prometer vacantes ni modalidades de incorporación. Fuentes institucionales: https://www.grupogemis.com/research/ y https://www.grupogemis.com/contact/.",
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
      <h2 className="display t-md mt-s reveal">Seguí preguntando.<br />Conocé <span className="accent">GEMIS</span>.</h2>
      <p className="sub maxw mt-m reveal">IA, ingeniería de software, gestión del conocimiento y educación.</p>
      <p className="sub maxw mt-m reveal">Acercate con una idea, una duda o ganas de participar.</p>
    </SlideFrame>
  );
}
