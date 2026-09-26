import { useStep } from "@/deck/StageContext";

/**
 * Arquitectura de un agente: quién hace qué, animada. `g` es el momento global del relato:
 *
 *   0    · diagrama simple: input → LLM → output
 *   1    · el LLM se desplaza al proveedor; harness y proveedor aparecen con sus bloques difuminados
 *   2-10 · en cada paso aparece un bloque (primero el harness, después el proveedor y el entorno)
 *          y los marcos crecen para contenerlo; en la segunda diapositiva ya no hay difuminado
 *
 * `inicio` es el momento en que arranca la diapositiva: 0 en la primera, 1 en la que retoma.
 */

/** Paso global en que aparece cada bloque. */
const FOCO = {
  ciclo: 2,
  config: 3,
  historial: 4,
  constructor: 5,
  permisos: 6,
  ejecutor: 7,
  ventana: 8,
  cache: 9,
  entorno: 10,
} as const;

/*
 * GRILLA. Todo sale de acá: columnas de igual ancho, huecos iguales, y un eje
 * horizontal común (EJE) para usuario, ciclo agéntico, cache y LLM.
 */
const EJE = 540;

// Harness: dos columnas de 346 con un hueco de 55, a 53 del borde del marco.
const H = { x: 240, w: 853, top: 20, bottom: 845 };
const COL_A = { x: 293, w: 346 };
const COL_B = { x: 694, w: 346 };
const CX_A = COL_A.x + COL_A.w / 2; // 466
const CX_B = COL_B.x + COL_B.w / 2; // 867
const INNER_H = { x: COL_A.x, w: COL_B.x + COL_B.w - COL_A.x }; // 293 → 1040

const CONFIG = { y: 90, h: 135 };
const FILA_1 = { y: 275, h: 120 }; // historial y constructor
const CICLO = { y: EJE - 55, h: 110 };
const FILA_3 = { y: 685, h: 120 }; // permisos y ejecutor
const CY_1 = FILA_1.y + FILA_1.h / 2; // 335
const CY_3 = FILA_3.y + FILA_3.h / 2; // 745

// Proveedor y entorno: contenido a 40 del borde, dos columnas de 310 con hueco de 60.
const P = { x: 1200, w: 760, top: 203, bottom: 685 };
const P_IN = { x: P.x + 40, w: P.w - 80 }; // 1240 → 1920
const CACHE = { x: 1240, w: 310 };
const LLM = { x: 1610, w: 310 };
const CX_CACHE = CACHE.x + CACHE.w / 2; // 1395
const CX_LLM = LLM.x + LLM.w / 2; // 1765
const VENTANA = { y: CY_1 - 28, h: 56 }; // alineada con el request del constructor
const SEG = [1240, 1420, 1600, 1790, 1920]; // tools · system · historial | nuevo
const E = { x: 1200, w: 760, top: 705, bottom: 845 };

// Hueco entre el harness y el proveedor: acá corren las verticales y van los rótulos.
const HUECO = (H.x + H.w + P.x) / 2; // 1146.5

// Usuario / Input y Output, simétricos.
const U = { x: 40, w: 136, h: 92 };

/** Desplazamiento del LLM entre el diagrama simple (centrado en 1000) y el proveedor. */
const LLM_DX = CX_LLM - 1000;

const FG = "var(--color-fg)";
const FONDO = "var(--color-fondo)";
const MUTED = "var(--color-muted)";
const ACENTO = "var(--color-acento)";
const ACENTO_OSC = "color-mix(in srgb, var(--color-acento) 78%, var(--color-fg))";
const BODY = "var(--font-body)";
const DISPLAY = "var(--font-display)";
const SUAVE = "color-mix(in srgb, var(--color-fg) 4%, transparent)";

type Tono = "normal" | "oscura" | "acento";

