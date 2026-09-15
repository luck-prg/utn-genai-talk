/**
 * Dona del harness: anillo interno = propósito, anillo externo = herramientas.
 * Se arma de a partes a lo largo de varias diapositivas: `revelados` dice qué
 * cuadrantes ya mostraron sus herramientas. Los que faltan quedan atenuados,
 * así el círculo nunca cambia de tamaño ni de posición entre pasos.
 */

export interface GrupoHarness {
  id: string;
  lineas: string[];
  color: string;
  soft: string;
  desde: number;
  tools: string[];
}

export const GRUPOS_HARNESS: GrupoHarness[] = [
  {
    id: "calidad",
    lineas: ["Calidad y", "contexto"],
    color: "#4d7c4f",
    soft: "#a9c4a7",
    desde: 0,
    tools: ["Skills", "MCP", "Rules"],
  },
  {
    id: "eficiencia",
    lineas: ["Eficiencia"],
    color: "#e8482b",
    soft: "#f2a894",
    desde: 90,
    tools: ["Subagents"],
  },
  {
    id: "control",
    lineas: ["Control y", "seguridad"],
    color: "#6d4b78",
    soft: "#bda7c4",
    desde: 180,
    tools: ["Hooks"],
  },
  {
    id: "flujos",
    lineas: ["Flujos"],
    color: "#2f6f8f",
    soft: "#a3c2d3",
    desde: 270,
    tools: ["Commands", "Skills"],
  },
];

export function grupoHarness(id: string): GrupoHarness {
  const grupo = GRUPOS_HARNESS.find((g) => g.id === id);
  if (!grupo) throw new Error(`Grupo de harness desconocido: ${id}`);
  return grupo;
}

const CX = 200;
const CY = 200;
const R_DISCO = 132;
const R_ANILLO_0 = 141;
const R_ANILLO_1 = 198;

function polar(r: number, grados: number): [number, number] {
  const rad = ((grados - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
}

function sector(r0: number, r1: number, a0: number, a1: number): string {
  const largo = a1 - a0 > 180 ? 1 : 0;
  const [x1, y1] = polar(r1, a0);
  const [x2, y2] = polar(r1, a1);
  if (r0 === 0) {
    return `M ${CX} ${CY} L ${x1} ${y1} A ${r1} ${r1} 0 ${largo} 1 ${x2} ${y2} Z`;
  }
  const [x3, y3] = polar(r0, a1);
  const [x4, y4] = polar(r0, a0);
  return `M ${x1} ${y1} A ${r1} ${r1} 0 ${largo} 1 ${x2} ${y2} L ${x3} ${y3} A ${r0} ${r0} 0 ${largo} 0 ${x4} ${y4} Z`;
}

export function HarnessDonut({ revelados = [] }: { revelados?: string[] }) {
  const hayRevelados = revelados.length > 0;

  return (
    <svg
      className="harness-donut"
      viewBox="0 0 400 400"
      role="img"
      aria-label="Las herramientas del harness agrupadas por propósito: flujos, calidad y contexto, control y seguridad, eficiencia."
    >
      {GRUPOS_HARNESS.map((g) => {
        const activo = revelados.includes(g.id);
        const atenuado = hayRevelados && !activo;
        const paso = 90 / g.tools.length;
        const [lx, ly] = polar(74, g.desde + 45);

        return (
          <g key={g.id}>
            <path
              d={sector(0, R_DISCO, g.desde, g.desde + 90)}
              fill={g.color}
              fillOpacity={atenuado ? 0.2 : 1}
            />

            {activo ? (
              g.tools.map((tool, i) => (
                <path
                  key={tool}
                  d={sector(R_ANILLO_0, R_ANILLO_1, g.desde + i * paso, g.desde + (i + 1) * paso)}
                  fill={g.soft}
                />
              ))
            ) : (
              <path
                d={sector(R_ANILLO_0, R_ANILLO_1, g.desde, g.desde + 90)}
                fill={g.soft}
                fillOpacity={0.22}
              />
            )}

            <text className={`hd-cat ${atenuado ? "hd-off" : ""}`} x={lx} y={ly}>
              {g.lineas.map((linea, i) => (
                <tspan key={linea} x={lx} dy={i === 0 ? (g.lineas.length > 1 ? -9 : 0) : 18}>
                  {linea}
                </tspan>
              ))}
            </text>

            {activo &&
              g.tools.map((tool, i) => {
                const [tx, ty] = polar((R_ANILLO_0 + R_ANILLO_1) / 2, g.desde + (i + 0.5) * paso);
                return (
                  <text className="hd-tool" key={tool} x={tx} y={ty}>
                    {tool}
                  </text>
                );
              })}
          </g>
        );
      })}
    </svg>
  );
}
