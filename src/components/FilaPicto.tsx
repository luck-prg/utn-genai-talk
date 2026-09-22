import { Picto, type PictoName } from "./Picto";

/**
 * Pictograma + una frase corta, para listas que tienen que leerse desde el
 * fondo del aula: tipografía display, una línea por ítem y nada de cuerpo de
 * texto debajo. Es el patrón que ya usaban varias slides del mazo con el
 * bloque repetido a mano; acá vive una sola vez.
 */
export function FilaPicto({ icon, text }: { icon: PictoName; text: string }) {
  return (
    <div style={{ display: "flex", gap: "clamp(10px, 1vw, 20px)", alignItems: "center" }}>
      <div style={{ color: "var(--color-fg)" }}>
        <Picto name={icon} />
      </div>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--fs-sub)",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
          color: "var(--color-fg)",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export function FilaPictoLista({ items }: { items: { icon: PictoName; text: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.3vh, 22px)" }}>
      {items.map((item) => (
        <FilaPicto key={item.text} {...item} />
      ))}
    </div>
  );
}
