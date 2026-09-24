import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Lo que le mandás es un dato confidencial",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 4,
  notes:
    "[~1:15] Y a veces lo que le mandamos es un dato confidencial. PASO 1 — en 2025, el director interino de CISA, la agencia de ciberseguridad del gobierno de Estados Unidos, subió a la versión pública de ChatGPT documentos marcados 'sólo para uso oficial'. Lo detectaron los propios sistemas de seguridad y se abrió una investigación. Si le pasa al responsable de la ciberseguridad de Estados Unidos, le puede pasar a cualquiera. PASO 2 — un caso más técnico: Drift es un chatbot de IA que muchas empresas conectan a su Salesforce con tokens OAuth. En agosto de 2025, un grupo robó esos tokens y, en diez días, exportó datos de Salesforce de más de 700 organizaciones — Cloudflare, Google, Palo Alto, Zscaler. Después revisaron los tickets de soporte buscando lo que la gente había pegado en texto plano: claves de AWS, credenciales de VPN, tokens de Snowflake. Al integrar un agente le damos acceso a todo lo que ve, y eso incluye los secretos que otros dejaron ahí. PASO 3 — y no es un caso aislado: según LayerX, el 77% de quienes usan IA en el trabajo pega datos de la empresa en el chat, y la mayoría lo hace desde su cuenta personal, donde nadie lo controla.",
  transition: "fade",
};

const CASOS: { cuando: string; txt: React.ReactNode }[] = [
  {
    cuando: "2025",
    txt: (
      <>
        El <b>jefe de ciberseguridad de EE.UU.</b> sube a ChatGPT documentos de uso oficial.
      </>
    ),
  },
  {
    cuando: "2025",
    txt: (
      <>
        Roban los tokens OAuth del chatbot de IA <b>Drift</b>: datos de Salesforce de <b>700+ empresas</b>, con
        claves de AWS pegadas en tickets.
      </>
    ),
  },
];

export default function DatoConfidencial() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        Y a veces, lo que le mandás
        <br />
        <span className="accent">es un dato confidencial</span>
      </h2>

      <div className="casos mt-l">
        {CASOS.map((c, i) => (
          <Paso n={i + 1} className="caso" key={i}>
            <span className="caso-cuando">{c.cuando}</span>
            <span className="caso-txt">{c.txt}</span>
          </Paso>
        ))}
      </div>

      <Paso n={3} className="mt-l">
        <div className="dato-fila">
          <div className="dato-grande">
            77%<small>LayerX · 2025</small>
          </div>
          <p className="body">
            de quienes usan IA en el trabajo <b>pega datos en el chat</b>. Casi siempre, desde su cuenta personal.
          </p>
        </div>
      </Paso>
    </SlideFrame>
  );
}
