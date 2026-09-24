import type { SlideMeta } from "@/deck/types";
import { Paso } from "@/components/Paso";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Riesgo · Ambiental",
  seccion: "1.3.2 · SEGURIDAD Y RIESGOS",
  steps: 4,
  notes:
    "[~1:00] Segundo: el impacto ambiental. PASO 0 — Naciones Unidas proyecta que en 2030 los centros de datos de IA van a consumir unos 945 teravatios-hora por año: casi el triple de lo que consumen Pakistán, Bangladesh y Nigeria juntos, más de 650 millones de personas. PASO 1 — el agua dulce que usan para refrigerar los equipos compite con la que necesitan las poblaciones de la zona, y hay lugares con restricciones severas del servicio. PASO 2 — consumen tanta energía que suben las tarifas de quienes viven cerca, son ruidosos, y a veces obligan a instalar plantas a combustibles fósiles. PASO 3 — y no generan muchos empleos a largo plazo. Aun así, al menos siete países de la región están impulsando leyes para atraer mega data centers, incluida la Patagonia. Cada token que no mandamos también cuenta.",
  transition: "fade",
};

const LINEAS: { cuando: string; txt: React.ReactNode }[] = [
  { cuando: "agua", txt: <>Para enfriar los equipos, <b>compite con la de la población</b>.</> },
  { cuando: "energía", txt: <>Sube las tarifas de la zona y a veces exige <b>plantas fósiles</b>.</> },
  { cuando: "empleo", txt: <>Genera <b>pocos puestos locales</b>, aunque la región compite por atraerlos.</> },
];

export default function RiesgoAmbiental() {
  return (
    <SlideFrame header={false} footer={false} meta="1.3.2 · SEGURIDAD Y RIESGOS">
      <p className="eyebrow reveal">›// riesgo 2 · ambiental</p>

      <h2 className="display reveal mt-s" style={{ fontSize: "clamp(24px,min(3vw,5.33vh),62px)" }}>
        La <span className="accent">huella ambiental</span>
      </h2>

      <div className="dato-fila mt-m reveal">
        <div className="dato-grande" style={{ fontSize: "clamp(40px,min(5vw,8.9vh),100px)" }}>
          945 TWh<small>ONU · 2030</small>
        </div>
        <p className="body">por año en centros de datos de IA: casi <b>el triple</b> de lo que consumen Pakistán, Bangladesh y Nigeria juntos.</p>
      </div>

      <div className="casos anchos mt-m">
        {LINEAS.map((l, i) => (
          <Paso n={i + 1} className="caso" key={l.cuando}>
            <span className="caso-cuando">{l.cuando}</span>
            <span className="caso-txt">{l.txt}</span>
          </Paso>
        ))}
      </div>
    </SlideFrame>
  );
}
