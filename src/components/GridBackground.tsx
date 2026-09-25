/** Grilla de fondo animada, fija detrás de la portada y las divisorias de bloque. */
export function GridBackground({ dark = false }: { dark?: boolean }) {
  return <div className={`grid-bg${dark ? " grid-bg--dark" : ""}`} aria-hidden="true" />;
}
