import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Confianza con evidencia",
  seccion: "4.2 · CONCLUSIONES",
  transition: "fade",
  notes: "Tiempo: 1:30. La pregunta práctica frente a una herramienta nueva es qué evidencia necesitamos para usarla en nuestro contexto. Una demo exitosa es un punto de partida. Proponer probar una tarea acotada con casos que conocemos, revisar fallos y observar el trabajo humano necesario. Comparar con una referencia y registrar también resultados negativos. Un cambio de modelo, reglas o herramientas puede alterar el comportamiento. Esa incertidumbre hace que evaluar sea parte del desarrollo. Fuente: Anthropic, Demystifying evals for AI agents, 9 de enero de 2026, https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents. Conectar con la diferencia entre sentir y medir presentada antes.",
};

export default function ConfianzaConEvidencia() {
  return (
    <SlideFrame header={false} footer={false} meta="4.2 · CONCLUSIONES">
      <h2 className="display t-md reveal">La confianza se construye<br />con <span className="accent">evidencia</span></h2>
      <div className="two-col mt-l reveal">
        <div>
          <h3 className="col-head">En nuestro proyecto</h3>
          <p className="sub">Casos conocidos, errores visibles y tiempo de revisión.</p>
        </div>
        <div>
          <h3 className="col-head">Con nuestros límites</h3>
          <p className="sub">Permisos acotados y una forma de detener o revertir acciones.</p>
        </div>
      </div>
      <p className="sub mt-l reveal">Ampliar la delegación cuando los resultados la justifiquen.</p>
    </SlideFrame>
  );
}
