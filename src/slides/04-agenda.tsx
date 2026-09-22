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
    numero: "01",
    titulo: "Fundamentos",
    temas: ["Modelos de lenguaje", "El ciclo agéntico", "Lo que pasa sin ingeniería de por medio"],
  },
  {
    numero: "02",
    titulo: "Context Engineering",
    temas: ["Diseñar el contexto es diseñar el agente", "De 2023 a hoy, y cómo se ejecuta"],
  },
  {
    numero: "03",
    titulo: "Modelo y método",
    temas: ["Elegir el modelo para cada tarea", "Spec-Driven Development", "Quiz y conclusiones"],
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
