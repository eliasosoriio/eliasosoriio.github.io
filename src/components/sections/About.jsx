import React from 'react'

function About() {
  return (
    <section className='flex flex-col gap-5 items-start' id='about'>
        <h2 className='text-3xl font-bold'>¿Quién soy?</h2>
        <div className='flex sm:flex-col md:items-center gap-5 md:gap-10 md:flex-row-reverse'>
            <p>{/* Soy Elías Osorio, fundador de R11 Service.  */}Desde hace años me apasiona la tecnología y cómo esta puede transformar negocios reales. Después de trabajar en proyectos propios y colaborar con empresas locales como LAMARTA, entendí algo clave: las marcas necesitan soluciones digitales que mantengan su esencia y, al mismo tiempo, les permitan crecer y destacar en un mercado cada vez más competitivo.</p>
            <img src="https://r11.es/assets/about_1.png" alt="About macbook image" className='rounded-3xl md:max-w-72' />
        </div>
        <div className='flex sm:flex-col md:items-center gap-5 md:gap-10 md:flex-row'>
            <p>Con Web Service, Club Service y Ride Service, ayudamos a que los negocios locales y las marcas emergentes den un salto de calidad, conecten mejor con sus clientes y gestionen todo de manera más eficiente.</p>
            <img src="https://r11.es/assets/about_2.png" alt="About iphone image" className='rounded-3xl md:max-w-72' />
        </div>
    </section>
  )
}

export default About
