import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "La description es el disparador",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Acá está la respuesta al segundo problema, y es una sola línea de texto. La de la izquierda no se dispara nunca: no dice qué hace ni cuándo usarla, y no tiene ni una palabra de las que vos vas a escribir. La de la derecha se dispara porque nombra el trabajo y nombra el momento, con las palabras de la sala: endpoint, ruta, handler, controller. Tres reglas y seguís: tercera persona, qué hace, cuándo usarla. Sobre when_to_use, una frase y no más: es un campo propio de Claude Code que se le pega a la description, y los dos juntos se cortan a 1.536 caracteres. En claude.ai y en la API ese campo no existe, así que ahí la description es literalmente lo único. Si nadie pregunta, no abras el tema.",
  transition: "fade",
};

const MALA = `<span class="fn">description</span>: <span class="st">Ayuda con la API.</span>

<span class="cm"># no dice qué hace</span>
<span class="cm"># no dice cuándo usarla</span>
<span class="cm"># ninguna palabra que vos vayas a escribir</span>`;

const BUENA = `<span class="fn">description</span>: <span class="st">Crea y modifica endpoints HTTP.</span>
  <span class="st">Usar cuando se pida un endpoint, una ruta,</span>
  <span class="st">un handler, un controller o un CRUD.</span>
<span class="fn">when_to_use</span>: <span class="st">"el alta de usuarios"</span>  <span class="cm"># Claude Code</span>

<span class="cm"># los dos juntos: 1.536 caracteres</span>`;

export default function LaDescriptionEsElDisparador() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <p className="eyebrow reveal">LO QUE MIRA PARA ELEGIR ENTRE CIEN</p>
      <h2 className="display t-md reveal">La description es el disparador</h2>
      <div className="two-col mt-s reveal" style={{ alignItems: "start" }}>
        <div>
          <div className="col-head bad">No se dispara</div>
          <ArtifactPanel path="description" html={MALA} className="" />
        </div>
        <div>
          <div className="col-head good">Se dispara</div>
          <ArtifactPanel path="description" html={BUENA} className="" />
        </div>
      </div>
      <div className="chips mt-s reveal">
        <span className="chip on">en tercera persona</span>
        <span className="chip">qué hace</span>
        <span className="chip">cuándo usarla</span>
        <span className="chip">las palabras que vas a escribir vos</span>
      </div>
      <p className="body mt-s reveal maxw">
        ¿Y cómo sabés si se dispara?{" "}
        <span className="k">Preguntale al agente cuándo usaría esa skill.</span>
      </p>
    </SlideFrame>
  );
}
