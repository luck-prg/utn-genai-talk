/**
 * LA PIRÁMIDE DE MADUREZ
 *
 * Ocho niveles. Cada uno es, literalmente, cuánto sistema operativo le
 * construiste al modelo: más contexto y mejores señales de validación abajo,
 * más delegación posible arriba.
 *
 * Los niveles 0 a 3 son los de este bloque; del 4 para arriba los toma la
 * parte de Lucho, así que se dibujan atenuados — se ven, pero no se explican.
 */

export interface Nivel {
  n: number;
  nombre: string;
  /** Con qué parte de la charla se corresponde. */
  bloque?: string;
  mio: boolean;
  /** Empresas en ese nivel, del estudio de 12 empresas. */
  empresas?: number;
}

export const NIVELES: Nivel[] = [
  { n: 7, nombre: "Orquestación de agentes", mio: false },
  { n: 6, nombre: "Evals y validación sistemática", mio: false },
  { n: 5, nombre: "Loop y graph engineering", mio: false },
  { n: 4, nombre: "Second brain y conocimiento externo", mio: false },
  { n: 3, nombre: "Harness propio del proyecto", bloque: "lo que sigue", mio: true, empresas: 1 },
  { n: 2, nombre: "Rules, MCP, skills y assets", bloque: "herramientas", mio: true, empresas: 4 },
  { n: 1, nombre: "Planificación y selección de modelos", bloque: "modelos", mio: true, empresas: 7 },
  { n: 0, nombre: "Uso conversacional", bloque: "vibe-coding", mio: true },
];

export function Piramide({
  paso,
  /** Desde qué paso se muestran los datos del estudio de 12 empresas. */
  datosDesde,
  /** Desde qué paso se marcan los bloques de la charla al costado. */
  bloquesDesde,
}: {
  paso: number;
  datosDesde?: number;
  bloquesDesde?: number;
}) {
  const at = (n?: number) => n !== undefined && paso >= n;

  return (
    <div className="pir">
      {NIVELES.map((nivel, i) => {
        // La base es más ancha: el ancho crece a medida que se baja.
        const ancho = 44 + i * 7;
        return (
          <div className="pir-fila" key={nivel.n}>
            <span className={`pir-bloque ${at(bloquesDesde) && nivel.bloque ? "on" : ""}`}>
              {nivel.bloque ?? ""}
            </span>

            <div
              className={`pir-nivel ${nivel.mio ? "mio" : "ajeno"}`}
              style={{ width: `${ancho}%` }}
            >
              <span className="pir-num">{nivel.n}</span>
              <span className="pir-nombre">{nivel.nombre}</span>
            </div>

            <span className={`pir-dato ${at(datosDesde) && nivel.empresas ? "on" : ""}`}>
              {nivel.empresas ? (
                <>
                  <b>{nivel.empresas}</b> {nivel.empresas === 1 ? "empresa" : "empresas"}
                </>
              ) : (
                ""
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
