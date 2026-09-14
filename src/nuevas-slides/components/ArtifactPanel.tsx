/**
 * Panel con aspecto de archivo abierto: muestra cómo va creciendo el artefacto
 * de SDD a lo largo de las etapas (constitution, spec, plan, tasks) y la salida
 * de los tests al final.
 *
 * El contenido llega como HTML porque `.code` usa `white-space: pre` y hace
 * falta control exacto de saltos de línea y color. Es texto escrito a mano en
 * cada diapositiva, nunca contenido externo.
 */
export function ArtifactPanel({ path, html }: { path: string; html: string }) {
  return (
    <div className="code-panel mt-s reveal">
      <div className="code-bar">
        <span className="dot d1" />
        <span className="dot d2" />
        <span className="dot d3" />
        <span className="path">{path}</span>
      </div>
      {/* Tipografía igual que `SpecKitTerminal`, pero SIN su alto fijo: esa caja
          existe porque la terminal se escribe sola y necesita una medida estable.
          Acá el contenido es estático, así que el panel mide lo que mide y no
          desperdicia alto en ventanas más bajas que 16:9. */}
      <pre
        className="code"
        style={{ overflow: "hidden", lineHeight: 1.45, fontSize: "clamp(11px,1.05vw,21px)" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
