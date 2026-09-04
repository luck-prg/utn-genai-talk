# Diseñando el futuro del desarrollo con GenAI

Presentación web (no un PowerPoint) para la charla de UTN sobre desarrollo de
software asistido por agentes de IA. Construida con **Vite + React +
TypeScript**, animada con **Motion**, y pensada para desplegarse en
**Vercel**.

## Tesis

> El valor de desarrollar software de calidad se duplicó.

La IA generativa no elimina el rol del ingeniero: lo desplaza hacia una capa
de mayor abstracción. El trabajo ya no consiste solo en escribir código, sino
en diseñar contexto, especificaciones, evaluaciones y sistemas de
orquestación para que los agentes produzcan software escalable, predecible y
mantenible.

## Arrancar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # compila a dist/
npm run preview   # sirve el build local
npm run typecheck # solo TypeScript, sin build
```

## Controles del presentador

| Tecla | Acción |
|---|---|
| `→` `espacio` `PageDown` `N` | Siguiente |
| `←` `PageUp` `P` | Anterior |
| `Home` / `End` | Primera / última |
| `O` | Vista de todas las diapositivas |
| `F` · `F5` | Pantalla completa |
| `B` · `.` | Pantalla en negro |
| `Esc` | Salir de lo que esté abierto |

Con el mouse: clic en cualquier parte para avanzar, franja izquierda o clic
derecho para retroceder. También funciona el swipe en tablet/celular. La URL
siempre refleja la diapositiva actual (`/#/agenda`), así que se puede
compartir un link directo o recargar sin perder el lugar.

## Una diapositiva = un archivo

Todas las diapositivas viven en `src/slides/`, una por archivo, numeradas
(`01-portada.tsx`, `02-frase-apertura.tsx`, ...). No hay ninguna lista
central que editar: `src/deck/registry.ts` levanta los archivos solos con
`import.meta.glob` y los ordena por el prefijo numérico.

- **Agregar una diapositiva** → copiá `_plantilla.tsx` a `NN-mi-tema.tsx`.
- **Reordenar** → renombrá el prefijo numérico.
- **Desactivar sin borrar** → renombrala con `_` adelante.
- **Borrar** → borrá el archivo.

Ver `src/slides/_plantilla.tsx` para la referencia completa de piezas
disponibles (`.prompt`, `.display`, `.cards`, `.two-col`, `.loop`,
`.code-panel`, etc. — definidas en `src/styles/system.css`).

## Estructura

```
src/
  deck/            Motor de la presentación (no hace falta tocarlo)
    registry.ts      Descubre las diapositivas automáticamente
    Deck.tsx         Monta la diapositiva activa y anima la transición
    DeckProvider.tsx Estado, navegación y deep links
    transitions.ts   Variantes de animación entre diapositivas
    Overview.tsx     Vista de resumen (tecla O)
  components/      Piezas reutilizables (SlideFrame, UtnLogo, SpecKitTerminal)
  hooks/           Controles de teclado/touch
  slides/          ← acá se arma el contenido de la charla
  styles/
    tokens.css       Paleta, tipografías y tiempos — la identidad visual vive acá
    system.css       Clases de componentes (prompt, cards, code-panel, etc.)
    global.css       Base y layout del lienzo
```

## Deploy en Vercel

El repo trae `vercel.json`. Vercel detecta Vite y publica `dist/`.

```bash
npx vercel        # preview
npx vercel --prod # producción
```

## Material de referencia

- [Material de la charla](docs/charla-genai-utn-material.md)
- [Recomendaciones de audiencia](docs/audiencia-y-recomendaciones-charla.md)
- [Investigación de research](docs/research/)

## Temas principales

- Context Engineering
- Spec-Driven Development
- Evaluaciones de agentes
- Orquestación multi-agente
- Buenas prácticas para desarrollo estructurado con GenAI

## Oradores

- Alan Julián De Angelis — GenAI Technical Leader, Mercado Libre
- Luciano Rodriguez — GenAI Software Engineer, Mercado Libre
