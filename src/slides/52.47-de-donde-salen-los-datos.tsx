import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿De dónde salen los datos?",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 3,
  notes:
    "[~0:45] Primero: los datos para entrenar, ¿de dónde salen? PASO 1 — en 2024 OpenAI le dijo al Parlamento británico que es 'imposible' entrenar los modelos líderes sin usar material con copyright. PASO 2 — y Anthropic pagó 1.500 millones de dólares por haber bajado libros de sitios piratas: unas 480 mil obras, unos 3.000 dólares por libro. Además compraba libros usados, les cortaba el lomo y los escaneaba. No siempre la consiguen de forma ética.",
  transition: "fade",
};

const CASOS: { cuando: string; txt: React.ReactNode }[] = [
  { cuando: "2024", txt: <><b>OpenAI</b>: es “imposible” entrenar sin material con copyright.</> },
  { cuando: "2025", txt: <><b>Anthropic</b> paga US$ 1.500 M por ~480 mil libros bajados de sitios piratas.</> },
];

export default function DeDondeSalenLosDatos() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        ¿De dónde salen <span className="accent">los datos</span>?
      </h2>

      <div className="casos mt-l">
        {CASOS.map((c, i) => (
          <Paso n={i + 1} className="caso" key={i}>
            <span className="caso-cuando">{c.cuando}</span>
            <span className="caso-txt">{c.txt}</span>
          </Paso>
        ))}
      </div>
    </SlideFrame>
  );
}
