# Research X — Skills, MCP y Harness Engineering

Fecha: 2026-08-11

## Alcance

Investigación rápida sobre conversaciones en X alrededor de:

- skills para agentes;
- MCP / Model Context Protocol;
- harness engineering;
- AGENTS.md / Codex / Claude Code;
- perfiles similares a `@santtiagom_`.

Fuentes consultadas:

- perfil X autenticado de `@santtiagom_`;
- perfiles similares: `@addyosmani`, `@dexhorthy`, `@_avichawla`, `@petergyang`, `@OpenAIDevs`, `@Vtrivedy10`, `@sairahul1`, `@beamnxw`;
- resultados indexados de X vía DuckDuckGo para búsquedas como `harness engineering agents`, `AGENTS.md Codex`, `MCP Claude Code skills`.

Nota: el endpoint GraphQL `SearchTimeline` de X respondió HTTP 404 durante la prueba; por eso la parte de búsqueda amplia se apoyó en resultados indexados y scraping autenticado de perfiles concretos.

## Perfil principal: `@santtiagom_`

**Nombre:** santi  
**Bio:** coding at Mercado Libre; escribe sobre AI & system design en forma simple; construyendo `@owlight_app`.  
**Ubicación:** Buenos Aires, Argentina.  
**Seguidores al momento de la consulta:** ~60.6k.

### Lectura del perfil

Santi está posicionándose como divulgador técnico de AI, agentes y system design para audiencia hispanohablante. Su diferencial es explicar conceptos complejos de forma simple y práctica. Para la charla UTN encaja muy bien porque:

- habla en español rioplatense / LATAM;
- baja conceptos de agentes a ejemplos cotidianos de desarrollo;
- conecta herramientas concretas — Codex, Claude Code, AGENTS.md, guardrails — con prácticas de ingeniería;
- recomienda estudiar desde first principles y complementar con artículos;
- insiste en harness engineering como inversión clave.

### Tweets / ideas relevantes detectadas

- **Harness engineering como inversión:** publicó que aprender sobre harness engineering y agentes es una de las mejores inversiones actuales.
- **Ruta de aprendizaje:** recomienda estudiar con IA desde first principles, hacer preguntas hasta entender y luego complementar con artículos. También compartió recursos para aprender agentes y harness engineering.
- **AGENTS.md:** explicó que se pueden usar varios `AGENTS.md` jerárquicos: global, repo y subcarpeta. La regla importante es que las instrucciones más específicas deben tener prioridad.
- **Validación como cuello de botella:** sostiene que revisar código generado por agentes se vuelve el gran cuello de botella; la solución es rodear al agente con tests, builds, linters, type checks, agentes revisores, evals y observabilidad.
- **Guardrails:** define guardrails como mecanismos para evitar acciones inseguras, incorrectas o no autorizadas. Los ubica en todo el workflow: acceso, detección de prompt injection, validación de contexto, tools, permisos, sandbox, revisión humana y validación final.
- **Eficiencia de agentes:** resumió optimizaciones de OpenAI/Codex: WebSockets, prompt caching, deferred tool discovery, tool calls paralelas, procesamiento incremental, KV cache y separación prompt/generación.

## Qué se está recomendando en X

### 1. Menos contexto pegado; más herramientas para recuperar contexto

Una recomendación recurrente: no llenar el prompt de documentación completa. Darle al agente herramientas para buscar el contexto que necesita.

Ejemplo destacado: Peter Yang resume una conversación con Linear con la frase:

> Give agents tools to find context instead of stuffing context into the prompt.

Traducción operativa para la charla:

- evitar prompts enormes;
- mapear dónde vive el contexto real: Slack, issues, docs, PRs, dashboards;
- conectar tools acotadas para recuperar solo lo necesario;
- mantener instrucciones mínimas y estables.

### 2. Skills como comportamiento versionado, no como texto mágico

Viv Trivedi remarca que las skills son comportamientos que se inyectan en el agente y deberían revisarse con rigor similar al código.

