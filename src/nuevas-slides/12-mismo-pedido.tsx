import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El mismo pedido, dos veces",
  seccion: "SDD",
  notes:
    "Señalá cuántas decisiones quedan implícitas del lado izquierdo: las toma todas el agente, y ninguna la validaste vos.",
  transition: "fade",
};

export default function MismoPedido() {
  return (
    <SlideFrame meta="SDD">
      <h2 className="display t-md reveal">El mismo pedido, dos veces</h2>
      <div className="two-col mt-l reveal">
        <div>
          <div className="col-head bad">Prompt suelto</div>
          <ul className="blist">
            <li>“Hacé una pantalla de login”</li>
          </ul>
          <p className="sub mt-m">Todo lo demás lo decide el agente, y vos te enterás después.</p>
        </div>
        <div>
          <div className="col-head good">Spec</div>
          <ul className="blist">
            <li>Login para usuarios internos</li>
            <li>Validación de email corporativo</li>
            <li>Manejo de errores y estados de loading</li>
            <li>Compatible con mobile</li>
            <li>Tests de los casos principales</li>
            <li>Sin tocar el contrato actual de autenticación</li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
