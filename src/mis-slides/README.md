# Mi parte de la charla — secciones 1, 6, 3 y 5

19 diapositivas: 15 de contenido más una portada por sección. El orden interno
es el de exposición de mi bloque; al integrarlas al mazo general hay que
renumerarlas según dónde caiga cada sección.

| Archivo | Apunte | Tema |
|---|---|---|
| `01-portada-fundamentos` | — | **Portada de sección** |
| `02-modelos-de-lenguaje` | 1.1 | Qué es un LLM |
| `03-tokens` | 1.2 | Tokens: la unidad de trabajo |
| `04-seguridad-del-contexto` | 1.3 | Privacidad y superficie de exposición |
| `05-agentes-de-codigo` | 1.4 | Del chatbot al agente de código |
| `06-ide-vs-ade` | 1.5 | Un nuevo tipo de herramienta (IDE vs. ADE) |
| `07-decisiones-humanas` | 1.6 | Las decisiones de diseño no se delegan |
| `08-prompt-y-contexto-util` | 1.7 | Prompt y contexto útil |
| `09-portada-herramientas` | — | **Portada de sección** |
| `10-tools-y-evidencia` | 6.1 | Tools: el agente y la evidencia |
| `11-catalogo-de-herramientas` | 6.2 | Catálogo de herramientas |
| `12-portada-limites` | — | **Portada de sección** |
| `13-ventana-limitada` | 3.1 | Ventana de contexto limitada |
| `14-conocimiento-y-producto` | 3.2 | Conocimiento organizacional y producto ≠ código |
| `15-limites-conclusion` | 3.3 | Sin ingeniería, la IA acelera la deuda |
| `16-portada-modelos` | — | **Portada de sección** |
| `17-criterio-de-modelos` | 5.1 | Criterio para elegir modelo |
| `18-escalera-de-modelos` | 5.2 | Tres familias, los mismos escalones |
| `19-lectura-economica` | 5.3 | Lectura económica |

Las cuatro portadas comparten `src/components/PortadaSeccion.tsx` (número,
kicker, título, una línea de promesa y los temas que vienen).

### Los números son provisorios

Cada portada muestra el número de su sección **en el apunte** (01, 06, 03, 05),
no la posición en el mazo final. Sirve para ubicarse mientras las tres partes
están separadas; en la charla se ven fuera de orden.

Al integrar hay dos caminos, los dos de un renglón por archivo:

- **Renumerar**: cambiar el prop `numero` por la posición real del bloque.
- **Sacarlos**: borrar el prop `numero` de las cuatro portadas, la línea
  `<span className="pk-num">` de `PortadaSeccion.tsx` y el bloque
  `.portada-kicker .pk-num` de `mis-slides.css`.

## Cómo verla

`src/deck/registry.ts` está apuntando temporalmente a esta carpeta
(`../mis-slides/*.tsx`) para poder ver el bloque solo. **Ese cambio no se
commitea**: al integrar, hay que restaurar `../slides/*.tsx` y mover los
archivos con el prefijo numérico que corresponda.

```bash
npm run dev   # http://localhost:5173
```

## Piezas nuevas

Todo se apoya en `tokens.css` y `system.css`. Lo propio vive en:

- `src/styles/mis-slides.css` — tira de tokens, stats, figuras, escalera de
  modelos. Importado desde `global.css`.
- `src/components/CapasAbstraccion.tsx` — diagrama de capas + IDE + ADE (1.5).
- `src/components/CicloEvidencia.tsx` — ciclo contexto/acción/validación (6.1).

## Arreglo de encuadre (toca archivos compartidos)

La tipografía y los espaciados escalaban sólo por **ancho** (`vw`), así que en
cualquier ventana más baja que 16:9 —un navegador con barras, 16:10, un
proyector— el contenido se salía por arriba y tapaba el header.

Corregido en `tokens.css` y `system.css`: el término medio de cada `clamp()`
ahora toma el **menor entre ancho y alto** (`min(Xvw, Yvh)`, con
`1vw = 1.7778vh` en el lienzo de referencia 1920×1080). En 16:9 el render es
idéntico al original; en ventanas más bajas todo escala junto.

Verificado en 1920×1080, 1920×945, 1536×730 y 1366×640: las 15 diapositivas de
este bloque entran sin pisar header ni pie. El mismo arreglo destraba dos
diapositivas del mazo de `main` que también se superponían.

Si se edita el contenido, conviene volver a chequear el encuadre antes de
presentar.
