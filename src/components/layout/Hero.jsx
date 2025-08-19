import React from 'react'
import { Profile } from '../ui/Profile'

function Hero() {
  return (
    <header>
        <section className='flex flex-col gap-5 items-start'>
            <Profile avatar={"https://r11.es/assets/profile.jpeg"} name={"Elías Osorio"} job={"Desarrollador Web"} />
            <h1 className='text-4xl font-bold'>Fideliza como las grandes marcas, <span className='text-primary-dark'>sin ser una.</span></h1>
            <p className='max-w-4xl'>La forma más completa de crecer como comercio local: mejora tu presencia online, recompensa a tus clientes y gestiona tus pedidos con facilidad.</p>
            <p className='max-w-4xl'>Con Web Service, Club Service y Ride Service, ayudamos a que los negocios locales y las marcas emergentes den un salto de calidad, conecten mejor con sus clientes y gestionen todo de manera más eficiente.</p>
        </section>
    </header>
  )
}

export default Hero
