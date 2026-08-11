# Audiencia de la charla — Estado actual y recomendaciones

## Objetivo del documento

Este documento resume cómo está posicionada hoy la audiencia frente al uso de IA para desarrollo de software y propone recomendaciones concretas para ajustar la charla a ese punto de partida.

La intención es evitar una presentación demasiado abstracta o avanzada desde el inicio. La clase debería partir de usos reales que la audiencia ya reconoce y, desde ahí, mostrar cómo evolucionar hacia prácticas más profesionales, estructuradas y confiables.

## Resumen ejecutivo

La audiencia **no está en cero**. Ese es el punto más importante para calibrar la charla.

Ya están usando IA para:

- CRUDs, DTOs y boilerplate;
- destrabarse cuando no saben por dónde empezar;
- pedir planes o pasos de implementación;
- revisar ideas o soluciones usando ChatGPT/Claude como “juez”;
- resolver dudas puntuales desde navegador.

Eso significa que ya existe un hábito inicial. La oportunidad no es enseñarles “qué es la IA” ni venderles autonomía extrema, sino mostrarles cómo pasar de un uso puntual a una práctica más profesional.

La charla debería construir un puente:

```text
Lo que ya hacen hoy
  ↓
mejores pedidos
  ↓
mejor contexto
  ↓
mejores planes
  ↓
validación con evidencia
  ↓
harness mínimo de proyecto
```

La frase central para orientar el documento y la clase podría ser:

> No están usando mal la IA. Están usando la primera versión del hábito. El siguiente paso es profesionalizarlo.

---

# 1. Cómo está posicionada la audiencia hoy

## 1.1 Uso principal: automatizar tareas repetitivas

La audiencia usa IA sobre todo para tareas repetitivas o mecánicas, especialmente cuando el patrón ya está entendido.

Ejemplos típicos:

- generar CRUDs;
- crear DTOs;
- repetir estructuras similares;
- completar código siguiendo un flujo ya conocido;
- evitar escribir boilerplate manualmente.

Un caso representativo sería:

```text
Ya entiendo cómo va el flujo controller → service → repository.
Ahora uso IA para no repetir manualmente toda la estructura.
```

## Lectura

Este es un uso válido y natural. La audiencia ya entiende que la IA sirve para reducir fricción cuando el problema no está en pensar la solución, sino en escribir muchas piezas similares.

El riesgo es que este uso quede limitado a “autocomplete mejorado” o generación de boilerplate, sin avanzar hacia tareas de mayor valor.

---

## 1.2 Uso para destrabarse ante una funcionalidad nueva

También usan IA cuando no saben cómo comenzar una funcionalidad o cuando una tarea les resulta ambigua.

Ejemplos:

- pedir una explicación inicial;
- preguntar cómo encarar una implementación;
- pedir alternativas;
- pedir un primer paso;
- entender una tecnología, patrón o librería que no conocen.

## Lectura

Este uso muestra que la IA funciona como acompañante cognitivo. No solo genera código: ayuda a reducir la ansiedad de la hoja en blanco.

Esto abre una oportunidad fuerte para introducir **Plan Mode** y **Spec-Driven Development**: antes de pedir código, pedir un plan, supuestos, riesgos y preguntas abiertas.

---

## 1.3 Uso desde navegador, no integrado al entorno de desarrollo

Algunos usan ChatGPT o Claude desde el navegador para resolver problemas puntuales, pero no necesariamente desde el IDE, CLI o conectado al repositorio.

## Lectura

Esto significa que gran parte del uso actual está separado del contexto real del proyecto.

El modelo puede ayudar, pero trabaja con información parcial:

- no ve todos los archivos relevantes;
- no conoce los comandos reales del proyecto;
- no ejecuta tests;
- no ve diffs;
- no puede validar si el cambio funciona;
- depende de que la persona copie y pegue el contexto correcto.

