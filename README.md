# ONCE Sports — Link in bio

Página "link in bio" (estilo Linktree) de **ONCE Sports**, publicada en GitHub Pages.
Reúne la tienda online, WhatsApp, Instagram y TikTok en un único enlace.

## Stack

- HTML5, CSS3 y JavaScript vanilla (ES modules).
- Sin frameworks, sin bundlers, sin `package.json` y sin dependencias.

## Estructura

```
index.html              Página principal
privacidad.html         Aviso de privacidad
404.html                Página de error
links.json              Enlaces (única fuente de verdad)
links.schema.json       JSON Schema de links.json
css/
  base.css              Reset, layout y componentes (mobile first)
  themes/default.css    Tokens de diseño y @font-face
js/app.js               Renderiza los enlaces desde links.json
assets/
  img/                  Fondo y logo
  fonts/                Poppins (.woff2)
  icons/                Favicons e iconos PWA
```

## Ver en local

`fetch()` no funciona con `file://`, así que sirve la carpeta con un servidor local:

```bash
python -m http.server 8000
```

Luego abre <http://localhost:8000>.

## Editar los enlaces

Todo se controla desde `links.json`:

- `featured: true` → botón destacado (crema).
- `enabled: false` → oculta el enlace sin borrarlo.

La estructura está definida en `links.schema.json`.

> Pendiente antes de publicar: reemplaza `[URL_TIENDA]` por la URL real de la tienda
> (también en el `<noscript>` de `index.html`).

## Añadir las fuentes

Coloca `poppins-500.woff2`, `poppins-700.woff2` y `poppins-800.woff2` en
`assets/fonts/` y descomenta el `<link rel="preload">` de `index.html`.

## Despliegue

`dev` es la rama de desarrollo; `main` es **producción** y la que publica GitHub Pages.

1. Repositorio → **Settings** → **Pages**.
2. Source: **Deploy from a branch** → rama `main` → carpeta `/ (root)`.

Para publicar cambios, integra `dev` en `main`:

```bash
git checkout main && git merge dev && git push origin main
```

## Licencia

El **código** se distribuye bajo la licencia [MIT](LICENSE).

El nombre, el logo y la identidad de **ONCE Sports**, así como las imágenes de marca,
**no** se incluyen en esa licencia y son propiedad de sus titulares. El código MIT es
reutilizable, pero no así la marca.
