import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "La escalera de modelos",
  seccion: "MODELOS",
  notes:
    "Las tres familias siguen el mismo patrón de niveles: uno económico para tareas simples de alto volumen, uno balanceado como default diario, uno premium para lo complejo o de alto riesgo. Anthropic suma un cuarto escalón por encima de Opus. El eje de la izquierda es lo que importa: no el nombre del modelo, sino qué tipo de tarea justifica cada escalón.",
  transition: "fade",
};

const NIVELES = [
  {
    tier: "extremo",
    uso: "Razonamiento extremo, agentes muy largos o donde fallar sale carísimo",
    modelos: ["—", "Claude Fable 5", "—"],
  },
  {
    tier: "premium",
    uso: "Debugging complejo, migración delicada, diseño de arquitectura",
    modelos: ["GPT-5.6 Sol", "Claude Opus 5", "Gemini 3.1 Pro"],
  },
  {
    tier: "balanceado",
    uso: "Default diario: coding con spec clara, tests, docs, revisión",
    modelos: ["GPT-5.6 Terra", "Claude Sonnet 5", "Gemini 3.6 Flash"],
  },
  {
    tier: "económico",
    uso: "Buscar, clasificar, resumir y tareas mecánicas de alto volumen",
    modelos: ["GPT-5.6 Luna", "Claude Haiku 4.5", "Gemini 3.5 Flash-Lite"],
  },
];

const PROVEEDORES = ["OpenAI", "Anthropic", "Google"];

export default function EscaleraDeModelos() {
  return (
    <SlideFrame meta="MODELOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        Tres familias, <span className="accent">los mismos escalones</span>
      </h2>

      <div className="escalera reveal mt-m">
        <div />
        {PROVEEDORES.map((p) => (
          <div className="esc-prov" key={p}>
            {p}
          </div>
        ))}

        {NIVELES.map((n) => (
          <div style={{ display: "contents" }} key={n.tier}>
            <div className="esc-axis">
              <span className="a-tier">{n.tier}</span>
              <span className="a-use">{n.uso}</span>
            </div>
            {n.modelos.map((m, i) => (
              <div
                className={`esc-step t-${n.tier} ${m === "—" ? "vacio" : ""}`}
                key={`${n.tier}-${PROVEEDORES[i]}`}
              >
                {m}
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="figcap reveal">
        Tareas masivas repetitivas: modelo barato + scripts determinísticos.
      </p>
    </SlideFrame>
  );
}
