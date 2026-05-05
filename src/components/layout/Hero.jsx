import React from 'react'
import { Link } from 'react-router-dom'
import { Profile } from '../ui/Profile'

function Hero() {
  return (
    <header className='flex flex-col gap-10'>
      <span className='text-sm uppercase tracking-widest text-primary-gray'>
        Inicio · España · UTC+1
      </span>
      <div className='flex w-full flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-4'>
        <Profile avatar={"/profile.jpeg"} name={"Elías Osorio"} job={"Desarrollador Full Stack"} />
        <div className='flex flex-col items-start gap-3 md:items-end'>
          <span className='inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75'></span>
              <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>
            </span>
            Disponible para nuevos proyectos
          </span>
          <div className='flex items-center gap-3'>
            <a href='https://github.com/eliasosoriio' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='text-primary-gray transition hover:text-primary-dark'>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M12 .5C5.65.5.5 5.65.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.22 21.4 23.5 17.1 23.5 12.02 23.5 5.65 18.35.5 12 .5z'/>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/eliasosorio' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='text-primary-gray transition hover:text-primary-dark'>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z'/>
              </svg>
            </a>
            <a href='mailto:contacto@r11.es' aria-label='Email' className='text-primary-gray transition hover:text-primary-dark'>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <rect x='2' y='4' width='20' height='16' rx='2'/>
                <path d='m22 7-10 5L2 7'/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-6xl'>
          Bienvenido/a.{' '}
          <span className='text-primary-dark'>Encantado de tenerte por aquí.</span>
        </h1>
        <p className='max-w-3xl text-base leading-relaxed md:text-lg'>
          Soy Elías, desarrollador Full Stack. Construyo productos digitales
          de principio a fin con React y Symfony. Aquí dejo lo que voy
          haciendo: proyectos, aprendizajes y experimentos.
        </p>
      </div>

      <nav className='grid gap-3 md:grid-cols-3'>
        <Link
          to='/sobre-mi'
          className='group flex items-center justify-between rounded-default border border-primary-light-gray px-5 py-4 transition hover:border-primary-dark hover:bg-primary-light-gray/40'
        >
          <div className='flex flex-col'>
            <span className='text-xs uppercase tracking-wider text-primary-gray'>
              Conóceme
            </span>
            <span className='text-base font-semibold text-primary-dark'>Sobre mí</span>
          </div>
          <span aria-hidden='true' className='text-primary-gray transition-transform group-hover:translate-x-1'>→</span>
        </Link>
        <Link
          to='/blog'
          className='group flex items-center justify-between rounded-default border border-primary-light-gray px-5 py-4 transition hover:border-primary-dark hover:bg-primary-light-gray/40'
        >
          <div className='flex flex-col'>
            <span className='text-xs uppercase tracking-wider text-primary-gray'>
              Lee
            </span>
            <span className='text-base font-semibold text-primary-dark'>Últimos posts</span>
          </div>
          <span aria-hidden='true' className='text-primary-gray transition-transform group-hover:translate-x-1'>→</span>
        </Link>
        <Link
          to='/contacto'
          className='group flex items-center justify-between rounded-default border border-primary-light-gray px-5 py-4 transition hover:border-primary-dark hover:bg-primary-light-gray/40'
        >
          <div className='flex flex-col'>
            <span className='text-xs uppercase tracking-wider text-primary-gray'>
              Hablemos
            </span>
            <span className='text-base font-semibold text-primary-dark'>Contacto</span>
          </div>
          <span aria-hidden='true' className='text-primary-gray transition-transform group-hover:translate-x-1'>→</span>
        </Link>
      </nav>
    </header>
  )
}

export default Hero
