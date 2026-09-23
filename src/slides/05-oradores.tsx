import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Los oradores",
  seccion: "BLOQUE 0 · INTRODUCCIÓN",
  notes: "Presentación de los cuatro. Pendiente: apellidos de Ramiro y Sofía, y sus dos fotos.",
  transition: "fade",
};

/**
 * Los cuatro lugares, en matriz 2x2 a pantalla completa: la foto llena la
 * casilla y el nombre va encima. Para sumar una foto, dejarla en
 * `public/img/oradores/` y poner su ruta en `foto`.
 */
const ORADORES = [
  { nombre: "Luciano", apellido: "Rodriguez", iniciales: "LR", foto: "/img/oradores/luciano-rodriguez.jpg" },
  { nombre: "Valentín", apellido: "Bravo", iniciales: "V", foto: "/img/oradores/valentin-bravo.jpg" },
  { nombre: "Ramiro", apellido: null, iniciales: "R", foto: null },
  { nombre: "Sofía", apellido: null, iniciales: "S", foto: null },
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
                <img className="orador-foto" src={o.foto} alt={`${o.nombre} ${o.apellido ?? ""}`.trim()} />
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
