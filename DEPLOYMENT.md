# Despliegue en GitHub Pages con gh-pages

Esta guía explica cómo desplegar una aplicación React en GitHub Pages usando `gh-pages`, qué hace cada pieza y por qué el proceso funciona así.

## 1. Explicación conceptual

### Desarrollo vs build de producción

Durante el desarrollo trabajas sobre el código fuente en `src/`. Ahí viven componentes React, JSX, imports de módulos, estilos y lógica de enrutado. Ese código no está listo para ser servido directamente por un hosting estático.

Cuando ejecutas:

```bash
npm run build
```

Vite transforma la aplicación a una versión de producción dentro de `dist/`:

- compila JSX a JavaScript compatible con navegador;
- resuelve y agrupa imports;
- minimiza JavaScript y CSS;
- genera nombres versionados para assets;
- produce un `index.html` preparado para cargar esos ficheros compilados.

En otras palabras: `src/` es código fuente para el bundler; `dist/` es artefacto listo para el navegador.

### Por qué GitHub Pages no puede servir JSX ni rutas de desarrollo

GitHub Pages es un hosting estático. Sirve archivos tal como existen en disco: HTML, CSS, JS, imágenes y otros recursos estáticos. No ejecuta Vite, no transpila JSX y no resuelve imports de desarrollo.

Si intentas publicar el proyecto fuente en vez de la build, aparecen problemas como estos:

- el navegador recibe archivos `.jsx` o imports de `src/` que Pages no sabe transformar;
- el HTML puede seguir apuntando a rutas de desarrollo como `/src/main.jsx`;
- React Router con `BrowserRouter` falla al refrescar una ruta si el servidor no sabe devolver siempre `index.html`.

Ese es el motivo de fondo: GitHub Pages no ejecuta tu pipeline de frontend; solo entrega archivos ya preparados.

### Qué hace `gh-pages` internamente

El paquete `gh-pages` automatiza la publicación del contenido compilado en una rama separada, normalmente `gh-pages`.

Cuando ejecutas:

```bash
npm run deploy
```

ocurre esto:

1. npm ejecuta primero `predeploy` si existe.
2. En este proyecto, `predeploy` corre `npm run build`.
3. `gh-pages -d dist` toma el contenido de `dist/`.
4. Crea o actualiza la rama `gh-pages` con esos archivos generados.
5. Hace commit de la build publicada.
6. Hace push de esa rama al remoto.

La idea importante es que tu código fuente sigue viviendo en `main`, pero el sitio publicado vive en `gh-pages` como resultado compilado.

## 2. Configuración paso a paso

### Instalar `gh-pages`

```bash
npm install --save-dev gh-pages
```

En este repositorio ya está instalado como dependencia de desarrollo en [package.json](package.json).

### Configurar `package.json`

Configuración mínima habitual:

```json
{
  "homepage": "https://usuario.github.io/repositorio",
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

En este proyecto la configuración real es esta:

```json
{
  "homepage": "https://eliasosoriio.github.io",
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Qué significa cada parte:

- `build`: genera la versión de producción.
- `predeploy`: npm lo ejecuta automáticamente antes de `deploy`.
- `deploy`: publica el contenido de `dist/` en la rama `gh-pages`.
- `homepage`: documenta la URL pública del sitio y ayuda a dejar clara la URL objetivo del despliegue. En proyectos con Create React App tiene impacto directo; en Vite el prefijo real de assets lo controla `base`.

### Configurar `vite.config.js`

En Vite la propiedad relevante es `base`, porque define el prefijo con el que se generan las URLs de assets y chunks.

Ejemplo para un repositorio de proyecto:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/mi-repositorio/',
})
```

Ejemplo para un user site como `usuario.github.io`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

En este repositorio no hace falta `base` porque el nombre es `eliasosoriio.github.io` y GitHub Pages lo sirve desde la raíz `/`. Si el repositorio fuese `portfolio` o `mi-web`, entonces sí tendrías que usar:

```js
base: '/portfolio/'
```

### Configurar GitHub Pages en GitHub

Después del primer despliegue:

1. Abre el repositorio en GitHub.
2. Entra en `Settings`.
3. Abre `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Elige la rama `gh-pages`.
6. Selecciona la carpeta `/ (root)`.
7. Guarda la configuración.

Una vez hecho eso, GitHub Pages servirá exactamente el contenido de la rama `gh-pages`.

## 3. Flujo de trabajo

### Qué hacer después de cada cambio

Flujo recomendado:

1. Modifica el código en `src/`, `public/` o la configuración.
2. Comprueba el cambio en local con `npm run dev`.
3. Si todo está correcto, guarda y haz commit de tu código fuente.
4. Ejecuta `npm run deploy` para generar y publicar la nueva build.
5. Verifica el resultado en la URL pública de GitHub Pages.

### Diferencia entre `git push` y `npm run deploy`

`git push` y `npm run deploy` no hacen lo mismo.

#### `git push`

```bash
git push origin main
```

Qué ocurre:

- subes tu código fuente a la rama `main`;
- GitHub guarda tu historial y tus cambios de desarrollo;
- no necesariamente se actualiza la web publicada.

Si estás desplegando con `gh-pages`, hacer push a `main` por sí solo no publica la nueva versión del sitio.

#### `npm run deploy`

```bash
npm run deploy
```

Qué ocurre:

