# Investigación X — buenas prácticas para desarrollar con agentes

> Fuente: guardados/bookmarks de X del usuario + tweets/artículos del perfil [`@santtiagom_`](https://x.com/santtiagom_).
>
> Criterio: relevancia para la charla “Diseñando el futuro del desarrollo con GenAI”: Context Engineering, Spec-Driven Development, evals, tools/MCP, subagents y orquestación.

## Alcance de la búsqueda

- Bookmark GraphQL usado: `BookmarkSearchTimeline` (`ioP4Xb7LV__rVXS2f88ayg`).
- Candidatos únicos recolectados: **157**.
- Tweets recientes analizados de `@santtiagom_`: **21**.
- Entradas del tab Articles de `@santtiagom_`: **4**.

Consultas usadas en bookmarks:

- `agent` → 20
- `agents` → 20
- `AI agents` → 20
- `coding agents` → 5
- `Claude Code` → 20
- `Codex` → 19
- `Cursor` → 20
- `context engineering` → 3
- `spec-driven development` → 4
- `SDD` → 1
- `evals` → 3
- `MCP` → 20
- `subagents` → 3
- `orchestration` → 0
- `vibe coding` → 6
- `tools for agents` → 0
- `agentes IA` → 13
- `contexto agentes` → 0

## Top 20 recomendado

### 1. @Zachly — score 66.18

- **Fuente:** `bookmarks`
- **Link:** https://x.com/Zachly/status/1965833527897038912
- **Tema:** Context Engineering, SDD / specs, Evals / calidad
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** AI Engineering has levels to it: – Level 1: Using AI Start by mastering the fundamentals: -- Prompt engineering (zero-shot, few-shot, chain-of-thought) -- Calling APIs (OpenAI, Anthropic, Cohere, Hugging Face) -- Understanding tokens, context windows, and parameters (temperature, top-p) With just these basics, you can already solve real problems. – Level 2: Integrating AI Move from using AI to building with it: -- Retrieval Augmented Generation (RAG) with vector databases (Pinecone, FAISS, Weaviate, Milvus) -- Embeddings and similarity search (cosine, Euclidean, dot product) -- Caching and batching for cost and latency improvements -- Agents…

### 2. @elune0x — score 62.42

- **Fuente:** `bookmarks`
- **Link:** https://x.com/elune0x/status/2082493878238576748
- **Tema:** Context Engineering, Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** the loop is not the agent it is one layer of the system LOOP vs GRAPH vs HARNESS ENGINEERING LOOP ENGINEERING controls repetition turns retries budgets exits success checks no progress use durable execution when the run must survive failure → https://t.co/rX08Ugw1Yy GRAPH ENGINEERING controls topology nodes edges state branches checkpoints handoffs build stateful agents as explicit graphs → https://t.co/ACgBjw6XK4 analyze the topology without putting a model in the loop → https://t.co/0GiC8o7Ei9 HARNESS ENGINEERING controls the blast radius tools permissions memory sandboxes evals traces humans isolate generated code from the host → https://…

### 3. @G_Programming — score 61.22

- **Fuente:** `bookmarks`
- **Link:** https://x.com/G_Programming/status/2023452982725976269
- **Tema:** Context Engineering, Agentes / orquestación, Tools / MCP
- **Por qué sirve para la charla:** Usarlo para Context Engineering: el rendimiento del agente depende del sistema alrededor del modelo.
- **Extracto:** Tu agente de IA se olvida de TODO cuando cierra la sesión. Cada decisión de arquitectura. Cada bug que resolvió. Cada patrón que descubrió. Perdido. La siguiente sesión arranca de cero. Como si nunca hubiera pasado nada. Hoy lanzo Engram — memoria persistente para agentes de IA. Un solo binario en Go. SQLite + FTS5. Sin Node, sin Python, sin Docker, sin ChromaDB. Funciona con CUALQUIER agente MCP: Claude Code, OpenCode, Cursor, Windsurf, Gemini CLI. ¿Cómo funciona? El agente trabaja con vos. Resuelve un bug → lo guarda. Toma una decisión de arquitectura → la guarda. Descubre un patrón → lo guarda. Todo estructurado, indexado, buscable. Sigui…

### 4. @santtiagom_ — score 60.5

- **Fuente:** `bookmarks`
- **Link:** https://x.com/santtiagom_/status/2063629388663361691
- **Tema:** Context Engineering, SDD / specs, Evals / calidad
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** OpenAI publicó una guía de buenas prácticas para Codex. Me quedo con estas ideas: 1) Context → explicá el objetivo y cómo se ve un buen resultado. 2) Planning → usá /plan para tareas complejas. 3) AGENTS.md → guardá instrucciones repetidas. 4) Configuration → definí una vez modelos, permisos y herramientas. 5) Validation → enseñale cómo verificar resultados. 6) MCP → acceso a GitHub, docs y bases de datos. 7) Skills → convertí workflows repetidos en Skills. 8) Automations → automatizá tareas que ya hacés manualmente. 9) Subagents → delegá investigación, testing o debugging. Cuanto mejor diseñado está el entorno, más trabajo puede hacer el ag…

