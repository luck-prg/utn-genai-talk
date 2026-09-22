import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "La responsabilidad del ingeniero",
  seccion: "2.2.1 · MADUREZ",
  steps: 2,
  notes:
    "Dos citas que le dan peso a esta parte. Mitchell Hashimoto, el creador de Terraform: cada vez que encontrás que un agente comete un error, te tomás el tiempo de diseñar una solución para que nunca vuelva a cometerlo. Eso es la responsabilidad del ingeniero en una frase — no corregir la salida, corregir el entorno que la produjo. Y el equipo de OpenAI: nuestros desafíos más difíciles pasan ahora por diseñar entornos, bucles de feedback y sistemas de control. No por escribir código. La regla operativa que cierra la idea es la más incómoda: si no podés irte a dormir y dejar a tus agentes trabajando, tu harness tiene agujeros. Y la línea del apunte que conviene repetir acá porque es la mejor de toda la charla: la responsabilidad nunca se delega.",
  transition: "fade",
};

export default function Responsabilidad() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.1 · MADUREZ">
      <p className="eyebrow reveal">›// qué hace un ingeniero cuando el agente falla</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        No corregís la salida:
        <br />
        corregís el <span className="accent">entorno</span> que la produjo
      </h2>

      <Paso n={1} className="mt-l">
        <p className="quote">
          Cada vez que un agente comete un error, diseñás una solución para que{" "}
          <span className="accent">nunca vuelva a cometerlo</span>.
        </p>
        <p className="figcap" style={{ textAlign: "left" }}>
          Mitchell Hashimoto · creador de Terraform
        </p>
      </Paso>
    </SlideFrame>
  );
}
