import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Cron, evals y un second brain",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Cierre del bloque de tips: los tres ejemplos son la misma idea de siempre, sin vos ahí para sostenerla en el momento. Un disparador reemplaza tu 'dale, arrancá'; un eval reemplaza tu revisión; un second brain reemplaza tu memoria de la conversación.",
  transition: "fade",
};

export default function TipsCierre() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN" center>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)", textAlign: "center" }}>
        Un agente autónomo requiere un <span className="accent">disparador</span> que lo inicie, una{" "}
        <span className="accent">evaluación</span> que revise su trabajo y una{" "}
        <span className="accent">memoria</span> donde registrar lo aprendido.
      </h2>
      <p className="sub reveal mt-m" style={{ textAlign: "center" }}>
        <b className="accent">Cron, evals y memoria externa</b> cumplen esas tres funciones.
      </p>
    </SlideFrame>
  );
}
