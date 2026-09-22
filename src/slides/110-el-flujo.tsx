import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "El flujo",
  seccion: "SDD",
  notes:
    "Hay mil implementaciones, todas siguen más o menos esto. La constitution es el archivo de reglas del agente: convenciones, tecnologías que se respetan, formas de hacer y de escribir. Spec: el qué. Plan: el cómo técnico. Tasks: trabajo chico y revisable. Implement: ejecutar. Etapas separadas, cada una con su responsabilidad, cada una aporta valor a la siguiente. Y leé la línea de abajo: esto ya lo vieron en la facu con otros nombres: estándares, relevamiento y casos de uso, diseño, planificación, construcción. Plan, tasks e implement: una frase cada uno, no más. No pases rápido por la mano: un malentendido en la spec que no se frena llega al código. Puente: 'ahora, ¿cómo llevo esto a la realidad con algo probabilístico?'",
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
    <SlideFrame header={false} footer={false} meta="SDD">
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
        Constitution: estándares · Spec: relevamiento y casos de uso · Plan: diseño · Tasks: planificación · Implement: construcción
      </p>
    </SlideFrame>
  );
}
