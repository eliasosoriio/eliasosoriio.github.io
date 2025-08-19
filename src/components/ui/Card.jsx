import React from 'react'

function Card({image, title, mainText, buttonText, buttonLink}) {
  return (
    <article className='flex flex-col gap-5 items-start justify-center'>
        <img src={image} alt={`Imagen de ${title}`} className='h-14' />
        <h3 className='text-1xl'>{title}</h3>
        <p>{mainText}</p>
        <a href={buttonLink}>{buttonText}</a>
    </article>
  )
}

export default Card