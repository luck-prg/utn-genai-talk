import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Croquis técnicos del folleto de la charla: diagramas dibujados a mano
 * (agent loop, tokenización, atención, ciclo spec-driven...) que se usan como
 * marginalia de fondo, con el trazo dibujándose en bucle.
 *
 * El trazo usa `currentColor`, así que hereda la tinta de la diapositiva: en
 * las divisorias de bloque (paleta invertida) se dibuja claro solo.
 */
export type CroquisNombre =
  | "ventanaContexto"
  | "atencionToken"
  | "tokenizacion"
  | "gradiente"
  | "specDriven"
  | "costoContexto"
  | "temperatura"
  | "espacioVectorial"
  | "agentLoop"
  | "entornoAgente"
  | "senalRuido"
  | "specCodigo"
  | "atencionMatriz"
  | "varianza";

const CROQUIS: Record<CroquisNombre, { viewBox: string; strokeWidth: string; dibujo: ReactNode }> = {
  ventanaContexto: {
    viewBox: "0 0 520 230",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <defs><pattern id="hk4" width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="9" stroke="currentColor" strokeWidth="1.4" /></pattern><pattern id="hr4" width="9" height="9" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="9" stroke="var(--color-acento)" strokeWidth="1.7" /></pattern></defs>
        <g transform="rotate(-0.5 0 0)">
        <text x="2" y="26" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="27" fill="currentColor" stroke="none" >tokens acumulados / iteración</text>
        <path d="M29.8 50.3Q29.0 124.1 29.7 194.9"  /><path d="M31.0 195.6Q264.3 195.3 500.4 196.2"  />
        <path d="M54.3 167.4Q80.5 167.2 102.8 168.2Q100.5 180.4 101.3 195.9Q75.4 195.8 53.3 195.4Q54.0 182.2 54.3 167.4Z" fill="url(#hk4)" stroke="currentColor" /><path d="M129.0 148.9Q150.5 146.6 175.7 148.3Q176.8 173.5 176.6 196.4Q150.6 195.1 128.6 196.1Q127.2 174.3 129.0 148.9Z" fill="url(#hk4)" stroke="currentColor" /><path d="M202.1 127.0Q226.1 126.8 250.9 125.5Q248.0 159.0 249.0 196.1Q226.7 196.8 201.1 195.7Q200.3 160.0 202.1 127.0Z" fill="url(#hk4)" stroke="currentColor" /><path d="M276.8 104.1Q301.7 103.0 325.0 103.4Q325.3 151.3 323.9 195.5Q297.9 197.3 275.6 195.2Q274.4 148.6 276.8 104.1Z" fill="url(#hk4)" stroke="currentColor" /><path d="M350.4 83.6Q374.8 84.0 397.7 84.5Q399.4 138.2 398.9 195.1Q374.6 195.9 350.9 194.9Q352.0 139.3 350.4 83.6Z" fill="url(#hk4)" stroke="currentColor" /><path d="M423.7 60.9Q446.8 61.1 471.3 63.0Q470.6 129.8 471.8 196.1Q446.6 197.4 424.5 195.7Q422.8 127.7 423.7 60.9Z" fill="url(#hr4)" stroke="var(--color-acento)" />
        <path d="M34.0 58.4Q200.0 59.6 360.0 58.2" strokeDasharray="9 7" strokeWidth="1.7" />
        <text x="34" y="80" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none" >límite de ventana</text>
        <text x="392" y="44" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="24" fill="var(--color-acento)" stroke="none" >¡degrada!</text><path d="M436 52C444 64 452 70 462 78" stroke="var(--color-acento)" strokeWidth="1.6" />
        <text x="66" y="220" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none" >i1</text><text x="140" y="220" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none" >i2</text><text x="214" y="220" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none" >i3</text><text x="288" y="220" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none" >i4</text><text x="362" y="220" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none" >i5</text><text x="436" y="220" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none" >i6</text>
        </g>
      </>
    ),
  },
  atencionToken: {
    viewBox: "0 0 520 340",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <path d="M249.0 19.3Q363.8 17.3 479.4 19.3Q478.4 135.3 479.0 250.4Q365.6 252.7 248.9 251.1Q248.5 136.0 249.0 19.3Z"  />
        <path d="M308 20v230M366 20v230M424 20v230M250 78h230M250 136h230M250 194h230" strokeWidth="1" />
        <circle cx="280" cy="48" r="11" fill="currentColor" stroke="none" /><circle cx="338" cy="106" r="8" fill="currentColor" stroke="none" /><circle cx="396" cy="164" r="14" fill="currentColor" stroke="none" /><circle cx="454" cy="222" r="7" fill="currentColor" stroke="none" /><circle cx="338" cy="48" r="6" fill="currentColor" stroke="none" />
        <text x="252" y="282" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="26" fill="currentColor" stroke="none" >atención por token</text>
        <path d="M14 300C64 240 106 296 156 232C206 168 246 244 296 190" strokeWidth="2.3" />
        <path d="M14.1 79.8Q13.5 190.1 14.1 299.6"  /><path d="M13.7 299.8Q131.1 300.7 250.2 300.3"  />
        <text x="30" y="48" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="26" fill="currentColor" stroke="none" >∑ tokens</text>
      </>
    ),
  },
  tokenizacion: {
    viewBox: "0 0 560 96",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="rotate(-0.5 0 0)">
        <text x="2" y="22" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="24" fill="currentColor" stroke="none" >tokenización</text>
        <path d="M2.1 35.4Q44.1 34.5 88.7 36.1Q89.3 57.8 87.6 78.0Q46.3 76.0 1.6 78.1Q3.5 56.8 2.1 35.4Z"  /><text x="45" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="middle">El</text><path d="M94.5 36.1Q137.2 38.0 180.3 36.5Q181.4 55.0 179.7 77.5Q136.5 75.8 94.4 77.6Q94.0 58.5 94.5 36.1Z"  /><text x="137" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="middle">pro</text><path d="M186.8 37.0Q229.7 38.4 271.2 36.0Q269.6 57.4 271.2 77.6Q227.3 77.2 185.6 77.6Q185.1 58.5 186.8 37.0Z"  /><text x="229" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="middle">ceso</text><path d="M277.3 36.4Q322.0 37.2 363.5 36.4Q364.5 58.5 363.1 79.1Q319.4 77.8 277.3 78.7Q279.0 56.0 277.3 36.4Z"  /><text x="321" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="middle">de</text><path d="M370.4 36.3Q413.0 37.8 455.7 37.0Q456.2 56.3 456.4 77.1Q414.3 78.8 369.5 78.4Q369.9 59.3 370.4 36.3Z"  /><text x="413" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="middle">di</text><path d="M461.2 36.8Q503.6 34.7 547.8 35.0Q548.0 55.9 548.6 77.0Q503.7 77.2 462.3 78.8Q461.8 56.5 461.2 36.8Z"  /><text x="505" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="middle">seño</text>
        <text x="556" y="63" fontFamily="var(--font-body)" fontSize="18" fill="currentColor" stroke="none" textAnchor="end">…</text>
        </g>
      </>
    ),
  },
  gradiente: {
    viewBox: "0 0 760 150",
    strokeWidth: "2",
    dibujo: (
      <>
        <defs><pattern id="hmi" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1.2" /></pattern></defs>
        <g transform="rotate(-0.4 0 0)">
        <text x="0" y="34" fontFamily="var(--font-body)" fontSize="22" fill="currentColor" stroke="none" >L(θ) = −Σ log p(tᵢ | t&lt;ᵢ)</text>
        <text x="2" y="64" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="currentColor" stroke="none" >minimizar la sorpresa</text>
        <text x="0" y="110" fontFamily="var(--font-body)" fontSize="22" fill="currentColor" stroke="none" >θ ← θ − η ∇L(θ)</text>
        <text x="178" y="108" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="19" fill="currentColor" stroke="none" >← descenso</text>
        <path d="M0.6 127.3Q150.3 128.5 300.0 127.2" opacity="0.5" />
        </g>
        <g transform="translate(342,4) rotate(0.6)">
        <text x="0" y="36" fontFamily="var(--font-body)" fontSize="22" fill="currentColor" stroke="none" >∂σ/∂z = σ(1 − σ)</text>
        <text x="0" y="66" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="currentColor" stroke="none" >derivada del softmax</text>
        <text x="0" y="116" fontFamily="var(--font-body)" fontSize="22" fill="currentColor" stroke="none" >∫₀ᵗ r(τ) dτ = ctx(t)</text>
        <text x="196" y="114" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="19" fill="currentColor" stroke="none" >contexto acumulado</text>
        </g>
        <g transform="translate(590,10)">
        <path d="M12 118C40 60 74 106 104 44C126 0 148 62 166 28" strokeWidth="2.3" />
        <path d="M12 118L166 118" strokeWidth="1.5" />
        <path d="M12 118C40 60 74 106 104 44C126 0 148 62 166 28L166 118Z" fill="url(#hmi)" stroke="none" opacity="0.55" />
        <path d="M3.3 20.4Q3.5 68.8 5.0 118.4"  />
        <text x="34" y="144" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="currentColor" stroke="none" >∫ área = costo</text>
        </g>
      </>
    ),
  },
  specDriven: {
    viewBox: "0 0 570 130",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="rotate(-0.5 0 0)">
        <text x="2" y="24" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="25" fill="currentColor" stroke="none" >ciclo spec-driven</text><path d="M2 32Q7 35 12 32Q17 29 22 32Q27 35 32 32Q37 29 42 32Q47 35 52 32Q57 29 62 32Q67 35 72 32Q77 29 82 32Q87 35 92 32Q97 29 102 32Q107 35 112 32Q117 29 122 32Q127 35 132 32Q137 29 142 32Q147 35 152 32Q157 29 162 32Q167 35 172 32Q177 29 182 32" strokeWidth="1.5" />
        <path d="M-0.2 46.3Q57.5 43.9 111.5 45.2Q110.1 75.7 111.2 104.3Q54.6 104.2 -0.5 103.6Q-0.2 73.6 -0.2 46.3Z"  /><text x="56" y="84" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="23" fill="currentColor" stroke="none" textAnchor="middle">spec</text><path d="M140.0 46.2Q195.9 46.8 252.4 45.9Q252.1 74.8 252.1 103.6Q197.3 103.7 139.0 103.6Q140.6 75.5 140.0 46.2Z"  /><text x="196" y="84" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="23" fill="currentColor" stroke="none" textAnchor="middle">plan</text><path d="M280.6 46.0Q336.1 44.5 391.3 45.1Q391.0 75.7 391.6 103.2Q337.3 105.1 281.0 104.4Q278.9 75.5 280.6 46.0Z"  /><text x="336" y="84" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="23" fill="currentColor" stroke="none" textAnchor="middle">validar</text><path d="M419.4 46.5Q487.8 46.6 559.3 45.9Q559.0 76.2 560.1 104.6Q491.6 103.3 420.7 103.1Q421.5 75.2 419.4 46.5Z"  /><text x="490" y="84" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="23" fill="currentColor" stroke="none" textAnchor="middle">implementar</text>
        <path d="M116.3 74.6Q124.1 74.5 134.3 74.6"  /><path d="M126.0 69.0L135.0 75.0L126.0 81.0"  /><path d="M257.2 75.3Q265.4 76.1 275.4 74.4"  /><path d="M266.0 69.0L275.0 75.0L266.0 81.0"  /><path d="M396.2 76.0Q405.5 74.2 414.5 75.0"  /><path d="M406.0 69.0L415.0 75.0L406.0 81.0"  />
        <path d="M336 106C338 122 330 128 320 128L214 129C204 129 198 122 199 112" strokeDasharray="7 6" strokeWidth="1.7" /><path d="M193.0 119.0L199.0 110.0L205.0 119.0"  />
        </g>
      </>
    ),
  },
  costoContexto: {
    viewBox: "0 0 360 140",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="rotate(0.7 0 0)">
        <text x="0" y="26" fontFamily="var(--font-body)" fontSize="21" fill="currentColor" stroke="none" >O(n²) · atención</text>
        <text x="0" y="56" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="currentColor" stroke="none" >el contexto se paga</text>
        <path d="M-0.8 73.8Q124.0 74.4 250.5 73.9" opacity="0.6" />
        <path d="M15.9 129.9Q15.7 107.4 15.4 86.6"  /><path d="M15.7 130.6Q127.4 131.1 239.7 129.9"  />
        <path d="M20 126C60 120 100 96 140 62C164 42 186 26 214 14" strokeWidth="2.3" />
        <text x="250" y="120" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="var(--color-acento)" stroke="none" >costo ↑</text>
        </g>
      </>
    ),
  },
  temperatura: {
    viewBox: "0 0 430 170",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="rotate(0.5 0 0)">
        <text x="2" y="22" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="24" fill="currentColor" stroke="none" >muestreo</text><path d="M2 30Q7 33 12 30Q17 27 22 30Q27 33 32 30Q37 27 42 30Q47 33 52 30Q57 27 62 30Q67 33 72 30Q77 27 82 30Q87 33 92 30Q97 27 102 30Q107 33 112 30Q117 27 122 30Q127 33 132 30Q137 27 142 30" strokeWidth="1.4" />
        <path d="M20.0 48.9Q19.8 96.6 19.3 146.8"  /><path d="M21.0 147.0Q160.6 145.4 299.5 147.1"  />
        <path d="M24 142C70 140 92 60 136 58C182 56 202 128 250 140C268 144 282 145 298 145" strokeWidth="2.3" />
        <path d="M24 144C80 143 104 100 140 98C186 96 208 130 254 142C272 146 284 146 298 146" strokeWidth="1.6" strokeDasharray="7 6" />
        <text x="304" y="74" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="currentColor" stroke="none" >T = 0.2</text><text x="304" y="120" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="currentColor" stroke="none" >T = 1.0</text>
        <text x="40" y="168" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="20" fill="var(--color-acento)" stroke="none" >temperatura</text>
        </g>
      </>
    ),
  },
  espacioVectorial: {
    viewBox: "0 0 330 150",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="rotate(-0.6 0 0)">
        <text x="0" y="20" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="24" fill="currentColor" stroke="none" >espacio vectorial</text>
        <path d="M1.6 32.1Q102.2 30.4 201.9 32.7Q202.8 85.6 201.2 140.9Q100.4 138.3 1.6 139.3Q3.0 86.1 1.6 32.1Z"  />
        <circle cx="36" cy="60" r="7" fill="currentColor" stroke="none" /><circle cx="70" cy="96" r="5" fill="currentColor" stroke="none" /><circle cx="104" cy="52" r="6" fill="currentColor" stroke="none" /><circle cx="138" cy="112" r="8" fill="currentColor" stroke="none" /><circle cx="168" cy="74" r="5" fill="currentColor" stroke="none" /><circle cx="54" cy="124" r="4" fill="currentColor" stroke="none" /><circle cx="186" cy="116" r="6" fill="currentColor" stroke="none" />
        <path d="M36 60L70 96" stroke="var(--color-acento)" strokeWidth="1.6" strokeDasharray="5 5" />
        <path d="M104 52L138 112" stroke="var(--color-acento)" strokeWidth="1.6" strokeDasharray="5 5" />
        <text x="210" y="80" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="22" fill="currentColor" stroke="none" >cos θ</text><text x="210" y="110" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="18" fill="currentColor" stroke="none" >similitud</text>
        </g>
      </>
    ),
  },
  agentLoop: {
    viewBox: "0 0 200 104",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="translate(60,4)">
        <path d="M48 8C70 8 86 24 85 46C84 68 68 86 44 85C22 84 8 68 9 46C10 28 22 10 38 8"  />
        <path d="M39.0 2.0L48.0 8.0L39.0 14.0"  /><path d="M79.0 39.0L85.0 48.0L91.0 39.0"  /><path d="M3.0 53.0L9.0 44.0L15.0 53.0"  />
        <text x="46" y="44" fontFamily="var(--font-body)" fontSize="11" fill="currentColor" stroke="none" textAnchor="middle">agent</text><text x="46" y="62" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="15" fill="currentColor" stroke="none" textAnchor="middle">loop</text>
        <text x="90" y="18" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="17" fill="currentColor" stroke="none" >pensar</text><text x="90" y="88" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="17" fill="currentColor" stroke="none" >actuar</text><text x="-58" y="54" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="17" fill="currentColor" stroke="none" >observar</text></g>
      </>
    ),
  },
  entornoAgente: {
    viewBox: "0 0 460 150",
    strokeWidth: "2.1",
    dibujo: (
      <>
        <g transform="rotate(0.6 0 0)">
        <text x="0" y="22" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="25" fill="currentColor" stroke="none" >entorno del agente</text><path d="M0 30Q5 33 10 30Q15 27 20 30Q25 33 30 30Q35 27 40 30Q45 33 50 30Q55 27 60 30Q65 33 70 30Q75 27 80 30Q85 33 90 30Q95 27 100 30Q105 33 110 30Q115 27 120 30Q125 33 130 30Q135 27 140 30Q145 33 150 30Q155 27 160 30Q165 33 170 30Q175 27 180 30Q185 33 190 30" strokeWidth="1.5" />
        <path d="M2.5 43.5Q9.8 45.5 20.2 44.2Q20.3 54.4 20.4 61.7Q11.0 61.6 1.4 61.7Q0.3 53.8 2.5 43.5Z"  /><path d="M6 54L10 59L18 47" stroke="var(--color-acento)" strokeWidth="2.3" /><text x="32" y="59" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="21" fill="currentColor" stroke="none" >reglas</text><path d="M2.4 78.2Q9.9 78.4 19.9 77.9Q18.3 88.0 19.3 96.0Q12.4 96.5 2.7 95.1Q4.3 85.1 2.4 78.2Z"  /><path d="M6 88L10 93L18 81" stroke="var(--color-acento)" strokeWidth="2.3" /><text x="32" y="93" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="21" fill="currentColor" stroke="none" >comandos</text><path d="M3.1 111.4Q9.8 113.8 19.1 113.1Q18.6 120.0 19.0 129.8Q11.4 131.8 2.8 129.8Q1.8 121.4 3.1 111.4Z"  /><path d="M6 122L10 127L18 115" stroke="var(--color-acento)" strokeWidth="2.3" /><text x="32" y="127" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="21" fill="currentColor" stroke="none" >skills</text><path d="M241.8 44.8Q250.5 43.7 260.1 42.9Q260.8 52.2 259.8 63.1Q249.2 64.0 241.9 61.5Q240.4 53.9 241.8 44.8Z"  /><text x="272" y="59" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="21" fill="currentColor" stroke="none" >hooks</text><path d="M241.6 77.3Q250.4 77.6 260.7 79.1Q262.3 89.1 260.8 96.1Q253.1 97.0 242.5 97.0Q240.8 85.8 241.6 77.3Z"  /><text x="272" y="93" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="21" fill="currentColor" stroke="none" >subagentes</text>
        <text x="240" y="140" fontFamily="'Caveat',cursive" fontWeight="600" fontSize="21" fill="var(--color-acento)" stroke="none" >★ context eng.</text>
        </g>
      </>
    ),
  },
  senalRuido: {
    viewBox: "0 0 330 210",
    strokeWidth: "2",
    dibujo: (
      <>
        <text x="4" y="22" fontFamily="var(--font-body)" fontSize="16" fill="currentColor" stroke="none">context window</text>
        <rect x="4" y="36" width="300" height="56" rx="5" />
        <path d="M64 36v56M124 36v56M184 36v56M244 36v56" strokeWidth="1.5" />
        <path d="M4 106h204" />
        <path d="M4 100v12M208 100v12" />
        <text x="56" y="130" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">señal útil</text>
        <path d="M216 106h88" strokeDasharray="6 6" />
        <text x="224" y="130" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">ruido</text>
        <text x="4" y="176" fontFamily="var(--font-body)" fontSize="20" fill="currentColor" stroke="none">ctx ≠ ∞</text>
        <path d="M4 190h120" strokeWidth="1.5" />
      </>
    ),
  },
  specCodigo: {
    viewBox: "0 0 260 150",
    strokeWidth: "2",
    dibujo: (
      <>
        <rect x="4" y="16" width="92" height="44" rx="5" />
        <text x="18" y="44" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">spec</text>
        <path d="M100 38h48" />
        <path d="M138 30l12 8-12 8" />
        <rect x="152" y="16" width="100" height="44" rx="5" />
        <text x="166" y="44" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">código</text>
        <path d="M202 60v28h-152v-28" strokeDasharray="6 6" />
        <text x="58" y="116" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">verify ↻</text>
      </>
    ),
  },
  atencionMatriz: {
    viewBox: "0 0 340 240",
    strokeWidth: "2",
    dibujo: (
      <>
        <text x="4" y="24" fontFamily="var(--font-body)" fontSize="21" fill="currentColor" stroke="none">softmax(QKᵀ/√d)V</text>
        <path d="M4 38h288" strokeWidth="1.5" />
        <rect x="4" y="58" width="144" height="144" rx="4" />
        <path d="M40 58v144M76 58v144M112 58v144M4 94h144M4 130h144M4 166h144" strokeWidth="1" />
        <circle cx="22" cy="76" r="9" fill="currentColor" stroke="none" />
        <circle cx="58" cy="112" r="7" fill="currentColor" stroke="none" />
        <circle cx="94" cy="148" r="11" fill="currentColor" stroke="none" />
        <circle cx="130" cy="184" r="6" fill="currentColor" stroke="none" />
        <circle cx="58" cy="76" r="4" fill="currentColor" stroke="none" />
        <circle cx="94" cy="112" r="5" fill="currentColor" stroke="none" />
        <text x="166" y="104" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">atención</text>
        <path d="M166 118h108" strokeDasharray="5 5" />
        <text x="166" y="152" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">por token</text>
        <text x="4" y="228" fontFamily="var(--font-body)" fontSize="15" fill="currentColor" stroke="none">n·d · O(n²)</text>
      </>
    ),
  },
  varianza: {
    viewBox: "0 0 300 130",
    strokeWidth: "2",
    dibujo: (
      <>
        <path d="M6 96c40-64 78 24 116-40s70 52 110-8" />
        <path d="M6 20v96h278" strokeWidth="1.5" />
        <text x="12" y="126" fontFamily="var(--font-body)" fontSize="14" fill="currentColor" stroke="none">sin marco → varianza</text>
      </>
    ),
  },
};

