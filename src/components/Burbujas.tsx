import type { CSSProperties } from "react";
import { useIsThumbnail } from "@/deck/StageContext";

/**
 * Burbujas que suben despacio en las divisorias. Toman su color del mismo
 * degradado que "IA Generativa" en la portada: según dónde nace cada una, sale
 * azul, verde o naranja, así el conjunto reconstruye el degradado del folleto.
 */
const PARADAS: [number, [number, number, number]][] = [
  [0, [47, 109, 240]], // #2f6df0
  [0.46, [15, 156, 125]], // #0f9c7d
  [1, [232, 72, 43]], // #E8482B
];

function colorEn(t: number) {
  const i = t <= PARADAS[1][0] ? 0 : 1;
  const [desde, c1] = PARADAS[i];
  const [hasta, c2] = PARADAS[i + 1];
  const u = (t - desde) / (hasta - desde);
  const [r, g, b] = c1.map((v, k) => Math.round(v + (c2[k] - v) * u));
  return `rgb(${r} ${g} ${b})`;
}

/** Secuencia estable: las burbujas no se reacomodan en cada render. */
function serie(n: number, semilla: number) {
  const out: number[] = [];
  let x = semilla;
  for (let i = 0; i < n; i++) {
    x = (x * 1103515245 + 12345) % 2147483648;
    out.push(x / 2147483648);
  }
  return out;
}

const CANTIDAD = 14;
const AZAR = serie(CANTIDAD * 4, 7);

const BURBUJAS = Array.from({ length: CANTIDAD }, (_, i) => {
  const izquierda = (i + 0.5) / CANTIDAD + (AZAR[i * 4] - 0.5) * 0.05;
  return {
    izquierda,
    color: colorEn(izquierda),
    tam: 6 + AZAR[i * 4 + 1] * 11,
    // Lentas: entre 17 y 30 s de recorrido, para que no compitan con el texto.
    duracion: 17 + AZAR[i * 4 + 2] * 13,
    deriva: 8 + AZAR[i * 4 + 3] * 18,
  };
});

export function Burbujas() {
  // En la vista de resumen se dibujan 100 miniaturas: ahí no hace falta animar.
  if (useIsThumbnail()) return null;

  return (
    <div className="burbujas" aria-hidden="true">
      {BURBUJAS.map((b, i) => (
        <span
          className="burbuja"
          key={i}
          style={
            {
              left: `${b.izquierda * 100}%`,
              "--tam": `${b.tam}px`,
              "--dur": `${b.duracion}s`,
              "--deriva": `${b.deriva}px`,
              "--color": b.color,
              // Desfase negativo: al entrar a la divisoria ya hay burbujas
              // repartidas a distintas alturas, no todas naciendo del piso.
              "--desfase": `-${(b.duracion / CANTIDAD) * i}s`,
            } as CSSProperties
          }
        >
          <span className="burbuja-cuerpo" />
        </span>
      ))}
    </div>
  );
}