- se ejecuta `predeploy`;
- se genera `dist/`;
- `gh-pages` publica esa build en la rama `gh-pages`;
- GitHub Pages detecta el cambio y actualiza la web.

Resumen práctico:

- `git push` publica código fuente en GitHub;
- `npm run deploy` publica la aplicación compilada para producción.

### Qué ocurre en cada comando importante

```bash
npm run dev
```

- arranca el servidor de desarrollo de Vite;
- recompila al vuelo;
- no genera una build real de producción.

```bash
npm run build
```

- compila la app para producción;
- genera `dist/`.

```bash
npm run preview
```

- sirve localmente lo que hay en `dist/`;
- permite probar la build final antes de desplegar.

```bash
npm run deploy
```

- ejecuta `npm run build` por el hook `predeploy`;
- sube `dist/` a `gh-pages`.

## 4. Problemas comunes y soluciones

### Página en blanco al abrir la web

Causas habituales:

- `base` incorrecto en Vite;
- assets apuntando a rutas que no existen;
- error de JavaScript al arrancar la app.

Cómo diagnosticar:

1. abre las DevTools del navegador;
2. revisa `Console` y `Network`;
3. comprueba si los JS y CSS cargan con `200` o con `404`.

Solución típica:

- si el repo es `usuario.github.io`, deja `base` sin definir;
- si el repo es de proyecto, usa `base: '/nombre-del-repo/'`;
- vuelve a ejecutar `npm run deploy`.

### Error MIME type: se está sirviendo JSX como `text/jsx` o similar

Esto suele indicar que se está publicando el proyecto fuente en lugar de la build.

Síntoma típico:

- el `index.html` intenta cargar algo como `/src/main.jsx`;
- el navegador rechaza ese recurso porque GitHub Pages no transpila JSX.

Solución:

- asegúrate de publicar `dist/` y no la raíz del proyecto;
- usa `gh-pages -d dist`;
- comprueba que en la rama `gh-pages` existe un `index.html` compilado y una carpeta `assets/`.

### Errores 404 en assets con rutas como `/src/...`

Esto significa casi siempre que el HTML publicado no es el generado por Vite.

Solución:

- verifica que `npm run build` genera `dist/index.html`;
- verifica que `npm run deploy` publica la carpeta `dist`;
- no subas manualmente archivos fuente esperando que Pages los procese.

### Problemas con rutas en React Router

Si usas `BrowserRouter`, al refrescar en `/blog` o entrar directamente a `/contacto`, GitHub Pages intenta encontrar un archivo real en esa ruta y puede responder `404`.

Opciones:

1. usar `HashRouter` para evitar dependencia del servidor;
2. mantener `BrowserRouter` y añadir un fallback SPA.

Este proyecto usa la segunda opción:

- [public/404.html](public/404.html) redirige las rutas desconocidas;
- [src/main.jsx](src/main.jsx#L1) restaura la URL original antes de montar React.

### Problemas con `base` mal configurado

Casos típicos:

- `base: '/'` en un repositorio de proyecto, lo que rompe rutas de assets;
- `base: '/repo/'` en un user site, lo que añade un prefijo incorrecto.

Regla útil:

- user site `usuario.github.io`: normalmente `base` no hace falta;
- project site `usuario.github.io/repo`: usa `base: '/repo/'`.

## 5. Buenas prácticas

### `HashRouter` vs `BrowserRouter`

`HashRouter`:

- más simple para GitHub Pages;
- no necesita fallback del servidor;
- genera URLs con `#`, por ejemplo `/#/blog`.

`BrowserRouter`:

- genera URLs limpias, por ejemplo `/blog`;
- requiere soporte del servidor o un fallback SPA;
- es preferible si quieres URLs más limpias y ya controlas el fallback.

En este proyecto tiene sentido `BrowserRouter` porque ya existe un fallback compatible con GitHub Pages.

### Evitar rutas absolutas incorrectas

No apuntes manualmente a ficheros fuente como estos:

```html
<script type="module" src="/src/main.jsx"></script>
```

Ese patrón solo es válido durante desarrollo con Vite. En producción debes dejar que Vite genere el HTML final y las referencias a `assets/`.

Cuando trabajes con imágenes o recursos:

- usa `public/` para archivos públicos que deban copiarse tal cual;
- usa imports de módulos cuando el recurso deba pasar por el bundler;
- evita construir rutas absolutas manualmente si dependen del `base` de despliegue.

### Manejo de caché del navegador

Es normal que GitHub Pages o el navegador mantengan temporalmente algunos recursos en caché.

Buenas prácticas:

- Vite ya genera nombres con hash para assets, lo que reduce problemas de caché;
- después de desplegar, si no ves cambios, prueba recarga forzada con `Ctrl+F5` o `Cmd+Shift+R`;
- si cambias HTML o configuración de rutas, comprueba también la caché del documento principal.

## 6. Resumen operativo

Si quieres una versión corta del proceso:

1. desarrollas en `src/`;
2. generas la build con `npm run build`;
3. publicas `dist/` con `npm run deploy`;
4. GitHub Pages sirve la rama `gh-pages`;
5. el sitio público nunca debe depender de JSX ni de rutas de desarrollo.

## 7. Referencias en este repositorio

- Scripts de despliegue en [package.json](package.json)
- Configuración de Vite en [vite.config.js](vite.config.js)
- Fallback SPA para GitHub Pages en [public/404.html](public/404.html)
- Restauración de ruta antes de montar React en [src/main.jsx](src/main.jsx#L1)
