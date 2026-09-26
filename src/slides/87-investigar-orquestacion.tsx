import { Fragment, type CSSProperties } from "react";
import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Qué puedo investigar para orquestar agentes?",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Cuatro conceptos para investigar por cuenta propia. CRON: tareas recurrentes en lenguaje natural, con resultado al chat, a un archivo o a otra plataforma. Ejemplo: todos los días hábiles a las 8:30, leer un CSV de ventas, resumir anomalías y enviar el resultado a un canal. Hermes, agente open source de Nous Research (feb. 2026), corre en tu propio servidor —no en una sesión de chat— y tiene un subsistema de cron real. LOOP: el mismo agente delega en subagentes aislados, paraleliza tareas y sostiene monitores, que aplican la misma idea de tarea recurrente a una condición: solo avisan o actúan si se cumple. EVAL: completar con el caso de uso que se quiera mostrar. MEMORIA EXTERNA: memoria fuera de la ventana de contexto. Obsidian es markdown plano en el disco, legible por la persona y por el agente; los links entre notas le dan estructura para navegar just-in-time sin cargarlo todo. La memoria sobrevive entre corridas y es auditable: se abre la nota y se ve qué registró el agente. Conecta con el nivel 4 de la pirámide.",
  transition: "fade",
};

const HERRAMIENTAS = [
  { nombre: "Cron", icono: "/img/conceptos/cron.svg" },
  { nombre: "Loop", icono: "/img/conceptos/loop.svg" },
  { nombre: "Eval", icono: "/img/conceptos/eval.svg" },
  { nombre: "Memoria externa", icono: "/img/conceptos/memoria.svg" },
];

/** Conceptos que flotan alrededor de las herramientas. `pos` es la ubicación
 * dentro de la escena (arriba y abajo se centran sobre su `left`); `dur` y
 * `delay` desfasan el movimiento de cada uno. */
const centrado = (left: string): CSSProperties => ({ left, translate: "-50% 0" });

const CONCEPTOS: { texto: string; pos: CSSProperties; dur: number; delay: number }[] = [
  // Arriba
  { texto: "Webhooks", pos: { top: "1%", ...centrado("25%") }, dur: 13, delay: -4 },
  { texto: "Objetivos (Goals)", pos: { top: "0%", ...centrado("75%") }, dur: 12, delay: -7 },
  // Costados: a la altura del título y de las herramientas
  { texto: "Productividad", pos: { top: "31%", left: "3%" }, dur: 13, delay: -6 },
  { texto: "Context engineering", pos: { top: "57%", left: "0%" }, dur: 14, delay: -3 },
  { texto: "Monitores", pos: { top: "31%", right: "3%" }, dur: 12, delay: -5 },
  { texto: "Tareas repetitivas", pos: { top: "57%", right: "0%" }, dur: 11, delay: -10 },
  // Abajo
  { texto: "Métricas de rendimiento", pos: { bottom: "2%", ...centrado("35%") }, dur: 12, delay: -11 },
  { texto: "Harness engineering", pos: { bottom: "1%", ...centrado("65%") }, dur: 13, delay: -9 },
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
