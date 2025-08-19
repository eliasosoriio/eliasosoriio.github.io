import React from 'react'
import Card from '../ui/Card'

function Projects() {
  return (
    <section className='flex flex-col gap-5'>
        <h2 className='text-3xl font-bold'>Historias reales de éxito.</h2>
        <p>LAMARTA y ASOVEDRA confiaron en mí para potenciar su presencia digital. Hoy en día en Galicia, son referentes en su sector.</p>
        <section className='flex items-center justify-between w-full flex-wrap gap-8'>
            <Card
                image={"https://lamarta.es/assets/logo-lamarta-2.svg"}
                title={"LAMARTA Web and Ride Service"}
                mainText={"Lorem"}
                buttonText={"Ver más"}
                buttonLink={"https://lamarta.es"}
            />
            <Card
                image={"https://asovedra.wordpress.com/wp-content/uploads/2018/09/ber_asovedra_logo.png"}
                title={"ASOVEDRA Web Service"}
                mainText={"Lorem"}
                buttonText={"Ver más"}
                buttonLink={"https://asovedra.org"}
            />
        </section>
    </section>
  )
}

export default Projects