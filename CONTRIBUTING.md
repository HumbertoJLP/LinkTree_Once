# Guía de contribución

¡Gracias por tu interés en mejorar este proyecto! Es un sitio "link in bio"
estático y deliberadamente simple, así que las contribuciones deben respetar esa
filosofía.

## Reglas del proyecto

- **Sin dependencias.** No se añaden `package.json`, frameworks, bundlers ni
  librerías externas. Todo es HTML, CSS y JavaScript vanilla.
- **Mobile first.** El diseño parte de ~390 px; las mejoras para pantallas
  grandes van dentro de `@media (min-width: 768px)`.
- **Tamaños en `vw`/`vh`**, no en `cqw`/`cqh`.
- **Contenido en español**, con acentos y signos de apertura correctos.
- **Tokens de diseño** en `css/themes/default.css`; `css/base.css` solo usa
  variables.

## Cómo probar en local

`fetch()` no funciona con `file://`. Levanta un servidor:

```bash
python -m http.server 8000
```

Y abre <http://localhost:8000>.

## Flujo de trabajo

1. Crea una rama a partir de `dev`.
2. Haz cambios pequeños y enfocados.
3. Comprueba que el sitio funciona en móvil (DevTools) y escritorio.
4. Verifica que los JSON siguen siendo válidos.
5. Abre un Pull Request describiendo el cambio.

## Añadir o editar un enlace

Edita únicamente `links.json` (estructura en `links.schema.json`). No añadas
enlaces directamente en el HTML salvo el fallback dentro de `<noscript>`.
