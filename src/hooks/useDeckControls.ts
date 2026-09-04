import { useEffect } from "react";
import { useDeck } from "@/deck/DeckProvider";

/**
 * Controles del presentador.
 *
 * Funcionan igual con el teclado, con un clicker Bluetooth y con el reloj
 * (Samsung PPT Controller y similares): esos controles son teclados que
 * mandan las mismas teclas que usa PowerPoint.
 *
 *   →  espacio, PageDown, N     avanzar
 *   ←  PageUp, P                retroceder
 *   Home / End                  primera / última
 *   O                           vista de resumen
 *   F  ·  F5                    pantalla completa
 *   B  ·  punto                 pantalla en negro
 *   Esc                         salir de lo que esté abierto
 *
 * F5 es la tecla con la que estos controles "inician la presentación", y en
 * un navegador recargaría la página. Se intercepta para que ponga pantalla
 * completa en lugar de recargar.
 */
export function useDeckControls() {
  const {
    next,
    prev,
    goTo,
    slides,
    toggleOverview,
    overview,
    setOverview,
    blackout,
    setBlackout,
    toggleBlackout,
  } = useDeck();

  useEffect(() => {
    function pantallaCompleta() {
      if (document.fullscreenElement) void document.exitFullscreen();
      else void document.documentElement.requestFullscreen().catch(() => {});
    }

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable || ["INPUT", "TEXTAREA"].includes(target?.tagName ?? "")) return;

      // Con la pantalla en negro, cualquier tecla de avance la levanta sin
      // mover la presentación: evita avanzar a ciegas mientras hablás.
      const teclasDeAvance = ["ArrowRight", "ArrowLeft", "PageDown", "PageUp", " ", "n", "p"];
      if (blackout && teclasDeAvance.includes(event.key)) {
        event.preventDefault();
        setBlackout(false);
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
        case "n":
          event.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
        case "p":
          event.preventDefault();
          prev();
          break;
        case "Home":
          event.preventDefault();
          goTo(0, -1);
          break;
        case "End":
          event.preventDefault();
          goTo(slides.length - 1, 1);
          break;
        case "o":
        case "O":
          event.preventDefault();
          toggleOverview();
          break;
        case "f":
        case "F":
          event.preventDefault();
          pantallaCompleta();
          break;
        case "F5":
          event.preventDefault();
          if (!document.fullscreenElement) pantallaCompleta();
          break;
        case "b":
        case "B":
        case ".":
          event.preventDefault();
          toggleBlackout();
          break;
        case "Escape":
          if (blackout) setBlackout(false);
          else if (overview) setOverview(false);
          break;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    next,
    prev,
    goTo,
    slides.length,
    toggleOverview,
    overview,
    setOverview,
    blackout,
    setBlackout,
    toggleBlackout,
  ]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    function onTouchStart(event: TouchEvent) {
      startX = event.changedTouches[0].clientX;
      startY = event.changedTouches[0].clientY;
    }

    function onTouchEnd(event: TouchEvent) {
      const dx = event.changedTouches[0].clientX - startX;
      const dy = event.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) next();
      else prev();
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);
}
