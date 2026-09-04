# Agent loop en CLIs modernos — Claude Code y Codex

Fecha: 2026-08-11

## Objetivo

Este documento explica qué es un **agent loop**, cómo funciona en herramientas modernas de línea de comandos como **Claude Code** y **OpenAI Codex CLI**, y qué implicancias tiene para la charla sobre desarrollo con GenAI.

La idea central: un coding agent no es simplemente un chatbot que responde mejor. Es un sistema que combina modelo, contexto, herramientas, permisos, memoria y validación dentro de un ciclo iterativo.

---

# 1. Qué es un agent loop

Un **agent loop** es el ciclo de ejecución que permite que un modelo deje de ser solo conversacional y empiece a actuar sobre un entorno.

En forma simplificada:

```text
Usuario define objetivo
  ↓
El agente arma contexto
  ↓
El modelo razona el próximo paso
  ↓
El modelo pide usar una herramienta
  ↓
El harness ejecuta la herramienta
  ↓
El resultado vuelve al contexto
  ↓
El modelo decide el siguiente paso
  ↓
Repite hasta terminar o detenerse
```

En código y desarrollo, ese loop suele verse así:

```text
Prompt / tarea
  ↓
Leer archivos
  ↓
Entender arquitectura
  ↓
Planear cambio
  ↓
Editar código
  ↓
Ejecutar tests / lint / build
  ↓
Leer errores
  ↓
Corregir
  ↓
Volver a validar
  ↓
Responder con resultado final
```

## Punto clave

El agente no “sabe” que terminó porque escribió código. Termina cuando decide que ya no necesita más herramientas o cuando una condición externa lo detiene: límite de turnos, presupuesto, permiso humano, error, contexto agotado o interrupción del usuario.

---

# 2. Componentes del loop

## 2.1 Modelo

Es la parte que razona:

- interpreta el objetivo;
- decide qué información falta;
- elige herramientas;
- propone cambios;
- interpreta errores;
- decide si continuar o detenerse.

Pero el modelo por sí solo no ejecuta. Necesita un harness.

## 2.2 Harness

El **harness** es el sistema que rodea al modelo y le permite operar.

Incluye:

- system prompt;
- instrucciones de proyecto;
- archivos como `AGENTS.md` o `CLAUDE.md`;
- tool definitions;
- shell / terminal;
- file read / edit / write;
- permisos;
- sandbox;
- MCP servers;
- hooks;
- memoria;
- compaction;
- streaming;
- trazas;
- límites de turnos y costo.

El harness convierte un LLM en un agente operativo.

## 2.3 Tools

Son las capacidades que el modelo puede pedir usar.

Ejemplos:

- leer archivos;
- buscar en el repo;
- editar archivos;
- crear archivos;
- ejecutar comandos;
- correr tests;
- consultar Git;
- abrir navegador;
- consultar MCPs;
- hablar con subagentes.

El modelo decide qué herramienta usar, pero el CLI/harness ejecuta y devuelve el resultado.

## 2.4 Contexto acumulado

Cada vuelta del loop agrega información:

- prompt inicial;
- instrucciones del sistema;
- reglas del proyecto;
- llamadas a herramientas;
- outputs de herramientas;
- errores;
- diffs;
- decisiones previas;
- respuesta final.

Esto hace que el agente pueda aprender durante la tarea, pero también aumenta el uso de contexto y tokens.

## 2.5 Stopping condition

El loop se detiene cuando:

- el modelo emite una respuesta final sin pedir más herramientas;
- se alcanza un límite de turnos;
- se alcanza un límite de costo;
- falla una herramienta crítica;
- falta permiso humano;
- se llena el contexto y no puede compactar;
- el usuario interrumpe.

---

# 3. Claude Code: cómo funciona el loop

Según la documentación de Claude Code, el agentic loop trabaja en tres fases que se mezclan entre sí:

```text
Gather context → Take action → Verify results → Repeat
```

## 3.1 Fase 1 — Gather context

Claude Code primero intenta entender el entorno.

Puede:

- leer archivos;
- buscar símbolos;
- inspeccionar estructura del repo;
- revisar `CLAUDE.md`;
- leer memoria automática;
- consultar skills;
- consultar MCPs;
- revisar git state;
- revisar tests o scripts disponibles.

Ejemplo:

```text
Usuario: “Arreglá el bug de autenticación.”

Claude puede:
1. buscar archivos relacionados con auth;
2. leer tests existentes;
3. revisar commits recientes;
4. entender el patrón de errores;
5. recién después proponer o hacer cambios.
```

