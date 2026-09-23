import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que está cambiando",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  notes: "Tiempo: 1:30. Hoy podemos trabajar con agentes que editan archivos, ejecutan herramientas y usan los resultados para continuar. Eso acerca la IA a las acciones del proyecto. Volver a una demostración de la charla: el cambio relevante fue poder comprobar algo en el entorno. La velocidad de generación no mide por sí sola el valor entregado. También cuentan el tiempo de revisión, los errores y el mantenimiento. Fuente sobre capacidades y supervisión: Anthropic, Trustworthy agents in practice, 9 de abril de 2026, https://www.anthropic.com/research/trustworthy-agents. Esta reflexión no presupone una mejora de productividad para todos los equipos.",
};

export default function LoQueEstaCambiando() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <p className="eyebrow reveal">Lo que está pasando</p>
      <h2 className="display t-md mt-s reveal">La IA participa<br />en la <span className="accent">ejecución</span></h2>
      <p className="sub maxw mt-m reveal">Lee el proyecto, modifica archivos y usa herramientas para comprobar lo que hizo.</p>
      <p className="sub maxw mt-m reveal">Nos toca decidir qué delegar y cuándo el resultado está listo.</p>
    </SlideFrame>
  );
}
