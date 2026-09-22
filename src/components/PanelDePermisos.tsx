/**
 * EL PANEL DE SWITCHES
 *
 * El catálogo de herramientas como una botonera. Se van encendiendo de a una
 * y al costado suben dos medidores: capacidad y superficie de riesgo.
 *
 * El punto visual es que suben JUNTOS. Nunca uno solo. Cada herramienta que
 * agregás mueve además una de las patas de la trifecta, así que la pregunta
 * no es "¿esto suma?" sino "¿suma más de lo que expone?".
 */

interface Herramienta {
  nombre: string;
  detalle: string;
  /** Cuánto suma a cada medidor, de 0 a 10. */
  capacidad: number;
  riesgo: number;
  /** Qué pata de la trifecta toca. */
  pata?: string;
}

const HERRAMIENTAS: Herramienta[] = [
  { nombre: "rg · fd · tree", detalle: "leer el repo", capacidad: 7, riesgo: 1 },
  { nombre: "tests · lint", detalle: "validar local", capacidad: 8, riesgo: 1 },
  { nombre: "gh (lectura)", detalle: "issues y PRs", capacidad: 5, riesgo: 4, pata: "contenido no confiable" },
  { nombre: "fetch web", detalle: "leer docs online", capacidad: 4, riesgo: 6, pata: "contenido no confiable" },
  { nombre: "observabilidad prod", detalle: "logs y trazas reales", capacidad: 6, riesgo: 8, pata: "datos privados" },
  { nombre: "deploy · cloud CLI", detalle: "escribir en producción", capacidad: 5, riesgo: 10, pata: "salida al exterior" },
];

/** Suma acumulada hasta la herramienta `n`, normalizada a porcentaje. */
function medidor(n: number, campo: "capacidad" | "riesgo"): number {
  const total = HERRAMIENTAS.reduce((s, h) => s + h[campo], 0);
  const suma = HERRAMIENTAS.slice(0, n).reduce((s, h) => s + h[campo], 0);
  return Math.round((suma / total) * 100);
}

export function PanelDePermisos({ paso }: { paso: number }) {
  // Una herramienta por paso. En las miniaturas se dibujan todas encendidas.
  const encendidas = Number.isFinite(paso)
    ? Math.max(0, Math.min(HERRAMIENTAS.length, paso))
    : HERRAMIENTAS.length;

  return (
    <div className="pp">
      <div className="pp-lista">
        {HERRAMIENTAS.map((h, i) => {
          const on = i < encendidas;
          return (
            <div className={`pp-fila ${on ? "on" : ""}`} key={h.nombre}>
              <span className={`pp-switch ${on ? "on" : ""}`} aria-hidden="true">
                <i />
              </span>
              <span className="pp-nombre">
                {h.nombre}
              </span>
              <span className={`pp-pata ${on && h.pata ? "on" : ""}`}>{h.pata ?? ""}</span>
            </div>
          );
        })}
      </div>

      <div className="pp-medidores">
        <div className="pp-med">
          <div className="pp-med-lbl">capacidad</div>
          <div className="pp-med-barra">
            <i style={{ height: `${medidor(encendidas, "capacidad")}%` }} />
          </div>
          <div className="pp-med-num">{medidor(encendidas, "capacidad")}%</div>
        </div>
        <div className="pp-med riesgo">
          <div className="pp-med-lbl">superficie de riesgo</div>
          <div className="pp-med-barra">
            <i style={{ height: `${medidor(encendidas, "riesgo")}%` }} />
          </div>
          <div className="pp-med-num">{medidor(encendidas, "riesgo")}%</div>
        </div>
      </div>
    </div>
  );
}
