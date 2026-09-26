import { Fragment, type CSSProperties } from "react";
import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué puedo investigar para orquestar agentes?",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Tres puntos de partida para investigar por cuenta propia. HERMES: agente open source de Nous Research (feb. 2026) que corre en tu propio servidor, no en una sesión de chat. Tiene un subsistema de cron real: tareas recurrentes en lenguaje natural, con resultado al chat, a un archivo o a otra plataforma. Ejemplo de su documentación: todos los días hábiles a las 8:30, leer un CSV de ventas, resumir anomalías y enviar el resultado a un canal. Los monitores aplican la misma idea a una condición: solo avisan o actúan si se cumple. Permite delegar en subagentes aislados y paralelizar. OBSIDIAN: memoria fuera de la ventana de contexto. Es markdown plano en el disco, legible por la persona y por el agente; los links entre notas le dan estructura para navegar just-in-time sin cargarlo todo. La memoria sobrevive entre corridas y es auditable: se abre la nota y se ve qué registró el agente. Conecta con el nivel 4 de la pirámide. GEMINI: completar con el caso de uso que se quiera mostrar.",
  transition: "fade",
};

const HERRAMIENTAS = [
  { nombre: "Hermes", icono: "/img/herramientas/hermes.svg" },
  { nombre: "Obsidian", icono: "/img/herramientas/obsidian.svg" },
  { nombre: "Gemini", icono: "/img/herramientas/gemini.svg" },
];

/** Conceptos que flotan alrededor de las herramientas. `pos` es la ubicación
 * dentro de la escena (arriba y abajo se centran sobre su `left`); `dur` y
 * `delay` desfasan el movimiento de cada uno. */
const centrado = (left: string): CSSProperties => ({ left, translate: "-50% 0" });

const CONCEPTOS: { texto: string; pos: CSSProperties; dur: number; delay: number }[] = [
  // Arriba
  { texto: "Cron", pos: { top: "3%", ...centrado("13%") }, dur: 11, delay: 0 },
  { texto: "Webhooks", pos: { top: "0%", ...centrado("38%") }, dur: 13, delay: -4 },
  { texto: "Evals", pos: { top: "2%", ...centrado("62%") }, dur: 12, delay: -8 },
  { texto: "Objetivos (Goals)", pos: { top: "0%", ...centrado("87%") }, dur: 12, delay: -7 },
  // Costados: a la altura del título y de las herramientas
  { texto: "Loop", pos: { top: "31%", left: "4%" }, dur: 10, delay: -2 },
  { texto: "Productividad", pos: { top: "57%", left: "0%" }, dur: 13, delay: -6 },
  { texto: "Monitores", pos: { top: "31%", right: "4%" }, dur: 12, delay: -5 },
  { texto: "Tareas repetitivas", pos: { top: "57%", right: "0%" }, dur: 11, delay: -10 },
  // Abajo
  { texto: "Context engineering", pos: { bottom: "1%", ...centrado("18%") }, dur: 14, delay: -3 },
  { texto: "Métricas de rendimiento", pos: { bottom: "3%", ...centrado("50%") }, dur: 12, delay: -11 },
  { texto: "Harness engineering", pos: { bottom: "1%", ...centrado("82%") }, dur: 13, delay: -9 },
];

export default function InvestigarOrquestacion() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" center>
      <div className="herramientas-escena reveal">
        {CONCEPTOS.map((c) => (
          <span
            key={c.texto}
            className="concepto-flotante"
            style={
              {
                ...c.pos,
                "--deriva-dur": `${c.dur}s`,
                "--deriva-delay": `${c.delay}s`,
              } as CSSProperties
            }
          >
            {c.texto}
          </span>
        ))}

        <h2 className="display herramientas-titulo">
          ¿Qué puedo investigar para
          <br />
          <span className="accent">orquestar agentes</span>?
        </h2>

        <div className="herramientas">
          {HERRAMIENTAS.map((h, i) => (
            <Fragment key={h.nombre}>
              {i > 0 && <span className="herramientas-enlace" aria-hidden="true" />}
              <figure className="herramienta">
                <div className="herramienta-burbuja">
                  <img src={h.icono} alt="" />
                </div>
                <figcaption>{h.nombre}</figcaption>
              </figure>
            </Fragment>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
