import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Portada · Fundamentos",
  seccion: "FUNDAMENTOS",
  notes:
    "Corte de sección. Antes de hablar de cómo trabajar con agentes, conviene saber qué hay abajo: un modelo que predice lenguaje, que lee tokens y que trabaja con una ventana finita. Todo lo que viene después se apoya en esto.",
  transition: "curtain",
};

export default function PortadaFundamentos() {
  return (
    <PortadaSeccion
      meta="SECCIÓN"
      numero="01"
      kicker="Fundamentos"
      titulo={
        <>
          Modelos de lenguaje
          <br />y <span className="accent">agentes de código</span>
        </>
      }
      promesa={
        <>
          Qué hay abajo de la herramienta que vamos a usar el resto de la charla, y por qué el{" "}
          <b>contexto</b> pasó a ser el input que importa.
        </>
      }
      temas={["LLM", "tokens", "seguridad del contexto", "agentes", "IDE vs. ADE", "contexto útil"]}
    />
  );
}
