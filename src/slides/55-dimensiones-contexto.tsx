import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué tiene que resolver el contexto",
  seccion: "2.1.1 · CONTEXT ENGINEERING",
  transition: "fade",
};

const DIMENSIONES = [
  {
    tag: "ventana",
    title: "Contexto finito",
    body: (
      <>
        Cada token <b>compite por lugar</b>: entra lo relevante, no todo el historial.
      </>
    ),
  },
  {
    tag: "alcance",
    title: "Capacidades acotadas",
    body: (
      <>
        El modelo <b>razona</b>, no ejecuta: las <b>tools</b> extienden lo que puede hacer.
      </>
    ),
  },
  {
    tag: "producto",
    title: "Producto ≠ código",
    body: (
      <>
        El repo no dice <b>para qué existe</b> la feature ni qué espera el usuario.
      </>
    ),
  },
  {
    tag: "negocio",
    title: "Conocimiento ausente",
    body: (
      <>
        <b>Reglas y decisiones</b> de la empresa que no están escritas en el código.
      </>
    ),
  },
  {
    tag: "memoria",
    title: "Sin memoria previa",
    body: (
      <>
        Cada conversación <b>arranca de cero</b>: lo aprendido hay que persistirlo.
      </>
    ),
  },
  {
    tag: "ruido",
    title: "Ruido que distrae",
    body: (
      <>
        El contexto irrelevante <b>degrada la precisión</b> tanto como su ausencia.
      </>
    ),
  },
];

export default function DimensionesContexto() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · CONTEXT ENG.">
      <h2 className="display t-md reveal">Qué tiene que resolver el contexto</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {DIMENSIONES.map((d) => (
          <div className="card" key={d.tag}>
            <div className="c-tag">{d.tag}</div>
            <div className="c-title">{d.title}</div>
            <div className="c-body">{d.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
