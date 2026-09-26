import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArquitecturaAgente } from "@/components/ArquitecturaAgente";

export const meta: SlideMeta = {
  title: "Arquitectura de un agente (2)",
  seccion: "1.2.1 · CICLO AGÉNTICO",
  steps: 8,
  notes:
    "Retoma el diagrama solo con los marcos, el usuario y el modelo: en cada paso aparece un bloque y los marcos se agrandan para contenerlo. HARNESS — PASO 1: ciclo agéntico. PASO 2: configuración, las fuentes de contexto. PASO 3: historial de la sesión. PASO 4: constructor de contexto, que arma cada request. PASO 5: permisos y hooks. PASO 6: ejecutor de tools; el resultado se agrega al historial. PROVEEDOR — PASO 7: la ventana de contexto que se envía y la respuesta del modelo. Acá se corta: las dos diapositivas siguientes explican qué es la ventana de contexto, y después se retoma el diagrama.",
  transition: "none",
};

export default function CicloAgenticoCompleto() {
  return (
    <SlideFrame header={false} footer={false} meta="1.2.1 · CICLO AGÉNTICO" bodyClass="a-sangre">
      <h2 className="display reveal" style={{ fontSize: "var(--fs-sub)" }}>
        Arquitectura de un agente: quién hace qué
      </h2>
      <ArquitecturaAgente inicio={1} />
    </SlideFrame>
  );
}
