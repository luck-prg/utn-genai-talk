# 1.3.2 · Seguridad y riesgos: guion de la charla

**Oradora:** Sofía Cortes. Ingeniera en Sistemas (UTN FRBA), ingeniera de software en Double y ayudante de Diseño de Sistemas.
**Duración objetivo:** unos 14 minutos (tope: 15).
**Posición:** cierra la sección 1.3, justo después de *1.3.1 IA sin ingeniería* (slides 46 a 52), y es lo último del bloque 1 (se sacó la slide de "¿Preguntas?").
**Slides:** `src/slides/52.10-*.tsx` a `src/slides/52.70-*.tsx`. Las notas del orador de cada slide traen el mismo texto.
**Fuente principal:** apunte *Introducción a la "IA" Generativa* (Franco Bulgarelli, v0.1, sept. 2026), secciones *Profilaxis*, *Riesgos* y *Conclusiones*. Lo que agregué por fuera del apunte va marcado con ➕ en la tabla de fuentes.

---

## Tiempos

| # | Slide | Tiempo | Acumulado |
|---|---|---|---|
| 52.10 | Portada: *Delegar también exige poner límites* | 0:20 | 0:20 |
| 52.15 | Lo que le mandás ya no es tuyo | 1:30 | 1:50 |
| 52.20 | Y a veces, lo que le mandás es un dato confidencial | 1:15 | 3:05 |
| 52.37 | Cómo protegernos | 1:15 | 4:20 |
| 52.45 | Divisor: lo que está en juego | 0:10 | 4:30 |
| 52.47 | ¿De dónde salen los datos? | 0:45 | 5:15 |
| 52.50 | Soberanía: ¿de quién dependemos? | 1:15 | 6:30 |
| 52.55 | Riesgo · Costos: ¿cuánto cuesta de verdad? | 1:00 | 7:30 |
| 52.56 | Riesgo · Ambiental: la huella ambiental | 1:00 | 8:30 |
| 52.57 | Riesgo · Cognitivo: lo que dejamos de ejercitar | 1:00 | 9:30 |
| 52.58 | Riesgo · Político: la IA también es poder | 1:15 | 10:45 |
| 52.60 | ¿Y los modelos abiertos? | 1:00 | 11:45 |
| 52.70 | Sí, con criterio y cautela | 1:00 | **12:45** |

✅ **Queda en ~12:45, dentro del tope.** Si hace falta más margen, recortaría en este orden:

1. **52.60 Modelos abiertos** (−1:00). El bloque 3 ya cubre abierto/cerrado y local/remoto (slides 91 y 94).
2. En los **riesgos (52.55 a 52.58)**, desarrollar dos y nombrar los otros dos al pasar (−2:00).

---

## Guion

Por cada slide: **en pantalla**, lo que aparece al llegar y con cada clic; **qué digo**, el texto hablado con los **[clic]** marcados.

### 1. Portada · Delegar también exige poner límites

`52.10` · ~0:20 (acumulado 0:20) · 0 clics

**En pantalla**

- **Al llegar:** «1.3.2 · Seguridad y riesgos» y el título *Delegar también exige **poner límites***.

**Qué digo**

Recién vimos lo que el agente no resuelve solo. Ahora, lo que puede salir mal cuando lo usamos: qué pasa con lo que le mandamos, cómo nos cuidamos, y lo que está en juego más allá de nuestra máquina.

---

### 2. Lo que le mandás ya no es tuyo

`52.15` · ~1:30 (acumulado 1:50) · 2 clics

**En pantalla**

- **Al llegar:** *›// ese código que pegaste en el chat* · **Lo que le mandás ya no es tuyo**.
- **Clic 1:** chips «se guarda · se analiza · se comparte · se usa para entrenar».
- **Clic 2:** caja «OpenAI · Anthropic · Google · GitHub — **entrenan con tus datos** — En la mayoría de sus planes, por defecto».

**Qué digo**

Arranco por algo que hacemos todos: pegar en el chat un pedazo de código, un error o un CSV para que nos ayude.

Todo lo que mandamos a un proveedor de IA queda del otro lado, y ahí deja de estar bajo nuestro control.