/** Varía el ritmo de la flotación para que dos croquis nunca vayan sincronizados. */
function ritmo(semilla: string) {
  let h = 0;
  for (const c of semilla) h = (h * 31 + c.charCodeAt(0)) % 997;
  return { duracion: 5.5 + (h % 5) * 0.45, desfase: (h % 7) * 0.22 };
}

export function Croquis({
  nombre,
  className = "",
  style,
}: {
  nombre: CroquisNombre;
  className?: string;
  /** Posición y tamaño: los croquis se ubican sueltos sobre la diapositiva. */
  style?: CSSProperties;
}) {
  const { viewBox, strokeWidth, dibujo } = CROQUIS[nombre];
  const ref = useRef<SVGSVGElement>(null);

  // El trazo se dibuja solo: cada figura necesita su propio largo para que el
  // dash recorra exactamente su recorrido, así que se mide una vez montada.
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const figuras = svg.querySelectorAll<SVGGeometryElement>(
      "path, line, rect, circle, ellipse, polyline, polygon",
    );
    figuras.forEach((figura, i) => {
      figura.style.setProperty("--retraso", `${(i % 14) * 0.055}s`);
      // Los punteados del dibujo original ya usan el dash: no se re-dibujan.
      if (figura.hasAttribute("stroke-dasharray")) return;
      let largo = 0;
      try {
        largo = figura.getTotalLength();
      } catch {
        return;
      }
      if (!largo) return;
      figura.style.setProperty("--largo", String(Math.ceil(largo)));
    });
    svg.querySelectorAll<SVGTextElement>("text").forEach((t, i) => {
      t.style.setProperty("--retraso", `${(i % 14) * 0.055}s`);
    });
  }, [nombre]);

  const { duracion, desfase } = ritmo(nombre);

  return (
    <svg
      ref={ref}
      className={`croquis ${className}`}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={
        {
          "--flota-dur": `${duracion}s`,
          "--flota-desfase": `${desfase}s`,
          ...style,
        } as CSSProperties
      }
    >
      {dibujo}
    </svg>
  );
}