Recomendaciones:

- escribir skills manualmente cuando importan mucho;
- revisar cada palabra porque modifica la conducta del agente;
- evitar delegar ciegamente a otro LLM la escritura de skills críticas;
- auditar skills periódicamente para evitar drift;
- borrar skills no usadas para reducir token bloat.

Addy Osmani también recomienda correr auditorías tipo `/doctor` en Claude Code o pedir a Codex revisar skills, MCPs y uso de contexto para detectar elementos instalados que ya no aportan.

### 3. MCP con criterio, no como fetiche de integración

La conversación no trata MCP como “conectemos todo”, sino como una forma de dar acceso a sistemas vivos cuando realmente hace falta.

Buenos candidatos:

- Slack / Teams: contexto conversacional y decisiones recientes;
- Jira / Linear: tickets, criterios de aceptación, prioridades;
- observabilidad: Datadog, Grafana, Sentry, logs;
- bases de conocimiento: Confluence, Notion, Drive, wikis;
- navegador / Chrome DevTools / Playwright: DOM, consola, network, screenshots;
- dependencias: npm, PyPI, GitHub Releases, CVEs;
- sistemas internos: ownership, feature flags, catálogos, deploys.

Regla recomendada:

> MCP debería mejorar lectura, acción o validación. Si no mejora ninguna de esas tres, probablemente solo agrega superficie de riesgo.

### 4. AGENTS.md como contrato de trabajo breve y jerárquico

Se habla bastante de `AGENTS.md` para Codex y agentes similares.

Recomendaciones:

- mantenerlo corto;
- incluir comandos reales de test/lint/build;
- documentar convenciones críticas;
- definir qué significa “done”;
- usar links a docs específicas en vez de pegar toda la documentación;
- en monorepos, usar `AGENTS.md` por carpeta/servicio cuando las reglas cambian;
- evitar contradicciones entre niveles.

OpenAI Developers también comunicó que Codex Security Review puede usar reglas custom del repo en `AGENTS.md`, lo que refuerza la idea de tratarlo como parte del harness.

### 5. Harness, loop y graph como capas distintas

En los perfiles técnicos aparece una separación interesante:

- **Harness Engineering:** entorno donde opera el agente: contexto, tools, permisos, memoria, aislamiento, observabilidad.
- **Loop Engineering:** ciclo de trabajo: objetivo, acción, evidencia, validación, stopping rule.
- **Graph Engineering:** control explícito del flujo: nodos, estado, routing, concurrencia, recuperación, aprobación humana.

Esta distinción sirve mucho para la charla porque evita mezclar todo bajo “agentes”.

### 6. La validación es el verdadero cuello de botella

Tema muy repetido: generar código es cada vez más barato; revisar y confiar en ese código es el problema.

Recomendaciones detectadas:

- tests automáticos;
- linters y type checks;
- builds reproducibles;
- browser automation cuando aplica;
- agentes revisores;
- evals;
- observabilidad;
- human-in-the-loop para acciones riesgosas;
- evidencia explícita antes de declarar “listo”.

### 7. Producción requiere guardrails de extremo a extremo

La autonomía aumenta el riesgo. Por eso aparecen recomendaciones de guardrails en varias capas:

- autenticación y límites de uso;
- detección de prompt injections;
- validación de contexto recuperado;
- control de parámetros de tools;
- sandbox para ejecución;
- permisos acotados;
- aprobación humana para acciones irreversibles;
- validación de output y datos sensibles;
- auditoría de herramientas usadas.

## Perfiles similares para seguir

### `@addyosmani` — Addy Osmani

Perfil fuerte para: agent skills, engineering practice, performance, dev tooling.  
Recomendación detectada: auditar periódicamente skills, MCPs y contexto para evitar token bloat y configuraciones olvidadas.

### `@dexhorthy` — Dex Horthy

