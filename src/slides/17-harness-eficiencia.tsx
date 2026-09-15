import type { SlideMeta } from "@/deck/types";
import { grupoHarness, HarnessDonut } from "@/components/HarnessDonut";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Harness · Eficiencia",
  seccion: "BLOQUE 2 · HARNESS",
  notes: "Última parte del gráfico: queda completo. Cerrar con las dos lecturas del mapa.",
  transition: "fade",
};

export default function HarnessEficiencia() {
  return (
    <SlideFrame meta="BLOQUE 2 · HARNESS">
      <div className="harness-map">
        <HarnessDonut revelados={["flujos", "calidad", "control", "eficiencia"]} />
        <div className="reveal">
          <p className="eyebrow">›// propósito 4</p>
          <h2
            className="display harness-title mt-s"
            style={{ color: grupoHarness("eficiencia").color }}
          >
            Eficiencia
          </h2>
          <p className="sub mt-s">Hacer más sin llenar la ventana de contexto.</p>
          <ul className="blist mt-m">
            <li>
              <span>
                <b>Subagents</b>: trabajan en paralelo y devuelven el resultado, no el proceso.
              </span>
            </li>
            <li>
              <span>
                Una misma tool cubre más de un propósito: <b>Skills</b> entra en flujos y en
                calidad.
              </span>
            </li>
            <li>
              <span>Cuadrante vacío = agujero en tu harness.</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}
