import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Una skill para todo",
  seccion: "2.1.3 · SKILLS",
  notes:
    "El tercer problema, y es el que se llevan a casa mal si no lo decís. Entendieron el disparador, entonces la reacción es escribir una skill para cada cosa. Y ahí se rompe: lo que hace que el disparador funcione es justamente que hay pocas opciones. Volvé a la slide de contexto finito del bloque: cada token compite por lugar, y la descripción de cada skill está ocupando lugar desde antes de que escribas el primer mensaje. Leé la pregunta como la haría alguien de la sala, pausa, y recién ahí la respuesta. Las cards son el porqué; la siguiente slide dice cuándo sí.",
  transition: "fade",
};

const RIESGOS: { icon: PictoName; title: string; body: string }[] = [
  {
    icon: "bloat",
    title: "Ocupan lugar siempre",
    body: "~100 tokens de cada una, se use o no, desde que arranca la sesión.",
  },
  {
    icon: "compete",
    title: "Compiten entre ellas",
    body: "Dos que suenan parecido y el agente elige la que no era.",
  },
  {
    icon: "script",
    title: "No todo pide criterio",
    body: "Si no hay nada que decidir, no hay nada que empaquetar.",
  },
];

export default function UnaSkillParaTodo() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <p className="eyebrow reveal">LA TENTACIÓN DESPUÉS DE ENTENDER EL DISPARADOR</p>
      <h2 className="display t-md reveal">¿Hago una skill para cada cosa?</h2>
      <p
        className="display reveal"
        style={{
          fontSize: "clamp(20px, 2.4vw, 50px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginTop: "clamp(8px, 1vw, 20px)",
        }}
      >
        <span className="accent">No.</span> El contexto es finito.
      </p>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {RIESGOS.map((r) => (
          <div className="card" key={r.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={r.icon} />
            </div>
            <div className="c-title">{r.title}</div>
            <div
              className="c-body"
              style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}
            >
              {r.body}
            </div>
          </div>
        ))}
      </div>
      <p className="body mt-s reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        Cada skill <span className="k">le saca lugar a otra cosa.</span>
      </p>
    </SlideFrame>
  );
}
