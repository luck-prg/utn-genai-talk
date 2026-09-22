import type { SlideMeta } from "@/deck/types";
import { ActualizacionMetr, BarrasMetr } from "@/components/BarrasMetr";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "METR: la brecha entre sentir y medir",
  seccion: "1.3.2 · IA SIN INGENIERÍA",
  steps: 6,
  notes:
    "Ensayo controlado aleatorizado, julio 2025 — la misma metodología de los ensayos clínicos. 16 devs experimentados de open source, 246 tareas reales sobre repos que ellos mismos mantenían, bases de más de un millón de líneas. Predijeron 24% más rápido. Midieron 19% más lento. Y después de terminar seguían creyendo que habían ido 20% más rápido. Blindalo contra las objeciones, porque te las van a tirar: ¿eran principiantes? No, casi todos con decenas o cientos de horas con LLMs. ¿La IA produjo peor código? No, misma calidad. ¿Es un artefacto estadístico? No, se sostuvo en distintas metodologías y subconjuntos. Y la honestidad intelectual que te da autoridad: en febrero de 2026 METR publicó una actualización, los números se movieron y ambos intervalos cruzan el cero. Lo que NO se movió, y se replicó en METR, DORA y Stanford, es la brecha entre lo percibido y lo medido, siempre en la misma dirección. La tesis no es que la IA no sirva: es que tu sensación no es un instrumento de medición.",
  transition: "fade",
};

const OBJECIONES = ["¿principiantes? no", "¿peor código? no", "¿casualidad? no"];

export default function Metr() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · IA SIN INGENIERÍA">
      <p className="eyebrow reveal">›// estudio de METR · ensayo controlado aleatorizado, 2025</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(20px,min(2.5vw,4.44vh),52px)" }}>
        METR: creyeron que iban <span className="accent">más rápido</span>.
        <br />
        El cronómetro dijo <span className="accent">lo contrario</span>.
      </h2>

      <div className="reveal mt-m">
        <BarrasMetr paso={paso} />
      </div>

      <Paso n={4} className="mt-s">
        <div className="chips">
          {OBJECIONES.map((o) => (
            <span className="chip" key={o}>
              {o}
            </span>
          ))}
        </div>
      </Paso>

      <div className="mt-s">
        <ActualizacionMetr visible={paso >= 5} />
      </div>
    </SlideFrame>
  );
}
