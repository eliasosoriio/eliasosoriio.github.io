import React from 'react'
import Hero from '../components/layout/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Services from '../components/sections/Services'
import { Quote } from '../components/ui/Quote'

function Home() {
  return (
    <main className='mt-10 px-4 flex flex-col gap-16 text-primary-gray animate-fade-in-up'>
        <Hero />
        <Services />
        <Quote phrase={'"En LAMARTA confiamos en Elías para potenciar nuestra presencia digital. Gracias a su enfoque personalizado, hemos logrado una web que refleja nuestra esencia y un sistema de fidelización que ha fortalecido nuestra relación con los clientes."'} avatar={"https://r11.es/assets/jose_profile.jpg"} name={"Jose"} job={"CEO de LAMARTA"} />
        <Projects />
        <About />
        <Contact />
    </main>
  )
}

export default Home