/**
 * EL ESTUDIO METR — lo que creyeron contra lo que midieron
 *
 * Ensayo controlado aleatorizado, julio 2025: 16 desarrolladores experimentados
 * de open source, 246 tareas reales sobre repos que ellos mismos mantenían.
 *
 * Codificación del gráfico:
 *   · la POSICIÓN respecto del cero lleva el signo (más rápido / más lento);
 *   · el COLOR distingue creencia de medición — azul y rojo, el par diverging
 *     validado contra el fondo papel;
 *   · cada barra tiene su valor escrito al lado, así la identidad nunca depende
 *     sólo del color (se lee igual impreso en gris o con daltonismo).
 */

const MAX = 30; // tope de la escala, en puntos porcentuales

interface Barra {
  etiqueta: string;
  detalle: string;
  valor: number;
  tipo: "creencia" | "medicion";
}

const BARRAS: Barra[] = [
  { etiqueta: "Predijeron", detalle: "antes de empezar", valor: 24, tipo: "creencia" },
  { etiqueta: "Midieron", detalle: "cronómetro en mano", valor: -19, tipo: "medicion" },
  { etiqueta: "Creyeron", detalle: "después de terminar", valor: 20, tipo: "creencia" },
];

function ancho(valor: number): string {
  return `${(Math.abs(valor) / MAX) * 50}%`;
}

export function BarrasMetr({ paso }: { paso: number }) {
  const visible = (i: number) => paso >= i + 1;

  return (
    <div className="mx">
      <div className="mx-escala">
        <span>más lento</span>
        <span className="mx-cero-lbl">0</span>
        <span>más rápido</span>
      </div>

      {BARRAS.map((b, i) => (
        <div className={`mx-fila ${visible(i) ? "on" : ""}`} key={b.etiqueta}>
          <div className="mx-lbl">
            {b.etiqueta}
            <em>{b.detalle}</em>
          </div>

          <div className="mx-track">
            <i className="mx-cero" />
            <div
              className={`mx-barra ${b.tipo}`}
              style={
                b.valor >= 0
                  ? { left: "50%", width: visible(i) ? ancho(b.valor) : 0 }
                  : { right: "50%", width: visible(i) ? ancho(b.valor) : 0 }
              }
            />
            <span
              className={`mx-val ${b.tipo}`}
              style={
                b.valor >= 0
                  ? { left: `calc(50% + ${ancho(b.valor)} + 0.6em)` }
                  : { right: `calc(50% + ${ancho(b.valor)} + 0.6em)` }
              }
            >
              {b.valor > 0 ? "+" : "−"}
              {Math.abs(b.valor)} %
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * La actualización de febrero de 2026: el número se movió, y los intervalos
 * cruzan el cero. Se dibuja la banda, no bordes numéricos inventados — lo que
 * el dato sostiene es que todavía no se puede afirmar el signo.
 */
export function ActualizacionMetr({ visible }: { visible: boolean }) {
  return (
    <div className={`mx-update ${visible ? "on" : ""}`}>
      <div className="mx-update-head">actualización · febrero 2026</div>
      <div className="mx-update-body">
        <div className="mx-update-item">
          <b>+18 %</b> los que repitieron
        </div>
        <div className="mx-update-item">
          <b>−4 %</b> los recién reclutados
        </div>
        <div className="mx-update-item acc">
          ambos intervalos <b>cruzan el cero</b>
        </div>
      </div>
    </div>
  );
}
