import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Quién usa agentes?",
  seccion: "BLOQUE 0 · APERTURA",
  notes: "Pregunta al público, mano arriba.",
  transition: "slide",
};

const AGENTES = [
  { src: "/img/agentes/cursor.png", alt: "Cursor", label: "cursor" },
  { src: "/img/agentes/copilot.png", alt: "GitHub Copilot", label: "copilot" },
  { src: "/img/agentes/claude.png", alt: "Claude", label: "claude" },
  { src: "/img/agentes/gemini.png", alt: "Gemini", label: "gemini" },
  { src: "/img/agentes/codex.png", alt: "Codex", label: "codex" },
];

export default function InteraccionAgentes() {
  return (
    <SlideFrame meta="BLOQUE 0 · APERTURA">
      <div className="agents-row">
        <div className="agents-text">
          <p className="eyebrow reveal">›// manos arriba</p>
          <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)", marginTop: "clamp(14px,1.6vw,32px)" }}>
            ¿Cuántos ya usan
            <br />
            agentes de IA en su
            <br />
            ciclo de desarrollo?
          </h2>
        </div>
        <div className="agents-logos reveal">
          {AGENTES.map((agente) => (
            <div className="logo-tile" key={agente.label}>
              <img src={agente.src} alt={agente.alt} />
              <span>{agente.label}</span>
            </div>
          ))}
          <div className="logo-tile logo-tile--more">
            <span className="more">+ otros</span>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
