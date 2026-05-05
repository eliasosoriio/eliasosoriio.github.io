# eliasosoriio.github.io

Web personal y portfolio de Elías Osorio. Construida con React, Vite, React Router y Tailwind. Incluye blog, proyectos y trayectoria.

[![Estado](https://img.shields.io/badge/estado-operativo-2d9d78?style=for-the-badge)](https://eliasosoriio.github.io)
[![Frontend](https://img.shields.io/badge/frontend-React_19-61dafb?style=for-the-badge&logo=react&logoColor=000000)](package.json)
[![Build](https://img.shields.io/badge/build-Vite_7-646cff?style=for-the-badge&logo=vite&logoColor=ffffff)](package.json)
[![Router](https://img.shields.io/badge/router-React_Router_7-ca4245?style=for-the-badge&logo=reactrouter&logoColor=ffffff)](package.json)
[![Estilos](https://img.shields.io/badge/estilos-Tailwind_CSS_4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)](package.json)
[![UI](https://img.shields.io/badge/ui-Flowbite_React-1c64f2?style=for-the-badge&logo=flowbite&logoColor=ffffff)](package.json)

**Stack principal:** React 19, Vite, React Router, Tailwind CSS 4, Flowbite React y Heroicons.

**Objetivo del proyecto:** mantener una presencia personal clara y editable, con un blog de notas técnicas, una página dedicada al recorrido profesional y un canal directo de contacto, sin depender de plataformas externas.

- [eliasosoriio.github.io](#eliasosoriocom)
  - [Estado del proyecto](#estado-del-proyecto)
  - [Descripción](#descripción)
  - [Instalación / Puesta en marcha](#instalación--puesta-en-marcha)
  - [Scripts disponibles](#scripts-disponibles)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Rutas principales](#rutas-principales)
  - [Sistema de blog](#sistema-de-blog)
  - [Decisiones técnicas](#decisiones-técnicas)
  - [Despliegue](#despliegue)
  - [Mantenimiento](#mantenimiento)
  - [Sobre el autor](#sobre-el-autor)
  - [Licencia](#licencia)

## Estado del proyecto

El proyecto se encuentra operativo como web personal y portfolio público. Reúne presentación, trayectoria, clientes, blog y contacto en una sola SPA estática que puede desplegarse en cualquier hosting compatible.

## Descripción

`eliasosoriio.github.io` centraliza la presencia personal de Elías Osorio en una única aplicación React. La interfaz está diseñada como un portfolio minimalista: tipografía Inter en todo el sitio, paleta acotada (gris, gris oscuro y un acento), y un sistema visual coherente entre páginas internas (eyebrow + título + descripción + contenido).

La aplicación incluye:

- portada con presentación, tarjeta de disponibilidad y enlaces directos a las secciones principales;
- página dedicada de "Sobre mí" con bio extendida, formas de trabajar, trayectoria, clientes, formación e idiomas;
- blog con listado por años (estilo b-r.io) y vista de detalle por artículo;
- página de contacto con canales prioritarios (correo electrónico, GitHub, LinkedIn) y badge de disponibilidad;
- página 404 dedicada para rutas inexistentes.

El contenido del blog y de la sección de clientes se mantiene actualmente en archivos planos dentro de `src/data` y `src/pages`, sin necesidad de CMS externo.

## Instalación / Puesta en marcha

### Requisitos

- Node.js 20 o superior recomendado.
- npm 10 o superior recomendado.

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor de desarrollo de Vite quedará disponible en local, normalmente en `http://localhost:5173`.

### Build de producción

```bash
npm run build
```

La salida optimizada se genera en la carpeta `dist/`.

### Vista previa local de producción

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev`: inicia el entorno de desarrollo con Vite.
- `npm run build`: genera la build de producción.
- `npm run preview`: sirve localmente la build generada.
- `npm run lint`: ejecuta ESLint sobre el código del proyecto.
- `npm run deploy`: ejecuta la build y publica `dist/` en la rama `gh-pages` mediante `gh-pages`.

## Estructura del proyecto

```text
eliasosoriio.github.io/
├── public/                   # Recursos públicos (favicon, fotos de portadas de posts)
│   └── posts/                # Imágenes utilizadas como cover de cada artículo
├── src/
│   ├── assets/               # Recursos del frontend, incluidas fuentes
│   ├── components/
│   │   ├── layout/           # Header, Hero, Footer, ScrollToTop
│   │   ├── sections/         # Secciones reutilizables (LatestPosts, Clients, ContactCTA)
│   │   └── ui/               # Componentes pequeños (Profile)
│   ├── data/                 # Datos estáticos (posts.js)
│   ├── pages/                # Home, About, Blog, Post, PostRoute, Contact, NotFound
│   ├── styles/               # Hoja global y estilos base
│   ├── App.jsx               # Definición de rutas y estructura general
│   └── main.jsx              # Punto de entrada de React
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Rutas principales

- `/`: portada con hero, accesos rápidos, últimos posts, clientes y CTA de contacto.
- `/sobre-mi`: bio, principios de trabajo, trayectoria laboral, clientes, formación e idiomas.
- `/blog`: listado de artículos agrupados por año (más recientes primero), con fecha en formato corto a la derecha.
- `/blog/:slug`: vista de detalle de un artículo con portada, fecha, tiempo de lectura y cuerpo formateado.
- `/contacto`: canales de contacto con eyebrow, lista de plataformas y panel lateral con disponibilidad y especialidades.
- `*`: página 404 con CTA de retorno al inicio.

## Sistema de blog

Los artículos viven en `src/data/posts.js` como un array de objetos. Cada post incluye:

- `slug`: identificador único usado en la URL.
- `title`, `description`, `date`, `isoDate`, `readingTime`.
- `cover` y `coverAlt`: portada del artículo (servidas desde `public/posts/`).
- `body`: array de bloques con `type` (`p`, `h2`, `quote`) y `text`.

El renderizado se delega en `src/pages/Post.jsx`, que mapea cada bloque a su componente correspondiente. La página `/blog` agrupa los posts por año mediante `getPostsByYearDesc()` y la portada de `/` muestra los tres más recientes mediante `slice(0, 3)`.

## Decisiones técnicas

- **React Router** gestiona la navegación entre páginas y el detalle de cada artículo. Un componente `ScrollToTop` lleva el scroll al inicio en cada cambio de ruta.
- **Tailwind CSS 4** se utiliza para el sistema de utilidades. La paleta y la fuente personalizada se declaran en `src/styles/styles.css` mediante `@theme`.
- **Flowbite React** aporta algunos componentes puntuales (avatar). El header se reescribió a mano para evitar dependencias innecesarias y simplificar el estado activo por ruta.
- **Heroicons** se usa para los iconos de la página de contacto y otros detalles puntuales.
- El contenido editorial (posts, clientes, trayectoria) se mantiene en archivos JS planos para facilitar la edición y mantener el repositorio sin servicios externos.
- `scrollbar-gutter: stable` se aplica a `<html>` para evitar que el layout salte horizontalmente al navegar entre páginas con y sin scroll.

## Despliegue

El proyecto puede publicarse en GitHub Pages mediante `gh-pages`, manteniendo `BrowserRouter`. Para evitar el 404 al refrescar o abrir directamente rutas internas como `/blog` o `/contacto`, el repositorio incluye un fallback SPA:

- `public/404.html` redirige cualquier ruta desconocida a `/?p=...`;
- `src/main.jsx` restaura la URL original antes de que React Router monte la aplicación.

Para publicar en GitHub Pages:

- ejecuta `npm run deploy`;
- `predeploy` lanzará `npm run build` automáticamente;
- `gh-pages -d dist` publicará la build en la rama `gh-pages`;
- si el repositorio sigue siendo `eliasosoriio.github.io`, la web se sirve desde la raíz `/` y no hace falta configurar `base` en Vite.

La guía completa de despliegue está en [DEPLOYMENT.md](DEPLOYMENT.md).

## Mantenimiento

Si se publica un nuevo artículo, hay que añadir la entrada correspondiente al array `posts` en `src/data/posts.js` (incluyendo `slug`, `isoDate` y `cover`) y dejar la imagen en `public/posts/`.

Si se modifica contenido institucional o personal, revisa también:

- la sección `clientWork` y `timeline` en `src/pages/About.jsx` cuando cambien clientes o roles;
- el array `clients` en `src/components/sections/Clients.jsx` para la portada;
- el bloque de canales en `src/pages/Contact.jsx` y los iconos sociales del Hero.

## Sobre el autor

Soy Elías Osorio Pouseu, desarrollador Full Stack en Galicia. Trabajo principalmente con React en el frontend y Symfony / PHP en el backend cuando el proyecto pide una base sólida y mantenible.

La intención de este proyecto es mantener un espacio personal y profesional propio, donde poder publicar notas y experimentos a mi ritmo y donde cualquiera pueda conocer en qué he trabajado y cómo contactar conmigo.

## Licencia

Este repositorio no define actualmente un fichero de licencia específico. Antes de abrir el código a terceros o permitir reutilización externa, conviene añadir una licencia explícita en la raíz del proyecto.
