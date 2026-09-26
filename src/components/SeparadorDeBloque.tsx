import type { CSSProperties, ReactNode } from "react";
import { Croquis } from "@/components/Croquis";
import type { CroquisNombre } from "@/components/Croquis";
import { QrMaterial } from "@/components/QrMaterial";
import { SlideFrame } from "@/components/SlideFrame";

interface BloqueData {
  /** Título del bloque, tal como figura en la agenda (04-agenda.tsx). */
  titulo: ReactNode;
  /** Los temas del bloque, en el mismo orden que la agenda. */
  temas: string[];
  /** Croquis de marginalia, elegidos por afinidad con los temas del bloque. Van del lado
   * izquierdo: el derecho lo ocupa la línea de tiempo de temas. */
  croquis: { nombre: CroquisNombre; style: CSSProperties }[];
}

/**
 * Contenido de cada apertura de bloque. Mantenerlo sincronizado con los
 * `TRAMOS` de `04-agenda.tsx`: mismo título, mismos temas.
 */
const BLOQUES: Record<number, BloqueData> = {
  1: {
    titulo: "¿Qué es un agente de código?",
    temas: ["Modelos de lenguaje", "El ciclo agéntico", "Los límites de la IA sin ingeniería", "Seguridad y riesgos"],
    croquis: [
      { nombre: "tokenizacion", style: { left: "4vw", top: "13vh", width: "min(23vw, 360px)" } },
      { nombre: "agentLoop", style: { left: "6vw", bottom: "9vh", width: "min(17vw, 250px)" } },
    ],
  },
  2: {
    titulo: "¿Cómo diseño un agente efectivo?",
    temas: ["Buenas prácticas", "Context Engineering", "Harness Engineering", "Conceptos varios"],
    croquis: [
      { nombre: "entornoAgente", style: { left: "4vw", top: "13vh", width: "min(21vw, 320px)" } },
      { nombre: "ventanaContexto", style: { left: "5vw", bottom: "8vh", width: "min(21vw, 330px)" } },
    ],
  },
  3: {
    titulo: "¿Cómo desarrollo de forma efectiva con agentes?",
    temas: ["Uso correcto de los modelos", "Spec-Driven Development", "Conclusiones y preguntas"],
    croquis: [
      { nombre: "specCodigo", style: { left: "5vw", top: "14vh", width: "min(17vw, 250px)" } },
      { nombre: "specDriven", style: { left: "4vw", bottom: "9vh", width: "min(23vw, 380px)" } },
    ],
  },
};

/**
 * Cadencia del punteo: arranca después del título y cada tema espera su
 * turno, al ritmo con el que la línea llega hasta su punto. Lento a
 * propósito, para que se note el trazo bajando.
 */
const TIMELINE_RETRASO_BASE = 0.4;
const TIMELINE_RETRASO_PASO = 1.1;

export function InicioDeBloque({ numero }: { numero: number }) {
  const etiqueta = `Bloque ${String(numero).padStart(2, "0")}`;
  const data = BLOQUES[numero];

  return (
    <SlideFrame
      meta={etiqueta.toUpperCase()}
      center
      header={false}
      footer={false}
      after={
        data && (
          <>
            {data.croquis.map((c) => (
              <Croquis key={c.nombre} nombre={c.nombre} style={c.style} />
            ))}
          </>
        )
      }
    >
      <div className="corte-layout">
        <div className="corte-copy">
          <p className="corte-kicker reveal">{etiqueta}</p>
          <h2 className="display corte-title reveal mt-m">{data?.titulo ?? etiqueta}</h2>
        </div>

        {/* Los temas del bloque, en fila vertical del lado derecho: la línea se
            dibuja de a poco y cada punto aparece por turno, no todos juntos. */}
        {data && (
          <ol
            className="corte-timeline"
            style={
              {
                "--timeline-duracion": `${Math.max(data.temas.length - 1, 1) * TIMELINE_RETRASO_PASO}s`,
                "--timeline-retraso": `${TIMELINE_RETRASO_BASE}s`,
              } as CSSProperties
            }
          >
            {data.temas.map((t, i) => {
              // Mismo retraso para el punto y su texto: aparecen juntos, uno
              // por vez, justo cuando la línea llega hasta ahí.
              const retraso = `${TIMELINE_RETRASO_BASE + i * TIMELINE_RETRASO_PASO}s`;
              return (
                <li
                  className="corte-timeline-item reveal"
                  key={t}
                  style={{ "--retraso": retraso, transitionDelay: retraso } as CSSProperties}
                >
                  <span className="corte-timeline-punto" aria-hidden="true" />
                  <span className="corte-timeline-texto">{t}</span>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </SlideFrame>
  );
}

export function PreguntasDeBloque({ numero }: { numero: number }) {
  return (
    <SlideFrame meta={`CIERRE · BLOQUE ${String(numero).padStart(2, "0")}`} center header={false} footer={false}>
      <QrMaterial>
        <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)" }}>
          ¿<span className="accent">Preguntas</span>?
        </h2>
      </QrMaterial>
    </SlideFrame>
  );
}
