import React from 'react'
import { Link } from 'react-router-dom'
import { CodeBracketIcon, ServerStackIcon, SparklesIcon } from '@heroicons/react/24/outline'

const skills = [
  {
    Icon: CodeBracketIcon,
    title: 'Frontend',
    text: 'React, Tailwind y un foco obsesivo en que cada detalle se sienta cuidado.',
  },
  {
    Icon: ServerStackIcon,
    title: 'Backend',
    text: 'Symfony y PHP cuando el proyecto pide una base sólida y mantenible.',
  },
  {
    Icon: SparklesIcon,
    title: 'Producto',
    text: 'Pienso en el usuario antes que en el stack. La tecnología sirve a la idea.',
  },
]

const languages = [
  {
    year: 'Nativo',
    title: 'Español',
    text: 'Lengua nativa.',
  },
  {
    year: 'Nativo',
    title: 'Galego',
    text: 'Lengua nativa.',
  },
  {
    year: 'Profesional',
    title: 'Inglés',
    text: 'Comprensión y comunicación fluida en entornos técnicos.',
  },
]

const education = [
  {
    year: 'sept. 2023 — jun. 2025',
    title: 'Desarrollo de Aplicaciones Web',
    text: 'Ciclo Formativo de Grado Superior. Base de programación, bases de datos, despliegue y desarrollo web frontend y backend.',
  },
]

const clientWork = [
  {
    year: '2024 — actualidad',
    title: 'LAMARTA',
    text: 'Aplicación web corporativa con frontend en React, API en PHP y CMS propio para gestionar la carta y el blog.',
  },
  {
    year: '2025 — actualidad',
    title: 'ASOVEDRA',
    text: 'Aplicación web corporativa con frontend en React y API en PHP. Gestión de citas con notificaciones por correo e integración a calendarios (archivos .ics).',
  },
]

const timeline = [
  {
    year: 'jun. 2025 — actualidad',
    title: 'Desarrollador Full Stack · Jornada completa',
    text: 'Desarrollo y evolución de plataformas web en entornos de gestión educativa y económica con PHP, Symfony, Doctrine y MySQL. Diseño e implementación de gestión de usuarios, perfiles y permisos; sincronización de datos históricos vía APIs y tareas automatizadas (más de 5.000 certificados integrados); sistema de mensajería entre Drupal y Symfony para docentes, alumnado y tutores; multiidioma, módulos personalizados de Drupal y despliegues en Linux. Colaboración directa con clientes en reuniones, soporte y resolución de incidencias.',
  },
  {
    year: 'abr. 2025 — jun. 2025',
    title: 'Estudiante en prácticas · Contrato de prácticas',
    text: 'Desarrollo y mantenimiento de plataformas web en entornos de gestión educativa y económica con PHP y Symfony. Colaboración en funcionalidades, corrección de errores, soporte de incidencias e integración de datos. Primer contacto con el ciclo de vida completo del software y el trabajo con clientes y equipo.',
  },
]

