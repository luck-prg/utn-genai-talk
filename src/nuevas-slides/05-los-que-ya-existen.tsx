import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Los que ya existen",
  seccion: "BLOQUE 2 · LO QUE YA CONOCEMOS",
  notes:
    "La slide bisagra. Las cuatro tienen la MISMA forma: algo se define antes, el código lo tiene que satisfacer. Dejá eso plantado: cuando llegues a SDD, la sala ya va a entender que no es una moda nueva.",
  transition: "fade",
};

const METODOS = [
  {
    tag: "TDD",
    title: "El test",
    body: (
      <>
        Primero el test. Después el <b>código que lo hace pasar</b>.
      </>
    ),
  },
  {
    tag: "BDD",
    title: "El comportamiento",
    body: (
      <>
        Primero <b>qué tiene que pasar</b>, descrito en lenguaje común.
      </>
    ),
  },
  {
    tag: "DDD",
    title: "El modelo del dominio",
    body: (
      <>
        Primero el <b>lenguaje del negocio</b>. El código lo expresa.
      </>
    ),
  },
  {
    tag: "SDD",
    title: "La especificación",
    body: (
      <>
        Primero el <b>contrato de la feature</b>. El código lo cumple.
      </>
    ),
  },
];

export default function LosQueYaExisten() {
  return (
    <SlideFrame meta="BLOQUE 2 · LO QUE YA CONOCEMOS">
      <h2 className="display t-md reveal">Cuatro que ya conocés</h2>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {METODOS.map((m) => (
          <div className="card" key={m.tag}>
            <div className="c-tag">{m.tag}</div>
            <div className="c-title">{m.title}</div>
            <div className="c-body">{m.body}</div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">Misma forma en los cuatro:</span> algo se define antes, y el código
        tiene que satisfacerlo. Ninguno es nuevo — y casi ninguno se aplica.
      </p>
    </SlideFrame>
  );
}
