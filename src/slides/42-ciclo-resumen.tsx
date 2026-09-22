import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "Tres palabras y una consecuencia",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  steps: 3,
  notes:
    "Cierre del bloque. PASO 0: las tres palabras que se tienen que llevar — ventana de contexto, harness, agent loop. PASO 1: la cuenta. Cada mensaje que mandás reenvía TODO el historial: la conversación no es gratis, se paga entera en cada vuelta. El cache abarata el prefijo que ya viste (hit ≈ 10% del precio), pero si el prefijo cambió no hay hit y se paga completo — por eso conviene que lo estable vaya adelante y lo que cambia al final. Y el token de salida es más caro por unidad, pero en una sesión agéntica el volumen de entrada es tan grande que la factura se la lleva la entrada. PASO 2: el remate — la ventana es finita y los recursos también. Entender cómo funciona el agente es lo que te permite no quemarlos al pedo.",
  transition: "fade",
};

const CONCEPTOS = [
  {
    tag: "dónde lee",
    titulo: "Ventana de contexto",
    body: "Todo lo que el modelo lee en UNA llamada. Tiene un límite duro: la memoria del agente es finita.",
  },
  {
    tag: "quién orquesta",
    titulo: "Harness",
    body: "El programa que guarda el historial, arma el contexto, aplica permisos y ejecuta las tools. El modelo solo predice.",
  },
  {
    tag: "cómo avanza",
    titulo: "Agent loop",
    body: "Llamar al modelo, ¿pide una tool?, ejecutarla, sumar el resultado al historial y volver a empezar.",
  },
];

const COSTOS = [
  "Cada vuelta reenvía el historial completo: la conversación se paga entera, de nuevo.",
  "El cache abarata el prefijo que se repite; si cambió, no hay hit y se paga todo.",
  "El volumen de entrada domina la factura, aunque el token de salida sea más caro.",
];

export default function CicloResumen() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Tres palabras que se llevan</h2>

      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {CONCEPTOS.map((c) => (
          <div className="card" key={c.titulo}>
            <div className="c-tag">{c.tag}</div>
            <div className="c-title">{c.titulo}</div>
            <div className="c-body">{c.body}</div>
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

      <Paso n={2} className="mt-m">
        <div className="bar">
          <span>
            Un agente trabaja con <b>recursos finitos</b>: entenderlo es lo que permite no quemarlos al pedo.
          </span>
          <span className="accent">ventana · costo · loop</span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