Perfil fuerte para: HumanLayer, human-in-the-loop, agentic IDEs, workflows de software factory.  
Idea destacada: pasar de “AI slop code” a Research → Plan → Implement con estándares rigurosos.

### `@Vtrivedy10` — Viv Trivedi

Perfil fuerte para: LangChain Labs, deep agents, harness engineering, skills, evaluación.  
Idea destacada: las skills son comportamiento inyectado y deben revisarse con rigor de código.

### `@petergyang` — Peter Yang

Perfil fuerte para: AI aplicada, entrevistas con builders, agentes en producto.  
Idea destacada: mapear el workflow real antes de construir el agente; darle tools para cargar contexto en vez de pegar contexto en el prompt.

### `@_avichawla` — Avi Chawla

Perfil fuerte para: LLMs, RAG, agentes, material educativo.  
Idea destacada: exceso de memoria/contexto puede empeorar agentes largos; plan-and-act y context management son problemas de ingeniería.

### `@OpenAIDevs` — OpenAI Developers

Perfil fuerte para: anuncios oficiales de Codex, Agent Plugins, AGENTS.md, seguridad.  
Idea destacada: Agent Plugins empaqueta Agent Skills y configuraciones MCP en formato compartido entre clientes compatibles.

### `@beamnxw`

Perfil fuerte para: curaduría de repositorios, orquestación de agentes, conceptos de harness/loop/graph.  
Idea destacada: distinguir harness, loop y graph como capas separadas de confiabilidad.

### `@sairahul1` — Rahul

Perfil fuerte para: tendencias AI, agentes, contenido de alto alcance.  
Útil para detectar temas virales, aunque menos profundo técnicamente que Santi, Viv, Addy o Dex.

## Recomendaciones para incorporar en la documentación UTN

### Agregar sección: “Qué recomienda la comunidad técnica”

Puntos sugeridos:

1. **No pegues todo el contexto: diseñá recuperación de contexto.**
2. **Tratás las skills como código: versionadas, revisadas y podadas.**
3. **Usá MCP solo cuando conecte sistemas vivos o acciones reales.**
4. **`AGENTS.md` debe ser un índice operativo, no una enciclopedia.**
5. **El harness define permisos, tools, contexto, memoria y observabilidad.**
6. **El loop define cuándo seguir, cuándo validar y cuándo parar.**
7. **El graph define flujos complejos, paralelismo y aprobaciones.**
8. **La validación es lo que permite delegar más trabajo.**
9. **Guardrails no son opcionales cuando hay autonomía.**

### Agregar mini-slide visual

Título: **De prompt a harness**

```text
Prompt suelto
  ↓
AGENTS.md / rules
  ↓
Skills reutilizables
  ↓
Tools / MCPs
  ↓
Validación automática
  ↓
Guardrails + human approval
  ↓
Harness de proyecto
```

### Agregar criterio práctico para MCP

```text
¿La integración permite leer mejor, actuar mejor o validar mejor?

Sí → evaluar MCP / CLI / skill.
No → no agregar; solo aumenta ruido, permisos y costo.
```

### Agregar criterio práctico para skills

```text
Una skill debería existir cuando:

- el workflow se repite;
- hay pasos no obvios;
- hay errores frecuentes que prevenir;
- el equipo quiere comportamiento consistente;
- se puede verificar si funcionó.

Si no cumple eso, probablemente es prompt temporal, no skill.
```

## Conclusión

La conversación en X está moviéndose desde “qué modelo uso” hacia “cómo diseño el sistema alrededor del modelo”. El consenso práctico es bastante claro:

- menos magia de prompt;
- más contexto curado;
- tools acotadas;
- skills revisadas;
- MCP solo donde aporta;
- validación sistemática;
- guardrails para autonomía;
- harness como producto de ingeniería.

Para la charla, esto refuerza la tesis central: el futuro del desarrollo con GenAI no es escribir prompts más largos, sino diseñar mejores sistemas de trabajo para agentes.
