import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Ventana de contexto",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  notes:
    "Punto por punto. UNA llamada: no es la memoria del agente, es lo que entra en un request. Se acumula: cada tool result, cada archivo leído, queda adentro — el modelo no olvida solo, hay que sacarlo. El techo hoy es un millón de tokens en los modelos grandes (Haiku 4.5 tiene 200 mil), pero el número importa menos que el hecho de que existe. Al llenarse el harness compacta: primero tira los resultados de tools viejos y recién después resume la conversación. Y el matiz que engancha con la deuda del bloque siguiente: aunque entre, más contexto no es gratis — la atención del modelo también es finita, y lo que le mandás de más compite con lo que importa.",
  transition: "fade",
};

const PUNTOS = [
  "Todo lo que el modelo lee en UNA llamada",
  "Se acumula: no se resetea sola",
  "Tiene techo: hoy, un millón de tokens",
  "Al llenarse, el harness compacta",
  "Aunque entre, la atención también es finita",
];

export default function VentanaDeContexto() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">Ventana de contexto</h2>
      <ul className="blist blist-grande mt-l reveal">
        {PUNTOS.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </SlideFrame>
  );
}
