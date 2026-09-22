import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Cuatro ejes, no un catálogo",
  seccion: "3.1 · MODELOS",
  steps: 5,
  notes:
    "A propósito no vamos a nombrar modelos. Qué proveedor o modelo puntual se use en cada caso es un detalle de implementación que cambia constantemente; lo que importa es el criterio de decisión, no el catálogo vigente. Los nombres concretos vienen en dos diapositivas, cuando ya tengamos el criterio. Los cuatro ejes: abierto o cerrado cambia quién controla el modelo y qué pasa si mañana lo deprecan — eso es vendor lock-in. Liviano o pesado es costo y latencia contra capacidad de razonamiento. Local o remoto define dónde corre y, sobre todo, por dónde salen tus datos. Y generalista o especializado. Un modelo concreto es un punto en ese espacio de cuatro dimensiones: elegirlo es elegir cuatro veces.",
  transition: "fade",
};

const EJES = [
  {
    a: "abierto",
    aDet: "pesos descargables",
    b: "cerrado",
    bDet: "API propietaria",
  },
  {
    a: "liviano",
    aDet: "barato y rápido",
    b: "pesado",
    bDet: "más razonamiento",
  },
  {
    a: "local",
    aDet: "tu máquina, tu VRAM",
    b: "remoto",
    bDet: "el datacenter de un tercero",
  },
  {
    a: "generalista",
    aDet: "sirve para todo",
    b: "especializado",
    bDet: "afinado para una tarea",
  },
];

export default function EjesDeClasificacion() {
  return (
    <SlideFrame header={false} footer={false} meta="3.1 · MODELOS">
      <h2 className="display reveal" style={{ fontSize: "clamp(22px,min(2.7vw,4.8vh),56px)" }}>
        No existe <span className="accent">el modelo bueno</span>
      </h2>

      <div className="ejes mt-m">
        {EJES.map((e, i) => (
          <Paso n={i + 1} className="eje reserva" key={e.a}>
            <span className="eje-polo">
              {e.a}
              <em>{e.aDet}</em>
            </span>
            <span className="eje-linea" />
            <span className="eje-polo">
              {e.b}
              <em>{e.bDet}</em>
            </span>
          </Paso>
        ))}
      </div>

      <p className="body reveal mt-m maxw ink2">
        Qué proveedor o modelo puntual se use es un <b>detalle de implementación</b> que cambia
        constantemente. Lo que importa es el criterio, no el catálogo vigente.
      </p>
    </SlideFrame>
  );
}
