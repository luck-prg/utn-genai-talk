import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { Paso } from "@/components/Paso";

export const meta: SlideMeta = {
  title: "No todos los tokens cuestan igual",
  seccion: "BLOQUE 1.2 · CICLO AGÉNTICO",
  steps: 5,
  notes:
    "La tabla de precios, en multiplicadores para que no caduque. PASO 0: el input normal es la unidad de medida, 1x. PASO 1: el output sale CINCO veces más caro por token — pensar y escribir cuesta. PASO 2: escribir al cache sale 25% más caro que el input normal; guardar tiene su precio. PASO 3: pero leerlo sale a la décima parte. Mirá la barra: es la diferencia entre pagar 2 dólares y pagar 20 centavos por el mismo millón de tokens. PASO 4: la cuenta que cierra todo — como escribir cuesta 1,25 y leer 0,1, con UNA sola lectura el cache ya se pagó solo. Los precios concretos son de Sonnet 5 y cambian seguido; los multiplicadores son estables.",
  transition: "fade",
};

/** Multiplicadores sobre el precio de input. Los dólares son de Sonnet 5. */
const TOKENS = [
  { tipo: "Input", detalle: "lo que le mandás", mult: "1x", precio: "$2", ancho: 20, acento: false },
  { tipo: "Output", detalle: "lo que escribe, razonamiento incluido", mult: "5x", precio: "$10", ancho: 100, acento: true },
  { tipo: "Escritura de cache", detalle: "guardar el prefijo", mult: "1,25x", precio: "$2,50", ancho: 25, acento: false },
  { tipo: "Lectura de cache", detalle: "reusar el prefijo", mult: "0,1x", precio: "$0,20", ancho: 2, acento: true },
];

export default function CuantoCuestaUnToken() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 1.2 · CICLO AGÉNTICO">
      <h2 className="display t-md reveal">No todos los tokens cuestan igual</h2>
      <div className="precios mt-m">
        <div className="precio precio-head reveal">
          <span>tipo de token</span>
          <span />
          <span>vs. input</span>
          <span>Sonnet 5 / MTok</span>
        </div>
        {TOKENS.map((t, i) => (
          <Paso n={i} key={t.tipo} className="precio">
            <span className="precio-tipo">
              {t.tipo}
              <small>{t.detalle}</small>
            </span>
            <span className="precio-barra">
              <i className={t.acento ? "acento" : ""} style={{ width: `${t.ancho}%` }} />
            </span>
            <span className="precio-mult">{t.mult}</span>
            <span className="precio-usd">{t.precio}</span>
          </Paso>
        ))}
      </div>
      <Paso n={4} className="arq-remate">
        Escribir al cache cuesta un 25% más, pero leerlo sale a la décima parte:{" "}
        <b>con una sola lectura ya se pagó solo</b>.
      </Paso>
    </SlideFrame>
  );
}
