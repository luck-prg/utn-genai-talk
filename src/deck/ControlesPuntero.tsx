import { useDeck } from "./DeckProvider";

/**
 * Controles para manejar la presentación con el puntero.
 *
 * Resuelve el caso del reloj en modo mouse (Galaxy Watch y similares): ahí
 * el reloj deja de mandar teclas y solo mueve el cursor y hace clic izquierdo.
 *
 *   · Un clic en cualquier parte de la diapositiva avanza (como PowerPoint).
 *   · La franja izquierda retrocede.
 *   · Clic derecho también retrocede.
 *
 * Las zonas son invisibles a propósito: el teclado sigue siendo el camino
 * principal durante la charla.
 */
export function ControlesPuntero() {
  const { next, prev, overview, blackout } = useDeck();

  if (overview || blackout) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Diapositiva siguiente"
        onClick={next}
        onContextMenu={(event) => {
          event.preventDefault();
          prev();
        }}
        className="absolute inset-0 z-20 cursor-default opacity-0"
      />

      <button
        type="button"
        aria-label="Diapositiva anterior"
        onClick={prev}
        className="absolute inset-y-0 left-0 z-30 w-[12%] cursor-default opacity-0"
      />

      <button
        type="button"
        aria-label="Diapositiva siguiente"
        onClick={next}
        className="absolute inset-y-0 right-0 z-30 w-[12%] cursor-default opacity-0"
      />
    </>
  );
}
