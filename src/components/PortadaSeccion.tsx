import { SlideFrame } from "@/components/SlideFrame";

/**
 * Portada de sección: el corte entre bloques de la charla. Número, kicker,
 * título grande, una línea de promesa y los temas que vienen.
 *
 * El `numero` es el de la sección en el apunte, no el del mazo final: sirve
 * mientras las tres partes están separadas. Al integrar hay que renumerarlo
 * según el orden definitivo, o sacarlo (borrar el prop y el `.pk-num`).
 */
export function PortadaSeccion({
  meta,
  numero,
  kicker,
  titulo,
  promesa,
  temas,
}: {
  /** Rótulo del header, ej. "SECCIÓN". */
  meta: string;
  /** Número de sección del apunte, ej. "06". Provisorio. */
  numero: string;
  /** Línea chica de arriba, ej. "Fundamentos". */
  kicker: string;
  /** Título grande de la sección. */
  titulo: React.ReactNode;
  /** Una línea: qué se lleva la audiencia de este bloque. */
  promesa: React.ReactNode;
  /** Los temas que vienen, como señalización. */
  temas: string[];
}) {
  return (
    <SlideFrame meta={meta} center>
      <p className="portada-kicker reveal">
        <span className="pk-num">{numero}</span>
        <span>{kicker}</span>
      </p>
      <h2 className="display portada-title reveal mt-m">{titulo}</h2>
      <p className="sub portada-sub reveal mt-m">{promesa}</p>
      <div className="chips portada-beats reveal mt-l">
        {temas.map((t) => (
          <span className="chip" key={t}>
            {t}
          </span>
        ))}
      </div>
    </SlideFrame>
  );
}
