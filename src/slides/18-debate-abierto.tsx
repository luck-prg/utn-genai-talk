import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El debate abierto",
  seccion: "1.1.2 · ADE",
  steps: 3,
  notes:
    "Esta slide es una pregunta, no una respuesta — y en una facultad de ingeniería eso vale más. La objeción es buena: con un compilador o un framework dejás de mirar el código, esa es la definición de abstracción. Con un agente volvés todo el tiempo: a leerlo, a supervisarlo, a validarlo. Un refactor de IDE es predecible y no lo revisás; un agente exige un ciclo constante de generar, leer, validar y corregir. Así que, ¿es una capa de abstracción, un copiloto, o un cambio de paradigma? Dejarlo abierto es lo honesto: su lugar exacto en el proceso de desarrollo todavía es motivo de debate. Si el aula muerde el anzuelo, es el mejor momento de la charla.",
  transition: "fade",
};

const POSTURAS = ["¿capa de abstracción?", "¿copiloto?", "¿cambio de paradigma?"];

export default function DebateAbierto() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.2 · ADE">
      <p className="eyebrow reveal">›// la discusión sigue abierta</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        ¿Es realmente una <span className="accent">capa más</span>?
      </h2>

      <Paso n={1} className="mt-l">
        <div className="versus">
          <div className="vs-col">
            <div className="vs-tag">una abstracción de verdad</div>
            <div className="vs-num chico">el código deja de revisarse</div>
          </div>
          <div className="vs-col acc">
            <div className="vs-tag">un agente</div>
            <div className="vs-num chico">el código se revisa en forma continua</div>
          </div>
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="chips">
          {POSTURAS.map((p) => (
            <span className="chip" key={p}>
              {p}
            </span>
          ))}
        </div>
      </Paso>
    </SlideFrame>
  );
}
