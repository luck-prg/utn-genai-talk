import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Agente = modelo + harness",
  seccion: "2.2.1 · MADUREZ",
  steps: 4,
  notes:
    "El marco que ordena toda la sección, y ya lo nombramos en la parte de herramientas. Un agente es un modelo más un harness, donde el harness es todo lo que hay en el agente menos el modelo. Desglosado: el modelo predice el siguiente token, y es lo único que no construimos nosotros. El contexto es lo que le entra para trabajar — las reglas, las specs, los archivos, la conversación. Y el harness es todo lo que decide qué entra, cuándo entra y qué se hace con lo que sale: las herramientas que le damos, los permisos que le ponemos, los comandos de validación, los subagents, los hooks. Con eso, cada nivel de la pirámide es simplemente cuánto harness le construiste.",
  transition: "fade",
};

const PIEZAS = [
  {
    parte: "el modelo",
    es: "predice el siguiente token",
    det: "lo único que no construimos nosotros",
  },
  {
    parte: "el contexto",
    es: "lo que le entra para trabajar",
    det: "reglas, specs, archivos, conversación",
  },
  {
    parte: "el harness",
    es: "decide qué entra y qué se valida",
    det: "tools, permisos, validaciones, hooks",
    acc: true,
  },
];

export default function ModeloMasHarness() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.1 · MADUREZ">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Agente = modelo + <span className="accent">harness</span>
      </h2>

      <div className="llm mt-l">
        {PIEZAS.map((p, i) => (
          <Paso n={i + 1} className="llm-fila reserva" key={p.parte}>
            <span className={`llm-palabra chico ${p.acc ? "" : "ink"}`}>{p.parte}</span>
            <span className="llm-que">
              <b>{p.es}</b> — {p.det}
            </span>
          </Paso>
        ))}
      </div>
    </SlideFrame>
  );
}
