import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "El encabezado, por dentro",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Viene DESPUÉS de resolver el disparo, y por eso funciona: recién ahora que saben que la description es lo que decide, tiene sentido mostrarles todo lo demás que no decide nada. No leas los campos uno por uno: leé los cuatro títulos y listo, son catorce nombres en pantalla y no se memorizan. Lo que la sala se lleva son las dos frases de abajo. Primera: solo dos campos son obligatorios. Segunda: de los cuatro grupos, uno solo decide si la skill se usa; los otros tres importan después. Si alguien pregunta por el asterisco: son campos propios de Claude Code, no del estándar, y por eso no viajan a claude.ai ni a la API.",
  transition: "fade",
};

const GRUPOS: { icon: PictoName; tag: string; title: string; fields: string }[] = [
  {
    icon: "label",
    tag: "identidad",
    title: "¿Quién es?",
    fields: "name",
  },
  {
    icon: "match",
    tag: "disparo",
    title: "¿Cuándo entra?",
    fields: "description · when_to_use* · paths*",
  },
  {
    icon: "lock",
    tag: "permisos",
    title: "¿Qué puede tocar?",
    fields: "allowed-tools · disallowed-tools*",
  },
  {
    icon: "script",
    tag: "runtime",
    title: "¿Cómo corre?",
    fields: "model* · context* · hooks*",
  },
];

export default function ElEncabezadoPorDentro() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <p className="eyebrow reveal">Y LA DESCRIPTION ERA UNA PARTE</p>
      <h2 className="display t-md reveal">El encabezado, por dentro</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {GRUPOS.map((g) => (
          <div className="card" key={g.tag}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={g.icon} />
            </div>
            <div className="c-tag">{g.tag}</div>
            <div className="c-title">{g.title}</div>
            <div
              className="c-body"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(10px, 0.95vw, 19px)",
                color: "var(--color-fg)",
                lineHeight: 1.5,
              }}
            >
              {g.fields}
            </div>
          </div>
        ))}
      </div>
      <p className="sub mt-s reveal maxw" style={{ fontSize: "var(--fs-body)" }}>
        * solo en Claude Code. El estándar define seis campos y <b>solo dos son obligatorios</b>.
      </p>
      <p className="body mt-s reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        <span className="k">Un solo grupo decide si la skill se usa.</span> Los otros tres,
        después.
      </p>
    </SlideFrame>
  );
}
