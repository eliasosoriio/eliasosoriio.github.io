import React from 'react'
import { Link } from 'react-router-dom'

function ContactCTA() {
  return (
    <section
      id='contact'
      className='flex flex-col gap-3 rounded-default bg-primary-light-gray/40 p-6 md:flex-row md:items-center md:justify-between'
    >
      <div className='flex flex-col gap-1'>
        <h2 className='text-xl font-bold text-primary-dark'>¿Trabajamos juntos?</h2>
        <p className='text-sm text-primary-gray'>
          Cuéntame tu proyecto y vemos cómo darle forma.
        </p>
      </div>
      <Link
        to='/contacto'
        className='inline-flex items-center justify-center gap-2 rounded-default bg-primary-dark px-6 py-3 font-semibold text-white transition hover:opacity-90'
      >
        Contactar <span aria-hidden='true'>→</span>
      </Link>
    </section>
  )
}

export default ContactCTA
