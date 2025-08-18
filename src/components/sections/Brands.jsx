import React from 'react'

function Brands() {
  return (
    <section className='flex flex-col gap-5'>
        <h2 className='text-3xl font-bold'>Historias reales de éxito.</h2>
        <p>Historias reales de éxito: LAMARTA y ASOVEDRA confiaron en mí para potenciar su presencia digital. Hoy en día en Galicia, son referentes en su sector.</p>
        <section className='flex items-center gap-8'>
            <a href='lamarta.es'>
                <img src="https://lamarta.es/assets/logo-lamarta-2.svg" alt="LAMARTA" className='h-12' />
            </a>
            <a href='asovedra.com'>
                <img src="https://asovedra.wordpress.com/wp-content/uploads/2018/09/ber_asovedra_logo.png" alt="ASOVEDRA" className='h-12' />
            </a>
        </section>
    </section>
  )
}

export default Brands
