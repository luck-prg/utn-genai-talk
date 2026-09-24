import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Soberanía: ¿de quién dependemos?",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 5,
  notes:
    "[~1:15] Y esto abre una pregunta más grande: la soberanía. PASO 0 — el dato: según Naciones Unidas, sólo 32 países tienen centros de datos para IA, y el 90% de esa capacidad está en dos. Más de 150 países no tienen cómputo propio. Argentina está en ese grupo. PASO 1 — primer riesgo: tus datos se procesan en otro país y bajo sus leyes. No importa qué diga el contrato: si la empresa es de ese país, su gobierno puede pedirle los datos. PASO 2 — segundo: las reglas las pone un tercero. Precios, términos y hasta el acceso pueden cambiar de un día para el otro. Ya pasó: en julio de 2024 OpenAI cortó el acceso a su API desde China, Rusia y otros países, con dos semanas de aviso. Si tu producto dependía de eso, se caía. PASO 3 — tercero: lo que se construye alrededor depende de esa infraestructura. Empresas, universidades y Estados que arman todo sobre un proveedor extranjero quedan atados a él — lo que Cecilia Rikap llama dependencia digital. PASO 4 — el remate: pocas empresas, de pocos países, tienen casi toda la información del mundo.",
  transition: "fade",
};

const RIESGOS: { cuando: string; txt: React.ReactNode }[] = [
  { cuando: "datos", txt: <>Se procesan en <b>otro país</b>, bajo sus leyes.</> },
  { cuando: "reglas", txt: <>Precios, términos y acceso <b>los decide un tercero</b>, y pueden cambiar mañana.</> },
  { cuando: "futuro", txt: <>Lo que construimos encima queda <b>atado a ese proveedor</b>.</> },
];

export default function Soberania() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// soberanía digital</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        ¿De quién <span className="accent">dependemos</span>?
      </h2>

      <div className="dato-fila mt-m reveal">
        <div className="dato-grande">
          90%<small>ONU · 2026</small>
        </div>
        <p className="body">
          de la capacidad de cómputo para IA está en <b>dos países</b>. Más de 150 no tienen cómputo propio.
        </p>
      </div>

      <div className="casos mt-m">
        {RIESGOS.map((r, i) => (
          <Paso n={i + 1} className="caso" key={r.cuando}>
            <span className="caso-cuando">{r.cuando}</span>
            <span className="caso-txt">{r.txt}</span>
          </Paso>
        ))}
      </div>

      <Paso n={4} className="mt-m">
        <div className="bar">
          <span>
            Pocas empresas tienen <b className="accent">casi toda la información del mundo</b>.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
