import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que entra al contexto queda expuesto",
  seccion: "FUNDAMENTOS",
  notes:
    "Pegar un log de CI sin filtrar puede costar más tokens que la instrucción misma, y en el peor caso arrastra secretos. La privacidad deja de ser sólo dónde se guardan los datos: pasa a ser qué se envía al modelo y por cuánto tiempo queda accesible. En la mayoría de las herramientas, además, el entrenamiento sobre las conversaciones viene habilitado por default.",
  transition: "fade",
};

const RIESGOS = ["secretos", "tokens de API", "datos de usuarios"];

export default function SeguridadDelContexto() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Cada token que entra, entra en la{" "}
        <span className="accent">superficie de exposición</span>
      </h2>

      <div className="two-col reveal mt-s">
        <div className="split-col">
          <div className="sc-tag">›// qué se filtra</div>
          <div className="sc-head">Un log arrastra más de lo que muestra</div>
          <div className="chips mt-s">
            {RIESGOS.map((r) => (
              <span className="chip" key={r}>
                {r}
              </span>
            ))}
          </div>
          <p className="body mt-s">
            Queda <b>sin encriptar</b> y puede persistir en historiales y cachés del proveedor.
          </p>
        </div>
        <div className="split-col">
          <div className="sc-tag">›// qué hacer</div>
          <div className="sc-head">Entregar menos, pero mejor elegido</div>
          <ul className="blist mt-s">
            <li>
              <span>Un log entero → sus últimas líneas relevantes.</span>
            </li>
            <li>
              <span>Un archivo completo → la sección que importa.</span>
            </li>
            <li>
              <span>Un error → sin el ruido que lo rodea.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bar reveal mt-s">
        <span>
          Filtrar lo que entra no es sólo <b>ahorro</b>: es <b className="accent">higiene</b>.
        </span>
        <span>Si le damos de todo, el ruido compite con la señal.</span>
      </div>
    </SlideFrame>
  );
}
