import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué es un método",
  seccion: "EL MÉTODO",
  notes:
    "Abrí ubicando el bloque: el 1 fue qué es y cómo funciona, el 2 con qué se trabaja, este es el CÓMO. Después la definición. Un enfoque metodológico es aplicar un método — y un método es esto. No lo expliques de más: se entiende solo.",
  transition: "fade",
};

export default function QueEsUnMetodo() {
  return (
    <SlideFrame meta="EL MÉTODO">
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
