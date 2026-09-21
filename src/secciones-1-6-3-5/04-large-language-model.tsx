import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Large Language Model",
  seccion: "1.1.1 · LLM Y TOKENS",
  steps: 4,
  notes:
    "Las tres palabras del nombre dicen casi todo. LARGE: miles de millones de parámetros, entrenado con una porción enorme del texto disponible. LANGUAGE: no aprendió reglas ni hechos, aprendió patrones estadísticos del lenguaje. MODEL: es un modelo, una aproximación — no una base de datos ni un buscador. No hay un lugar adentro donde esté guardada la respuesta. Y esto sirve para enganchar con lo que viene: si lo que aprendió son patrones del lenguaje, la pregunta obvia es qué unidad usa para medirlo. Esa unidad es el token.",
  transition: "fade",
};

const PALABRAS = [
  { palabra: "Large", que: "miles de millones de parámetros" },
  { palabra: "Language", que: "patrones del lenguaje, no reglas ni hechos" },
  { palabra: "Model", que: "una aproximación, no una base de datos" },
];

export default function LargeLanguageModel() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.1 · LLM Y TOKENS" center>
      <h2 className="display reveal" style={{ fontSize: "clamp(26px,min(3.2vw,5.69vh),66px)" }}>
        Las tres palabras del nombre
      </h2>

      <div className="llm mt-l">
        {PALABRAS.map((p, i) => (
          <Paso n={i + 1} className="llm-fila reserva" key={p.palabra}>
            <span className="llm-palabra">{p.palabra}</span>
            <span className="llm-que">{p.que}</span>
          </Paso>
        ))}
      </div>
    </SlideFrame>
  );
}
