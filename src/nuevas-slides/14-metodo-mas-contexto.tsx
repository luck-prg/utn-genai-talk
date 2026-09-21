import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/nuevas-slides/components/Picto";

export const meta: SlideMeta = {
  title: "Lo mejor de dos mundos",
  seccion: "SDD",
  notes:
    "El puente con el bloque 2, ingeniería de contexto. No vuelvas a explicar ingeniería de contexto: ya la vieron. Lo que decís: SDD es donde el método y el contexto se encuentran. Del método tomamos el orden, el contrato y la validación humana. De la ingeniería de contexto tomamos reglas, contexto estructurado y herramientas. Y el remate: los artefactos del método SON el contexto del agente. No hay dos cosas, hay una. Y decilo explícito: SDD es el ejemplo de hoy; mañana puede ser otro nombre. Lo que se llevan es esto: el método necesita contexto y el contexto necesita método.",
  transition: "fade",
};

const METODO: { icon: PictoName; text: string }[] = [
  { icon: "path", text: "El orden antes de decidir" },
  { icon: "contract", text: "La spec como contrato" },
  { icon: "human", text: "Validación humana en cada paso" },
];

const CONTEXTO: { icon: PictoName; text: string }[] = [
  { icon: "constitution", text: "Reglas que el agente lee siempre" },
  { icon: "spec", text: "Contexto estructurado, no un prompt" },
  { icon: "maintain", text: "Herramientas y harness" },
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

export default function MetodoMasContexto() {
  return (
    <SlideFrame meta="SDD">
      <h2 className="display t-md reveal">Lo mejor de dos mundos</h2>
      <div className="two-col mt-m reveal">
        <div>
          <div className="col-head">Del método</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
            {METODO.map((r) => (
              <Row key={r.text} {...r} />
            ))}
          </div>
        </div>
        <div>
          <div className="col-head good">De la ingeniería de contexto</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
            {CONTEXTO.map((r) => (
              <Row key={r.text} {...r} />
            ))}
          </div>
        </div>
      </div>
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        Los artefactos del método <span className="accent">son</span> el contexto del agente.
      </h3>
    </SlideFrame>
  );
}