Esto es un punto central para la charla: el salto de calidad no viene solo de “usar un modelo mejor”, sino de integrar la IA al flujo real de ingeniería.

---

## 1.4 Uso como juez o reviewer crítico

Parte de la audiencia usa IA para que cuestione lo que hicieron o lo que están pensando hacer.

Ejemplos:

- “¿Esta solución tiene sentido?”
- “¿Qué problemas ves?”
- “¿Hay una forma mejor?”
- “Cuestioname esta arquitectura.”
- “Revisá si me falta contemplar algo.”

## Lectura

Este es uno de los usos más interesantes, porque mueve a la IA desde generador de código hacia asistente de razonamiento.

La oportunidad está en enseñarles a pedir revisión con criterios más explícitos:

- mantenibilidad;
- seguridad;
- performance;
- consistencia arquitectónica;
- casos borde;
- testabilidad;
- impacto en producto.

La IA como juez funciona mejor cuando se le define qué tipo de juicio queremos.

---

## 1.5 Uso para planificación paso a paso

También la usan para organizarse, pidiendo pasos para implementar una funcionalidad.

Ejemplos:

- dividir una tarea grande;
- ordenar pasos;
- identificar archivos probables;
- pensar una secuencia de implementación;
- armar una checklist.

## Lectura

Este comportamiento ya está muy cerca del uso profesional de agentes. La diferencia es que hoy probablemente lo hacen de forma conversacional y aislada.

La charla puede mostrar cómo convertir ese hábito en un contrato más sólido:

```text
Objetivo → contexto → restricciones → plan → validación → ejecución
```

---

## 1.6 Bajo uso declarado en personas que trabajan profesionalmente

Quienes ya trabajan dicen usar IA poco o nada, o la usan principalmente para casos seguros:

- DTOs;
- boilerplate;
- dudas puntuales;
- entender algo específico;
- tareas de bajo riesgo.

También puede existir cierta reserva a admitir el uso, aunque por el relevamiento parece más probable que realmente la usen poco en flujos de trabajo profundos.

## Lectura

Esto sugiere que todavía no hay confianza suficiente para delegar tareas más complejas.

La confianza no se resuelve diciendo “usen más IA”. Se construye con:

- contexto claro;
- alcance acotado;
- revisión humana;
- tests;
- linters;
- validación externa;
- diffs revisables;
- límites de permisos;
- tareas bien definidas.

La clase debería mostrar que el camino no es pasar de cero a autonomía total, sino aumentar gradualmente el nivel de delegación.

---

# 2. Nivel de madurez actual

A partir de los puntos relevados, la audiencia parece estar principalmente entre los primeros niveles de madurez.

## Nivel 0 — Chat-driven coding

Uso puntual desde navegador o chat:

- resolver dudas;
- generar fragmentos;
- pedir código aislado;
- destrabarse;
- hacer preguntas técnicas.

## Nivel 1 — Planificación y asistencia estructurada inicial

Uso para pensar antes de implementar:

- pedir paso a paso;
- usar IA como juez;
- organizar tareas;
- revisar enfoques;
- pedir alternativas.

## Nivel 2 inicial — Reutilización de patrones

Uso repetitivo para código conocido:

- CRUDs;
- DTOs;
- boilerplate;
- repetir patrones del proyecto.

Pero todavía sin un sistema formal de:

- rules;
- `AGENTS.md`;
- specs;
- skills;
- comandos de validación;
- MCPs;
- agentes integrados al repo.

## Conclusión de madurez

La audiencia no parte de cero. Ya tiene experiencia práctica, pero todavía usa IA de forma aislada, puntual y poco integrada al ciclo real de desarrollo.

En términos de la pirámide de madurez, la mayoría parece estar entre **Nivel 0** y **Nivel 1**, con algunas señales iniciales de **Nivel 2**:

```text
Nivel 0 — Chat-driven coding
Nivel 1 — Planificación / asistencia inicial
Nivel 2 — Reutilización de patrones, todavía sin harness formal
```

