/**
 * Las capas de abstracción del desarrollo: la escalera de abstracciones
 * desemboca en dos herramientas que conviven — el IDE (código → código) y el
 * ADE (contexto → código, con un ciclo constante de supervisión).
 * Paleta del deck: rampa de tinta para la pila, azul para el IDE, acento
 * para el ADE.
 */

const CAPAS = [
  { y: 52, fill: "#54504a", titulo: "Frameworks, APIs y plataformas", ej: "Spring · React · AWS" },
  { y: 164, fill: "#45403a", titulo: "Lenguajes de alto nivel", ej: "Java · Python · JavaScript" },
  { y: 276, fill: "#35312c", titulo: "Lenguajes de bajo nivel", ej: "C · C++" },
  { y: 388, fill: "#24211d", titulo: "Assembler", ej: "MOV · ADD · JMP" },
  { y: 500, fill: "#14120e", titulo: "Bits / hardware", ej: "instrucciones de máquina" },
];

const PASOS = [
  { n: "1", label: "Generar", cx: 1064, cy: 308 },
  { n: "2", label: "Leer", cx: 1176, cy: 420 },
  { n: "3", label: "Validar", cx: 1064, cy: 532 },
  { n: "4", label: "Corregir", cx: 952, cy: 420 },
];

const PAPEL = "#f3efe6";
const ACENTO = "#e8482b";
const AZUL = "#2f6f8f";

export function CapasAbstraccion() {
  return (
    <svg
      className="fig"
      viewBox="0 0 1400 660"
      role="img"
      aria-label="Las capas de abstracción del desarrollo: de bits y hardware hasta frameworks, y en paralelo el IDE y el ADE con su ciclo de supervisión."
    >
      {/* Ejes de la pila */}
      <text
        x="24"
        y="170"
        fontSize="15"
        fontWeight="600"
        fill="#54504a"
        letterSpacing="2"
        textAnchor="middle"
        transform="rotate(-90 24 170)"
      >
        MÁS INTENCIÓN
      </text>
      <text
        x="24"
        y="500"
        fontSize="15"
        fontWeight="600"
        fill="#54504a"
        letterSpacing="2"
        textAnchor="middle"
        transform="rotate(-90 24 500)"
      >
        MÁS MÁQUINA
      </text>

      {/* Columna 1 — la escalera de abstracciones */}
      <text x="56" y="34" fontSize="15" fontWeight="600" fill="#54504a" letterSpacing="2">
        CAPAS DE ABSTRACCIÓN
      </text>
      {CAPAS.map((c) => (
        <g key={c.titulo}>
          <rect x="56" y={c.y} width="440" height="100" rx="10" fill={c.fill} />
          <text x="80" y={c.y + 44} fontSize="21" fontWeight="600" fill={PAPEL}>
            {c.titulo}
          </text>
          <text x="80" y={c.y + 74} fontSize="17" fill={PAPEL} fillOpacity="0.7">
            {c.ej}
          </text>
        </g>
      ))}

      {/* Columna 2 — IDE */}
      <rect x="524" y="52" width="230" height="548" rx="14" fill={AZUL} />
      <rect x="566" y="72" width="146" height="32" rx="16" fill={PAPEL} fillOpacity="0.18" />
      <text x="639" y="94" fontSize="15" fontWeight="600" fill={PAPEL} textAnchor="middle">
        PREVISIBLE
      </text>
      <text x="639" y="272" className="f-ttl" fontSize="56" fill={PAPEL} textAnchor="middle">
        IDE
      </text>
      <text x="639" y="308" fontSize="17" fill={PAPEL} fillOpacity="0.85" textAnchor="middle">
        Integrated
      </text>
      <text x="639" y="332" fontSize="17" fill={PAPEL} fillOpacity="0.85" textAnchor="middle">
        Development Environment
      </text>
      <rect
        x="552"
        y="366"
        width="174"
        height="46"
        rx="23"
        fill={PAPEL}
        fillOpacity="0.14"
        stroke={PAPEL}
        strokeOpacity="0.4"
      />
      <text x="639" y="395" fontSize="17" fontWeight="600" fill={PAPEL} textAnchor="middle">
        CÓDIGO → CÓDIGO
      </text>
      <text x="639" y="492" fontSize="18" fontWeight="600" fill={PAPEL} textAnchor="middle">
        VS Code · IntelliJ
      </text>
      <text x="639" y="520" fontSize="18" fontWeight="600" fill={PAPEL} textAnchor="middle">
        Eclipse · Vim
      </text>

      {/* Columna 3 — ADE */}
      <rect
        x="784"
        y="52"
        width="560"
        height="548"
        rx="14"
        fill="#f8e9e2"
        stroke={ACENTO}
        strokeWidth="2.5"
        strokeDasharray="9 6"
      />
      <text x="812" y="86" fontSize="15" fontWeight="600" fill="#54504a" letterSpacing="2">
        EN PARALELO
      </text>
      <rect
        x="1102"
        y="66"
        width="216"
        height="30"
        rx="15"
        fill={ACENTO}
        fillOpacity="0.14"
        stroke={ACENTO}
      />
      <text x="1210" y="87" fontSize="14" fontWeight="600" fill="#9a3412" textAnchor="middle">
        REQUIERE SUPERVISIÓN
      </text>
      <text x="812" y="142" className="f-ttl" fontSize="44" fill="#7c2d12">
        ADE
      </text>

      <rect x="812" y="166" width="504" height="56" rx="28" fill="#7c2d12" />
      <text x="944" y="202" fontSize="19" fontWeight="600" fill={PAPEL} textAnchor="middle">
        CONTEXTO
      </text>
      <text x="1064" y="203" fontSize="24" fontWeight="600" fill="#f2a894" textAnchor="middle">
        →
      </text>
      <text x="1184" y="202" fontSize="19" fontWeight="600" fill={PAPEL} textAnchor="middle">
        CÓDIGO
      </text>

      <text x="1064" y="266" fontSize="17" fontWeight="600" fill="#7c2d12" letterSpacing="1" textAnchor="middle">
        CICLO CONSTANTE DE SUPERVISIÓN
      </text>

      <circle cx="1064" cy="420" r="112" fill="none" stroke="#f2a894" strokeWidth="3" />
      {[45, 135, 225, 315].map((g) => {
        const rad = ((g - 90) * Math.PI) / 180;
        const x = 1064 + 112 * Math.cos(rad);
        const y = 420 + 112 * Math.sin(rad);
        return (
          <polygon
            key={g}
            points="-7,-6 7,0 -7,6"
            fill="#c2410c"
            transform={`translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${g})`}
          />
        );
      })}
      {PASOS.map((p) => (
        <g key={p.n}>
          <circle cx={p.cx} cy={p.cy} r="42" fill="#fdece2" stroke="#c2410c" strokeWidth="2" />
          <text x={p.cx} y={p.cy - 4} fontSize="17" fontWeight="700" fill="#c2410c" textAnchor="middle">
            {p.n}
          </text>
          <text x={p.cx} y={p.cy + 18} fontSize="15" fontWeight="600" fill="#7c2d12" textAnchor="middle">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
