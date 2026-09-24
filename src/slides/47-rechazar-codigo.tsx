import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "La competencia que se vuelve escasa",
  seccion: "1.3.1 · IA SIN INGENIERÍA",
  notes:
    "Esta va sola, sin nada más en pantalla. Dejala respirar unos segundos antes de hablar. Es la frase que resume toda la sección: generar código dejó de ser el cuello de botella, y lo que escasea es el criterio para frenar lo que está mal.",
  transition: "fade",
};

export default function RechazarCodigo() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.1 · IA SIN INGENIERÍA" center>
      <p className="eyebrow reveal">›// el cuello de botella se mudó</p>
      <h2 className="display t-frase reveal mt-m" style={{ maxWidth: "24ch" }}>
        La competencia escasa no es generar código:
        <br />
        es <span className="accent">rechazarlo</span> cuando está mal.
      </h2>
      <p className="body reveal mt-l ink2">
        El 20% cree que va más rápido, pero la realidad es que va <span className="accent">más lento</span>.
      </p>
    </SlideFrame>
  );
}
