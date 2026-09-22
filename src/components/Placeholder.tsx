import type { ReactNode } from "react";

/**
 * Caja de contenido pendiente. Marca los ítems del plan de la charla que
 * todavía no tienen slide real, sea porque falta escribirlos o porque su
 * contenido vive sin integrar en otra rama.
 */
export function Placeholder({
  item,
  title,
  nota,
}: {
  /** Numeración del plan, ej. "1.1.1". */
  item: string;
  /** Tema de esa slide, ej. "LLM, Tokens". */
  title: string;
  /** Aclaración extra, ej. de qué rama traer el contenido real. */
  nota?: ReactNode;
}) {
  return (
    <div className="placeholder-box reveal">
      <p className="placeholder-tag">{item}</p>
      <h2 className="display placeholder-flag">[falta agregar]</h2>
      <p className="body placeholder-meta">{title}</p>
      {nota && <p className="body placeholder-nota">{nota}</p>}
    </div>
  );
}
