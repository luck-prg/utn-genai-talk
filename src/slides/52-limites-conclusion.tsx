import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Sin ingeniería, la IA acelera la deuda",
  seccion: "1.3.1 · IA SIN INGENIERÍA",
  steps: 3,
  notes:
    "Cierre de la sección. La deuda no se distribuye al azar: se concentra donde el equipo sabe menos, que es justo donde menos criterio hay para verificar lo que produce. Por eso el orden importa — primero se construye el criterio y los oráculos de verificación, y recién después se habilita la delegación. Al revés es acelerar hacia donde no podés ver. Y EL MENSAJE DE CALIDAD, decirlo en voz alta: como ingenieros es nuestra responsabilidad entregar algo de CALIDAD — cada uno tendrá su forma de validarla y asegurarla, algunos leen línea por línea, otros validan con un agente, pero lo innegociable es VALIDAR y asegurar esa calidad. Delegar la escritura nunca delega la responsabilidad.",
  transition: "fade",
};

export default function LimitesConclusion() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.1 · IA SIN INGENIERÍA">
      <h2 className="display reveal" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Sin contexto, specs ni validación,
        <br />
        la IA sólo acelera la <span className="accent">deuda técnica</span>
      </h2>

      <Paso n={1} className="mt-l">
        <div className="bar">
          <span>
            Construir el criterio <b className="accent">antes</b> de habilitar la delegación.
          </span>
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            La <b className="accent">calidad</b> es nuestra responsabilidad: cada uno valida a su manera, pero lo
            innegociable es <b className="accent">VALIDAR</b>.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
