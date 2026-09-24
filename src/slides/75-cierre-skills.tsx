import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Para que se lleven",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Las cuatro que dijiste en el ensayo, en el mismo orden: de dónde nace, para qué sirve el encabezado, que puede usar scripts y archivos, y el criterio propio. La última es tuya y es la mejor del bloque: decila mirando a la sala y no le agregues nada atrás. Después, gracias y devolvés a Lucho, y avisás que en el track 3 vuelven las skills con un caso en la práctica.",
  transition: "fade",
};

const lineStyle = {
  fontSize: "clamp(20px, 2.4vw, 50px)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  marginTop: "clamp(10px, 1.2vw, 24px)",
} as const;

export default function ParaQueSeLleven() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <h2 className="display t-md reveal">Para que se lleven</h2>
      <p className="display reveal" style={lineStyle}>
        Nace de una necesidad real: sacar tu <span className="accent">criterio</span> de tu cabeza.
      </p>
      <p className="display reveal" style={lineStyle}>
        El encabezado existe para que sepa <span className="accent">cuándo</span> usarla.
      </p>
      <p className="display reveal" style={lineStyle}>
        Puede usar <span className="accent">scripts</span> y archivos, si vos se lo decís.
      </p>
      <p className="display reveal" style={lineStyle}>
        Si vamos a darle criterio al agente, tengamos <span className="accent">criterio</span>{" "}
        nosotros.
      </p>
    </SlideFrame>
  );
}
