import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "La factura",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 2,
  notes:
    "Una captura real del panel de uso de Claude Code, de una sesión de trabajo. Cada respuesta del modelo informa cuántos tokens consumió y el harness los acumula por modelo: entrada, salida, lectura de caché y escritura de caché. Arriba están los límites del plan. PASO 0: señalá el desglose — 906 tokens de entrada nueva en total contra 206,3 millones leídos del caché. Mencioná que esto se consulta en cualquier momento con /usage o /cost, que muestran lo mismo. PASO 1: casi todo lo que el modelo lee en una sesión agéntica es el prefijo que se repite, y ese prefijo sale del caché a una fracción del precio. El costo figura en USD 0,00 porque la sesión corre sobre un plan de suscripción: el consumo se refleja en los límites del plan.",
  transition: "fade",
};

export default function LaFactura() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO" center>
      <div className="factura">
        <img
          className="factura-captura reveal"
          src="/img/uso-claude-code.jpg"
          alt="Panel de uso de Claude Code con el desglose de tokens de una sesión"
        />
        <div className="factura-texto">
          <h2 className="display t-md reveal">Cada respuesta te dice cuánto costó</h2>
          <div className="factura-comandos reveal">
            <p className="sub">Se consulta en cualquier momento con:</p>
            <div className="factura-cmd">
              <code>/usage</code>
              <span>o</span>
              <code>/cost</code>
            </div>
            <p className="factura-desc">Tokens por modelo, costo de la sesión y límites del plan.</p>
          </div>
          <Paso n={1} className="factura-remate">
            Casi todo lo que el modelo lee es <b>caché</b>: 206,3 millones de tokens frente a 906 de entrada nueva.
          </Paso>
        </div>
      </div>
    </SlideFrame>
  );
}
