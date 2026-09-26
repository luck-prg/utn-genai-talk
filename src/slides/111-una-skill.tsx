import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";
import { ArtifactPanel } from "@/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "Una skill",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "La skill que explicaste vos en el bloque 2.1, aplicada a SDD. Responde a '¿cómo hago que sepan escribir specs?': estructura, preguntas obligatorias, qué no puede faltar, casos borde. Mirá el ejemplo: al agente lo obligamos a respetar un formato, a preguntar lo que no definimos y a buscar casos borde. Nosotros tenemos siempre el criterio y la respuesta. Invitalos a pensar la skill de las demás etapas.",
  transition: "fade",
};

const REGLAS: { icon: PictoName; text: string }[] = [
  { icon: "ledger", text: "Estructura obligatoria" },
  { icon: "why", text: "Preguntas que no puede saltear" },
  { icon: "early", text: "Casos borde antes de cerrar" },
];

const HTML = `<span class="cm"># Skill: escribir una spec</span>
<span class="fn">## Antes de escribir, preguntá</span>
- ¿Para quién? ¿Qué problema resuelve?
- ¿Qué <span class="pr">NO</span> entra en esta feature?
<span class="fn">## Estructura obligatoria</span>
Intención · Escenarios · Requisitos · Criterios
<span class="fn">## Nunca cerrar sin</span> <span class="st">un caso borde</span>`;

function Row({ icon, text }: { icon: PictoName; text: string }) {
  return (
    <div style={{ display: "flex", gap: "clamp(10px, 1vw, 20px)", alignItems: "center" }}>
      <div style={{ color: "var(--color-fg)" }}>
        <Picto name={icon} />
      </div>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--fs-sub)",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          color: "var(--color-fg)",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function UnaSkill() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <p className="eyebrow reveal">¿CÓMO HAGO QUE SEPAN ESCRIBIR SPECS?</p>
      <h2 className="display t-md reveal">Una skill</h2>
      <div className="two-col mt-s reveal" style={{ alignItems: "start", gridTemplateColumns: "1fr 1.5fr" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)", paddingTop: "clamp(6px, 0.6vw, 12px)" }}>
          {REGLAS.map((r) => (
            <Row key={r.text} {...r} />
          ))}
        </div>
        <ArtifactPanel path="skills/spec/SKILL.md" html={HTML} className="" />
      </div>
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        La skill encapsula el método; el criterio lo aplica el <span className="accent">ingeniero</span>.
      </h3>
    </SlideFrame>
  );
}
