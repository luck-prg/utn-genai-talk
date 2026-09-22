import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "¿En qué nivel estás?",
  seccion: "2.2.2 · PIRÁMIDE",
  steps: 3,
  notes:
    "El remate de todo el bloque. PASO 0 (lo que ya está en pantalla): votación a mano alzada, antes de mostrar ningún dato — ¿en qué nivel creen que está su equipo o su TP? Contá las manos en voz alta, nivel por nivel, y quedate con el número. PASO 1: aparece a qué bloque de la charla corresponde cada nivel — el 1 es la sección de modelos, el 2 la de herramientas, el 3 lo que sigue con Lucho. Decí en voz alta que el nivel 1 es exactamente lo que vimos hace veinte minutos. PASO 2, y acá cerrás el círculo: el aula se va a haber sobreestimado. Exactamente igual que los devs de METR — nos creemos más arriba de donde estamos. Nombralo explícitamente y cerraste la charla.",
  transition: "fade",
};

export default function PiramideVotacion() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="2.2.2 · PIRÁMIDE">
      <h2 className="display reveal" style={{ fontSize: "clamp(20px,min(2.5vw,4.44vh),52px)" }}>
        ¿En qué nivel está <span className="accent">tu equipo</span>?
      </h2>

      <div className="reveal mt-s">
        <Piramide paso={paso} bloquesDesde={1} />
      </div>

      <Paso n={2} className="mt-s">
        <div className="bar">
          <span>
            La mayoría <b>se cree más arriba</b> de donde realmente opera.
          </span>
          <span className="accent">
            <b>Misma brecha que los devs de METR: nos creemos más arriba de donde estamos.</b>
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
