import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Una spec, por dentro",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Reemplaza al ejemplo del login. Cuatro partes: intención, escenarios de aceptación, requisitos verificables, criterios medibles. Lo que decís: acá no hay tecnología, es producto y negocio; por eso la puede leer y corregir alguien que no programa. Puente: '¿y por qué explota SDD y no otro? Porque trae lo mejor de dos mundos.'",
  transition: "fade",
};

const PARTES: { icon: PictoName; title: string; body: string }[] = [
  { icon: "spec", title: "Intención", body: "Qué problema resuelve y para quién." },
  { icon: "behavior", title: "Escenarios de aceptación", body: "Dado, cuando, entonces." },
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
        Ni una línea de <span className="accent">tecnología</span>. Es producto y negocio.
      </h3>
    </SlideFrame>
  );
}
