import type { SlideMeta } from "@/deck/types";
import { SlideFrame } from "@/components/SlideFrame";

export const meta: SlideMeta = {
  title: "Un eval bien definido",
  seccion: "BLOQUE 4 · DEMO",
  transition: "fade",
};

const CODE = [
  '<span class="kw">eval</span>: checkout_endpoint',
  '<span class="pr">input</span>:  <span class="st">"endpoint POST /checkout con validación"</span>',
  '<span class="pr">expect</span>:',
  '  <span class="pr">behavior</span>: agente usa <span class="fn">subagent:tests</span>',
  '  <span class="pr">exact</span>:    compila &amp;&amp; unit_tests == <span class="st">"pass"</span>',
  '  <span class="pr">tools</span>:    [<span class="st">"read_db"</span>, <span class="st">"run_tests"</span>]',
  '  <span class="pr">budget</span>:   tokens &lt; <span class="st">12000</span> &amp;&amp; time &lt; <span class="st">90s</span>',
  '<span class="cm"># esperado ✓  vs  real ✓  → score 0.92</span>',
].join("\n");

export default function DemoEval() {
  return (
    <SlideFrame meta="BLOQUE 4 · DEMO">
      <p className="prompt reveal">&gt; ./demo --eval</p>
      <h2 className="display t-md reveal mt-s">Un eval bien definido</h2>
      <div className="code-panel mt-m reveal">
        <div className="code-bar">
          <span className="dot d1" />
          <span className="dot d2" />
          <span className="dot d3" />
          <span className="path">~/evals/checkout.eval.yaml</span>
        </div>
        <pre className="code" dangerouslySetInnerHTML={{ __html: CODE }} />
      </div>
    </SlideFrame>
  );
}
