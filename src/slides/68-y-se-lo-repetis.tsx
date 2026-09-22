import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/components/ArtifactPanel";
import { FilaPictoLista } from "@/components/FilaPicto";
import type { PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Y entonces se lo repetís",
  seccion: "BLOQUE 2.1 · SKILL",
  notes:
    "El parche que hacemos todos: un párrafo guardado que pegamos al principio de cada sesión. Levantá la mano vos primero. Funciona una vez. Después queda viejo, nadie lo mantiene, y el que entra al equipo no lo tiene. El criterio existe: vive en tu cabeza y en tu portapapeles.",
  transition: "fade",
};

const COSTOS: { icon: PictoName; text: string }[] = [
  { icon: "repeat", text: "Lo pegás en cada sesión" },
  { icon: "tired", text: "Queda viejo y nadie lo mantiene" },
  { icon: "silent", text: "El que entra al equipo no lo tiene" },
];

const HTML = `<span class="cm"># lo que pegás al principio, siempre</span>
Las rutas van en <span class="st">plural</span> y en <span class="st">kebab-case</span>.
Los handlers viven en <span class="st">src/routes/</span>.
Los errores salen como <span class="st">{ error, code }</span>.
Nunca devuelvas un <span class="pr">500</span> sin loguear antes.
<span class="cm"># ...y catorce líneas más</span>`;

export default function YSeLoRepetis() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <h2 className="display t-md reveal">Y entonces se lo repetís</h2>
      <div className="two-col mt-m reveal" style={{ alignItems: "start", gridTemplateColumns: "1.4fr 1fr" }}>
        <ArtifactPanel path="el-párrafo-de-siempre.txt" html={HTML} className="" />
        <div style={{ paddingTop: "clamp(6px, 0.6vw, 12px)" }}>
          <FilaPictoLista items={COSTOS} />
        </div>
      </div>
      <p className="body mt-m reveal maxw">
        El criterio <span className="k">ya existe</span>. Vive en tu cabeza y en tu portapapeles.
      </p>
    </SlideFrame>
  );
}
