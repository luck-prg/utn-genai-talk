import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Catálogo de herramientas",
  seccion: "HERRAMIENTAS",
  notes:
    "Seis familias, no una lista infinita. Sin gh el agente depende de que vos le copies comentarios, errores o links; con gh trae el estado real del PR. Para cloud y observabilidad la regla es estricta: lectura primero, escritura con aprobación humana. Y los comandos de validación se documentan en AGENTS.md o docs/testing.md para que el agente no tenga que adivinar cómo verificar.",
  transition: "fade",
};

const CATEGORIAS = [
  {
    title: "Control de versiones",
    tools: "git · gh",
    body: "Diffs, PRs, issues y checks de CI.",
  },
  {
    title: "Búsqueda de código",
    tools: "rg · fd · jq · tree",
    body: "Entender repos grandes, rápido.",
  },
  {
    title: "Validación local",
    tools: "tests · lint · typecheck",
    body: "Convierte la respuesta en evidencia.",
    acc: true,
  },
  {
    title: "Navegador",
    tools: "Playwright",
    body: "Flujos web reales y tests end-to-end.",
  },
  {
    title: "Servicios locales",
    tools: "Docker · psql · curl",
    body: "Integración, migraciones y contratos HTTP.",
  },
  {
    title: "Cloud y observabilidad",
    tools: "AWS CLI · Datadog · Sentry",
    body: "Lectura primero, escritura con aprobación.",
  },
];

export default function CatalogoDeHerramientas() {
  return (
    <SlideFrame meta="HERRAMIENTAS">
      <h2 className="display t-md reveal">Seis familias, no infinitas tools</h2>

      <div className="cards mt-s reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {CATEGORIAS.map((c) => (
          <div className={`card ${c.acc ? "acc" : ""}`} key={c.title}>
            <div className="c-title">{c.title}</div>
            <div className="c-tag">{c.tools}</div>
            <div className="c-body">{c.body}</div>
          </div>
        ))}
      </div>

      <p className="sub reveal mt-s maxw">
        <b>Documentadas</b>, con <b>permisos claros</b> y conectadas a validaciones reales.
      </p>
    </SlideFrame>
  );
}
