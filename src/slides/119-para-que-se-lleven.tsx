import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Para que se lleven",
  seccion: "CIERRE · BLOQUE 3",
  notes:
    "Las cinco frases para el que disoció en algún momento. Leelas despacio, una por una. Después: gracias, no se vayan que viene el quiz para cerrar el evento, y la conclusión de Luciano.",
  transition: "zoom",
};

const lineStyle = {
  fontSize: "clamp(22px, 2.6vw, 56px)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  marginTop: "clamp(10px, 1.2vw, 24px)",
} as const;

export default function ParaQueSeLleven() {
  return (
    <SlideFrame header={false} footer={false} meta="CIERRE" center>
      <h2 className="display t-md reveal">Para que se lleven</h2>
      <p className="display reveal" style={lineStyle}>
        El humano razona, piensa y dirige. El agente <span className="accent">ejecuta</span>.
      </p>
      <p className="display reveal" style={lineStyle}>
        No estamos reinventando la <span className="accent">rueda</span>.
      </p>
      <p className="display reveal" style={lineStyle}>
        Cayó el muro del <span className="accent">costo</span>.
      </p>
      <p className="display reveal" style={lineStyle}>
        No se delega el pensamiento. Se delega la <span className="accent">formalidad</span>.
      </p>
      <p className="display reveal" style={lineStyle}>
        El método necesita contexto. El contexto necesita <span className="accent">método</span>.
      </p>
    </SlideFrame>
  );
}
