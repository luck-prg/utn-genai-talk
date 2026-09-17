import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué es un LLM",
  seccion: "FUNDAMENTOS",
  notes:
    "Arranque de la sección: el modelo predice y genera lenguaje. No es una base de datos ni un buscador. Reconoce patrones, infiere intención y produce artefactos textuales — y el código es sólo uno de ellos.",
  transition: "fade",
};

const ARTEFACTOS = [
  "explicaciones",
  "código",
  "documentación",
  "tests",
  "comandos",
  "planes",
  "análisis",
];

export default function ModelosDeLenguaje() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <p className="prompt reveal">&gt; ¿qué hay abajo de todo esto?</p>
      <h2 className="display t-md reveal mt-s">
        Un modelo entrenado
        <br />
        para <span className="accent">predecir lenguaje</span>
      </h2>
      <div className="reveal mt-m maxw">
        <p className="sub">
          Reconoce patrones, infiere intención, resume y transforma información. Todo lo que
          devuelve es <b>texto generado</b>, no una consulta a una base de verdad.
        </p>
        <div className="chips mt-m">
          {ARTEFACTOS.map((a) => (
            <span className="chip" key={a}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
