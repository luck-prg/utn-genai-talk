import type { ReactNode } from "react";
import { useDeck } from "@/deck/DeckProvider";
import { lastSlideNumber } from "@/deck/registry";
import { useCurrentSlide } from "@/deck/StageContext";
import { UtnLogo } from "./UtnLogo";

const FOOT_NOTE = "diseñando-el-futuro-con-genai";

/**
 * Layout recurrente de cada diapositiva: header (marca + rótulo de bloque),
 * cuerpo y pie (numeración, abre la vista de resumen al hacer clic).
 * Se usa como raíz de cada archivo en `src/slides/`.
 */
export function SlideFrame({
  meta,
  children,
  center = false,
  footer = true,
  after,
}: {
  /** Texto del rótulo superior derecho, ej. "BLOQUE 2 · CONTEXT ENG." */
  meta: string;
  children: ReactNode;
  /** Centra verticalmente el contenido del cuerpo. */
  center?: boolean;
  /** Oculta el pie de página (numeración). Se usa en la portada y el cierre. */
  footer?: boolean;
  /** Contenido extra entre el cuerpo y el pie (ej. una barra de cierre). */
  after?: ReactNode;
}) {
  const { toggleOverview } = useDeck();
  const current = useCurrentSlide();

  return (
    <>
      <header className="s-head">
        <div className="brand">
          <UtnLogo className="brandmark" />
          <span className="b-txt">
            <b>UTN</b>
            <span>FRBA</span>
          </span>
        </div>
        <div className="head-meta">{meta}</div>
      </header>

      <div className={`s-body ${center ? "center" : ""}`}>{children}</div>

      {after}

      {footer && (
        <footer className="s-foot">
          <span>{FOOT_NOTE}</span>
          <button type="button" className="f-num" onClick={toggleOverview} title="Ver todas las diapositivas (O)">
            {current?.numberLabel} / {lastSlideNumber}
          </button>
        </footer>
      )}
    </>
  );
}
