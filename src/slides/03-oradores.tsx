import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Los oradores",
  seccion: "BLOQUE 0 · APERTURA",
  transition: "fade",
};

const PENDIENTES = 5;

export default function Oradores() {
  return (
    <SlideFrame meta="BLOQUE 0 · APERTURA">
      <p className="prompt reveal">&gt; whoami</p>
      <h2 className="display t-md reveal mt-s">Los oradores</h2>
      <div className="speakers cols-3 mt-m reveal">
        <div className="speaker">
          <div className="s-photo">
            {/* <img src="/img/oradores/luciano.jpg" alt="Luciano Rodriguez" /> */}
            <span className="ini">LR</span>
          </div>
          <div>
            <div className="s-name">
              Luciano
              <br />
              Rodriguez
            </div>
            <div className="s-role">
              GenAI Software Engineer
              <br />
              <b>Mercado Libre</b>
            </div>
          </div>
        </div>

        {Array.from({ length: PENDIENTES }).map((_, i) => (
          <div className="speaker placeholder" key={i}>
            <div className="s-photo placeholder">
              <span className="ini">?</span>
            </div>
            <div>
              <div className="s-name">A confirmar</div>
              <div className="s-role">Por definir</div>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
