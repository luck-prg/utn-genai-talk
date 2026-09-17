import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El código compila y el sistema empeora",
  seccion: "FUNDAMENTOS",
  notes:
    "Si el input del ADE es el contexto, la calidad del contexto pasa a ser una habilidad de ingeniería. Un mal contexto produce mal código con la misma eficiencia con la que un buen contexto produce código correcto. El agente puede resolver el problema en aislamiento e introducir un patrón ajeno, duplicar una abstracción o romper una decisión arquitectónica acordada.",
  transition: "fade",
};

const HUMANO = [
  { tag: "01", title: "Entender el problema", body: "Qué se quiere construir y por qué." },
  {
    tag: "02",
    title: "Decidir el diseño",
    body: "Arquitectura, límites, contratos y patrones — y descartar los que no corresponden.",
  },
  {
    tag: "03",
    title: "Detectar las falencias",
    body: "Reconocer lo que encaja con el sistema y rechazar lo que no.",
  },
];

export default function DecisionesHumanas() {
  return (
    <SlideFrame meta="FUNDAMENTOS">
      <h2 className="display t-md reveal">
        El código puede compilar,
        <br />
        los tests pasar, y el sistema <span className="accent">empeorar</span>
      </h2>

      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {HUMANO.map((h) => (
          <div className="card" key={h.tag}>
            <div className="c-tag">{h.tag}</div>
            <div className="c-title">{h.title}</div>
            <div className="c-body">{h.body}</div>
          </div>
        ))}
      </div>

      <div className="reveal mt-m">
        <p className="quote">La responsabilidad nunca se delega.</p>
      </div>
    </SlideFrame>
  );
}