**[clic]** Se puede guardar, analizar y compartir con terceros, como otras empresas o gobiernos. También se puede usar para reentrenar el modelo. No es paranoia: está en los términos y condiciones.

**[clic]** En la mayoría de los planes, las grandes empresas **entrenan con lo que les mandás**, por defecto:

- ChatGPT entrena, salvo que apagues la opción "Mejorar el modelo para todos".
- Claude entrena con chats y sesiones de código desde septiembre de 2025, salvo que lo desactives. Si aceptás, guardan tus datos 5 años en vez de 30 días.
- Gemini gratis además avisa que puede haber personas leyendo lo que mandás.
- GitHub Copilot, en sus planes Free y Pro, entrena con tu código desde abril de este año.

Hay excepciones: en la API paga y en los planes de empresa, por contrato, no entrenan. Pero igual guardan registros un tiempo para detectar abusos. Ojo: la API gratuita de Gemini sí entrena.

Un detalle más, que dijo el propio Sam Altman en 2025: lo que le contás a ChatGPT no tiene secreto profesional. Si hay un juicio, pueden estar obligados a entregarlo.

---

### 3. Y a veces, lo que le mandás es un dato confidencial

`52.20` · ~1:15 (acumulado 3:05) · 3 clics

**En pantalla**

- **Al llegar:** **Y a veces, lo que le mandás es un dato confidencial**.
- **Clic 1:** «2025 · El jefe de CISA (EE.UU.) sube a ChatGPT información sensible no clasificada».
- **Clic 2:** «2025 · Roban los tokens OAuth del chatbot de IA Drift: datos de Salesforce de 700+ empresas, con claves de AWS pegadas en tickets».
- **Clic 3:** dato grande **77%** (LayerX · 2025): de quienes usan IA en el trabajo pega datos en el chat.

**Qué digo**

Y a veces lo que le mandamos es un dato confidencial.

**[clic]** En 2025, el director interino de CISA, la agencia de ciberseguridad del gobierno de Estados Unidos, subió a la versión pública de ChatGPT documentos marcados "sólo para uso oficial". Lo detectaron los propios sistemas de seguridad y se abrió una investigación. Si le pasa al responsable de la ciberseguridad de Estados Unidos, le puede pasar a cualquiera.

**[clic]** Un caso más técnico: **Drift** es un chatbot de IA de la empresa **Salesloft**, que muchas empresas conectan a su Salesforce con tokens OAuth. En agosto de 2025, un grupo robó esos tokens y, en diez días, exportó datos de Salesforce de **unas 700 organizaciones**: Cloudflare, Zscaler, Palo Alto, PagerDuty. Después revisaron los tickets de soporte buscando lo que la gente había pegado en texto plano: claves de AWS, contraseñas, tokens de Snowflake. Cloudflare, por ejemplo, tuvo que rotar 104 tokens que estaban pegados en tickets. Al integrar un agente le damos acceso a todo lo que ve, y eso incluye los secretos que otros dejaron ahí.

**[clic]** Y no es un caso aislado: según LayerX, **el 77%** de quienes usan IA en el trabajo pega datos de la empresa en el chat, y la mayoría lo hace desde su cuenta personal, donde nadie lo controla.

---

### 4. Cómo protegernos

`52.37` · ~1:15 (acumulado 4:20) · 4 clics

**En pantalla**

- **Al llegar:** *›// profilaxis* · **Cómo protegernos**, con cuatro tarjetas apagadas.
- **Clic 1:** 01 **Nada sensible** — Ni datos personales, ni contraseñas, API keys o tokens.
- **Clic 2:** 02 **Permisos mínimos** — Que sólo pueda leer y tocar lo que necesita, definido en la configuración del agente. A producción, nunca.
- **Clic 3:** 03 **Aislarlo** — En un entorno virtualizado.
- **Clic 4:** 04 **Más de un proveedor** — No acoplar el diseño a un servicio: poder migrar de modelo mañana.

**Qué digo**

Entonces, ¿cómo nos cuidamos? Cuatro medidas, que salen de la sección *Profilaxis* del apunte de Franco.

