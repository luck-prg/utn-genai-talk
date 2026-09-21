import type { ReactNode } from "react";
import { useDeck } from "@/deck/DeckProvider";
import { lastSlideNumber } from "@/deck/registry";
import { useCurrentSlide, useStep } from "@/deck/StageContext";
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
  header = true,
  footer = true,
  after,
  bodyClass = "",
}: {
  /** Texto del rótulo superior derecho, ej. "BLOQUE 2 · CONTEXT ENG." */
  meta: string;
  children: ReactNode;
  /** Centra verticalmente el contenido del cuerpo. */
  center?: boolean;
  /** Oculta el header (marca + rótulo). Default: true (visible). */
  header?: boolean;
  /** Oculta el pie de página (numeración). Se usa en la portada y el cierre. */
  footer?: boolean;
  /** Contenido extra entre el cuerpo y el pie (ej. una barra de cierre). */
  after?: ReactNode;
  /**
   * Clases extra para el cuerpo. `a-sangre` le saca el padding vertical:
   * lo usan las diapositivas que son casi todo figura, para que el diagrama
   * gane ese alto en vez de desperdiciarlo en aire.
   */
  bodyClass?: string;
}) {
  const { toggleOverview } = useDeck();
  const current = useCurrentSlide();
  const step = useStep();

  return (
    <>
      {header && (
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
      )}

      <div className={`s-body ${center ? "center" : ""} ${bodyClass}`}>{children}</div>

      {after}

      {footer && (
        <footer className="s-foot">
          <span>{FOOT_NOTE}</span>

          {/* Pasos que le quedan a esta diapositiva: el presentador ve de un
              vistazo si al avanzar sigue acá o salta a la siguiente. */}
          {(current?.steps ?? 1) > 1 && (
            <span className="f-pasos" aria-hidden="true">
              {Array.from({ length: current?.steps ?? 1 }, (_, i) => (
                <i className={i <= step ? "on" : ""} key={i} />
              ))}
            </span>
          )}
          <button type="button" className="f-num" onClick={toggleOverview} title="Ver todas las diapositivas (O)">
            {current?.numberLabel} / {lastSlideNumber}
          </button>
        </footer>
      )}
    </>
  );
}
