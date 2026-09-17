import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Límite 1 · Ventana de contexto limitada",
  seccion: "LÍMITES",
  notes:
    "El agente trabaja con fragmentos y no siempre entiende la arquitectura global. En algunos casos va directamente en contra de la arquitectura que enseñamos: dominio anémico, lógica de negocio filtrada en controllers, acoplamiento. Son fallas invisibles para cualquier test funcional, porque el agente no tiene la visión del conjunto — a menos que se la demos.",
  transition: "fade",
};

const SINTOMAS = ["dominio anémico", "lógica en controllers", "acoplamiento"];

export default function VentanaLimitada() {
  return (
    <SlideFrame meta="LÍMITES">
      <p className="eyebrow reveal">›// límite 1</p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        No ve el sistema completo:
        <br />
        trabaja con <span className="accent">fragmentos</span>
      </h2>

      <div className="reveal mt-m maxw">
        <p className="sub">
          Código que funciona y contradice el proyecto: fallas <b>invisibles para los tests</b>.
        </p>
        <div className="chips mt-s">
          {SINTOMAS.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="bar reveal mt-m">
        <span>
          La arquitectura es nuestro <b className="accent">lenguaje de especificación</b>…
        </span>
        <span>…y también el criterio para rechazar lo que no encaja.</span>
      </div>
    </SlideFrame>
  );
}
