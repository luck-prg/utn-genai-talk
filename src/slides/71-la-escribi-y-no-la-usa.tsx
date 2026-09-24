import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto, type PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "La escribí y no la usa",
  seccion: "2.1.3 · SKILLS",
  notes:
    "El segundo problema, contado como te pasó: treinta skills escritas con esmero, volvés al día siguiente, leés el resultado y no respeta nada. La frase que desarma a la sala es la del título: no está mal escrita. Las dos razones son las tuyas. En la primera, el dato que las explica: de cada skill el agente solo tiene cargado el encabezado, dos líneas. No abras acá el tema de los tokens, que lo decís en la 74.",
  transition: "fade",
};

const RAZONES: { icon: PictoName; title: string; body: string }[] = [
  {
    icon: "compete",
    title: "No sabe cuál elegir",
    body: "De cada skill que tenés, el agente solo carga el encabezado. Dos líneas.",
  },
  {
    icon: "silent",
    title: "Ni sabe que la tiene",
    body: "Si esas dos líneas no la nombran, para el agente esa skill no existe.",
  },
];

export default function LaEscribiYNoLaUsa() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <p className="eyebrow reveal">&ldquo;LA ESCRIBÍ, ESTÁ EN EL REPO, Y NO LA USA&rdquo;</p>
      <h2 className="display t-md reveal">No está mal escrita.</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {RAZONES.map((r) => (
          <div className="card" key={r.title}>
            <div style={{ color: "var(--color-fg)" }}>
              <Picto name={r.icon} />
            </div>
            <div className="c-title">{r.title}</div>
            <div className="c-body" style={{ fontSize: "var(--fs-body)", color: "var(--color-fg)" }}>
              {r.body}
            </div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        <span className="k">El criterio está escrito.</span> Lo que falta es que alguien se lo
        presente.
      </p>
    </SlideFrame>
  );
}
