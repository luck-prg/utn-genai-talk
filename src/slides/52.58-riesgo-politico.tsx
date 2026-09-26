import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Riesgo · Político",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 4,
  notes:
    "[~1:15] Cuarto: el impacto político. PASO 0 — el dato: en 2025, Anthropic reportó un grupo que usó Claude Code para una campaña de espionaje contra unos 30 objetivos, y la IA hizo entre el 80 y el 90% del trabajo, sola. Atacar se volvió mucho más barato. PASO 1 — las mismas empresas que hacen los modelos que usamos, OpenAI, Anthropic, Google y xAI, firmaron contratos con el Departamento de Defensa de Estados Unidos. PASO 2 — empresas como Palantir están en el centro del espionaje digital a escala global. PASO 3 — y organizaciones de derechos humanos, como Amnistía Internacional, piden límites al uso de la IA en la guerra. La IA ya no es sólo una herramienta: es infraestructura de poder, y eso impacta en la vida democrática.",
  transition: "fade",
};

const LINEAS: { cuando: string; txt: React.ReactNode }[] = [
  { cuando: "defensa", txt: <>OpenAI, Anthropic, Google y xAI firmaron contratos con <b>el Pentágono</b>.</> },
  { cuando: "vigilancia", txt: <>Empresas como <b>Palantir</b>, en el centro del espionaje digital.</> },
  { cuando: "guerra", txt: <>Organizaciones de derechos humanos piden <b>límites a la IA en la guerra</b>.</> },
];

export default function RiesgoPolitico() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// riesgo 4 · político</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        La IA como <span className="accent">infraestructura de poder</span>
      </h2>

      <div className="dato-fila mt-m reveal">
        <div className="dato-grande" style={{ fontSize: "clamp(40px,min(5vw,8.9vh),100px)" }}>
          80⁠–⁠90%<small>GTG-1002 · 2025</small>
        </div>
        <p className="body">de una campaña de espionaje <b>la hizo la IA sola</b>, según la propia Anthropic.</p>
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
