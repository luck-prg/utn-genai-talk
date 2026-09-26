import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Los que ya existen",
  seccion: "3.2.1 · EL MÉTODO",
  notes:
    "La slide bisagra. No asumas que los conocen: la mayoría no conoce ninguno o conoce uno. Presentalos en una frase cada uno, sin entrar en detalle. Las cuatro tienen la MISMA forma: algo se define antes, el código lo tiene que satisfacer. Dejá eso plantado: cuando llegues a SDD, la sala ya va a entender que no es una moda nueva.",
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
    <SlideFrame header={false} footer={false} meta="LO QUE YA EXISTE">
      <h2 className="display t-md reveal">Cuatro métodos que ya existían</h2>
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
        <span className="k">En todos, algo se define antes</span> y el código debe satisfacerlo.
        Ninguno es nuevo, pero su adopción es baja.
      </p>
    </SlideFrame>
  );
}
