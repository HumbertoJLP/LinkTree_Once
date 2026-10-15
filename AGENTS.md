# AGENTS.md

Guía para asistentes de IA que trabajen en este repositorio.

## Qué es este proyecto

Un sitio "link in bio" (estilo Linktree) para **ONCE Sports**, desplegado en
GitHub Pages. Es estático y sin dependencias.

## Reglas estrictas

- **No añadir dependencias**: nada de `package.json`, npm, frameworks, bundlers
  ni librerías. Solo HTML, CSS y JavaScript vanilla.
- **No usar `innerHTML`** con datos externos; crear nodos con `createElement` y
  usar `textContent`.
- **Mobile first**: el diseño base es ~390 px; los ajustes de escritorio van en
  `@media (min-width: 768px)`.
- **Usar `vw`/`vh` para tamaños**, nunca `cqw`/`cqh` (rompen el render).
- **Tokens de diseño** en `css/themes/default.css`; `css/base.css` solo usa
  variables CSS.
- **Contenido en español**, con acentos y aperturas (`¿`, `¡`).
- **No añadir comentarios** en el código salvo que aporten contexto no obvio.
- **No hacer commit** salvo que se pida explícitamente.

## Estructura

- `index.html` — página principal.
- `privacidad.html` — aviso de privacidad.
- `404.html` — página de error.
- `links.json` — fuente única de enlaces (esquema en `links.schema.json`).
- `css/base.css` — reset, layout y componentes.
- `css/themes/default.css` — tokens, `@font-face`, `@media` de escritorio.
- `js/app.js` — renderiza los enlaces desde `links.json`.
- `assets/img`, `assets/fonts`, `assets/icons` — recursos estáticos.

## Comandos

Servir en local (necesario porque `fetch()` falla en `file://`):

```bash
python -m http.server 8000
```

Validar que los JSON son válidos:

```bash
node -e "['links.json','links.schema.json','manifest.webmanifest'].forEach(f=>JSON.parse(require('fs').readFileSync(f,'utf8')))"
```

## Pendientes conocidos

- Reemplazar el marcador `[URL_TIENDA]` por la URL real de la tienda (en
  `links.json`, el `<noscript>` de `index.html`).
- Colocar las fuentes Poppins `.woff2` en `assets/fonts/` y descomentar el
  `<link rel="preload">` de `index.html`.