## 3.2 Fase 2 — Take action

Cuando tiene suficiente contexto, Claude Code puede actuar.

Acciones típicas:

- editar archivos;
- crear tests;
- modificar configuración;
- ejecutar comandos;
- usar Git;
- llamar herramientas externas;
- invocar subagentes;
- aplicar cambios en varios pasos.

## 3.3 Fase 3 — Verify results

Claude Code puede validar lo hecho.

Ejemplos:

- correr tests;
- ejecutar lint;
- correr typecheck;
- iniciar una app;
- inspeccionar logs;
- corregir errores derivados;
- repetir el ciclo hasta que pase la validación.

Este punto es crítico para explicar la diferencia entre “generar código” y “trabajar como agente”.

## 3.4 Loop interno de Claude Code / Agent SDK

La documentación del Agent SDK lo describe así:

1. **Receive prompt:** recibe prompt, system prompt, tools y conversation history.
2. **Evaluate and respond:** Claude decide si responde texto, pide tools o ambas.
3. **Execute tools:** el SDK ejecuta las tools pedidas y recolecta resultados.
4. **Repeat:** el resultado vuelve al modelo y se repite el ciclo.
5. **Return result:** cuando ya no hay tool calls, devuelve respuesta final con uso, costo y session id.

En pseudocódigo:

```text
messages = [system, project_context, user_task]

while true:
    assistant_message = model(messages, tools)

    if assistant_message.tool_calls is empty:
        return assistant_message.final_text

    tool_results = execute(assistant_message.tool_calls)
    messages.append(assistant_message)
    messages.append(tool_results)
```

## 3.5 Qué cuenta como “turn”

En Claude Code / Agent SDK, cada ciclo completo de decisión + tools puede contar como un turno. En modo programático se puede limitar con `max_turns`.

Ejemplo:

```text
Turno 1: lee archivos
Turno 2: edita código
Turno 3: corre tests
Turno 4: corrige error
Turno 5: responde final
```

En tareas abiertas, `max_turns` evita loops infinitos o demasiado costosos.

## 3.6 Context window y compaction en Claude Code

Claude Code mantiene contexto acumulado durante la sesión:

- system prompt;
- tool definitions;
- `CLAUDE.md`;
- conversación;
- tool inputs;
- tool outputs;
- resultados de comandos;
- errores;
- diffs.

Cuando el contexto crece demasiado, Claude Code puede compactar la conversación. En sesiones interactivas existe `/compact`, y también mecanismos automáticos cuando el contexto se acerca al límite.

Puntos importantes:

- outputs grandes de herramientas consumen muchos tokens;
- logs completos pueden llenar el contexto rápidamente;
- skills cargan contenido completo solo cuando se invocan;
- MCP tool definitions pueden diferirse para no cargar todo al inicio;
- subagentes ayudan porque trabajan en contextos separados.

## 3.7 Permisos, hooks y seguridad

Claude Code no debería pensarse como “modelo con permiso total”. Tiene capas de control:

- permission modes;
- allowed/disallowed tools;
- prompts de aprobación;
- hooks antes/después del uso de tools;
- MCP config;
- sandbox o entornos aislados según configuración;
- revisión humana para acciones riesgosas.

Ejemplo de loop seguro:

```text
Claude quiere ejecutar comando riesgoso
  ↓
PreToolUse hook lo inspecciona
  ↓
Si rompe una regla, se bloquea
  ↓
Si requiere aprobación, pregunta al humano
  ↓
Si se aprueba, ejecuta
```

## 3.8 Modos de uso relevantes

### Interactive mode

El usuario conversa con Claude en la terminal. Sirve para sesiones exploratorias, debugging, refactors largos y trabajo iterativo.

### Print mode / headless

Con `claude -p`, Claude ejecuta una tarea no interactiva y devuelve resultado. Es útil para scripts, CI y automatización.

Ejemplo conceptual:

```bash
claude -p "Run tests and summarize failures" --allowedTools "Read,Bash" --max-turns 5
```

### Bare mode

`--bare` reduce startup y evita cargar hooks, plugins, MCP discovery, auto memory y `CLAUDE.md`. Sirve para CI o ejecuciones reproducibles, pero hay que pasar explícitamente el contexto necesario.

---

# 4. Codex CLI: cómo funciona el loop