**[clic] Nada sensible.** No le des datos personales, ni tuyos, ni del equipo, ni de clientes. Y que no tenga a su alcance contraseñas, API keys ni tokens.

**[clic] Permisos mínimos.** Que sólo pueda leer y tocar lo que necesita para la tarea, y nada más. Eso se define en la configuración del agente (en Claude Code, por ejemplo, es el archivo `settings.json`). Y a producción, nunca: con una clave de producción a mano, borrar una tabla también puede parecerle una solución.

**[clic] Aislarlo.** Que corra en un entorno virtualizado, separado del resto de tu máquina.

**[clic] Más de un proveedor.** No acoplar el diseño a un servicio en particular, para poder migrar de modelo mañana si cambian los términos o el precio.

---

### 5. Divisor · Lo que está en juego

`52.45` · ~0:10 (acumulado 4:30) · 0 clics

**En pantalla**

- **Al llegar:** **Lo que está en juego** (divisor, sin clics).

**Qué digo**

Hasta acá, lo que podemos controlar nosotros. Ahora, lo que está en juego más allá de nuestra máquina.

---

### 6. ¿De dónde salen los datos?

`52.47` · ~0:45 (acumulado 5:15) · 2 clics

**En pantalla**

- **Al llegar:** **¿De dónde salen los datos?**
- **Clic 1:** «2024 · OpenAI: es “imposible” entrenar sin material con copyright».
- **Clic 2:** «2025 · Anthropic paga US$ 1.500 M por ~480 mil libros bajados de sitios piratas».

**Qué digo**

Primero: los datos para entrenar, ¿de dónde salen?

**[clic]** En 2024, **OpenAI** le dijo al Parlamento británico que es "imposible" entrenar los modelos líderes sin usar material con copyright.

**[clic]** Y **Anthropic** pagó 1.500 millones de dólares por haber bajado libros de sitios piratas: unas 480 mil obras, unos 3.000 dólares por libro. Además compraba libros usados, les cortaba el lomo y los escaneaba.

No siempre la consiguen de forma ética.

---

### 7. Soberanía · ¿De quién dependemos?

`52.50` · ~1:15 (acumulado 6:30) · 4 clics

**En pantalla**

- **Al llegar:** *›// soberanía digital* · **¿De quién dependemos?** y el dato **90%** (ONU · 2026): de la capacidad de cómputo para IA está en dos países.
- **Clic 1:** «datos · Se procesan en otro país, bajo sus leyes».
- **Clic 2:** «reglas · Precios, términos y acceso los decide un tercero, y pueden cambiar mañana».
- **Clic 3:** «futuro · Lo que construimos encima queda atado a ese proveedor».
- **Clic 4:** barra «Pocas empresas tienen casi toda la información del mundo».

**Qué digo**

Y esto abre una pregunta más grande: la soberanía. Según Naciones Unidas, sólo 32 países tienen centros de datos para IA, y **el 90% de esa capacidad está en dos**. Más de 150 países no tienen cómputo propio, y Argentina está en ese grupo.

**[clic] Datos.** Tus datos se procesan en otro país y bajo sus leyes. No importa qué diga el contrato: si la empresa es de ese país, su gobierno puede pedirle los datos.

**[clic] Reglas.** Las reglas las pone un tercero. Precios, términos y hasta el acceso pueden cambiar de un día para el otro. Ya pasó: en julio de 2024, OpenAI cortó el acceso a su API desde China, Rusia y otros países, con dos semanas de aviso. Si tu producto dependía de eso, se caía.

**[clic] Futuro.** Lo que construimos alrededor depende de esa infraestructura. Empresas, universidades y Estados que arman todo sobre un proveedor extranjero quedan atados a él; es lo que Cecilia Rikap llama *dependencia digital*.

**[clic]** Pocas empresas, de pocos países, tienen casi toda la información del mundo.

---

### 8. Riesgo 1 · Costos: ¿cuánto cuesta de verdad?

`52.55` · ~1:00 (acumulado 7:30) · 1 clic

**En pantalla**

