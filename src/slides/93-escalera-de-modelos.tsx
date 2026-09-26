import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "La escalera de modelos",
  seccion: "3.1 · MODELOS",
  notes:
    "Acá sí ponemos nombres, y conviene decir en voz alta que esta es la diapositiva que más rápido caduca de toda la charla. Las tres familias siguen el mismo patrón de escalones. Económico para buscar, clasificar, resumir y tareas mecánicas de alto volumen. Balanceado como default diario: coding con spec clara, tests, docs, revisión. Premium para debugging complejo, migraciones delicadas y diseño de arquitectura. Y arriba de todo, el escalón extremo, para razonamiento extremo o agentes muy largos, a diez veces el precio del económico: ahí ya no está sólo Anthropic con Fable y Mythos, OpenAI subió a GPT-6 Astra al mismo nivel. La columna de la derecha es la que hace entender el resto: son dólares por millón de tokens de salida, con precios de Anthropic como referencia. De económico a extremo hay un factor de diez. Por eso elegir mal el escalón no es un detalle estético. El eje de la izquierda es lo único que no caduca. Y esta escalera tampoco es todo el mapa: hay familias nuevas, como Jev de TypeSafe AI, que ni siquiera compiten en esta tabla porque no son modelos de conversación — son más parecidos al machine learning clásico, clasificación y ponderación, no texto. Fuente sobre Jev: https://typesafe.ai/blog/introducing-system-one-models-and-jev",
  transition: "fade",
};

/**
 * Precios de referencia tomados de la tabla del apunte (Anthropic, consultada
 * el 2026-08-11), en USD por millón de tokens de salida. Sirven para mostrar
 * el orden de magnitud entre escalones, no como tarifario.
 *
 * Gemini va sin número de versión a propósito: el apunte listaba tres minor
 * versions distintas dentro de la misma familia, que era un error de
 * transcripción. Los nombres de gama sí son estables.
 */
const NIVELES = [
  {
    tier: "extremo",
    uso: "Razonamiento extremo, agentes muy largos, o donde fallar sale carísimo",
    openai: "GPT-6 Astra",
    anthropic: "Fable 5 · Mythos 5",
    google: "—",
    salida: "50",
  },
  {
    tier: "premium",
    uso: "Debugging complejo, migración delicada, diseño de arquitectura",
    openai: "GPT-5.6 Sol",
    anthropic: "Opus 5 · 4.5",
    google: "Gemini Pro",
    salida: "25",
  },
  {
    tier: "balanceado",
    uso: "Default diario: coding con spec clara, tests, docs, revisión",
    openai: "GPT-5.6 Terra",
    anthropic: "Sonnet 5 · 4.6",
    google: "Gemini Flash",
    salida: "15",
  },
  {
    tier: "económico",
    uso: "Buscar, clasificar, resumir y tareas mecánicas de alto volumen",
    openai: "GPT-5.6 Luna",
    anthropic: "Haiku 4.5",
    google: "Gemini Flash-Lite",
    salida: "5",
  },
];

export default function EscaleraDeModelos() {
  return (
    <SlideFrame header={false} footer={false} meta="3.1 · MODELOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(20px,min(2.5vw,4.44vh),52px)" }}>
        ¿Cómo selecciono la <span className="accent">gama de modelo</span> a utilizar?
      </h2>

      <div className="esc reveal mt-m">
        <div className="esc-cab">
          <span />
          <span>OpenAI / Codex</span>
          <span>Anthropic / Claude</span>
          <span>Google / Gemini</span>
          <span className="esc-precio-cab">
            salida
            <em>USD / M tokens</em>
          </span>
        </div>

        {NIVELES.map((n) => (
          <div className={`esc-fila t-${n.tier}`} key={n.tier}>
            <div className="esc-eje">
              <span className="e-tier">{n.tier}</span>
              <span className="e-uso">{n.uso}</span>
            </div>
            <div className={`esc-celda ${n.openai === "—" ? "vacia" : ""}`}>{n.openai}</div>
            <div className="esc-celda">{n.anthropic}</div>
            <div className={`esc-celda ${n.google === "—" ? "vacia" : ""}`}>{n.google}</div>
            <div className="esc-precio">
              <b>{n.salida}</b>
            </div>
          </div>
        ))}
      </div>

      <p className="figcap reveal">
        Esto tampoco es todo el mapa: hay familias más nuevas, como <b>Jev, de TypeSafe AI</b>, que
        no compiten acá porque no son modelos de conversación — están más cerca del machine
        learning tradicional: clasificación y ponderación, no texto.
      </p>
    </SlideFrame>
  );
}
