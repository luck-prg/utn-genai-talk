import type { SlideMeta } from "@/deck/types";
import { PanelDePermisos } from "@/components/PanelDePermisos";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Cada switch mueve dos medidores",
  seccion: "1.1.3 · HERRAMIENTAS",
  steps: 8,
  notes:
    "Vamos encendiendo herramientas de a una y mirando los dos medidores del costado. El punto visual es que suben juntos: nunca sube uno solo. Y acá reactivamos la trifecta — fijate el cartelito que aparece a la derecha de cada fila: conectar observabilidad de producción es darle acceso a datos privados; dejar que lea issues de GitHub es exponerlo a contenido no confiable; darle deploy es darle salida al exterior. Encender las tres últimas es armar la trifecta completa sin haberlo decidido nunca explícitamente. De ahí sale el criterio: ¿esta integración permite que el agente lea mejor, actúe mejor o valide mejor? Si la respuesta es no, es decoración técnica que pesa en contexto y en riesgo.",
  transition: "fade",
};

export default function PanelDePermisosSlide() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.1.3 · HERRAMIENTAS">
      <h2 className="display reveal" style={{ fontSize: "clamp(20px,min(2.5vw,4.44vh),52px)" }}>
        Capacidad y riesgo <span className="accent">suben juntos</span>
      </h2>

      <div className="reveal mt-s">
        <PanelDePermisos paso={paso} />
      </div>

      <Paso n={7} className="mt-s">
        <div className="bar">
          <span>
            ¿Permite que el agente <b>lea mejor</b>, <b>actúe mejor</b> o <b>valide mejor</b>?
          </span>
          <span className="accent">
            <b>Si no, la integración suma contexto y riesgo sin aportar valor.</b>
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
