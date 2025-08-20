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
                mainText={"Desde el primer contacto, entendimos que LAMARTA necesitaba una presencia digital fiel a su identidad: elegante, auténtica y con carácter propio. Con nuestro Web Service, creamos una página web a medida que refleja sus valores, estilo y esencia, brindando una experiencia visual memorable a cada visitante. Pero no nos quedamos ahí: al implementar Club Service, transformamos su relación con los clientes. Este sistema de fidelización recompensa cada compra y cada interacción, generando vínculos duraderos y motivando a volver. El resultado: una comunidad de clientes que sienten que su preferencia es valorada y que contribuyen a un crecimiento real y sostenido."}
                buttonText={"Vista previa"}
                buttonLink={"https://lamarta.es"}
            />
            <Card
                image={"https://asovedra.wordpress.com/wp-content/uploads/2018/09/ber_asovedra_logo.png"}
                title={"ASOVEDRA"}
                products={"Web Service"}
                mainText={"Para ASOVEDRA, una asociación de venezolanos en Pontevedra orientada al apoyo, la integración cultural y la creación de redes solidarias, desarrollamos una web acogedora y funcional a través de nuestro Web Service. Diseñamos una plataforma accesible que refleja su misión de encuentro, fraternidad y acompañamiento en Galicia. La web ofrece información clara sobre sus programas (como “Reinvéntate y Trabaja o Galicia Activa”), eventos, canales de contacto y redes sociales, convirtiéndose en un punto de referencia digital que fortalece la visibilidad de sus proyectos y genera confianza entre la comunidad."}
                buttonText={"Vista previa"}
                buttonLink={"https://asovedra.org"}
            />
        </section>
    </section>
  )
}

export default Projects