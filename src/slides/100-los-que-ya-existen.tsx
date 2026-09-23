import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Los que ya existen",
  seccion: "3.2.1 · EL MÉTODO",
  notes:
    "La slide bisagra. Las cuatro tienen la MISMA forma: algo se define antes, el código lo tiene que satisfacer. Dejá eso plantado: cuando llegues a SDD, la sala ya va a entender que no es una moda nueva.",
  transition: "fade",
};

const METODOS: { icon: PictoName; title: string; body: string }[] = [
  { icon: "test", title: "TDD", body: "Primero el test." },
  { icon: "behavior", title: "BDD", body: "Primero el comportamiento." },
  { icon: "domain", title: "DDD", body: "Primero el lenguaje del negocio." },
  { icon: "contract", title: "SDD", body: "Primero el contrato." },
];

export default function LosQueYaExisten() {
  return (
    <SlideFrame header={false} footer={false} meta="LO QUE YA CONOCEMOS">
      <h2 className="display t-md reveal">Cuatro que ya conocés</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {METODOS.map((m) => (
          <div className="card" key={m.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={m.icon} />
            </div>
            <div className="c-title">{m.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{m.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">Algo se define antes.</span> El código lo satisface. Ninguno es nuevo,
        casi ninguno se aplica.
      </p>
    </SlideFrame>
  );
}
