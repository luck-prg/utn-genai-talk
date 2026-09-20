import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "./components/Picto";

export const meta: SlideMeta = {
  title: "Las dos cuentas",
  seccion: "EL COSTO",
  notes:
    "El momento que descomprime la sala: no era pereza ni ignorancia, era economía. Incluite vos en el 'no lo usábamos'. Las dos columnas son las dos cuentas que todos hicimos sin darnos cuenta.",
  transition: "fade",
};

const SIN_USARLO: { icon: PictoName; text: string }[] = [
  { icon: "wrong", text: "Construir lo que no era" },
  { icon: "why", text: "Nadie sabe por qué" },
  { icon: "rules", text: "Cada feature, sus reglas" },
];

const USARLO: { icon: PictoName; text: string }[] = [
  { icon: "write", text: "Escribirlo antes del código" },
  { icon: "alive", text: "Mantenerlo vivo" },
  { icon: "propagate", text: "Propagar cambios a mano" },
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

export default function LasDosCuentas() {
  return (
    <SlideFrame meta="EL COSTO">
      <h2 className="display t-md reveal">No era pereza. Era economía.</h2>
      <div className="two-col mt-l reveal">
        <div>
          <div className="col-head bad">Lo que costaba NO usarlo</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
            {SIN_USARLO.map((r) => (
              <Row key={r.text} {...r} />
            ))}
          </div>
        </div>
        <div>
          <div className="col-head bad">Lo que costaba usarlo</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
            {USARLO.map((r) => (
              <Row key={r.text} {...r} />
            ))}
          </div>
        </div>
      </div>
      <p className="body mt-m reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        <span className="k">Costo fijo alto, beneficio diferido.</span>
      </p>
    </SlideFrame>
  );
}
