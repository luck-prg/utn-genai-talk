import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "El archivo de reglas",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Ya lo adelantaste en el flujo: la constitution es el archivo de reglas del agente, el que Lucho explicó en el bloque 2.1 (AGENTS.md, CLAUDE.md, el que use tu herramienta). Tiene que vivir donde el agente lee en cada sesión, sin que nadie se lo pida. Nombralo genérico: 'el archivo de reglas de tu agente'.",
  transition: "fade",
};

const REGLAS: { icon: PictoName; text: string }[] = [
  { icon: "constitution", text: "Un archivo de reglas en la raíz del proyecto" },
  { icon: "alive", text: "Se carga en cada sesión, sin pedirlo" },
  { icon: "contract", text: "Convenciones, tecnologías, formas de hacer" },
];

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

export default function ElArchivoDeReglas() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <p className="eyebrow reveal">¿CÓMO HAGO QUE RESPETE LAS REGLAS SIEMPRE?</p>
      <h2 className="display t-md reveal">La constitución vive donde el agente lee</h2>
      <div
        className="mt-m reveal"
        style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}
      >
        {REGLAS.map((r) => (
          <Row key={r.text} {...r} />
        ))}
      </div>
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        No es un documento aparte. Es contexto <span className="accent">permanente</span>.
      </h3>
    </SlideFrame>
  );
}
