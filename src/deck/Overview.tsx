import { AnimatePresence, motion } from "motion/react";
import { useDeck } from "./DeckProvider";
import { SlideProvider, ThumbnailProvider } from "./StageContext";
import { easeExpo } from "./transitions";
import type { Slide } from "./types";

/**
 * Vista de resumen (tecla O): todas las diapositivas, agrupadas por sección.
 * Cada miniatura es la diapositiva real, dibujada a escala reducida.
 */
export function Overview() {
  const { overview, setOverview, slides, index, goTo } = useDeck();

  const secciones: Array<{ nombre: string; items: Slide[] }> = [];
  for (const slide of slides) {
    const nombre = slide.seccion ?? "Diapositivas";
    const ultima = secciones[secciones.length - 1];
    if (ultima && ultima.nombre === nombre) ultima.items.push(slide);
    else secciones.push({ nombre, items: [slide] });
  }

  return (
    <AnimatePresence>
      {overview && (
        <motion.div
          className="fixed inset-0 z-[60] overflow-y-auto bg-fondo/97 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mx-auto max-w-[1660px] px-10 py-14">
            <header className="mb-10 flex items-baseline justify-between border-b border-linea pb-6">
              <h2 className="text-[32px] font-light">Diseñando el futuro del desarrollo con GenAI</h2>
              <p className="text-[13px] tracking-[.2em] text-muted uppercase">
                {slides.length} diapositivas · clic para ir · Esc para cerrar
              </p>
            </header>

            {secciones.map((seccion) => (
              <section key={seccion.nombre} className="mb-12">
                <div className="mb-5 flex items-baseline gap-4">
                  <h3 className="text-[15px] tracking-[.22em] text-acento uppercase">
                    {seccion.nombre}
                  </h3>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,384px)] gap-7">
                  {seccion.items.map((slide) => (
                    <motion.button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        goTo(slide.index);
                        setOverview(false);
                      }}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: slide.index * 0.02, duration: 0.45, ease: easeExpo }}
                      className="group text-left"
                    >
                      <div
                        className={`relative h-[216px] w-[384px] overflow-hidden border transition-colors ${
                          slide.index === index
                            ? "border-acento"
                            : "border-linea group-hover:border-muted"
                        }`}
                      >
                        <div className="slide-mini">
                          <ThumbnailProvider>
                            <SlideProvider slide={slide}>
                              <div className="slide visible">
                                <slide.Component />
                              </div>
                            </SlideProvider>
                          </ThumbnailProvider>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between gap-3 pt-2">
                        <span className="truncate text-[15px] text-fg">{slide.title}</span>
                        <span className="text-[12px] tracking-[.14em] text-muted">
                          {slide.numberLabel}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
