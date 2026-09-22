import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "La escribí y no la usa",
  seccion: "BLOQUE 2.1 · SKILL",
  notes:
    "El segundo problema, y el que más frustra: la skill está escrita, está en el repo, y el agente sigue haciendo lo que quiere. La explicación es mecánica, no mágica. El agente no lee todas las skills al arrancar: sería insostenible. Lee solo el encabezado de cada una. Cien tokens. Dos líneas. El cuerpo entra recién cuando decidió entrar. Números de la documentación oficial de Anthropic: decilos como dato, no los repitas.",
  transition: "fade",
};

const NIVELES: { icon: PictoName; tag: string; title: string; body: string }[] = [
  {
    icon: "label",
    tag: "nivel 1 · siempre",
    title: "name + description",
    body: "~100 tokens por skill, cargados desde que arranca la sesión.",
  },
  {
    icon: "layers",
    tag: "nivel 2 · si se dispara",
    title: "El cuerpo del SKILL.md",
    body: "Menos de 5k tokens, y solo si el agente decidió entrar.",
  },
  {
    icon: "package",
    tag: "nivel 3 · si hace falta",
    title: "Scripts y archivos al lado",
    body: "Cero tokens hasta que se abren. Lo que no se usa, no cuesta.",
  },
];

export default function LaEscribiYNoLaUsa() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <p className="eyebrow reveal">&ldquo;LA ESCRIBÍ, ESTÁ EN EL REPO, Y NO LA USA&rdquo;</p>
      <h2 className="display t-md reveal">No la leyó. Leyó dos líneas.</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {NIVELES.map((n) => (
          <div className="card" key={n.tag}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={n.icon} />
            </div>
            <div className="c-tag">{n.tag}</div>
            <div className="c-title">{n.title}</div>
            <div className="c-body">{n.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        <span className="k">Si esas dos líneas no la venden, el resto no se lee nunca.</span>
      </p>
    </SlideFrame>
  );
}
