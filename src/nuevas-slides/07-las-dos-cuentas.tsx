import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "./components/Picto";

export const meta: SlideMeta = {
  title: "Las dos cuentas",
  seccion: "EL COSTO",
  notes:
    "El momento que descomprime la sala: no era pereza ni ignorancia, era economía. Incluite vos en el 'no lo usábamos'. Las dos columnas son la cuenta que todos hicimos sin darnos cuenta: a la izquierda lo que ganábamos, a la derecha lo que nos costaba en tiempo. Beneficio diferido, costo fijo alto: por eso daba lo mismo. Fijate en la columna derecha: en la próxima slide vuelve dada vuelta.",
  transition: "fade",
};

const GANABAMOS: { icon: PictoName; text: string }[] = [
  { icon: "early", text: "Errores que aparecen temprano" },
  { icon: "ledger", text: "Cada decisión queda escrita" },
  { icon: "propagate", text: "Cambios que se propagan" },
];

const COSTABA: { icon: PictoName; text: string }[] = [
  { icon: "write", text: "Redactar y formatear" },
  { icon: "alive", text: "Mantenerlo actualizado" },
  { icon: "maintain", text: "Todo a mano" },
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
          <div className="col-head good">Lo que ganábamos usándolo</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
            {GANABAMOS.map((r) => (
              <Row key={r.text} {...r} />
            ))}
          </div>
        </div>
        <div>
          <div className="col-head bad">Lo que nos costaba</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
            {COSTABA.map((r) => (
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
