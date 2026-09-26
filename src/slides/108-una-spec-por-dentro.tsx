import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Una spec, por dentro",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Reemplaza al ejemplo del login. Cuatro partes: intención, escenarios de aceptación, requisitos verificables, criterios medibles. Lo que decís: acá no hay tecnología, es producto y negocio; por eso la puede leer y corregir alguien que no programa. Enganchá con lo que ya saben de la cátedra: el caso de uso está acá, partido en dos tarjetas. El 'para quién' de la intención es el actor, y los escenarios son sus flujos hechos verificables. Si alguien te discute que escenario y caso de uso son lo mismo, la diferencia es esta: el caso de uso describe la interacción completa —actor, precondición, flujo principal, alternativos, postcondición— y el escenario es una instancia concreta y comprobable. Uno a muchos: un caso de uso produce varios escenarios. No renombres la tarjeta, que no son sinónimos. Puente: '¿y por qué explota SDD y no otro? Porque trae lo mejor de dos mundos.'",
  transition: "fade",
};

const PARTES: { icon: PictoName; title: string; body: string }[] = [
  { icon: "spec", title: "Intención", body: "Qué problema resuelve y para quién." },
  {
    icon: "behavior",
    title: "Escenarios de aceptación",
    body: "Dado, cuando, entonces. Cada flujo del caso de uso, hecho comprobable.",
  },
  { icon: "contract", title: "Requisitos verificables", body: "Cada uno se puede comprobar." },
  { icon: "analyze", title: "Criterios medibles", body: "Cómo sabemos que salió bien." },
];

export default function UnaSpecPorDentro() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <h2 className="display t-md reveal">Una spec, por dentro</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {PARTES.map((p) => (
          <div className="card" key={p.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={p.icon} />
            </div>
            <div className="c-title">{p.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{p.body}</div>
          </div>
        ))}
      </div>
      <h3 className="display mt-s reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        La spec no menciona <span className="accent">tecnología</span>: describe producto y negocio.
      </h3>
    </SlideFrame>
  );
}
