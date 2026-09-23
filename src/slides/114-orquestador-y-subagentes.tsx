import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Orquestador y subagentes",
  seccion: "3.2.2 · SPEC-DRIVEN DEVELOPMENT",
  notes:
    "Valen acaba de hablar de modelos en el 3.1: apoyate en eso, no lo vuelvas a explicar. Cada etapa pide una potencia de pensamiento distinta. El orquestador es con el que razonás vos: modelo fuerte, los de más alto nivel de razonamiento (por ejemplo Opus o Fable). El implementador ya tiene todo el libro escrito por las etapas anteriores: no necesita un modelo fuerte, alcanza uno mediano o chico (Sonnet, hasta Haiku). Para explorar un repositorio y recopilar información, el más liviano: está juntando insumos para las otras etapas. No es lo mismo el que implementa algo ya planificado que el que lo planifica ni el que piensa las especificaciones.",
  transition: "fade",
};

const ROLES: { icon: PictoName; title: string; body: string }[] = [
  { icon: "domain", title: "Orquestador", body: "Razona con vos. Modelo fuerte." },
  { icon: "implement", title: "Implementador", body: "Ya tiene el libro. Modelo mediano o chico." },
  { icon: "observe", title: "Explorador", body: "Recopila. El más liviano." },
];

export default function OrquestadorYSubagentes() {
  return (
    <SlideFrame header={false} footer={false} meta="SDD">
      <p className="eyebrow reveal">¿QUIÉN HACE CADA ETAPA?</p>
      <h2 className="display t-md reveal">Un modelo por tipo de trabajo</h2>
      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {ROLES.map((r) => (
          <div className="card" key={r.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={r.icon} />
            </div>
            <div className="c-title">{r.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>{r.body}</div>
          </div>
        ))}
      </div>
      <h3 className="display mt-m reveal" style={{ fontSize: "clamp(26px, 3.4vw, 72px)" }}>
        La potencia va donde está el <span className="accent">razonamiento</span>.
      </h3>
    </SlideFrame>
  );
}
