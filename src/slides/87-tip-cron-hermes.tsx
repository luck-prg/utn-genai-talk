import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Tip 1 · Cron y disparadores",
  seccion: "2.2.3 · EJECUCIÓN",
  notes:
    "Hermes es un agente open source de Nous Research (feb. 2026) que corre en tu propio servidor, no en una sesión de chat: recuerda lo que aprende y gana capacidad con el tiempo. Lo que importa acá es su subsistema de cron real — tareas recurrentes en lenguaje natural, con resultado al chat, a un archivo o a otra plataforma. El ejemplo de su propia documentación: todos los días hábiles a las 8:30, leer un CSV de ventas, resumir anomalías y mandar el resultado a un canal. Los 'monitores' son la misma idea aplicada a una condición: revisan algo y solo avisan o actúan si se cumple. Antes de decir que es feature propia de Hermes, confirmar si viene así o si se arma encima del cron. Mencionar de paso que permite delegar en subagentes aislados y paralelizar — conecta con lo ya visto de subagents.",
  transition: "fade",
};

export default function TipCronHermes() {
  return (
    <SlideFrame header={false} footer={false} meta="2.2.3 · EJECUCIÓN">
      <p className="eyebrow reveal">›// tip 1</p>
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        <span className="accent">Hermes</span>: cuándo arranca
      </h2>
      <p className="sub reveal mt-s">Un agente que vive fuera de la sesión de chat.</p>

      <ul className="blist mt-l reveal">
        <li>
          <span>
            <b>Cron real</b>: tareas recurrentes en lenguaje natural, no un script que corrés a
            mano cada vez.
          </span>
        </li>
        <li>
          <span>
            <b>Ejemplo</b>: todos los días hábiles a las 8:30, lee un CSV de ventas y resume las
            anomalías.
          </span>
        </li>
        <li>
          <span>
            <b>Monitores</b>: el mismo cron, pero condicional — avisa o actúa solo si algo se
            cumple.
          </span>
        </li>
        <li>
          <span>
            <b>Subagentes aislados</b>: delega y paraleliza, la misma idea que ya vimos en
            Subagents.
          </span>
        </li>
      </ul>
    </SlideFrame>
  );
}
