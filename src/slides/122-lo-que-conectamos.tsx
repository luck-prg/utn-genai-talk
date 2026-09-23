import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que conectamos hoy",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  notes: "Tiempo: 2:00. Recuperar la charla como un sistema. El modelo propone a partir de lo que recibe. El contexto aporta las reglas y decisiones del proyecto. El harness permite actuar y establece límites. El método define qué buscamos y cómo comprobamos el resultado. Ejemplo: pedir un CRUD puede dar código correcto que ignore los permisos del negocio. La decisión de qué información y pruebas necesita sigue siendo trabajo de ingeniería. Preguntar cuál de estas piezas les falta hoy en su manera de trabajar y tomar una respuesta breve. Evitar volver a explicar cada herramienta. El punto es que las piezas se necesitan entre sí.",
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
