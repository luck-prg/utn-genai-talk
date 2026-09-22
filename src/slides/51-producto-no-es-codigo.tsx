import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Límite 3 · Producto y código no son lo mismo",
  seccion: "1.3.2 · IA SIN INGENIERÍA",
  steps: 3,
  notes:
    "El tercer límite es el más fácil de pasar por alto porque el código compila y los tests pasan. Producto y código no son lo mismo: producir código no es producir producto. DECIRLO EN VOZ ALTA: lo más importante es satisfacer las necesidades que el sistema resuelve — el producto es el foco, el código es sólo el medio. Como ingenieros tenemos que solucionar de forma eficaz: elegir la solución que resuelva la necesidad real con el menor costo de complejidad y mantenimiento, no la que más código genere. Queda afuera todo lo que decide si la cosa sirve: la experiencia de uso, la adecuación funcional real, la escalabilidad, la mantenibilidad, la observabilidad, y los trade-offs técnicos que tienen consecuencias a seis meses. Los agentes no piensan automáticamente como product engineers. Eso no es una falla del modelo: es la parte del trabajo que sigue siendo nuestra.",
  transition: "fade",
};

const QUEDA_AFUERA = ["experiencia de uso", "escalabilidad", "mantenibilidad", "trade-offs"];

export default function ProductoNoEsCodigo() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · IA SIN INGENIERÍA">
      <p className="eyebrow reveal">›// límite 3</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        Producto y código <span className="accent">no son lo mismo</span>
      </h2>

      <Paso n={1} className="mt-l">
        <div className="chips">
          {QUEDA_AFUERA.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            Compila, los tests pasan… y el <b className="accent">sistema empeoró</b>.
          </span>
          <span>
            Lo importante es satisfacer la <b className="accent">necesidad</b>: el producto es el foco, el código
            es el medio.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
