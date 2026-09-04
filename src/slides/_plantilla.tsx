import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

/**
 * PLANTILLA — este archivo NO aparece en la presentación (empieza con "_").
 *
 * Para crear una diapositiva nueva:
 *   1. Copiala como `src/slides/NN-mi-tema.tsx` (NN define el orden).
 *   2. Cambiá `meta` y el contenido.
 *   3. Guardá: aparece sola, sin tocar ningún otro archivo.
 *
 * ESTRUCTURA
 *   <SlideFrame meta="BLOQUE N · ETIQUETA">  header + footer automáticos
 *     ...contenido...
 *   </SlideFrame>
 *
 * REVEAL — el contenido entra escalonado. Envolvé cada bloque de nivel
 * superior del cuerpo con className="reveal" (hasta 5 bloques por slide,
 * cada uno con más delay que el anterior).
 *
 * PIEZAS (ver src/styles/system.css)
 *   .prompt          línea de "terminal", con cursor parpadeante
 *   .eyebrow         ojo de sección
 *   .display         titular grande (usar var(--fs-cover|section|stmt|title))
 *   .accent          resalta una palabra en naranja
 *   .sub / .body     bajada / cuerpo de texto
 *   .blist           lista con viñetas ›//
 *   .cards / .card   grilla de tarjetas (c-tag, c-title, c-body)
 *   .two-col         columnas comparativas (.col-head.bad / .good)
 *   .loop            pasos con flechas (.step, .step.acc, .arr)
 *   .chips / .chip   etiquetas sueltas
 *   .bar             barra invertida (CTA / dato destacado)
 *   .speakers        tarjetas de oradores
 *
 * TAMAÑOS DE TÍTULO (var(--fs-*), fluidos por vw)
 *   --fs-cover    portada / declaraciones grandes
 *   --fs-section  número + título de sección
 *   --fs-stmt     frase-declaración de una diapositiva
 *   --fs-title    título de una diapositiva de contenido (clase .t-md)
 */
export const meta: SlideMeta = {
  title: "Título corto para la vista de resumen",
  seccion: "BLOQUE N · ETIQUETA",
  notes: "Lo que voy a decir mientras se ve esta diapositiva.",
  transition: "fade", // 'fade' | 'slide' | 'zoom' | 'flip' | 'curtain' | 'none'
};

export default function Plantilla() {
  return (
    <SlideFrame meta="BLOQUE N · ETIQUETA">
      <p className="prompt reveal">&gt; ejemplo --prompt</p>
      <h2 className="display t-md reveal mt-s">La frase clave de esta diapositiva</h2>
      <p className="sub reveal mt-m maxw">La que la remata, entrando un momento después.</p>
    </SlideFrame>
  );
}
