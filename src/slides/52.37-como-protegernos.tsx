import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";
import { useStep } from "@/deck/StageContext";

export const meta: SlideMeta = {
  title: "Cómo protegernos",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 5,
  notes:
    "[~1:15] Entonces, ¿cómo nos cuidamos? Cuatro medidas, que salen de la sección 'Profilaxis' del apunte de Franco Bulgarelli. PASO 1 — NADA SENSIBLE. No le des datos personales, ni tuyos, ni del equipo, ni de clientes. Y que no tenga a su alcance contraseñas, API keys ni tokens. PASO 2 — PERMISOS MÍNIMOS. Que sólo pueda leer y tocar lo que necesita para la tarea, y nada más. Eso se define en la configuración del agente (en Claude Code, por ejemplo, es el archivo settings.json). Y a producción, nunca: con una clave de producción a mano, borrar una tabla también puede parecerle una solución. PASO 3 — AISLARLO. Que corra en un entorno virtualizado, separado del resto de tu máquina. PASO 4 — MÁS DE UN PROVEEDOR. No acoplar el diseño a un servicio en particular, para poder migrar de modelo mañana si cambian los términos o el precio.",
  transition: "fade",
};

const MEDIDAS = [
  {
    tag: "01",
    titulo: "Nada sensible",
    body: "Ni datos personales, ni contraseñas, API keys o tokens.",
  },
  {
    tag: "02",
    titulo: "Permisos mínimos",
    body: <>Acceso de lectura y escritura limitado a lo necesario, definido en la configuración del agente. Sin acceso a producción.</>,
  },
  {
    tag: "03",
    titulo: "Aislarlo",
    body: "En un entorno virtualizado.",
  },
  {
    tag: "04",
    titulo: "Más de un proveedor",
    body: "No acoplar el diseño a un servicio: poder migrar de modelo mañana.",
  },
];

export default function ComoProtegernos() {
  const paso = useStep();

  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// profilaxis</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Cómo <span className="accent">protegernos</span>
      </h2>

      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        {MEDIDAS.map((m, i) => (
          <div className={`card ${paso >= i + 1 ? "encendida" : "apagada"}`} key={m.tag}>
            <div className="c-tag">{m.tag}</div>
            <div className="c-title">{m.titulo}</div>
            <div className="c-body">{m.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
