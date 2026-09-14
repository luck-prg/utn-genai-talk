import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué cambió",
  seccion: "BLOQUE 3 · EL COSTO",
  notes:
    "El giro, y la puerta a SDD. NO digas 'la IA se lleva lo tedioso y deja el razonamiento': eso invita a delegar y firmar. El argumento es el costo. La última frase es tu seguro para el Q&A: cuando pregunten '¿y si el agente se equivoca?', ya está contestado.",
  transition: "curtain",
};

export default function QueCambio() {
  return (
    <SlideFrame meta="BLOQUE 3 · EL COSTO">
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)" }}>
        La IA no volvió el
        <br />
        razonamiento más fácil.
        <br />
        Volvió el método
        <br />
        <span className="accent">barato de sostener</span>.
      </h2>
      <p className="body mt-l reveal maxw">
        Redactar pasó de días a minutos, mantener dejó de pudrirse y propagar un cambio bajó solo.{" "}
        <span className="k">Lo tedioso no desapareció: pasó de escribir a revisar.</span>
      </p>
    </SlideFrame>
  );
}