### 5. @aiwithmayank — score 58.83

- **Fuente:** `bookmarks`
- **Link:** https://x.com/aiwithmayank/status/2022646689648251382
- **Tema:** Context Engineering, Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** 🚨 Prompt engineering is officially outdated. Anthropic just released the real playbook for building AI agents that actually work. It’s a 30+ page deep dive called The Complete Guide to Building Skills for Claude and it quietly shifts the conversation from “prompt engineering” to real execution design. Here’s the big idea: A Skill isn’t just a prompt. It’s a structured system. You package instructions inside a https://t.co/aldvvbZeVI file, optionally add scripts, references, and assets, and teach Claude a repeatable workflow once instead of re-explaining it every chat. But the real unlock is something they call progressive disclosure. Instead…

### 6. @omarsar0 — score 55.82

- **Fuente:** `bookmarks`
- **Link:** https://x.com/omarsar0/status/1987167737639325886
- **Tema:** Context Engineering, Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** The most effective AI Agents are built on these core ideas. It's what powers Claude Code. It's referred to as the Claude Agent SDK Loop, which is an agent framework to build all kinds of AI agents. (bookmark it) The loop involves three steps: Gathering Context: Use subagents (parallelize them for task efficiency when possible), compact/maintain context, and leverage agentic/semantic search for retrieving relevant context for the AI agent. Hybrid search approaches work really well for domains like agentic coding. Taking Action: Leverage tools, prebuilt MCP servers, bash/scripts (Skills have made it a lot easier), and generate code to take act…

### 7. @AndrewYNg — score 53.87

- **Fuente:** `bookmarks`
- **Link:** https://x.com/AndrewYNg/status/2044449830605582629
- **Tema:** Context Engineering, SDD / specs, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** New course: Spec-Driven Development with Coding Agents, built in partnership with @jetbrains, and taught by @paulweveritt. Vibe coding is fast, but often produces code that doesn't match what you asked for. This short course teaches you spec-driven development: write a detailed spec defining what to build, and work with your coding agent to implement it. Many of the best developers already build this way. A spec lets you control large code changes with a few words, preserve context across agent sessions, and stay in control as your project grows in complexity. Skills you'll gain: - Write a detailed specification to define your mission, tech…

### 8. @FaztTech — score 53.32

- **Fuente:** `bookmarks`
- **Link:** https://x.com/FaztTech/status/2084396566421586250
- **Tema:** Context Engineering, SDD / specs, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** Todo el mundo habla de orquestación de agentes como si fuera magia. la verdad es que si mantienes un solo proyecto, es más trabajo del que ahorra. Pero si tienes varios proyectos en paralelo, combinar Claude + Codex + Opencode o cualquier otro agente te ahorra bastante dinero. Así funciona 👇 La idea: usas un modelo caro como Claude Fable solo para planificar (~$50 por millón de tokens de salida) y delegas la ejecución a modelos mucho más baratos como Codex, Kimi o DeepSeek, que en tareas simples rinden prácticamente igual. Hay 3 niveles para lograrlo: 1️⃣ Multiplexores (tmux, psmux): divides la terminal y corres un agente en cada pantalla. B…

### 9. @akshay_pachaar — score 52.95

- **Fuente:** `bookmarks`
- **Link:** https://x.com/akshay_pachaar/status/2086079311279493389
- **Tema:** Context Engineering, SDD / specs, Evals / calidad
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** Stanford researchers did it again. They just built the agent-native version of Git. When an agent works on a longer task, the run builds up a lot of state. This includes files edited/created, a dev server, a database, installed packages, KV cache, etc. Say the agent is at step 10 and makes a mistake, maybe it misreads a traceback and rewrites a file that was actually fine. The tests start failing, and the run goes off track, although everything through step eight was correct. By default, the agent just tries to fix it, which creates more edits and tool calls. This burns more tokens and grows the context. The other options are a person steppi…

### 10. @beamnxw — score 51.13

- **Fuente:** `bookmarks`
- **Link:** https://x.com/beamnxw/status/2085787859680637092
- **Tema:** Context Engineering, SDD / specs, Evals / calidad
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** This paper is f*cking brilliant A computer science paper formalizes filesystem-based memory as the long-term storage architecture for autonomous AI agents The result: agents organizing their own memory trees as markdown files roughly halve retrieval costs on large context stores The crazy part is how tool harnesses reshape memory organization as strongly as swapping the underlying LLM A management agent organizes incoming experience into hierarchical markdown files, a search agent retrieves paths with citations, and an execution agent distills trajectories into skills Most agent developers rely on opaque vector stores or flat database logs T…

