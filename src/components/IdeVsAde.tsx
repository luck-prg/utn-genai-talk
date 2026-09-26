/**
 * DE TIPEAR A REVISAR
 *
 * Izquierda: el IDE. Un humano, un archivo, un cursor, y todo lo que el IDE
 * hace bien y el agente no reemplaza: debuggear, refactorizar, navegar.
 * Derecha: el ADE. Varias ramas avanzando en paralelo, y la persona aparece
 * en una sola columna — la de revisión.
 *
 * No compiten. El mensaje es que cambia dónde está tu atención, no que una
 * herramienta reemplace a la otra.
 */

const RAMAS = ["feat/auth", "fix/n+1", "chore/deps"];

/** Lo que el IDE sigue haciendo mejor que nadie. */
const CAPACIDADES = ["debug", "refactor", "navegación", "autocompletado"];

export function IdeVsAde({ paso }: { paso: number }) {
  // Cuántas etapas encendidas por rama. Arrancan desfasadas para que se vea
  // que avanzan en paralelo pero no al mismo ritmo.
  const avance = (i: number) =>
    paso < 2 ? 0 : Math.max(0, Math.min(3, paso - 1 + (i === 1 ? 0 : i === 0 ? 1 : -1)));

  return (
    <div className="iva">
      <div className={`iva-col ${paso >= 1 ? "activa" : ""}`}>
        <div className="iva-head">
          <span className="iva-tag">IDE</span>
          <span className="iva-sub">el input es código</span>
        </div>

        <div className="iva-editor">
          <div className="iva-file">auth.service.ts</div>
          <div className="iva-linea">
            <span className="iva-ln">42</span>
            <span className="iva-code">const token = await sign(</span>
            <span className={`iva-cursor ${paso >= 1 ? "on" : ""}`} />
          </div>
          <div className="iva-linea vacia">
            <span className="iva-ln">43</span>
          </div>
        </div>

        <div className={`iva-caps ${paso >= 1 ? "on" : ""}`}>
          {CAPACIDADES.map((c) => (
            <span className="iva-cap" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className={`iva-col ${paso >= 2 ? "activa" : ""}`}>
        <div className="iva-head">
          <span className="iva-tag">ADE</span>
          <span className="iva-sub">el input es contexto</span>
        </div>

        <div className="iva-kanban">
          <div className="iva-cols">
            <span>plan</span>
            <span>implementa</span>
            <span className={paso >= 3 ? "acc" : ""}>review</span>
          </div>

          {RAMAS.map((rama, i) => (
            <div className="iva-rama" key={rama}>
              <span className="iva-rama-n">{rama}</span>
              <div className="iva-track">
                {[0, 1, 2].map((j) => (
                  <i
                    key={j}
                    className={`iva-pill ${j < avance(i) ? "on" : ""} ${j === 2 ? "fin" : ""}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* En el flujo, no posicionado encima: no puede pisar nada. */}
        <div className={`iva-vos ${paso >= 3 ? "on" : ""}`}>
          <span>supervisión humana</span>
        </div>
      </div>
    </div>
  );
}
