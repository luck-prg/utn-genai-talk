import { SlideFrame } from "@/components/SlideFrame";

export function InicioDeBloque({ numero }: { numero: number }) {
  return (
    <SlideFrame meta={`BLOQUE ${numero}`} center header={false} footer={false}>
      <h2 className="display corte-title reveal">Bloque {numero}</h2>
    </SlideFrame>
  );
}

export function PreguntasDeBloque({ numero }: { numero: number }) {
  return (
    <SlideFrame meta={`CIERRE · BLOQUE ${numero}`} center header={false} footer={false}>
      <h2 className="display reveal" style={{ fontSize: "var(--fs-cover)" }}>
        ¿<span className="accent">Preguntas</span>?
      </h2>
    </SlideFrame>
  );
}
