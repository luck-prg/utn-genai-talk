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
        Un agente autónomo necesita lo mismo que vos le dabas en el chat: alguien que lo{" "}
        <span className="accent">arranque</span>, alguien que <span className="accent">revise</span>{" "}
        lo que hizo, y un lugar donde <span className="accent">anotar</span> lo que aprendió.
      </h2>
      <p className="sub reveal mt-m" style={{ textAlign: "center" }}>
        <b className="accent">Cron, evals y un second brain</b> son eso.
      </p>
    </SlideFrame>
  );
}
