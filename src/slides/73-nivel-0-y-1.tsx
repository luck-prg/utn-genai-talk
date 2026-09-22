import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Niveles 0 y 1",
  seccion: "2.2.1 · MADUREZ",
  steps: 3,
  notes:
    "Nivel 0 es el modelo pelado con una caja de texto: la función de predecir el siguiente token y nada más — chat, copiar-pegar y autocompletado, incluido el autocompletado del IDE. Sin contexto persistente, sin reglas, sin plan formal, sin comandos de validación, sin memoria, sin límites de permisos. Copiar y pegar es el protocolo de integración. Es el nivel del vibe-coding: útil para empezar, riesgoso si se confunde velocidad con calidad. Nivel 1 es cuando el usuario empieza a dirigir: primero se planifica, después se ejecuta. Plan mode antes de tocar código, división en pasos verificables, elección consciente de modelo, revisión humana frecuente. Decilo en voz alta: el nivel 1 es exactamente lo que vimos hace veinte minutos. Lo que todavía falta son workflows reutilizables, automatización y memoria estable.",
  transition: "fade",
};

export default function Nivel0y1() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.1 · MADUREZ">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        De <span className="accent">pegar texto</span> a <span className="accent">dirigir</span>
      </h2>

      <div className="versus mt-l">
        <Paso n={1} className="vs-col reserva">
          <div className="vs-tag">nivel 0</div>
          <div className="vs-num chico">vibe-coding</div>
          <div className="vs-body">Chat, copiar-pegar y autocompletado. Sin contexto persistente.</div>
        </Paso>

        <Paso n={2} className="vs-col acc reserva">
          <div className="vs-tag">nivel 1</div>
          <div className="vs-num chico">primero el plan</div>
          <div className="vs-body">Plan, pasos verificables, elección consciente de modelo.</div>
        </Paso>
      </div>
    </SlideFrame>
  );
}
