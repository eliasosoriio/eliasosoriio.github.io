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
                title={"LAMARTA"}
                products={"Web and Ride Service"}
                mainText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                buttonText={"Vista previa"}
                buttonLink={"https://lamarta.es"}
            />
            <Card
                image={"https://asovedra.wordpress.com/wp-content/uploads/2018/09/ber_asovedra_logo.png"}
                title={"ASOVEDRA"}
                products={"Web Service"}
                mainText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
                buttonText={"Vista previa"}
                buttonLink={"https://asovedra.org"}
            />
        </section>
    </section>
  )
}

export default Projects