import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Sí, con criterio y cautela",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 3,
  notes:
    "[~1:00] Entonces, ¿avanzamos? Sí, con criterio y cautela. PASO 1 — todo lo que vimos es una foto de un escenario que cambia muy rápido: lo que sabemos sale de los pocos años que llevan estos sistemas, y los efectos a largo plazo todavía están por verse. Hasta las propias empresas documentan efectos negativos; si es una preocupación real o una estrategia corporativa, es un debate abierto. Pero en ese marco, avanzar frenética y ciegamente puede ser riesgoso, temerario o incluso antiético. PASO 2 — como profesionales de sistemas tenemos un doble rol: somos usuarios de la IA, y también somos quienes construimos sistemas con ella. Las dos cosas piden una mirada crítica. [Pausa.] Con esto cerramos el bloque 1. Y para usarla bien hace falta ingeniería alrededor: de eso se trata lo que viene.",
  transition: "fade",
};

export default function ConCautela() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS" center>
      <p className="eyebrow reveal">›// ¿avanzar?</p>
      <h2 className="display t-frase reveal mt-m">
        Sí, con <span className="accent">criterio y cautela</span>.
      </h2>

      <Paso n={1} className="mt-l">
        <p className="sub maxw">
          Es una foto de un escenario que cambia: <b>los efectos a largo plazo todavía no los conocemos</b>.
        </p>
      </Paso>

      <Paso n={2} className="mt-l">
        <p className="quote" style={{ maxWidth: "none" }}>
          Usamos la IA y construimos con ella: <span className="accent">las dos cosas piden mirada crítica.</span>
        </p>
      </Paso>
    </SlideFrame>
  );
}
