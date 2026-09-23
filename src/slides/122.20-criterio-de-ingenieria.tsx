import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El criterio de ingeniería",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  notes: "Tiempo: 2:00. La formación en ingeniería da recursos para discutir decisiones: abstracciones, requisitos, arquitectura y verificación. Usar un caso cercano: un agente implementa reservas, pero dos personas pueden reservar el último lugar al mismo tiempo. El flujo feliz funciona y la solución parece convincente. Hace falta reconocer la condición de carrera y decidir qué garantía necesita el sistema. Saber pedir una corrección depende de comprender el problema. Conectar con las materias que cursan: esos fundamentos permiten formular mejores preguntas y reconocer errores incluso cuando cambia la herramienta. La responsabilidad incluye entender a quién afecta una decisión.",
};

export default function CriterioDeIngenieria() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <h2 className="display t-md reveal">Nuestro <span className="accent">criterio</span><br />se ve en las decisiones</h2>
      <ul className="blist blist-grande mt-l reveal">
        <li>¿Estamos resolviendo el problema correcto?</li>
        <li>¿Qué puede fallar y a quién afecta?</li>
        <li>¿Con qué evidencia lo damos por terminado?</li>
      </ul>
    </SlideFrame>
  );
}
