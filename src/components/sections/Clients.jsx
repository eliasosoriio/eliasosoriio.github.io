import React from 'react'

const clients = [
  {
    name: 'LAMARTA',
    logo: 'https://lamarta.es/assets/logo-lamarta-2.svg',
    description:
      'Aplicación web corporativa con frontend en React, API en PHP y CMS propio para gestionar la carta y el blog.',
    href: 'https://lamarta.es',
  },
  {
    name: 'ASOVEDRA',
    logo: 'https://asovedra.org/favicon.png',
    description:
      'Aplicación web corporativa con frontend en React y API en PHP. Gestión de citas con notificaciones por correo e integración a calendarios mediante archivos .ics.',
    href: 'https://asovedra.org',
  },
]

function Clients() {
  return (
    <section id='clients' className='flex flex-col gap-6'>
      <header className='flex flex-col gap-2'>
        <span className='text-sm uppercase tracking-widest text-primary-gray'>
          Clientes
        </span>
        <h2 className='text-2xl font-bold'>Empresas que confían en mi trabajo</h2>
      </header>

      <div className='grid gap-4 md:grid-cols-2'>
        {clients.map(({ name, logo, description, href }) => (
          <a
            key={name}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-col gap-4 rounded-default border border-primary-light-gray p-6 transition hover:border-primary-dark hover:bg-primary-light-gray/40'
          >
            <div className='flex h-12 items-center'>
              <img src={logo} alt={`Logo de ${name}`} className='h-full max-w-[160px] object-contain' />
            </div>
            <h3 className='text-lg font-semibold text-primary-dark'>{name}</h3>
            <p className='text-sm text-primary-gray'>{description}</p>
            <span className='mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary-dark'>
              Ver web{' '}
              <span aria-hidden='true' className='transition-transform group-hover:translate-x-1'>→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Clients
