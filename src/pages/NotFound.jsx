import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className='mt-10 px-4 flex flex-col items-start gap-6 py-16 text-primary-gray animate-fade-in-up'>
      <span className='text-sm uppercase tracking-widest text-primary-gray'>Error 404</span>
      <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'>
        Esta página se ha perdido.
      </h1>
      <p className='text-lg leading-relaxed'>
        El enlace que has seguido no lleva a ninguna parte, o el contenido ya
        no está disponible. Puede pasar.
      </p>
      <Link
        to='/'
        className='inline-flex items-center gap-2 rounded-default bg-primary-dark px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90'
      >
        <span aria-hidden='true'>←</span> Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