- **Al llegar:** *›// riesgo 1 · costos* · **¿Cuánto cuesta de verdad?** y el dato **−US$ 14 mil M** (OpenAI · 2026): lo que proyecta perder OpenAI sólo este año.
- **Clic 1:** «subsidio · ¿El precio de hoy es real, o está subsidiado para ganar mercado?».

**Qué digo**

Primer riesgo: los costos. No hay consenso sobre si el precio que pagamos hoy es real. Las plataformas de IA pierden plata: OpenAI proyecta perder **unos 14 mil millones de dólares** sólo en 2026.

**[clic] Subsidio.** Entonces, ¿el precio de hoy es real, o está subsidiado para ganar mercado y dejar afuera a la competencia?

*(sin clic)* **Quién gana.** Mientras tanto, los que sí ganan son los que venden el hardware y la infraestructura: NVIDIA, Amazon, Google, Microsoft.

---

### 9. Riesgo 2 · Ambiental: la huella ambiental

`52.56` · ~1:00 (acumulado 8:30) · 3 clics

**En pantalla**

- **Al llegar:** *›// riesgo 2 · ambiental* · **La huella ambiental** y el dato **945 TWh** (ONU · 2030): casi el triple de lo que consumen Pakistán, Bangladesh y Nigeria juntos.
- **Clic 1:** «agua · Para enfriar los equipos, compite con la de la población».
- **Clic 2:** «energía · Sube las tarifas de la zona y a veces exige plantas fósiles».
- **Clic 3:** «empleo · Genera pocos puestos locales, aunque la región compite por atraerlos».

**Qué digo**

Segundo: el impacto ambiental. Naciones Unidas proyecta que en 2030 los centros de datos de IA van a consumir **unos 945 teravatios-hora por año**: casi el triple de lo que consumen Pakistán, Bangladesh y Nigeria juntos, más de 650 millones de personas.

**[clic] Agua.** El agua dulce que usan para refrigerar los equipos compite con la que necesitan las poblaciones de la zona, y hay lugares con restricciones severas del servicio.

**[clic] Energía.** Consumen tanta energía que suben las tarifas de quienes viven cerca, hacen ruido y a veces obligan a instalar plantas a combustibles fósiles.

**[clic] Empleo.** Y no generan muchos empleos a largo plazo. Aun así, al menos siete países de la región están impulsando leyes para atraer mega data centers, incluida la Patagonia. Cada token que no mandamos también cuenta.

---

### 10. Riesgo 3 · Cognitivo: lo que dejamos de ejercitar

`52.57` · ~1:00 (acumulado 9:30) · 3 clics

**En pantalla**

- **Al llegar:** *›// riesgo 3 · cognitivo* · **Lo que dejamos de ejercitar** y el dato **MIT · 2025**: quienes escribían con ChatGPT mostraron menos actividad cerebral y después no podían citar su propio texto.
- **Clic 1:** «deuda · Los autores lo llaman deuda cognitiva: lo que delegás, dejás de ejercitarlo».
- **Clic 2:** «ironía · Cuanto más se automatiza una tarea, más difícil es supervisarla».
- **Clic 3:** «y encima · Justo perdemos las habilidades que hacen falta para supervisar».

**Qué digo**

Tercero: el impacto cognitivo. Un estudio del **MIT** de 2025 midió la actividad cerebral de personas escribiendo ensayos: quienes usaban ChatGPT mostraron la menor conectividad, y después no podían citar su propio texto.

**[clic] Deuda.** Los autores lo llaman *deuda cognitiva*: lo que delegás, dejás de ejercitarlo.

**[clic] Ironía.** A eso se suma la *ironía de la automatización*: cuanto más automatizada está una tarea, más difícil es supervisarla.

**[clic] Y encima.** Justo vamos perdiendo las habilidades que necesitamos para hacerlo. Eso podría, y probablemente debería, ser un límite a la adopción masiva.

---

### 11. Riesgo 4 · Político: la IA también es poder

`52.58` · ~1:15 (acumulado 10:45) · 3 clics

**En pantalla**

