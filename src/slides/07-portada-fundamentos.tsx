import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 1.1.1 LLM y tokens",
  seccion: "1.1.1 · LLM Y TOKENS",
  notes:
    "Corte de sección. Antes de hablar de cómo trabajar con agentes, conviene saber qué hay abajo: un modelo que predice lenguaje, que lee tokens y que trabaja con una ventana finita. Todo lo que viene después se apoya en esto.",
  transition: "curtain",
};

export default function PortadaFundamentos() {
  return (
    <PortadaSeccion header={false} footer={false}
      meta="SECCIÓN"
      numero="1.1.1"
      kicker="LLM y tokens"
      titulo={
        <>
          Modelos de lenguaje
          <br />y <span className="accent">tokens</span>
        </>
      }
      promesa="Qué hay abajo de la herramienta que vamos a usar toda la charla."
      temas={["LLM", "tokens", "alucinaciones", "prefill / decode"]}
    />
  );
}
