import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué es un método",
  seccion: "BLOQUE 1 · EL MÉTODO",
  notes:
    "Abrí ubicando el track: el 01 fue qué es, el 02 con qué, este es el CÓMO. Después la definición. Un enfoque metodológico es aplicar un método — y un método es esto. No lo expliques de más: se entiende solo.",
  transition: "fade",
};

export default function QueEsUnMetodo() {
  return (
    <SlideFrame meta="BLOQUE 1 · EL MÉTODO">
      <p className="prompt reveal">&gt; definicion --metodo</p>
      <h2
        className="display reveal"
        style={{ fontSize: "var(--fs-stmt)", marginTop: "clamp(16px,1.8vw,36px)" }}
      >
        Decidir el <span className="accent">orden de las decisiones</span>
        <br />
        antes de tomarlas.
      </h2>
      <p className="sub reveal mt-m maxw">
        Un enfoque metodológico es aplicar uno. Nada más que eso.
      </p>
    </SlideFrame>
  );
}