/** Caja con su título centrado (en uno o dos renglones). */
function Caja({
  x,
  y,
  w,
  h,
  titulo,
  tono = "normal",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Un renglón, o varios si no entra en el ancho de la caja. */
  titulo: string | string[];
  tono?: Tono;
}) {
  const relleno =
    tono === "oscura" ? FG : tono === "acento" ? "color-mix(in srgb, var(--color-acento) 10%, var(--color-fondo))" : FONDO;
  const partes = Array.isArray(titulo) ? titulo : [titulo];
  return (
    <>
      <rect
        pathLength={1}
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill={relleno}
        stroke={tono === "acento" ? ACENTO : FG}
        strokeWidth={2.5}
      />
      {partes.map((t, i) => (
        <text
          key={t}
          x={x + w / 2}
          y={y + h / 2 + 10 + (i - (partes.length - 1) / 2) * 36}
          textAnchor="middle"
          fontFamily={DISPLAY}
          fontWeight="700"
          fontSize="27"
          fill={tono === "oscura" ? FONDO : tono === "acento" ? ACENTO_OSC : FG}
        >
          {t}
        </text>
      ))}
    </>
  );
}

function Chip({ x, y, w, h, texto }: { x: number; y: number; w: number; h: number; texto: string }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx={8} fill="color-mix(in srgb, var(--color-fg) 7%, var(--color-fondo))" />
      <text x={x + w / 2} y={y + h / 2 + 7} textAnchor="middle" fontFamily={BODY} fontWeight="600" fontSize="19" fill={FG}>
        {texto}
      </text>
    </>
  );
}

/** Título de un marco, alineado con el borde izquierdo de su contenido. */
function TituloMarco({ x, y, color, children }: { x: number; y: number; color: string; children: string }) {
  return (
    <text x={x} y={y} fontFamily={DISPLAY} fontWeight="700" fontSize="31" fill={color}>
      {children}
    </text>
  );
}

/** Último tramo de un path hecho con M, L, H y V: de dónde viene y dónde termina. */
function ultimoTramo(d: string): [[number, number], [number, number]] {
  let x = 0;
  let y = 0;
  const pts: [number, number][] = [];
  for (const [, cmd, a, b] of d.matchAll(/([MLHV])\s*(-?[\d.]+)(?:[\s,]+(-?[\d.]+))?/g)) {
    if (cmd === "H") x = +a;
    else if (cmd === "V") y = +a;
    else {
      x = +a;
      y = +b;
    }
    pts.push([x, y]);
  }
  return [pts[pts.length - 2], pts[pts.length - 1]];
}

function Flecha({
  d,
  rotulo,
  rx,
  ry,
  anchor = "start",
  tenue = false,
}: {
  d: string;
  rotulo?: string;
  rx?: number;
  ry?: number;
  anchor?: "start" | "middle" | "end";
  tenue?: boolean;
}) {
  const [[x1, y1], [x2, y2]] = ultimoTramo(d);
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const ala = (s: number) => `${x2 - 16 * Math.cos(ang + s)},${y2 - 16 * Math.sin(ang + s)}`;
  return (
    <>
      <path className="flecha-linea" pathLength={1} d={d} fill="none" stroke={FG} strokeWidth={2.5} />
      <path
        className="flecha-punta"
        d={`M${ala(-0.45)} L${x2},${y2} L${ala(0.45)}`}
        fill="none"
        stroke={FG}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {rotulo && (
        <text
          className="flecha-rotulo"
          x={rx}
          y={ry}
          textAnchor={anchor}
          fontFamily={BODY}
          fontWeight={tenue ? 400 : 700}
          fontSize="19"
          fill={FG}
        >
          {rotulo}
        </text>
      )}
    </>
  );
}

/** Recuadro chico de un marco antes de que aparezca su contenido: rodea el eje. */
const MARCO_CHICO = { y: EJE - 135, height: 230 };

/**
 * Tamaño de los marcos. En el adelanto (primera diapositiva) ya tienen su tamaño final;
 * al construir (segunda diapositiva) crecen a medida que aparecen los bloques que contienen.
 */
