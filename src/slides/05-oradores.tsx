import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Los oradores",
  seccion: "BLOQUE 0 · INTRODUCCIÓN",
  notes: "Presentación de los cuatro.",
  transition: "fade",
};

/**
 * Los cuatro lugares, en matriz 2x2 a pantalla completa: la foto llena la
 * casilla y el nombre va encima. Para sumar una foto, dejarla en
 * `public/img/oradores/` y poner su ruta en `foto`.
 *
 * `encuadre` solo hace falta cuando la foto no funciona con el recorte por
 * defecto del CSS (`center 88%`, pensado para un retrato vertical). Una foto
 * apaisada, con la cara arriba del centro, necesita correr ese eje hacia
 * arriba para que no quede el torso en la casilla.
 *
 * `zoom` acerca la imagen (transform: scale) tomando `encuadre` como origen,
 * para fotos apaisadas donde la persona queda chica dentro de la casilla.
 */
const ORADORES: {
  nombre: string;
  apellido: string | null;
  iniciales: string;
  foto: string | null;
  encuadre?: string;
  zoom?: number;
}[] = [
  {
    nombre: "Luciano",
    apellido: "Rodriguez",
    iniciales: "LR",
    foto: "/img/oradores/luciano-rodriguez.jpg",
    encuadre: "48% 100%",
    zoom: 1.18,
  },
  { nombre: "Valentín", apellido: "Bravo", iniciales: "V", foto: "/img/oradores/valentin-bravo.jpg" },
  {
    nombre: "Ramiro",
    apellido: "Remersaro",
    iniciales: "RR",
    foto: "/img/oradores/ramiro-remersaro.webp",
    encuadre: "58% 30%",
  },
  {
    nombre: "Sofía",
    apellido: "Cortés",
    iniciales: "SC",
    foto: "/img/oradores/sofia-cortes.jpg",
    encuadre: "center 40%",
  },
];

export default function Oradores() {
  return (
    <SlideFrame
      header={false}
      footer={false}
      meta="BLOQUE 0 · INTRODUCCIÓN"
      after={
        <div className="oradores-grid">
          {ORADORES.map((o) => (
            <div className={`orador-celda reveal ${o.foto ? "con-foto" : "sin-foto"}`} key={o.nombre}>
              {o.foto ? (
                <img
                  className="orador-foto"
                  src={o.foto}
                  alt={`${o.nombre} ${o.apellido ?? ""}`.trim()}
                  style={{
                    ...(o.encuadre ? { objectPosition: o.encuadre } : undefined),
                    ...(o.zoom
                      ? { transform: `scale(${o.zoom})`, transformOrigin: o.encuadre ?? "center 88%" }
                      : undefined),
                  }}
                />
              ) : (
                <span className="orador-ini">{o.iniciales}</span>
              )}
              <div className="orador-nombre">
                {o.nombre}
                <br />
                {o.apellido ?? <span className="orador-pendiente">[apellido]</span>}
              </div>
            </div>
          ))}
        </div>
      }
    >
      <></>
    </SlideFrame>
  );
}
