import { useEffect, useRef } from "react";
import { useIsThumbnail } from "@/deck/StageContext";

const CUR = '<span class="term-cur">▋</span>';
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/**
 * Terminal animada que simula `specify init` con spec-kit: tipea comandos,
 * elige opciones de un prompt interactivo y muestra un spinner de descarga.
 * Arranca al montarse (la diapositiva activa) y se corta al desmontarse.
 */
export function SpecKitTerminal() {
  const ref = useRef<HTMLPreElement>(null);
  const isThumbnail = useIsThumbnail();

  useEffect(() => {
    const el = ref.current;
    if (!el || isThumbnail) return;

    let stopped = false;
    let committed = "";
    let dyn = "";
    const stop = () => stopped;
    const render = () => {
      if (el) el.innerHTML = committed + dyn;
    };

    function opts(title: string, items: string[], sel: number) {
      let s = `<span class="fn">? ${title}</span>\n`;
      items.forEach((it, i) => {
        s +=
          i === sel
            ? `<span class="sel st">  ● ${it}</span>\n`
            : `<span class="cm">  ○ ${it}</span>\n`;
      });
      return s;
    }

    async function typeLine(pre: string, text: string, cls: string, suffix = "") {
      for (let i = 1; i <= text.length; i++) {
        if (stop()) return;
        dyn = pre + `<span class="${cls}">${text.slice(0, i)}</span>` + CUR;
        render();
        await sleep(34);
      }
      committed += pre + `<span class="${cls}">${text}</span>` + suffix + "\n";
      dyn = "";
      render();
    }

    async function pick(title: string, items: string[], finalIdx: number, label: string) {
      for (let c = 0; c < 2; c++) {
        for (let i = 0; i < items.length; i++) {
          if (stop()) return;
          dyn = opts(title, items, i);
          render();
          await sleep(120);
        }
      }
      dyn = opts(title, items, finalIdx);
      render();
      await sleep(480);
      if (stop()) return;
      committed += `<span class="st">  ✓ ${label}</span>\n`;
      dyn = "";
      render();
      await sleep(280);
    }

    async function spinner(label: string, ms: number) {
      const fr = "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏";
      let t = 0;
      while (t < ms) {
        if (stop()) return;
        dyn = `<span class="pr">  ${fr[Math.floor(t / 90) % fr.length]}</span> <span class="cm">${label}</span>`;
        render();
        await sleep(90);
        t += 90;
      }
      dyn = "";
      render();
    }

    async function sequence() {
      committed = "";
      dyn = "";
      render();
      await sleep(350);
      if (stop()) return;
      await typeLine('<span class="st">$</span> ', "specify init .", "base");
      if (stop()) return;
      await sleep(300);
      committed += '\n<span class="kw">  ◆ SPECIFY</span> <span class="cm">· spec-kit toolkit</span>\n';
      render();
      await sleep(450);
      if (stop()) return;
      await pick("Selecciona tu agente:", ["GitHub Copilot", "Claude Code", "Gemini CLI", "Cursor"], 1, "Agente · Claude Code");
      if (stop()) return;
      await pick("Tipo de scripts:", ["sh   (bash / zsh)", "ps   (PowerShell)"], 0, "Scripts · sh");
      if (stop()) return;
      await spinner("Descargando template…", 1150);
      if (stop()) return;
      committed +=
        '<span class="st">  ✓ Template instalado</span>\n<span class="st">  ✓ Comandos del agente registrados</span>\n';
      render();
      await sleep(450);
      if (stop()) return;
      committed += '<span class="pr">→ Comandos disponibles en Claude Code:</span>\n';
      render();
      await sleep(250);
      await typeLine("  ", "/speckit.specify", "kw", '  <span class="cm">especificación: qué construir</span>');
      if (stop()) return;
      await sleep(200);
      await typeLine("  ", "/speckit.plan", "kw", '     <span class="cm">plan técnico</span>');
      if (stop()) return;
      dyn = "";
      render();
    }

    async function loop() {
      while (!stopped) {
        await sequence();
        if (stopped) break;
        await sleep(3800);
      }
    }

    void loop();

    return () => {
      stopped = true;
    };
  }, [isThumbnail]);

  return (
    <div className="code-panel mt-m reveal">
      <div className="code-bar">
        <span className="dot d1" />
        <span className="dot d2" />
        <span className="dot d3" />
        <span className="path">~/mi-proyecto</span>
      </div>
      <pre
        ref={ref}
        className="code"
        style={{ height: "clamp(300px,42vh,460px)", overflow: "hidden", lineHeight: 1.45, fontSize: "clamp(11px,1.05vw,21px)" }}
      />
    </div>
  );
}
