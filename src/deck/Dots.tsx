import { useDeck } from "./DeckProvider";

/** Navegación lateral: un punto por diapositiva, clic para ir directo. */
export function Dots() {
  const { slides, index, goTo } = useDeck();

  return (
    <nav className="dots" aria-label="Navegación">
      {slides.map((slide, i) => (
        <button
          key={slide.id}
          type="button"
          className={`dot ${i === index ? "active" : ""}`}
          aria-label={`Diapositiva ${i + 1}: ${slide.title}`}
          onClick={() => goTo(i)}
        />
      ))}
    </nav>
  );
}
