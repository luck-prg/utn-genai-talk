/**
 * EL HAZ DE LA LINTERNA
 *
 * El plano completo del sistema está dibujado, pero el agente sólo ve lo que
 * cae dentro de su ventana de contexto. Escribe perfecto lo que ilumina — y
 * el resto del plano, el que da sentido a esa pieza, no existe para él.
 */

const TINTA = "#14120e";
const ACENTO = "#e8482b";

/** Los módulos del plano. El que cae bajo el haz está resaltado. */
const MODULOS = [
  { x: 60, y: 70, w: 210, h: 104, t: "controllers", dentro: true },
  { x: 300, y: 70, w: 210, h: 104, t: "dominio" },
  { x: 540, y: 70, w: 210, h: 104, t: "casos de uso" },
  { x: 780, y: 70, w: 210, h: 104, t: "repositorios" },
  { x: 60, y: 204, w: 210, h: 104, t: "validación", dentro: true },
  { x: 300, y: 204, w: 210, h: 104, t: "eventos" },
  { x: 540, y: 204, w: 210, h: 104, t: "infra" },
  { x: 780, y: 204, w: 210, h: 104, t: "contratos" },
];

export function Linterna({ paso }: { paso: number }) {
  const encendida = paso >= 1;

  return (
    <svg
      className="fig fig-linterna"
      viewBox="0 0 1050 360"
      role="img"
      aria-label="El plano completo de la arquitectura en gris, con un haz de luz que ilumina sólo dos módulos: eso es lo único que el agente ve."
    >
      <defs>
        <radialGradient id="haz" cx="0.16" cy="0.5" r="0.42">
          <stop offset="0%" stopColor={ACENTO} stopOpacity="0.20" />
          <stop offset="100%" stopColor={ACENTO} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* El haz: sólo esto entra en la ventana de contexto. */}
      <rect
        x="0"
        y="0"
        width="1050"
        height="360"
        fill="url(#haz)"
        opacity={encendida ? 1 : 0}
        style={{ transition: "opacity .8s ease" }}
      />

      {MODULOS.map((m) => {
        const iluminado = encendida && m.dentro;
        return (
          <g key={m.t} style={{ transition: "opacity .6s ease" }}>
            <rect
              x={m.x}
              y={m.y}
              width={m.w}
              height={m.h}
              rx="10"
              fill={iluminado ? "rgba(232,72,43,0.10)" : "transparent"}
              stroke={iluminado ? ACENTO : "rgba(20,18,14,0.18)"}
              strokeWidth="2.5"
              style={{ transition: "stroke .6s ease, fill .6s ease" }}
            />
            <text
              x={m.x + m.w / 2}
              y={m.y + m.h / 2 + 7}
              className="f-ttl"
              fontSize="22"
              fill={iluminado ? TINTA : "rgba(20,18,14,0.30)"}
              textAnchor="middle"
              style={{ transition: "fill .6s ease" }}
            >
              {m.t}
            </text>
          </g>
        );
      })}

      <g opacity={encendida ? 1 : 0} style={{ transition: "opacity .8s ease" }}>
        <text x="60" y="345" fontSize="18" fontWeight="600" fill={ACENTO}>
          lo que ve el agente
        </text>
        <text x="780" y="345" fontSize="18" fill="rgba(20,18,14,0.38)" textAnchor="end">
          lo que le da sentido
        </text>
      </g>
    </svg>
  );
}
