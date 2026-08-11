# Análisis de audiencia — Charla GenAI UTN

Fecha: 2026-08-11

## Observaciones relevadas

La audiencia ya usa IA, pero de forma principalmente puntual y asistida, no todavía como parte estructural del flujo de desarrollo.

Patrones detectados:

- Usan IA para tareas repetitivas, especialmente CRUDs o código similar una vez que ya entienden el flujo `controller → service/use case → repository`.
- Les sirve para destrabarse cuando no saben cómo comenzar una funcionalidad pedida.
- Algunos usan ChatGPT o Claude desde el navegador, no integrado al IDE, para resolver problemas puntuales.
- La usan como “juez” para que cuestione sus decisiones o revise si lo que están pensando tiene sentido.
- La usan para organizarse: pedir paso a paso o planificación de tareas para implementar una funcionalidad.
- Quienes trabajan profesionalmente dicen usarla poco o nada; cuando la usan, suele ser para DTOs, boilerplate o para entender algo específico que no conocen.

## Lectura del nivel actual

La audiencia parece estar mayormente entre:

- **Nivel 0 — Chat-driven coding:** uso conversacional, puntual, fuera del IDE.
- **Nivel 1 — Plan mode / selección de modelo:** empiezan a pedir planes, pasos y críticas.
- **Nivel 2 inicial — Rules / herramientas / assets:** algunos ya automatizan patrones repetitivos, pero sin harness formal.

Todavía no parece haber adopción fuerte de:

- agentes integrados al IDE;
- repos preparados para agentes;
- `AGENTS.md` / `CLAUDE.md`;
- specs como contrato;
- validación automática usada por el agente;
- MCPs;
- skills reutilizables;
- flujos agentic end-to-end.

## Implicación para la clase

No conviene arrancar desde conceptos demasiado avanzados. La clase debería construir un puente desde sus usos actuales hacia prácticas más profesionales.

La narrativa recomendada:

```text
Ya lo usan para CRUDs, desbloqueos y planificación.
Eso está bien: es la puerta de entrada.
El siguiente paso no es “usar más IA”, sino usarla con más estructura.
```

## Dolores reales de la audiencia

### 1. Repetición

Quieren evitar escribir código mecánico cuando el patrón ya está claro.

**Conectar con:** templates, commands, snippets, agents en IDE, skills y contexto del repo.

### 2. Hoja en blanco

Les cuesta empezar funcionalidades cuando no tienen claro el primer paso.

**Conectar con:** plan mode, spec-driven development y prompts como contrato de trabajo.

### 3. Falta de criterio o validación

Usan IA como juez para cuestionar soluciones.

**Conectar con:** revisión asistida, checklists, tests, linters, agentes revisores y definición de “done”.

### 4. Uso desconectado del entorno real

Muchos usan navegador en vez de IDE o CLI.

**Conectar con:** por qué integrar el agente al repo aumenta valor: puede leer archivos, ejecutar tests, ver diffs y validar resultados.

### 5. Uso limitado en trabajo profesional

Quienes trabajan la usan poco, o solo en tareas seguras como DTOs o boilerplate.

**Conectar con:** confianza progresiva. No se delega producción de golpe; se empieza con tareas acotadas, lectura, planes, tests y revisión humana.

## Ajuste recomendado del contenido

### Mantener el foco principal en niveles 0 a 3

La pirámide completa sirve como mapa, pero la clase debería profundizar en:

1. Cómo pasar de prompt suelto a buen contrato de trabajo.
2. Cómo pedir planes útiles antes de pedir código.
3. Cómo darle contexto real del repo.
4. Cómo usar IA como reviewer/juez con mejores criterios.
5. Cómo validar con evidencia: tests, lint, typecheck, diff.
6. Cómo empezar a preparar un repo para agentes.

Los niveles 4 a 7 deberían aparecer como “hacia dónde va la industria”, no como obligación inmediata.

### Reordenar la bajada práctica

Propuesta de progresión para la clase:

1. **Reconocer el uso actual:** CRUDs, desbloqueo, planificación, juez.
2. **Mostrar el límite:** cuando el uso es aislado, la IA no ve contexto ni valida.
3. **Introducir el contrato de trabajo:** objetivo, contexto, constraints, done when.
4. **Pasar de navegador a repo:** IDE/CLI, archivos, tests, diffs.
5. **Introducir harness mínimo:** `AGENTS.md`, docs, comandos de validación.
6. **Mostrar evolución:** skills, MCP, second brain, subagents.
7. **Cerrar con criterio:** no delegar más por fe; delegar más cuando hay mejor contexto y validación.

## Ejemplos que deberían resonar

### CRUD conocido

```text
Mal pedido:
“Haceme el CRUD de productos.”

Mejor pedido:
“Implementá el CRUD de productos siguiendo el patrón existente de users:
- controller en X
- service en Y
- repository en Z
- DTOs con estas reglas
- tests similares a users
- done when: npm test pasa y el endpoint responde 201/200/404 según casos.”
```

### Funcionalidad donde no sé empezar

```text
“Antes de escribir código, ayudame a armar un plan.
Necesito implementar X.
Haceme preguntas si falta contexto.
Después proponé pasos chicos, riesgos y archivos probables a tocar.”
```

### IA como juez

```text
“Actuá como reviewer crítico.
Cuestioná esta solución desde:
- mantenibilidad;
- seguridad;
- performance;
- consistencia con arquitectura;
- casos borde;
- facilidad de testeo.
No reescribas todavía: primero marcá riesgos.”
```

## Mensaje central ajustado a la audiencia

> Si hoy usan IA para CRUDs, desbloqueos y planificación, ya están en la base correcta. El salto profesional es convertir ese uso puntual en un flujo estructurado: contexto claro, plan, constraints y validación.

## Frase para apertura

> La pregunta ya no es si usamos IA. La pregunta es si la usamos como autocomplete elegante o como una herramienta de ingeniería gobernada por contexto, criterios y evidencia.

## Riesgo a evitar

No presentar MCP, second brain u orquestación como si fueran el punto de partida. Para esta audiencia, eso puede sonar lejano o excesivo.

Mejor tratarlos como evolución natural:

```text
Prompt útil → Plan claro → Contexto del repo → Validación → Harness mínimo → Skills/MCP → Agentes más autónomos
```

## Recomendación final

La clase debería sentirse como una mejora directa sobre lo que ya hacen, no como un universo nuevo.

El mensaje práctico:

> No están usando mal la IA. Están usando la primera versión del hábito. Ahora vamos a profesionalizarlo.
