import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { clampIndex, findSlideIndex, lastSlideNumber, slides } from "./registry";
import type { Slide } from "./types";

/** Dónde arranca el paso interno al entrar a una diapositiva. */
type Entrada = "primero" | "ultimo";

interface DeckState {
  slides: Slide[];
  current: Slide | undefined;
  index: number;
  /** 1 = avanzando, -1 = retrocediendo. Lo usan las transiciones. */
  direction: number;
  /** Paso interno de la diapositiva actual, 0-indexado. */
  step: number;
  /** Cuántos pasos declara la diapositiva actual (1 = sin pasos). */
  steps: number;
  goToStep: (step: number) => void;
  overview: boolean;
  /** Pantalla en negro: para que la audiencia te mire a vos y no al proyector. */
  blackout: boolean;
  setBlackout: (on: boolean) => void;
  toggleBlackout: () => void;
  goTo: (index: number, direction?: number, entrada?: Entrada) => void;
  next: () => void;
  prev: () => void;
  toggleOverview: () => void;
  setOverview: (open: boolean) => void;
}

const DeckContext = createContext<DeckState | null>(null);

function indexFromHash(): number {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash ? findSlideIndex(decodeURIComponent(hash)) : 0;
}

export function DeckProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(indexFromHash);
  const [direction, setDirection] = useState(1);
  const [step, setStep] = useState(0);
  const [overview, setOverview] = useState(false);
  const [blackout, setBlackout] = useState(false);

  const steps = slides[index]?.steps ?? 1;

  const goTo = useCallback((target: number, dir?: number, entrada: Entrada = "primero") => {
    const next = clampIndex(target);
    setIndex((prev) => {
      setDirection(dir ?? (next >= prev ? 1 : -1));
      return next;
    });
    // Al retroceder se entra por el último paso: la diapositiva anterior
    // aparece completa, como la dejamos, y no vuelve a armarse de cero.
    setStep(entrada === "ultimo" ? Math.max((slides[next]?.steps ?? 1) - 1, 0) : 0);
  }, []);

  const goToStep = useCallback(
    (target: number) => setStep(Math.min(Math.max(target, 0), Math.max(steps - 1, 0))),
    [steps],
  );

  /**
   * Avanzar consume primero los pasos internos de la diapositiva y recién
   * después pasa a la siguiente. Para el clicker y el teclado es la misma
   * tecla de siempre: la diapositiva decide si le queda algo por mostrar.
   */
  const next = useCallback(() => {
    if (step < steps - 1) setStep((s) => s + 1);
    // En la última diapositiva no hay a dónde ir: si igual se llamara a goTo,
    // el índice quedaría clampeado y los pasos se reiniciarían solos.
    else if (index < slides.length - 1) goTo(index + 1, 1);
  }, [step, steps, goTo, index]);

  const prev = useCallback(() => {
    if (step > 0) setStep((s) => s - 1);
    else if (index > 0) goTo(index - 1, -1, "ultimo");
  }, [step, goTo, index]);

  const toggleOverview = useCallback(() => setOverview((o) => !o), []);
  const toggleBlackout = useCallback(() => setBlackout((b) => !b), []);

  // Deep link: la URL siempre refleja la diapositiva actual (#/agenda)
  useEffect(() => {
    const slug = slides[index]?.id;
    if (!slug) return;
    const target = `#/${slug}`;
    if (window.location.hash !== target) {
      window.history.replaceState(null, "", target);
    }
    const current = slides[index];
    document.title = `${current?.numberLabel ?? "00"}/${lastSlideNumber} · ${current?.title ?? "GenAI Talk"}`;
  }, [index]);

  // Navegación con el botón atrás/adelante del browser o con un link pegado
  useEffect(() => {
    const onHashChange = () => goTo(indexFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [goTo]);

  const value = useMemo<DeckState>(
    () => ({
      slides,
      current: slides[index],
      index,
      direction,
      step,
      steps,
      goToStep,
      overview,
      blackout,
      setBlackout,
      toggleBlackout,
      goTo,
      next,
      prev,
      toggleOverview,
      setOverview,
    }),
    [
      index,
      direction,
      step,
      steps,
      goToStep,
      overview,
      blackout,
      toggleBlackout,
      goTo,
      next,
      prev,
      toggleOverview,
    ],
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}

export function useDeck(): DeckState {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck debe usarse dentro de <DeckProvider>");
  return ctx;
}
