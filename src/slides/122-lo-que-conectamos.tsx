import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que conectamos hoy",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
};

export default function LoQueConectamos() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <h2 className="display t-md reveal">Lo que <span className="accent">conectamos</span> hoy</h2>
      <div className="two-col mt-l reveal">
        <div>
          <h3 className="col-head">Modelo y contexto</h3>
          <p className="sub">Qué puede proponer y qué necesita saber de nuestro problema.</p>
        </div>
        <div>
          <h3 className="col-head">Harness y método</h3>
          <p className="sub">Cómo puede actuar y con qué evidencia aceptamos el resultado.</p>
        </div>
      </div>
      <p className="sub mt-l reveal">La calidad depende de cómo funcionan <b className="accent">juntos</b>.</p>
    </SlideFrame>
  );
}
