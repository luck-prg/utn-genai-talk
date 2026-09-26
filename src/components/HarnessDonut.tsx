/**
 * Dona del harness: disco interno = propósito, anillo angosto = herramientas,
 * y un marco exterior del que salen líneas guía con el nombre de cada
 * herramienta. Se arma de a partes a lo largo de varias diapositivas:
 * `revelados` dice qué cuadrantes ya mostraron sus herramientas. Los que
 * faltan quedan atenuados, así el gráfico nunca cambia de tamaño ni de
 * posición entre pasos.
 *
 * Cada porción es un arco con trazo grueso: al montar, el trazo barre en
 * sentido horario (stroke-dashoffset) y el gráfico se "dibuja" solo.
 */
import type { CSSProperties } from "react";

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
    tools: ["Rules", "MCP", "Skills"],
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

const CX = 0;
const CY = 0;
const R_HUECO = 54;
const R_DISCO = 196;
const R_ANILLO_0 = 206;
const R_ANILLO_1 = 244;
const R_MARCO = 266;
const MARCA = 9;
const R_CODO = 318;
const X_FIN = 540;
const R_ETIQUETA = (R_HUECO + R_DISCO) / 2;
const VIEWBOX = "-548 -284 1096 568";

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

/** Estilo de una porción que pasa de atenuada a plena en esta diapositiva. */
function aviva(desde: number): CSSProperties {
  return { "--hd-desde": desde, "--hd-retraso": "0.15s" } as CSSProperties;
}

/** Arco que se dibuja solo en la primera aparición: el largo se conoce de
 * antemano (r·θ). */
function Trazo({
  r,
  a0,
  a1,
  ancho,
  color,
  opacidad = 1,
  retraso,
  avivaDesde,
}: {
  r: number;
  a0: number;
  a1: number;
  ancho: number;
  color: string;
  opacidad?: number;
  retraso: number;
  /** Opacidad desde la que la porción se enciende en esta diapositiva. */
  avivaDesde?: number;
}) {
  const largo = Math.ceil((r * (a1 - a0) * Math.PI) / 180) + 1;
  return (
    <path
      data-trazo
      className={avivaDesde === undefined ? undefined : "hd-aviva"}
      d={arco(r, a0, a1)}
      fill="none"
      stroke={color}
      strokeWidth={ancho}
      strokeOpacity={opacidad}
      style={
        avivaDesde === undefined
          ? ({ "--hd-largo": largo, "--hd-retraso": `${retraso}s` } as CSSProperties)
          : aviva(avivaDesde)
      }
    />
  );
}

/** Línea guía: sale del marco en diagonal, por el medio del cuadrante, y se
 * quiebra en horizontal hacia afuera. Sobre el tramo horizontal van las
 * herramientas del grupo, alineadas al borde exterior. Solo la guía nueva
 * se traza; las que ya estaban quedan quietas. */
function Guia({ grupo, nueva }: { grupo: GrupoHarness; nueva: boolean }) {
  const medio = grupo.desde + 45;
  const [x0, y0] = polar(R_MARCO, medio);
  const [x1, y1] = polar(R_CODO, medio);
  const lado = x1 >= 0 ? 1 : -1;
  const x2 = lado * X_FIN;
  const largo = Math.ceil(Math.hypot(x1 - x0, y1 - y0) + Math.abs(x2 - x1)) + 1;
  const retraso = 0.45;

  return (
    <g className={nueva ? "hd-guia hd-nuevo" : "hd-guia"}>
      <circle
        className="hd-punto"
        cx={x0}
        cy={y0}
        r={4.5}
        fill={grupo.color}
        style={{ "--hd-retraso": `${retraso}s` } as CSSProperties}
      />
      <path
        data-trazo
        d={`M ${x0.toFixed(2)} ${y0.toFixed(2)} L ${x1.toFixed(2)} ${y1.toFixed(2)} L ${x2} ${y1.toFixed(2)}`}
        fill="none"
        stroke={grupo.color}
        strokeWidth={2}
        strokeLinejoin="round"
        style={{ "--hd-largo": largo, "--hd-retraso": `${retraso}s` } as CSSProperties}
      />
      <text
        className="hd-tool"
        x={x2}
        y={y1 - 16}
        textAnchor={lado > 0 ? "end" : "start"}
        style={{ "--hd-retraso": `${retraso + 0.55}s` } as CSSProperties}
      >
        {grupo.tools.join(" · ")}
      </text>
    </g>
  );
}

