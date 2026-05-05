import React from 'react'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const EMAIL = 'contacto@r11.es'

const channels = [
  {
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    Icon: EnvelopeIcon,
    hint: 'La forma más rápida de contactar.',
  },
  {
    label: 'GitHub',
    value: 'github.com/eliasosoriio',
    href: 'https://github.com/eliasosoriio',
    external: true,
    hint: 'Código abierto y experimentos.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/eliasosorio',
    href: 'https://www.linkedin.com/in/eliasosorio',
    external: true,
    hint: 'Trabajo y trayectoria.',
  },
]

function Contact() {
  return (
    <section className='mt-10 px-4 flex flex-col gap-12 text-primary-gray animate-fade-in-up' id='contact'>
      <header className='flex flex-col gap-3'>
        <span className='text-sm uppercase tracking-widest text-primary-gray'>Contacto</span>
        <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl'>
          Hablemos. <span className='text-primary-dark'>Cuéntame tu idea.</span>
        </h1>
        <p className='w-full text-base text-primary-gray'>
          Si tienes un proyecto entre manos, una duda técnica o simplemente quieres saludar, escríbeme. Suelo responder en menos de 24 horas los días laborables.
        </p>
      </header>

      <ul className='flex flex-col divide-y divide-primary-light-gray rounded-default border border-primary-light-gray'>
        {channels.map(({ label, value, href, Icon, hint, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className='group flex items-center gap-4 px-5 py-5 transition hover:bg-primary-light-gray/40'
            >
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light-gray text-primary-dark'>
                {Icon ? (
                  <Icon className='h-5 w-5' />
                ) : (
                  <span className='text-sm font-bold'>{label[0]}</span>
                )}
              </span>
              <div className='flex min-w-0 flex-1 flex-col'>
                <span className='text-sm uppercase tracking-wider text-primary-gray'>
                  {label}
                </span>
                <span className='truncate text-base font-medium text-primary-dark'>
                  {value}
                </span>
                {hint && (
                  <span className='mt-0.5 text-xs text-primary-gray'>{hint}</span>
                )}
              </div>
              <span
                aria-hidden='true'
                className='text-primary-gray transition-transform group-hover:translate-x-1'
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className='flex flex-col gap-6 rounded-default bg-primary-light-gray/40 p-6 md:flex-row md:items-start md:justify-between md:gap-10'>
        <div className='flex flex-col gap-2'>
          <span className='text-sm uppercase tracking-wider text-primary-gray'>
            Estado
          </span>
          <span className='inline-flex items-center gap-2 text-primary-dark'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75'></span>
              <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>
            </span>
            Disponible para nuevos proyectos
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='text-sm uppercase tracking-wider text-primary-gray'>
            Ubicación
          </span>
          <span className='inline-flex items-center gap-2 text-primary-dark'>
            <MapPinIcon className='h-4 w-4' />
            Galicia, España · UTC+1
          </span>
        </div>

        <div className='flex flex-col gap-2'>
          <span className='text-sm uppercase tracking-wider text-primary-gray'>
            En qué puedo ayudarte
          </span>
          <span className='text-primary-dark'>
            Webs · React · Symfony · Consultoría técnica
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
