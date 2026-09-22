import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Picto } from "@/components/Picto";

export const meta: SlideMeta = {
  title: "Una skill no es un script",
  seccion: "BLOQUE 2.1 · SKILL",
  notes:
    "La confusión más común de todas, y la que más skills inútiles genera. Si vos ya sabés los pasos, de memoria, y siempre son los mismos, no necesitás que el agente los piense: necesitás que alguien los ejecute. Eso es un script, o un comando. La skill existe para el otro caso: cuando hay algo que decidir y querés que se decida como vos decidirías.",
  transition: "fade",
};

export default function SkillNoEsScript() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <h2 className="display t-md reveal">Una skill no es un script</h2>
      <div className="two-col mt-s reveal">
        <div>
          <div className="col-head good">Skill · criterio</div>
          <div style={{ color: "var(--color-fg)", marginBottom: "clamp(10px, 1vw, 20px)" }}>
            <Picto name="judgment" />
          </div>
          <p className="body">
            Hay <span className="k">algo que decidir</span> y querés que se decida como lo decidirías
            vos.
          </p>
          <p className="sub" style={{ marginTop: "clamp(8px, 0.9vw, 18px)" }}>
            Nombrar, estructurar, diseñar un endpoint, escribir una spec.
          </p>
        </div>
        <div>
          <div className="col-head bad">Script · pasos</div>
          <div style={{ color: "var(--color-muted)", marginBottom: "clamp(10px, 1vw, 20px)" }}>
            <Picto name="script" />
          </div>
          <p className="body">
            Ya <span className="k">sabés los pasos</span>, son siempre los mismos y no cambian según
            el caso.
          </p>
          <p className="sub" style={{ marginTop: "clamp(8px, 0.9vw, 18px)" }}>
            Levantar el entorno, correr migraciones, generar el changelog.
          </p>
        </div>
      </div>
      <p className="body mt-s reveal maxw" style={{ fontSize: "var(--fs-sub)" }}>
        <span className="k">Un procedimiento que ya sabés de memoria no es una skill.</span>
      </p>
    </SlideFrame>
  );
}