const OPACIDAD_DISCO_OFF = 0.18;
const OPACIDAD_ANILLO_OFF = 0.22;

/**
 * Sin `revelados` el gráfico se dibuja entero (primera aparición). Con
 * `revelados` ya estaba en pantalla en la diapositiva anterior: queda quieto
 * y solo se anima el último grupo de la lista, que se enciende y traza su guía.
 */
export function HarnessDonut({ revelados = [] }: { revelados?: string[] }) {
  const entrada = revelados.length === 0;
  const nuevo = revelados.at(-1);
  const rDisco = (R_HUECO + R_DISCO) / 2;
  const anchoDisco = R_DISCO - R_HUECO;
  const rAnillo = (R_ANILLO_0 + R_ANILLO_1) / 2;
  const anchoAnillo = R_ANILLO_1 - R_ANILLO_0;
  const retrasoAnillo = 0.5;

  return (
    <svg
      className={entrada ? "harness-donut harness-donut--entrada" : "harness-donut"}
      viewBox={VIEWBOX}
      role="img"
      aria-label="Las herramientas del harness agrupadas por propósito: flujos, calidad y contexto, control y seguridad, eficiencia y paralelismo."
    >
      {/* Marco exterior con una marca en cada límite de cuadrante. */}
      <g className="hd-marco">
        <circle cx={CX} cy={CY} r={R_MARCO} />
        {GRUPOS_HARNESS.map((g) => (
          <path key={g.id} d={radio(g.desde, R_MARCO - MARCA, R_MARCO + MARCA)} />
        ))}
      </g>

      {GRUPOS_HARNESS.map((g, gi) => {
        const activo = revelados.includes(g.id);
        const atenuado = !entrada && !activo;
        const esNuevo = g.id === nuevo;

        return (
          <g key={g.id}>
            <Trazo
              r={rDisco}
              a0={g.desde}
              a1={g.desde + 90}
              ancho={anchoDisco}
              color={g.color}
              opacidad={atenuado ? OPACIDAD_DISCO_OFF : 1}
              retraso={gi * 0.1}
              avivaDesde={esNuevo ? OPACIDAD_DISCO_OFF : undefined}
            />
            <Trazo
              r={rAnillo}
              a0={g.desde}
              a1={g.desde + 90}
              ancho={anchoAnillo}
              color={g.soft}
              opacidad={activo ? 1 : OPACIDAD_ANILLO_OFF}
              retraso={retrasoAnillo + gi * 0.1}
              avivaDesde={esNuevo ? OPACIDAD_ANILLO_OFF : undefined}
            />
          </g>
        );
      })}

      {/* Separadores del color del fondo: cortan porciones con un ancho parejo. */}
      <g className="hd-sep">
        {GRUPOS_HARNESS.map((g) => (
          <path key={g.id} d={radio(g.desde, R_HUECO - 1, R_ANILLO_1 + 1)} />
        ))}
      </g>

      {GRUPOS_HARNESS.map((g, gi) => {
        const atenuado = !entrada && !revelados.includes(g.id);
        const esNuevo = g.id === nuevo;
        const [lx, ly] = polar(R_ETIQUETA, g.desde + 45);

        return (
          <text
            key={g.id}
            className={`hd-cat${atenuado ? " hd-off" : ""}${esNuevo ? " hd-aviva" : ""}`}
            x={lx}
            y={ly}
            style={
              esNuevo
                ? aviva(0)
                : ({ "--hd-retraso": `${0.35 + gi * 0.1}s` } as CSSProperties)
            }
          >
            {g.lineas.map((linea, i) => (
              <tspan key={linea} x={lx} dy={i === 0 ? (g.lineas.length > 1 ? -12 : 0) : 25}>
                {linea}
              </tspan>
            ))}
          </text>
        );
      })}

      {GRUPOS_HARNESS.filter((g) => revelados.includes(g.id)).map((g) => (
        <Guia key={g.id} grupo={g} nueva={g.id === nuevo} />
      ))}
    </svg>
  );
}
