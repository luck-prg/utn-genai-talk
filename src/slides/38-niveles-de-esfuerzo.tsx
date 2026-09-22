import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "Los niveles de esfuerzo",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "Cinco niveles, y son un parámetro de la API: output_config.effort. PASO 0: la escala. El default es high. xhigh apareció después, entre high y max, y es el que usa Claude Code para codear. Bajar el esfuerzo no es sólo 'piensa menos': también hace menos llamadas a tools, más consolidadas, y menos preámbulo. PASO 1: el remate que engancha con todo lo anterior — razonar se cobra como tokens de salida, y la salida sale 5x. Elegir el nivel es elegir cuánto gastás. Regla práctica: subir el esfuerzo sólo cuando midas que hace falta, no por las dudas.",
  transition: "fade",
};

const NIVELES = [
  { nivel: "low", uso: "Subagentes y tareas simples: buscar un archivo, listar un directorio" },
  { nivel: "medium", uso: "Ediciones rutinarias, donde el camino ya está claro" },
  { nivel: "high", uso: "El default. Trabajo donde la calidad del razonamiento importa" },
  { nivel: "xhigh", uso: "Codear y tareas agénticas largas. Es el que usa Claude Code" },
  { nivel: "max", uso: "Cuando estar en lo correcto importa más que lo que cuesta" },
];

export default function NivelesDeEsfuerzo() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Cuánto pensar es una decisión</h2>
      <div className="escala mt-m reveal">
        {NIVELES.map((n) => (
          <div className="escalon" key={n.nivel}>
            <span className="escalon-nivel">{n.nivel}</span>
            <span className="escalon-uso">{n.uso}</span>
          </div>
        ))}
      </div>
      <Paso n={1} className="arq-remate">
        Razonar se cobra como <b>tokens de salida</b>: elegir el nivel es elegir cuánto gastás.
      </Paso>
    </SlideFrame>
  );
}
