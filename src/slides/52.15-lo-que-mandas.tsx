import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que enviás queda fuera de tu control",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 3,
  notes:
    "[~1:30] Arranco por lo que ya hacen todos: pegar código, un error o un CSV en el chat. PASO 0: todo lo que mandás a un proveedor queda del otro lado — y ahí deja de estar bajo tu control. PASO 1: se puede guardar, analizar, compartir con terceros (otras empresas, gobiernos) y usar para reentrenar el modelo. No es paranoia: está en los términos y condiciones. PASO 2: en la mayoría de los planes, las grandes empresas entrenan con lo que les mandás, por defecto: ChatGPT entrena salvo que apagues 'Mejorar el modelo para todos'; Claude, desde septiembre de 2025, entrena con chats y sesiones de código salvo opt-out, y si aceptás la retención pasa de 30 días a 5 años; Gemini gratis además avisa que revisores humanos pueden leer lo que mandás; y GitHub Copilot Free/Pro entrena con tu código desde abril de 2026. DECIR ORALMENTE LA EXCEPCIÓN: en la API paga y en los planes de empresa, por contrato no entrenan — pero igual guardan registros un tiempo para detectar abuso. Y un detalle que dijo el propio Sam Altman en 2025: lo que le contás a ChatGPT no tiene secreto profesional; si hay un juicio, pueden estar obligados a entregarlo. (En el juicio del New York Times a OpenAI se ordenó conservar todos los chats, incluso los borrados.)",
  transition: "fade",
};

const VERBOS = ["se guarda", "se analiza", "se comparte", "se usa para entrenar"];

export default function LoQueMandas() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// datos enviados a un proveedor externo</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Lo que enviás <span className="accent">queda fuera de tu control</span>
      </h2>

      <Paso n={1} className="mt-m">
        <div className="chips">
          {VERBOS.map((v) => (
            <span className="chip" key={v}>
              {v}
            </span>
          ))}
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="vs-col acc">
          <div className="vs-tag">OpenAI · Anthropic · Google · GitHub</div>
          <div className="vs-num">pueden entrenar con tus datos</div>
          <div className="vs-body">En la mayoría de sus planes, por defecto.</div>
        </div>
      </Paso>
    </SlideFrame>
  );
}
