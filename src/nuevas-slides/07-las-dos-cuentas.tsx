import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Las dos cuentas",
  seccion: "BLOQUE 3 · EL COSTO",
  notes:
    "El momento que descomprime la sala: no era pereza ni ignorancia, era economía. Incluite vos en el 'no lo usábamos'. Las dos columnas son las dos cuentas que todos hicimos sin darnos cuenta.",
  transition: "fade",
};

export default function LasDosCuentas() {
  return (
    <SlideFrame meta="BLOQUE 3 · EL COSTO">
      <h2 className="display t-md reveal">No era pereza. Era economía.</h2>
      <div className="two-col mt-l reveal">
        <div>
          <div className="col-head bad">Lo que costaba NO usarlo</div>
          <ul className="blist">
            <li>Se construye lo que no era, y se descubre tarde</li>
            <li>Nadie sabe por qué se decidió así</li>
            <li>Cada feature reinventa sus reglas</li>
          </ul>
        </div>
        <div>
          <div className="col-head bad">Lo que costaba usarlo</div>
          <ul className="blist">
            <li>Escribirlo antes de escribir código</li>
            <li>Mantenerlo vivo sprint a sprint</li>
            <li>Propagar cada cambio a mano</li>
          </ul>
        </div>
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">Costo fijo alto, beneficio diferido.</span> Y encima se escribía una
        vez, el código seguía y nadie lo actualizaba: a los tres sprints era mentira escrita.
      </p>
    </SlideFrame>
  );
}
