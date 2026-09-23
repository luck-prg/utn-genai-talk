import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Qué queremos construir",
  seccion: "4.3 · PARA SEGUIR",
  transition: "zoom",
  notes: "Tiempo: 1:00. Dejar la pregunta en pantalla y hacer una pausa. Hoy vimos herramientas que amplían lo que podemos intentar. Vale la pena elegir problemas que merezcan esa capacidad y pensar a quién le sirve lo que construimos. La invitación es seguir formándonos, compartir los resultados y participar en las preguntas abiertas. Cerrar agradeciendo y pasar a la slide de preguntas. No hace falta cerrar la incertidumbre sobre el futuro: podemos participar en cómo se construye.",
};

export default function QueQueremosConstruir() {
  return (
    <SlideFrame header={false} footer={false} meta="4.3 · PARA SEGUIR" center>
      <h2 className="display t-frase reveal">¿Qué vale la pena<br /><span className="accent">construir</span><br />con todo esto?</h2>
      <p className="sub mt-l reveal">Y a quién le va a servir.</p>
    </SlideFrame>
  );
}
