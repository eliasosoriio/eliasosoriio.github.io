import React from 'react'
import { Profile } from '../ui/Profile'

function Hero() {
  return (
    <header>
        <section className='flex flex-col gap-5 items-start'>
            <Profile />
            <h1 className='text-4xl font-bold'>Fideliza como las grandes marcas, <span className='text-primary-dark'>sin ser una.</span></h1>
            <p className='max-w-4xl'>La forma más completa de crecer como comercio local: mejora tu presencia online, recompensa a tus clientes y gestiona tus pedidos con facilidad.</p>
        </section>
    </header>
  )
}

export default Hero
