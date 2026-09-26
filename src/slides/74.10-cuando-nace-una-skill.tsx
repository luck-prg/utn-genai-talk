import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Cuándo nace una skill",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Viene justo después del 'No.': si no es una para cada cosa, ¿cuándo sí? Tres momentos concretos. El primero no lo expliques de nuevo, recordalo: es el caso de la 67 y la 68, el mismo pedido que le repetías en cada sesión. Un '¿se acuerdan?' y seguís. El segundo: descubriste un problema, entendiste por qué pasa y cómo evitarlo. Eso es criterio recién ganado; si no lo escribís, mañana el agente lo repite. El tercero es el que menos se usa: llegaste a un objetivo, funcionó, pero no tenés del todo claro cómo replicar los pasos. No lo reconstruyas vos: en esa misma conversación, con todo el contexto que ganaste, pedile al agente que genere la skill. Después la revisás, porque el criterio sigue siendo tuyo.",
  transition: "fade",
};

const MOMENTOS: { icon: PictoName; tag: string; title: string; body: string }[] = [
  {
    icon: "repeat",
    tag: "un criterio",
    title: "Se lo repetís en cada sesión",
    body: "El pedido de siempre, el mismo párrafo copiado. Ese fue nuestro caso.",
  },
  {
    icon: "wrong",
    tag: "un problema",
    title: "Descubriste qué salía mal",
    body: "Entendiste por qué pasa y cómo evitarlo. Escribilo antes de que se repita.",
  },
  {
    icon: "feature",
    tag: "un objetivo",
    title: "Objetivo logrado, sin un procedimiento claro",
    body: "En esa misma sesión, con todo el contexto ganado, pedile al agente que genere la skill.",
  },
];

export default function CuandoNaceUnaSkill() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <p className="eyebrow reveal">ENTONCES, ¿CUÁNDO SÍ?</p>
      <h2 className="display t-md reveal">Cuándo nace una skill</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {MOMENTOS.map((m) => (
          <div className="card" key={m.tag}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={m.icon} />
            </div>
            <div className="c-tag">{m.tag}</div>
            <div className="c-title">{m.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>
              {m.body}
            </div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        <span className="k">El mejor momento es cuando el contexto está fresco.</span> Después la
        revisás vos.
      </p>
    </SlideFrame>
  );
}
