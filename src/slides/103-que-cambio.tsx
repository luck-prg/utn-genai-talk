import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Qué cambió",
  seccion: "3.2.1 · EL MÉTODO",
  notes:
    "El giro, y la puerta a SDD. NO digas 'la IA se lleva lo tedioso y deja el razonamiento': eso invita a delegar y firmar. El argumento es el costo. Las tres filas son las mismas tres de la columna derecha de la slide anterior, dadas vuelta: señalalo. Plantá el puente en una frase, sin desarrollarlo: 'y eso lo hace un agente que lee tu método como contexto; después volvemos a esto'. La última frase es tuya y vuelve en el cierre: no se delega el criterio, se delega la formalidad.",
  transition: "curtain",
};

const RESUELTO: { icon: PictoName; text: string }[] = [
  { icon: "write", text: "Redactar: de días a minutos" },
  { icon: "alive", text: "Documentar: nace de la conversación" },
  { icon: "propagate", text: "Propagar: automático" },
];

function Row({ icon, text }: { icon: PictoName; text: string }) {
  return (
    <div style={{ display: "flex", gap: "clamp(10px, 1vw, 20px)", alignItems: "center" }}>
      <div style={{ color: "var(--color-fg)" }}>
        <Picto name={icon} />
      </div>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--fs-sub)",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          color: "var(--color-fg)",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function QueCambio() {
  return (
    <SlideFrame header={false} footer={false} meta="EL COSTO">
      <h2 className="display reveal" style={{ fontSize: "var(--fs-stmt)" }}>
        La IA no volvió el
        <br />
        razonamiento más fácil.
        <br />
        Volvió el método
        <br />
        <span className="accent">barato de sostener</span>.
      </h2>
      <div
        className="mt-m reveal"
        style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px, 2.2vw, 48px)", alignItems: "center" }}
      >
        {RESUELTO.map((r) => (
          <Row key={r.text} {...r} />
        ))}
      </div>
      <p
        className="display mt-s reveal"
        style={{ fontSize: "var(--fs-sub)", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--color-acento)" }}
      >
        No se delega el criterio. Se delega la formalidad.
      </p>
    </SlideFrame>
  );
}
