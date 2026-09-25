import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "IA Generativa y sistemas agénticos · GEMIS",
  seccion: "4.3 · PARA SEGUIR",
  transition: "fade",
};

export default function Electiva() {
  return (
    <SlideFrame header={false} footer={false} meta="4.3 · PARA SEGUIR">
      <p className="eyebrow reveal">Los invitamos a seguir aprendiendo en la materia electiva</p>
      <h2 className="display t-md mt-s reveal">IA Generativa<br /><span className="accent">y sistemas agénticos</span></h2>
      <figure className="reveal" style={{ position: "absolute", top: "clamp(12px, 1.1vw, 18px)", right: "clamp(16px, 1.5vw, 24px)", width: "clamp(190px, 19vw, 252px)", margin: 0, zIndex: 40 }}>
        <a href="https://www.grupogemis.com/academy/formacion-universitaria/" target="_blank" rel="noopener noreferrer" aria-label="Abrir la formación universitaria de Grupo Gemis">
          <img src="/img/qr-formacion-universitaria.svg" alt="QR para conocer la formación universitaria de Grupo Gemis" width={220} height={220} style={{ display: "block", width: "100%", height: "auto" }} />
        </a>
      </figure>
      <div className="two-col mt-m reveal">
        <div>
          <h3 className="col-head">Otras asignaturas de IA</h3>
          <p className="sub">Inteligencia Artificial e Inteligencia Artificial Avanzada forman parte del mismo ecosistema. Desde el Grupo Gemis enseñamos IA en la carrera de grado y posgrado.</p>
        </div>
        <div>
          <h3 className="col-head">Algunas líneas de Investigación en IA</h3>
          <p className="sub">- Benchmarks de SLM para desarrollo local.</p>
          <p className="sub">- Vulnerabilidades de sistemas agénticos.</p>
          <p className="sub">- IA para ingeniería del conocimiento.</p>
          <p className="sub">- Machine Learning en el área salud.</p>
        </div>
      </div>
      <p className="sub mt-m reveal">Todas estas iniciativas surgen de <b className="accent">Grupo Gemis</b>, donde conectamos docencia e investigación en IA.</p>
    </SlideFrame>
  );
}