OpenAI describe el loop de Codex como el núcleo del harness que coordina usuario, modelo y herramientas.

A alto nivel:

```text
User input
  ↓
Codex construye input para Responses API
  ↓
Modelo genera razonamiento, texto o tool calls
  ↓
Codex ejecuta tool calls
  ↓
Los resultados se agregan al input
  ↓
Se llama otra vez al modelo
  ↓
Repite hasta respuesta final
```

## 4.1 Codex usa Responses API

Codex CLI hace requests a la Responses API.

Dependiendo de autenticación y entorno, puede usar:

- endpoint de ChatGPT/Codex cuando se usa login de ChatGPT;
- `https://api.openai.com/v1/responses` con API key;
- endpoints compatibles para Azure;
- endpoints locales compatibles con Responses API cuando se usa modo OSS.

## 4.2 Cómo arma el prompt inicial

Codex no manda solo el texto del usuario. Construye una lista de elementos con roles y prioridades.

Incluye:

- system / developer instructions;
- tool definitions;
- instrucciones de sandbox y permisos;
- `developer_instructions` desde `config.toml`;
- instrucciones de usuario;
- `AGENTS.md` y `AGENTS.override.md`;
- instrucciones por carpeta del repo;
- skills configuradas;
- mensaje del usuario.

Esto explica por qué `AGENTS.md` y la configuración del proyecto importan: entran al loop antes de que el modelo decida qué hacer.

## 4.3 Tools en Codex

Codex puede exponer tools al modelo:

- shell tool;
- herramientas provistas por Codex CLI;
- herramientas provistas por Responses API;
- tools de MCP servers;
- herramientas del entorno según configuración.

Importante: el sandbox de Codex aplica específicamente a su shell tool. Tools externas vía MCP deben implementar sus propios guardrails.

## 4.4 Una “turn” puede incluir muchas tool calls

OpenAI diferencia entre conversación y loop interno.

Un turno de conversación del usuario puede tener muchas iteraciones internas:

```text
Usuario pide: “fix failing tests”
  ↓
Modelo pide shell: correr tests
  ↓
Codex ejecuta tests
  ↓
Modelo lee error
  ↓
Modelo pide leer archivo
  ↓
Codex lee archivo
  ↓
Modelo pide editar archivo
  ↓
Codex edita archivo
  ↓
Modelo pide shell: correr tests otra vez
  ↓
Codex ejecuta tests
  ↓
Modelo responde final
```

Para el usuario eso puede sentirse como una sola respuesta, pero internamente hubo varias vueltas de inferencia/tool-use.

## 4.5 Streaming y eventos

Codex consume eventos Server-Sent Events de la Responses API.

Algunos eventos sirven para:

- streaming de texto en UI;
- reasoning items;
- function calls;
- tool outputs;
- elementos que deben agregarse al input siguiente.

Esto permite mostrar progreso mientras el agente trabaja.

## 4.6 Prompt caching

Una idea clave del artículo de OpenAI: el input crece con cada vuelta del loop, pero el sistema intenta mantener un prefijo estable para aprovechar prompt caching.

La regla:

```text
Si el prompt nuevo empieza exactamente igual que el anterior,
el proveedor puede reutilizar cómputo previo.
```

Por eso Codex intenta evitar cambios que rompan el prefijo:

- cambiar tools a mitad de conversación;
- cambiar modelo;
- cambiar sandbox;
- cambiar approval mode;
- cambiar working directory;
- cambiar orden de MCP tools.

Cuando necesita registrar cambios de configuración, prefiere agregar mensajes nuevos en vez de modificar mensajes anteriores. Eso preserva mejor el cache.

## 4.7 Context window y compaction en Codex

Como todo se acumula, Codex también debe administrar el contexto.

OpenAI explica que Codex compacta la conversación cuando se supera cierto umbral. Antes podía requerir `/compact`; ahora usa mecanismos automáticos apoyados en `/responses/compact`.

La compaction reemplaza la conversación larga por una representación más compacta que permite continuar sin perder completamente el estado.

## 4.8 Sandbox y approval policy

Codex CLI en modo no interactivo (`codex exec`) corre por defecto en sandbox read-only.

Para automatización se recomienda declarar explícitamente permisos:

```bash
codex exec --sandbox workspace-write "<task>"
codex exec --sandbox danger-full-access "<task>"
```

`danger-full-access` solo debería usarse en entornos controlados, como containers o runners aislados.

