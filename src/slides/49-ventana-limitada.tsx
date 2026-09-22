import type { SlideMeta } from "@/deck/types";
import { Linterna } from "@/components/Linterna";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Límite 1 · No ve el sistema completo",
  seccion: "1.3.2 · IA SIN INGENIERÍA",
  steps: 3,
  notes:
    "El agente trabaja con fragmentos: no puede ver el sistema completo. Mirá el plano — lo que cae dentro del haz lo resuelve bien, y el resto, que es justo lo que le da sentido a esa pieza, no existe para él. Son fallas invisibles para cualquier test funcional, porque el test también mira una pieza por vez. ¿Qué hacemos con eso? Dos cosas, y las dos son nuestras: usar la arquitectura que ya aprendimos como lenguaje de especificación, y transmitirle explícitamente el criterio de aceptación. Si no le decimos qué es una solución aceptable en este proyecto, la va a inventar.",
  transition: "fade",
};

export default function VentanaLimitada() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · IA SIN INGENIERÍA">
      <p className="eyebrow reveal">›// límite 1</p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        No puede ver el <span className="accent">sistema completo</span>
      </h2>

      <div className="reveal mt-s fig-fit">
        <Linterna paso={paso} />
      </div>

      <Paso n={2} className="mt-s">
        <div className="versus">
          <div className="vs-col acc">
            <div className="vs-tag">qué aportamos</div>
            <div className="vs-num chico">la arquitectura aprendida</div>
          </div>
          <div className="vs-col acc">
            <div className="vs-tag">y sobre todo</div>
            <div className="vs-num chico">el criterio de aceptación</div>
          </div>
        </div>
      </Paso>
    </SlideFrame>
  );
}
