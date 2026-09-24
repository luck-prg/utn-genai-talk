import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué vamos a ver",
  seccion: "BLOQUE 0 · INTRODUCCIÓN",
  notes: "El recorrido completo, en orden. Treinta segundos: nombrar los tres tramos y seguir.",
  transition: "fade",
};

/** El recorrido de la charla, en tres tramos. */
const TRAMOS = [
  {
    numero: "Bloque 01",
    titulo: "¿Qué es un agente de código?",
    temas: ["Modelos de lenguaje", "El ciclo agéntico", "Los límites de la IA sin ingeniería", "Seguridad"],
  },
  {
    numero: "Bloque 02",
    titulo: "¿Cómo diseño un agente efectivo?",
    temas: ["Buenas prácticas", "Context Engineering", "Harness Engineering", "Conceptos varios"],
  },
  {
    numero: "Bloque 03",
    titulo: "¿Cómo desarrollo de forma efectiva con agentes?",
    temas: ["Uso correcto de los modelos", "Spec-Driven Development", "Conclusiones y preguntas"],
  },
];

export default function Agenda() {
  return (
    <SlideFrame
      header={false}
      footer={false}
      meta="BLOQUE 0 · INTRODUCCIÓN"
      // Las columnas van a sangre, de borde a borde de la pantalla.
      after={
        <div className="agenda-cols">
          {TRAMOS.map((t, i) => (
            <div className="agenda-col reveal" key={t.numero}>
              {i === 0 && <p className="agenda-rotulo">Qué vamos a ver</p>}
              <div className="agenda-num">{t.numero}</div>
              <h2 className="display agenda-titulo">{t.titulo}</h2>
              <ul className="agenda-temas">
                {t.temas.map((tema) => (
                  <li key={tema}>{tema}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      }
    >
      <></>
    </SlideFrame>
  );
}
