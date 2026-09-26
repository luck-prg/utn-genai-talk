import type { SlideMeta } from "@/deck/types";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Pirámide · niveles y bloques de la charla",
  seccion: "2.2.2 · PIRÁMIDE",
  steps: 2,
  notes:
    "El remate de todo el bloque. PASO 0 (lo que ya está en pantalla): votación a mano alzada, antes de mostrar ningún dato — ¿en qué nivel creen que está su equipo o su TP? Contá las manos en voz alta, nivel por nivel, y quedate con el número. PASO 1: aparece a qué bloque de la charla corresponde cada nivel — el 1 es la sección de modelos, el 2 la de herramientas, el 3 lo que sigue con Lucho. Decí en voz alta que el nivel 1 es exactamente lo que vimos hace veinte minutos, y cerrá remarcando que la madurez del equipo depende del andamiaje que construye, no solo del modelo.",
  transition: "fade",
};

export default function PiramideVotacion() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="2.2.2 · PIRÁMIDE">
      <div className="reveal pir-holder">
        <Piramide paso={paso} bloquesDesde={1} />
      </div>
    </SlideFrame>
  );
}
