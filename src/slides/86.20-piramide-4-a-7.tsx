import type { SlideMeta } from "@/deck/types";
import { Piramide } from "@/components/Piramide";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Los cuatro niveles que vienen",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Recorte de la pirámide: sólo los niveles 4 a 7, con todo el ancho de la diapositiva para que se lean grandes. Nómbralos de corrido — segunda memoria, loops, evals, teams — y anunciá que los vamos a ir viendo uno por uno.",
  transition: "fade",
};

export default function Piramide4a7() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" bodyClass="a-sangre">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)", textAlign: "center" }}>
        Los cuatro niveles <span className="accent">que vienen</span>
      </h2>

      <div className="reveal mt-s pir-holder">
        <Piramide paso={paso} niveles={[4, 5, 6, 7]} activos={[4, 5, 6, 7]} />
      </div>
    </SlideFrame>
  );
}
