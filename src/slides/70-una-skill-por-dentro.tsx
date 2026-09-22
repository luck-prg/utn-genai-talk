import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { ArtifactPanel } from "@/components/ArtifactPanel";

export const meta: SlideMeta = {
  title: "Una skill por dentro",
  seccion: "BLOQUE 2.1 · SKILL",
  notes:
    "No la leas entera: señalá las dos partes. Arriba, entre los guiones, el encabezado: el nombre, la descripción y qué herramientas puede tocar. Abajo, el criterio, en markdown común. Si preguntan cuántos campos hay en el encabezado, no te metas ahí todavía: se ve entero en la 08, después de resolver el disparo. Cerrá con la frase que abre el próximo problema: la parte de arriba no le enseña nada al agente, solo le dice cuándo mirar acá.",
  transition: "fade",
};

const HTML = `<span class="cm">---</span>
<span class="fn">name</span>: <span class="st">endpoints</span>
<span class="fn">description</span>: <span class="st">Crea y modifica endpoints HTTP.</span>
  <span class="st">Usar cuando se pida un endpoint, una ruta,</span>
  <span class="st">un handler o un controller.</span>
<span class="fn">allowed-tools</span>: <span class="pr">Read Edit Bash</span>
<span class="cm">---</span>
<span class="kw"># Crear un endpoint</span>
<span class="fn">## Antes de escribir, preguntá</span>
¿Quién lo consume? ¿Qué pasa si falla?
<span class="fn">## No se negocia</span>
Rutas en <span class="pr">plural</span> · handlers en <span class="pr">src/routes/</span>
<span class="fn">## Nunca cierres sin</span> <span class="st">un caso borde</span>`;

export default function UnaSkillPorDentro() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <h2 className="display t-md reveal">Una skill por dentro</h2>
      <div
        className="two-col mt-s reveal"
        style={{ alignItems: "start", gridTemplateColumns: "1.45fr 1fr" }}
      >
        <ArtifactPanel path="skills/endpoints/SKILL.md" html={HTML} className="" />
        <div style={{ paddingTop: "clamp(6px, 0.6vw, 12px)" }}>
          <div className="col-head good">Arriba · el encabezado</div>
          <p className="body">
            Quién es, <span className="k">cuándo</span> se usa y qué puede tocar. No enseña nada.
          </p>
          <div className="col-head bad" style={{ marginTop: "clamp(16px, 1.8vw, 36px)" }}>
            Abajo · el criterio
          </div>
          <p className="body">
            <span className="k">Cómo</span> lo hacemos nosotros. Markdown común.
          </p>
          <p className="body" style={{ marginTop: "clamp(16px, 1.8vw, 36px)" }}>
            La de arriba, <span className="k">en la próxima, es el problema.</span>
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}
