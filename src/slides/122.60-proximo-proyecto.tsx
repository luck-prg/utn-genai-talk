import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "En tu próximo proyecto",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  notes: "Tiempo: 2:00. Convertir el cierre en un experimento pequeño para la semana. Elegir una tarea real del TP o del trabajo que puedan revisar. Antes de ejecutarla, escribir el objetivo y un ejemplo de resultado correcto. Dar el contexto mínimo del proyecto y revisar la propuesta antes de aceptar cambios. Al terminar, registrar qué funcionó, dónde tuvieron que intervenir y qué aprendieron. Incluir el tiempo de corregir, no solo el de generar. Ejemplo: agregar una validación con sus casos borde. Dejar treinta segundos para que cada persona elija mentalmente su tarea. Esa experiencia concreta puede abrir una pregunta para la electiva o para investigar en GEMIS.",
};

export default function ProximoProyecto() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <p className="eyebrow reveal">En tu próximo TP o proyecto</p>
      <h2 className="display t-md mt-s reveal">Elegí una tarea.<br />Hacé un <span className="accent">experimento</span>.</h2>
      <ul className="blist mt-l reveal">
        <li>Definí el resultado esperado antes de pedir código.</li>
        <li>Dale contexto y comprobá el cambio.</li>
        <li>Registrá qué mejoró y dónde tuviste que intervenir.</li>
      </ul>
      <p className="sub mt-m reveal">Traé también lo que falló: ahí hay algo para aprender.</p>
    </SlideFrame>
  );
}
