import type { CSSProperties } from "react";
import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "No estamos inventando nada",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "La bisagra de la charla. Métodos formales: VDM en IBM Viena a principios de los 70, Z en Oxford a fines de los 70. Design by Contract: Bertrand Meyer, 1986, con Eiffel. El NOMBRE también es viejo: Ostroff, Paige y Makalsky, XP 2004, 'Agile Specification-Driven Development', que junta TDD con Design by Contract porque tests y contratos son especificaciones a distinta granularidad. Sam Hatoum usa 'spec-driven development' en consultoría desde 2016. En 2025 lo masifican Kiro (AWS) y Spec Kit (GitHub) para agentes. Datos verificables; no digas 'papers desde 1950' ni que el nombre es de 2025. Lo que decís: la idea siempre fue correcta y siempre chocó contra el mismo muro, el costo de sostenerla. Ese muro es el de las dos cuentas. Se cayó. Por eso volvemos a las bases: no porque esté de moda, porque ahora se puede pagar. Puente: 'les muestro la diferencia con el mismo pedido'.",
  transition: "fade",
};

export default function NoInventamosNada() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <h2 className="display t-md reveal">No estamos inventando nada</h2>
      <div
        className="loop mt-l reveal"
        style={{ alignItems: "center", "--fs-body": "clamp(13px, 1.3vw, 26px)" } as CSSProperties}
      >
        <span className="step">Años 70 · Métodos formales</span>
        <span className="arr">→</span>
        <span className="step">1986 · Design by Contract</span>
        <span className="arr">→</span>
        <span className="step">2004 · Spec-Driven</span>
        <span className="arr">→</span>
        <div style={{ color: "var(--color-fg)", display: "flex", alignItems: "center" }}>
          <Picto name="wall" />
        </div>
        <span className="arr">→</span>
        <span className="step acc">Hoy · SDD</span>
      </div>
      <p
        className="display mt-m reveal"
        style={{
          fontSize: "var(--fs-sub)",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          color: "var(--color-muted)",
        }}
      >
        La idea tiene medio siglo; su límite fue siempre el costo de sostenerla.
      </p>
      <h3 className="display mt-s reveal" style={{ fontSize: "var(--fs-stmt)" }}>
        Volvemos a las bases porque <span className="accent">ahora se pueden sostener</span>.
      </h3>
    </SlideFrame>
  );
}
