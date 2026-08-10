# Charla GenAI UTN — Material

> Fuente inicial: `Charla-GenAI-UTN-Material.docx`  
> Estado: primera versión editada y estructurada en Markdown.  
> Objetivo: material base para preparar charla, slides, speaker notes y demos.

## Título

**Diseñando el futuro del desarrollo con GenAI**

Cómo dirigir agentes de desarrollo para generar software escalable, predecible y de calidad.

Técnicas que usan equipos de ingeniería modernos: **Context Engineering**, **Spec-Driven Development**, **evaluación de agentes** y **orquestación**.

## Oradores

- **Alan Julián De Angelis** — GenAI Technical Leader, Mercado Libre.
- **Luciano Rodriguez** — GenAI Software Engineer, Mercado Libre.

## Índice

1. [Introducción](#introducción)
2. [Apertura: el nuevo ciclo de desarrollo](#1-apertura-el-nuevo-ciclo-de-desarrollo)
3. [Por qué la IA sola no alcanza](#2-por-qué-la-ia-sola-no-alcanza)
4. [Context Engineering](#3-context-engineering)
5. [Spec-Driven Development](#4-spec-driven-development-sdd)
6. [Evals](#5-evals)
7. [Orquestación de agentes](#6-orquestación-de-agentes)
8. [Cierre](#7-cierre)
9. [Referencias](#8-referencias)

---

# Introducción

El rol del ingeniero de software evolucionó con la llegada de la IA generativa: de escribir código a **diseñar contexto**, **dirigir agentes** y **tomar decisiones de mayor valor**.

La tesis central de la charla es que el valor de desarrollar software de calidad se duplicó, porque ahora no alcanza con dominar ingeniería de software: también hay que aprender a dirigir los agentes que ejecutan parte de ese trabajo.

> **Tesis central:** “El valor de desarrollar software de calidad se ha duplicado.”

---

# 1. Apertura: el nuevo ciclo de desarrollo

Hoy contamos con una nueva capa de abstracción: **agentes de IA capaces de escribir, modificar, probar y revisar código**.

Pero esta nueva capa abre dos caminos muy distintos.

## Los dos caminos

### Camino fácil: vibe-coding

Delegar tareas al agente con prompts simples y esperar que “resuelva”.

En la práctica suele traer:

- muchas iteraciones;
- calidad por debajo de lo esperado;
- pérdida de contexto;
- correcciones largas;
- soluciones que funcionan en aislamiento pero no encajan bien en el sistema real.

### Camino que escala: desarrollo estructurado

Trabajar con:

- especificaciones como contrato;
- evaluaciones que midan calidad;
- contexto diseñado explícitamente;
- comandos y flujos repetibles;
- revisión humana en puntos críticos;
- agentes orquestados según rol y objetivo.

## Mensaje clave

El valor del software de calidad se duplicó porque el ingeniero debe estar en los detalles y pensar tanto en el producto como en lo técnico.

La nueva responsabilidad es preparar a esta capa de abstracción para que construya exactamente lo que se necesita, sin degradar la salud del sistema.

---

# 2. Por qué la IA sola no alcanza

Los agentes de IA, usados de forma aislada, tienen límites que impiden entregar software de calidad por sí solos.

## Límites principales

### Ventana de contexto limitada

No pueden ver el sistema completo. Trabajan con fragmentos y no siempre entienden la arquitectura global del producto.

### Capacidades acotadas

Pueden generar código correcto en aislamiento, pero desconocen reglas de negocio, restricciones reales y decisiones previas del equipo.

### Conocimiento empresarial ausente

No conocen integraciones internas, APIs legacy ni decisiones de diseño que solo el equipo maneja.

### Producto ≠ código

Un buen producto necesita visión de conjunto: UX, escalabilidad, mantenibilidad, observabilidad y trade-offs técnicos. Los agentes no piensan automáticamente como product engineers.

## Conclusión

La IA puede acelerar el desarrollo, pero no reemplaza la ingeniería. Sin contexto, sin especificaciones y sin validación, solo acelera la producción de deuda técnica. Un destino pintoresco, aunque poco recomendable.

---

# 3. Context Engineering

**Context Engineering** es la práctica de diseñar el contexto del agente: el harness que lo hace útil y le permite trabajar de forma consistente.

En vez de pensar solo en prompts aislados, se diseña un sistema completo alrededor del agente.

## Las 6 herramientas del harness

### 1. Rules

Políticas que debe respetar el agente.

Ejemplos:

- estilo de código;
- convenciones del proyecto;
- restricciones de seguridad;
- criterios de arquitectura;
- principios del equipo.

Las rules dan contexto general sin definir cada paso.

### 2. Commands

Pasos determinísticos para resolver problemas concretos.

Ejemplo:

```text
/test
/review
/create-spec
/run-evals
```

Reducen costo de tokens y tiempo porque el agente ya tiene un flujo definido.

### 3. MCP — Model Context Protocol

Contexto externo y dinámico.

Permite conectar al agente con:

- bases de datos;
- APIs;
- herramientas internas;
- documentación viva;
- sistemas de monitoreo;
- repositorios o servicios externos.

Es muy potente, aunque puede consumir muchos tokens si no se diseña con cuidado.

### 4. Subagents

Colaboradores especializados para tareas específicas.

Ejemplos:

- agente de testing;
- agente de revisión;
- agente de documentación;
- agente de análisis de impacto;
- agente de migración.

Se pueden paralelizar y evitan ensuciar la ventana de contexto principal.

### 5. Skills

Habilidades auto-invocadas: kits de flujos, reglas y utilidades que el agente activa según el contexto.

Sirven para reutilizar lógica compleja sin reescribirla en cada prompt.

### 6. Hooks

Scripts determinísticos que se ejecutan en momentos específicos del flujo del agente.

Ejemplos:

- formatear código antes de finalizar;
- ejecutar tests después de editar;
- bloquear cambios inseguros;
- pedir aprobación humana antes de modificar producción.

Los hooks aseguran estándares y permiten human-in-the-loop en puntos críticos.

## Gestión de conversaciones

El historial de una conversación es una “aspiradora de tokens”: cuanto más crece, más caro y menos preciso se vuelve el agente.

Buenas prácticas:

- abrir un nuevo chat por tarea;
- resumir el contexto en vez de arrastrar todo el historial;
- separar scripts determinísticos del razonamiento generativo;
- usar prompt reviewers para refinar instrucciones;
- diseñar agent loops cuando la tarea requiere iteración;
- definir goals verificables para que el agente sepa cuándo terminó.

## Secuencia efectiva

El orden recomendado para ejecutar bien una tarea:

1. Analizar el problema.
2. Escribir la especificación.
3. Generar el plan.
4. Validar humanamente.
5. Implementar.
6. Medir el resultado.
7. Ajustar y repetir si hace falta.

---

# 4. Spec-Driven Development (SDD)

**Spec-Driven Development** es un marco de trabajo para proyectos complejos con IA.

Su principio central:

> Las especificaciones son el artefacto principal; el código es una consecuencia.

## ¿Qué es SDD?

### Specs primero

Se usa lenguaje natural como lenguaje de programación.

Primero se define el **QUÉ** debe hacer el sistema. Luego se decide el **CÓMO** lo implementará el agente.

### Fuente de verdad única

Las specs son el contrato que guía a todos los involucrados:

- developers;
- QA;
- product managers;
- agentes de IA;
- reviewers.

### La IA ejecuta

Una vez escritas, las specs se convierten en instrucciones precisas para que el agente genere, pruebe y valide el código de forma estructurada.

## Las 3 etapas y el ecosistema

El flujo se organiza en tres etapas:

1. **Constitution**
2. **Specify + Plan**
3. **Tasks + Implement**

Herramientas del ecosistema:

- spec-kit;
- GSD;
- BMAD;
- openSpec.

## Flujo SDD recreado en Mermaid

El documento original incluía un diagrama del flujo de comandos. Esta es una versión recreada en Mermaid para mantenerlo versionado y editable dentro del repo.

> Referencia visual extraída del DOCX: [`assets/original-diagram.png`](../assets/original-diagram.png)

```mermaid
flowchart LR
    constitution["/constitution"] --> specify["/specify"]
    specify --> plan["/plan"]
    plan --> tasks["/tasks"]
    tasks --> implement["/implement"]
    implement --> checklist["/checklist"]

    specify --> clarify["/clarify"]
    clarify --> plan

    tasks --> analyze["/analyze"]
    analyze --> implement

    checklist -. "iteración / refinamiento" .-> specify

    classDef main fill:#18b3a3,stroke:#18b3a3,color:#ffffff,font-weight:bold;
    classDef optional fill:#7b13cc,stroke:#7b13cc,color:#ffffff,font-weight:bold;

    class constitution,specify,plan,tasks,implement main;
    class clarify,analyze,checklist optional;
```

### Lectura del flujo

- **/constitution** define principios, filosofía técnica y reglas no negociables.
- **/specify** captura el QUÉ de la necesidad.
- **/clarify** permite resolver ambigüedades antes de avanzar.
- **/plan** transforma la spec en estrategia técnica.
- **/tasks** descompone el plan en unidades ejecutables.
- **/analyze** revisa consistencia, riesgos y completitud.
- **/implement** ejecuta el trabajo.
- **/checklist** valida que el resultado cumpla con los criterios esperados.
- El loop de refinamiento vuelve a **/specify** cuando la validación detecta gaps.

## Demo — spec-kit en acción

Demostración en vivo de cómo desarrollar software desde cero con spec-kit.

Flujo sugerido:

1. Ejecutar `specify init` para inicializar el proyecto.
2. Elegir el agente.
3. Elegir el tipo de scripts: `sh` o `ps`.
4. Instalar los recursos del framework.
5. Usar comandos dentro del agente:
   - `/speckit.specify` para describir el QUÉ.
   - `/speckit.plan` para generar el plan.
   - `/speckit.tasks` para descomponer el trabajo.
   - `/speckit.implement` para ejecutar.
6. Observar cómo el agente mantiene coherencia a lo largo del flujo.

## Buenas prácticas y consideraciones

### Definir filosofía y método de trabajo en la constitution

El archivo `constitution.md` debe ir más allá del estilo de código.

Debe encapsular:

- filosofía del equipo;
- valores técnicos;
- acuerdos metodológicos;
- reglas no negociables;
- criterios de calidad.

Ejemplos:

- priorizar simplicidad;
- exigir pruebas unitarias para toda nueva funcionalidad;
- usar arquitectura serverless;
- evitar dependencias innecesarias;
- mantener backward compatibility.

### Usar MCPs o rules desde el inicio

Dentro de la constitution se deben establecer principios claros para el uso de MCPs o rules esenciales.

Esto permite que el agente tenga contexto propio del negocio desde las primeras iteraciones.

### Iterar y refinar artefactos rigurosamente

Como la especificación es el nuevo código, es obligatorio revisar e iterar sobre:

- `spec.md`;
- `plan.md`;
- `tasks.md`.

Comandos como `/clarify` y `/analyze` ayudan a asegurar claridad, precisión y completitud antes de autorizar la implementación.

### Centralizar y versionar documentación

Toda la documentación fundamental del proyecto y los artefactos SDD deben guardarse en una ubicación centralizada, típicamente dentro de `/specs`.

Esto simplifica la gestión, asegura que la IA acceda a la fuente de verdad correcta y facilita el versionamiento con Git.

### Actualizar documentos existentes

Al agregar features o correcciones, no conviene crear nuevos archivos si ya existe uno relevante.

Es preferible actualizar los `.md` existentes y gestionar esos cambios con Git.

Esto mantiene trazabilidad histórica y evita redundancia de contexto.

### Cuidar recursos y ventana de contexto

SDD puede elevar considerablemente el consumo de tokens o créditos por la cantidad de documentación y tareas largas.

Para mitigarlo:

- escribir prompts claros;
- documentar de forma precisa;
- usar comandos correctamente;
- elegir modelos adecuados;
- dividir problemas complejos;
- compactar contexto cuando corresponda.

### No modificar templates internos de spec-kit

No se deben modificar directamente los archivos y scripts base generados por Spec Kit.

Esto incluye:

- `/.specify/templates`;
- `/.specify/scripts`;
- archivos de configuración internos;
- comandos internos del paquete del agente elegido.

La integridad de estos componentes es clave para un flujo SDD predecible.

---

# 5. Evals

Un **eval** es un proceso donde se somete a un agente —junto con todo su harness— a un conjunto de pruebas diseñadas para calificar criterios específicos.

Dada una entrada o prompt, se espera cierto comportamiento o salida.

## Qué buscamos evaluar

### Eje 1 — Calidad de la salida

**Comportamiento**

- ¿El agente comprende la completitud del problema?
- ¿Identifica requisitos explícitos e implícitos?
- ¿Respeta restricciones del sistema?

**Evaluación exacta**

- ¿El resultado compila?
- ¿Pasan los tests unitarios?
- ¿Se cumplen contratos de API?
- ¿No se introducen regresiones?

**Evaluación subjetiva**

- ¿La respuesta abierta del agente está dentro del rango esperado?
- ¿La solución es mantenible?
- ¿El diseño es razonable?
- ¿La implementación respeta criterios del equipo?

### Eje 2 — Calidad del proceso

**Uso de herramientas**

- ¿Utiliza las herramientas que queremos que use?
- ¿Consulta documentación cuando corresponde?
- ¿Ejecuta tests antes de finalizar?

**Estados intermedios**

- ¿Pasa por los estados esperados?
- ¿Primero analiza, luego planifica y recién después implementa?
- ¿Pide aclaraciones cuando faltan datos críticos?

**Eficiencia**

- ¿Reduce tiempos?
- ¿Reduce costo de iteración?
- ¿Disminuye retrabajo?
- ¿Mejora la predictibilidad?

## Mensaje clave

Sin evals, no hay mejora sistemática. Solo hay percepción subjetiva de que “el agente anda mejor”. Y la percepción, como suele suceder, es un pésimo sistema de monitoreo.

---

# 6. Orquestación de agentes

## Agent Loop

El ciclo de razonamiento de un agente puede pensarse así:

1. Percibe contexto.
2. Decide una acción.
3. Ejecuta.
4. Observa el resultado.
5. Razona nuevamente.
6. Repite hasta cumplir el objetivo.

Entender este loop es clave para diseñar sistemas autónomos y predecibles.

## Orquestación multi-agente

Se pueden delegar tareas a múltiples agentes y coordinarlos en paralelo, con roles diferenciados.

Ejemplos de roles:

- agente de implementación;
- agente de testing;
- agente de code review;
- agente de documentación;
- agente de investigación;
- agente de migración.

## Agentes autónomos

Los agentes no tienen que ser solo reactivos.

Con cron jobs o schedulers pueden ejecutarse de forma programada:

- revisiones nocturnas;
- generación de reportes;
- pipelines de QA;
- monitoreo continuo;
- análisis de deuda técnica;
- actualización de documentación.

Así, el agente deja de ser solo una herramienta interactiva y pasa a comportarse como un proceso del sistema.

## Tres casos prácticos

### Caso 1 — Feature nueva

Se necesita construir un endpoint con validaciones, lógica de negocio y tests.

Una orquestación posible:

- agente de desarrollo;
- agente de tests;
- agente de code review.

Desarrollo y tests pueden correr en paralelo. La revisión espera a que ambos terminen.

### Caso 2 — Contexto de una API externa

Un agente necesita consultar una API legacy de alta latencia.

Solución:

- un subagente o skill carga ese contexto de forma independiente;
- el agente principal recibe solo el resumen útil;
- la ventana de contexto principal se mantiene limpia.

### Caso 3 — Migración de múltiples servicios

Se deben migrar 8 microservicios a una nueva versión con breaking changes.

Solución:

- lanzar 8 agentes en paralelo;
- uno por servicio;
- compartir una spec común;
- validar cada migración con tests y checks específicos.

La orquestación también es escala horizontal, no solo división por roles.

---

# 7. Cierre

> “Context is the new code.”

El contexto que le damos al agente —reglas, specs, evaluaciones y orquestación— es hoy tan determinante como el código mismo.

Dominar el harness es lo que separa el vibe-coding del desarrollo estructurado, predecible y escalable.

## Ideas fuerza para cerrar

- La IA acelera, pero no reemplaza criterio técnico.
- El prompt aislado no escala; el sistema de contexto sí.
- Las specs son contratos ejecutables para humanos y agentes.
- Los evals convierten intuición en medición.
- La orquestación permite pasar de asistente individual a sistema de desarrollo.
- El ingeniero del futuro diseña el entorno donde los agentes trabajan bien.

---

# 8. Referencias

- Skills.sh — Directorio de skills curadas para agentes de IA.  
  <https://www.skills.sh/>

- GitHub Spec Kit — Toolkit open source para Spec-Driven Development.  
  <https://github.com/github/spec-kit>

- Documentación de Spec Kit — Guía de uso del toolkit y sus comandos.  
  <https://github.github.com/spec-kit/>

- GitHub Blog: Spec-Driven Development with AI.  
  <https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/>

- Anthropic — Effective context engineering for AI agents.  
  <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>

- Anthropic — Writing effective tools for AI agents.  
  <https://www.anthropic.com/engineering/writing-tools-for-agents>

- Claude Code — Changelog.  
  <https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md>

- Model Context Protocol — Documentación oficial.  
  <https://modelcontextprotocol.io>

- Anthropic — News.  
  <https://www.anthropic.com/news>
