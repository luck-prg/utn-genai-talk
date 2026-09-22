import type { ReactNode } from "react";

/**
 * Bloque de código con la barra de ventana del sistema de diseño. El contenido
 * va literal: se escribe ya recortado a las líneas que importan, porque en un
 * aula sólo se lee lo que entra grande.
 */
export function Codigo({
  archivo,
  children,
  className = "",
}: {
  /** Ruta que se muestra en la barra, ej. "respuesta.json". */
  archivo: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`code-panel ${className}`}>
      <div className="code-bar">
        <span className="dot d1" />
        <span className="dot d2" />
        <span className="dot d3" />
        <span className="path">{archivo}</span>
      </div>
      <pre className="code">{children}</pre>
    </div>
  );
}

/** Dos paneles lado a lado, para comparar antes y después. */
export function CodigoPar({ children }: { children: ReactNode }) {
  return <div className="code-par">{children}</div>;
}