Esto es valioso porque indica que la charla no tiene que convencerlos de que la IA sirve. Ya lo saben por experiencia. Lo que la charla tiene que mostrar es que el valor aumenta mucho cuando el uso deja de ser aislado y se convierte en un flujo con estructura.

La clase debería ayudarles a pasar de:

```text
Uso puntual de IA
```

a:

```text
Flujo de ingeniería asistido por IA
```

Dicho de otra forma:

```text
ChatGPT como ayuda ocasional
  ↓
IA como parte del proceso de ingeniería
```

La idea no es saltar inmediatamente a agentes autónomos, sino construir una progresión razonable:

```text
Prompt puntual
  ↓
Plan claro
  ↓
Contexto del repo
  ↓
Contrato de trabajo
  ↓
Validación
  ↓
Harness mínimo
  ↓
Skills / MCP / agentes más autónomos
```

Esta progresión permite que la audiencia vea continuidad entre lo que ya hace y lo que la charla propone. No se trata de cambiar de mundo, sino de subir la calidad del hábito actual.

---

# 3. Riesgos si la charla se enfoca demasiado arriba

Si la charla arranca directamente con MCPs, subagents, second brain, orquestación o graph engineering, puede sentirse lejana para parte de la audiencia.

No porque esos temas no sean valiosos, sino porque todavía no tienen consolidado el paso anterior:

- buen contexto;
- buen pedido;
- plan previo;
- validación;
- integración con repo;
- uso de tests;
- revisión estructurada.

El riesgo sería que la clase suene como:

```text
Esto es interesante, pero está muy lejos de mi día a día.
```

Cuando en realidad debería sonar como:

```text
Esto mejora directamente la forma en la que ya estoy usando IA.
```

---

# 4. Recomendaciones para la charla

## Principio rector

Este análisis cambia el enfoque de la clase: no conviene plantearla como una introducción genérica a GenAI ni como una demostración de agentes avanzados desde el inicio.

La clase debería sentirse como una mejora directa sobre lo que la audiencia ya hace. Es decir:

```text
Ustedes ya usan IA para resolver partes del trabajo.
Ahora veamos cómo usarla con más criterio de ingeniería.
```

El objetivo pedagógico no debería ser “miren todo lo que puede hacer un agente autónomo”, sino:

```text
Cómo pasar de pedir ayuda suelta a construir un flujo confiable:
contexto → plan → ejecución → validación.
```

Por eso, la charla debería:

- empezar desde ejemplos conocidos: CRUDs, DTOs, boilerplate, dudas puntuales;
- mostrar los límites de ese uso cuando falta contexto real;
- introducir estructura: contratos de trabajo, plan mode, specs y criterios de aceptación;
- recién después mostrar harness, skills, MCP y agentes más autónomos como evolución natural.

## 4.1 Empezar validando su uso actual

No conviene abrir diciendo que el uso actual es incorrecto. Al contrario: hay que reconocer que esos usos son una buena puerta de entrada.

Mensaje sugerido:

> Si hoy usan IA para CRUDs, DTOs, destrabarse o planificar pasos, ya están usando una parte valiosa de la herramienta. El objetivo de esta clase es mostrar cómo llevar ese uso a un nivel más confiable, repetible y profesional.

Esto baja defensas y conecta con su experiencia real.

---

## 4.2 Presentar la evolución como un puente, no como un reemplazo

La charla debería mostrar una progresión natural:

```text
Prompt puntual
  ↓
Plan claro
  ↓
Contexto del repo
  ↓
Contrato de trabajo
  ↓
Validación
  ↓
Harness mínimo
  ↓
Skills / MCP / agentes más autónomos
```

La idea no es decir “dejen de usar ChatGPT en navegador”, sino:

> Ese uso sirve para empezar. Pero cuando el trabajo toca un repo real, necesitamos contexto real, validación real y criterios claros.

---