### 11. @hanakoxbt — score 48.15

- **Fuente:** `bookmarks`
- **Link:** https://x.com/hanakoxbt/status/2084766994726060373
- **Tema:** Context Engineering, Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** your agent did not finish the task. it ran out of things to say. these are different events and your trace records them identically. a run can end five ways. the stop condition was met. a test passed, a file exists, a value came back matching. the model stopped calling tools. it had nothing more to emit, which is not the same as having nothing more to do. max iterations fired. the harness killed it mid-thought. the token budget ran out. the window filled before the work finished. the model said it was done. and nothing checked that claim. from the outside all five look the same. tokens stopped moving, tool calls stopped arriving, the run wen…

### 12. @_guillecasaus — score 48.14

- **Fuente:** `bookmarks`
- **Link:** https://x.com/_guillecasaus/status/2072701807290110212
- **Tema:** Context Engineering, Agentes / orquestación, Tools / MCP
- **Por qué sirve para la charla:** Usarlo para Context Engineering: el rendimiento del agente depende del sistema alrededor del modelo.
- **Extracto:** El kernel de Linux tiene 28 millones de líneas de código. Han creado un MCP capaz de indexarlo por completo en solo 3 minutos. Se llama Codebase Memory MCP y crea un grafo de conocimiento del repositorio para que los agentes de IA puedan entender el código sin recorrer archivo por archivo. Esto es lo que consigue: → Reduce el consumo de contexto hasta un 99% → Responde consultas sobre el código en menos de 1 ms → Compatible con Claude Code, Cursor, Gemini CLI y muchos más Lo más interesante: Los agentes de IA suelen recorrer miles de archivos para entender un proyecto, consumiendo una enorme cantidad de contexto y tokens. Codebase Memory MCP…

### 13. @santtiagom_ — score 47.54

- **Fuente:** `bookmarks`
- **Link:** https://x.com/santtiagom_/status/2035102993029169462
- **Tema:** Context Engineering, Agentes / orquestación, Tools / MCP
- **Por qué sirve para la charla:** Usarlo para Context Engineering: el rendimiento del agente depende del sistema alrededor del modelo.
- **Extracto:** Si querés entender cómo funcionan los agentes de IA, este video lo explica muy bien. Vas a aprender: - la diferencia entre chat y agentes (responder vs ejecutar una tarea completa) - por qué trabajan en loops hasta terminar lo que empezaron - qué rol juegan el modelo, el contexto y las tools - cómo conectarlos con sistemas reales usando MCP - cómo definir su comportamiento con claude, memory y skills 58 min, gratis. Vale la pena.

### 14. @santtiagom_ — score 46.25

- **Fuente:** `bookmarks`
- **Link:** https://x.com/santtiagom_/status/2055751665345798628
- **Tema:** Context Engineering, Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** Muy buen artículo de OpenAI sobre Harness Engineering y Codex. Explican cómo usaron agentes para construir un producto interno con ~1M de líneas de código y qué problemas aparecieron en el proceso. Algunas ideas interesantes: • evitar que el código generado por agentes se degrade con el tiempo • usar tests y CI como restricciones más confiables que prompts • mantener código y documentación legible para agentes • cómo cambia el trabajo de los engineers cuando los agentes empiezan a programar Gran parte del desafío está en el sistema alrededor del modelo.

### 15. @santtiagom_ — score 45.19

- **Fuente:** `bookmarks+santtiagom_profile`
- **Link:** https://x.com/santtiagom_/status/2083280675915042843
- **Tema:** Context Engineering, Agentes / orquestación, Tools / MCP
- **Por qué sirve para la charla:** Usarlo para Context Engineering: el rendimiento del agente depende del sistema alrededor del modelo.
- **Extracto:** muy buen artículo sobre cómo OpenAI hace que agentes como Codex sean más rápidos y eficientes. cuando un agente resuelve una tarea, no hace una sola llamada al modelo. entra en un loop: analiza, usa una tool, observa el resultado y continúa. en tareas largas, esto puede repetirse decenas de veces. el problema es que cada vuelta puede volver a enviar, tokenizar y procesar información que el sistema ya conoce. para evitarlo, OpenAI optimiza cada parte del sistema: 1) usa WebSockets para mantener una sola conexión abierta y enviar únicamente la información nueva 2) mantiene estable el inicio del prompt para aprovechar mejor el prompt caching 3)…

### 16. @AlfieJCarter — score 41.86

