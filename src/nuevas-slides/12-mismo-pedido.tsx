import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El mismo pedido, dos veces",
  seccion: "SDD",
  notes:
    "Izquierda: 'hacé una pantalla de login'. Señalá cuántas decisiones quedan implícitas: los errores, el formato, la tecnología, las decide el agente, y ninguna la validaste vos. Derecha: el mismo pedido como spec real, con sus cuatro partes: intención, escenario, requisitos, criterio. No estamos delegando lógica, estamos delegando ejecución. No la leas entera: la slide siguiente nombra las partes.",
  transition: "fade",
};

const SPEC = `<span class="cm"># Login interno</span>
<span class="fn">Intención</span>   usuarios internos entran con su email corporativo
<span class="fn">Escenario</span>   dado un email corporativo, cuando envía, accede
<span class="fn">Requisitos</span>
- <span class="pr">rechazar</span> dominios externos
- <span class="pr">mostrar</span> el estado de carga
- <span class="pr">no tocar</span> el contrato actual de autenticación
<span class="fn">Criterio</span>    el ingreso completo tarda <span class="st">menos de 10 s</span>`;

export default function MismoPedido() {
  return (
    <SlideFrame meta="SDD">
      <h2 className="display t-md reveal">El mismo pedido, dos veces</h2>
      <div className="two-col mt-m reveal" style={{ gridTemplateColumns: "1fr 1.5fr" }}>
        <div>
          <div className="col-head bad">Prompt suelto</div>
          <ul className="blist">
            <li>“Hacé una pantalla de login”</li>
          </ul>
          <p className="sub mt-m">Todo lo demás lo decide el agente, y vos te enterás después.</p>
        </div>
        <div>
          <div className="col-head good">Spec</div>
          <ArtifactPanel path="spec.md" html={SPEC} />
        </div>
      </div>
    </SlideFrame>
  );
}
