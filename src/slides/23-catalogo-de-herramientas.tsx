import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Catálogo de herramientas",
  seccion: "1.1.3 · HERRAMIENTAS",
  steps: 3,
  notes:
    "Acá conviene soltar la palabra harness por primera vez, sin desarrollarla: el harness es todo lo que hay en el agente menos el modelo, y estas herramientas son su primera capa. ACLARAR EN VOZ ALTA: la tool no la ejecuta el agente, la ejecuta el harness — el modelo sólo pide (nombre + argumentos) y el harness corre el comando, acota permisos y devuelve evidencia observable. Y el disclaimer: más herramientas no significan obligatoriamente una mejor respuesta; amplían lo observable y verificable, pero sin criterio y validación sólo agregan superficie de error. Seis familias, no una lista infinita. El color no es decorativo: es el nivel de permiso. Verde es lectura y puede ir sin aprobación. Amarillo es validación local: corre cosas, pero en tu máquina y sin tocar nada de afuera. Rojo es escritura o producción, y ahí la regla es estricta: lectura primero, escritura con aprobación humana.",
  transition: "fade",
};

const CATEGORIAS = [
  {
    title: "Búsqueda de código",
    tools: "rg · fd · jq · tree",
    body: "Entender repos grandes, rápido.",
    nivel: "verde",
  },
  {
    title: "Control de versiones",
    tools: "git · gh (lectura)",
    body: "Diffs, PRs, issues y checks de CI.",
    nivel: "verde",
  },
  {
    title: "Validación local",
    tools: "tests · lint · typecheck",
    body: "Convierte la respuesta en evidencia.",
    nivel: "amarillo",
  },
  {
    title: "Navegador",
    tools: "Playwright",
    body: "Flujos web reales y tests end-to-end.",
    nivel: "amarillo",
  },
  {
    title: "Servicios locales",
    tools: "Docker · psql · curl",
    body: "Integración, migraciones y contratos HTTP.",
    nivel: "amarillo",
  },
  {
    title: "Cloud y observabilidad",
    tools: "AWS CLI · Datadog · deploys",
    body: "Lectura primero, escritura con aprobación.",
    nivel: "rojo",
  },
];

const SEMAFORO = [
  { nivel: "verde", txt: "lectura · sin aprobación" },
  { nivel: "amarillo", txt: "validación local · acotada" },
  { nivel: "rojo", txt: "escritura o producción · aprobación humana" },
];
export default function CatalogoDeHerramientas() {
  return (
    <SlideFrame header={false} footer={false} meta="1.1.3 · HERRAMIENTAS">
      <h2 className="display t-md reveal">Ejemplos de tools</h2>

      <div className="cards mt-l reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {CATEGORIAS.map((c) => (
          <div className={`card sem sem-${c.nivel}`} key={c.title}>
            <div className="c-title">{c.title}</div>
            <div className="c-tag">{c.tools}</div>
          </div>
        ))}
      </div>

      <Paso n={1} className="mt-l">
        <div className="sem-leyenda">
          {SEMAFORO.map((s) => (
            <span className={`sem-item sem-${s.nivel}`} key={s.nivel}>
              <i />
              {s.txt}
            </span>
          ))}
        </div>
      </Paso>

      <Paso n={2} className="mt-l">
        <div className="bar">
          <span>
            La tool la ejecuta el <b className="accent">harness</b>, no el agente: el modelo pide, el harness
            corre y devuelve evidencia.
          </span>
          <span className="accent">
            Más herramientas ≠ mejor respuesta: amplían lo observable, no garantizan criterio.
          </span>
        </div>
      </Paso>
    </SlideFrame>
  );
}