- **Fuente:** `bookmarks`
- **Link:** https://x.com/AlfieJCarter/status/2042653637306949677
- **Tema:** Context Engineering, SDD / specs, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para reforzar SDD: specs, planificación y validación como contrato antes de implementar.
- **Extracto:** I put the entire Claude Code GTM Engineering Playbook into ONE Notion doc. 8 sections. No fluff. - How to get set up correctly from day one: Pro plan, terminal install across Mac, Linux, and Windows, GUI install via Antigravity or VS Code, and bypass permissions mode - What to put in your project brain file, what to leave out, and how to get Claude to update it automatically when it keeps making the same mistake - How to run plan mode step by step and when to skip it for simple tasks - How to build a skill file from scratch, fix one that keeps failing, and install 5 GTM skills worth building first: lead scraping, email labeling, proposal gen…

### 17. @santtiagom_ — score 41.41

- **Fuente:** `santtiagom_profile`
- **Link:** https://x.com/santtiagom_/status/2083224527794823311
- **Tema:** Agentes / orquestación, Tools / MCP
- **Por qué sirve para la charla:** Usarlo para explicar tools/MCP: conectar contexto y acciones reales sin inflar innecesariamente la ventana.
- **Extracto:** curso de Google para aprender agentes desde cero. el roadmap: 1) crear tu primer agente 2) conectarle tools con MCP 3) loop engineering 4) construir un sistema autónomo completo además, incluye temas como sistemas multi-agente, streaming y A2A.

### 18. @tessl_io — score 41.0

- **Fuente:** `bookmarks`
- **Link:** https://x.com/tessl_io/status/2042537399750693284
- **Tema:** Context Engineering, Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** We version code, test it, review it, observe it. But the context driving AI agents is still copy-pasted, hand-edited, and largely unmanaged. We’re in the cowboy era of context. Today at @aiDotEngineer, @patrickdebois shares what comes next: → treating context like code → applying a lifecycle (generate, evaluate, distribute, observe) → building feedback loops that compound over time If you’re building with agents, this is one to catch. See you there!

### 19. @santtiagom_ — score 40.45

- **Fuente:** `santtiagom_profile`
- **Link:** https://x.com/santtiagom_/status/2082984598313537767
- **Tema:** Evals / calidad, Agentes / orquestación
- **Por qué sirve para la charla:** Usarlo para la sección de Evals: delegar más exige señales externas de calidad, no confianza ciega.
- **Extracto:** revisar el código que generan los agentes se está volviendo el gran cuello de botella. es imposible seguirles el ritmo. cada vez vamos a necesitar mejores sistemas de validación alrededor: - tests - builds - linters y type checks - agentes revisores - evals - observabilidad la clave es que toda esa evidencia permita comprobar que el cambio funciona, cubre los casos importantes y no introduce regresiones. cuanto más confiables sean esas señales, más trabajo vamos a poder delegar.

### 20. @juliandeangeIis — score 39.38

- **Fuente:** `bookmarks`
- **Link:** https://x.com/juliandeangeIis/status/1952931646400872922
- **Tema:** Context Engineering, Agentes / orquestación, Tools / MCP
- **Por qué sirve para la charla:** Usarlo para Context Engineering: el rendimiento del agente depende del sistema alrededor del modelo.
- **Extracto:** Ya que es temprano, armo hilo del MCP de playwright en Claude Code + sub agents Hay un dato que LOS SORPRENDERÁ 🧵😱 Más allá del clickbait, hay dos detalles claves, uno es sobre playwright, que lo vemos después. Lo principal es que los sub agents de claudio tienen una ventana de contexto *independiente*

## Síntesis para incorporar a la charla

1. **El modelo no es el sistema.** Los mejores tweets insisten en que el agente real es modelo + harness + tools + memoria + validación.
2. **Context is the new code.** El contexto debe versionarse, evaluarse y mantenerse como cualquier artefacto técnico.
3. **SDD aparece como respuesta al vibe-coding.** La spec preserva intención, reduce ambigüedad y permite iterar con control.
4. **Evals y tests son el permiso para delegar.** Cuanto mejores son las señales externas, más autonomía puede tener el agente.
5. **Orquestar no es sumar magia; es diseñar topología.** Lo relevante es decidir cuándo usar loops, grafos, subagentes, permisos y handoffs.
6. **Tools/MCP expanden capacidad, pero también riesgo.** Hay que controlar blast radius, permisos, observabilidad y costos de contexto.

## Posibles agregados al contenido actual

- Agregar una distinción clara entre **loop engineering**, **graph engineering** y **harness engineering**.
- Incluir una slide de “cinco formas en que un agente termina” para separar éxito real de salida silenciosa.
- Reforzar que `/checklist`, tests, linters, builds y code review son evidencia externa, no opinión del modelo.
- Agregar un ejemplo de memoria persistente por proyecto para mostrar cómo reducir re-explicación entre sesiones.
- Incorporar un bloque de seguridad: permisos, sandboxes, credenciales y proxies para agentes con acceso real.
