import { useEffect, useState } from "react";

/**
 * LAS DOS FASES DE UNA INFERENCIA
 *
 * Izquierda (prefill): el prompt entero se conoce de entrada, así que todos
 * sus tokens se procesan de una sola vez. Matriz por matriz, satura la GPU.
 * Derecha (decode): cada token de salida depende de todos los anteriores, así
 * que salen de a uno. Matriz por vector, y lo que domina no es calcular sino
 * mover datos desde memoria.
 *
 * Abajo, el KV cache: arranca del tamaño del prompt y suma un ladrillo por
 * cada token generado. Esa es la razón física de que el output sea más caro
 * que el input — no es política de precios.
 */

const PROMPT = ["Resu", "mí", " este", " archivo", " en", " tres", " líneas", "."];
const SALIDA = ["El", " módulo", " expone", " tres", " funciones", " puras", ".", ""];

/** Cada cuánto sale un token en la animación de decode. */
const RITMO_MS = 420;

export function PrefillDecode({ paso }: { paso: number }) {
  const completo = !Number.isFinite(paso);
  const [generados, setGenerados] = useState(0);

  // El decode se dibuja token por token, al ritmo de un metrónomo. En las
  // miniaturas de la vista de resumen no hay animación: se dibuja completo.
  useEffect(() => {
    if (completo) {
      setGenerados(SALIDA.length);
      return;
    }
    if (paso < 2) {
      setGenerados(0);
      return;
    }
    const id = setInterval(() => {
      setGenerados((n) => (n >= SALIDA.length ? n : n + 1));
    }, RITMO_MS);
    return () => clearInterval(id);
  }, [paso, completo]);

  const ladrillos = PROMPT.length + generados;
  const maxLadrillos = PROMPT.length + SALIDA.length;

  return (
    <div className="pd">
      <div className={`pd-col ${paso >= 1 ? "activa" : ""}`}>
        <div className="pd-head">
          <span className="pd-fase">prefill</span>
          <span className="pd-sub">la entrada</span>
        </div>

        <div className="pd-toks">
          {PROMPT.map((t, i) => (
            <span className={`pd-tok ${paso >= 1 ? "on" : ""}`} key={i}>
              {t}
            </span>
          ))}
        </div>

        <div className={`pd-cartel ${paso >= 1 ? "on" : ""}`}>en paralelo · 1 pase</div>
      </div>

      <div className={`pd-col ${paso >= 2 ? "activa" : ""}`}>
        <div className="pd-head">
          <span className="pd-fase">decode</span>
          <span className="pd-sub">la salida</span>
        </div>

        <div className="pd-toks">
          {SALIDA.map((t, i) => (
            <span className={`pd-tok ${i < generados ? "on" : ""}`} key={i}>
              {t || "▌"}
            </span>
          ))}
        </div>

        <div className={`pd-cartel acc ${paso >= 2 ? "on" : ""}`}>
          secuencial · {Math.max(generados, 0)} pasos
        </div>
      </div>

      <div className={`pd-kv ${paso >= 3 ? "on" : ""}`}>
        <div className="kv-lbl">
          KV cache <span>se inicializa con el prompt y crece un elemento por token generado</span>
        </div>
        <div className="kv-barra">
          {Array.from({ length: maxLadrillos }, (_, i) => (
            <i
              className={`kv-brick ${i < ladrillos ? "on" : ""} ${i < PROMPT.length ? "base" : ""}`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
