# Mi parte de la charla — 1.1.1, 1.1.2, 1.1.3, 1.3.2, 2.2.1, 2.2.2 y 3.1

37 diapositivas: 32 de contenido y 5 portadas de sección, con 108 pasos en
total. El orden interno ya sigue la numeración global del mazo
(1.x → 2.x → 3.x): el bloque de modelos (3.1) quedó al final, después de
madurez y la pirámide.

| Archivo | Sección | Tema |
|---|---|---|
| `01-portada-fundamentos` | 1.1.1 | **Portada de sección** · LLM y tokens |
| `02-modelos-de-lenguaje` | 1.1.1 | Una función que predice el siguiente token |
| `03-alucinaciones` | 1.1.1 | Plausible ≠ verídico |
| `04-large-language-model` | 1.1.1 | Las tres palabras del nombre |
| `05-tokens` | 1.1.1 | **Tokenizer en vivo**, con tokenización real |
| `06-strawberry` | 1.1.1 | Falla de tokenización, no de razonamiento |
| `07-prefill-decode` | 1.1.1 | **Prefill paralelo vs. decode secuencial** y el KV cache |
| `08-agentes-de-codigo` | 1.1.2 | Del chatbot al agente de código (sin portada: cambia el rótulo a 1.1.2) |
| `09-que-es-un-ade` | 1.1.2 | Qué es un ADE, antes de compararlo |
| `10-ide-vs-ade` | 1.1.2 | Dónde cae en la escalera de abstracciones |
| `11-ide-vs-ade-flujo` | 1.1.2 | **De tipear a revisar** · son complementarias |
| `12-debate-abierto` | 1.1.2 | ¿Es realmente una capa más? |
| `13-decisiones-humanas` | 1.1.2 | Lo que no se delega |
| `14-prompt-y-contexto-util` | 1.1.2 | Diseñar contexto, no prompts largos |
| `15-portada-herramientas` | 1.1.3 | **Portada de sección** · Herramientas |
| `16-demo-sin-tools` | 1.1.3 | Demo: la misma pregunta, dos respuestas |
| `17-catalogo-de-herramientas` | 1.1.3 | Catálogo con semáforo · **acá entra "harness"** |
| `18-panel-de-permisos` | 1.1.3 | **Capacidad y riesgo suben juntos** |
| `19-portada-limites` | 1.3.2 | **Portada de sección** · IA sin ingeniería |
| `20-rechazar-codigo` | 1.3.2 | La frase, sola |
| `21-metr` | 1.3.2 | **El estudio de METR** |
| `22-ventana-limitada` | 1.3.2 | Límite 1 · No ve el sistema completo |
| `23-conocimiento-organizacional` | 1.3.2 | Límite 2 · Conocimiento organizacional ausente |
| `24-producto-no-es-codigo` | 1.3.2 | Límite 3 · Producto y código no son lo mismo |
| `25-limites-conclusion` | 1.3.2 | Sin ingeniería, la IA acelera la deuda |
| `26-portada-madurez` | 2.2.1 | **Portada de sección** · Madurez |
| `27-modelo-mas-harness` | 2.2.1 | Agente = modelo + harness |
| `28-nivel-0-y-1` | 2.2.1 | Niveles 0 y 1 |
| `29-nivel-2-y-3` | 2.2.1 | Niveles 2 y 3 |
| `30-responsabilidad` | 2.2.1 | La responsabilidad del ingeniero |
| `31-piramide-votacion` | 2.2.2 | **La pirámide y la votación** (sin portada: rótulo 2.2.2) |
| `32-portada-modelos` | 3.1 | **Portada de sección** · Modelos |
| `33-criterio-de-modelos` | 3.1 | El más barato que resuelva la tarea |
| `34-ejes-de-clasificacion` | 3.1 | Cuatro ejes, sin nombres propios |
| `35-receta-por-tarea` | 3.1 | Económicos, balanceados y premium |
| `36-escalera-de-modelos` | 3.1 | **La matriz**: nombres concretos y precios de referencia |
| `37-corre-en-algun-lado` | 3.1 | Local vs. remoto · cierre del bloque |

Las cinco portadas comparten `src/components/PortadaSeccion.tsx`.

## Diapositivas por pasos

El mazo tiene un sistema de **pasos internos**: una diapositiva declara
`steps: N` en su `meta` y la flecha (o el clicker) consume esos pasos antes de
pasar a la siguiente. Cada bloque dice en qué paso entra:

```tsx
export const meta: SlideMeta = { title: "…", steps: 3 };
…
<Paso n={1}>aparece al primer clic</Paso>
<Paso n={2}>y esto al segundo</Paso>
```

Para lógica en vez de layout está `useStep()`, que devuelve el paso actual.
El pie muestra un punto por paso, así se ve de un vistazo si al avanzar seguís
en la misma diapositiva o saltás a la siguiente.

En la vista de resumen (tecla O) las miniaturas se dibujan con todos los pasos
dados, para que se vea la diapositiva completa.

