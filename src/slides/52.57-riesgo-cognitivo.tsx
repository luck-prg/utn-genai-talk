import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Riesgo · Cognitivo",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 4,
  notes:
    "[~1:00] Tercero: el impacto cognitivo. PASO 0 — un estudio del MIT de 2025 midió la actividad cerebral de personas escribiendo ensayos: quienes usaban ChatGPT mostraron la menor conectividad, y después no podían citar su propio texto. PASO 1 — los autores lo llaman 'deuda cognitiva': lo que delegás, dejás de ejercitarlo. PASO 2 — a eso se suma la 'ironía de la automatización': cuanto más automatizada está una tarea, más difícil es supervisarla. PASO 3 — y justo vamos perdiendo las habilidades que necesitamos para hacerlo. Eso podría — y probablemente debería — ser un límite a la adopción masiva.",
  transition: "fade",
};

const LINEAS: { cuando: string; txt: React.ReactNode }[] = [
  { cuando: "deuda", txt: <>Los autores lo llaman <b>deuda cognitiva</b>: lo que delegás, dejás de ejercitarlo.</> },
  { cuando: "ironía", txt: <>Cuanto más se automatiza una tarea, <b>más difícil es supervisarla</b>.</> },
  { cuando: "supervisión", txt: <>Justo perdemos <b>las habilidades</b> que hacen falta para supervisar.</> },
];

export default function RiesgoCognitivo() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// riesgo 3 · cognitivo</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Lo que dejamos <span className="accent">de ejercitar</span>
      </h2>

      <div className="dato-fila mt-m reveal">
        <div className="dato-grande">
          MIT<small>2025</small>
        </div>
        <p className="body">Quienes escribían con ChatGPT mostraron <b>menos actividad cerebral</b> y después no podían citar su propio texto.</p>
      </div>

      <div className="casos anchos mt-m">
        {LINEAS.map((l, i) => (
          <Paso n={i + 1} className="caso" key={l.cuando}>
            <span className="caso-cuando">{l.cuando}</span>
            <span className="caso-txt">{l.txt}</span>
          </Paso>
        ))}
      </div>
    </SlideFrame>
  );
}
