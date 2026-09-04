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

interface DeckState {
  slides: Slide[];
  current: Slide | undefined;
  index: number;
  /** 1 = avanzando, -1 = retrocediendo. Lo usan las transiciones. */
  direction: number;
  overview: boolean;
  /** Pantalla en negro: para que la audiencia te mire a vos y no al proyector. */
  blackout: boolean;
  setBlackout: (on: boolean) => void;
  toggleBlackout: () => void;
  goTo: (index: number, direction?: number) => void;
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
  const [overview, setOverview] = useState(false);
  const [blackout, setBlackout] = useState(false);

  const goTo = useCallback((target: number, dir?: number) => {
    setIndex((prev) => {
      const next = clampIndex(target);
      setDirection(dir ?? (next >= prev ? 1 : -1));
      return next;
    });
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

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
    [index, direction, overview, blackout, toggleBlackout, goTo, next, prev, toggleOverview],
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
}

export function useDeck(): DeckState {
  const ctx = useContext(DeckContext);
  if (!ctx) throw new Error("useDeck debe usarse dentro de <DeckProvider>");
  return ctx;
}