function About() {
  return (
    <section className='mt-10 px-4 flex flex-col gap-12 text-primary-gray animate-fade-in-up' id='about'>
      <header className='flex flex-col gap-3'>
        <span className='text-sm uppercase tracking-widest text-primary-gray'>Sobre mí</span>
        <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'>
          Hola, soy Elías. <span className='text-primary-dark'>Construyo productos digitales de principio a fin.</span>
        </h1>
        <p className='w-full text-base text-primary-gray'>
          Desarrollador Full Stack en Galicia. Llevo años construyendo
          aplicaciones cuidadas hasta el último detalle, desde plataformas
          internas hasta productos de cara al usuario, primero por
          curiosidad personal y ahora también para clientes y equipos que
          confían en mi trabajo.
        </p>
      </header>

      <div className='grid gap-6 md:grid-cols-[1fr_2fr] md:items-start'>
        <img
          src='/profile.jpeg'
          alt='Foto de Elías Osorio'
          className='w-full rounded-default object-cover aspect-[4/5] md:max-w-xs'
        />
        <div className='flex flex-col gap-5 text-base leading-relaxed'>
          <p>
            Empecé a programar por las ganas de entender cómo funcionaba
            el software que usaba cada día. Lo que comenzó como curiosidad
            se transformó en mi carrera y, sobre todo,
            en una herramienta para ayudar a otros a resolver problemas
            reales con tecnología.
          </p>
          <p>
            Mi forma de trabajar es escuchar primero. Antes de abrir el
            editor, intento entender el contexto: a quién va dirigida la
            aplicación, qué problema resuelve y qué la hace distinta. Solo
            después decido qué stack tiene sentido. La tecnología es el
            medio, nunca el fin.
          </p>
          <p>
            Disfruto los proyectos donde puedo acompañar de principio a
            fin: diseñar la arquitectura, programar el backend y el
            frontend, desplegar y mantener. Un solo interlocutor,
            decisiones rápidas y resultados que se ven.
          </p>
        </div>
      </div>

      <div>
        <h2 className='mb-6 text-sm uppercase tracking-widest text-primary-gray'>
          Cómo trabajo
        </h2>
        <div className='grid gap-4 md:grid-cols-3'>
          {skills.map(({ Icon, title, text }) => (
            <div
              key={title}
              className='flex flex-col gap-3 rounded-default border border-primary-light-gray p-6'
            >
              <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-light-gray text-primary-dark'>
                <Icon className='h-5 w-5' />
              </span>
              <h3 className='text-lg font-semibold text-primary-dark'>{title}</h3>
              <p className='text-sm text-primary-gray'>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='mb-6 text-sm uppercase tracking-widest text-primary-gray'>
          Trayectoria
        </h2>
        <ol className='flex flex-col divide-y divide-primary-light-gray rounded-default border border-primary-light-gray'>
          {timeline.map(({ year, title, text }) => (
            <li
              key={title}
              className='grid gap-2 px-5 py-5 md:grid-cols-[10rem_1fr] md:gap-8'
            >
              <span className='text-sm text-primary-gray'>{year}</span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-semibold text-primary-dark'>{title}</h3>
                <p className='text-sm text-primary-gray'>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className='mb-6 text-sm uppercase tracking-widest text-primary-gray'>
          Clientes
        </h2>
        <ol className='flex flex-col divide-y divide-primary-light-gray rounded-default border border-primary-light-gray'>
          {clientWork.map(({ year, title, text }) => (
            <li
              key={title}
              className='grid gap-2 px-5 py-5 md:grid-cols-[10rem_1fr] md:gap-8'
            >
              <span className='text-sm text-primary-gray'>{year}</span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-semibold text-primary-dark'>{title}</h3>
                <p className='text-sm text-primary-gray'>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className='mb-6 text-sm uppercase tracking-widest text-primary-gray'>
          Formación
        </h2>
        <ol className='flex flex-col divide-y divide-primary-light-gray rounded-default border border-primary-light-gray'>
          {education.map(({ year, title, text }) => (
            <li
              key={title}
              className='grid gap-2 px-5 py-5 md:grid-cols-[10rem_1fr] md:gap-8'
            >
              <span className='text-sm text-primary-gray'>{year}</span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-semibold text-primary-dark'>{title}</h3>
                <p className='text-sm text-primary-gray'>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className='mb-6 text-sm uppercase tracking-widest text-primary-gray'>
          Idiomas
        </h2>
        <ol className='flex flex-col divide-y divide-primary-light-gray rounded-default border border-primary-light-gray'>
          {languages.map(({ year, title, text }) => (
            <li
              key={title}
              className='grid gap-2 px-5 py-5 md:grid-cols-[10rem_1fr] md:gap-8'
            >
              <span className='text-sm text-primary-gray'>{year}</span>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-semibold text-primary-dark'>{title}</h3>
                <p className='text-sm text-primary-gray'>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className='flex flex-col gap-3 rounded-default bg-primary-light-gray/40 p-6 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-xl font-bold text-primary-dark'>¿Tienes una idea en mente?</h2>
          <p className='text-sm text-primary-gray'>
            Escríbeme y vemos cómo darle forma juntos.
          </p>
        </div>
        <Link
          to='/contacto'
          className='inline-flex items-center justify-center gap-2 rounded-default bg-primary-dark px-6 py-3 font-semibold text-white transition hover:opacity-90'
        >
          Contactar <span aria-hidden='true'>→</span>
        </Link>
      </div>
    </section>
  )
}

export default About