En versiones nuevas, `--full-auto` queda como compatibilidad/deprecado; conviene preferir `--sandbox workspace-write`.

## 4.9 Modo no interactivo

`codex exec` permite ejecutar Codex sin abrir la TUI.

Uso típico:

```bash
codex exec "summarize the repository structure and list risky areas"
```

Características:

- progreso a `stderr`;
- respuesta final a `stdout`;
- útil para CI y scripts;
- puede usar JSON Lines con `--json`;
- puede recibir stdin como contexto;
- puede evitar persistir sesión con `--ephemeral`;
- puede ignorar config o rules con flags específicos.

---

# 5. Comparación: Claude Code vs Codex CLI

## Similitudes

Ambos siguen el mismo patrón fundamental:

```text
Evaluar → usar tool → observar resultado → decidir siguiente paso → repetir
```

Ambos:

- corren en terminal;
- leen y editan archivos;
- ejecutan comandos;
- pueden integrarse con IDEs;
- usan archivos de instrucciones del proyecto;
- soportan MCP;
- manejan permisos;
- acumulan contexto;
- necesitan compaction;
- pueden operar en modo interactivo o headless;
- sirven como harness alrededor del modelo.

## Diferencias de énfasis

### Claude Code

Tiende a presentar el loop como:

```text
Gather context → Take action → Verify results
```

Muy enfocado en:

- interacción humana fluida;
- `CLAUDE.md`;
- memoria;
- skills;
- subagents;
- hooks;
- modos de permisos;
- sesiones largas;
- contexto gestionado desde la experiencia del CLI.

### Codex CLI

OpenAI explica más explícitamente el loop desde la arquitectura:

```text
Responses API → streaming events → function calls → tool results → prompt caching → compaction
```

Muy enfocado en:

- construcción del input;
- roles system/developer/user/assistant;
- stateless requests;
- prompt caching;
- ZDR;
- sandbox;
- `AGENTS.md`;
- `codex exec` para automatización;
- Codex como MCP server para sistemas multiagente.

---

# 6. Lo importante para explicar en la charla

## 6.1 Un agente no es una respuesta larga

Un agente es un loop.

```text
Chatbot:
Pregunta → Respuesta

Agent:
Objetivo → Contexto → Tool → Observación → Acción → Validación → Respuesta
```

## 6.2 La herramienta no “piensa”; el modelo decide cuándo usarla

La tool ejecuta. El modelo decide.

Ejemplo:

```text
Modelo: necesito correr tests.
Harness: ejecuta npm test.
Modelo: interpreta error.
Modelo: edita archivo.
Harness: aplica cambio.
Modelo: corre tests otra vez.
```

## 6.3 El valor está en la observación

La diferencia entre un prompt y un agente está en que el agente puede observar el mundo:

- archivos reales;
- errores reales;
- tests reales;
- diffs reales;
- logs reales;
- respuestas reales de APIs.

Sin observación, el modelo opina. Con observación, puede corregirse.

## 6.4 La validación es parte del loop, no una tarea posterior

El loop maduro no termina en “generé código”.

Termina en:

```text
Generé código
  ↓
Ejecuté validación
  ↓
Leí errores
  ↓
Corregí
  ↓
Volví a validar
  ↓
Reporté evidencia
```

## 6.5 Los límites importan

Sin límites, el agente puede:

- gastar demasiados tokens;
- llenar contexto;
- correr comandos riesgosos;
- editar más de la cuenta;
- perseguir objetivos ambiguos;
- entrar en loops improductivos.

Por eso importan:

- `max_turns`;
- presupuesto;
- sandbox;
- approval policy;
- allowed tools;
- hooks;
- specs;
- done criteria.

---

# 7. Visual recomendado para la documentación

## Diagrama simple del loop

```text
┌─────────────────────┐
│ Objetivo del usuario │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Contexto del proyecto│
│ AGENTS / CLAUDE / docs│
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Modelo razona        │
│ próximo paso         │
└──────────┬──────────┘
           ↓
      ¿Necesita tool?
       /           \
     sí             no
     ↓              ↓
┌──────────────┐   ┌────────────────┐
│ Ejecutar tool│   │ Respuesta final │
│ read/edit/sh │   └────────────────┘
└──────┬───────┘
       ↓
┌─────────────────────┐
│ Observación          │
│ output/error/diff    │
└──────────┬──────────┘
           ↓
      repetir loop
```

## Diagrama aplicado a coding

