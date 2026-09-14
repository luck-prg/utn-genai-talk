import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Las 6 herramientas del harness",
  seccion: "BLOQUE 2 · CONTEXT ENG.",
  transition: "fade",
};

const HERRAMIENTAS = [
  {
    tag: "01",
    title: "Rules",
    body: (
      <>
        <b>Políticas</b> que debe respetar el agente, <b>convenciones</b> y <b>restricciones</b>.
      </>
    ),
  },
  {
    tag: "02",
    title: "Commands",
    body: (
      <>
        <b>Pasos a seguir</b> para solucionar un <b>problema concreto</b>.
      </>
    ),
  },
  {
    tag: "03",
    title: "MCP",
    body: (
      <>
        <b>Contexto externo y dinámico</b>: comunicarse con el <b>mundo externo</b>.
      </>
    ),
  },
  {
    tag: "04",
    title: "Subagents",
    body: (
      <>
        <b>Colaboradores especializados</b> que se <b>paralelizan</b> y no ensucian la{" "}
        <b>ventana de contexto</b>.
      </>
    ),
  },
  {
    tag: "05",
    title: "Skills",
    body: (
      <>
        <b>Auto-invocadas</b>: flujos, reglas y utilidades <b>reutilizables</b> según el contexto.
      </>
    ),
  },
  {
    tag: "06",
    title: "Hooks",
    body: (
      <>
        <b>Scripts determinísticos</b> que se ejecutan en <b>momentos determinados</b> del flujo
        del agente.
      </>
    ),
  },
];

export default function SeisHerramientas() {
  return (
    <SlideFrame meta="BLOQUE 2 · CONTEXT ENG.">
      <h2 className="display t-md reveal">Las 6 herramientas del harness</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {HERRAMIENTAS.map((h) => (
          <div className="card" key={h.tag}>
            <div className="c-tag">{h.tag}</div>
            <div className="c-title">{h.title}</div>
            <div className="c-body">{h.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
