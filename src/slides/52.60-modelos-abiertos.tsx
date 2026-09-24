import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "¿Y los modelos abiertos?",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 3,
  notes:
    "[~1:00] ¿Hay salida? Una parte de la respuesta son los modelos abiertos: Llama, Mistral, Qwen y otros publican los pesos, así que se pueden descargar y correr en infraestructura propia. PASO 1 — lo que suman: los datos nunca salen de tu máquina o de tu organización, dependés menos de un proveedor, y con modelos chicos puede ser más barato. PASO 2 — los peros: casi siempre se publican los pesos pero no el código ni los datos de entrenamiento, por eso se habla de 'pesos abiertos' y no de código abierto; el hardware lo ponés vos; muchas licencias tienen restricciones; y hay presiones empresariales para limitarlos 'por seguridad'. Y un ejemplo cercano: Latam-GPT, un modelo abierto hecho en Chile por un equipo de toda la región, con contenido latinoamericano (aunque sobre infraestructura de Amazon). Cómo se elige entre abierto y cerrado lo vemos en el bloque de modelos.",
  transition: "fade",
};

export default function ModelosAbiertos() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        ¿Y los modelos <span className="accent">abiertos</span>?
      </h2>

      <div className="versus mt-l">
        <Paso n={1} className="vs-col acc">
          <div className="vs-tag">suman</div>
          <div className="vs-num chico">tus datos no salen</div>
          <div className="vs-body">Corren en tu infraestructura. Menos dependencia de un proveedor.</div>
        </Paso>
        <Paso n={2} className="vs-col">
          <div className="vs-tag">pero</div>
          <div className="vs-num chico">pesos abiertos ≠ código abierto</div>
          <div className="vs-body">
            Casi nunca publican los datos de entrenamiento. El hardware lo ponés vos.
          </div>
        </Paso>
      </div>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            <b className="accent">Latam-GPT</b>: abierto, regional, entrenado con datos de la región.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
