import type { SlideMeta } from "@/deck/types";
import { PortadaSeccion } from "@/components/PortadaSeccion";

export const meta: SlideMeta = {
  title: "Sección · 2.2.2 Hacia dónde va el desarrollo",
  seccion: "2.2.2 · PIRÁMIDE",
  notes:
    "Apertura de la sección de pirámide: ya no alcanza con pensar el software del producto; el agente que lo construye también se diseña. La madurez de un equipo se observa en el harness que construye alrededor del modelo.",
  transition: "curtain",
};

export default function PortadaPiramide() {
  return (
    <PortadaSeccion
      header={false}
      footer={false}
      meta="SECCIÓN"
      numero="2.2.2"
      kicker="Agentes efectivos"
      titulo={
        <>
          ¿Hacia dónde va <span className="accent">el desarrollo</span>?
        </>
      }
      promesa="No solo desarrollamos software para nuestro producto: también hay que desarrollar agentes efectivos que lo construyan."
      temas={["agentes", "votación", "niveles", "responsabilidad"]}
    />
  );
}