- **Al llegar:** *›// riesgo 4 · político* · **La IA también es poder** y el dato **80–90%** (GTG-1002 · 2025): de una campaña de espionaje la hizo la IA sola, según la propia Anthropic.
- **Clic 1:** «defensa · OpenAI, Anthropic, Google y xAI firmaron contratos con el Pentágono».
- **Clic 2:** «vigilancia · Empresas como Palantir, en el centro del espionaje digital».
- **Clic 3:** «guerra · Organizaciones de derechos humanos piden límites a la IA en la guerra».

**Qué digo**

Cuarto: el impacto político. En 2025, Anthropic reportó un grupo que usó Claude Code para una campaña de espionaje contra unos 30 objetivos, y **la IA hizo entre el 80 y el 90% del trabajo**, sola. Atacar se volvió mucho más barato.

**[clic] Defensa.** Las mismas empresas que hacen los modelos que usamos (OpenAI, Anthropic, Google y xAI) firmaron contratos con el Departamento de Defensa de Estados Unidos.

**[clic] Vigilancia.** Empresas como Palantir están en el centro del espionaje digital a escala global.

**[clic] Guerra.** Y organizaciones de derechos humanos, como Amnistía Internacional, piden límites al uso de la IA en la guerra. La IA ya no es sólo una herramienta: es infraestructura de poder, y eso impacta en la vida democrática.

---

### 12. ¿Y los modelos abiertos?

`52.60` · ~1:00 (acumulado 11:45) · 2 clics

**En pantalla**

- **Al llegar:** **¿Y los modelos abiertos?**
- **Clic 1:** caja «suman · tus datos no salen · Corren en tu infraestructura. Menos dependencia de un proveedor».
- **Clic 2:** caja «pero · pesos abiertos ≠ código abierto · Casi nunca publican los datos de entrenamiento. El hardware lo ponés vos» y la barra «Latam-GPT: abierto, regional, entrenado con datos de la región».

**Qué digo**

¿Hay salida? Una parte de la respuesta son los modelos abiertos. ChatGPT, Claude o Gemini son modelos **cerrados**: no te dan el modelo, lo usás por internet y tus datos viajan a la empresa. Los modelos **abiertos**, como Llama, Mistral o Qwen, publican los pesos: te podés bajar el modelo y correrlo en tu propia máquina o en tus servidores.

**[clic]** Lo que suman: los datos nunca salen de tu máquina ni de tu organización, dependés menos de un proveedor y, con modelos chicos, puede salir más barato.

**[clic]** Los peros: casi siempre publican los pesos pero no el código ni los datos de entrenamiento, por eso se habla de "pesos abiertos" y no de código abierto. El hardware lo ponés vos, muchas licencias tienen restricciones, y hay presiones empresariales para limitarlos "por seguridad". Un ejemplo cercano es Latam-GPT: un modelo abierto hecho en Chile por un equipo de toda la región, con contenido latinoamericano. Cómo elegir entre abierto y cerrado lo vemos en el bloque de modelos.

---

### 13. Cierre · Sí, con criterio y cautela

`52.70` · ~1:00 (acumulado 12:45) · 2 clics

**En pantalla**

- **Al llegar:** *›// ¿avanzar?* · **Sí, con criterio y cautela.**
- **Clic 1:** «Es una foto de un escenario que cambia: los efectos a largo plazo todavía no los conocemos».
- **Clic 2:** «Usamos la IA y construimos con ella: las dos cosas piden mirada crítica».

**Qué digo**

Entonces, ¿avanzamos? Sí, con criterio y cautela.

**[clic]** Todo lo que vimos es una foto de un escenario que cambia muy rápido. Lo que sabemos sale de los pocos años que llevan estos sistemas, y los efectos a largo plazo todavía están por verse. Hasta las propias empresas documentan efectos negativos; si es una preocupación real o una estrategia corporativa, es un debate abierto. Pero en ese marco, avanzar frenética y ciegamente puede ser riesgoso, temerario o incluso antiético.

**[clic]** Como profesionales de sistemas tenemos un doble rol: somos usuarios de la IA y también somos quienes construimos sistemas con ella. **Las dos cosas piden una mirada crítica.**

