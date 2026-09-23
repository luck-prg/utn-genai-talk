/**
 * Dona del harness: anillo interno = propósito, anillo externo = herramientas.
 * Se arma de a partes a lo largo de varias diapositivas: `revelados` dice qué
 * cuadrantes ya mostraron sus herramientas. Los que faltan quedan atenuados,
 * así el círculo nunca cambia de tamaño ni de posición entre pasos.
 *
 * Cada porción es un arco con trazo grueso: al montar, el trazo barre en
 * sentido horario (stroke-dashoffset) y el gráfico se "dibuja" solo.
 */
import type { CSSProperties, ReactNode } from "react";

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
    lineas: ["Eficiencia y", "paralelismo"],
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
const R_HUECO = 46;
const R_DISCO = 128;
const R_ANILLO_0 = 136;
const R_ANILLO_1 = 262;
const R_ETIQUETA = 86;
const MARGEN_VIEWBOX = 8;
const VIEWBOX = (() => {
  const lado = R_ANILLO_1 + MARGEN_VIEWBOX;
  return `${CX - lado} ${CY - lado} ${lado * 2} ${lado * 2}`;
})();

function polar(r: number, grados: number): [number, number] {
  const rad = ((grados - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
}

function arco(r: number, a0: number, a1: number): string {
  const [x1, y1] = polar(r, a0);
  const [x2, y2] = polar(r, a1);
  const largo = a1 - a0 > 180 ? 1 : 0;
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largo} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

function radio(a: number, r0: number, r1: number): string {
  const [x1, y1] = polar(r0, a);
  const [x2, y2] = polar(r1, a);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/** ¿El punto cae dentro de la porción de anillo, con aire contra los bordes? */
function adentro(x: number, y: number, a0: number, a1: number, aire: number): boolean {
  const dx = x - CX;
  const dy = y - CY;
  const r = Math.hypot(dx, dy);
  if (r < R_ANILLO_0 + aire || r > R_ANILLO_1 - aire) return false;
  const angulo = ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
  const rel = (angulo - a0 + 360) % 360;
  const ancho = a1 - a0;
  if (rel > ancho) return false;
  const aRad = (g: number) => (g * Math.PI) / 180;
  // Distancia perpendicular a cada lado recto de la porción.
  return r * Math.sin(aRad(rel)) >= aire && r * Math.sin(aRad(ancho - rel)) >= aire;
}

/** Busca el tamaño de letra más grande (y el lugar) en que la palabra, en
 * horizontal, entra completa dentro de su porción de anillo. */
function ubicarTool(texto: string, a0: number, a1: number) {
  const aire = 7;
  for (let fs = 26; fs >= 12; fs -= 1) {
    const w = texto.length * fs * 0.6;
    const h = fs * 0.8;
    let mejor: { x: number; y: number; d: number } | null = null;
    for (let ri = 0; ri <= 14; ri++) {
      const r = R_ANILLO_0 + ((R_ANILLO_1 - R_ANILLO_0) * ri) / 14;
      for (let ai = 1; ai < 12; ai++) {
        const a = a0 + ((a1 - a0) * ai) / 12;
        const [x, y] = polar(r, a);
        const puntos: [number, number][] = [
          [x - w / 2, y - h / 2],
          [x + w / 2, y - h / 2],
          [x - w / 2, y + h / 2],
          [x + w / 2, y + h / 2],
          [x, y - h / 2],
          [x, y + h / 2],
        ];
        if (!puntos.every(([px, py]) => adentro(px, py, a0, a1, aire))) continue;
        const [mx, my] = polar((R_ANILLO_0 + R_ANILLO_1) / 2, (a0 + a1) / 2);
        const d = Math.hypot(x - mx, y - my);
        if (!mejor || d < mejor.d) mejor = { x, y, d };
      }
    }
    if (mejor) return { x: mejor.x, y: mejor.y, fs };
  }
  const [x, y] = polar((R_ANILLO_0 + R_ANILLO_1) / 2, (a0 + a1) / 2);
  return { x, y, fs: 12 };
}

/** Arco que se dibuja solo: el largo se conoce de antemano (r·θ). */
function Trazo({
  r,
  a0,
  a1,
  ancho,
  color,
  opacidad = 1,
  retraso,
}: {
  r: number;
  a0: number;
  a1: number;
  ancho: number;
  color: string;
  opacidad?: number;
  retraso: number;
}) {
  const largo = Math.ceil((r * (a1 - a0) * Math.PI) / 180) + 1;
  return (
    <path
      data-trazo
      d={arco(r, a0, a1)}
      fill="none"
      stroke={color}
      strokeWidth={ancho}
      strokeOpacity={opacidad}
      style={{ "--hd-largo": largo, "--hd-retraso": `${retraso}s` } as CSSProperties}
    />
  );
}

export function HarnessDonut({ revelados = [] }: { revelados?: string[] }) {
  const hayRevelados = revelados.length > 0;
  const rDisco = (R_HUECO + R_DISCO) / 2;
  const anchoDisco = R_DISCO - R_HUECO;
  const rAnillo = (R_ANILLO_0 + R_ANILLO_1) / 2;
  const anchoAnillo = R_ANILLO_1 - R_ANILLO_0;
  const retrasoAnillo = 0.5;

  return (
    <svg
      className="harness-donut"
      viewBox={VIEWBOX}
      role="img"
      aria-label="Las herramientas del harness agrupadas por propósito: flujos, calidad y contexto, control y seguridad, eficiencia y paralelismo."
    >
      {GRUPOS_HARNESS.map((g, gi) => {
        const activo = revelados.includes(g.id);
        const atenuado = hayRevelados && !activo;
        const paso = 90 / g.tools.length;

        return (
          <g key={g.id}>
            <Trazo
              r={rDisco}
              a0={g.desde}
              a1={g.desde + 90}
              ancho={anchoDisco}
              color={g.color}
              opacidad={atenuado ? 0.18 : 1}
              retraso={gi * 0.1}
            />

            {activo ? (
              g.tools.map((tool, i) => (
                <Trazo
                  key={tool}
                  r={rAnillo}
                  a0={g.desde + i * paso}
                  a1={g.desde + (i + 1) * paso}
                  ancho={anchoAnillo}
                  color={g.soft}
                  retraso={retrasoAnillo + gi * 0.1 + i * 0.08}
                />
              ))
            ) : (
              <Trazo
                r={rAnillo}
                a0={g.desde}
                a1={g.desde + 90}
                ancho={anchoAnillo}
                color={g.soft}
                opacidad={0.22}
                retraso={retrasoAnillo + gi * 0.1}
              />
            )}
          </g>
        );
      })}

      {/* Separadores del color del fondo: cortan porciones con un ancho parejo. */}
      <g className="hd-sep">
        {GRUPOS_HARNESS.map((g) => (
          <path key={g.id} d={radio(g.desde, R_HUECO - 1, R_ANILLO_1 + 1)} />
        ))}
        {GRUPOS_HARNESS.filter((g) => revelados.includes(g.id)).flatMap((g) =>
          g.tools
            .slice(1)
            .map((tool, i) => (
              <path
                key={`${g.id}-${tool}`}
                d={radio(g.desde + ((i + 1) * 90) / g.tools.length, R_ANILLO_0 - 1, R_ANILLO_1 + 1)}
              />
            )),
        )}
      </g>

      {GRUPOS_HARNESS.map((g, gi) => {
        const activo = revelados.includes(g.id);
        const atenuado = hayRevelados && !activo;
        const paso = 90 / g.tools.length;
        const [lx, ly] = polar(R_ETIQUETA, g.desde + 45);

        return (
          <g key={g.id}>
            <text
              className={`hd-cat ${atenuado ? "hd-off" : ""}`}
              x={lx}
              y={ly}
              style={{ "--hd-retraso": `${0.35 + gi * 0.1}s` } as CSSProperties}
            >
              {g.lineas.map((linea, i) => (
                <tspan key={linea} x={lx} dy={i === 0 ? (g.lineas.length > 1 ? -9 : 0) : 19}>
                  {linea}
                </tspan>
              ))}
            </text>

            {activo &&
              g.tools.map((tool, i) => {
                const { x, y, fs } = ubicarTool(tool, g.desde + i * paso, g.desde + (i + 1) * paso);
                return (
                  <text
                    className="hd-tool"
                    key={tool}
                    x={x}
                    y={y}
                    style={
                      {
                        fontSize: fs,
                        "--hd-retraso": `${retrasoAnillo + 0.45 + gi * 0.1 + i * 0.08}s`,
                      } as CSSProperties
                    }
                  >
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

/** Palabra clave alrededor del gráfico, junto al cuadrante que nombra. */
export function HarnessKeyword({
  children,
  grupo,
  pos,
}: {
  children: ReactNode;
  grupo: string;
  pos: "tl" | "tr" | "bl" | "br";
}) {
  const g = grupoHarness(grupo);
  return (
    <span
      className={`harness-keyword harness-keyword--${pos} reveal`}
      style={{ "--kw-color": g.color } as CSSProperties}
    >
      {children}
    </span>
  );
}
