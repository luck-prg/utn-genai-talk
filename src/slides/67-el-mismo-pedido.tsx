import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "El mismo pedido, tres veces",
  seccion: "2.1.3 · SKILLS",
  notes:
    "Arrancá por el dolor, no por la herramienta. El mismo pedido, tres días distintos, tres respuestas distintas: el prefijo de la ruta, la capa donde cae el archivo y la forma del error cambian solos. Nadie pidió que cambiaran. Las tres son defendibles: versionar o no versionar es una decisión de equipo, controllers o routes también, y la tercera forma de error es directamente RFC 7807. Si alguien de la sala te discute una, ganaste: esa discusión ES la slide.",
  transition: "fade",
};

/**
 * The three runs must all be DEFENSIBLE: prefix and versioning, layering
 * convention, and error shape are real team decisions with no wrong answer
 * (the third one is even RFC 7807). The slide's whole point collapses if one
 * of them is simply incorrect — the room stops seeing drift and starts seeing
 * a bug.
 */
const CORRIDAS: { dia: string; lines: { label: string; value: string }[] }[] = [
  {
    dia: "lunes",
    lines: [
      { label: "ruta", value: "POST /users" },
      { label: "archivo", value: "controllers/users.js" },
      { label: "error", value: '{ error: "..." }' },
    ],
  },
  {
    dia: "martes",
    lines: [
      { label: "ruta", value: "POST /api/users" },
      { label: "archivo", value: "api/handlers/users.js" },
      { label: "error", value: "{ error, code }" },
    ],
  },
  {
    dia: "miércoles",
    lines: [
      { label: "ruta", value: "POST /api/v1/users" },
      { label: "archivo", value: "src/routes/users.route.ts" },
      { label: "error", value: "{ type, title, detail }" },
    ],
  },
];

export default function ElMismoPedido() {
  return (
    <SlideFrame header={false} footer={false} meta="BLOQUE 2.1 · SKILL">
      <h2 className="display t-md reveal">El mismo pedido, tres veces</h2>
      <p className="prompt reveal mt-s">&gt; creá un endpoint para dar de alta un usuario</p>
      <div className="cards mt-m reveal" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
        {CORRIDAS.map((c) => (
          <div className="card" key={c.dia}>
            <div className="c-tag">{c.dia}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(6px, 0.7vh, 12px)",
                marginTop: "clamp(4px, 0.5vw, 10px)",
              }}
            >
              {c.lines.map((l) => (
                <div key={l.label}>
                  <div
                    className="c-body"
                    style={{ fontSize: "clamp(10px, 0.95vw, 19px)", letterSpacing: "0.08em" }}
                  >
                    {l.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      fontSize: "clamp(12px, 1.15vw, 23px)",
                      color: "var(--color-fg)",
                      lineHeight: 1.3,
                    }}
                  >
                    {l.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="body mt-m reveal maxw">
        <span className="k">Ninguna está mal.</span> Y ese es el problema: no hay con qué decir cuál
        está bien.
      </p>
    </SlideFrame>
  );
}