## Las animaciones, por prioridad

1. `05-tokens` — tokenizer en vivo, editable durante la charla
2. `07-prefill-decode` — prefill paralelo, decode secuencial, KV cache
3. `37-piramide-votacion` — la pirámide con la votación del aula *(cierre)*
4. `18-panel-de-permisos` — los switches y los dos medidores
5. `21-metr` — predicho / medido / percibido
6. `22-ventana-limitada` — el haz de la linterna sobre el plano
7. `11-ide-vs-ade-flujo` — el editor contra el kanban de ramas

## El tokenizer es real

`05-tokens` y `06-strawberry` tokenizan de verdad, con el vocabulario
`o200k_base` a través de `js-tiktoken`. La caja de texto de `05` es editable:
se puede tipear una frase que tire el público y ver cómo se parte. El
diccionario pesa ~2 MB y se carga **bajo demanda**, en su propio chunk, así que
no afecta el arranque del mazo.

## Decisiones de contenido

- **El criterio antes que los nombres.** `27`–`29` trabajan con ejes y gamas
  sin nombrar modelos, y recién `30` pone nombres concretos, cuando el criterio
  ya está. Conviene decir en voz alta que `30` es la diapositiva que más rápido
  caduca de toda la charla.
- **Los precios de `30` salen del apunte** (`docs/charla-genai-utn-material.md`,
  tabla de Anthropic consultada el 2026-08-11), en USD por millón de tokens de
  salida. Muestran el factor de diez entre escalones; no son un tarifario.
- **Gemini va sin número de versión.** El apunte listaba tres minor versions
  distintas dentro de la misma familia, que era un error de transcripción. Los
  nombres de gama (Pro, Flash, Flash-Lite) sí son estables.
- **"Harness" se nombra en `17`**, dentro de la sección de herramientas, con una
  definición de una línea, y se desarrolla en `33`. Coordinarlo con Lucho.
- **Las alucinaciones se explican en `03`**, antes de todo lo demás, como
  pedían los comentarios c7 y c8 del documento.

## Piezas nuevas

Todo se apoya en `tokens.css` y `system.css`. Lo propio vive en:

- `src/styles/mis-slides.css` — tira de tokens, stats, figuras, portadas.
- `src/styles/interactivos.css` — pasos, tokenizer, prefill/decode, IDE vs ADE,
  panel de permisos, gráfico METR, gamas, escalera y pirámide.
- `src/components/Paso.tsx` — bloques que entran en un paso dado.
- `src/components/TokenizerVivo.tsx` — tokenización real bajo demanda.
- `src/components/PrefillDecode.tsx`, `IdeVsAde.tsx`, `PanelDePermisos.tsx`,
  `BarrasMetr.tsx`, `Linterna.tsx`, `Piramide.tsx` — una por animación.
- `src/components/CapasAbstraccion.tsx` — ya existía.

## El gráfico de METR

Es el único gráfico de datos del mazo, así que sigue la guía de visualización:
barras divergentes alrededor del cero (la posición lleva el signo), el par de
color validado contra el fondo papel (`#0f6fa8` creencia y `#e8482b` medición,
con las seis verificaciones en verde) y **el valor escrito al lado de cada
barra**, para que la lectura nunca dependa sólo del color.

## Encuadre

Dos reglas sostienen el encuadre, y conviene no tocarlas:

- `.s-body` centra con `justify-content: safe center`, no con `center` a secas.
  Al centrar, un contenido más alto que el cuerpo se desborda por **arriba y
  por abajo por igual**, y lo de arriba termina dibujado encima del header. Con
  `safe`, si no entra se alinea al tope y nunca lo pisa.
- `.s-body` lleva además `overflow: hidden`, por la misma razón del otro lado:
  sin eso, lo que sobra se dibuja encima del pie. Con las dos reglas el cuerpo
  no puede pisar ni el header ni el footer — a lo sumo se recorta, que se nota.

`.slide` también tiene `overflow: hidden`: lo que no entra **se recorta**, no
scrollea. Las figuras SVG altas van envueltas en `.fig-fit`, que les da el
espacio que sobra en vez de un alto fijo en `vh`, y las diapositivas que son
casi todo figura (como `10`) pasan `bodyClass="a-sangre"` a `SlideFrame` para
cederle a la figura el padding vertical del cuerpo.

Las portadas de sección son las más ajustadas: entran con un título de dos
líneas, una promesa de hasta ~75 caracteres (dos líneas) y una fila de temas.
Si la promesa se va a tres líneas, la portada deja de entrar.

Si se edita el contenido de una diapositiva con figura, conviene volver a
mirarla en 16:9 y en una ventana baja antes de presentar.

## Cómo verla

`src/deck/registry.ts` apunta temporalmente a esta carpeta para poder ver el
bloque solo. **Ese cambio no se commitea**: al integrar hay que restaurar
`../slides/*.tsx` y mover los archivos con el prefijo numérico que corresponda.

```bash
npm run dev   # http://localhost:5173
```
