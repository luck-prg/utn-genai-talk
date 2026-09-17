import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lectura económica",
  seccion: "MODELOS",
  notes:
    "Cierre de la sección. El output es mucho más caro que el input: pedir respuestas largas o reescrituras enormes multiplica el costo. El cache abarata el contexto estable — rules, specs, docs del repo. El modo rápido puede duplicar el precio. Y en tareas grandes el costo real no es sólo el modelo: son los ciclos, los retries y el contexto innecesario.",
  transition: "fade",
};

const FACTORES = [
  {
    tag: "output",
    title: "Más caro que el input",
    body: "Respuestas largas y reescrituras enormes multiplican la cuenta.",
    acc: true,
  },
  {
    tag: "cache",
    title: "Abarata lo estable",
    body: "Rules, specs y docs del repo se reutilizan entre llamadas.",
  },
  {
    tag: "modo rápido",
    title: "Puede duplicar el precio",
    body: "Para urgencias, no como default.",
  },
  {
    tag: "el resto",
    title: "Ciclos y retries",
    body: "El costo real no es sólo el modelo: también las vueltas de más.",
  },
];

export default function LecturaEconomica() {
  return (
    <SlideFrame meta="MODELOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Gestionar el <span className="accent">presupuesto de razonamiento</span>
      </h2>

      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {FACTORES.map((f) => (
          <div className={`card ${f.acc ? "acc" : ""}`} key={f.tag}>
            <div className="c-tag">{f.tag}</div>
            <div className="c-title">{f.title}</div>
            <div className="c-body">{f.body}</div>
          </div>
        ))}
      </div>

      <div className="bar reveal mt-s">
        <span>
          No todo merece el modelo premium. No todo se hace con el más barato.
        </span>
        <span className="accent">
          <b>Elegir la herramienta justa para el riesgo correcto.</b>
        </span>
      </div>
    </SlideFrame>
  );
}
