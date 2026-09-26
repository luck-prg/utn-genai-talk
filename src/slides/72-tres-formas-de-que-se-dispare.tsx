import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Cómo el agente encuentra la skill",
  seccion: "2.1.3 · SKILLS",
  notes:
    "La respuesta al segundo problema, y es la slide que más te entusiasma en el ensayo: decís 'esto es genial, es fundamental que lo hagan'. Las tres son las tuyas y en tu orden. La tercera es la mejor del bloque: contá entero lo del archivo Python, que el agente aprende que al tocar un .py carga la skill de nomenclaturas. Decilo .py, nunca .python. La línea del medio es el contraste: leé la mala textual, que es corta y da gracia. Y cerrá con la pregunta de control. Si alguien pregunta cómo se configuran las dos últimas: los campos se llaman when_to_use y paths y son propios de Claude Code, no del estándar. Una frase y seguís; no lo abras vos.",
  transition: "fade",
};

const DISPAROS: { icon: PictoName; tag: string; title: string; body: string }[] = [
  {
    icon: "label",
    tag: "lo que dice",
    title: "La description",
    body: "Nombra el trabajo y nombra el momento. Es lo único cargado siempre.",
  },
  {
    icon: "match",
    tag: "las palabras",
    title: "Las que vas a escribir vos",
    body: "Si las nombrás, el agente sabe que te estás refiriendo a esa skill.",
  },
  {
    icon: "files",
    tag: "los archivos",
    title: "La extensión",
    body: "Al editar un .py se carga la skill de nomenclatura en Python.",
  },
];

export default function TresFormasDeQueSeDispare() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <p className="eyebrow reveal">UNA SKILL SOLO SIRVE SI EL AGENTE LA ACTIVA</p>
      <h2 className="display t-md reveal">¿Cómo puede el agente encontrar la skill?</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {DISPAROS.map((d) => (
          <div className="card" key={d.tag}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={d.icon} />
            </div>
            <div className="c-tag">{d.tag}</div>
            <div className="c-title">{d.title}</div>
            <div className="c-body">{d.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-s reveal maxw">
        <span className="ink2">&laquo;Ayuda con la API&raquo; no dispara nunca.</span>{" "}
        <span className="k">
          &laquo;Crea y modifica endpoints HTTP. Usar cuando se pida una ruta o un handler&raquo;
        </span>{" "}
        sí.
      </p>
      <p className="body mt-s reveal maxw">
        ¿Y cómo sabés si funciona?{" "}
        <span className="k">Preguntale al agente cuándo usaría esa skill.</span>
      </p>
    </SlideFrame>
  );
}