```text
Leer repo
  ↓
Entender patrón
  ↓
Planear cambio
  ↓
Editar
  ↓
Correr tests
  ↓
¿Fallan?
  ├─ Sí → leer error → corregir → correr tests
  └─ No → resumir evidencia y terminar
```

---

# 8. Cómo conectarlo con la audiencia UTN

La audiencia hoy usa IA para CRUDs, dudas, planificación y revisión. El agent loop permite explicarles qué falta para pasar de uso puntual a flujo profesional.

## Antes

```text
“Haceme un CRUD.”
```

## Después

```text
“Implementá este CRUD siguiendo el patrón existente.
Leé primero users.
Editá productos.
Agregá tests.
Corré lint y test.
Si falla, corregí.
Terminá solo cuando pase la validación.”
```

El salto conceptual:

```text
No le estoy pidiendo una respuesta.
Le estoy definiendo un loop de trabajo.
```

---

# 9. Recomendaciones para la charla

## 9.1 Introducir agent loop antes de MCP y skills

MCP y skills se entienden mejor si primero se entiende el loop.

Orden recomendado:

```text
1. Chatbot vs agente
2. Agent loop
3. Tools
4. Validación
5. Harness
6. Skills
7. MCP
8. Subagents / orquestación
```

## 9.2 Mostrar una demo conceptual, no solo teoría

Ejemplo de demo:

```text
Tarea: arreglar un test que falla.

Loop:
1. correr test;
2. leer error;
3. buscar archivo relacionado;
4. editar;
5. correr test otra vez;
6. reportar evidencia.
```

Aunque no se ejecute en vivo, el flujo debería quedar explícito.

## 9.3 Usar la frase “done when”

El loop necesita una condición de cierre.

Ejemplo:

```text
Done when:
- npm test pasa;
- npm run lint pasa;
- el endpoint responde 201 y 400 según casos;
- el diff no modifica módulos fuera del alcance.
```

Esto enseña que la autonomía depende de validación.

## 9.4 Explicar por qué a veces el agente falla

Muchos errores de agentes no son “el modelo es malo”, sino problemas del loop:

- no tenía contexto suficiente;
- usó una tool incorrecta;
- recibió output demasiado grande;
- no validó;
- no tenía permisos;
- el objetivo era ambiguo;
- no había stopping condition;
- el contexto se degradó.

Esto es muy útil pedagógicamente porque devuelve control al desarrollador.

## 9.5 Presentar loop engineering como madurez futura

Después de explicar el loop básico, se puede decir:

> Loop engineering es diseñar explícitamente cómo un agente avanza, valida, decide si sigue y decide si terminó.

No hace falta profundizar demasiado, pero sí dejarlo como siguiente nivel.

---

# 10. Frases útiles para la charla

> Un chatbot responde. Un agente itera.

> El modelo razona; el harness ejecuta.

> La tool no es inteligencia. Es superficie de acción.

> La observación es lo que permite corregir el rumbo.

> Un agente serio no termina cuando escribió código; termina cuando puede mostrar evidencia.

> Si no definís “done”, el agente decide por vos. Y rara vez conviene tercerizar el criterio.

> Agent loop es la diferencia entre pedir una respuesta y dirigir un proceso.

---

# 11. Fuentes consultadas

- Anthropic / Claude Code Docs — “How the agent loop works”.
- Anthropic / Claude Code Docs — “How Claude Code works”.
- Anthropic / Claude Code Docs — “Run Claude Code programmatically”.
- OpenAI — “Unrolling the Codex agent loop”.
- OpenAI Developers — “Non-interactive mode” para Codex CLI.
- OpenAI Developers — “Building Consistent Workflows with Codex CLI & Agents SDK”.
- OpenAI Codex GitHub repository y documentación de configuración.

---

# 12. Conclusión

El agent loop es la pieza que convierte a un LLM en un agente de desarrollo.

En Claude Code aparece como:

```text
Gather context → Take action → Verify results
```

En Codex aparece como:

```text
Responses API → function calls → tool execution → appended results → repeat
```

En ambos casos, la idea es la misma: el agente observa, actúa, valida y repite.

Para la charla, este concepto es fundamental porque conecta directamente con la audiencia. Ellos ya usan IA para pedir ayuda; el siguiente paso es enseñarles a diseñar mejores loops de trabajo.

La recomendación final:

> Antes de hablar de MCP, skills o agentes autónomos, explicaría agent loop. Es el puente mental que permite entender todo lo demás.