*(pausa)* Con esto cerramos el bloque 1. Y para usarla bien hace falta ingeniería alrededor: de eso se trata lo que viene.

---
## Qué evité repetir de slides anteriores

- **Trifecta y permisos por herramienta** (slides 23 y 24, semáforo y panel de switches): no los vuelvo a explicar, sólo los retomo ("contenido no confiable").
- **"La responsabilidad nunca se delega"** (slides 19 y 83) y las heurísticas de revisión de *Profilaxis* (*código que no se entiende no se aprueba*, etc.): quedan fuera de "Cómo protegernos" porque las cubren 19 y la sección 1.3.1 (slides 47 a 52).
- **METR y productividad** (slide 48, ahora justo antes): no uso esa cita del apunte.
- **"Construir el criterio antes de habilitar la delegación"** (slide 52, la inmediatamente anterior): por eso ninguna slide de esta sección arranca con "antes de delegar".
- **Riesgo cognitivo vs. slide 47** ("la competencia escasa es rechazar código"): se tocan, pero 47 habla del criterio para revisar y yo hablo de la deuda cognitiva y de la ironía de la automatización.
- **Alucinaciones** (slide 9): no las retomo.

**Superposiciones con slides que vienen después**, para coordinar:

- **Slides 91 y 94** (bloque 3, modelos): abierto/cerrado, vendor lock-in y "tus datos salen". Por eso "Modelos abiertos" es el primer candidato a recortar.

---

## Fuentes