## 4.3 Enfocar la profundidad en niveles 0 a 3

La pirámide completa de madurez es útil como mapa, pero para esta audiencia conviene profundizar especialmente en:

- Nivel 0: uso conversacional y sus límites.
- Nivel 1: planificación, modelo adecuado y mejores pedidos.
- Nivel 2: rules, prompts reutilizables, assets y comandos.
- Nivel 3: harness mínimo del proyecto.

Los niveles superiores deberían aparecer como horizonte:

- second brain;
- loop engineering;
- evals;
- subagents;
- orquestación.

Pero no deberían ser el centro práctico de la clase.

---

## 4.4 Usar ejemplos cercanos: CRUD, DTOs y funcionalidades ambiguas

La clase debería usar ejemplos que la audiencia reconozca.

### Ejemplo 1 — CRUD

Pedido débil:

```text
Haceme el CRUD de productos.
```

Pedido profesional:

```text
Implementá el CRUD de productos siguiendo el patrón existente de users.

Contexto:
- controller: src/users/users.controller.ts
- service: src/users/users.service.ts
- repository: src/users/users.repository.ts
- DTOs: src/users/dto/

Restricciones:
- respetar la estructura actual del proyecto;
- no introducir nuevas dependencias;
- mantener el estilo de errores existente;
- agregar tests similares a users.

Done when:
- los tests pasan;
- el lint pasa;
- los endpoints cubren create, read, update y delete;
- los casos 400/404 quedan contemplados.
```

### Ejemplo 2 — No sé cómo empezar

```text
Necesito implementar esta funcionalidad, pero todavía no quiero código.

Primero ayudame a:
1. entender el problema;
2. listar preguntas abiertas;
3. detectar archivos probables a tocar;
4. proponer un plan paso a paso;
5. marcar riesgos técnicos;
6. definir cómo validar que quedó bien.
```

### Ejemplo 3 — IA como juez

```text
Actuá como reviewer crítico.

Evaluá esta solución desde:
- mantenibilidad;
- seguridad;
- performance;
- consistencia con la arquitectura;
- casos borde;
- facilidad de testeo.

No reescribas todavía. Primero marcá riesgos, preguntas y trade-offs.
```

---

## 4.5 Enseñar el concepto de “contrato de trabajo”

Este debería ser uno de los puntos centrales.

Un buen pedido a un agente debería incluir:

```text
1. Objetivo
   Qué quiero lograr.

2. Contexto
   Qué archivos, ejemplos, errores o reglas importan.

3. Restricciones
   Qué no puede romper, qué estilo debe seguir, qué decisiones respetar.

4. Done when
   Cómo sabemos que terminó bien.
```

Mensaje clave:

> Un buen prompt no es una frase ingeniosa. Es un contrato de trabajo.

---

## 4.6 Mostrar por qué integrar con el repo cambia el resultado

Dado que varios usan ChatGPT o Claude desde navegador, conviene mostrar explícitamente la diferencia.

## IA desde navegador

Ventajas:

- rápida;
- accesible;
- buena para dudas puntuales;
- útil para explicar conceptos.

Límites:

- no ve el repo completo;
- depende de copiar y pegar contexto;
- no ejecuta comandos;
- no valida tests;
- no ve diffs reales;
- puede inventar estructura de archivos.

## IA integrada al IDE / CLI / repo

Ventajas:

- lee archivos reales;
- entiende patrones existentes;
- modifica código directamente;
- puede ejecutar tests/lint;
- puede revisar diffs;
- puede iterar con evidencia.

Mensaje:

> El salto no es solo comodidad. Es pasar de conversación a trabajo verificable.

---

## 4.7 Convertir “IA como juez” en revisión sistemática

Ya usan IA para cuestionar decisiones. Eso se puede profesionalizar con checklists.

Ejemplo de checklist:

```text
Revisá este cambio y respondé:

1. ¿Respeta la arquitectura existente?
2. ¿Hay duplicación innecesaria?
3. ¿Faltan casos borde?
4. ¿Hay riesgos de seguridad?
5. ¿Hay problemas de performance?
6. ¿Los nombres son claros?
7. ¿Qué tests faltan?
8. ¿Qué parte debería revisar un humano con más cuidado?
```

Esto conecta muy bien con el concepto de agentes revisores y validación externa.

---

## 4.8 Evitar vender autonomía sin validación

Para una audiencia que usa IA poco en contextos laborales, hay que ser cuidadosos con el mensaje.

No conviene decir:

```text
Deleguen features completas a agentes.
```

Conviene decir:

```text
Deleguen tareas mejor definidas, con contexto, límites y validación.
```

La confianza se gana por evidencia, no por entusiasmo.

Frase sugerida:

> No delegamos más porque confiamos ciegamente en el modelo. Delegamos más cuando el sistema alrededor del modelo produce mejor evidencia.

---

## 4.9 Presentar MCP y skills como evolución natural

MCP y skills no deberían aparecer como el primer paso.

Mejor progresión:

```text
Si repetís un prompt muchas veces → probablemente necesitás una rule o template.
Si repetís un workflow muchas veces → probablemente necesitás una skill.
Si necesitás contexto vivo de otra herramienta → probablemente necesitás CLI o MCP.
```

Esto los vuelve conceptos prácticos, no buzzwords.

---

# 5. Propuesta de estructura ajustada para la charla

## Bloque 1 — Punto de partida

- Cómo están usando IA hoy.
- CRUDs, DTOs, desbloqueo, planificación, juez.
- Por qué esos usos son válidos.
- Qué límites aparecen cuando el uso es aislado.

## Bloque 2 — De prompt a contrato

- Objetivo.
- Contexto.
- Restricciones.
- Done when.
- Ejemplos malos vs buenos.

## Bloque 3 — De navegador a repo

- Qué cambia cuando el agente ve archivos reales.
- IDE / CLI.
- Diffs.
- Tests.
- Lint.
- Validación.

## Bloque 4 — Harness mínimo

- `AGENTS.md`.
- Docs de arquitectura.
- Comandos de validación.
- Checklists.
- Reglas del proyecto.

## Bloque 5 — Evolución futura

- Skills.
- MCP.
- Second brain.
- Subagents.
- Orquestación.

## Bloque 6 — Cierre

- El valor no está solo en generar código.
- El valor está en dirigir el sistema que genera, valida y mejora código.

---

# 6. Mensajes principales recomendados

## Mensaje 1

> No están usando mal la IA. Están usando la primera versión del hábito.

## Mensaje 2

> El salto profesional es pasar de pedir código a definir contratos de trabajo.

## Mensaje 3

> La IA sirve para CRUDs, pero su mayor valor aparece cuando ayuda a pensar, planificar, revisar y validar.

## Mensaje 4

> El contexto correcto vale más que un prompt largo.

## Mensaje 5

> Un agente sin validación opina. Un agente con tests, lint y diffs empieza a producir evidencia.

## Mensaje 6

> No se delega por fe. Se delega por sistema.

---

# 7. Recomendación final

La charla debería posicionarse como una evolución directa del uso actual de la audiencia.

No debería sonar como:

```text
Esto que hacen es básico; ahora veamos algo completamente distinto.
```

Debería sonar como:

```text
Esto que ya hacen tiene valor. Ahora vamos a convertirlo en una práctica de ingeniería más confiable.
```

El objetivo no es que salgan pensando que necesitan MCPs, subagents y orquestación mañana.

El objetivo es que salgan con tres cambios concretos:

1. Pedir mejores planes antes de pedir código.
2. Dar mejor contexto y restricciones.
3. Validar los resultados con evidencia.

Si logran eso, ya subieron un nivel real en madurez. Lo demás vendrá después, paso a paso. Como corresponde: no por ansiedad, sino por disciplina.
