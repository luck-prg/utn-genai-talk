import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/nuevas-slides/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "El ejemplo · Constitution",
  seccion: "SDD",
  notes:
    "Etapa 1 de 5. Anunciá que las próximas seis slides son el MISMO login, creciendo, y que la estructura no es inventada: es la que generan las herramientas que ya existen, las nombrás al final. Es la única vez que mencionás la fuente. Lo que decís: se escribe una vez por proyecto y todo lo que sigue lo respeta. El template real cierra con una sección Governance y un número de versión — se versiona como el código.",
  transition: "fade",
};

const HTML = `<span class="cm"># Constitución del proyecto</span>
<span class="fn">## Core Principles</span>
<span class="kw">### I. Tests con toda feature</span>
Nada se mergea sin tests.
<span class="kw">### II. Compatibilidad hacia atrás</span>
No se rompen contratos publicados.
<span class="kw">### III. Autenticación intocable</span>: <span class="st">aprobación humana</span>.`;

export default function EjemploConstitution() {
  return (
    <SlideFrame meta="SDD">
      <p className="prompt reveal">&gt; login --etapa 1 de 5 · constitution</p>
      <ArtifactPanel path="constitution.md" html={HTML} />
    </SlideFrame>
  );
}