| Dato | Fuente | |
|---|---|---|
| Qué pasa con los datos enviados y las medidas preventivas | Apunte de Franco, sección *Profilaxis* | |
| Claude entrena en consumo, con 5 años de retención | [Anthropic, 28/08/2025](https://www.anthropic.com/news/updates-to-our-consumer-terms) | ➕ |
| API de OpenAI: no entrena por defecto | [OpenAI docs](https://developers.openai.com/api/docs/guides/your-data) | ➕ |
| Gemini gratis: entrena y hay revisores humanos | [Gemini API terms](https://ai.google.dev/gemini-api/terms) | apunte [6] |
| Copilot Free/Pro entrena desde el 24/04/2026 | [The Register, 26/03/2026](https://www.theregister.com/2026/03/26/github_ai_training_policy_changes/) | ➕ |
| Altman: sin secreto profesional | [TechCrunch, 25/07/2025](https://techcrunch.com/2025/07/25/sam-altman-warns-theres-no-legal-confidentiality-when-using-chatgpt-as-a-therapist/) | ➕ |
| Anthropic: US$ 1.500 M, 482.460 obras | [Authors Guild](https://authorsguild.org/news/court-grants-final-approval-anthropic-copyright-settlement/) · [Guardian](https://www.theguardian.com/technology/2025/sep/05/anthropic-settlement-ai-book-lawsuit) | apunte [3] |
| Libros escaneados y destruidos ("Project Panama") | [Washington Post, 27/01/2026](https://www.washingtonpost.com/technology/2026/01/27/anthropic-ai-scan-destroy-books/) · [Guardian](https://www.theguardian.com/commentisfree/2026/aug/05/anthropic-ai-destroying-books) | apunte [20] |
| OpenAI: "imposible" sin copyright | [MobileSyrup, 09/01/2024](https://mobilesyrup.com/2024/01/09/openai-says-impossible-train-ai-without-copyrighted-works/) | ➕ |
| Reglas `deny` en el `settings.json` de Claude Code | [Docs de settings](https://code.claude.com/docs/en/settings) · [permisos](https://code.claude.com/docs/en/permissions) | ➕ |
| Director interino de CISA sube documentos a ChatGPT | [TechCrunch, 28/01/2026](https://techcrunch.com/2026/01/28/trumps-acting-cybersecurity-chief-uploaded-sensitive-government-docs-to-chatgpt/) · [CSO Online](https://www.csoonline.com/article/4124320/cisa-chief-uploaded-sensitive-government-files-to-public-chatgpt.html) | ➕ |
| Salesloft Drift: tokens OAuth robados, datos de Salesforce | [Google Threat Intelligence](https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift) · [FINRA](https://www.finra.org/rules-guidance/guidance/salesloft-drift-AI-supply-chain-attack) | ➕ |
| Drift: ~700 organizaciones; Cloudflare rotó 104 tokens | [CM-Alliance](https://www.cm-alliance.com/cybersecurity-blog/salesloft-drift-attack-one-compromised-integration-shakes-700-cos) · [The Record](https://therecord.media/salesloft-drift-breach-cloudflare-zscaler-palo-alto-networks) | ➕ |
| 77% pega datos en el chat; 82% desde cuentas personales | [The Register, 07/10/2025](https://www.theregister.com/2025/10/07/gen_ai_shadow_it_secrets) (informe de LayerX) | ➕ |
| GTG-1002 (80–90% hecho por IA) | [Anthropic, 13/11/2025](https://www.anthropic.com/news/disrupting-AI-espionage) | ➕ |
| Pérdidas de las plataformas | [isaiprofitable.com](http://isaiprofitable.com) | apunte [13] |
| Agua y energía (945 TWh en 2030) · 32 países con data centers de IA, 90% en dos | [ONU, 06/2026](https://news.un.org/es/story/2026/06/1541523) | apunte [14] |
| OpenAI corta su API en China, Rusia y otros (09/07/2024) | [The Register, 25/06/2024](https://www.theregister.com/2024/06/25/openai_unsupported_countries/) | ➕ |
| Dependencia digital | *Teoría de la dependencia digital*, Cecilia Rikap (Caja Negra, 2026) | apunte, bibliografía |
| Ruido de los data centers | [Infobae, 21/06/2026](https://www.infobae.com/estados-unidos/2026/06/21/el-zumbido-invisible-demandas-y-temor-por-la-expansion-de-los-centros-de-datos-en-barrios-residenciales-de-estados-unidos/) | apunte [15] |
| Data centers en LatAm | [Chequeado](https://chequeado.com/investigaciones/data-centers-en-america-latina-por-que-las-promesas-de-las-big-techs-no-coinciden-con-la-evidencia/) | apunte [16] |
| Ironía de la automatización | [arXiv 2608.23642](https://arxiv.org/abs/2608.23642) | apunte [17] |
| Deuda cognitiva (MIT) | [arXiv 2506.08872](https://arxiv.org/abs/2506.08872) | apunte [18] |
| Contratos con el Pentágono | [The Intercept, 08/09/2026](https://theintercept.com/2026/09/08/military-ai-weapons-contracts-openai-anthropic-google/) | apunte [21] |
| Palantir | [BBC Mundo](https://www.bbc.com/mundo/articles/cly6qn2gq07o) | apunte [22] |
| Amnistía Internacional: IA en la guerra | [Joint Statement on AI in Warfare](https://www.amnestyusa.org/blog/joint-statement-on-artificial-intelligence-ai-in-warfare/) | apunte [24] |
| Latam-GPT | [CENIA, 10/02/2026](https://cenia.cl/2026/02/10/latam-gpt-la-primera-ia-regional-abierta-creada-con-datos-latinoamericanos/) | apunte [9] |

### Lo que no pude confirmar

- **"Sam Altman asumió que se roba información."** No encontré una cita donde lo admita. Lo más cercano es TED 2025: le dijeron que algo "parece robo de propiedad intelectual", el público aplaudió y respondió *"You can clap about that all you want. Enjoy."* ([Laptop Mag](https://www.laptopmag.com/ai/open-ai-sam-altman-copyright-ted-talk)). En la slide usé la frase de OpenAI al Parlamento británico, que está bien documentada, y dejé la de TED en las notas por si alguien pregunta.
- **"ChatGPT le robó un problema matemático a investigadores."** Es el caso Navier–Stokes (sept. 2026), pero es una **acusación** que OpenAI niega. Quedó fuera de las slides. Si lo querés mencionar oralmente: [TechCrunch, 08/09/2026](https://techcrunch.com/2026/09/08/openai-fought-dirty-on-career-making-math-problem-says-nyu-mathematician/).
