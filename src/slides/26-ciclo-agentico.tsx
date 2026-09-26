import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 1.2.1 Ciclo agéntico",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  notes:
    "PASO 0: la interacción pelada — mandás un input, el modelo predice, devuelve un output. Decí que el LLM es stateless: entre una llamada y otra no recuerda nada. PASO 1: aparece el harness, el programa que orquesta (Claude Code, Cursor, tu propio código), y con él la memoria de la sesión. La memoria no vive en el modelo, vive acá. Quedate en este estado: las dos diapositivas que siguen desarman qué es el harness, y después volvemos al diagrama.",
  transition: "curtain",
};

export default function PortadaCicloAgentico() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="1.2.1"
      kicker="Ciclo agéntico"
      titulo={
        <>
          <span className="accent">Componentes</span> de un agente
        </>
      }
      promesa="El modelo genera; el harness le da memoria, herramientas y un ciclo de trabajo."
      temas={["modelo", "harness", "contexto", "validación"]}
    />
  );
}
