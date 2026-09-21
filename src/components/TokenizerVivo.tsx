import { useEffect, useMemo, useRef, useState } from "react";

/**
 * TOKENIZACIÓN REAL, EN EL NAVEGADOR
 *
 * Usa el vocabulario `o200k_base` (el de los modelos actuales de OpenAI) a
 * través de `js-tiktoken`. No es una imitación: los fragmentos y los IDs que
 * se ven en pantalla son los que recibe el modelo.
 *
 * El diccionario pesa varios MB, así que se carga bajo demanda: recién cuando
 * se monta una diapositiva que tokeniza. Mientras tanto se muestra el texto
 * plano, de modo que la diapositiva nunca queda en blanco en el proyector.
 */

interface Encoder {
  encode: (texto: string) => number[];
  decode: (tokens: number[]) => string;
}

// Una sola instancia para todo el mazo: el diccionario se arma una vez.
let cacheado: Encoder | null = null;
let cargando: Promise<Encoder> | null = null;

function cargar(): Promise<Encoder> {
  cargando ??= (async () => {
    const [{ Tiktoken }, ranks] = await Promise.all([
      import("js-tiktoken/lite"),
      import("js-tiktoken/ranks/o200k_base"),
    ]);
    cacheado = new Tiktoken(ranks.default);
    return cacheado;
  })();
  return cargando;
}

export function useTokenizer(): Encoder | null {
  const [encoder, setEncoder] = useState<Encoder | null>(cacheado);

  useEffect(() => {
    if (cacheado) {
      setEncoder(cacheado);
      return;
    }
    let vigente = true;
    void cargar().then((e) => {
      if (vigente) setEncoder(e);
    });
    return () => {
      vigente = false;
    };
  }, []);

  return encoder;
}

export interface Token {
  id: number;
  texto: string;
}

/** Tokeniza un texto y devuelve cada fragmento con su ID de vocabulario. */
export function useTokens(texto: string): Token[] | null {
  const encoder = useTokenizer();
  return useMemo(() => {
    if (!encoder) return null;
    return encoder.encode(texto).map((id) => ({ id, texto: encoder.decode([id]) }));
  }, [encoder, texto]);
}

/** Cuántos tokens tiene un texto. `null` mientras carga el diccionario. */
export function useConteo(texto: string): number | null {
  const encoder = useTokenizer();
  return useMemo(() => (encoder ? encoder.encode(texto).length : null), [encoder, texto]);
}

/**
 * La tira de fragmentos. Según el paso muestra sólo el texto, el texto con su
 * ID debajo, o únicamente los IDs — que es lo que realmente entra al modelo.
 */
export function TiraDeTokens({
  texto,
  modo,
  className = "",
}: {
  texto: string;
  /** `texto` → fragmentos · `ids` → fragmentos + ID · `solo-ids` → sólo números. */
  modo: "texto" | "ids" | "solo-ids";
  className?: string;
}) {
  const tokens = useTokens(texto);

  if (!tokens) {
    return <div className={`tokz-strip ${className}`}>{texto}</div>;
  }

  const clase = modo === "texto" ? "" : modo === "ids" ? "con-ids" : "con-ids solo-ids";

  return (
    <div className={`tokz-strip ${clase} ${className}`}>
      {tokens.map((t, i) => (
        <span className={`tokz-cell tok-${"abcde"[i % 5]}`} key={`${t.id}-${i}`}>
          <span className="t-txt">{t.texto}</span>
          <span className="t-id">{t.id}</span>
        </span>
      ))}
    </div>
  );
}

/**
 * Caja de texto real: se puede tipear una frase que tire el público y ver
 * cómo se parte. `useDeckControls` ignora los eventos de teclado que nacen
 * en un input, así que escribir no mueve la presentación.
 */
export function EntradaDeTexto({
  valor,
  onChange,
  placeholder = "Escribí una frase y mirá cómo se parte…",
}: {
  valor: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <input
      ref={ref}
      className="tokz-input"
      value={valor}
      placeholder={placeholder}
      spellCheck={false}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Texto a tokenizar"
    />
  );
}
