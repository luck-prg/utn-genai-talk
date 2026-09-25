import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "No se escribe una vez",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Engancha con la última línea de la 69: si cambia en un solo lugar, ese lugar se puede mejorar. La skill no sale perfecta de entrada, y está bien. La primera versión es un borrador. Cada vez que la usás y el resultado no es el que querías, no corrijas solo el código: decile al agente qué estuvo mal y pedile que actualice la skill. Así el feedback no se pierde en esa conversación, queda escrito para la próxima. Remarcá el cierre: como está versionada con el código, cada mejora le llega a todo el equipo.",
  transition: "fade",
};

const CICLO: { icon: PictoName; tag: string; title: string; body: string }[] = [
  { icon: "run", tag: "1", title: "La usás", body: "La primera versión es un borrador." },
  { icon: "observe", tag: "2", title: "Mirás el resultado", body: "¿Hizo lo que esperabas?" },
  { icon: "ask", tag: "3", title: "Le das feedback", body: "Qué estuvo mal y por qué." },
  { icon: "patch", tag: "4", title: "Que la actualice", body: "El feedback queda escrito." },
];

export default function NoSeEscribeUnaVez() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <p className="eyebrow reveal">UNA SKILL SE VA ITERANDO</p>
      <h2 className="display t-md reveal">No se escribe una vez</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {CICLO.map((c) => (
          <div className="card" key={c.tag}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={c.icon} />
            </div>
            <div className="c-tag">{c.tag}</div>
            <div className="c-title">{c.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>
              {c.body}
            </div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        No corrijas solo el código: <span className="k">corregí la skill.</span> Así la próxima vez
        ya lo sabe, y lo sabe todo el equipo.
      </p>
    </SlideFrame>
  );
}
