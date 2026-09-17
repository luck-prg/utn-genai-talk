/**
 * El ciclo que habilitan las tools: contexto → acción → validación, con
 * retorno mientras falte información o la validación falle, y salida recién
 * cuando hay evidencia. Sin tools el ciclo se corta en "acción".
 */

const PAPEL = "#f3efe6";
const TINTA = "#14120e";
const ACENTO = "#e8482b";

const ETAPAS = [
  { x: 208, tag: "1", titulo: "CONTEXTO", detalle: "leer, buscar, consultar" },
  { x: 560, tag: "2", titulo: "ACCIÓN", detalle: "editar, ejecutar, usar tools" },
  { x: 912, tag: "3", titulo: "VALIDACIÓN", detalle: "tests, build, lint, logs" },
];

export function CicloEvidencia() {
  return (
    <svg
      className="fig"
      viewBox="0 0 1460 380"
      role="img"
      aria-label="Ciclo del agente: contexto, acción y validación, con retorno al contexto si falta información o falla la validación, y salida con evidencia."
    >
      <text x="52" y="40" fontSize="16" fontWeight="600" fill="#54504a" letterSpacing="2">
        OBJETIVO
      </text>

      {ETAPAS.map((e, i) => (
        <g key={e.titulo}>
          <rect
            x={e.x}
            y="70"
            width="300"
            height="116"
            rx="12"
            fill={i === 2 ? ACENTO : "transparent"}
            stroke={i === 2 ? ACENTO : TINTA}
            strokeWidth="2.5"
          />
          <text
            x={e.x + 24}
            y="106"
            fontSize="16"
            fontWeight="700"
            fill={i === 2 ? PAPEL : ACENTO}
          >
            {e.tag}
          </text>
          <text
            x={e.x + 24}
            y="140"
            className="f-ttl"
            fontSize="28"
            fill={i === 2 ? PAPEL : TINTA}
          >
            {e.titulo}
          </text>
          <text
            x={e.x + 24}
            y="167"
            fontSize="16"
            fill={i === 2 ? PAPEL : "#54504a"}
            fillOpacity={i === 2 ? 0.85 : 1}
          >
            {e.detalle}
          </text>
        </g>
      ))}

      {/* Flechas entre etapas */}
      {[512, 864].map((x) => (
        <g key={x}>
          <line x1={x} y1="128" x2={x + 40} y2="128" stroke={TINTA} strokeWidth="2.5" />
          <polygon points="0,-7 12,0 0,7" fill={TINTA} transform={`translate(${x + 44},128)`} />
        </g>
      ))}

      {/* Entrada y salida */}
      <line x1="120" y1="128" x2="200" y2="128" stroke={TINTA} strokeWidth="2.5" />
      <polygon points="0,-7 12,0 0,7" fill={TINTA} transform="translate(200,128)" />
      <line x1="1212" y1="128" x2="1300" y2="128" stroke={ACENTO} strokeWidth="2.5" />
      <polygon points="0,-7 12,0 0,7" fill={ACENTO} transform="translate(1300,128)" />
      <text x="1350" y="122" fontSize="17" fontWeight="600" fill={ACENTO} textAnchor="middle">
        LISTO
      </text>
      <text x="1350" y="146" fontSize="14" fill="#54504a" textAnchor="middle">
        con evidencia
      </text>

      {/* Retorno */}
      <path
        d="M 1062 186 L 1062 268 Q 1062 284 1046 284 L 374 284 Q 358 284 358 268 L 358 186"
        fill="none"
        stroke={ACENTO}
        strokeWidth="2.5"
        strokeDasharray="8 6"
      />
      <polygon points="0,7 -7,-5 7,-5" fill={ACENTO} transform="translate(358,190)" />
      <text x="710" y="322" fontSize="17" fontWeight="600" fill={ACENTO} textAnchor="middle">
        falta información o la validación falló
      </text>
      <text x="710" y="348" fontSize="15" fill="#54504a" textAnchor="middle">
        cada vuelta deja resultados reales en el contexto, no suposiciones
      </text>
    </svg>
  );
}
