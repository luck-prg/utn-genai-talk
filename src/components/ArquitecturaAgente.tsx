import type { ReactNode } from "react";
import { Paso } from "@/components/Paso";

/**
 * El diagrama del ciclo agéntico, que se arma en cuatro pasos:
 *
 *   0 · input → LLM → output, la interacción pelada
 *   1 · aparece el harness y la memoria de la sesión
 *   2 · aparece el constructor de contexto: el input ya no va directo al LLM
 *   3 · aparecen permisos y ejecución de tools, que cierran el loop
 *
 * Todo en un viewBox fijo: escala solo con el ancho de la diapositiva.
 */

/** Caja del diagrama, con su título y sus líneas de detalle. */
function Caja({
  x,
  y,
  w,
  h,
  titulo,
  lineas = [],
  oscura = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  titulo: string;
  lineas?: string[];
  oscura?: boolean;
}) {
  const cx = x + w / 2;
  // Con detalle, el título sube para dejarle lugar; si no, va centrado.
  const yTitulo = lineas.length ? y + 38 : y + h / 2 + 8;
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={oscura ? "var(--color-fg)" : "var(--color-fondo)"}
        stroke="var(--color-fg)"
        strokeWidth={2.5}
      />
      <text
        x={cx}
        y={yTitulo}
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight="700"
        fontSize="23"
        fill={oscura ? "var(--color-fondo)" : "var(--color-fg)"}
      >
        {titulo}
      </text>
      {lineas.map((l, i) => (
        <text
          key={l}
          x={cx}
          y={y + 66 + i * 23}
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontSize="16"
          fill={oscura ? "color-mix(in srgb, var(--color-fondo) 72%, transparent)" : "var(--color-muted)"}
        >
          {l}
        </text>
      ))}
    </>
  );
}

/** Flecha con punta, y opcionalmente su rótulo. */
function Flecha({ d, rotulo, rx, ry }: { d: string; rotulo?: string; rx?: number; ry?: number }) {
  return (
    <>
      <path d={d} fill="none" stroke="var(--color-fg)" strokeWidth={2.5} markerEnd="url(#punta)" />
      {rotulo && (
        <text
          x={rx}
          y={ry}
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontWeight="600"
          fontSize="15"
          fill="var(--color-acento)"
        >
          {rotulo}
        </text>
      )}
    </>
  );
}

/**
 * Envuelve una pieza del diagrama según en qué nivel del relato entra (y, si
 * corresponde, en cuál se va). `base` es lo que ya quedó construido en la
 * diapositiva anterior: esas piezas se dibujan de entrada, sin paso.
 */
function Nivel({
  nivel,
  salida,
  base,
  children,
}: {
  nivel: number;
  salida?: number;
  base: number;
  children: ReactNode;
}) {
  if (salida !== undefined && salida <= base) return null; // ya se fue antes
  const n = Math.max(nivel - base, 0);
  const s = salida === undefined ? undefined : salida - base;
  if (n === 0 && s === undefined) return <g>{children}</g>;
  return (
    <Paso as="g" n={n} salida={s}>
      {children}
    </Paso>
  );
}

export function ArquitecturaAgente({ base = 0 }: { /** Nivel ya construido al entrar. */ base?: number }) {
  return (
    <svg className="arq-agente" viewBox="0 0 1240 660" aria-hidden="true">
      <defs>
        <marker id="punta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-fg)" />
        </marker>
      </defs>

      {/* ---- Paso 0: la interacción pelada ---- */}
      <Caja x={16} y={292} w={152} h={76} titulo="Input" lineas={[]} />
      <Caja x={600} y={286} w={200} h={100} titulo="LLM" lineas={["predice tokens", "no recuerda nada"]} oscura />
      <Caja x={1072} y={292} w={152} h={76} titulo="Output" lineas={[]} />

      {/* El input va directo al modelo sólo hasta que aparece el constructor. */}
      <Nivel nivel={0} salida={2} base={base}>
        <Flecha d="M168,330 H598" />
      </Nivel>
      <Flecha d="M800,336 H1070" />

      {/* ---- Paso 1: el harness y la memoria ---- */}
      <Nivel nivel={1} base={base}>
        <rect
          x={250}
          y={96}
          width={800}
          height={516}
          rx={16}
          fill="none"
          stroke="var(--color-acento)"
          strokeWidth={3}
          strokeDasharray="10 7"
        />
        <text x={272} y={132} fontFamily="var(--font-display)" fontWeight="700" fontSize="26" fill="var(--color-acento)">
          Harness
        </text>
        <text x={272} y={158} fontFamily="var(--font-body)" fontSize="16" fill="var(--color-muted)">
          la capa que provee las tools y gestiona el contexto
        </text>
        <Caja
          x={292}
          y={180}
          w={248}
          h={92}
          titulo="Memoria"
          lineas={["historial de la sesión"]}
        />
      </Nivel>

      {/* ---- Paso 2: el constructor de contexto ---- */}
      <Nivel nivel={2} base={base}>
        <Caja
          x={292}
          y={296}
          w={216}
          h={92}
          titulo="Constructor"
          lineas={["arma el contexto"]}
        />
        <Flecha d="M168,330 H290" />
        <Flecha d="M508,342 H598" />
        {/* la memoria alimenta cada request */}
        <Flecha d="M416,272 V294" />
      </Nivel>

      {/* ---- Paso 3: permisos, tools y el cierre del loop ---- */}
      <Nivel nivel={3} base={base}>
        <Caja x={292} y={462} w={216} h={92} titulo="Permisos" lineas={["¿se puede ejecutar?"]} />
        <Caja x={600} y={462} w={248} h={92} titulo="Tools" lineas={["las ejecuta el harness"]} />
        {/* el modelo pide una tool */}
        <Flecha d="M660,388 V430 H400 V460" rotulo="pide una tool" rx={548} ry={422} />
        <Flecha d="M508,508 H598" />
        {/* El resultado vuelve al historial y el ciclo recomienza. La curva a
            media subida es el puente sobre la salida al output: así se ve que
            las dos líneas se cruzan pero no se tocan. */}
        <Flecha
          d="M848,508 H944 V352 q 13,-8 0,-20 V226 H542"
          rotulo="resultado al historial"
          rx={790}
          ry={214}
        />
      </Nivel>
    </svg>
  );
}

/** Rótulo suelto para anotar el diagrama desde la diapositiva. */
export function ArqNota({ children }: { children: ReactNode }) {
  return <p className="arq-nota">{children}</p>;
}
