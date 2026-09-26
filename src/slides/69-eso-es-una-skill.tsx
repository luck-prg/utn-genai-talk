import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/components/ArtifactPanel";
import { FilaPictoLista } from "@/components/FilaPicto";
import type { PictoName } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Eso es una skill",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Recién acá aparece la palabra. La skill es ese mismo párrafo, sacado del portapapeles y puesto en el repo. Una carpeta con un SKILL.md adentro, y si hace falta, scripts y archivos al lado. Lo importante de esta slide es la última línea: se versiona con el código. Cuando cambia la convención, cambia en un solo lugar y cambia para todos.",
  transition: "fade",
};

const QUE_GANAS: { icon: PictoName; text: string }[] = [
  { icon: "package", text: "Escrito una vez, no en cada sesión" },
  { icon: "rules", text: "Versionado con el código" },
  { icon: "human", text: "El criterio sigue siendo tuyo" },
];

const HTML = `<span class="pr">.claude/skills/</span>
└── <span class="pr">endpoints/</span>
    ├── <span class="fn">SKILL.md</span>       <span class="cm">← el criterio</span>
    ├── <span class="base">REFERENCIA.md</span>  <span class="cm">← el detalle largo</span>
    └── <span class="base">scripts/</span>
        └── <span class="st">validar.py</span>  <span class="cm">← lo determinístico</span>`;

export default function EsoEsUnaSkill() {
  return (
    <SlideFrame header={false} footer={false} meta="2.1.3 · SKILLS">
      <p className="eyebrow reveal">DOCUMENTAR EL CRITERIO EN EL REPOSITORIO</p>
      <h2 className="display t-md reveal">Eso es una skill</h2>
      <div
        className="two-col mt-s reveal"
        style={{ alignItems: "start", gridTemplateColumns: "1.3fr 1fr" }}
      >
        <ArtifactPanel path="una carpeta, nada más" html={HTML} className="" />
        <div style={{ paddingTop: "clamp(6px, 0.6vw, 12px)" }}>
          <FilaPictoLista items={QUE_GANAS} />
        </div>
      </div>
      <p className="body mt-m reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        Cuando cambia la convención, <span className="k">cambia en un solo lugar</span> y cambia para
        todo el equipo.
      </p>
    </SlideFrame>
  );
}
