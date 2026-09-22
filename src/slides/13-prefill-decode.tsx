import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { PrefillDecode } from "@/components/PrefillDecode";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Entrada y salida: dos fases, dos ritmos",
  seccion: "1.1.1 · LLM Y TOKENS",
  steps: 5,
  notes:
    "Acá se explica algo que después damos por sabido. El prompt entero se conoce de entrada, así que todos sus tokens se procesan en paralelo: un solo pase que satura la GPU. La salida es al revés — se genera un token por vez y cada uno depende de todos los anteriores, porque el modelo se come su propia salida como entrada nueva. El KV cache guarda las claves y valores de los tokens previos para no recalcularlos: arranca del tamaño del prompt y crece un lugar por token generado. Una respuesta de 200 tokens es 1 pase de prefill más 200 pasos secuenciales. Cuando lleguemos a la tabla de precios en la sección de modelos, esto ya lo vamos a entender: el output es más caro por física del hardware, no por política de precios.",
  transition: "fade",
};

export default function PrefillDecodeSlide() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.1.1 · LLM Y TOKENS">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        La entrada se procesa <span className="accent">de una</span>.
        <br />
        La salida sale <span className="accent">de a una</span>.
      </h2>

      <div className="reveal mt-s">
        <PrefillDecode paso={paso} />
      </div>

      <Paso n={4} className="mt-s">
        <div className="bar">
          <span>
            Una respuesta de 200 tokens = <b>1 pase de prefill</b> + <b>200 pasos de decode</b>.
          </span>
          <span className="accent">
            <b>Por eso el output cuesta más que el input.</b>
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
