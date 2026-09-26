import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Riesgo · Costos",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 2,
  notes:
    "[~1:00] Primer riesgo: los costos. No hay consenso sobre si el precio que pagamos hoy es real. PASO 0 — las plataformas de IA pierden plata: OpenAI proyecta perder unos 14 mil millones de dólares sólo en 2026. PASO 1 — entonces, ¿el precio de hoy es real, o está subsidiado para ganar mercado y dejar afuera a la competencia? PASO 2 — si es subsidio, el día que el precio se sincere, quien diseñó todo atado a un proveedor queda preso. PASO 3 — mientras tanto, los que sí ganan son los que venden el hardware y la infraestructura: NVIDIA, Amazon, Google, Microsoft.",
  transition: "fade",
};

const LINEAS: { cuando: string; txt: React.ReactNode }[] = [
  { cuando: "subsidio", txt: <>¿El precio de hoy es real, o está <b>subsidiado</b> para ganar mercado?</> }
];

export default function RiesgoCostos() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// riesgo 1 · costos</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        ¿Cuánto cuesta <span className="accent">de verdad</span>?
      </h2>

      <div className="dato-fila mt-m reveal">
        <div className="dato-grande" style={{ fontSize: "clamp(40px,min(5vw,8.9vh),100px)" }}>
          −US$ 14 mil M<small>OpenAI · 2026</small>
        </div>
        <p className="body">es lo que proyecta <b>perder</b> OpenAI sólo este año.</p>
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