function marcoHarness(g: number, construccion: boolean) {
  if (!construccion || g >= FOCO.permisos) return { y: H.top, height: H.bottom - H.top };
  if (g >= FOCO.config) return { y: H.top, height: MARCO_CHICO.y + MARCO_CHICO.height - H.top };
  return MARCO_CHICO;
}
function marcoProveedor(g: number, construccion: boolean) {
  if (!construccion || g >= FOCO.ventana) return { y: P.top, height: P.bottom - P.top };
  return MARCO_CHICO;
}

export function ArquitecturaAgente({ inicio = 0 }: { inicio?: number }) {
  const g = useStep() + inicio;
  /** La primera diapositiva adelanta todo difuminado; la segunda construye bloque por bloque. */
  const construccion = inicio > 0;

  /**
   * Clase de un bloque que aparece en el paso f. Antes de eso, en el adelanto se ve
   * difuminado; al construir, no está.
   */
  const foco = (f: number) => {
    if (g === 0 || (construccion && g < f)) return "foco oculto";
    if (g < f) return "foco difuso";
    // Lo que ya estaba dibujado al entrar a la diapositiva se muestra fijo, sin volver a trazarse.
    return construccion && f <= inicio ? "foco enfocado ya" : "foco enfocado";
  };
  /** Piezas visibles solo en el diagrama simple, o solo desde el momento 1. */
  const simple = `foco ${g === 0 ? "" : "oculto"}`;
  const completo = `foco ${g === 0 ? "oculto" : ""}`;

  const harness = marcoHarness(g, construccion);
  const proveedor = marcoProveedor(g, construccion);

  return (
    <svg className="arq-completa" viewBox="0 0 2000 870" aria-hidden="true">
      {/* ---- Marcos: harness y proveedor ---- */}
      <g className={completo}>
        <rect
          className="arq-marco"
          x={H.x}
          width={H.w}
          rx={16}
          fill="none"
          stroke={ACENTO}
          strokeWidth={2.5}
          strokeDasharray="12 8"
          style={{ y: harness.y, height: harness.height }}
        />
        <g className="arq-mueve" style={{ transform: `translateY(${harness.y - H.top}px)` }}>
          <TituloMarco x={INNER_H.x} y={H.top + 42} color={ACENTO}>
            Harness
          </TituloMarco>
        </g>

        <rect
          className="arq-marco"
          x={P.x}
          width={P.w}
          rx={16}
          fill={SUAVE}
          stroke={FG}
          strokeWidth={2.5}
          strokeDasharray="12 8"
          style={{ y: proveedor.y, height: proveedor.height }}
        />
        <g className="arq-mueve" style={{ transform: `translateY(${proveedor.y - P.top}px)` }}>
          <TituloMarco x={P_IN.x} y={P.top + 42} color={FG}>
            Proveedor del modelo
          </TituloMarco>
        </g>
      </g>

      {/* ---- Input → Usuario ---- */}
      <rect x={U.x} y={EJE - U.h / 2} width={U.w} height={U.h} rx={12} fill={FONDO} stroke={FG} strokeWidth={2.5} />
      <g className={simple}>
        <text x={U.x + U.w / 2} y={EJE + 10} textAnchor="middle" fontFamily={DISPLAY} fontWeight="700" fontSize="27" fill={FG}>
          Input
        </text>
      </g>
      <g className={completo}>
        <text x={U.x + U.w / 2} y={EJE + 10} textAnchor="middle" fontFamily={DISPLAY} fontWeight="700" fontSize="27" fill={FG}>
          Usuario
        </text>
      </g>

      {/* ---- Diagrama simple: input → LLM → output, simétrico respecto de 1000 ---- */}
      <g className={simple}>
        <Flecha d={`M${U.x + U.w},${EJE} H${LLM.x - LLM_DX - 2}`} />
        <Flecha d={`M${LLM.x + LLM.w - LLM_DX},${EJE} H${2000 - U.x - U.w - 2}`} />
        <rect x={2000 - U.x - U.w} y={EJE - U.h / 2} width={U.w} height={U.h} rx={12} fill={FONDO} stroke={FG} strokeWidth={2.5} />
        <text x={2000 - U.x - U.w / 2} y={EJE + 10} textAnchor="middle" fontFamily={DISPLAY} fontWeight="700" fontSize="27" fill={FG}>
          Output
        </text>
      </g>

      {/* ---- El LLM: centrado en el diagrama simple, dentro del proveedor después ---- */}
      <g className="arq-mueve" style={{ transform: `translateX(${g === 0 ? -LLM_DX : 0}px)` }}>
        <Caja x={LLM.x} y={CICLO.y} w={LLM.w} h={CICLO.h} titulo="LLM (inferencia)" tono="oscura" />
      </g>

      {/* ---- Harness por dentro ---- */}
      <g className={foco(FOCO.ciclo)}>
        <rect pathLength={1} x={INNER_H.x} y={CICLO.y} width={INNER_H.w} height={CICLO.h} rx={12} fill={FG} />
        <text
          x={INNER_H.x + INNER_H.w / 2}
          y={EJE + 10}
          textAnchor="middle"
          fontFamily={DISPLAY}
          fontWeight="700"
          fontSize="29"
          fill={FONDO}
        >
          Ciclo agéntico
        </text>
        <Flecha d={`M${U.x + U.w},${EJE - 15} H${INNER_H.x - 2}`} />
        <text x={U.x + U.w / 2} y={EJE - U.h / 2 - 16} textAnchor="middle" fontFamily={BODY} fontWeight="700" fontSize="19" fill={FG}>
          1 tarea
        </text>
        <Flecha d={`M${INNER_H.x},${EJE + 15} H${U.x + U.w + 2}`} />
        <text x={U.x + U.w / 2} y={EJE + U.h / 2 + 30} textAnchor="middle" fontFamily={BODY} fontSize="19" fill={FG}>
          respuesta final
        </text>
      </g>

      <g className={foco(FOCO.config)}>
        <rect
          className="sin-trazo"
          x={INNER_H.x}
          y={CONFIG.y}
          width={INNER_H.w}
          height={CONFIG.h}
          rx={12}
          fill="none"
          stroke={MUTED}
          strokeWidth={2}
          strokeDasharray="7 6"
        />
        <text x={INNER_H.x + 27} y={CONFIG.y + 38} fontFamily={DISPLAY} fontWeight="700" fontSize="24" fill={FG}>
          Configuración: fuentes de contexto
        </text>
        {["System prompt", "AGENTS.md", "Skills", "Tools"].map((t, i) => (
          <Chip key={t} x={INNER_H.x + 27 + i * (162 + 15)} y={CONFIG.y + 58} w={162} h={52} texto={t} />
        ))}
      </g>

      <g className={foco(FOCO.historial)}>
        <Caja x={COL_A.x} y={FILA_1.y} w={COL_A.w} h={FILA_1.h} titulo="Historial de la sesión" />
      </g>

      <g className={foco(FOCO.constructor)}>
        <Caja x={COL_B.x} y={FILA_1.y} w={COL_B.w} h={FILA_1.h} titulo={["Constructor", "de contexto"]} />
        <Flecha d={`M${CX_B},${CONFIG.y + CONFIG.h} V${FILA_1.y - 2}`} />
        <Flecha
          d={`M${COL_A.x + COL_A.w},${CY_1} H${COL_B.x - 2}`}
          rotulo="lee"
          rx={(COL_A.x + COL_A.w + COL_B.x) / 2}
          ry={CY_1 - 10}
          anchor="middle"
          tenue
        />
        <Flecha
          d={`M${CX_B},${CICLO.y} V${FILA_1.y + FILA_1.h + 2}`}
          rotulo="2 arma el request"
          rx={CX_B + 12}
          ry={(FILA_1.y + FILA_1.h + CICLO.y) / 2 + 7}
        />
      </g>

      <g className={foco(FOCO.permisos)}>
        <Caja x={COL_A.x} y={FILA_3.y} w={COL_A.w} h={FILA_3.h} titulo="Permisos y hooks" />
        <Flecha
          d={`M${CX_A},${CICLO.y + CICLO.h} V${FILA_3.y - 2}`}
          rotulo="6 tool_use"
          rx={CX_A + 12}
          ry={(CICLO.y + CICLO.h + FILA_3.y) / 2 + 7}
        />
      </g>

      <g className={foco(FOCO.ejecutor)}>
        <Caja x={COL_B.x} y={FILA_3.y} w={COL_B.w} h={FILA_3.h} titulo="Ejecutor de tools" />
        <Flecha
          d={`M${COL_A.x + COL_A.w},${CY_3} H${COL_B.x - 2}`}
          rotulo="7 ok"
          rx={(COL_A.x + COL_A.w + COL_B.x) / 2}
          ry={CY_3 - 10}
          anchor="middle"
        />
        <Flecha
          d={`M${CX_B},${FILA_3.y} V${CICLO.y + CICLO.h + 2}`}
          rotulo="9 tool_result"
          rx={CX_B + 12}
          ry={(CICLO.y + CICLO.h + FILA_3.y) / 2 + 7}
        />
        <Flecha
          d={`M${CX_A},${CICLO.y} V${FILA_1.y + FILA_1.h + 2}`}
          rotulo="10 se agrega al historial"
          rx={CX_A + 12}
          ry={(FILA_1.y + FILA_1.h + CICLO.y) / 2 + 7}
        />
      </g>

      {/* ---- Proveedor por dentro ---- */}
      <g className={foco(FOCO.ventana)}>
        <text x={P_IN.x} y={VENTANA.y - 14} fontFamily={DISPLAY} fontWeight="700" fontSize="24" fill={FG}>
          Ventana de contexto de esta llamada
        </text>
        <rect
          pathLength={1}
          x={SEG[0]}
          y={VENTANA.y}
          width={SEG[3] - SEG[0]}
          height={VENTANA.h}
          fill="color-mix(in srgb, var(--color-fg) 9%, var(--color-fondo))"
          stroke={FG}
          strokeWidth={2}
        />
        <rect
          pathLength={1}
          x={SEG[3]}
          y={VENTANA.y}
          width={SEG[4] - SEG[3]}
          height={VENTANA.h}
          fill={FONDO}
          stroke={FG}
          strokeWidth={2}
        />
        <line pathLength={1} x1={SEG[1]} y1={VENTANA.y} x2={SEG[1]} y2={VENTANA.y + VENTANA.h} stroke={FG} strokeWidth={1.5} />
        <line pathLength={1} x1={SEG[2]} y1={VENTANA.y} x2={SEG[2]} y2={VENTANA.y + VENTANA.h} stroke={FG} strokeWidth={1.5} />
        <text x={(SEG[0] + SEG[1]) / 2} y={CY_1 + 7} textAnchor="middle" fontFamily={BODY} fontSize="19" fill={FG}>
          Tools + MCP
        </text>
        <text x={(SEG[1] + SEG[2]) / 2} y={CY_1 - 5} textAnchor="middle" fontFamily={BODY} fontSize="17" fill={FG}>
          System + AGENTS.md
        </text>
        <text x={(SEG[1] + SEG[2]) / 2} y={CY_1 + 17} textAnchor="middle" fontFamily={BODY} fontSize="17" fill={FG}>
          + skills
        </text>
        <text x={(SEG[2] + SEG[3]) / 2} y={CY_1 + 7} textAnchor="middle" fontFamily={BODY} fontSize="19" fill={FG}>
          Historial
        </text>
        <text x={(SEG[3] + SEG[4]) / 2} y={CY_1 + 7} textAnchor="middle" fontFamily={BODY} fontSize="19" fill={FG}>
          Nuevo
        </text>

        <Flecha d={`M${COL_B.x + COL_B.w},${CY_1} H${SEG[0] - 2}`} rotulo="3 request" rx={HUECO} ry={CY_1 - 10} anchor="middle" />
        {/* La respuesta vuelve al ciclo por el hueco entre los dos marcos. */}
        <Flecha d={`M${CX_LLM},${CICLO.y + CICLO.h} V${CICLO.y + CICLO.h + 37} H${HUECO} V${EJE} H${INNER_H.x + INNER_H.w + 2}`} />
        <text x={P_IN.x} y={P.bottom - 25} fontFamily={BODY} fontWeight="700" fontSize="19" fill={FG}>
          5 respuesta: tool_use + uso de tokens
        </text>
      </g>

      <g className={foco(FOCO.cache)}>
        <path
          pathLength={1}
          d={`M${SEG[0]},${VENTANA.y + VENTANA.h + 13} v10 H${SEG[3] - 4} v-10`}
          fill="none"
          stroke={ACENTO}
          strokeWidth={2.5}
        />
        <path
          pathLength={1}
          d={`M${SEG[3] + 4},${VENTANA.y + VENTANA.h + 13} v10 H${SEG[4]} v-10`}
          fill="none"
          stroke={FG}
          strokeWidth={2.5}
        />
        <text
          x={(SEG[0] + SEG[3]) / 2}
          y={VENTANA.y + VENTANA.h + 49}
          textAnchor="middle"
          fontFamily={BODY}
          fontSize="18"
          fill={ACENTO_OSC}
        >
          prefijo idéntico a la llamada anterior
        </text>
        <text
          x={(SEG[3] + SEG[4]) / 2}
          y={VENTANA.y + VENTANA.h + 49}
          textAnchor="middle"
          fontFamily={BODY}
          fontSize="18"
          fill={FG}
        >
          se procesa
        </text>
        <Flecha
          d={`M${(SEG[0] + SEG[3]) / 2},${VENTANA.y + VENTANA.h + 60} V${EJE - 100} H${CX_CACHE} V${CICLO.y - 2}`}
          rotulo="4 ¿prefijo en cache?"
          rx={CX_CACHE + 12}
          ry={CICLO.y - 14}
        />
        {/* Lo nuevo va directo al modelo. */}
        <Flecha
          d={`M${(SEG[3] + SEG[4]) / 2},${VENTANA.y + VENTANA.h + 60} V${EJE - 100} H${CX_LLM} V${CICLO.y - 2}`}
          rotulo="tokens nuevos"
          rx={CX_LLM - 12}
          ry={CICLO.y - 14}
          anchor="end"
          tenue
        />
        <Caja x={CACHE.x} y={CICLO.y} w={CACHE.w} h={CICLO.h} titulo="Cache de prompt" tono="acento" />
        <Flecha d={`M${CACHE.x + CACHE.w},${EJE} H${LLM.x - 2}`} rotulo="hit" rx={(CACHE.x + CACHE.w + LLM.x) / 2} ry={EJE - 10} anchor="middle" tenue />
      </g>

      {/* ---- Entorno ---- */}
      <g className={foco(FOCO.entorno)}>
        <rect
          pathLength={1}
          x={E.x}
          y={E.top}
          width={E.w}
          height={E.bottom - E.top}
          rx={16}
          fill={SUAVE}
          stroke={MUTED}
          strokeWidth={2.5}
        />
        <TituloMarco x={P_IN.x} y={E.top + 42} color={FG}>
          Tools y entorno
        </TituloMarco>
        {["Filesystem", "Shell", "APIs", "Servidores MCP"].map((t, i) => (
          <Chip key={t} x={P_IN.x + i * (155 + 20)} y={E.top + 65} w={155} h={50} texto={t} />
        ))}
        <Flecha d={`M${COL_B.x + COL_B.w},${CY_3 - 5} H${E.x - 2}`} rotulo="8 ejecuta" rx={HUECO} ry={CY_3 - 15} anchor="middle" />
        <Flecha d={`M${E.x},${CY_3 + 35} H${COL_B.x + COL_B.w + 2}`} rotulo="resultado" rx={HUECO} ry={CY_3 + 60} anchor="middle" tenue />
      </g>
    </svg>
  );
}
