import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "Conceptos importantes",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "Cierre del bloque. PASO 0: las tres palabras que se tienen que llevar — ventana de contexto, harness, ciclo agéntico. PASO 1: la cuenta. Cada mensaje que mandás reenvía TODO el historial: la conversación no es gratis, se paga entera en cada vuelta. El cache abarata el prefijo que ya viste (hit ≈ 10% del precio), pero si el prefijo cambió no hay hit y se paga completo — por eso conviene que lo estable vaya adelante y lo que cambia al final. Y el token de salida es más caro por unidad, pero en una sesión agéntica el volumen de entrada es tan grande que la factura se la lleva la entrada.",
  transition: "fade",
};

const CONCEPTOS = [
  { tag: "dónde lee", titulo: "Ventana de contexto" },
  { tag: "quién orquesta", titulo: "Harness" },
  { tag: "cómo avanza", titulo: "Ciclo agéntico" },
];

const COSTOS = [
  "Cada vuelta reenvía el historial completo: la conversación se paga entera, de nuevo.",
  "El cache abarata el prefijo que se repite; si cambió, no hay hit y se paga todo.",
  "El volumen de entrada domina la factura, aunque el token de salida sea más caro.",
];

export default function CicloResumen() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Conceptos importantes</h2>

      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {CONCEPTOS.map((c) => (
          <div className="card" key={c.titulo}>
            <div className="c-tag">{c.tag}</div>
            <div className="c-title">{c.titulo}</div>
          </div>
        ))}
      </div>

      <Paso n={1} className="mt-m">
        <ul className="blist" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(12px,1.4vw,28px)" }}>
          {COSTOS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Paso>
    </SlideFrame>
  );
}
