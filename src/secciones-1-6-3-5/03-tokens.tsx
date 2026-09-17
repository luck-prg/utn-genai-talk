import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tokens: la unidad de trabajo",
  seccion: "FUNDAMENTOS",
  notes:
    "El modelo no lee palabras ni caracteres: lee tokens. La relación no es lineal — una palabra puede ser un token o varios, los espacios y signos cuentan, y la forma de partir depende del idioma. De acá salen las tres consecuencias prácticas: el precio, la ventana y el peso de todo lo que entra.",
  transition: "fade",
};

/** Ejemplo ilustrativo: el corte no coincide con las palabras. */
const EJEMPLO: [string, string][] = [
  ["El", "a"],
  [" contexto", "b"],
  [" es", "c"],
  [" el", "d"],
  [" nuevo", "e"],
  [" c", "a"],
  ["ó", "b"],
  ["digo", "c"],
  [":", "d"],
  [" cada", "e"],
  [" token", "a"],
  [" que", "b"],
  [" entra", "c"],
  [",", "d"],
  [" se", "e"],
  [" paga", "a"],
  [" y", "b"],
  [" se", "c"],
  [" ex", "d"],
  ["pone", "e"],
  [".", "a"],
];

export default function Tokens() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <h2 className="display t-md reveal">
        No lee palabras: lee <span className="accent">tokens</span>
      </h2>

      <div className="reveal mt-m">
        <div className="tok-strip maxw">
          {EJEMPLO.map(([txt, c], i) => (
            <span className={`tok tok-${c}`} key={`${txt}-${i}`}>
              {txt}
            </span>
          ))}
        </div>
      </div>

      <div className="reveal mt-m">
        <div className="stats">
          <div className="stat">
            <div className="s-num">382</div>
            <div className="s-lbl">caracteres</div>
          </div>
          <div className="stat-sep">→</div>
          <div className="stat">
            <div className="s-num acc">94</div>
            <div className="s-lbl">tokens</div>
          </div>
          <p className="sub" style={{ maxWidth: "32ch" }}>
            La relación no es lineal, y además <b>depende del idioma</b>.
          </p>
        </div>
      </div>

      <ul className="blist reveal mt-m">
        <li>
          <span>
            Se cobra <b>por token</b>, no por mensaje ni por archivo.
          </span>
        </li>
        <li>
          <span>
            La <b>ventana de contexto</b> también se mide en tokens.
          </span>
        </li>
        <li>
          <span>
            Todo lo que entra ocupa lugar, incluido el <b>historial de la conversación</b>.
          </span>
        </li>
      </ul>
    </SlideFrame>
  );
}
