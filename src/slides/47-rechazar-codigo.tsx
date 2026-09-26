import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El criterio para frenar",
  seccion: "1.3.1 · IA SIN INGENIERÍA",
  notes:
    "Esta va sola, sin nada más en pantalla. Dejala respirar unos segundos antes de hablar. Es la frase que resume toda la sección: generar código dejó de ser el cuello de botella, y lo que escasea es el criterio para frenar lo que está mal.",
  transition: "fade",
};

export default function RechazarCodigo() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.1 · IA SIN INGENIERÍA" center>
      <p className="eyebrow reveal">›// el cuello de botella cambió de lugar</p>
      <h2 className="display t-frase reveal mt-m" style={{ maxWidth: "24ch" }}>
        Ahora lo escaso es el <span className="accent">criterio para frenar</span> el código que
        está mal.
      </h2>
      <p className="body reveal mt-l ink2">
        Los desarrolladores creyeron haber trabajado un 20% más rápido; la medición mostró que fueron
        un 19% <span className="accent">más lentos</span>.
      </p>
    </SlideFrame>
  );
}
