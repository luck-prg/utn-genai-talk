import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "./components/Picto";

export const meta: SlideMeta = {
  title: "El flujo",
  seccion: "SDD",
  notes:
    "No pases rápido por la validación humana: un malentendido de producto en la spec que no se corrige, llega hasta el código. Anunciá que las próximas seis slides recorren este flujo con un solo ejemplo, un login. Antes de pasar, anclá el puente con la ingeniería de contexto: la constitución son las reglas del agente, spec, plan y tasks son el contexto que lee, la mano es el harness.",
  transition: "fade",
};

function Stage({ icon, label, acc }: { icon: PictoName; label: string; acc?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(6px, 0.6vw, 12px)",
      }}
    >
      <div style={{ color: acc ? "var(--color-acento)" : "var(--color-fg)" }}>
        <Picto name={icon} />
      </div>
      <span className={acc ? "step acc" : "step"}>{label}</span>
    </div>
  );
}

export default function ElFlujo() {
  return (
    <SlideFrame meta="SDD">
      <p className="prompt reveal">&gt; flujo --sdd</p>
      <h2 className="display t-md reveal mt-s">Del QUÉ al CÓMO</h2>
      <div className="loop mt-l reveal">
        <Stage icon="constitution" label="Constitution" acc />
        <span className="arr">→</span>
        <Stage icon="spec" label="Spec" />
        <span className="arr">✋</span>
        <Stage icon="plan" label="Plan" />
        <span className="arr">✋</span>
        <Stage icon="tasks" label="Tasks" />
        <span className="arr">✋</span>
        <Stage icon="implement" label="Implement" />
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">✋ validación humana entre cada paso.</span>
      </p>
      <p className="body mt-s reveal maxw" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>
        Constitution son las reglas · Spec, Plan y Tasks son el contexto · ✋ es el harness
      </p>
    </SlideFrame>
  );
}
